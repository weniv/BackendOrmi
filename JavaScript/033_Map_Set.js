let m = new Map();

// Map에 값을 넣기
m.set('하나', '1');
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근하기
console.log(m.get('하나'));
console.log(m.get(true));

// Map의 값이 있는지 확인하기
console.log(m.has('하나'));

// Map의 값을 제거하기
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);

// Map의 크기를 확인하기
console.log(m.size);

// let mm = new Map()
// mm.set('하나', m)
// Map(1) {'하나' => Map(3)}
// mm.set('하나', {'one':1, 'two':2})
// Map(1) {'하나' => {…}}

const data = new Map()
    .set('name', 'hojun')
    .set('age', 10)
    .set('height', 180)

for (const i of data) {
    console.log(i)
}


// python과 다르게
// object가 iterable객체가 아닙니다.
for (i of { 'one': 1, 'two': 2 }) {
    console.log(i)
}

for (i in { 'one': 1, 'two': 2 }) {
    console.log(i)
}

for (i of Object.entries({ 'one': 1, 'two': 2 })) {
    console.log(i)
}


// Map의 순환(일반적인 for문을 사용하려면 아래처럼 전개해야 합니다.)
// let m = [...data]
for (const variable of m) {
    console.log(`m을 순회하고 있습니다. ${variable[0]}`)
    console.log(`m을 순회하고 있습니다. ${variable[1]}`)
}

for (const [key, val] of m) {
    console.log(`${key}: ${val}`);
}

// Map의 값에 접근
console.log(m.keys());
console.log(m.values());
console.log(m.entries());

// 인덱스를 가지는 자료형을 맵핑하기
let temp = new Map([[1, 10],
[2, 20],
[3, 30],
[4, 40]]);

console.log(temp);

// object 자료형의 변환
let temp2 = new Map(Object.entries({ one: 1, two: 2 }));

console.log(temp2);

// 반대의 경우
const temp3 = Object.fromEntries(temp2);
console.log(temp3);

obj = { hi: 1, hi2: 2, hi3: 3, hi4: 4 };
console.log(obj.length);