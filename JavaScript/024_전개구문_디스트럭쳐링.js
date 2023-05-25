const 과일들 = ['사과', '파인애플', '수박'];
const 생선들 = ['조기', '갈치', '다금바리'];
const 합치면 = [...과일들, ...생선들];

console.log(합치면);

//

const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브1, ...위니브2 };

console.log(위니브3);

// 

// 아래와 같이 값을 업데이트하는 용도로도 사용합니다.
const 위니브4 = {
    ...위니브3,
    라이캣: 100
}



    // 디스트럭처링 === 언패킹
    // (구조분해할당이라고도 얘기합니다.)

    `
python 문법에서 언패킹
for (i, j, k) in [(1, 2, 3), (4, 5, 6)]:
    print(i, j, k)
`

let food1, food2, food3;

const categories = {
    food1: '과일',
    food2: '채소',
    food3: '육류'
};

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;

console.log(food1, food2, food3);


let { one } = { one: 1 }
// 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴입니다.
console.log(one);


const categories = {
    food1: '과일',
    food2: '채소',
    food3: '육류'
};

let { food1, food2, food3 } = categories;

console.log(food1, food2, food3);


// 배열의 디스트럭쳐링
const arr = [1, 2, 3];
const [a, b, c] = arr;

for (const [a, b] of [[1, 2], [3, 4], [5, 6]]) {
    console.log(a, b)
}

// 파이썬 처럼 괄호를 없애지는 못합니다.
for (const a, b of [[1, 2], [3, 4], [5, 6]]) {
    console.log(a, b)
}