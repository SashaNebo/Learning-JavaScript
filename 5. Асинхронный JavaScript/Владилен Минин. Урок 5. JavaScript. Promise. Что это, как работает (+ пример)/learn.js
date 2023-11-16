console.log('request data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working',
//     }

//     resolve(backendData)
//   }, 2000)
// })

// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//     }, 2000)
//   })
// })
//   .then(clientData => {
//     clientData.fromPromise = 'Yes'

//     return clientData
//   })
//   .then(data => {
//     console.log('Modified', data)
//   })
//   .catch(err => console.log('Error', err))
//   .finally(() => console.log('Finally'))

const sleep = ms => {
  return new Promise(resolve => {
    const id = 'e34-un1.'
    setTimeout(() => resolve(id), ms)
  })
}

// sleep(2000).then(() => {
//   console.log('After 2 seconds')
// })

// sleep(3000).then(() => {
//   console.log('After 3 seconds')
// })

Promise.all([sleep(2000), sleep(4000)]).then(info => {
  console.log('All promises', info)
})

Promise.race([sleep(2000), sleep(4000)]).then(info => {
  console.log('Race promises', info)
})
