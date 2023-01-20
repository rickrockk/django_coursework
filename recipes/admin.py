from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from recipes.models import Recipe
from import_export.admin import ImportExportMixin
from simple_history.admin import SimpleHistoryAdmin

class RecipeAdmin(ImportExportMixin, TranslationAdmin, SimpleHistoryAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')
    list_filter = ('recipe_type', 'food_type')
    filter_horizontal = ('food_type', 'recipe_type','ingredients')


admin.site.register(Recipe, RecipeAdmin)
