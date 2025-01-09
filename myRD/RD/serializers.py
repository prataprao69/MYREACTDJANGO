from rest_framework import serializers
from RD.models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        Model=Item
        fields='__all__'