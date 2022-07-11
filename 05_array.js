// const cars = ['Mazda', 'Ford', 'BMW', 'Merc']
// const people = [
//     {name: 'Vladilen', budget: 4200},
//     {name: 'Vladilen2', budget: 3500},
//     {name: 'Vladilen', budget: 1700}
// ]
// const fib = [1, 1, 2, 3, 5, 8, 13]

// //
// function addItemToEnd(){

// }
// cars.push('Renault') //если функция вызывается в контексте объекта - то это метод
// cars.unshift('VAZ')
// console.log(cars)

// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log('1-st: ' + firstCar)
// console.log('Last: ' + lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('Mazda')
// cars[index] = 'Akura'
// let findedPerson
// for (const person of people){
//     if(person.budget === 3500){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// const person = people.find((person) =>  person.budget === 3500) // лямда функция
// console.log(person)

// console.log(cars.includes('Peugot'))
// const person = people.find(function(person) {
//     return person.budget === 35000 // undefined
// })
// console.log(person)

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// //
// const pow2Fib = fib.map(pow2) // map - преобразовывает данные
// const filteredNumbers = pow2Fib.filter(num => num < 20) // фильтрует данные
// console.log(pow2Fib)
// console.log(filteredNumbers)
// .contain - проверяет содержание в строке
const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Vladilen2', budget: 3500},
    {name: 'Vladilen', budget: 1700}
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBudget)

// 1.
// const text = 'Hello, ученик'
// // const reverseText = text.split('') // делаем массив
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
