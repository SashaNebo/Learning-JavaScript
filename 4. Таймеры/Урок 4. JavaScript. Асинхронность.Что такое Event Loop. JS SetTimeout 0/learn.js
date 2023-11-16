// console.log('start')
// console.log('start2')

// function timeOut2sec() {
//   console.log('timeout 2sec')
// }

// window.setTimeout(function () {
//   console.log('Inside timeout, after 5seconds')
// }, 5000)

// window.setTimeout(timeOut2sec, 2000)

// console.log('end')

console.log('start')

const f1 = () => console.log('function1')
const f2 = () => console.log('function2')
const f3 = () => console.log('function3')

setTimeout(f1, 4000)
setTimeout(f2, 3000)
setTimeout(f3, 2000)

console.log('end')
