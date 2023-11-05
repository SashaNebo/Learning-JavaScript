// setTimeout, clearTimeout
// setInterval, clearInterval

// const id = setTimeout(() => {
//   console.log('2')
// }, 2000)

// const id2 = setInterval(() => {
//   console.log('5')
// }, 1000)

// console.log(1, id, id2)

// setTimeout(() => {
//   clearTimeout(id2)
// }, 3000)

function startTimer(timerId, delay, stop) {
  const timer = setInterval(() => {
    console.log('request to the server...')
  }, delay)

  setTimeout(() => {
    clearTimeout(timerId)
  }, stop)

  return 'start function'
}

console.log(startTimer(1, 1000, 6000))

// Было легко)))
