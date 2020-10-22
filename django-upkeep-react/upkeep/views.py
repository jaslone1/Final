from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import UpkeepSerializer    
from .models import Upkeep                   

class UpkeepView(viewsets.ModelViewSet):       
  serializer_class = UpkeepSerializer         
  queryset = Upkeep.objects.all()  

# Create your views here.
