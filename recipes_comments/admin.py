from django.contrib import admin
from recipes_comments.models import RecipeComment
from import_export.admin import ImportExportMixin

class RecipeCommentAdmin(ImportExportMixin, admin.ModelAdmin):
    list_display = ('recipe_id', 'author', 'text')
    list_display_links = ('recipe_id', )
    list_filter = ('recipe_id', 'author')
    search_fields = ('recipe_id', 'author', 'text')

admin.site.register(RecipeComment, RecipeCommentAdmin)
