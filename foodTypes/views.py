
from rest_framework.viewsets import ModelViewSet
from foodTypes.serializers import FoodTypeSerializer
from foodTypes.models import FoodType

class FoodTypeViewset(ModelViewSet):
    queryset = FoodType.objects.all()
    serializer_class = FoodTypeSerializer
