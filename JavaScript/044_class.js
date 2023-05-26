// python => 대부분이 class로 되어 있죠?
// javascript => class가 ES6부터 나온 문법입니다. 원래 있던 문법이 아닙니다! 그 전에는 생성자 함수로 사용했었습니다!


let myArr = new Array(1, 2, 3); // python에서 마치 클래스로 인스턴스를 만들어내듯 찍어내는 겁니다.


let myArr = new Array(1, 2, 3);
let myArr2 = new Array(4, 5, 6);

myArr2.length
myArr.length

myArr.forEach(item => {
    console.log(item);
})

myArr2.forEach(item => {
    console.log(item);
})

// robot1 instanceof Factory // 인스턴스인지 확인!

function Factory() { }
function NewFactory(name) {
    this.name = name;
    this.sayYourName = function () {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

let robot1 = new Factory();
let robot2 = new NewFactory('브랜든2');
let robot3 = new NewFactory('브랜든3');
let robot4 = new NewFactory('브랜든4'); // 우리는 100개의 객체를 생성할때마다 역시 100개의 함수를 새로 만들고 있는것 입니다.



///////////


function Parent() {
    this.name = '재현';
}

Parent.prototype.rename = function (name) {
    this.name = name;
}

Parent.prototype.sayName = function () {
    console.log(this.name);
}

let 부모1 = new Parent()
부모1.rename('호준')
부모1

function Child() {
    Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}

Child.prototype.rename('호돌')
Child.prototype.sayName()

// 생성자 함수를 만들게 되면 위에서 child가 parent를 상속받았기 때문에
// child가 parent에 메서드나 멤버를 사용할 수 있다.
let 자식1 = new Child()
자식1.rename('호돌돌')
자식1.sayName()

////////////////

class Robot {
    // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다. 
    // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
    // python에 __init__()
    constructor(name) {
        this.name = name;
    }

    // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
    // 앞에 function 키워드가 없습니다.
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

class BabyRobot extends Robot {
    constructor(name) {
        super(name);
        this.ownName = '아이크';
    }

    sayBabyName() {
        // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
        this.sayYourName();
        console.log('Suceeding you, Father!');
    }
}


/////////////////


class Robot {
    constructor(name) {
        this.name = name;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

class BabyRobot extends Robot {
    constructor(name) {
        super(name);
        this.ownName = '아이크';
    }

    sayBabyName() {
        this.sayYourName();
        console.log('Suceeding you, Father!');
    }
}

let one = new Robot('one')
let two = new BabyRobot('two')