let book = {
    책이름: '알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라',
    책가격: 0,
    저자: ['구나영', '김경림'],
    출판일: '2022.08.12'
} // 책이 100권이면

// 아래처럼 찍어내는 틀을 만들어 찍어낼 수 있습니다.
// 마치 class 처럼요.
// 생성자 함수와 class의 차이
// 아래처럼 찍어내는 틀로는 class가 좀 더 용이합니다.
// 기능적인 부분이 있는 경우에는 생성자 함수로 만들기도 합니다.
// 사용 이유
// 동일한 프로퍼티를 가지는 객체 생성
// prototype을 이용하여 메모리 효율을 높일 수 있음

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