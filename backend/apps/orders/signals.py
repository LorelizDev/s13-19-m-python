from django.db.models.signals import post_save
from django.dispatch import receiver
from ..orders.models import OrderUser
from ..reception.models import User


@receiver(post_save, sender=User)
def create_order_user(sender, instance, created, **kwargs):
    if created:
        OrderUser.objects.create(user_id=instance, table_id=instance.table)
