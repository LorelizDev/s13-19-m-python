from django.db import models


# Table Models
class Table(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=12)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}: {self.is_active}"

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


# Table Models
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
