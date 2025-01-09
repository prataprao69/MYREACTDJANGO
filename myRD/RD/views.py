from django.shortcuts import render
from rest_framework import viewsets
from myRD.RD.models import Item
from myRD.RD.serializers import ItemSerializer

# Create your views here.

class ItemViewSet(viewsets.ModelViewSet):
    queryset=Item.objects.all()
    serializer_class=ItemSerializer