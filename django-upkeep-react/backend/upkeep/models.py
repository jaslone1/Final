from django.db import models

# Create your models here.

class Upkeep(models.Model):
   bike = models.CharField(max_length=50)
   parts = models.CharField(max_length=50)
   maintenance = models.TextField(default="none")
   
   def _str_(self):
     return self.bike
