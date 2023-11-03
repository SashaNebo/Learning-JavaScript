const link = 'https://api.coincap.io/v2/assets'

const container = document.getElementById('coins')
const form = document.getElementById('form')
const textInput = document.getElementById('text-input')

let store = {}

const fetchData = async () => {
  try {
    const result = await fetch(`${link}`)
    const object = await result.json()
    const { data, timestamp } = object

    store = { ...data }

    console.log(store)
    renderContent()
  } catch (error) {
    console.log(error)
  }
}

fetchData()

const renderContent = () => {
  for (let key in store) {
    const info = store[key]

    const price = (+info.priceUsd).toFixed(2)
    const marketCap = (+info.marketCapUsd).toFixed(2)

    const contentHTML = `
    <div class="main-content-coin">
      <div class="ranked">${info.rank}</div>
      <div class="name">${info.name} <span>${info.symbol}</span></div>
      <div class="price">$${price}</div>
      <div class="market-cap">$${marketCap}</div>
    </div>
    `

    container.insertAdjacentHTML('beforeend', contentHTML)
  }
}

const handleInput = e => {
  let coin = e.target.value

  store = {
    ...store,
    coin,
  }
}

const f1 = info => {
  console.log(info)
}

const handleSubmit = e => {
  e.preventDefault()
  const value = store.coin
  if (!value) return null

  for (let key in store) {
    const value = store[key]
    const coin = store.coin.toLowerCase()

    if (!value.name) return null

    if (value.name.toLowerCase() === coin) {
      f1(value)
    }
  }
}

form.addEventListener('submit', handleSubmit)
textInput.addEventListener('input', handleInput)

// fetchData()
