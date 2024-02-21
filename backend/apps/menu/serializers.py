from rest_framework import serializers
from .models import *


class UserInforSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "table", "username", "created_at"]


class TableInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ["id", "name", "is_active"]
