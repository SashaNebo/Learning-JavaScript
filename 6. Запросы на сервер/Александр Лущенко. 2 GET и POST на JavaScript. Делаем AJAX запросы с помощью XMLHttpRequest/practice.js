const promise1 = new Promise((resolve, reject) => {
  fetch('https://api.coincap.io/v2/assets').then(response => resolve(response))
})

promise1
  .then(data => {
    return data.json()
  })
  .then(data => {
    console.log(data)
  })
