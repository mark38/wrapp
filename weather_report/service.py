from django_filters import rest_framework as filters
from .models import Statistics


class StatisticsFilter(filters.FilterSet):
    start_date = filters.DateFilter(field_name='date', lookup_expr=('gte')) 
    end_date = filters.DateFilter(field_name='date', lookup_expr=('lte'))

    class Meta:
        model = Statistics
        fields = ['date']