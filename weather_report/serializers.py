from django.db.models import fields
from rest_framework import serializers
from .models import Indicator, Statistics


class IndicatorSerializer (serializers.ModelSerializer):
    class Meta:
        model = Indicator
        fields = '__all__'


class StatisticsSerializers (serializers.ModelSerializer):
    class Meta:
        model = Statistics
        fields = '__all__'