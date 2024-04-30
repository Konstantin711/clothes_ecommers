from django.db import models



class ItemType(models.Model):
    """Means t-shirt, dress, jeans ..."""

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=64)

    def __str__(self) -> str:
        return f"{self.title} - {self.slug}"
    


class ParentType(models.Model):
    """Parent type, means for /men or /woman"""

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=64)

    def __str__(self) -> str:
        return f"{self.title} - {self.slug}"
    

class ItemSizes(models.Model):
    title = models.CharField(max_length=64, blank=True)
    value = models.CharField(max_length=64, blank=True)

    def __str__(self) -> str:
        return f'{self.title} - {self.value}'


class ItemColors(models.Model):
    title = models.CharField(max_length=64, blank=True)
    value = models.CharField(max_length=64, blank=True)

    def __str__(self) -> str:
        return f'{self.title} - {self.value}'


class Item(models.Model):
    """Clothes Item, where type_ means type of clothes"""

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=64)
    qty = models.IntegerField(blank=True)
    price = models.FloatField(blank=True)
    description = models.TextField(blank=True, max_length=400)
    parent_type = models.ForeignKey(ParentType, on_delete=models.CASCADE)
    item_type = models.ManyToManyField(ItemType)
    item_sizes = models.ManyToManyField(ItemSizes)
    item_colors = models.ManyToManyField(ItemColors)

    def __str__(self) -> str:
        return f"{self.title} - {self.slug}"
