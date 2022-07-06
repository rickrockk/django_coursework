
from rest_framework.viewsets import ModelViewSet
from recipeTypes.serializers import RecipeTypeSerializer
from recipeTypes.models import RecipeType

class RecipeTypeViewset(ModelViewSet):
    queryset = RecipeType.objects.all()
    serializer_class = RecipeTypeSerializer

