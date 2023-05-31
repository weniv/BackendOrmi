// 모던 자바스크립트 딥다이브 스터디
// var, let, const가 빠르냐?
// 의미 없다. 예전에는 이런 것으로 논란이 되었던 적이 있었으나 요즘 엔진은 최적화해서 별 차이 없다.
// 이미지 렌더링 신경쓰세요.

typeof NaN === 'number'
//true

console.log(0 === -0)
//true

Object.is(0, -0)
// false

BigInt(123123123123) === 123123123123n
// true

document.querySelector('.a')
// undefined가 아니라 null

Symbol('abc')
// 중복 불가능한 유일한 값

Symbol('abc') === Symbol('abc')
// false

a = Symbol('abc')
b = Symbol('abc')
a === b
// false
// 중복에 위험이 없으니 프로퍼티 값으로 사용하면 좋다!

let a = 100;
let b = 100;
// 100이라는 공간을 공유
// Python 같은 것은 특정 수 까지만 공유하는데
// js도 그런지는 메모리 구조 훑어봐야 할 듯

// 1++
// ++1
// 선할당 후증가
// a++
// a
// 선증가 후할당 (보통 요걸 사용. for의 결과는 같다!)
// ++a
// a

// for (let i = 0; i < array.length; i++) {
//     console.log(i);    
// }

// for (let i = 0; i < array.length; ++i) {
//     console.log(i);    
// }

// 문자열 연결 연산자
'1' + 2; // -> '12'
1 + '2'; // -> '12'

// 산술 연산자
1 + 2; // -> 3

// true는 1로 타입 변환된다.
1 + true; // -> 2

// false는 0으로 타입 변환된다.
1 + false; // -> 1

// null은 0으로 타입 변환된다.
1 + null; // -> 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined;    // -> NaN
1 + undefined; // -> NaN

// 형변환을 위한 +
let x = '1'
console.log(+x) // 1
console.log(x) // '1'

let x = true
console.log(+x)

let x = 'hello'
console.log(+x)

// 동등 비교. 결과를 예측하기 어렵다.
'0' == ''; // -> false
0 == '';   // -> true
0 == '0';  // -> true
false == 'false';   // -> false
false == '0';       // -> true
false == null;      // -> false
false == undefined; // -> false

// 회사 컨벤션에서 toString()을 사용하지 않는 경우가 많음
console.log(123 + '')
console.log((123).toString())
+'123123' // 정말 많이 사용
// == 보다 ===가 빠르다. 형변환이 없기 때문에.

NaN === NaN // false
Number.isNaN(NaN) // true, Number.isNaN을 사용하세요!
isNaN(undefined) // true, isNaN은 논란의 여지가 많음
isNaN(null) // false, 이건 또 false?
isNaN(-NaN) // true
isNaN({}) // true
Object.is(NaN, NaN) // true


// 1 예제
var x = 2;
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// 2 예제
var x = 10;
// if...else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
// var result = if (x % 2) { result = '홀수'; } else { result = '짝수'; };
// SyntaxError: Unexpected token if

// 실무에서 진짜 많이 사용
!!true
!!1
!!''
!!'hello world'


// 드모르간 법칙
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)


function a() {
    var x, y;
    return x=1, y=2, console.log(x), console.log(x*y), x+y
}
// 실행하면 3만 반환


typeof ''              // -> "string"
typeof 1               // -> "number"
typeof NaN             // -> "number"
typeof true            // -> "boolean"
typeof undefined       // -> "undefined"
typeof Symbol()        // -> "symbol"
typeof null            // -> "object", 심각
typeof []              // -> "object", 심각, array라고 나와야지!
typeof {}              // -> "object"
typeof new Date()      // -> "object"
typeof /test/gi        // -> "object"
typeof function () {}  // -> "function"

// ?? 연산

const obj = {a:{b:{c:{d:1}}}}
obj.a?.b?.c?.d // 1
// 없으면 undefind

const a = obj.a.b.c ?? 100;
// 있으면 있는 값, 없으면 100

[] instanceof Array
'a' in obj


// 블록문(0개 이상)
{
    var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
    x++;
}

// 함수 선언문
function sum(a, b) {
    return a + b;
}


// if문은 대부분 3항 연산자로 변경 가능

// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2;
var result;

if (x % 2) { // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result); // 짝수



var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수



// 월을 영어로 변환한다. (11 → 'November')
// break문을 안넣어주면 제대로 작동
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}

console.log(monthName); // Invalid month


// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1: monthName = 'January';
    break;
  case 2: monthName = 'February';
    break;
  case 3: monthName = 'March';
    break;
  case 4: monthName = 'April';
    break;
  case 5: monthName = 'May';
    break;
  case 6: monthName = 'June';
    break;
  case 7: monthName = 'July';
    break;
  case 8: monthName = 'August';
    break;
  case 9: monthName = 'September';
    break;
  case 10: monthName = 'October';
    break;
  case 11: monthName = 'November';
    break;
  case 12: monthName = 'December';
    break;
  default: monthName = 'Invalid month';
}

console.log(monthName); // November



for (var i = 0; i < 2; i++) {
    console.log(i);
}


for (var i = 0; i < 2;) {
    i++
    console.log(i);
}

// 무한루프
for (;;) { ... }
// 무한루프
while (true) { ... }



var count = 0;
// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2


// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}


// continue
var string = 'Hello World.';
var search = 'l';
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if (string[i] !== search) continue;
    count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3

console.log('Done!');


// 형변환
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

// 암묵적 타입 형변환은 앞에서 살펴보았음


var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + '';
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10


// 피연산자가 모두 문자열 타입이어야 하는 문맥
'10' + 2 // -> '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10' // -> 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0 // -> true
if (1) { }

// falsy data : 0, '', null, undefined, false, NaN

// 숫자 타입
0 + ''         // -> "0"
-0 + ''        // -> "0"
1 + ''         // -> "1"
-1 + ''        // -> "-1"
NaN + ''       // -> "NaN"
Infinity + ''  // -> "Infinity"
-Infinity + '' // -> "-Infinity"

// 불리언 타입
true + ''  // -> "true"
false + '' // -> "false"

// null 타입
null + '' // -> "null"

// undefined 타입
undefined + '' // -> "undefined"

// 심벌 타입
(Symbol()) + '' // -> TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + ''           // -> "[object Object]"
Math + ''           // -> "[object Math]"
[] + ''             // -> ""
[10, 20] + ''       // -> "10,20"
(function(){}) + '' // -> "function(){}"
Array + ''          // -> "function Array() { [native code] }"


// 문자열 타입
+''       // -> 0
+'0'      // -> 0
+'1'      // -> 1
+'string' // -> NaN

// 불리언 타입
+true     // -> 1
+false    // -> 0

// null 타입
+null     // -> 0

// undefined 타입
+undefined // -> NaN

// 심벌 타입
+Symbol() // -> ypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{}             // -> NaN
+[]             // -> 0
+[10, 20]       // -> NaN
+(function(){}) // -> NaN

// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
  }
  
  // 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
  function isTruthy(v) {
    return !!v;
  }
  
  // 모두 true를 반환한다.
  isFalsy(false);
  isFalsy(undefined);
  isFalsy(null);
  isFalsy(0);
  isFalsy(NaN);
  isFalsy('');
  
  // 모두 true를 반환한다.
  isTruthy(true);
  isTruthy('0'); // 빈 문자열이 아닌 문자열은 Truthy 값이다.
  isTruthy({});
  isTruthy([]);



// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1);        // -> "1"
String(NaN);      // -> "NaN"
String(Infinity); // -> "Infinity"
// 불리언 타입 => 문자열 타입
String(true);     // -> "true"
String(false);    // -> "false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
(1).toString();        // -> "1"
(NaN).toString();      // -> "NaN"
(Infinity).toString(); // -> "Infinity"
// 불리언 타입 => 문자열 타입
(true).toString();     // -> "true"
(false).toString();    // -> "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
1 + '';        // -> "1"
NaN + '';      // -> "NaN"
Infinity + ''; // -> "Infinity"
// 불리언 타입 => 문자열 타입
true + '';     // -> "true"
false + '';    // -> "false"

// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number('0');     // -> 0
Number('-1');    // -> -1
Number('10.53'); // -> 10.53
// 불리언 타입 => 숫자 타입
Number(true);    // -> 1
Number(false);   // -> 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
parseInt('0');       // -> 0
parseInt('-1');      // -> -1
parseFloat('10.53'); // -> 10.53

// 3. + 단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
+'0';     // -> 0
+'-1';    // -> -1
+'10.53'; // -> 10.53
// 불리언 타입 => 숫자 타입
+true;    // -> 1
+false;   // -> 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
'0' * 1;     // -> 0
'-1' * 1;    // -> -1
'10.53' * 1; // -> 10.53
// 불리언 타입 => 숫자 타입
true * 1;    // -> 1
false * 1;   // -> 0

String(123)
Number('123')
Boolean('123')
parseInt(10, 2)
parseInt(10, 10)
parseInt(10, 16)
parseInt('123', 16)
parseInt('123', 16)

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
Boolean('x');       // -> true
Boolean('');        // -> false
Boolean('false');   // -> true
// 숫자 타입 => 불리언 타입
Boolean(0);         // -> false
Boolean(1);         // -> true
Boolean(NaN);       // -> false
Boolean(Infinity);  // -> true
// null 타입 => 불리언 타입
Boolean(null);      // -> false
// undefined 타입 => 불리언 타입
Boolean(undefined); // -> false
// 객체 타입 => 불리언 타입
Boolean({});        // -> true
Boolean([]);        // -> true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
!!'x';       // -> true
!!'';        // -> false
!!'false';   // -> true
// 숫자 타입 => 불리언 타입
!!0;         // -> false
!!1;         // -> true
!!NaN;       // -> false
!!Infinity;  // -> true
// null 타입 => 불리언 타입
!!null;      // -> false
// undefined 타입 => 불리언 타입
!!undefined; // -> false
// 객체 타입 => 불리언 타입
!!{};        // -> true
!![];        // -> true


// if 문은 단축 평가로 대체 가능하다.
var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); // 완료

// 아래처럼 3항 연산자로도 사용이 가능
// 앞이 괄호가 묶인 것으로 인식하면 됨
message = done && '완료' || '미완료';


var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined

var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

    console.log(typeof person); // object
    console.log(person); // {name: "Lee", sayHello: ƒ}




var person = {
    firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Lee'   // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};
console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}

var person = {
    firstName: 'Ung-mo',
    last-name: 'Lee' // SyntaxError: Unexpected token -
};

// 빼기로 인식함





var person = {
    'last-name': 'Lee',
    1: 10
};

    person.'last-name';  // -> SyntaxError: Unexpected string
    person.last-name;    // -> 브라우저 환경: NaN
                       // -> Node.js 환경: ReferenceError: name is not defined
    person[last-name];   // -> ReferenceError: last is not defined
    person['last-name']; // -> Lee

    // 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
    person.1;     // -> SyntaxError: Unexpected number
    person.'1';   // -> SyntaxError: Unexpected string
    person[1];    // -> 10 : person[1] -> person['1']
    person['1'];  // -> 10


var a = 10
// undefined

window.a
// 10

delete a
// false

let b = 10
const c = 10

window.b
// undefined

window.c
// undefined


// 부동 소수점
var fVal_1 = "0.6";       
var fVal_2 = "0.3";       

var fResult = parseFloat(fVal_1) + parseFloat(fVal_2);
alert(fResult);          // 0.899999999999 로 표시됨


// 위의 경우 fResult  값은 0.9 가 정답이지만, 
// 0.8999999999999  로 표시되는 것이다. 

// 이때, 아래와 같이 toFixed() 함수를 이용해주면 됩니다. 
// fResult = fResult.toFixed(2);



// ES5, 프로퍼티 축약형
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // {x: 1, y: 2}



// ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi(); // Hi! Lee



// ES6
const obj = {
    name: 'Lee',
    // 메서드 축약 표현
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi(); // Hi! Lee



var str1 = '';
var str2 = 'hello world'

str2[2] = 'c'

str2
// 'hello world'

// [...str2]
// (11) ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// immutable 자료형! 변경 불가능한 자료형!

var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy);  // 80

score = 100;

console.log(score); // 100
console.log(copy);  // ?


var person1 = {
    name: 'Lee'
};

var person2 = {
    name: 'Lee'
};

console.log(person1 === person2); // ①
console.log(person1.name === person2.name); // ②




// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};

add.a = 100
console.dir(add)



var f = function add(x, y) {
    return x + y;
};

var f = function (x, y) {
    return x + y;
};

function add (x, y) {
    return x + y;
};


// 호이스팅
// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문, 전체가 호이스팅되어 위로 올라감
function add(x, y) {
    return x + y;
}

// 함수 표현식, 이름만 호이스팅되어 위로 올라감
var sub = function (x, y) {
    return x - y;
};


// 화살표 함수
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7

// return만 있는 경우 return 생략되어 위와 같은 모습
const add = function (x, y) {
    return x + y
};

// 값이 하나만 있는 경우에는 앞에 괄호조차 생략
const sqare = x => x**2;



function add(x, y) {
    console.log(x, y); // 2 5
    return x + y;
}
add(2, 5);
// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined


function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN



// ...은 한국어로 전개구문, Spread Syntax
function add(x, y, ...a) {
    console.log(a)
    return x + y;
}
add(2, 5, 1, 1, 2, 3, 4);




function foo () {
    return;
}
console.log(foo()); // undefined



// 'return, "return을 전역에서 실행하면 서비스가 마비되는 경우도 있음




// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());



// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined
//어차피 실행하지 못해서 의미가 없음.


(function () {
    // ...
}());

(function () {
    // ...
})();

!function () {
    // ...
}();

+function () {
    // ...
}();





// 무조건 실행, 모든 요소들이 로드된 이후에 호출, 1개만 사용 가능
window.onload = function() {
    // 자바스크립트 코드
}
// jquery에서도 다음과 같이 실행
$(document).ready()





function factorial(n) {
    // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
}


//꼬리물기 최적화
// https://abelog.netlify.app/javascript/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%BC%AC%EB%A6%AC%EB%AC%BC%EA%B8%B0-%EC%B5%9C%EC%A0%81%ED%99%94/

// https://velog.io/@yesdoing/%EA%BC%AC%EB%A6%AC-%EB%AC%BC%EA%B8%B0-%EC%B5%9C%EC%A0%81%ED%99%94Tail-Call-Optimization%EB%9E%80-2yjnslo7sr


// n만큼 더하는 것
const sum = (v, prev = 0)=>{
	prev += v;
	return (v > 1 ? sum(v - 1, prev) : prev);
};
sum(3);


// tail recursion
const sum = (v, prev = 0)=>{
	prev += v;
	return ()
};

// loop
const sum = (v)=>{
	let prev = 0;
	while(v > 1){
		prev += v
		v--;
	}
	return prev;
}


function outer() {
    var x = 1;
  
    // 중첩 함수
    function inner() {
      var y = 2;
      // 외부 함수의 변수를 참조할 수 있다.
      console.log(x + y); // 3
    }
  
    inner();
  }
  
  outer();




  //콜백함수

  // 외부에서 전달받은 f를 n만큼 반복 호출한다
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
      f(i); // i를 전달하면서 f를 호출
    }
  }
  
  var logAll = function (i) {
    console.log(i);
  };
  
  // 반복 호출할 함수를 인수로 전달한다.
  repeat(5, logAll); // 0 1 2 3 4
  
  var logOdds = function (i) {
    if (i % 2) console.log(i);
  };
  
  // 반복 호출할 함수를 인수로 전달한다.
  repeat(5, logOdds); // 1 3


// let, const, var
// 변수의 유효 범위
let x = 1;

if (true) {
    let x = 10;
    console.log(x); // 10
}

console.log(x); // 1




// 변수의 유효범위 2
var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수
if (true) {
    var var2 = 2; // 코드 블록 내에서 선언한 변수
    if (true) {
        var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo() {
    var var4 = 4; // 함수 내에서 선언한 변수
    function bar() {
        var var5 = 5; // 중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // ReferenceError: var4 is not defined
console.log(var5); // ReferenceError: var5 is not defined


// 중복선언
function foo() {
    var x = 1;
    // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
    // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
    var x = 2;
    console.log(x); // 2
}
foo();

// 변수 중복선언 2
function bar() {
    let x = 1;
    // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
    let x = 2; // SyntaxError: Identifier 'x' has already been declared
}
bar();


// 전역함수와 중첩함수
// 전역 함수
function foo() {
    console.log('global function foo');
  }
  
  function bar() {
    // 중첩 함수
    function foo() {
      console.log('local function foo');
    }
  
    foo(); // ①
  }
  
  bar();


// 블록레벨변수를 사용하자.
  var i = 10;

// for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// 의도치 않게 변수의 값이 변경되었다.
console.log(i); // 5




// 함수의 호이스팅 때문에 전역에서 여러 함수가 선언되었을 때 단점

function add(x, y) {
    return x + y
}
// code 10000줄
function add(x, y) {
    return `${x} + ${y} = ${x + y}`
}

add(10, 20)

// 해결점 1 (즉시 실행 함수, 스코프를 강제로 만듬, file concat을 이용해 다 합쳐버림(옜날 방식))
(function () {
    var foo = 10; // 즉시 실행 함수의 지역 변수
    // ...
  }());
  
  console.log(foo); // ReferenceError: foo is not defined

// 해결점 2 (모두 객체로만 접근 가능, 옜날 방식, 지금은 웹팩이 해결해줌)
// a.js
var a = {}; // 전역 네임스페이스 객체

a.name = 'Lee';
console.log(a.name); // Lee

// b.js
var b = {}; // 전역 네임스페이스 객체

b.name = 'Lee';
console.log(b.name); // Lee

// ES6 부터는 모듈을 제공합니다. 아래처럼 사용하게 되면 해당 var로 선언된 변수들은 모두 그 안에서만 작동합니다.
// 확장자는 mjs를 권장합니다.
// <script type="module" src="lib.mjs"></script>
// <script type="module" src="app.mjs"></script>


// 같은 단어 선택 후 전체 수정은 Ctrl + D
let foo = 1; // 전역 변수

{
    // TDZ : Temporal Dead Zone
    console.log(foo);
    let foo = 2; // 지역 변수
    let bar = 3; // 지역 변수
    console.log(foo);
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined

// const, let, var 어지간하면 const로 사용합시다!

// __proto__는 지들 맘대로 쓰다가 es6에서 그래 표준으로 만들어줄게! 대신 빨리 없애! -> 이제는 Object.getPrototypeOf


const person = {
name: 'Lee'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}



///// getter와 setter

const person = {
// 데이터 프로퍼티
firstName: 'Ungmo',
lastName: 'Lee',

// fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
// getter 함수
get fullName() {
    return `${this.firstName} ${this.lastName}`;
},
// setter 함수
set fullName(name) {
    // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
    [this.firstName, this.lastName] = name.split(' ');
}
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'Heegun Lee';
console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
// {value: "Heegun", writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
// {get: ƒ, set: ƒ, enumerable: true, configurable: true}



// 16-8
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
value: 'Ungmo',
writable: true, // 변경 가능 여부, 기본값 false
enumerable: true, // 열거(for) 가능 여부, 기본값 false
configurable: true // 재정의 가능 여부, 기본값 false
});

Object.defineProperty(person, 'lastName', {
value: 'Lee'
});

  // es7 문법에 추가된 것 중 하나

let person = {};
person.name = 'hojun'
Object.getOwnPropertyDescriptor(person, 'name');

{value: 'hojun', writable: true, enumerable: true, configurable: true}configurable: trueenumerable: truevalue: "hojun"writable: true[[Prototype]]: Object

Object.getOwnPropertyDescriptors(person);
//   {name: {…}}

const xx = Object.getOwnPropertyDescriptors(person);
xx
//   {name: {…}}
xx.name = 'jung'
'jung'
xx.name
'jung'
person.name
'hojun'

// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);




// 빈 객체의 생성
const person = new Object();
const person2 = {};

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: "Lee", sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee




// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj); // object
console.log(strObj);        // String {"Lee"}

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj);        // Number {123}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj= new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj);        // Boolean {true}

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.dir(func);        // ƒ anonymous(x)

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr);        // [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp);        // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date);        // Mon May 04 2020 08:36:33 GMT+0900 (대한민국 표준시)



// 생성자 함수
function Circle(radius) {
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성



// 생성자(constructor) 함수
function Circle(radius) {
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성


// 생성자(constructor) 함수
// python의 factory 함수
function 승수(수) {
  // 인스턴스 초기화
  this.수 = 수;
  this.승 = function (x) {
    return x**this.수;
  };
}

// 인스턴스 생성
const 하나 = new 승수(2);
const 둘 = new 승수(3);


// 생성자(constructor) 함수
// python의 factory 함수
// new와 this가 없으면 휘발됨
// 다른 Array, Boolean 등은 생성자 없어도 동일 동작
function 승수(수) {
  // 인스턴스 초기화
  수 = 수;
  승 = function (x) {
    return x**this.수;
  };
}

// 인스턴스 생성
const 하나 = new 승수(2);
const 둘 = new 승수(3);



// name 프로퍼티 확인
function square(number) {
  return number * number;
}
console.dir(square);

console.dir(function (number) {
  return number * number;
})


// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function() {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

var anonymousFunc = x => x**2;
// anonymousFunc


// 이게 진짜 익명함수!
console.dir(function (x, y) {
  return x + y;
})
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/name



// 함수 선언문(Function declaration)
function bar() {}
console.log(bar.name); // bar



////////// 12월 2일에 실습할 내용 //////////

// 1 //

// JS의 모든 선언은 호이스팅(선언이 먼저 메모리에 저장)이 일어납니다.
// 그러나 let, const, class 이용한 선언문은 호이스팅이 되었지만 안된 것처럼 동작
// 이러한 현상은 일시적 사각지대(Temporal Dead Zone)에 빠지기 때문
// 중요한 포인트는 그렇다하여 호이스팅이 안된 것은 아니라는 것!
// 오류가 나는 이유는 var 키워드는 선언과 함께 undefined로 초기화
// let과 const는 초기화 되지 않는 상태로 선언만 메모리 저장
console.log(add1(10, 20)); // 30
console.log(add2(10, 20)); // 30
console.log(mul1) // undefined
// console.log(mul1(10, 20)); // not a function
// console.log(mul2); // Cannot access 'mul2' before initialization
// console.log(mul2(10, 20)); // 위와 같은 애러
console.log(mul3) // mul3 is not defined, 호이스팅이 안되었기 때문

function add1(x, y) {
    return x + y;
}

function add2(x, y) {
    return x + y;
}


var mul1 = function (a, b) {
    return a * b;
}

let mul2 = function (a, b) {
    return a * b;
}

// 2 //
// 재귀함수(Recursion)
function factorial(n) {
  if (n <= 1){
    return n;
  }
  return n * factorial(n-1);
}

function sum(n) {
  if (n <= 1){
    return n;
  }
  return n + sum(n-1);
}

function reverse(text) {
  text = text + ''
  if (text.length <= 1){
    return text;
  }
  return reverse(text.slice(1)) + text[0];
}

function fib(n) {
  if (n <= 2) {
      return n
  } 
  return fib(n-1) + fib(n-2)
}

fib(7)

// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = []
function fibo(n){
  if (n in fibo_cache) {
    return fibo_cache[n]
  }
  fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
  return fibo_cache[n]
}

fibo_cache[]

// 1번 : fibo_cache[5] = fibo(3) + fibo(4)
// 2번 : fibo_cache[3] = fibo(1) + fibo(2)
// 2번 : fibo_cache[1] = 1
// 2번 : fibo_cache[2] = fibo(0) + fibo(1)
// 2번 : fibo_cache[0] = 0
// 2번 : fibo_cache[1] = 1 (이미 있는 값)

// 동적계획법, 동적프로그래밍, 다이나믹 프로그링



// 3 //
// 즉시 실행함수

// 익명 즉시 실행 함수
(function () {
  var a = 1;
  var b = 2;
  return a + b;
}());


// 기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
}());

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리



// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);

function 제곱(x){
  return x**2
}
let 값2 = array.map(제곱);
let 값3 = array.map(Math.sqrt);  //sqrt는 square root

let 학생 = [
  {name:"a", score:90},
  {name:"b", score:80},
  {name:"c", score:70},
  {name:"d", score:60}
];
let scoreSet = 학생.map(학생 => 학생.score)
console.log(scoreSet); 

let s = 0;
let 학생 = [
  {name:"a", score:90},
  {name:"b", score:80},
  {name:"c", score:70},
  {name:"d", score:60}
];
학생.map(학생 => 학생.score).forEach(v => s+=v)
console.log(s);

let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newData = data.map(array => array.map(number => number * 2));
console.log(newData);


// filter
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const numbers = [2, 5, 1, 2, 10, 7, 2]; 
const result = numbers.filter(number => number > 4);
console.log(result);

let data = [
  {회원번호:0, 아이디:'a', 성별:'남', 나이:21},
  {회원번호:1, 아이디:'b', 성별:'남', 나이:17},
  {회원번호:2, 아이디:'c', 성별:'여', 나이:6},
  {회원번호:3, 아이디:'d', 성별:'여', 나이:55}
]
// 요소, 인덱스(Optional), 기존의배열(Optional)
let result = data.filter((el, idx, array) => {
  return el.나이 >= 20 && el.성별 === '남'
});

console.log(result)





let blogs = [{
  id : 1,
  title : 'title1',
  content : 'content1',
  section : 'section1',
}, {
  id : 2,
  title : 'title2',
  content : 'content2',
  section : 'section2',
}, {
  id : 3,
  title : 'title3',
  content : 'content3',
  section : 'section3',
}];

let section = 'section3';
let data = section ? blogs.filter(b => b.section === section) : blogs;



// find는 찾으면 break, 중복되지 않는 값에서 사용하면 효율을 높일 수 잇습니다.
let id = 1
blogs.find(b => b.id === id)



////////////////////


function sum() {
  // arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2));          // 3
console.log(sum(1, 2, 3, 4, 5)); // 15


// 한 단계 깊은 복사
let a = [1, 2, 3];
let b = a.slice();
a === b
b[2] = 100
const json = JSON.parse(JSON.stringify(obj));

// 이렇게!
const array = Array.prototype.slice.call(arguments);

// ES6는 이렇게!
let c = [...a];
c[2] = 100



// ES6 Rest parameter
function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2));          // 3
console.log(sum(1, 2, 3, 4, 5)); // 15

// 넘어온 아규먼트의 갯수가 아니라 파라미터의 갯수
function test(a, b) {
  console.log(test.length);
}

test(1, 2, 3, 4, 5)

//---//

const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty('a'));         // true
console.log(obj.hasOwnProperty('__proto__')); // false




// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}).hasOwnProperty('prototype'); // -> true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); // -> false


////////////////

// 아래처럼 구현하지 않고!
const circle = {
  radius: 5, // 반지름

  // 원의 지름: 2r
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레: 2πr
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이: πrr
  getArea() {
    return Math.PI * this.radius ** 2;
  }
};

console.log(circle);
// {radius: 5, getDiameter: ƒ, getPerimeter: ƒ, getArea: ƒ}

console.log(circle.getDiameter());  // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea());      // 78.53981633974483


// 이런 식으로 구현하면 되는 것이 아니냐?
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    // Math.PI는 원주율을 나타내는 상수다.
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); // false

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172


// 엄격모드 //

function test() {
  x = 100;
}
test();

console.log(x); // 100
// 마치 전역인 것처럼 실행

'use strict';

function test() {
  x = 10; // ReferenceError: x is not defined
}
test();

// 함수 내부에서만 사용도 가능 (할꺼면 다 하고, 아니면 하지 말자, 햇갈린다.)
function test() {
  'use strict';

  x = 100; // ReferenceError: x is not defined
}
test();


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Language_Resources
// es별 업데이트 정리
// https://velog.io/@katanazero86/ES6-ES9-%EA%B0%84%EB%9E%B5-%EC%A0%95%EB%A6%AC
// ES6 => ES2015 (ECMAScript 2015)
// ES7 => ES2016 (ECMAScript 2016)
// ES8 => ES2017 (ECMAScript 2017)
// ES9 => ES2018 (ECMAScript 2018)
// ...
// ES12 => ES2021 (ECMAScript 2021)
// https://chanyeong.com/blog/post/29



//globalThis


// 어디서나 전역객체 접근 가능
// globalThis, self, frames


// 두 개를 보면 피하자.
// 표현식인 문
eval('1 + 2;'); // -> 3
// 표현식이 아닌 문
eval('var x = 5;'); // -> undefined

whit()

// private 변수 개념 도입
class Person {
  #age;
  constructor(name, age){
    this.name = name;
    this.#age = age;
  }
  sayHi(){
    console.log(`my name ${this.name} ${this.#age}`);
  }
}

let me = new Person('leehojun', 10)
me.sayHi()
// me.name은 가능하지만 me.age는 가능하지 않음

// 자바스크립트 딥다이브 예제

var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () { return i; }; // ①
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // ②
}

////

const funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function () { return i; };
}

for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]()); // 0 1 2
}

////

var funcs = [];

for (var i = 0; i < 3; i++){
  funcs[i] = (function (id) { // ①
    return function () {
      return id;
    };
  }(i));
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}

// 클래스 // 

// ES5 생성자 함수
var Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log('Hi! My name is ' + this.name);
  };

  // 생성자 함수 반환
  return Person;
}());

// 인스턴스 생성
var me = new Person('Lee');
me.sayHi(); // Hi! My name is Lee


// ES6
// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log('Hello!');
  }
}

// 인스턴스 생성
const me = new Person('Lee');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메서드 호출
Person.sayHello(); // Hello!



// 클래스는 함수로 평가됩니다.
// 클래스 선언문
class Person {}

console.log(typeof Person); // function


// constructor는 기본적으로 실행
// 없어도 초기화됨
// 별도의 반환문을 가지면 안됨
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}


// 아래와 같이 2개 선언하면 애러
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

// 초기화 하기 위해 사용
class Person {
  constructor(name, address) {
    // 인수로 인스턴스 초기화
    this.name = name;
    this.address = address;
  }
}

// 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
const me = new Person('Lee', 'Seoul');
console.log(me); // Person {name: "Lee", address: "Seoul"}


// 아래와 같이 생성하면 me는 object가 됩니다.
class Person {
  constructor(name) {
    this.name = name;

    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
  }
}

// constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me = new Person('Lee');
console.log(me); // {}


// 아래와 같이 선언되면 array가 됩니다.
class Person {
  constructor(name) {
    this.name = name;

    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return [1, 2, 3];
  }
}

// constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me = new Person('Lee');
console.log(me); // {}


//

class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me = new Person('Lee');
me.sayHi(); // Hi! My name is Lee
console.dir(me)// 여기에 prototype 안에 sayHi가 있습니다.

/////////////////////

class Person {
  // 생성자
  constructor(name) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Person {}
    console.log(Object.getPrototypeOf(this) === Person.prototype); // true

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.name = name;

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }
}



////////// getter와 setter

const person = {
  // 데이터 프로퍼티
  firstName: 'Ungmo',
  lastName: 'Lee',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당: "36.1. 배열 디스트럭처링 할당" 참고
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${person.firstName} ${person.lastName}`); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'Heegun Lee';
console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
// {get: ƒ, set: ƒ, enumerable: true, configurable: true}



///////////////////

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const me = new Person('Ungmo', 'Lee');

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${me.firstName} ${me.lastName}`); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
me.fullName = 'Heegun Lee';
console.log(me); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(me.fullName); // Heegun Lee

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}


// javascript에서는 class안에서 함수만 정의가 가능했었다. 그러나 ECMA2022 표준이 될 내용으로 안에 내용만 넣는 것도 가능해졌다. 지금은 Node 12버전 이상, 크롬 최신 브라우저에서 동작한다.
class Person {
  // 클래스 필드 정의
  name = 'Lee';
}

const me = new Person();
console.log(me); // Person {name: "Lee"}



////

class Person {
  // 클래스 필드에서는 this가 있는 것처럼 동작
  name = 'Lee';

  constructor() {
    // 여기서는 동일하게 this를 사용해야 함
    console.log(name); // ReferenceError: name is not defined
  }
}

new Person();



////

class Person {
  // 클래스 필드를 초기화하지 않으면 undefined를 갖는다.
  name;
}

const me = new Person();
console.log(me); // Person {name: undefined}


/////
class Person {
  // 클래스 필드에 문자열을 할당
  name = 'Lee';

  // 클래스 필드에 함수를 할당
  getName = function () {
    return this.name;
  }
  // 화살표 함수로 정의할 수도 있다.
  getName2 = () => this.name;
}

const me = new Person();
console.log(me); // Person {name: "Lee", getName: ƒ}
console.log(me.getName()); // Lee

///
document.body.innerHTML += '<button class="btn">0</button>'
class App {
  constructor() {
    this.$button = document.querySelector('.btn');
    this.count = 0;

    // increase 메서드를 이벤트 핸들러로 등록
    // 이벤트 핸들러 increase 내부의 this는 DOM 요소(this.$button)를 가리킨다.
    // 하지만 increase는 화살표 함수로 정의되어 있으므로
    // increase 내부의 this는 인스턴스를 가리킨다.
    this.$button.onclick = this.increase;

    // 만약 increase가 화살표 함수가 아니라면 bind 메서드를 사용해야 한다.
    // $button.onclick = this.increase.bind(this);
  }

  // 인스턴스 메서드
  // 화살표 함수 내부의 this는 언제나 상위 컨텍스트의 this를 가리킨다.
  increase = () => this.$button.textContent = ++this.count;
}
new App();



// 옜날에 썼던 방식 //
document.body.innerHTML += '<button class="btn">0</button>'
class App {
  constructor() {
    this.button = document.querySelector('.btn');
    this.count = 0;
    this.increase = this.increase.bind(this);
    this.button.onclick = this.increase;
  }

  increase(){
    this.button.textContent = ++this.count;
  }
}
new App();

// private 정의

class Person {
  // private 필드 정의
  #name = '';

  constructor(name) {
    // private 필드 참조
    this.#name = name;
  }
}

const me = new Person('Lee');

// private 필드 #name은 클래스 외부에서 참조할 수 없다.
console.log(me.#name);
// SyntaxError: Private field '#name' must be declared in an enclosing class


// static block도 이제 곧 생길 예정
class MyMath {
  // static public 필드 정의
  static PI = 22 / 7;

  // static private 필드 정의
  static #num = 10;

  // static 메서드
  static increment() {
    return ++MyMath.#num;
  }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 11




//// 상속 ////

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() { return 'eat'; }

  move() { return 'move'; }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() { return 'fly'; }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat());  // eat
console.log(bird.move()); // move
console.log(bird.fly());  // fly

// console.dir(bird) // 이걸 통해 부모를 알아낼 수 있음 [[Prototype]]: Animal




// 수퍼 클래스 //
// 수퍼클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 서브클래스
class Derived extends Base {
  sayHi() {
    // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived('Lee');
console.log(derived.sayHi()); // Hi! Lee. how are you doing?



//////////////////

const add = (a, b) => a + b;

console.log(add.call(null, 1, 2));    // 3
console.log(add.apply(null, [1, 2])); // 3
console.log(add.bind(null, 1, 2)());  // 3

///// javascript 배열은 엄밀한 의미에 배열이 아니다 /////

// "16.2. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체" 참고
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/*
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true}
  '1': {value: 2, writable: true, enumerable: true, configurable: true}
  '2': {value: 3, writable: true, enumerable: true, configurable: true}
  length: {value: 3, writable: true, enumerable: false, configurable: false}
}
*/


// 배열 Vs 객체의 속도 측정

// 인덱스로 접근하는 것은 느림
// 탐색, 삽입과 삭제는 빠름

const arr = [];

console.time('Array Performance Test');

for (let i = 0; i < 10000000; i++) {
  arr[i] = i;
}
console.timeEnd('Array Performance Test');
// 약 340ms

const obj = {};

console.time('Object Performance Test');

for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}

console.timeEnd('Object Performance Test');
// 약 600ms


// 배열의 길이 늘이기

const arr = [1, 2, 3, 4, 5];

// 현재 length 프로퍼티 값인 5보다 작은 숫자 값 3을 length 프로퍼티에 할당
arr.length = 3;

// 배열의 길이가 5에서 3으로 줄어든다.
console.log(arr); // [1, 2, 3]



const arr = [1, 2, 3];

// 현재 length 프로퍼티 값인 5보다 작은 숫자 값 3을 length 프로퍼티에 할당
arr.length = 5;
arr[3] = undefined
console.log(arr)
// 빈 공간을 위해 메모리 공간확보 안함


// 어떻게든 애러를 내지 않겠다는 개발자의 흔적이 묻어남.

// 심지어 호이스팅도 됨.
a()
function a(){}
function a(){}


var a = 0;
var a = 0;


a = 0;


function test(){
  x = 10;
}
test()
console.log(x)


// 빈 배열을 만드는 방법
Array(10)
Array(100).fill(0)
Array(100).fill(0).map((value, index)=> value + index)
'.'.repeat(10)
'.'.repeat(10).split('.')
Array.from('abc')
Array.from('a'.repeat(100))



// 배열을 객체처럼 사용할 수도 있다.
// 배열도 객체의 하위 클래스이니 가능
arr = [10, 20, 30]
arr

arr['hello'] = 'hojun'
'hojun'
arr
// 순회는 안함
arr.forEach(x=>console.log(x))
10
20
30




// includes()
const arr = [1, 2, 3];

// 배열에 요소 2가 포함되어 있는지 확인한다.
arr.includes(2); // -> true

// 배열에 요소 100이 포함되어 있는지 확인한다.
arr.includes(100); // -> false

[NaN].indexOf(NaN) !== -1; // -> false
[NaN].includes(NaN);       // -> true

// flat()
[1, [2, [3, [4]]]].flat();  // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화한다.
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
// 2번 평탄화한 것과 동일하다.
[1, [2, [3, [4]]]].flat().flat(); // -> [1, 2, 3, [4]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩 배열 모두를 평탄화한다.
[1, [2, [3, [4]]]].flat(Infinity); // -> [1, 2, 3, 4]


///////
const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i, { length }) => {
  // 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환한다.
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average); // 3.5



/////////////////
// a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
Math.abs(a - b) < Number.EPSILON;

Number.EPSILON; // 이정도 오차는 같은 것으로 인정
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

// 10000000000000001은 안전하지 않다.
Number.isSafeInteger(10000000000000001); // -> false


(77.1234).toExponential();  // -> "7.71234e+1"
(77.1234).toExponential(4); // -> "7.7123e+1"
(77.1234).toExponential(2); // -> "7.71e+1"


// 소수점 이하 반올림. 인수를 생략하면 기본값 0이 지정된다.
(12345.6789).toFixed(); // -> "12346"
// 소수점 이하 1자리수 유효, 나머지 반올림
(12345.6789).toFixed(1); // -> "12345.7"
// 소수점 이하 2자리수 유효, 나머지 반올림
(12345.6789).toFixed(2); // -> "12345.68"
// 소수점 이하 3자리수 유효, 나머지 반올림
(12345.6789).toFixed(3); // -> "12345.679"




Math.abs(-1);        // -> 1
Math.abs('-1');      // -> 1
Math.abs('');        // -> 0
Math.abs([]);        // -> 0
Math.abs(null);      // -> 0
Math.abs(undefined); // -> NaN
Math.abs({});        // -> NaN
Math.abs('string');  // -> NaN
Math.abs();          // -> NaN



Math.round(1.4);  // -> 1
Math.round(1.6);  // -> 2
Math.round(-1.4); // -> -1
Math.round(-1.6); // -> -2
Math.round(1);    // -> 1
Math.round();     // -> NaN



// 음수에 대해 주의가 필요
Math.ceil(1.4);  // -> 2
Math.ceil(1.6);  // -> 2
Math.ceil(-1.4); // -> -1
Math.ceil(-1.6); // -> -1
Math.ceil(1);    // -> 1
Math.ceil();     // -> NaN


// 음수에 대해 주의가 필요
Math.floor(1.9);  // -> 1
Math.floor(9.1);  // -> 9
Math.floor(-1.9); // -> -2
Math.floor(-9.1); // -> -10
Math.floor(1);    // -> 1
Math.floor();     // -> NaN


Math.sqrt(9);  // -> 3
Math.sqrt(-9); // -> NaN
Math.sqrt(2);  // -> 1.414213562373095
Math.sqrt(1);  // -> 1
Math.sqrt(0);  // -> 0
Math.sqrt();   // -> NaN


Math.random(); // 0에서 1 미만의 랜덤 실수(0.8208720231391746)

/*
1에서 10 범위의 랜덤 정수 취득
1) Math.random으로 0에서 1 미만의 랜덤 실수를 구한 다음, 10을 곱해 0에서 10 미만의
랜덤 실수를 구한다.
2) 0에서 10 미만의 랜덤 실수에 1을 더해 1에서 10 범위의 랜덤 실수를 구한다.
3) Math.floor로 1에서 10 범위의 랜덤 실수의 소수점 이하를 떼어 버린 다음 정수를 반환한다.
*/
const random = Math.floor((Math.random() * 10) + 1);
console.log(random); // 1에서 10 범위의 정수


// ES7 지수 연산자
2 ** 2 ** 2; // -> 16
2 ** 3 ** 2; // -> 512
(2 ** 3) ** 2 // -> 64
Math.pow(Math.pow(2, 2), 2); // -> 16


Math.max(1); // -> 1
Math.max(1, 2); // -> 2
Math.max(1, 2, 3); // -> 3
Math.max(); // -> -Infinity


// 배열 요소 중에서 최대값 취득
Math.max.apply(null, [1, 2, 3]); // -> 3

// ES6 스프레드 문법
Math.max(...[1, 2, 3]); // -> 3


new Date(); // -> Mon Jul 06 2020 01:03:18 GMT+0900 (대한민국 표준시)
Date(); // -> "Mon Jul 06 2020 01:10:47 GMT+0900 (대한민국 표준시)"

// 월을 나타내는 2는 3월을 의미한다. 2020/3/1/00:00:00:00
new Date(2020, 2);
// -> Sun Mar 01 2020 00:00:00 GMT+0900 (대한민국 표준시)

// 월을 나타내는 2는 3월을 의미한다.(0부터 시작) 2020/3/26/10:00:00:00
new Date(2020, 2, 26, 10, 00, 00, 0);
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)

// 다음처럼 표현하면 가독성이 훨씬 좋다. 여기에서 문제가 발생! 왜 2가(3월) 아닌가??
new Date('2020/3/26/10:00:00:00');
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)


Date.UTC(1970, 0, 2); // -> 86400000
const today = new Date(); // today의 지정 로캘은 KST다.

//UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60; // -9


const today = new Date('2020/7/24/12:30');

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)


const today = new Date('2020/7/24/12:30');

today.toString();    // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toISOString(); // -> 2020-07-24T03:30:00.000Z

today.toISOString().slice(0, 10); // -> 2020-07-24
today.toISOString().slice(0, 10).replace(/-/g, ''); // -> 20200724



const today = new Date('2020/7/24/12:30');

today.toString(); // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toLocaleString(); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00




const dayNames = [
  '(일요일)',
  '(월요일)',
  '(화요일)',
  '(수요일)',
  '(목요일)',
  '(금요일)',
  '(토요일)'
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';




// 정규표현식 //
const target = 'Is this all there is?';

// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
const regexp = /is/i;

// test 메서드는 target 문자열에 대해 정규표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
regexp.test(target); // -> true


// g는 global
const target = 'Is this all there is?';
const regExp = /is/g;

target.match(regExp); // -> ["is", "is"]



const target = 'Is this all there is?';

// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp = /.../g;

target.match(regExp); // -> ["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]



const target = 'A AA B BB Aa Bb AAA';

// 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{1,2}/g;

target.match(regExp); // -> ["A", "AA", "A", "AA", "A"]




const target = 'A AA B BB Aa Bb AAA';

// 'A'가 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{2}/g;

target.match(regExp); // -> ["AA", "AA"]




const target = 'A AA BB ZZ Aa Bb';

// 'A' ~ 'Z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ... ~ 또는 'Z', 'ZZ', 'ZZZ', ...
const regExp = /[A-Z]+/g;

target.match(regExp); // -> ["A", "AA", "BB", "ZZ", "A", "B"]




const target = 'AA BB 12,345';

// '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\d,]+/g;

target.match(regExp); // -> ["12,345"]

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\D,]+/g;

target.match(regExp); // -> ["AA BB ", ","]



const target = 'Aa Bb 12,345 _$%&';

// 알파벳, 숫자, 언더스코어, ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\w,]+/g;

target.match(regExp); // -> ["Aa", "Bb", "12,345", "_"]

// 알파벳, 숫자, 언더스코어가 아닌 문자 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\W,]+/g;

target.match(regExp); // -> [" ", " ", ",", " $%&"]






const target = 'https://poiemaweb.com';

// 'https'로 시작하는지 검사한다.
const regExp = /^https/;

regExp.test(target); // -> true





// 자주사용하는 정규표현식
const url = 'https://example.com';

// 'http://' 또는 'https://'로 시작하는지 검사한다.
/^https?:\/\//.test(url); // -> true




const fileName = 'index.html';

// 'html'로 끝나는지 검사한다.
/html$/.test(fileName); // -> true




const email = 'ungmo2@gmail.com';

/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email); // -> true


// RFC5322에 맞는 정교한 이메일 패턴에 맞는 매칭 패턴
/*

(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

*/



// 휴대폰 정규표현식
const cellphone = '010-1234-5678';

/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone); // -> true



const strObj = new String('Lee');

console.log(Object.getOwnPropertyDescriptors(strObj));
/* String 래퍼 객체는 읽기 전용 객체다. 즉, writable 프로퍼티 어트리뷰트 값이 false다.
{
  '0': { value: 'L', writable: false, enumerable: true, configurable: false },
  '1': { value: 'e', writable: false, enumerable: true, configurable: false },
  '2': { value: 'e', writable: false, enumerable: true, configurable: false },
  length: { value: 3, writable: false, enumerable: false, configurable: false }
}
*/



// es6에 새로 들어옴
const str = 'Hello world';

str.includes('Hello'); // -> true
str.includes('');      // -> true
str.includes('x');     // -> false
str.includes();


const str = '   foo  ';
str.trim(); // -> 'foo'




const str = 'hello world';

// substring과 slice 메서드는 동일하게 동작한다.
// 0번째부터 5번째 이전 문자까지 잘라내어 반환
str.substring(0, 5); // -> 'hello'
str.slice(0, 5); // -> 'hello'

// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
str.substring(2); // -> 'llo world'
str.slice(2); // -> 'llo world'

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-5); // -> 'hello world'
// slice 메서드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환한다.
str.slice(-5); // ⟶ 'world'



const str = '   foo  ';

// 첫 번째 인수로 전달한 정규 표현식에 매치하는 문자열을 두 번째 인수로 전달한 문자열로 치환한다.
str.replace(/\s/g, '');   // -> 'foo'
str.replace(/^\s+/g, ''); // -> 'foo  '
str.replace(/\s+$/g, ''); // -> '   foo'




const str = 'abc';

str.repeat();    // -> ''
str.repeat(0);   // -> ''
str.repeat(1);   // -> 'abc'
str.repeat(2);   // -> 'abcabc'
str.repeat(2.5); // -> 'abcabc' (2.5 → 2)
str.repeat(-1);  // -> RangeError: Invalid count value



const str = 'How are you doing?';

// 공백으로 구분(단어로 구분)하여 배열로 반환한다.
str.split(' '); // -> ["How", "are", "you", "doing?"]

// \s는 여러 가지 공백 문자(스페이스, 탭 등)를 의미한다. 즉, [\t\r\n\v\f]와 같은 의미다.
str.split(/\s/); // -> ["How", "are", "you", "doing?"]

// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
str.split(''); // -> ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", "?"]

// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
str.split(); // -> ["How are you doing?"]






// Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
// 특이한 점은 new로 호출할 수 없다.
const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

// 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol);        // Symbol()



// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2); // false



const mySymbol = Symbol('mySymbol');

// 심벌도 레퍼 객체를 생성한다
console.log(mySymbol.description); // mySymbol
console.log(mySymbol.toString());  // Symbol(mySymbol)


let x = Symbol('a')
let y = Symbol('a')
x === y //false
x.description === y.description



// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s1 = Symbol.for('mySymbol');
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
const s2 = Symbol.for('mySymbol');

console.log(s1 === s2); // true




// 위, 아래, 왼쪽, 오른쪽을 나타내는 상수를 정의한다.
// 이때 값 1, 2, 3, 4에는 특별한 의미가 없고 상수 이름에 의미가 있다.
const Direction = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4
};

// 변수에 상수를 할당
const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
  console.log('You are going UP.');
}




// 견고한 프로그래밍을 위해 나온 친구
// 위, 아래, 왼쪽, 오른쪽을 나타내는 상수를 정의한다.
// 중복될 가능성이 없는 심벌 값으로 상수 값을 생성한다.
const Direction = {
  UP: Symbol('up'),
  DOWN: Symbol('down'),
  LEFT: Symbol('left'),
  RIGHT: Symbol('right')
};

const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
  console.log('You are going UP.');
}





// 브라우저의 렌더링 과정
/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <script>
      
      DOM API인 document.getElementById는 DOM에서 id가 'apple'인 HTML 요소를
      취득한다. 아래 DOM API가 실행되는 시점에는 아직 id가 'apple'인 HTML 요소를 파싱하지
      않았기 때문에 DOM에는 id가 'apple'인 HTML 요소가 포함되어 있지 않다.
      따라서 아래 코드는 정상적으로 id가 'apple'인 HTML 요소를 취득하지 못한다.
      
      const $apple = document.getElementById('apple');

      // id가 'apple'인 HTML 요소의 css color 프로퍼티 값을 변경한다.
      // 이때 DOM에는 id가 'apple'인 HTML 요소가 포함되어 있지 않기 때문에 에러가 발생한다.
      $apple.style.color = 'red'; // TypeError: Cannot read property 'style' of null
    </script>
  </head>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
  </body>
</html>
*/


// 순서가 보장되지 않는다.

/*
// test.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <script src="test.js" async></script>
  </head>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
  </body>
</html>
*/

/*
// test.js
const $apple = document.getElementById('apple');

$apple.style.color = 'red';
*/


/*
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
    <script>
      // id 값이 'grape'인 요소 노드를 탐색하여 반환한다. null이 반환된다.
      const $elem = document.getElementById('grape');

      // 취득한 요소 노드의 style.color 프로퍼티 값을 변경한다.
      $elem.style.color = 'red';
      // -> TypeError: Cannot read property 'style' of null
    </script>
  </body>
</html>
*/


// 매우 중요
// DOM 실습

// console.log(apple)
// console.log(banana)
// banana.style.color = 'red'
// document.getElementsByTagName('li')

// for (let i of document.getElementsByTagName('li')){
//  i.style.color = 'red';
//}
// [...$elems].forEach(elem => { elem.style.color = 'red'; });

// document.getElementsByTagName('*')

// 취득한 모든 요소의 CSS color 프로퍼티 값을 변경한다.
// const $elems = document.getElementsByClassName('fruit');
// [...$elems].forEach(elem => { elem.style.color = 'red'; });


// class 어트리뷰트 값이 'banana'인 첫 번째 요소 노드를 탐색하여 반환한다.
// const $elem = document.querySelector('.banana');
// 취득한 요소 노드의 style.color 프로퍼티 값을 변경한다.
// $elem.style.color = 'red';



// ul 요소의 자식 요소인 li 요소를 모두 탐색하여 반환한다.
// const $elems = document.querySelectorAll('ul > li');
// 취득한 요소 노드들은 NodeList 객체에 담겨 반환된다.
// console.log($elems); // NodeList(3) [li.apple, li.banana, li.orange]
// 취득한 모든 요소 노드의 style.color 프로퍼티 값을 변경한다.
// NodeList는 forEach 메서드를 제공한다.
// $elems.forEach(elem => { elem.style.color = 'red'; });


/*
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li id="apple" class="fruit">Apple</li>
      <li id="apple" class="fruit">Apple</li>
      <li id="banana" class="banana fruit">Banana</li>
      <li id="orange" class="fruit">Orange</li>
    </ul>
  </body>
</html>
*/

// DOM은 살아있기 때문에 아래와 같은 문제가 발생할 수 있다!

/*
<!DOCTYPE html>
<head>
  <style>
    .red { color: red; }
    .blue { color: blue; }
  </style>
</head>
<html>
  <body>
    <ul id="fruits">
      <li class="red">Apple</li>
      <li class="red">Banana</li>
      <li class="red">Orange</li>
    </ul>
    <script>
      // class 값이 'red'인 요소 노드를 모두 탐색하여 HTMLCollection 객체에 담아 반환한다.
      const $elems = document.getElementsByClassName('red');
      // 이 시점에 HTMLCollection 객체에는 3개의 요소 노드가 담겨 있다.
      console.log($elems); // HTMLCollection(3) [li.red, li.red, li.red]

      // HTMLCollection 객체의 모든 요소의 class 값을 'blue'로 변경한다.
      for (let i = 0; i < $elems.length; i++) {
        $elems[i].className = 'blue';
      }

      // HTMLCollection 객체의 요소가 3개에서 1개로 변경되었다.
      console.log($elems); // HTMLCollection(1) [li.red]
    </script>
  </body>
</html>
*/ 

// 아래와 같이 해결 가능 (역방향 순회도 회피 가능합니다. 또는 querySelectorAll로도 해결 가능(실시간이 아니라 노드로 잡기 때문에))
// 유사 배열 객체이면서 이터러블인 HTMLCollection을 배열로 변환하여 순회
// [...$elems].forEach(elem => elem.className = 'blue');


/*
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits"></ul>
  </body>
  <script>
    const $fruits = document.getElementById('fruits');

    ['Apple', 'Banana', 'Orange'].forEach(text => {
      // 1. 요소 노드 생성
      const $li = document.createElement('li');

      // 2. 텍스트 노드 생성
      const textNode = document.createTextNode(text);

      // 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
      $li.appendChild(textNode);

      // 4. $li 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
      $fruits.appendChild($li);
    });
  </script>
</html>
*/

/*
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits"></ul>
  </body>
  <script>
    const $fruits = document.getElementById('fruits');

    // 컨테이너 요소 노드 생성
    const $container = document.createElement('div');

    ['Apple', 'Banana', 'Orange'].forEach(text => {
      // 1. 요소 노드 생성
      const $li = document.createElement('li');

      // 2. 텍스트 노드 생성
      const textNode = document.createTextNode(text);

      // 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
      $li.appendChild(textNode);

      // 4. $li 요소 노드를 컨테이너 요소의 마지막 자식 노드로 추가
      $container.appendChild($li);
    });

    // 5. 컨테이너 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
    $fruits.appendChild($container);
  </script>
</html>
*/



/* 노드 삽입 */
/*
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </body>
  <script>
    // 요소 노드 생성
    const $li = document.createElement('li');

    // 텍스트 노드를 $li 요소 노드의 마지막 자식 노드로 추가
    $li.appendChild(document.createTextNode('Orange'));

    // $li 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
    document.getElementById('fruits').appendChild($li);
  </script>
</html>
*/


// <!DOCTYPE html>
// <html>
//   <body>
//     <ul id="fruits">
//       <li>Apple</li>
//       <li>Banana</li>
//     </ul>
//   </body>
//   <script>
//     const $fruits = document.getElementById('fruits');

//     // 요소 노드 생성
//     const $li = document.createElement('li');

//     // 텍스트 노드를 $li 요소 노드의 마지막 자식 노드로 추가
//     $li.appendChild(document.createTextNode('Orange'));

//     // $li 요소 노드를 #fruits 요소 노드의 마지막 자식 요소 앞에 삽입
//     $fruits.insertBefore($li, $fruits.lastElementChild);
//     // Apple - Orange - Banana
//   </script>
// </html>



// <!DOCTYPE html>
// <html>
//   <body>
//     <div>test</div>
//     <ul id="fruits">
//       <li>Apple</li>
//       <li>Banana</li>
//     </ul>
//   </body>
//   <script>
//     const $fruits = document.getElementById('fruits');

//     // 요소 노드 생성
//     const $li = document.createElement('li');

//     // 텍스트 노드를 $li 요소 노드의 마지막 자식 노드로 추가
//     $li.appendChild(document.createTextNode('Orange'));

//     // 두 번째 인수로 전달받은 노드는 반드시 #fruits 요소 노드의 자식 노드이어야 한다.
//     $fruits.insertBefore($li, document.querySelector('div'));
//     // DOMException
//   </script>
// </html>



// <!DOCTYPE html>
// <html>
//   <body>
//     <ul id="fruits">
//       <li>Apple</li>
//       <li>Banana</li>
//     </ul>
//   </body>
//   <script>
//     const $fruits = document.getElementById('fruits');

//     // 요소 노드 생성
//     const $li = document.createElement('li');

//     // 텍스트 노드를 $li 요소 노드의 마지막 자식 노드로 추가
//     $li.appendChild(document.createTextNode('Orange'));

//     // 두 번째 인수로 전달받은 노드가 null이면 $li 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
//     $fruits.insertBefore($li, null);
//   </script>
// </html>


// 노드 이동
// <!DOCTYPE html>
// <html>
//   <body>
//     <ul id="fruits">
//       <li>Apple</li>
//       <li>Banana</li>
//       <li>Orange</li>
//     </ul>
//   </body>
//   <script>
//     const $fruits = document.getElementById('fruits');

//     // 이미 존재하는 요소 노드를 취득
//     const [$apple, $banana, ] = $fruits.children;

//     // 이미 존재하는 $apple 요소 노드를 #fruits 요소 노드의 마지막 노드로 이동
//     $fruits.appendChild($apple); // Banana - Orange - Apple

//     // 이미 존재하는 $banana 요소 노드를 #fruits 요소의 마지막 자식 노드 앞으로 이동
//     $fruits.insertBefore($banana, $fruits.lastElementChild);
//     // Orange - Banana - Apple
//   </script>
// </html>


// 노드 복사
// <!DOCTYPE html>
// <html>
//   <body>
//     <ul id="fruits">
//       <li>Apple</li>
//     </ul>
//   </body>
//   <script>
//     const $fruits = document.getElementById('fruits');
//     const $apple = $fruits.firstElementChild;

//     // $apple 요소를 얕은 복사하여 사본을 생성. 텍스트 노드가 없는 사본이 생성된다.
//     const $shallowClone = $apple.cloneNode();
//     // 사본 요소 노드에 텍스트 추가
//     $shallowClone.textContent = 'Banana';
//     // 사본 요소 노드를 #fruits 요소 노드의 마지막 노드로 추가
//     $fruits.appendChild($shallowClone);

//     // #fruits 요소를 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성
//     const $deepClone = $fruits.cloneNode(true);
//     // 사본 요소 노드를 #fruits 요소 노드의 마지막 노드로 추가
//     $fruits.appendChild($deepClone);
//   </script>
// </html>


// 노드 교체
// <!DOCTYPE html>
// <html>
//   <body>
//     <ul id="fruits">
//       <li>Apple</li>
//     </ul>
//   </body>
//   <script>
//     const $fruits = document.getElementById('fruits');

//     // 기존 노드와 교체할 요소 노드를 생성
//     const $newChild = document.createElement('li');
//     $newChild.textContent = 'Banana';

//     // #fruits 요소 노드의 첫 번째 자식 요소 노드를 $newChild 요소 노드로 교체
//     $fruits.replaceChild($newChild, $fruits.firstElementChild);
//   </script>
// </html>



// 노드 삭제
// <!DOCTYPE html>
// <html>
//   <body>
//     <ul id="fruits">
//       <li>Apple</li>
//       <li>Banana</li>
//     </ul>
//   </body>
//   <script>
//     const $fruits = document.getElementById('fruits');

//     // #fruits 요소 노드의 마지막 요소를 DOM에서 삭제
//     $fruits.removeChild($fruits.lastElementChild);
//   </script>
// </html>


// 어티리뷰트 값 취득
// 초기 상태 값이고 이것을 바꾸더라도 실제 바뀌지 않는다. 언제나 동일하다. 그래서 DOM 프로퍼티를 호출해야 한다.
// <!DOCTYPE html>
// <html>
// <body>
//   <input id="user" type="text" value="ungmo2">
//   <script>
//     // 요소 노드의 attribute 프로퍼티는 요소 노드의 모든 어트리뷰트 노드의 참조가 담긴 NamedNodeMap 객체를 반환한다.
//     const { attributes } = document.getElementById('user');
//     console.log(attributes);
//     // NamedNodeMap {0: id, 1: type, 2: value, id: id, type: type, value: value, length: 3}

//     // 어트리뷰트 값 취득
//     console.log(attributes.id.value); // user
//     console.log(attributes.type.value); // text
//     console.log(attributes.value.value); // ungmo2
//   </script>
// </body>
// </html>


// data 어트리뷰트와 dataset 프로퍼티
// 주의 : 카멜 케이스소 바꾼 값을 가지고 있다!!

// <!DOCTYPE html>
// <html>
// <body>
//   <ul class="users">
//     <li id="1" data-user-id="7621" data-role="admin">Lee</li>
//     <li id="2" data-user-id="9524" data-role="subscriber">Kim</li>
//   </ul>
//   <script>
//     const users = [...document.querySelector('.users').children];

//     // user-id가 '7621'인 요소 노드를 취득한다.
//     const user = users.find(user => user.dataset.userId === '7621');
//     // user-id가 '7621'인 요소 노드에서 data-role의 값을 취득한다.
//     console.log(user.dataset.role); // "admin"

//     // user-id가 '7621'인 요소 노드의 data-role 값을 변경한다.
//     user.dataset.role = 'subscriber';
//     // dataset 프로퍼티는 DOMStringMap 객체를 반환한다.
//     console.log(user.dataset); // DOMStringMap {userId: "7621", role: "subscriber"}
//   </script>
// </body>
// </html>


// 인라인 스타일 조작
// <!DOCTYPE html>
// <html>
// <body>
//   <div style="color: red">Hello World</div>
//   <script>
//     const $div = document.querySelector('div');

//     // 인라인 스타일 취득
//     console.log($div.style); // CSSStyleDeclaration { 0: "color", ... }

//     // 인라인 스타일 변경
//     $div.style.color = 'blue';

//     // 인라인 스타일 추가
//     $div.style.width = '100px';
//     $div.style.height = '100px';
//     $div.style.backgroundColor = 'yellow';
//     $div.style['border'] = 'solid 1px black';

//     // 콘솔창에서 실행
//     // $div.style.borderColor = 'red';
//     // 'red'
//     // $div.style['border-color'] = 'blue';
//     // 'blue'
//     // $div.classList
//     //$div.classList.add('aaa')
//     // $div.classList.remove('aaa')
//     // jqeury가 없어도 충분히 잘 컨트롤 됨!
//     // item(index), contains(className), replace(oldClassName, newClassName), toggle(className)
//   </script>
// </body>
// </html>




// 이터러블 객체 구현(순회 가능한 객체 구현)
// {
//   [Symbol.iterator](){
//     return {
//       next(){
//         return {value : any, done : boolean}
//       }
//     }
//   }
// }


// const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

// // 배열, 문자열, Map, Set 등은 이터러블이다.
// isIterable([]);        // -> true
// isIterable('');        // -> true
// isIterable(new Map()); // -> true
// isIterable(new Set()); // -> true
// isIterable({});        // -> false




// const array = [1, 2, 3];

// // 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
// console.log(Symbol.iterator in array); // true

// // 이터러블인 배열은 for...of 문으로 순회 가능하다.
// for (const item of array) {
//   console.log(item);
// }

// // 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
// console.log([...array]); // [1, 2, 3]

// // 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
// const [a, ...rest] = array;
// console.log(a, rest); // 1, [2, 3]




// const obj = { a: 1, b: 2 };

// // 일반 객체는 Symbol.iterator 메서드를 구현하거나 상속받지 않는다.
// // 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
// console.log(Symbol.iterator in obj); // false

// // 이터러블이 아닌 일반 객체는 for...of 문으로 순회할 수 없다.
// for (const item of obj) { // -> TypeError: obj is not iterable
//   console.log(item);
// }

// // 이터러블이 아닌 일반 객체는 배열 디스트럭처링 할당의 대상으로 사용할 수 없다.
// const [a, b] = obj; // -> TypeError: obj is not iterable


// 안됨
for (const item of obj) { 
  console.log(item);
}

// 됨!!!?
for (const item in obj) { 
  console.log(item);
}

// 됨!!? (2018년에 공식 인정이 됨...)
// 딥다이브 616page도 잘못되어 있음
console.log({ ...obj }); // { a: 1, b: 2 }




// 이터레이터를 순회했을 때 어떤 결과가 발생되는지
// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const array = [1, 2, 3];

// Symbol.iterator 메서드는 이터레이터를 반환한다. 이터레이터는 next 메서드를 갖는다.
const iterator = array[Symbol.iterator]();

// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를
// 반환한다. 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다.
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for of 와 [...obj]는 방식이 같다.
// 참고로 done이 true가 될 때 까지이다!!

// 유사배열 객체라는 단어가 나온 이유 : 하나의 자바스크립트, 그 전에 코드를 완전히 갈아 엎고 다음버전이 나올 수 없기 때문에
// NodeList, HTMLCollections, arguments는 유사배열 객체
// console.log(Array)에 프로토타입 제안상에 Symbol.iterator가 있으면 이터러블이다.

// 유사 배열 객체
// const arrayLike = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3
// };

// // 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있다.
// for (let i = 0; i < arrayLike.length; i++) {
//   // 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
//   console.log(arrayLike[i]); // 1 2 3



// 피보나치를 이터러블로 구현
// 피보나치 수열을 구현한 사용자 정의 이터러블
// const fibonacci = {
//   // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다.
//   [Symbol.iterator]() {
//     let [pre, cur] = [0, 1]; // "36.1. 배열 디스트럭처링 할당" 참고
//     const max = 10; // 수열의 최대값

//     // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
//     // next 메서드는 이터레이터 리절트 객체를 반환해야 한다.
//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur]; // "36.1. 배열 디스트럭처링 할당" 참고
//         // 이터레이터 리절트 객체를 반환한다.
//         return { value: cur, done: cur >= max };
//       }
//     };
//   }
// };

// // 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출된다.
// for (const num of fibonacci) {
//   console.log(num); // 1 2 3 5 8
// }

// 스프레드 문법
// ...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]); // 1 2 3

// 문자열은 이터러블이다.
console.log(...'Hello'); // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']])); // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3])); // 1 2 3

// 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator


// 스프레드 문법의 결과는 값이 아니다.
const list = ...[1, 2, 3]; // SyntaxError: Unexpected token ...



// ES5
var arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]

// ES6
const arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]


// 1단계 깊은 복사
// ES5
var origin = [1, 2];
var copy = origin.slice();

console.log(copy); // [1, 2]
console.log(copy === origin); // false


// ES6
const origin = [1, 2];
const copy = [...origin];

console.log(copy); // [1, 2]
console.log(copy === origin); // false



// 구조 분해 할당
// ES6 배열 디스트럭처링 할당

// ES5
var arr = [1, 2, 3];

var one   = arr[0];
var two   = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3


// ES6
const arr = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3

const [x, y] = [1, 2];
// 기본값
const [a, b, c = 3] = [1, 2];
console.log(a, b, c); // 1 2 3

// 기본값보다 할당된 값이 우선한다.
const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g); // 1 2 3





// 36-8
// url을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성해 반환한다.
function parseURL(url = '') {
  // '://' 앞의 문자열(protocol)과 '/' 이전의 '/'으로 시작하지 않는 문자열(host)과 '/' 이후의 문자열(path)을 검색한다.
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);
  /*
  [
    'https://developer.mozilla.org/ko/docs/Web/JavaScript',
    'https',
    'developer.mozilla.org',
    'ko/docs/Web/JavaScript',
    index: 0,
    input: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
    groups: undefined
  ]
  */

  if (!parsedURL) return {};

  // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출한다.
  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path };
}

const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');
console.log(parsedURL);
/*
{
  protocol: 'https',
  host: 'developer.mozilla.org',
  path: 'ko/docs/Web/JavaScript'
}
*/




// 구조 분해 할당

// ES5
var user = { firstName: 'Ungmo', lastName: 'Lee' };

var firstName = user.firstName;
var lastName  = user.lastName;

console.log(firstName, lastName); // Ungmo Lee



// ES6
const user = { firstName: 'Ungmo', lastName: 'Lee' };

// ES6 객체 디스트럭처링 할당
// 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당한다.
// 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
const { lastName, firstName } = user;

console.log(firstName, lastName); // Ungmo Lee



// 구조분해할당을 통한 복잡 데이터 추출
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];

// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
const [, { id }] = todos;
console.log(id); // 2



const user = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
};

// address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출한다.
const { address: { city } } = user;
console.log(city); // 'Seoul'



// forEach는 set과 map에도 있다!





// 비동기 프로그래밍
const foo = () => {};
const bar = () => {};

foo();
bar();


// 스택(콜스택)
// 빈스택
// 전역실행컨텍스트
// foo함수/전역실행컨텍스트
// 전역실행컨텍스트
// bar함수/전역실행컨텍스트
// 전역실행컨텍스트
// 빈스택




// 실행1
// sleep 함수는 일정 시간(delay)이 경과한 이후에 콜백 함수(func)를 호출한다.
function sleep(func, delay) {
  // Date.now()는 현재 시간을 숫자(ms)로 반환한다.("30.2.1. Date.now" 참고)
  const delayUntil = Date.now() + delay;

  // 현재 시간(Date.now())에 delay를 더한 delayUntil이 현재 시간보다 작으면 계속 반복한다.
  while (Date.now() < delayUntil);
  // 일정 시간(delay)이 경과한 이후에 콜백 함수(func)를 호출한다.
  func();
}

function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

// sleep 함수는 3초 이상 실행된다..
sleep(foo, 3 * 1000);
// bar 함수는 sleep 함수의 실행이 종료된 이후에 호출되므로 3초 이상 블로킹된다.
bar();
// (3초 경과 후) foo 호출 -> bar 호출



// 실행2
function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

// 타이머 함수 setTimeout은 일정 시간이 경과한 이후에 콜백 함수 foo를 호출한다.
// 타이머 함수 setTimeout은 bar 함수를 블로킹하지 않는다.
setTimeout(foo, 3 * 1000);
bar();
// bar 호출 -> (3초 경과 후) foo 호출



// 이벤트
// onclick은 비권장! 돔황차!
// <!DOCTYPE html>
// <html>
// <body>
//   <button onclick="sayHi('Lee')">Click me!</button>
//   <script>
//     function sayHi(name) {
//       console.log(`Hi! ${name}.`);
//     }
//   </script>
// </body>
// </html>

// 권장! js는 js의 역활만!
// <!DOCTYPE html>
// <html>
// <body>
//   <button>Click me!</button>
//   <script>
//     const $button = document.querySelector('button');

//     // 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩
//     $button.onclick = function () {
//       console.log('button click');
//     };
//   </script>
// </body>
// </html>





// 이벤트 버블링 허락하지 않음
// <!DOCTYPE html>
// <html>
// <body>
//   <button>Click me!</button>
//   <script>
//     const $button = document.querySelector('button');

//     // 이벤트 핸들러 프로퍼티 방식은 하나의 이벤트에 하나의 이벤트 핸들러만을 바인딩할 수 있다.
//     // 첫 번째로 바인딩된 이벤트 핸들러는 두 번째 바인딩된 이벤트 핸들러에 의해 재할당되어
//     // 실행되지 않는다.
//     $button.onclick = function () {
//       console.log('Button clicked 1');
//     };

//     // 두 번째로 바인딩된 이벤트 핸들러
//     $button.onclick = function () {
//       console.log('Button clicked 2');
//     };
//   </script>
// </body>
// </html>


// 이벤트 버블링 허락
// <!DOCTYPE html>
// <html>
// <body>
//   <button>Click me!</button>
//   <script>
//     const $button = document.querySelector('button');

//     // 이벤트 핸들러 프로퍼티 방식
//     // $button.onclick = function () {
//     //   console.log('button click');
//     // };

//     // addEventListener 메서드 방식
//     $button.addEventListener('click', function () {
//       console.log('button click1');
//     });

//     $button.addEventListener('click', function () {
//       console.log('button click2');
//     });
//   </script>
// </body>
// </html>


// 이벤트 해제
// <!DOCTYPE html>
// <html>
// <body>
//   <button>Click me!</button>
//   <script>
//     const $button = document.querySelector('button');

//     const handleClick = () => console.log('button click');

//     // 이벤트 핸들러 등록
//     $button.addEventListener('click', handleClick);

//     // 이벤트 핸들러 제거
//     // addEventListener 메서드에 전달한 인수와 removeEventListener 메서드에
//     // 전달한 인수가 일치하지 않으면 이벤트 핸들러가 제거되지 않는다.
//     $button.removeEventListener('click', handleClick, true); // 실패
//     $button.removeEventListener('click', handleClick); // 성공
//   </script>
// </body>
// </html>



//아래와 같이 하면 단 한 번 실행되는 코드가 된다.
// 기명 함수를 이벤트 핸들러로 등록
$button.addEventListener('click', function foo() {
  console.log('button click');
  // 이벤트 핸들러를 제거한다. 따라서 이벤트 핸들러는 단 한 번만 호출된다.
  $button.removeEventListener('click', foo);
});




// 좌표값 표시하는 예제
// <!DOCTYPE html>
// <html>
// <body>
//   <p>클릭하세요. 클릭한 곳의 좌표가 표시됩니다.</p>
//   <em class="message"></em>
//   <script>
//     const $msg = document.querySelector('.message');

//     // 클릭 이벤트에 의해 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.
//     function showCoords(e) {
//       $msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
//     }
// console.log(e)

//     document.onclick = showCoords;
//   </script>
// </body>
// </html>



// <!DOCTYPE html>
// <html>
// <head>
//   <style>
//     .box {
//       width: 100px;
//       height: 100px;
//       background-color: #fff700;
//       border: 5px solid orange;
//       cursor: pointer;
//     }
//   </style>
// </head>
// <body>
//   <div class="box"></div>
//   <script>
//     // 드래그 대상 요소
//     const $box = document.querySelector('.box');

//     // 드래그 시작 시점의 마우스 포인터 위치
//     const initialMousePos = { x: 0, y: 0 };
//     // 오프셋: 이동할 거리
//     const offset = { x: 0, y: 0 };

//     // mousemove 이벤트 핸들러
//     const move = e => {
//       // 오프셋 = 현재(드래그하고 있는 시점) 마우스 포인터 좌표 - 드래그 시작 시점의 마우스 포인터 좌표
//       offset.x = e.clientX - initialMousePos.x;
//       offset.y = e.clientY - initialMousePos.y;

//       // translate3d는 GPU를 사용하므로 absolute의 top, left를 사용하는 것보다 빠르다.
//       // top, left는 레이아웃에 영향을 준다.
//       $box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
//     };

//     // mousedown 이벤트가 발생하면 드래그 시작 시점의 마우스 포인터 좌표를 저장한다.
//     $box.addEventListener('mousedown', e => {
//       // 이동 거리를 계산하기 위해 mousedown 이벤트가 발생(드래그를 시작)하면
//       // 드래그 시작 시점의 마우스 포인터 좌표(e.clientX/e.clientY: 뷰포트 상에서 현재
//       // 마우스의 포인터 좌표)를 저장해 둔다. 한번 이상 드래그로 이동한 경우 move에서
//       // translate3d(${offset.x}px, ${offset.y}px, 0)으로 이동한 상태이므로
//       // offset.x와 offset.y를 빼주어야 한다.
//       initialMousePos.x = e.clientX - offset.x;
//       initialMousePos.y = e.clientY - offset.y;

//       // mousedown 이벤트가 발생한 상태에서 mousemove 이벤트가 발생하면
//       // box 요소를 이동시킨다.
//       document.addEventListener('mousemove', move);
//     });

//     // mouseup 이벤트가 발생하면 mousemove 이벤트를 제거해 이동을 멈춘다.
//     document.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', move);
//     });
//   </script>
// </body>
// </html>


// 이벤트의 this

// <!DOCTYPE html>
// <html>
// <body>
//   <button onclick="handleClick(this)">Click me</button>
//   <script>
//     function handleClick(button) {
//       console.log(button); // 이벤트를 바인딩한 button 요소
//       console.log(this);   // window
//     }
//   </script>
// </body>
// </html>



// <!DOCTYPE html>
// <html>
// <body>
//   <button class="btn1">0</button>
//   <button class="btn2">0</button>
//   <script>
//     const $button1 = document.querySelector('.btn1');
//     const $button2 = document.querySelector('.btn2');

//     // 이벤트 핸들러 프로퍼티 방식
//     $button1.onclick = function (e) {
//       // this는 이벤트를 바인딩한 DOM 요소를 가리킨다.
//       console.log(this); // $button1
//       console.log(e.currentTarget); // $button1
//       console.log(this === e.currentTarget); // true

//       // $button1의 textContent를 1 증가시킨다.
//       ++this.textContent;
//     };

//     // addEventListener 메서드 방식
//     $button2.addEventListener('click', function (e) {
//       // this는 이벤트를 바인딩한 DOM 요소를 가리킨다.
//       console.log(this); // $button2
//       console.log(e.currentTarget); // $button2
//       console.log(this === e.currentTarget); // true

//       // $button2의 textContent를 1 증가시킨다.
//       ++this.textContent;
//     });
//   </script>
// </body>
// </html>




//// 실무 팁 ////

const str = 'abc';

str.repeat();    // -> ''
str.repeat(0);   // -> ''
str.repeat(1);   // -> 'abc'
str.repeat(2);   // -> 'abcabc'
str.repeat(2.5); // -> 'abcabc' (2.5 → 2)
str.repeat(-1);  // -> RangeError: Invalid count value

const str = 'How are you doing?';

// 공백으로 구분(단어로 구분)하여 배열로 반환한다.
str.split(' '); // -> ["How", "are", "you", "doing?"]

// \s는 여러 가지 공백 문자(스페이스, 탭 등)를 의미한다. 즉, [\t\r\n\v\f]와 같은 의미다.
str.split(/\s/); // -> ["How", "are", "you", "doing?"]

// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
str.split(''); // -> ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", "?"]


const today = new Date('2021/12/5/12:00');

today.toString(); // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toLocaleString(); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00



const today = new Date('2020/7/24/12:30');

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)


const today = new Date('2020/7/24/12:30');

today.toString();    // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toISOString(); // -> 2020-07-24T03:30:00.000Z

today.toISOString().slice(0, 10); // -> 2020-07-24
today.toISOString().slice(0, 10).replace(/-/g, ''); // -> 20200724



// 빈 배열을 만드는 방법
Array(10)
Array(100).fill(0)
Array(100).fill(0).map((value, index)=> value + index)
'.'.repeat(10)
'.'.repeat(10).split('.')
Array.from('abc')
Array.from('a'.repeat(100))



// ES7 지수 연산자
2 ** 2 ** 2; // -> 16
2 ** 3 ** 2; // -> 512
(2 ** 3) ** 2 // -> 64
Math.pow(Math.pow(2, 2), 2); // -> 16


Math.max(1); // -> 1
Math.max(1, 2); // -> 2
Math.max(1, 2, 3); // -> 3
Math.max(); // -> -Infinity


// 배열 요소 중에서 최대값 취득
Math.max.apply(null, [1, 2, 3]); // -> 3

// ES6 스프레드 문법
Math.max(...[1, 2, 3]); // -> 3




///////
const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i, { length }) => {
  // 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환한다.
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average); // 3.5

///////



/////////////////
// a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
Math.abs(a - b) < Number.EPSILON;

Number.EPSILON; // 이정도 오차는 같은 것으로 인정
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

// 10000000000000001은 안전하지 않다.
Number.isSafeInteger(10000000000000001); // -> false


// flat()
[1, [2, [3, [4]]]].flat();  // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화한다.
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
// 2번 평탄화한 것과 동일하다.
[1, [2, [3, [4]]]].flat().flat(); // -> [1, 2, 3, [4]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩 배열 모두를 평탄화한다.
[1, [2, [3, [4]]]].flat(Infinity); // -> [1, 2, 3, 4]



fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        return json
    })
    .then(function(json) {
        for (let data in json){
          if (data['시·도별(1)'] === "전국") {
            console.log(data);
          }
        }
    });



// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log('Hi!'), 1000);

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// 이때 콜백 함수에 'Lee'가 인수로 전달된다.
setTimeout(name => console.log(`Hi! ${name}.`), 1000, 'Lee');

// 두 번째 인수(delay)를 생략하면 기본값 0이 지정된다.
setTimeout(() => console.log('Hello!'));


// 호출 될 때마다 번호가 바뀜

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
const timerId = setTimeout(() => console.log('Hi!'), 1000);

// setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를
// 취소한다. 타이머가 취소되면 setTimeout 함수의 콜백 함수가 실행되지 않는다.
clearTimeout(timerId);



// debounce와 throttle 
// 막 클릭할 때 debounce는 계속 반복
// throttle은 마지막에 한 번 만!
<!DOCTYPE html>
<html>
<body>
  <button>click me</button>
  <pre>일반 클릭 이벤트 카운터    <span class="normal-msg">0</span></pre>
  <pre>디바운스 클릭 이벤트 카운터 <span class="debounce-msg">0</span></pre>
  <pre>스로틀 클릭 이벤트 카운터   <span class="throttle-msg">0</span></pre>
  <script>
    const $button = document.querySelector('button');
    const $normalMsg = document.querySelector('.normal-msg');
    const $debounceMsg = document.querySelector('.debounce-msg');
    const $throttleMsg = document.querySelector('.throttle-msg');

    const debounce = (callback, delay) => {
      let timerId;
      return event => {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(callback, delay, event);
      };
    };

    const throttle = (callback, delay) => {
      let timerId;
      return event => {
        if (timerId) return;
        timerId = setTimeout(() => {
          callback(event);
          timerId = null;
        }, delay, event);
      };
    };

    $button.addEventListener('click', () => {
      $normalMsg.textContent = +$normalMsg.textContent + 1;
    });

    $button.addEventListener('click', debounce(() => {
      $debounceMsg.textContent = +$debounceMsg.textContent + 1;
    }, 500));

    $button.addEventListener('click', throttle(() => {
      $throttleMsg.textContent = +$throttleMsg.textContent + 1;
    }, 500));
  </script>
</body>
</html>




// json

{
  "name": "Lee",
  "age": 20,
  "alive": true,
  "hobby": ["traveling", "tennis"]
}



// 객체를 JSON 포맷의 문자열로 변환한다.

const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
/*
string {
  "name": "Lee",
  "age": 20,
  "alive": true,
  "hobby": [
    "traveling",
    "tennis"
  ]
}
*/

// replacer 함수. 값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
  // undefined: 반환하지 않음
  return typeof value === 'number' ? undefined : value;
}

// JSON.stringify 메서드에 두 번째 인수로 replacer 함수를 전달한다.
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
/*
string {
  "name": "Lee",
  "alive": true,
  "hobby": [
    "traveling",
    "tennis"
  ]
}
*/


const prom = (val) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (val > 0.5) resolve(1);
    else reject(2);
  }, 1000);
}).then(res => console.log(res))
.finally(()=> console.log('finally'))
.then(()=>console.log('then'))
.catch(err => console.error(err));

prom(0.3)
prom(0.7)




const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

// 세 개의 비동기 처리를 순차적으로 처리
const res = [];
requestData1()
  .then(data => {
    res.push(data);
    return requestData2();
  })
  .then(data => {
    res.push(data);
    return requestData3();
  })
  .then(data => {
    res.push(data);
    console.log(res); // [1, 2, 3] ⇒ 약 6초 소요
  })
  .catch(console.error);



const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

Promise.all([requestData1(), requestData2(), requestData3()])
  .then(console.log) // [ 1, 2, 3 ] ⇒ 약 3초 소요
  .catch(console.error);


// Promise.race는 1등만 사용합니다. 따라서 완료시점도 1초


// 마이크로 테스크 큐!
// promise는 우선순위가 setTimeout보다 높다!
// promise는 다른 비동기 메서드보다 우선한다!
setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));




  fetch('https://jsonplaceholder.typicode.com/todos/1')
  // response는 HTTP 응답을 나타내는 Response 객체이다.
  // json 메서드를 사용하여 Response 객체에서 HTTP 응답 몸체를 취득하여 역직렬화한다.
  .then(response => response.json())
  // json은 역직렬화된 HTTP 응답 몸체이다.
  .then(json => console.log(json));
  // {userId: 1, id: 1, title: "delectus aut autem", completed: false}



// 제너레이터
function* genFunc() { yield 1; } // 이렇게 쓰시기를 권고

function * genFunc() { yield 1; }

function *genFunc() { yield 1; }

function*genFunc() { yield 1; }


const genArrowFunc = * () => {
  yield 1;
}; // SyntaxError: Unexpected token '*'


// 제너레이터 함수
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

// 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
const generator = genFunc();
generator.next()

// 제너레이터 객체는 이터러블이면서 동시에 이터레이터다.
// 이터러블은 Symbol.iterator 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체다.
console.log(Symbol.iterator in generator); // true
// 이터레이터는 next 메서드를 갖는다.
console.log('next' in generator); // true


// 무한 이터러블을 생성하는 제너레이터 함수
const infiniteFibonacci = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
}());

// infiniteFibonacci는 무한 이터러블이다.
for (const num of infiniteFibonacci) {
  if (num > 10000) break;
  console.log(num); // 1 2 3 5 8...2584 4181 6765
}



const num = (function* () {
  current = 0;
  while (true) {
    if(current < 10){
      current += 1
      yield current;
    }
  }
}());

for (const i of num){
  for (const s of 'abcdef') {
    console.log(i + s);
  }
  if (i === 5){
    break;
  }
}



// node-fetch는 node.js 환경에서 window.fetch 함수를 사용하기 위한 패키지다.
// 브라우저 환경에서 이 예제를 실행한다면 아래 코드는 필요 없다.
// https://github.com/node-fetch/node-fetch
const fetch = require('node-fetch');

// 제너레이터 실행기
const async = generatorFunc => {
  const generator = generatorFunc(); // ②

  const onResolved = arg => {
    const result = generator.next(arg); // ⑤

    return result.done
      ? result.value // ⑨
      : result.value.then(res => onResolved(res)); // ⑦
  };

  return onResolved; // ③
};

(async(function* fetchTodo() { // ①
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = yield fetch(url); // ⑥
  const todo = yield response.json(); // ⑧
  console.log(todo);
  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
})()); // ④