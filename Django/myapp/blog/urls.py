from django.urls import path
from . import views

urlpatterns = [
    # path(패턴, 매핑) /blog/
    # path("", views.index), # FBV
    path("", views.Index.as_view())
    # 글 조회
    # 글 작성
    # 글 수정
    # 글 삭제
    # 코멘트 작성
    # 코멘트 삭제
]