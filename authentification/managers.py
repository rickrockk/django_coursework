from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, nickname, password=None):
        user = self.model(
            email = self.normalize_email(email),
            nickname=nickname
        )
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, nickname, password):
        user = self.create_user(
            email = self.normalize_email(email),
            nickname=nickname,
            password=password
        )
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        
        user.save()

        return user

