const delay = ms => new Promise(r => setTimeout(() => r(), ms))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//   console.log('Fetch todo started ...')

//   return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos(2000)
//   .then(data => {
//     console.log(data)
//   })
//   .catch(e => console.log(e))

async function fetchAsyncTodos() {
  console.log('Fetch todo started ...')
  try {
    // await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data:', data)
    f1(data)
  } catch (e) {
    console.error(e)
  } finally {
    console.log('End')
  }
}

fetchAsyncTodos()

function f1(d) {
  return d
}
