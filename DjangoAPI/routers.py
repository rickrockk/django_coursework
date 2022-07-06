from rest_framework.routers import DefaultRouter, SimpleRouter
from articles_comments.views import ArticleCommentViewSet
from recipes_comments.views import RecipeCommentViewSet
from ingredients.views import IngredientViewSet
from recipes.views import RecipeViewSet
from authentification.views import UserViewSet
from foodTypes.views import FoodTypeViewset
from recipeTypes.views import RecipeTypeViewset

router = DefaultRouter()
simrouter = SimpleRouter()

router.register('recipes', RecipeViewSet)
router.register('articles_comments', ArticleCommentViewSet)
router.register('recipes_comments', RecipeCommentViewSet)
router.register('ingredients', IngredientViewSet)
router.register('auth', UserViewSet)
router.register('recipe_type', RecipeTypeViewset)
router.register('food_type', FoodTypeViewset)