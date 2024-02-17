from django.db import models
from apps.orders.models import OrderUser


class PaymentType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)


class Payment(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey(OrderUser, on_delete=models.CASCADE)
    type_id = models.ForeignKey(PaymentType, on_delete=models.CASCADE)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.total_amount = sum([order.subtotal() for order in self.order_id.all()])
        super(Payment, self).save(*args, **kwargs)
