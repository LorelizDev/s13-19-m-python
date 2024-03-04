from rest_framework import serializers
from .models import OrderUser, OrderProducts
from django.db.models import Sum


class OrderProductsSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.product_name", read_only=True)

    class Meta:
        model = OrderProducts
        # fields = ("id", "product_name", "quantity", "comments", "is_ready","order_user_id")
        fields = "__all__"


class OrderUserSerializer(serializers.ModelSerializer):
    products = OrderProductsSerializer(many=True, source="orderproducts_set")

    class Meta:
        model = OrderUser
        fields = (
            "id",
            "products",
            "is_paid",
            "created_at",
            "table_id",
            "user_id",
            "subtotal",
        )


class OrdersByTableSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()

    class Meta:
        model = OrderUser
        fields = ["table_id", "products"]

    def get_products(self, obj):
        orders = OrderUser.objects.filter(table_id=obj.table_id).distinct()
        products = OrderProducts.objects.filter(order_user_id__in=orders)
        grouped_products = products.values(
            "product__product_name", "quantity", "comments", "is_ready"
        ).annotate(total_quantity=Sum("quantity"))
        return grouped_products
