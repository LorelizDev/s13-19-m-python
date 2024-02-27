from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema

from .serializers import PaymentSerializer, PaymentTypeSerializer
from .models import Payment, PaymentType
from apps.orders.models import OrderUser


class PaymentTypeListView(APIView):
    """
    API endpoint to list payment types.
    """

    def get(self, request):
        payment_types = PaymentType.objects.all()
        serializer = PaymentTypeSerializer(payment_types, many=True)
        return Response(serializer.data)


class PaymentListView(APIView):
    """
    API endpoint to list payments.
    """

    permission_classes = [IsAdminUser]

    def get(self, request):
        payments = Payment.objects.all()
        serializer = PaymentSerializer(payments, many=True)
        return Response(serializer.data)


class PaymentCreateView(APIView):
    """
    API endpoint to create a payment.
    """

    @swagger_auto_schema(
        request_body=PaymentSerializer, response={201: PaymentSerializer()}
    )
    def post(self, request):
        serializer = PaymentSerializer(data=request.data)

        if serializer.is_valid():
            # Extract type_id from validated data
            type_id = serializer.validated_data["type_id"].id
            payment_type = PaymentType.objects.filter(id=type_id).first()

            if not payment_type:
                return Response(
                    {"error": "Invalid payment type ID"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Extract order IDs from validated data
            order_ids = [order.id for order in serializer.validated_data["orders"]]
            orders = OrderUser.objects.filter(id__in=order_ids, is_paid=False)
            # Calculate total amount by summing subtotals of all orders
            total_amount = sum(order.subtotal() for order in orders)

            payment = Payment(type_id=payment_type, total_amount=total_amount)
            payment.save()
            payment.orders.add(*orders)
            payment.orders.set(orders)

            serializer = PaymentSerializer(payment)

            # Update is_paid field of related orders
            for order in orders:
                order.is_paid = True
                order.save()

            return Response(
                {"success": "Payment created successfully"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PaymentDetailView(APIView):
    """
    API endpoint to retrieve details of a payment.
    """

    def get(self, request, pk):
        try:
            payment = Payment.objects.get(pk=pk)
            serializer = PaymentSerializer(payment)
            return Response(serializer.data)
        except Payment.DoesNotExist:
            return Response(
                {"error": "Payment not found"}, status=status.HTTP_404_NOT_FOUND
            )
