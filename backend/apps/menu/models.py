from django.db import models


class Table(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def activate(self):
        """
        Method to activate the table when a user is added
        """
        self.is_active = True
        self.save()


class User(models.Model):
    id = models.AutoField(primary_key=True)
    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    username = models.CharField(max_length=12, unique=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username

    def assign_to_table(self, table):
        """
        Method to call activate method from Table
        """
        self.table = table
        self.save()
        table.activate()

    def clear_from_table(self, table):
        """
        Clean the user from the table
        """
        table.is_active = False
        table.save()
        # Confirm this event
        self.delete()
