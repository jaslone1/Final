from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    fav_color = models.CharField(blank=True, max_length=120)

class Bike(models.Model):
   brand = models.CharField(max_length=50)
   model = models.CharField(max_length=50)
   parts = models.CharField(max_length=50)
   maintenance = models.TextField(default="none")

   def _str_(self):
     return self.bike
