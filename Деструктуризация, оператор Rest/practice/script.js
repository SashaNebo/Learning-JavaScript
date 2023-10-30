const link = 'http://api.weatherapi.com/v1/current.json?key=916a6ab1a9c7464fa40192347232910'

let store = {
  city: 'London',
  // feelslike: 0,
}

const fetchData = async () => {
  const result = await fetch(`${link}&query=${store.city}`)
  const data = await result.json()

  console.log(data)

  const {
    current: { feelslike_c: feelslike, cloud, temp_c: temperature },
    location: { name: city, country, localtime },
  } = data

  store = {
    // ...store,
    feelslike,
    city,
    cloud,
    temperature,
    country,
    localtime,
  }
  console.log(store)
}

fetchData()
