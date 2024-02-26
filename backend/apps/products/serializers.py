from rest_framework import serializers
from .models import *


class CategoryNameField(serializers.RelatedField):
    # Searching category's name with id given
    def to_representation(self, value):
        return value.name

    # Formatting category name to use inside serializer (Object from category model)
    def to_internal_value(self, data):
        try:
            category = Category.objects.get(name=data)
            return category
        except Category.DoesNotExist:
            raise serializers.ValidationError("Category does not exist.")


class ProductSerializer(serializers.ModelSerializer):
    categories = CategoryNameField(queryset=Category.objects.all(), many=True)

    class Meta:
        model = Product
        fields = "__all__"

    def create(self, validated_data):
        categories_data = validated_data.pop("categories")
        product = Product.objects.create(**validated_data)
        for category in categories_data:
            product.categories.add(category)
        return product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_Category
        fields = "__all__"
