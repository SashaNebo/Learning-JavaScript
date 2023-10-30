const link = 'http://api.weatherapi.com/v1/current.json?key=916a6ab1a9c7464fa40192347232910'

const root = document.getElementById('root')
const popup = document.getElementById('popup')
const textInput = document.getElementById('text-input')
const form = document.getElementById('form')

const cityList = {
  minsk: 'Minsk',
  moscow: 'Moscow',
  newYork: 'New York',
  losAngeles: 'Los Angeles',
  london: 'London',
}

const { minsk, moscow, newYork, losAngeles, london } = cityList

let store = {
  city: london,
  // feelslike: 0,
}

const fetchData = async () => {
  const result = await fetch(`${link}&query=${store.city}`)
  const data = await result.json()

  console.log(data)

  const {
    current: { feelslike_c: feelslike, cloud, temp_c: temperature, condition, is_day: isDay, humidity, wind_kph: windSpeed, pressure_mb: pressure, uv: uvIndex, vis_km: visibility },
    location: { name: city, country, localtime },
  } = data

  store = {
    feelslike,
    city,
    cloud,
    temperature,
    country,
    localtime,
    isDay,
    condition: condition.text,
    properties: {
      cloud: {
        title: 'cloudcover',
        value: `${cloud}%`,
        icon: 'cloud.png',
      },
      humidity: {
        title: 'humidity',
        value: `${humidity}%`,
        icon: 'humidity.png',
      },
      windSpeed: {
        title: 'wind speed',
        value: `${windSpeed} km/h`,
        icon: 'wind.png',
      },
      pressure: {
        title: 'pressure',
        value: `${pressure} %`,
        icon: 'gauge.png',
      },
      uvIndex: {
        title: 'uv Index',
        value: `${uvIndex} / 100`,
        icon: 'uv-index.png',
      },
      visibility: {
        title: 'visibility',
        value: `${visibility}km/h`,
        icon: 'visibility.png',
      },
    },
  }
  renderComponent()
}

const getImage = description => {
  const value = description.toLowerCase()

  switch (value) {
    case 'moderate rain':
      return 'partly.png'
    case 'clear':
      return 'clear.png'
    case 'sunny':
      return 'sunny.png'
    case 'partly cloudy' || 'cloudy':
      return 'cloud.png'
    case 'mist':
      return 'mist.png'
    case 'fog':
      return 'mist.png'
    default:
      return 'the.png'
  }
}

const renderProperty = properties => {
  return Object.values(properties)
    .map(({ title, value, icon }) => {
      return `<div class="property">
            <div class="property-icon">
              <img src="./img/icons/${icon}" alt="">
            </div>
            <div class="property-info">
              <div class="property-info__value">${value}</div>
              <div class="property-info__description">${title}</div>
            </div>
          </div>
          `
    })
    .join('')
}

const murkUp = () => {
  const { city, localtime, temperature, condition, isDay, properties } = store

  renderProperty(properties)

  const containerClass = isDay === 1 ? 'is-day' : ''

  return `
  <div class="container ${containerClass}">
    <div class="top">
      <div class="city">
        <div class="city-subtitle">Weather Today in</div>
          <div class="city-title" id="city">
          <span>${city}</span>
        </div>
      </div>
      <div class="city-info">
        <div class="top-left">
        <img class="icon" src="./img/${getImage(condition)}" alt="" />
        <div class="description">${condition}</div>
      </div>
      <div class="top-right">
        <div class="city-info__subtitle">${localtime}</div>
          <div class="city-info__title">${temperature}°</div>
          </div>
        </div>
      </div>
    <div id="properties">${renderProperty(properties)}</div>
  </div>
  `
}

const toggleClass = () => {
  popup.classList.toggle('active')
}

const renderComponent = () => {
  root.innerHTML = `${murkUp()}`

  const city = document.getElementById('city')
  city.addEventListener('click', toggleClass)
}

fetchData()
