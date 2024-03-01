from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser


# Table Models
class Table(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=12)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.name}: {"Ocupada" if self.is_active  else "Desocupada"}'

    def activate(self):
        """
        Method to activate the table when a user is added
        """
        if not self.is_active:
            self.is_active = not self.is_active
        self.save()

    def deactivate(self):
        """
        Method to deactivate the table when the user is removed
        """
        if self.is_active:
            self.is_active = not self.is_active
        self.save()

    def clear_table(self):
        """
        Clean all users from the table
        """
        users = self.user_set.all()
        for user in users:
            user.delete()
        self.deactivate()

    def has_users(self):
        """
        Check if table has users
        """
        return self.user_set.exists()


# User Models
class User(models.Model):
    id = models.AutoField(primary_key=True)
    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    username = models.CharField(max_length=12, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

    def assign_to_table(self, table):
        """
        Method to call activate method from Table
        """
        self.table = table
        self.save()
        table.activate()


@receiver(post_save, sender=User)
@permission_classes([IsAdminUser()])
def activate_table(sender, instance, created, **kwargs):
    """
    Using Django signals, it can be assigned the status True to a Table
    when use the Admin console
    """
    table = instance.table
    if table and not table.is_active:
        table.activate()
