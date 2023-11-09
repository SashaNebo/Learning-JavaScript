// Создать callback с 4 вложенностью

// const fetchRequestToServer1 = callback => {
//   setTimeout(() => {
//     const data = 'Data from 1 server'
//     callback(data)
//   }, 1000)
// }

// const fetchRequestToServer2 = callback => {
//   setTimeout(() => {
//     const data = 'Data from 2 server'
//     callback(data)
//   }, 1000)
// }

// const fetchRequestToServer3 = callback => {
//   setTimeout(() => {
//     const data = 'Data from 3 server'
//     callback(data)
//   }, 1000)
// }

// const fetchRequestToServer4 = callback => {
//   setTimeout(() => {
//     const data = 'Data from 4 server'
//     callback(data)
//   }, 1000)
// }

// function start() {
//   fetchRequestToServer1(data1 => {
//     console.log(data1)
//     fetchRequestToServer2(data2 => {
//       console.log(data2)
//       fetchRequestToServer3(data3 => {
//         console.log(data3)
//         fetchRequestToServer4(data4 => {
//           console.log(data4)
//         })
//       })
//     })
//   })
// }

// start()

// ---

// function fetchRequestToServer1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = 'Data from 1 server'
//       resolve(data)
//     }, 1000)
//   })
// }

// function fetchRequestToServer2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = 'Data from 2 server'
//       resolve(data)
//     }, 1000)
//   })
// }

// function fetchRequestToServer3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = 'Data from 3 server'
//       resolve(data)
//     }, 1000)
//   })
// }

// function fetchRequestToServer4() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = 'Data from 4 server'
//       resolve(data)
//     }, 1000)
//   })
// }

// function run() {
//   fetchRequestToServer1()
//     .then(data1 => {
//       console.log(data1)
//       return fetchRequestToServer2()
//     })
//     .then(data2 => {
//       console.log(data2)
//       return fetchRequestToServer3()
//     })
//     .then(data3 => {
//       console.log(data3)
//       return fetchRequestToServer4()
//     })
//     .then(data4 => {
//       console.log(data4)
//     })
// }

// run()

// ---

// function fetchRequestToServer1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = 'Data from 1 server'
//       resolve(data)
//     }, 1000)
//   })
// }

// function fetchRequestToServer2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = 'Data from 2 server'
//       resolve(data)
//     }, 1000)
//   })
// }

// function fetchRequestToServer3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = 'Data from 3 server'
//       resolve(data)
//     }, 1000)
//   })
// }

// function run() {
//   Promise.any([fetchRequestToServer1(), fetchRequestToServer2(), fetchRequestToServer3()])
//     .then(data => {
//       console.log(data)
//     })
//     .catch(() => {})
// }

// run()

// ---

// promise1 - запрос всех видео
const videos = [
  { id: 1, title: 'Топ 10 игр 2023' },
  { id: 2, title: 'Лучшая битва в Warcraft3' },
  { id: 3, title: 'Чем кормить кошек' },
]

// promise2 - запросить описание этого видео
const id = videos[0].id

const description = {
  id: 1,
  title: 'Топ 10 игр 2023',
  hashTags: ['игры', '2023'],
  authorId: 55,
}

// promise3 - в описании указан автор, нужно запросить информацию по нему
const authorId = description.authorId

const author = {
  id: 55,
  name: 'Какие-то уроки',
  videoIds: [1, 2, 3],
  shortIds: [10, 15, 33],
}

// promise4 - пытаемся получить шортс автора
// callback hell 4function.

// function reqVideos(callback) {
//   setTimeout(() => {
//     const videos = [
//       { id: 1, title: 'Топ 10 игр 2023' },
//       { id: 2, title: 'Лучшая битва в Warcraft3' },
//       { id: 3, title: 'Чем кормить кошек' },
//     ]
//     callback(videos)
//   }, 1000)
// }

// function reqDescription(callback) {
//   setTimeout(() => {
//     const description = {
//       id: 1,
//       title: 'Топ 10 игр 2023',
//       hashTags: ['игры', '2023'],
//       authorId: 55,
//     }
//     callback(description)
//   }, 1000)
// }

// function reqAuthor(callback) {
//   setTimeout(() => {
//     const author = {
//       id: 55,
//       name: 'Какие-то уроки',
//       videoIds: [1, 2, 3],
//       shortIds: [10, 15, 33],
//     }
//     callback(author)
//   }, 1000)
// }

// function reqShots(callback) {
//   setTimeout(() => {
//     const author = {
//       id: 55,
//       name: 'Какие-то уроки',
//       videoIds: [1, 2, 3],
//       shortIds: [10, 15, 33],
//     }
//     callback(author.shortIds)
//   }, 1000)
// }

// function getData() {
//   reqVideos(videos => {
//     console.log(videos)
//     reqDescription(description => {
//       console.log(description)
//       reqAuthor(author => {
//         console.log(author)
//         reqShots(shorts => {
//           console.log(shorts)
//         })
//       })
//     })
//   })
// }

// getData()

// function reqVideos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const videos = [
//         { id: 1, title: 'Топ 10 игр 2023' },
//         { id: 2, title: 'Лучшая битва в Warcraft3' },
//         { id: 3, title: 'Чем кормить кошек' },
//       ]
//       resolve(videos)
//     }, 1000)
//   })
// }

// function reqDescription() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const description = {
//         id: 1,
//         title: 'Топ 10 игр 2023',
//         hashTags: ['игры', '2023'],
//         authorId: 55,
//       }
//       resolve(description)
//     }, 1000)
//   })
// }

// function reqAuthor() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const author = {
//         id: 55,
//         name: 'Какие-то уроки',
//         videoIds: [1, 2, 3],
//         shortIds: [10, 15, 33],
//       }
//       resolve(author)
//     }, 1000)
//   })
// }

// function reqShots() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const author = {
//         id: 55,
//         name: 'Какие-то уроки',
//         videoIds: [1, 2, 3],
//         shortIds: [10, 15, 33],
//       }
//       resolve(author.shortIds)
//     }, 1000)
//   })
// }

// function getData() {
//   reqVideos()
//     .then(videos => {
//       console.log(videos)
//       return reqDescription(videos[0])
//     })
//     .then(description => {
//       console.log(description)
//       return reqAuthor()
//     })
// .then(author => {
//   console.log(author)
//   return reqShots()
// })
// .then(shorts => {
//   console.log(shorts)
// })
// .catch(() => {
//   console.log('...')
// })
// .finally(() => {
//   console.log('...')
// })
// }

// function getData2() {
//   Promise.all([reqVideos(), reqDescription(), reqAuthor(), reqShots()]).then(data => {
//     setTimeout(() => {
//       console.log(data)
//     }, 5000)
//   })
// }

// getData()
// // getData2()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const videos = [
      { id: 1, title: 'Топ 10 игр 2023' },
      { id: 2, title: 'Лучшая битва в Warcraft3' },
      { id: 3, title: 'Чем кормить кошек' },
    ]
    resolve(videos)
  }, 666)
})

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const videos = [
//       { id: 1, title: 'Топ 10 игр 2023' },
//       { id: 2, title: 'Лучшая битва в Warcraft3' },
//       { id: 3, title: 'Чем кормить кошек' },
//     ]
//     resolve(videos)
//   }, 666)
// })

promise1.then(videos => {
  videos.forEach(v => console.log(v))
})
