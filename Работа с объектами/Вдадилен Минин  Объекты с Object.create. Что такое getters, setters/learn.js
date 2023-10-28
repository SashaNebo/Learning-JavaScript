const person = Object.create(
  {
    calcAge() {
      console.log(`Age:`, new Date().getFullYear() - this.birthYear)
    },
  },
  {
    name: {
      value: 'Ilya',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 2003,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        document.body.style.background = '#000'
        console.log('Set age', value)
      },
    },
  }
)

// person.name = 'Stepan'

for (let key in person) {
  // if (key in person) {
  //   console.log(`${key}: ${person[key]}`)
  // }

  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`)
  }
}
