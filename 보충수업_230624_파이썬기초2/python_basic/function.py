'''
Function(함수)

코드는 중복을 최대한 피해야한다.
-> 함수

특정 기능을 정리
f(x) = x + 1
f(1) = 2

def sum(x)
sum(x)
'''

# def sum(x):
#     return x + 1

# sum(1)

# def hello():
#     print('hello')



# 매개변수 기본값
# def sum_1(num1, num2=1):
#     return num1 + num2

# sum_1(1)

# 매개변수의 가변인자: 매개변수가 정확히 정해지지 않았을 때
# *args
# def sum(*args):
#     print(args)
#     result = 0
#     for i in args:
#         result = result + i
#     return result

# sum(1, 2) # 가변인자는 튜플
# sum(1, 2, 3)

# 매개변수의 키워드인자: 매개변수를 키워드로 받을 때
# **kwargs
# def sum_2(**kwargs):
#     print(kwargs)
#     total = sum(kwargs.values())
#     return total

# result = sum_2(a=1, b=2) # 딕셔너리
# print(result)

# def sum_get(**kwargs):
#     a = kwargs.get('a', 0)
#     b = kwargs.get('b', 0)
#     c = kwargs.get('c', 0)
#     total = a + b + c
#     return total

# result2 = sum_get(a=1, b=2, c=3)
# print(result2)


# 변수의 범위(Scope)
# 전역 변수, 지역 변수

number = 0

def add_5(a):
    global number
    a = a + 5
    number = a

add_5(5)
print(number)

# lambda 람다 함수 -> 2개 이상의 기능은 넣지 않는 것이 좋다.
# lambda 매개변수, , : 기능
lambda_add = lambda a, b : a + b
print(lambda_add(1, 2))