// 중급자 분들은 보세요.
const zip = (a, b) => a.map((v, i) => [v, b[i]])
const map = (func, iter) => {
    result = []
    for (const i of iter) {
        result.push(func(i))
    }
    return result
}


// 8번
// https://codingdojang.com/scode/393?answer_mode=hide

// str(list(range(10001))).count('8')
// 이 코드는 알고리즘 문제 풀이할 때만 쓰세요.
'.'.repeat(99)
'.'.repeat(99).split('.')
'.'.repeat(99).split('.').map((v, i) => i + 1)
'.'.repeat(99).split('.').map((v, i) => i + 1)
'.'
    .repeat(99)
    .split('.')
    .map((v, i) => i + 1)
    .join('')
    .split('')
    .filter(v => v === '8')
    .length

let s = ''
for (let i = 0; i < 101; i++) {
    s += i
}
s.split('')
    .filter(v => v === '8')
    .length


Array(100)
    .fill(0)
    .map((v, i) => '' + i)

Array(101)
    .fill(0)
    .map((v, i) => '' + i) // 안에서 메서드 체이닝을 한 번 더 할 수 있지만 복잡도만 상승할 것 같아 실행하지 않았습니다.
    .join('')
    .split('')
    .filter(v => v === '8')
    .length

// 9번
let a = [10, 20, 30, 40]
let b = [100, 200, 300, 400]
a.map((v, i) => [v, b[i]])

let a = [10, 20, 30, 40]
let b = [100, 200, 300, 400]
let c = [1000, 2000, 3000, 4000]
a.map((v, i) => [v, b[i], c[i]])

const zip = (a, b) => a.map((v, i) => [v, b[i]])

let s = [1, 3, 4, 8, 13, 17, 20]

[1, 3, 4, 8, 13, 17, 20]
[3, 4, 8, 13, 17, 20]
// python에서 sort를 했을 때 주었던 key function를 여기서 구현해볼겁니다.


const zip = (a, b) => a.map((v, i) => [v, b[i]])
let s = [1, 3, 4, 8, 13, 17, 20]

zip(s, s.slice(1))
zip(s, s.slice(1)).sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))
zip(s, s.slice(1)).sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0]

////////////////////////


let s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i])
}


let s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i + 1] - s[i])
}

let s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 1; i < s.length; i++) {
    console.log(s[i] - s[i - 1])
}


// 최솟값을 찾아내려면 먼저 최댓값을 저장해라!
// 최댓값을 찾아내려면 먼저 최솟값을 저장해라!
let s = [1, 3, 4, 8, 13, 17, 20]
let min = Infinity
let index = 0
for (let i = 0; i < s.length - 1; i++) {
    if (s[i + 1] - s[i] < min) {
        min = s[i + 1] - s[i]
        index = i
    }
}
console.log(s[index], s[index + 1])

// 10번
// 엘리베이터 최대 몸무게 500kg입니다.
// 다음 친구들이 엘리베이터를 탔을 때 최대로 탑승할 수 있는 인원수를 구하세요.
let weight = [60, 50, 55, 60, 77, 88, 56, 67, 89, 45, 55, 45]
weight.sort((a, b) => a - b)
let total = 0
let count = 0
for (const i of weight) {
    total += i
    if (total >= 500) {
        break
    }
    count += 1
}