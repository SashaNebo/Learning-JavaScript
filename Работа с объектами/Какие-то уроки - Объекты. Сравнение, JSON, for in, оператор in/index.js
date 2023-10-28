// const key = 'key'
// const value = 'Hello'

// const data = {
//   [key]: value,
// }

// console.log(data)

const user = {
  name: 'Alex',
  age: 0,
  state: 413,
  family: {
    dad: {
      name: 'Popi',
    },
    mom: {
      name: 'Loli',
    },
  },
}

// console.log('name' in user)
// console.log(user.hasOwnProperty('id'))

// if ('age' in user) {
//   console.log(user.age)
// }

// if (!user.age) {
//   console.log(user.age)
// }

// if ('state' in user) {
//   console.log(user.state)
// } else {
//   console.log('Pusto')
// }

// const key = 'state'

// console.log(key in user)
// console.log(user)

// const str = JSON.stringify(user)
// console.log(JSON.parse(str))

// for (let i in user) {
//   const value = user[i]
//   console.log(`${i}:`, value)
// }

// console.log(Object.keys(user))
// console.log(Object.keys(user.family))
// console.log('-------------------------')
// console.log(Object.values(user))
// console.log(Object.values(user.family))
// console.log('-------------------------')
// console.log(Object.entries(user))
// console.log(Object.entries(user.family))

// const entries = Object.entries(user)
// console.log('-------------------------')
// entries.forEach(entry => {
//   let key = entry[0]
//   let value = entry[1]

//   console.log(`${key}: ${value}`)
// })

// let obj1 = { test: 'hello' }
// let obj2 = { test: 'hello' }

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

const userInformation = {
  name: 'Иван',
  surname: 'Иванов',
  age: 15,
  family: {
    dad: {
      name: 'Александр',
      surname: 'Иванов',
      age: 50,
    },
    mom: {
      name: 'Наталья',
      surname: 'Иванова',
      age: 43,
    },
    brother: {
      name: 'Данил',
      surname: 'Иванов',
      age: '22',
    },
    sister: {
      name: 'Лера',
      surname: 'Иванова',
      age: '13',
    },
  },
}

// getInfo(userInformation)

// У Иван Иванов 4 члена семьи
function getInfo(data) {
  let information = ''
  let name = ''
  let surname = ''
  let quantity = 0
  'name' in data ? (name = data.name) : (name = 'Неизвестно')
  'surname' in data ? (surname = data.surname) : (surname = 'Неизвестно')

  if ('family' in data) {
    quantity = Object.values(data.family).length
  }

  information = `Человек по имени ${name} ${surname} имеет количество человек в семье ${quantity}`
  // console.log(`${information}\n`)
  return information
}

function getInfo2(data) {
  let familyInfo = []
  let information2 = ''
  // if ('family' in data) {
  //   familyInfo = Object.entries(data.family)
  // }

  if ('family' in data) {
    for (let key in data.family) {
      // console.log(data.family[key])
      information2 += `${key} - ${data.family[key].name} ${data.family[key].surname} ${data.family[key].age} годиков\n`
    }
  }

  // familyInfo.forEach(info => {
  //   information2 += `${info[0]} - ${info[1].name} ${info[1].surname} ${info[1].age}\n`
  // })
  return information2
}

const fullInfo = `${getInfo(userInformation)}\n${getInfo2(userInformation)}`

console.log(fullInfo)

// У {user.name + user.surname} {family.length} член(-а/-ов) семьи.
// Отец - {dad.name + dad.surname} (возраст не известен).
// Мать - {mom.name + mom.surname} (возраст не известен).
// Брат - {brother.name + brother.surname} ({brother.age} лет).
// Человек по имени Иван Иванов имеет количество человек в семье 4
