from rest_framework import serializers
from .models import OrderUser, OrderProducts


class OrderProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProducts
        fields = "__all__"


class OrderUserSerializer(serializers.ModelSerializer):
    products = OrderProductsSerializer(many=True, source="orderproducts_set")

    class Meta:
        model = OrderUser
        fields = "__all__"
