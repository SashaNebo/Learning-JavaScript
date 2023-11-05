// 1. Вывести день недели: ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС
// console.log(getWeekDay(Date.now()));
// console.log(getWeekDay('2017-05-05T15:00'));
// console.log(getWeekDay(new Date(2016, 1, 10)));

// 2. Вывести понятную дату: сегодня, вчера, завтра, 01.01.2017

function getWeekDay(date) {
  const d = new Date(date)
  const day = d => {
    switch (d.getDay()) {
      case 0:
        return 'ВС'
      case 1:
        return 'ПН'
      case 2:
        return 'ВТ'
      case 3:
        return 'СР'
      case 4:
        return 'ЧТ'
      case 5:
        return 'ПТ'
      case 6:
        return 'СБ'
    }
  }

  return `День недели ${day(d)}`
}
console.log(getWeekDay(new Date(2016, 1, 10)))

function getClearDate(date, nowDate) {
  today = new Date(nowDate)

  const arrayNewDate = date.toLocaleString().split(',')[0].split('.')
  const arrayToday = today.toLocaleString().split(',')[0].split('.')

  const yearNewDate = arrayNewDate[2]
  const mounthNewDate = arrayNewDate[1]
  const dayNewDate = +arrayNewDate[0]

  const yearToday = arrayToday[2]
  const mounthToday = arrayToday[1]
  const dayToday = +arrayToday[0]

  if (yearNewDate === yearToday && mounthNewDate === mounthToday) {
    if (dayNewDate === dayToday) {
      return `Сегодня ${date.toLocaleString()}`
    } else if (dayNewDate + 1 === dayToday) {
      return `Вчера ${date.toLocaleString()}`
    } else if (dayNewDate - 1 === dayToday) {
      return `Завтра ${date.toLocaleString()}`
    }
  } else {
    return `Когда-то ${date.toLocaleString()}`
  }
}

console.log(getClearDate(new Date(Date.now()), Date.now()))
