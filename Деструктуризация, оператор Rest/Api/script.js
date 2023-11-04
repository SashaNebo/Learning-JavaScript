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

    renderDate(timestamp)
    renderContent()
  } catch (error) {
    console.log(error)
  }
}

fetchData()

const renderDate = ms => {
  const date = new Date(ms)
  const time = date.toTimeString().split(' ')[0]
  const dateHTML = `
    <div class="date">
      <span>In ${time}</span
    </div>
  `

  document.body.insertAdjacentHTML('beforeend', dateHTML)
}

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

const renderModal = info => {
  const price = (+info.priceUsd).toFixed(2)
  const marketCap = (+info.marketCapUsd).toFixed(2)
  const supply = (+info.supply).toFixed(2)
  const maxSupply = (+info.maxSupply).toFixed(2)
  const volumeUsd24Hr = (+info.volumeUsd24Hr).toFixed(2)
  const changePercent24Hr = (+info.changePercent24Hr).toFixed(2)

  let color = ''
  switch (+info.rank) {
    case 1:
      color = 'gold'
      break
    case 2:
      color = 'silver'
      break
    case 3:
      color = 'bronze'
      break
    default:
      color = 'default'
  }

  const modalHTML = `
    <div class="modal" id="modal">
    <div class="modal-content">
      <div class="modal-content-top">
        <div class="name ${color}"><span>${info.rank}</span><span>${info.name}</span><span>${info.symbol}</span></div>
        <div class="price">$${price}</div>
      </div>
      <div class="modal-content-middle">
        <div class="info marcet-cap"><span>Market Cap</span> <span>$${marketCap}</span></div>
        <div class="info supply"><span>Supply</span><span>$${supply}</span></div>
        <div class="info max-supply"><span>Max supply</span><span>$${maxSupply}</span></div>
        <div class="info volume-24hr"><span>Volume 24hr</span><span>$${volumeUsd24Hr}</span></div>
        <div class="info change-percent24hr"><span>Change percent 24hr</span><span>${changePercent24Hr}%</span></div>
      </div>
      <div class="modal-content-bottom">
        <a class="modal-button" href="${info.explorer}" target="_blank">
          website
        </a>
      </div>
      <div class="close" id='close'>
        <span>x</span>
      </div>
    </div>
  </div>
  `

  document.body.insertAdjacentHTML('afterbegin', modalHTML)

  const modal = document.getElementById('modal')
  const close = document.getElementById('close')
  close.addEventListener('click', () => {
    modal.remove()
  })
}

const handleInput = e => {
  let coin = e.target.value

  store = {
    ...store,
    coin,
  }
}

const handleSubmit = e => {
  e.preventDefault()
  const value = store.coin
  if (!value) return null

  for (let key in store) {
    const value = store[key]
    const coin = store.coin.trim().toLowerCase()

    if (!value.name) return null

    if (value.name.toLowerCase() === coin) {
      renderModal(value)
      textInput.value = ''
    }
  }
}

form.addEventListener('submit', handleSubmit)
textInput.addEventListener('input', handleInput)
