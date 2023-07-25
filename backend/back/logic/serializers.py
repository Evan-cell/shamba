from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Shamba,Order,OrderItem


class ShambaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shamba
        fields = '__all__'