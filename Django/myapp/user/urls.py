from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [
    # user/
    # 회원가입
    path('register/', views.Registration.as_view(), name='register'),
    # 로그인
    path('login/', views.Login.as_view(), name='login'),
    # 로그아웃
    path('logout/', views.Logout.as_view(), name='logout'),
]