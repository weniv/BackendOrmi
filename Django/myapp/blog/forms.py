# blog/forms.py
from django import forms
from .models import Post

# Form ()
# Model Form []
class PostForm(forms.ModelForm):
    
    class Meta:
        model = Post
        fields = ['title', 'content']