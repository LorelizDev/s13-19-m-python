from django.db import models

from apps.orders.models import OrderUser


class PaymentType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Payment(models.Model):
    id = models.AutoField(primary_key=True)
    orders = models.ManyToManyField(OrderUser)
    type_id = models.ForeignKey(PaymentType, on_delete=models.CASCADE)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        orders_info = [
            f"{order.id} - {order.user_id.username}" for order in self.orders.all()
        ]
        return f"Payment id: {self.id} - Orders: {orders_info} - Type: {self.type_id.name} - Total amount: {self.total_amount}"
