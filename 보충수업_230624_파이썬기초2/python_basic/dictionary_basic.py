'''
Dictionary: {'key':'value'}
리스트를 보완하기 위해서 -> 원하는 값에 빠르게 접근하기 위해서 -> 알고리즘

1. key, value
2. 순회는 가능 -> for 문
    - 키만 순회
    - 값만 순회
    - 키, 값 쌍으로 순회
'''

x = {"a":1, "b":2}

# 키 x.keys()
# 값 x.values()
# 아이템 x.items()

# for i in x.keys():
# for i in x.values():
# for i, j in x.items():

print(x.keys())
print(x.values())
print(x.items())

# enumerate -> 인덱스를 만들어줄 때