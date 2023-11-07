// Promise
// resolve, reject
// then, catch, finally

// Возвращают новый промис:

// Promise.all - ждем все промисы, если хоть один с ошибкой - catch, иначе then
// Promise.allSettled - просто ждем выполнения всех промисов (всегда then)
// Promise.race - получаем первый выполнившийся промис (если он был с ошибкой - catch, иначе then)
// Promise.any - получаем первый УСПЕШНО выполнившийся промис

function fetchUserInfo(callback) {
  setTimeout(() => {
    // fetch...
    const data = { id: 1, name: 'Alex' }
    callback(data)
  }, 1000)
}

function fetchUserGames(id, callback) {
  setTimeout(() => {
    // fetch(id)
    const data = ['game1', 'game2']
    callback(data)
  }, 1000)
}

function run() {
  fetchUserInfo(userInfo => {
    console.log(userInfo)

    fetchUserGames(userInfo.id, userGames => {
      console.log(userGames)
    })
  })
}

run()
