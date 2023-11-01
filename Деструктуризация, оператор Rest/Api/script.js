const link = 'http://universities.hipolabs.com/search?country=Belarus'

const fetchData = async () => {
  const result = await fetch(`${link}`)
  const data = await result.json()

  console.log(result)
  console.log(data)
}

fetchData()
