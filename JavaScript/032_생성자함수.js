let book = {
    책이름: '알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라',
    책가격: 0,
    저자: ['구나영', '김경림'],
    출판일: '2022.08.12'
} // 책이 100권이면

// 아래처럼 찍어내는 틀을 만들어 찍어낼 수 있습니다.
// 마치 class 처럼요.
// 생성자 함수와 class의 차이
// 메모리 사용 면에서는 class가 좀 더 우위에 있습니다.
// class가 ES6 부터 도입된 문법입니다.
// 그렇다고 해서 매번 class를 써야 하는 것은 아닙니다.
// class는 상속을 받기 때문에 상속 받은 메서드를 모두 가지고 있지만 생성자 함수는 선별적으로 사용할 수 있습니다.

function Book(책이름, 책가격, 저자, 출판일) {
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
}

let book1 = Book('Python', 1000, 'hojun', '2023.05.25')
book1 // undefined인 이유는 Book의 return 값이 undefined이기 때문입니다!

function Book(책이름, 책가격, 저자, 출판일) {
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
}

let book1 = new Book('Python', 1000, 'hojun', '2023.05.25')
book1

// 그러면 new 키워드가 실제로 하는 일
function Book(책이름, 책가격, 저자, 출판일) {
    // this = {}
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    // return this
}