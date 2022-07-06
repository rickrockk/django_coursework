from rest_framework.viewsets import ModelViewSet
from ingredients.serializers import IngredientSerializer
from ingredients.models import Ingredient

class IngredientViewSet(ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
