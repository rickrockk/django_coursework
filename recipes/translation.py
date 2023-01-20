from .models import Recipe
from modeltranslation.translator import TranslationOptions, register

@register(Recipe)
class RecipeTranslation(TranslationOptions):
    fields = ('name', 'description', 'cooking')
