from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from Upkeep.models import Bike
from Upkeep.serializers import UpkeepSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def bike_list(request):
    if request.method == 'GET':
        bikes = Bike.objects.all()

        brand = request.GET.get('brand', None)
        if brand is not None:
            bike = bike.filter(brand__icontains=brand)

        bike_serializer = UpkeepSerializer(bikes, many=True)
        return JsonResponse(bike_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        bike_data = JSONParser().parse(request)
        bike_serializer = UpkeepSerializer(data=bike_data)
        if bike_serializer.is_valid():
            bike_serializer.save()
            return JsonResponse(bike_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(bike_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Bike.objects.all().delete()
        return JsonResponse({'message': '{} Bikes were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def bike_detail(request, pk):
    try:
        bike = Bike.objects.get(pk=pk)
    except Bike.DoesNotExist:
        return JsonResponse({'message': 'The bike does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        bike_serializer = UpkeepSerializer(bike)
        return JsonResponse(bike_serializer.data)

    elif request.method == 'PUT':
        bike_data = JSONParser().parse(request)
        bike_serializer = UpkeepSerializer(bike, data=bike_data)
        if bike_serializer.is_valid():
            bike_serializer.save()
            return JsonResponse(bike_serializer.data)
        return JsonResponse(bike_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        bike.delete()
        return JsonResponse({'message': 'Bike was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def bike_list_published(request):
    bikes = Bike.objects.filter(published=True)

    if request.method == 'GET':
        upkeep_serializer = UpkeepSerializer(bikes, many=True)
        return JsonResponse(upkeep_serializer.data, safe=False)
