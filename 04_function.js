// 1 Функции
// Function Decloration
// function greet(name){
//     console.log('привет - ', name)
// }

// //Function Expression
// const greet2 = function greet2(name) {
//     console.log('hi 2 ', name)
// }

// greet('Sveta')
// greet2('Sveta')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анониммные функции
// let counter = 0
// const interval = setInterval( function() {
//     if (counter === 5) {
//     clearInterval(interval) //clearTimeout
//     } else {
//     console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции

// function greet(name){
//     console.log('привет - ', name)
// }

// const arrow = (name) => {
//     console.log('привет - ', name)
// }
// arrow ('Vladilen')

// // const arrow2 = name => console.log('hello - ', mame)
// // arrow2 ('Vladilen2')

// const pow2 = num => num ** 2
// console.log(pow2(5))

// 4 Праметры по умолчанию
const sum = (a = 1,b = a*2) => a+b
console.log(sum(11))
console.log(sum())

function sumAll(...all){
    let result = 0
    for (let num of all) {
        result += num 
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// 5 Замыкания
function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Vladilen')
console.log(logWithLastName('Ivanov'))
console.log(logWithLastName('Ivanov2'))