from django.db import models
from cloudinary.models import CloudinaryField


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    product_name = models.CharField(max_length=200)
    image = CloudinaryField("image")
    description = models.TextField(blank=True)
    price = models.FloatField()
    categories = models.ManyToManyField(Category, through="Product_Category")

    def __str__(self):
        return self.product_name


class Product_Category(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product_id.product_name}: {self.category_id.name}"
