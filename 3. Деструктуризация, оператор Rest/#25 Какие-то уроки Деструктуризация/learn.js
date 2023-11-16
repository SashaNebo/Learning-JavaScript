// деструктуризация массивов
// пропуск элементов
// лишние значения
// значение по умолчанию

// деструктуризация объектов
// значение по умолчанию
// переименование объектов

// ---
// const { user_name, user_age } = { user_name: 'Ilya', user_age: 20, c: 3 }

// console.log(user_name, user_age)

// const [one, two, three, four] = [1, 2, 3, 4]

// console.log(one)

// const users = ['Alex', 'John', 'Jack']
// const [, , jack] = ['Alex', 'John', 'Jack']
// console.log(jack)

// const server_array = ['Alex', 20]
// const server_obj = { user_name: 'Ilya', user_age: 20, c: 3 }

// const [uesrName, userAge, userHasCar = 'Not information'] = server_array
// console.log(userHasCar)

// const { user_name, user_age = 0 } = server_obj
// console.log(user_name, user_age)

server_array = ['Alex', 20, true]
const server_obj = { user_name: 'Ilya', c: 3 }

// const [userName, userAge, hasCar] = server_array
const { user_name: userName, user_age: userAge = 'not found' } = server_obj

console.log(userName, userAge)

// Тоже самое
// Ты не понимашь разницу !!!!
