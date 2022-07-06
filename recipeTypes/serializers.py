from rest_framework import serializers
from recipeTypes.models import RecipeType

class RecipeTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeType
        fields = '__all__'