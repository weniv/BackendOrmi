let s = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
s.add('f');
console.log(s);

// Set을 순환하기
for (let variable of s) {
    console.log(variable);
}

// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''));
console.log(ss);

// Set의 값을 제거하기
ss.delete('b');

// Set의 값을 확인하기
console.log(ss.has('a'));

// Set의 모든 값을 제거하기 
ss.clear
console.log(ss);

let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value));
// 합집합
let union = new Set([...a].concat(...b));
// 차집합
let dif = [...a].filter(x => !b.has(x));