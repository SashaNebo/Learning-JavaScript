// function f1() {
//   // 1. создаем обьект запроса
//   const xhr = new XMLHttpRequest()

//   // 2. Куда посылаем и параметры
//   xhr.open('GET', 'https://api.coincap.io/v2/assets')

//   // 3. как обрабатываем от сервера

//   xhr.onload = () => {
//     console.log(xhr.status)
//     // console.log(xhr.response)
//     const data = JSON.parse(xhr.response)
//     console.log(data)
//   }
//   // 4. Посылаем запрос

//   xhr.send()
// }
// f1()

// ---

// function f2() {
//   const xhr = new XMLHttpRequest()

//   xhr.open('GET', 'https://weatherapi-com.p.rapidapi.com/current.json?q=London')
//   xhr.setRequestHeader('X-RapidAPI-Key', '8362923709msh0ab0109d10d59c2p1a22e1jsn6059d82a0f56')
//   xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com')

//   xhr.onload = () => {
//     // console.log(xhr.status)
//     // console.log(xhr.response)
//     const data = JSON.parse(xhr.response)

//     console.log(data)
//   }

//   xhr.send()
// }

// f2()

// ---

// function f3() {
//   const xhr = new XMLHttpRequest()

//   xhr.open('GET', 'https://weatherapi-com.p.rapidapi.com/current.json?q=London')
//   xhr.setRequestHeader('X-RapidAPI-Key', '8362923709msh0ab0109d10d59c2p1a22e1jsn6059d82a0f56')
//   xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com')

//   xhr.onload = () => {
//     const data = JSON.parse(xhr.response)

//     console.log(data)
//   }

//   xhr.send()
// }

// f3()

// ---

function f4() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', URL)
  xhr.setRequestHeader(rapidApiKey.key, rapidApiKey.value)
  xhr.setRequestHeader(RapidApiHost.key, RapidApiHost.value)

  xhr.onload = () => {
    const data = JSON.parse(xhr.response)

    console.log(data)
  }

  xhr.send()
}

f4()
