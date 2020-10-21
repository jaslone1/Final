from rest_framework import serializers
from .models import Upkeep

class UpkeepSerializer(serializers.ModelSerializer):
  class Meta:
    model = Upkeep
    fields = ('id', 'bike', 'parts', 'maintenance')
