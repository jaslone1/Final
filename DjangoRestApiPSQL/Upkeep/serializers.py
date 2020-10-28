from rest_framework import serializers
from Upkeep.models import Bike


class UpkeepSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bike
        fields = ('id',
                  'brand',
                  'model',
                  'maintenance')
