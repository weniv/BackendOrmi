from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model


User = get_user_model()


class RegisterForm(UserCreationForm):
    
    class Meta:
        model = User
        fields = ['email']


class LoginForm(AuthenticationForm):
    
    class Meta:
        model = User
        fields = ['email', 'password']