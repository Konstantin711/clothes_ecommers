from django.contrib import admin
from .models import *

admin.site.register(
    [
        ItemType,
        ParentType,
        Item,
    ]
)