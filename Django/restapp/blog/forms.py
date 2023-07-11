from django import forms
from .models import Post, Comment, HashTag


class PostForm(forms.ModelForm):
    
    class Meta:
        model = Post
        fields = ['title', 'content']


class CommentForm(forms.ModelForm):
    
    class Meta:
        model = Comment
        fields = ['content']
        widgets = {
            'content': forms.TextInput(attrs={'size': '35'})
        }


class HashTagForm(forms.ModelForm):
    
    class Meta:
        model = HashTag
        fields = ['name']