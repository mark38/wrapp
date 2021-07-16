from rest_framework import routers
from .api import IndicatorViewSet, StatisticsViewSet


router = routers.DefaultRouter()
router.register('api/statistics', StatisticsViewSet, 'statistics')
router.register('api/indicator', IndicatorViewSet, 'indicator')



urlpatterns = router.urls