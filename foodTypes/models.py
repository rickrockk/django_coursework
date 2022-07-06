from django.db import models

class FoodType(models.Model): 
    foodType = models.CharField(verbose_name='Тип еды', max_length=255)

    def __str__(self):
        return self.foodType

    class Meta:
        verbose_name = 'Тип еды'
        verbose_name_plural = 'Типы еды'