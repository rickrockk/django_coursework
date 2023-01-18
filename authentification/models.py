from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from simple_history.models import HistoricalRecords

from authentification.managers import UserManager

class User(AbstractBaseUser,PermissionsMixin): 
    email = models.EmailField(verbose_name='Адрес эл. почты', max_length=255, unique=True)
    nickname = models.CharField(verbose_name='Никнейм', max_length=255)
    photo = models.ImageField(verbose_name='Фото', upload_to='users/photos')
    bio = models.TextField(verbose_name='Биография')
    history = HistoricalRecords()

    is_active = models.BooleanField(verbose_name='Активирован', default=False)
    is_staff = models.BooleanField(verbose_name='Модерация', default=False)
    is_superuser = models.BooleanField(verbose_name='Администратор', default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nickname']

    objects = UserManager()

    def __str__(self): 
        return self.email

    class Meta: 
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'