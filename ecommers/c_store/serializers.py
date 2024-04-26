from .models import *

from rest_framework import serializers



class ItemTypeSerializer(serializers.ModelSerializer):
    """Serializer for ItemType"""

    class Meta:
        model = ItemType
        fields = '__all__'

class ParentTypeSerializer(serializers.ModelSerializer):
    """Serializer for ParentType"""

    class Meta:
        model = ParentType
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    """Serializer for Item with relations"""

    parent_type = ParentTypeSerializer()
    item_type = ItemTypeSerializer(many=True)

    class Meta:
        model = Item
        fields = '__all__'



