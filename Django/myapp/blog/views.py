from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import View
from .models import Post
from .forms import PostForm

# Create your views here.
# def index(request):
#     if request.method == 'GET':
#         return HttpResponse('Index page GET')
#     # 나머지 요청
#     # 에러, 예외처리
#     return HttpResponse('No!!!')


class Index(View):
    def get(self, request):
        # return HttpResponse('Index page GET class')
        
        # 데이터베이스에 접근해서 값을 가져와야 합니다.
        # 게시판에 글들을 보여줘야하기 때문에 데이터베이스에서 "값 조회"
        # MyModel.objects.all()
        post_objs = Post.objects.all()
        # context = 데이터베이스에서 가져온 값
        context = {
            "posts": post_objs
        }
        # print(post_objs)
        return render(request, 'blog/board.html', context)


# write
# post - form
# 글 작성 화면
def write(request):
    if request.method == 'POST':
        # form 확인
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save()
            return redirect('blog:list')

    form = PostForm()
    return render(request, 'blog/write.html', { 'form': form })