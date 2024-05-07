from django.contrib import admin
from c_store import models
    

admin.site.register(
    [
        models.ItemType,
        models.ParentType,
        models.Item,
        models.ItemSizes,
        models.ItemColors,
        models.UserProfile,
    ]
)