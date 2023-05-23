// 단항 연산자
// 할당 연산자
// 3항 연산자

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// python에는 해당 문법이 없습니다.
// a += 1
let a = 10
// 두개 다 1을 증가시키는 것입니다.
a++ // (선할당 후증가)
++a // (선증가 후할당)

// ++의 방향 바꾸셔도 달라지지 않습니다.
for (let i = 0; i < 10; ++i) {
    console.log(i)
}

// 할당 연산자
a = 10
a += 5
a /= 5

// 3항 연산자
// 조건식 ? 조건식이 참일 때 실행될 코드 : 조건식이 거짓일 때 실행될 코드
let x = true ? 100 : 200
let y = false ? 100 : 200 // 200자리에 하나 구문을 더 넣습니다.

// 아래와 같이 2개가 있을 때
let aa = false ? 100 : 200
let bb = true ? 10 : 20

false ? 100 : true ? 10 : 20 // 어려우시면 괄호
false ? 100 : (true ? 10 : 20) // 어려우시면 괄호

// 예제(error가 나지 않는 코드, 한글, 영어, 숫자 등등)
let sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

// 아래와 같이 변수할당 없이 바로 3항 연산자로 return 가능합니다.
function solution(n) {
    return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2;
}

// 3항 연산자의 예제
// 재귀 함수
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

// https://school.programmers.co.kr/learn/courses/30/lessons/120853
function solution(s) {
    s = s.split(" ");
    let arr = [];
    for (let v of s) v === "Z" ? (arr.length ? arr.pop() : "") : arr.push(v);
    return arr.reduce((a, v) => a + +v, 0);
}