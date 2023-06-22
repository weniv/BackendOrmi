# blog/forms.py
from django import forms
from .models import Post, Comment

# Form: html에 있는 form 태그
# Model Form: model을 사용하는 form
class PostForm(forms.ModelForm):
    
    class Meta:
        model = Post
        fields = ['title', 'content']


class CommentForm(forms.ModelForm):
    
    class Meta:
        model = Comment
        fields = ['content']