// const p1 = new Promise(function () {
// pending - ожидание
// filfilled - выполнено
// rejected - выполнено с ошибкой
// })

// const p2 = new Promise((resolve, reject) => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       if (response.ok) resolve(response.json())
//       else reject(response)
//     })
//     .catch(e => reject(e))
// })

// p2.then(f1, f2)

// function f1(data) {
//   console.log(p2)
//   console.log(data)
// }

// function f2(data) {
//   console.log(p2)
//   console.log('errror')
//   console.log(data)
// }

// console.log(p2)
// console.log('=========================')

// async function p3() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await response.json()
//   console.log(data)
// }

// p3()

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     setTimeout(() => {
//       console.log(data)
//     }, 2000)
//     return fetch('https://jsonplaceholder.typicode.com/users')
//   })
//   .then(response2 => response2.json())
//   .then(data2 => {
//     setTimeout(() => {
//       console.log(data2)
//     }, 4000)
//   })

//

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data[0])
//     return fetch('https://jsonplaceholder.typicode.com/photos')
//   })
//   .then(response => response.json())
//   .then(data2 => {
//     console.log(data2[0])
//   })

// Promise all
const promise3 = new Promise((res, rej) => {
  fetch('https://jsonplaceholder.typicode.com/comments').then(data => res(data.json()))
})

const promise4 = new Promise((res, rej) => {
  fetch('https://jsonplaceholder.typicode.com/todos').then(data => res(data.json()))
})

Promise.all([promise3, promise4]).then(data => console.log(data))
