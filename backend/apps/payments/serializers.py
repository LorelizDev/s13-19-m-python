from rest_framework import serializers

from .models import Payment, PaymentType
from ..orders.models import OrderUser


class PaymentSerializer(serializers.ModelSerializer):
    """
    Serializer for Payment model.
    """

    total_amount = serializers.DecimalField(
        max_digits=10, decimal_places=2, read_only=True
    )
    type_id = serializers.PrimaryKeyRelatedField(queryset=PaymentType.objects.all())
    usernames = serializers.SerializerMethodField()

    class Meta:
        model = Payment
        fields = ("id", "type_id", "total_amount", "usernames", "orders", "created_at")

    def get_usernames(self, payment):
        usernames = [order.user_id.username for order in payment.orders.all()]
        return usernames

    def validate(self, data):
        """
        Validate data for creating a payment.
        """
        order_ids = data.get("orders", [])
        if not order_ids:
            raise serializers.ValidationError("Order IDs are required")

        order_ids = [order.id for order in order_ids]
        orders = OrderUser.objects.filter(id__in=order_ids, is_paid=False)
        if len(orders) != len(order_ids):
            raise serializers.ValidationError("Invalid or paid order IDs")

        return data


class PaymentTypeSerializer(serializers.ModelSerializer):
    """
    Serializer for PaymentType model.
    """

    class Meta:
        model = PaymentType
        fields = "__all__"
