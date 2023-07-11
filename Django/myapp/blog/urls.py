from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    # path(패턴, 매핑) /blog/
    # 글 목록 조회
    path("", views.Index.as_view(), name='list'),
    # 글 상세 조회
    path("detail/<int:pk>/", views.DetailView.as_view(), name='detail'),
    # 글 작성
    path("write/", views.Write.as_view(), name='write'),
    # 글 수정
    path("detail/<int:pk>/edit/", views.Update.as_view(), name='edit'),
    # 글 삭제
    path("detail/<int:pk>/delete/", views.Delete.as_view(), name='delete'),
    # 코멘트 작성
    path("detail/<int:pk>/comment/write/", views.CommentWrite.as_view(), name='cm-write'),
    # 코멘트 삭제
    path("detail/comment/<int:pk>/delete/", views.CommentDelete.as_view(), name='cm-delete'),
    # 태그 작성
    path("detail/<int:pk>/hashtag/write/", views.HashTagWrite.as_view(), name='tag-write'),
    # 태그 삭제
    path("detail/<int:pk>/hashtag/delete/", views.HashTagDelete.as_view(), name='tag-delete'),
]