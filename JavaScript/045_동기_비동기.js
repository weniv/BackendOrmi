// 동기 : 순차적
// 비동기 : 비순차적
// callback 지옥 : 콜백함수가 계속해서 쌓여가는 것
// Promise : 비동기 프로그래밍을 할 수 있게 해주며 콜백 지옥을 ‘어느정도’ 탈출할 수 있게 만들어주는 것

// fetch가 promise입니다!

let p = new Promise(function (resolve, reject) {
    // 실행코드
});

// resolve(value) — 작업이 성공적으로 마무리되면 호출, 결과는 value에 담김

// reject(error) — 작업이 실패시 호출, error는 error에 담김

//////////////////////////////////////

let p = new Promise(function (resolve, reject) {
    resolve('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
});


///////////////////////////////////////

let p = new Promise(function (resolve, reject) {
    // resolve('hello world');
    reject('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});


///////////////////////////////////////

fetch('http://testtttt.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
        console.log(data)
    }).catch(error => {
        // console.log(error)
        alert('서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.')
        document.write('서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.')
    })


///////////////////////////

new Promise((resolve, reject) => {
    /*code*/
})
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)


///////////////////


fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')


