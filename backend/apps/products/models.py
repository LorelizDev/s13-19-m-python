from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    product_name = models.CharField(max_length=200)
    image = models.ImageField(null=True, blank=True, upload_to="assets/images/products")
    description = models.TextField(blank=True)
    price = models.FloatField()
    categories = models.ManyToManyField(Category, through="Product_Category")


class Product_Category(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
