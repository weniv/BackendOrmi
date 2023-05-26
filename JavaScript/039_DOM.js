document.head
document.body
document.body.childNodes
document.body.childNodes[1]
document.body.childNodes[1].tagName
document.body.childNodes[1].innerText
document.body.childNodes[1]. //점만 찍어서 얼마나 많은 애트리뷰트가 있는지 확인해보세요.
    document.body.childNodes[2]
document.body.childNodes[2].data

// 해당하는 Id를 가진 요소에 접근하기
document.getElementById()

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll("selector");


const element6 = document.querySelectorAll('li')
element6.forEach((element) => {
    element.innerText = 'hello world!'
})

/////////////


const element1 = document.querySelector('#one')

element1.addEventListener('click', () => {
    element1.classList.add('test')
})

///////////////

const btnRed = document.querySelector('button')
const title = document.querySelector('#one')

btnRed.addEventListener('click', () => {
    title.classList.toggle('red')
})

/////////////

const sectionTitle = document.createElement('h2')
sectionTitle.innerText = 'hello'

document.querySelector('body').appendChild(sectionTitle)


///////////////


const body = document.querySelector("body");
const myUl = document.createElement("ul");

for (let i = 0; i < 5; i++) {
    const myLi = document.createElement('li');
    myLi.innerText = 'hello!';
    myUl.appendChild(myLi);
}

body.appendChild(myUl)

///////////////

// 실습은 안했습니다.
// 주의할 점은 JS에서 style 컨트롤하는것은 카멜표기법입니다.
//background-color => backgroundColor
const target = document.querySelector("p");
const txtColor = target.style.color; // 현재 스타일 정보를 가져옵니다.
target.style.color = "red"; // 현재 스타일 정보를 변경합니다.
target.style.fontWeight = "bold"; // 현재 스타일 정보에 font-weight 속성이 없다면 추가합니다.

/////////////////

const body = document.querySelector("body");
const myimg = document.createElement('img')
// const idAttr = target.getAttribute('id');
myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg");
body.append(myimg)


////////////////

const btn = document.createElement('button')
btn.innerText = '눌럿!'
const body = document.querySelector("body")
body.append(btn)

btn.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this); // 일반 function과 다르다는 것만 인지 부탁드립니다.
});

btn.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);
});

/////////////

// 실습은 별도로 진행하지 않았습니다.

// <form action="">
//     <button type="submit" class="submit">제출</button>
// </form>
// <script>
//     const submit = document.querySelector('.submit');
//     submit.addEventListener('click', (event) => {
//         console.log('clicked');
//         event.preventDefault();
//     })
// </script>