// new Date(year, month, day, hours, m, s);
// new Date('YYYY-MM-DDTHH:mm:ss.sssZ');
// new Date(timestamp);
// month - 0, 11

// timestamp:
// Date.now()
// getTime()

// get/set
// getFullYear / getYear (developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear)
// getMonth
// getDate
// getDay (0 (ВС) -> 6 (СБ)) - получить день недели
// getHours, getMinutes, getSecondss

// getTimezoneOffset
// get + UTC (GTM 0)

// toISOString()
// toLocaleString()
// toLocaleDateString()
// toLocaleTimeString()

// console.log(new Date(2024, 0, 1)) // new Date(year, month, day, hours, m, s)
// console.log(new Date('2024-01-01T00:00:00')) // 'YYYY-MM-DDTHH:mm:ss.sssZ'
// console.log(new Date(1699120993000)) // new Date(timestamp)

// console.log(new Date('2024-01-01T00:00:00Z'))

// console.log(Date.now())
// console.log(`${new Date(1704056400000)}\n`, new Date(1699121228562))

const date = new Date(1704056400000)
// const date2 = new Date('2024-01-01T00:00:00')

// console.log(date.getUTCHours())

// console.log(date.getTime())
// console.log(date.getSeconds())
// console.log(date.getMinutes())
// console.log(date.getHours())
// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// date.setFullYear(25)
// console.log(date.getFullYear())

// console.log(date.toISOString())
// console.log(date.toString())
// console.log(date.toTimeString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleString().split(','))
