// 1번째 실습

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

data = [{
    "role": "system",
    "content": "assistant는 친절한 답변가이다."
}, {
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
}]

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
})
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        console.log(res.choices[0].message);
        console.log(res.choices[0].message.content);
    })
    .catch((err) => {
        console.log(err);
    });


// 2번째 실습
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

data = [{
    "role": "system",
    "content": "assistant는 친절한 답변가이다."
}, {
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
}, {
    "role": "user",
    "content": "그 회사에 대표를 알려줘"
}]

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
})
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        console.log(res.choices[0].message);
        console.log(res.choices[0].message.content);
    })
    .catch((err) => {
        console.log(err);
    });

// 3번째 실습
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

data = [{
    "role": "system",
    "content": "assistant는 친절한 답변가이다."
}, {
    "role": "user",
    "content": "주식회사 위니브에 대해 알려줘"
}, {
    "role": "assistant",
    "content": "제주에 있는 ICT 교육 콘텐츠를 만드는 회사입니다."
}, {
    "role": "user",
    "content": "그 회사에 대표를 알려줘"
}, {
    "role": "assistant",
    "content": "주식회사 위니브 이호준 대표는 국내에서 가장 많은 ICT 교육 콘텐츠를 가지고 있는 회사입니다."
}, {
    "role": "user",
    "content": "주식회사 위니브에 대해 다시 알려줘"
}]

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
})
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        console.log(res.choices[0].message);
        console.log(res.choices[0].message.content);
    })
    .catch((err) => {
        console.log(err);
    });