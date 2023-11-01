const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 26,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
}

const citiesEuropeWithPopulation = {
  Moscow: 20,
  Berlin: 10,
  Praha: 3,
  Paris: 2,
}

// Spread
// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesEurope, 'Вашингтон', ...citiesRussia]
// const allCities = citiesEurope.concat('Vashngton', citiesRussia)
// console.log(allCities)

// console.log({ ...citiesRussiaWithPopulation })

// const allCitiesPopulation = {
//   ...citiesRussiaWithPopulation,
//   ...citiesEuropeWithPopulation,
// }
// console.log(allCitiesPopulation)

// Practice
// const numbers = [5, 3, 42, 17]
// console.log(Math.max(...numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...document.querySelectorAll('div')]

// console.log(nodes)

// Rest

function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]

const [a, b, ...rest] = numbers

console.log(a, b, ...rest)

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia',
}

const { name: userName, age: userAge, ...otherInfo } = person

console.log({ userName, userAge, ...otherInfo })
