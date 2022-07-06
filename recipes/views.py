from rest_framework.viewsets import ModelViewSet
from recipes.serializers import RecipeSerializer, FavouriteRecipeSerializer
from recipes.models import Recipe, FavouriteRecipe
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class RecipeViewSet(ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    @action(methods=['POST'], detail=True, permission_classes=[IsAuthenticated], url_path='add-favourite')
    def add_favourite(self, request,pk=None):
        user = request.user
        recipe = self.queryset.get(pk=pk)
        try:
            recipe = FavouriteRecipe.objects.get(user=user, recipe=recipe)
            recipe.delete()
            return Response({'message': 'Рецепт удалён из избранных'})
        except FavouriteRecipe.DoesNotExist:
            FavouriteRecipe.objects.create(user=user, recipe=recipe)
            return Response({'message': 'Рецепт добавлен в избранные'})

    @action(methods=['GET'], detail=False, permission_classes=[IsAuthenticated], url_path='favourites')
    def get_favourites(self, request):
        user = request.user
        recipe = FavouriteRecipe.objects.filter(user=user)
        data = FavouriteRecipeSerializer(instance=recipe, many=True).data
        return Response(data)


    