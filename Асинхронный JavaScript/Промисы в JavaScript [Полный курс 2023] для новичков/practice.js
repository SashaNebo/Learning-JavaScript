// Создать callback с 4 вложенностью

const fetchRequestToServer1 = callback => {
  setTimeout(() => {
    const data = 'Data from 1 server'
    callback(data)
  }, 1000)
}

function start() {
  fetchRequestToServer1(data => {
    console.log(data)
  })
}

start()
