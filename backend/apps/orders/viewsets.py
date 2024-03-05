from .serializers import *
from rest_framework import viewsets, status
from rest_framework.response import Response


class UserOrderViewset(viewsets.ModelViewSet):
    queryset = OrderUser.objects.all()
    serializer_class = OrderUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = OrderUserSerializer(data=request.data)
        if serializer.is_valid():
            order_user = serializer.save()
            return Response(
                {"message": "Order created successfully!", "Order": serializer.data},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrdersByTableViewset(viewsets.ModelViewSet):
    queryset = OrderUser.objects.all()
    serializer_class = OrdersByTableSerializer

    def list(self, request):
        orders = OrderUser.objects.all()
        orders_by_table = {}

        for order in orders:
            table_id = order.table_id.id
            if table_id not in orders_by_table:
                orders_by_table[table_id] = {"table_id": table_id, "products": []}

            products = OrderProductsSerializer(
                order.orderproducts_set.all(), many=True
            ).data
            orders_by_table[table_id]["products"].extend(products)

        return Response(orders_by_table.values(), status=status.HTTP_200_OK)


class OrdersByUserViewset(viewsets.ModelViewSet):
    queryset = OrderUser.objects.all()
    serializer_class = OrdersByUserSerializer

    def list(self, request):
        orders = OrderUser.objects.all()
        orders_by_user = {}

        for order in orders:
            user_id = order.user_id.id
            if user_id not in orders_by_user:
                orders_by_user[user_id] = {"user_id": user_id, "products": []}

            products = OrderProductsSerializer(
                order.orderproducts_set.all(), many=True
            ).data
            orders_by_user[user_id]["products"].extend(products)

        return Response(orders_by_user.values(), status=status.HTTP_200_OK)
