from django.contrib import admin
from ingredients.models import Ingredient
from import_export.admin import ImportExportMixin

class IngredientAdmin(ImportExportMixin, admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', )
    search_fields = ('id', 'name')

admin.site.register(Ingredient, IngredientAdmin)

# Register your models here.
