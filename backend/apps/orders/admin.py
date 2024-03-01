from django.contrib import admin
from .models import *

models_to_register = [OrderUser, OrderProducts]
admin.site.register(models_to_register)
