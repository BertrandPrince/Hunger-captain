from .models import Item
from rest_framework import serializers
from apps.review.models import Review


class ItemSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)
    total_like_count = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = '__all__'
   