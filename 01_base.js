// век живи век учись // переменные
//var можно менять, потому не актуально
//const firstName = 'Vladilen'
//const lastName = 'Ivanov' //string // конст нельзя менять, чтоб не накосячить
//const age = 35 // number // let можно менять, модно пользоваться
//const isProgrammer = true// boolean
// мутирование
//console.log('Имя: ' + firstName + ', а возраст ' + age)
//alert('Имя: ' + firstName + ', а возраст ' + age)
//const lastName = prompt('Введите фамилию')
//alert('Имя: ' + firstName + ', а возраст ' + age + ' Фамилия ' + lastName)

// операторы
//let currentYear = 2022
//let birthYear = 1987

//const age = currentYear - birthYear
//console.log(age)
//const a = 10
//const b = 5

//let c = 32
//c +=a
//console.log(++currentYear)
//console.log(currentYear++)
//console.log(currentYear)
//console.log(c)

// типы данных
/*
const isProgrammer = true
const name = 'Vladile'
const age = 35
let x
null
console.log(typeof isProgrammer)
console.log(typeof  x)
*/
//приоритеты
/*

const fullAge = 35
const birthYear = 1987
const currentYear = 2022
const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)*/

// условные операторы
/*const courseStatus = 'ups' // ready, fail, pending

if (courseStatus === 'ready') {
  console.log('курс готов и его моно проходить')
} else if (courseStatus === 'pending') {
    console.log('в разработке')
} else {
    console.log('Курс не получился')
}
const isReady = true

if (isReady) {
    console.log(' Ok')
} else {
    console.log(' ne Ok')
}

isReady ? console.log('OKOK') : console.log('ne ok') //тернарные выражения */

/* булевая логика */
/* функции */
//
// function calculateAge(year){
//     return 2022 - year
// }
//
// function logInfoAbout(name, year){
//     const age = calculateAge(year)
//
//     if (age > 0){
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// } else {
//     console.log("это уже потом")}
// }
//
// logInfoAbout('Vladilen', 1987)
// logInfoAbout('Vladilen2', 2023)


//10 циклы
// const cars = ['Mazda', 'Merc', 'Ford', 'Porsh']
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// // }
// for (let car of cars){
//     console.log(car)
// }

// 11 объекты
const person = {
    firstName: 'Vladilen',
    lastName: 'Ivanov',
    year: 1987,
    languages: ['ru', 'en', 'de'],
    hasWife: false,
    greet: function(){
        console.log('greet')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year';
console.log(person[key])
person.hasWife = true
person.isPrgrrammer = false
console.log(person)
person.greet()