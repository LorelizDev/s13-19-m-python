from django.db import models
from ..reception.models import User, Table
from ..products.models import Product


# Grouping every product from individual user
class OrderUser(models.Model):
    table_id = models.ForeignKey(Table, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    is_paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)


# Creaating individual order for individual user
class OrderProducts(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    comments = models.TextField(blank=True, null=True)
    is_ready = models.BooleanField(default=False)
    order_user = models.ForeignKey(OrderUser, on_delete=models.CASCADE, default=1)
