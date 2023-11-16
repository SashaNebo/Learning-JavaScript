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

for (key in userInformation) {
  // console.log(key)
  // console.log(`userInformation.${key}: ${userInformation[key]}`)
  console.log(key, userInformation[key])
}

// Get age all members

const members = Object.values(userInformation.family)

// for (key in members) {
//   const data = members[key]
//   console.log(data)
// }
