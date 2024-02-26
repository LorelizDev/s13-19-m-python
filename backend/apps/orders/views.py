from django.shortcuts import render
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OrderUser
from .serializers import OrderUserSerializer

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
