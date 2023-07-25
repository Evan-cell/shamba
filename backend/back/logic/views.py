from django.shortcuts import render
from .models import Shamba,Order,OrderItem
from rest_framework.decorators import api_view,parser_classes
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer # type: ignore
from rest_framework_simplejwt.views import TokenObtainPairView # type: ignore
from rest_framework import status
from .serializers import ShambaSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/shambas/',
        '/api/shambas/create/',
        '/api/shambas/upload/',
        '/api/shambas/<id>/reviews/',
        '/api/shambas/top/',
        '/api/shambas/<id>/',
        'api/shambas/delete/<id>/',
        'api/shambas/<update>/<id>/',
        '/api/orders/add/'
    ]
    return Response(routes)
@api_view(['GET'])
def getShambas(request):
    shambas = Shamba.objects.all()
    serializer = ShambaSerializer(shambas,many=False)
    return Response(serializer.data)

