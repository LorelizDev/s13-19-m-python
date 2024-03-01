from .serializers import *
from rest_framework import viewsets, status
from rest_framework.response import Response


class OrderProductViewset(viewsets.ModelViewSet):
    queryset = OrderProducts.objects.all()
    serializer_class = OrderProductsSerializer

    def create(self, request, *args, **kwargs):
        serializer = OrderProductsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Order created successfully!", "Order": serializer.data},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserOrderListViewset(viewsets.ModelViewSet):
    queryset = OrderUser.objects.all()
    serializer_class = OrderUserSerializer
