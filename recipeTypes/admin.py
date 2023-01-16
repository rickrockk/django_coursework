from django.contrib import admin
from recipeTypes.models import RecipeType


class RecipeTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'recipeType')
    list_display_links = ('id', 'recipeType')

admin.site.register(RecipeType, RecipeTypeAdmin)

# Register your models here.
