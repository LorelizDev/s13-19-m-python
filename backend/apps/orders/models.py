from django.db import models
from apps.menu.models import User, Table
from apps.products.models import Product


class OrderUser(models.Model):
    id = models.AutoField(primary_key=True)
    table_id = models.ForeignKey(
        Table, on_delete=models.CASCADE, default=0, null=False, blank=False
    )
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE, default=0, null=False, blank=False
    )
    products = models.ManyToManyField(Product, through="ProductOrderUser")
    is_paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)

    def subtotal(self):
        return sum([order.total_product() for order in self.productorderuser_set.all()])


class ProductOrderUser(models.Model):
    order_id = models.ForeignKey(OrderUser, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    comments = models.TextField(blank=True, null=True)
    is_ready = models.BooleanField(default=False)

    def total_product(self):
        return self.quantity * self.product_id.price
