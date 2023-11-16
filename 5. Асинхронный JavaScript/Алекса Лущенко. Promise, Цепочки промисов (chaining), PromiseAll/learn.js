// function getData() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//   console.log(1)
// }

// async function getData2() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data)
//   console.log(2)
// }

// getData()
// getData2()

async function f1() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  // if (!res.ok) {
  //   const message = `${res.status}`
  //   throw new Error(message)
  // }

  const data = await res.json()
  console.log(data)
}

f1()
