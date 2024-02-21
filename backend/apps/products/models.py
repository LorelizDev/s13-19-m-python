from django.db import models


# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=200)
    image = models.ImageField(null=True, blank=True, upload_to="products/img")
    description = models.TextField(blank=True)
    price = models.FloatField()


class Category(models.Model):
    name = models.CharField(max_length=100)


class Product_Category(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
