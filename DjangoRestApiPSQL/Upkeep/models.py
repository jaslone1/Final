from django.db import models

# Create your models here.
class Bike(models.Model):
    brand = models.CharField(max_length=25, blank=False, default='')
    model = models.CharField(max_length=50,blank=False, default='')
    maintenance = models.CharField(max_length=300,blank=False, default='')
