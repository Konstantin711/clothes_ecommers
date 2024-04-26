from django.db import models



class ItemType(models.Model):
    """Means t-shirt, dress, jeans ..."""

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=64)

    def __str__(self) -> str:
        return f"{self.title}"
    


class ParentType(models.Model):
    """Parent type, means for /men or /woman"""

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=64)

    def __str__(self) -> str:
        return f"{self.title}"


class Item(models.Model):
    """Clothes Item, where type_ means type of clothes"""

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=64)
    qty = models.IntegerField()
    parent_type = models.ForeignKey(ParentType, on_delete=models.CASCADE)
    item_type = models.ManyToManyField(ItemType)

    def __str__(self) -> str:
        return f"{self.title}"
