// https://baeharam.netlify.app/posts/javascript/JS-%EA%B0%95%EC%A0%9C%EB%B3%80%ED%99%98

console.log('0' == 0) // true
console.log('0' === 0) // false

console.log(1 == true) // true
console.log(1 === true) // false

console.log(0 == false) // true
console.log(0 === false) // false

console.log('true' == true) // false
console.log('true' === true) // false
// 1. json에서 값을 가져올 때 true 문자열로 가져와서 error가 난 적이 있습니다.
// 2. json에서 값을 가져올 때 true가 True로 되어 있어서 error가 난 적이 있습니다.

console.log(0 == '') // 주의 : true
console.log(0 === '') // 주의 : false

console.log(false == '') // 주의 : true
console.log(false === '') // 주의 : false

console.log(false == null) // 주의 : false
console.log(false === null) // 주의 : false

console.log(false == undefined) // 주의 : false
console.log(false === undefined) // 주의 : false

console.log(null === undefined) // false
console.log(null == undefined) // true

// 아래 내용이 많아서 별도 파일로 분리하여 설명해드리겠습니다.
console.log(NaN == NaN) // 주의 : false
console.log(NaN === NaN) // 주의 : false


function truthyAndFalsy(value) {
    return !!value
}

truthyAndFalsy([]) // 주의 : true
truthyAndFalsy({}) // 주의 : true
truthyAndFalsy('') // 주의 : false
truthyAndFalsy(null) // 주의 : false
truthyAndFalsy(undefined) // 주의 : false
truthyAndFalsy(NaN) // 주의 : false
truthyAndFalsy(Infinity) // 주의 : true

truthyAndFalsy(-100) // true
truthyAndFalsy('hello') // true

console.log('----------------');
console.log('드모르간 법칙');

// not (A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i)
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) {
        console.log(i)
    }
}


// or : ||
// and : &&
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

// 카오스
console.log([] == ![]) // true
console.log([] == 0)

// 1. 빈 Array는 비교구문이 나왔을 때 강제로 숫자로 형변환이 됩니다.
console.log(0 == ![])

// 2. ![] == false입니다.
console.log(0 == false)

// 3. false는 0으로 평가됩니다.
console.log(0 == 0)