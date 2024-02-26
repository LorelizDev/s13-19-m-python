from django.contrib import admin
from .models import *

# Register your models here.

models_to_register = [Category, Product, Product_Category]
admin.site.register(models_to_register)
