from django.contrib import admin
from recipes.models import Recipe

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')
    list_filter = ('recipe_type', 'food_type')
    filter_horizontal = ('food_type', 'recipe_type','ingredients')


admin.site.register(Recipe, RecipeAdmin)
