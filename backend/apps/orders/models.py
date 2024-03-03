from django.db import models
from ..reception.models import User, Table
from ..products.models import Product


# Grouping every product from individual user
class OrderUser(models.Model):
    table_id = models.ForeignKey(Table, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    is_paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)

    def subtotal(self):
        return sum([order.total_product() for order in self.orderproducts_set.all()])


# Creaating individual order for individual user
class OrderProducts(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    comments = models.TextField(blank=True, null=True)
    is_ready = models.BooleanField(default=False)
    order_user_id = models.ForeignKey(OrderUser, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.product.product_name

    def total_product(self):
        return self.quantity * self.product.price
