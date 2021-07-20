from .models import Indicator, Statistics
from rest_framework import viewsets, permissions
from .serializers import IndicatorSerializer, StatisticsSerializers
from django_filters.rest_framework import DjangoFilterBackend
from .service import StatisticsFilter


class IndicatorViewSet(viewsets.ModelViewSet):
    queryset = Indicator.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = IndicatorSerializer


class StatisticsViewSet(viewsets.ModelViewSet):
    serializer_class = StatisticsSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = StatisticsFilter
    queryset = Statistics.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]