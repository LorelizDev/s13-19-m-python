from apps.products.models import Product
from rest_framework import serializers
from .models import OrderUser, OrderProducts
from django.db.models import Sum


class ProductNameField(serializers.RelatedField):
    # Searching product's name with id given
    def to_representation(self, value):
        return value.product_name

    # Formatting product name to use inside serializer (Object from product model)
    def to_internal_value(self, data):
        try:
            product_instance = Product.objects.filter(product_name=data).first()
            product = Product.objects.get(id=product_instance.id)
            return product
        except Product.DoesNotExist:
            raise serializers.ValidationError("Product does not exist.")


class OrderProductsSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.product_name", read_only=True)
    user_order = serializers.CharField(source="order_user_id.user_id", read_only=True)

    class Meta:
        model = OrderProducts
        fields = "__all__"


class OrderUserSerializer(serializers.ModelSerializer):
    products = ProductNameField(queryset=Product.objects.all(), many=True)

    class Meta:
        model = OrderUser
        fields = "__all__"

    def create(self, validated_data):
        products_data = validated_data.pop("products")
        order_user = OrderUser.objects.create(**validated_data)
        for product in products_data:
            order_user.products.add(product)
        return order_user


class OrdersByTableSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()

    class Meta:
        model = OrderUser
        fields = ["table_id", "total", "products"]

    def get_products(self, obj):
        orders = OrderUser.objects.filter(table_id=obj.table_id).distinct()
        products = OrderProducts.objects.filter(order_user_id__in=orders)
        grouped_products = products.values(
            "product__product_name", "quantity", "comments", "is_ready"
        ).annotate(total_quantity=Sum("quantity"))
        return grouped_products

    def get_total(self, obj):
        orders = OrderUser.objects.filter(table_id=obj.table_id).distinct()
        products = OrderProducts.objects.filter(order_user_id__in=orders)
        subtotal = products.aggregate(total=Sum("product__price"))
        return subtotal["total"]


class OrdersByUserSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()
    subtotal = serializers.SerializerMethodField()

    class Meta:
        model = OrderUser
        fields = ["user_id", "subtotal", "products"]

    def get_products(self, obj):
        orders = OrderUser.objects.filter(user_id=obj.user_id).distinct()
        products = OrderProducts.objects.filter(order_user_id__in=orders)
        grouped_products = products.values(
            "product__product_name", "quantity", "comments", "is_ready"
        ).annotate(total_quantity=Sum("quantity"))
        return grouped_products

    def get_subtotal(self, obj):
        orders = OrderUser.objects.filter(user_id=obj.user_id).distinct()
        products = OrderProducts.objects.filter(order_user_id__in=orders)
        subtotal = products.aggregate(total=Sum("product__price"))
        return subtotal["total"]
