# todo/admin.py

from django.contrib import admin
from .models import Upkeep 

class UpkeepAdmin(admin.ModelAdmin):
  list_display = ('bike', 'parts', 'maintenance') 

# Register your models here.
admin.site.register(Upkeep, UpkeepAdmin) 
