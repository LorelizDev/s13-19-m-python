# Create your views here.
from django.shortcuts import render
# Create your views here.
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OrderUser
from .serializers import OrderUserSerializer
from drf_yasg.utils import swagger_auto_schema


class OrderUserListAPIView(APIView):
    def get(self, request):
        orders = OrderUser.objects.all()
        serializer = OrderUserSerializer(orders, many=True)
        return Response(serializer.data)


class OrderUserDetailAPIView(APIView):
    def get(self, request, pk):
        try:
            order = OrderUser.objects.get(pk=pk)
            serializer = OrderUserSerializer(order)
            return Response(serializer.data)
        except OrderUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        
    def patch(self, request, pk):
        try:
            order = OrderUser.objects.get(pk=pk)
        except OrderUser.DoesNotExist:
            return Response(
                {"error": "Order not found."}, status=status.HTTP_404_NOT_FOUND
            )

        serializer = OrderUserSerializer(order, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            print(serializer.errors)
            return Response(
                {"message": "Order updated successfully!"}, status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
        
class OrderCreateView(APIView):
    """
    API endpoint to create an order.
    """

    @swagger_auto_schema(
        request_body=OrderUserSerializer, response={201: OrderUserSerializer()}
    )
    def post(self, request):
        """
        Create a new order based on provided data.
        """
        serializer = OrderUserSerializer(data=request.data)

        if serializer.is_valid():
            
            serializer.save()
            return Response(
                {"message": "Order created successfully!"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
class OrderDeleteView(APIView):
    """
    API endpoint to delete an order.
    """

    def delete(self, request, pk):
        """
        Delete an order based on provided order ID.
        """
        try:
            order = OrderUser.objects.get(pk=pk)
        except OrderUser.DoesNotExist:
            return Response(
                {"error": "Order not found."}, status=status.HTTP_404_NOT_FOUND
            )
            
        return Response(
            {"message": "Order deleted successfully!"}, status=status.HTTP_204_NO_CONTENT
        )
