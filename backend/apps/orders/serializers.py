from rest_framework import serializers
from .models import OrderUser, ProductOrderUser
from apps.products.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product  #correcto seria Products
        fields = '__all__'

class ProductOrderUserSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = ProductOrderUser
        fields = ('id', 'product', 'quantity', 'comments', 'is_ready')

class OrderUserSerializer(serializers.ModelSerializer):
    products = ProductOrderUserSerializer(many=True, read_only=True)

    class Meta:
        model = OrderUser
        fields = ('id', 'table_id', 'user_id', 'products', 'is_paid', 'created_at', 'subtotal')
