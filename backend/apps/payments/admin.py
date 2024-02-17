from django.contrib import admin
from .models import Payment, PaymentType

admin.site.register(Payment)
admin.site.register(PaymentType)
