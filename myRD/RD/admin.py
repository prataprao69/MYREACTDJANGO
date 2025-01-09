from django.contrib import admin
from RD.models import Item
# Register your models here.

class ItemAdmin(admin.ModelAdmin):
    list_display=['id','name','description']

admin.site.register(Item,ItemAdmin)