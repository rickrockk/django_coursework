from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from articles.models import Article
from import_export.admin import ImportExportMixin


class ArticleAdmin(ImportExportMixin, TranslationAdmin):
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'title', 'description')



admin.site.register(Article, ArticleAdmin)
