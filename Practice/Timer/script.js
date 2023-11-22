const date = 'Thu Feb 01 2024 00:00:00 GMT+0300 (Москва, стандартное время)'
const today = new Date() // Any format

const getTimerValues = diff => ({
  seconds: (diff / 1000) % 60,
  minutes: (diff / (1000 * 60)) % 60,
  hours: (diff / (1000 * 3600)) % 24,
  days: diff / (1000 * 3600 * 24),
})

const formatValue = value => (value < 10 ? `0${value}` : value)

const setTimerValues = obj => {
  for (let key in obj) {
    const timerValue = document.getElementById(key)
    timerValue.innerText = formatValue(Math.floor(obj[key]))
  }
}

const startTimer = date => {
  const id = setInterval(() => {
    const diff = new Date(date).getTime() - new Date().getTime()

    if (diff < 0) {
      clearInterval(id)
      return
    }

    setTimerValues(getTimerValues(diff))
  }, 1000)
}

startTimer(date)
