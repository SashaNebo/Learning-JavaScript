const link = 'https://api.coincap.io/v2/assets'

const container = document.getElementById('container')
const form = document.getElementById('form')
const textInput = document.getElementById('text-input')

let store = {}

const fetchData = async () => {
  try {
    const result = await fetch(`${link}`)
    const object = await result.json()
    const { data, timestamp } = object

    store = { ...data }

    renderContent()
  } catch (error) {
    console.log(error)
  }
}

fetchData()

const renderContent = () => {
  for (let key in store) {
    const info = store[key]

    const contentHTML = `
    <div>
    <span>${info.rank}.</span>
    <span>${info.name}</span>
    <span>${info.priceUsd}$</span>
    </div>
    <br>
    `

    container.insertAdjacentHTML('beforeend', contentHTML)
  }
}

const handleInput = e => {
  store = {
    ...store,
    coin: e.target.value,
  }

  console.log(store)
}

const handleSubmit = e => {
  e.preventDefault()
  const value = store.coin
  console.log(value)
}

form.addEventListener('submit', handleSubmit)
textInput.addEventListener('click', handleInput)

fetchData()
