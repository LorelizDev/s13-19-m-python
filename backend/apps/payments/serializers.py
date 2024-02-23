from rest_framework import serializers

from apps.payments.models import Payment, PaymentType
from apps.orders.models import OrderUser


class PaymentSerializer(serializers.ModelSerializer):
    """
    Serializer for Payment model.
    """

    total_amount = serializers.DecimalField(
        max_digits=10, decimal_places=2, read_only=True
    )
    type_id = serializers.PrimaryKeyRelatedField(queryset=PaymentType.objects.all())

    class Meta:
        model = Payment
        fields = "__all__"

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

    def create(self, validated_data):
        """
        Create a payment instance.
        """
        order_ids = validated_data.pop("orders", [])
        orders = OrderUser.objects.filter(id__in=order_ids, is_paid=False)
        validated_data["orders"] = orders
        total_amount = sum(order.subtotal() for order in orders)
        validated_data["total_amount"] = total_amount
        payment = Payment.objects.create(**validated_data)

        # Update is_paid field of related orders
        for order in orders:
            order.is_paid = True
            order.save()

        payment.orders.add(*orders)
        payment.orders.set(orders)
        return payment


class PaymentTypeSerializer(serializers.ModelSerializer):
    """
    Serializer for PaymentType model.
    """

    class Meta:
        model = PaymentType
        fields = "__all__"
