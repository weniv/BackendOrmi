from django.contrib import admin
from .models import Post, Comment # model 임포트

# Register your models here.
admin.site.register(Post) # admin 페이지에 등록
admin.site.register(Comment)