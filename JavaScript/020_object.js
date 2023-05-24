const babaYaga = {
    name: "John Wick",
    age: 53,
    from: "벨라루스",
    askingHim: function () {
        console.log("Yeah, I'm thinking I'm back!");
    }
};

// 최신 문법 사용
const babaYaga = {
    name: "John Wick",
    age: 53,
    from: "벨라루스",
    askingHim() {
        console.log("Yeah, I'm thinking I'm back!");
    }
};

const a = 'hello'
const b = 'world'
const data = {
    a,
    b,
    c: '!!',
    d: [10, 20, 30]
}

// CRUD(Create, Read, Update, Delete)
// 데이터 추가(append), 데이터 업데이트(update)
const human = {
    name: "hojun",
    age: 98
}
human.height = 250
human['height'] = 250
human

const human2 = {
    ...human,
    age: 10
}
human2

// human.keys() // 이 메소드가 없습니다.
Object.keys(human)
Object.values(human)
Object.entries(human)