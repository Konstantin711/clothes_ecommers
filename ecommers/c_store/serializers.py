from rest_framework import serializers
from .models import *


class ItemTypeSerializer(serializers.ModelSerializer):
    """Serializer for ItemType"""

    class Meta:
        model = ItemType
        fields = ['title', 'slug']


class ParentTypeSerializer(serializers.ModelSerializer):
    """Serializer for ParentType"""

    class Meta:
        model = ParentType
        fields = ['title', 'slug']


class ItemSerializer(serializers.ModelSerializer):
    """Serializer for Item with relations"""

    parent_type = ParentTypeSerializer()
    item_type = ItemTypeSerializer(many=True)

    class Meta:
        model = Item
        fields = ['title', 'slug', 'qty', 'parent_type', 'item_type']

    def create(self, validated_data):
        # Отримуємо дані для батьківського типу
        parent_type_data = validated_data.pop('parent_type')
        # Отримуємо дані для типу елементу
        item_type_data = validated_data.pop('item_type')
        
        # Створюємо екземпляр батьківського типу
        parent_type = ParentType.objects.get_or_create(**parent_type_data)[0]
        # Створюємо екземпляр типу елементу
        item_type_objs = [ItemType.objects.get_or_create(**item_data)[0] for item_data in item_type_data]

        # Створюємо екземпляр елемента
        item = Item.objects.create(parent_type=parent_type, **validated_data)
        # Додаємо типи елементу до екземпляра елемента
        item.item_type.set(item_type_objs)

        return item
