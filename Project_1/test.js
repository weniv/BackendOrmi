// 1번째 실습
// <!DOCTYPE html>
// <html lang="ko">
// <head>
//     <title></title>
// </head>
// <body>
//         <form action="./index.html" method="get">
//             id : <input name="id" type="text">
//             pw : <input name="pw" type="text">
//             <button type="submit">로그인</button>
//         </form> 
// </body>
// </html>


// 2번째 실습
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let data = [{
    "role": "system",
    "content": "assistant는 제주 여행 전문가이다."
}]

data.push({
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
}, {
    "role": "assistant",
    "content": "주식회사 위니브는 제주에 있으며, 한국에서 가장많은 ICT 교육 콘텐츠를 보유한 회사입니다."
}, {
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
})

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
    redirect: "follow",
})
    .then(res => res.json())
    .then(res => {
        console.log(res)
        console.log(res.choices[0].message.content)
    })

// 3번째 실습
// 다른 답변이 오게 하고 싶을 경우 별도에 공간에 질문과 답변을 저장해놓습니다.
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let data = [{
    "role": "system",
    "content": "assistant는 제주 여행 전문가이다."
}]

let data2 = [{
    "role": "system",
    "content": "assistant는 제주 여행 전문가이다."
}]

data.push({
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
}, {
    "role": "assistant",
    "content": "주식회사 위니브는 제주에 있으며, 한국에서 가장많은 ICT 교육 콘텐츠를 보유한 회사입니다."
}, {
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
})

data2.push({
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
}, {
    "role": "assistant",
    "content": "주식회사 위니브 게임 개발 회사이며 얼마전 한국 대기업인 카카오를 인수하였습니다."
}, {
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
})

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
    redirect: "follow",
})
    .then(res => res.json())
    .then(res => {
        console.log(res)
        console.log(res.choices[0].message.content)
    })

// 4번째 실습
// 아래와 같이 20 ~ 30개의 데이터를 학습시키면 원하는 답변에 유사하게 답변할 수 있습니다.
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let data = [{
    "role": "system",
    "content": "assistant는 제주 여행 전문가이다."
}, {
    "role": "user",
    "content": "차가 없는 경우 제주 1박 2일 일정을 알려줘"
}, {
    "role": "assistant",
    "content": "학습시키고 싶은 데이터 입력"
}, {
    "role": "user",
    "content": "차가 없는 경우 제주 2박 3일 일정을 알려줘"
}, {
    "role": "assistant",
    "content": "학습시키고 싶은 데이터 입력"
}, {
    "role": "user",
    "content": "차가 있는 경우 제주 1박 2일 일정을 알려줘"
}, {
    "role": "assistant",
    "content": "학습시키고 싶은 데이터 입력"
}, {
    "role": "user",
    "content": "차가 있는 경우 제주 2박 3일 일정을 알려줘"
}, {
    "role": "assistant",
    "content": "학습시키고 싶은 데이터 입력"
}]

data.push({
    "role": "user",
    "content": "차가 있는 경우 제주 2박 3일 일정을 알려줘"
})

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
    redirect: "follow",
})
    .then(res => res.json())
    .then(res => {
        console.log(res)
        console.log(res.choices[0].message.content)
    })

// 5번째 실습 => index.html에서 실습
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let data = [{
    "role": "system",
    "content": "assistant는 제주 여행 전문가이다."
}]

data.push({
    "role": "user",
    "content": "차가 없는 경우 제주 1박 2일 일정을 알려줘"
})

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
    redirect: "follow",
})
    .then(res => res.json())
    .then(res => {
        console.log(res)
        console.log(res.choices[0].message.content)
    })