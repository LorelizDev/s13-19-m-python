from rest_framework import serializers
from .models import *


class UserInforSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class TableInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = "__all__"
