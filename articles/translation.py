from .models import Article
from modeltranslation.translator import TranslationOptions, register

@register(Article)
class ArticleTranslation(TranslationOptions):
    fields = ('title', 'description', 'text')