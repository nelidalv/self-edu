// объекты
const person = {
    name: 'Vladilen', //ключ и значение
    age: 30,
    isProgrammer: false,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex value',
    // ['key_' + (1 + 3)]: 'Computed Key', //key_4
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log('this:', this)
        console.log('Info pro cheloveka по имени ' + this.name) //this указывает на то в чем находится
    }
}
// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])

// person.greet() // методы
// person.age++
// person.languages.push('by')
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person.key_4)

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = '20', languages} = person // указываем объект для деструктуризации и переменные, которые хотим получить, задаем значения новым переменным взятым из значений старых переменных
// console.log(name, personAge, languages)
console.log(person)

// for (let key in person){ // for in 
//     if (person.hasOwnProperty(key)){
//     console.log('key: ', key)
//     console.log('value: ', person[key])
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })

// // Context
// person.info()
const logger = {
    keys() {
        console.log('Objekt keys', Object.keys(this))
    },
    keysAndValues() {
        // Object.keys(this).forEach(key => {
        //     console.log(`"${key}": ${this[key]}`)
        // })
        // const self = this
        Object.keys(this).forEach(function(key) {
        console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-----------GO-----------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length -1) {
            console.log('-----------')
            }
        })
        if (bottom) {
            console.log('-----------Stop-----------')
        }
    }
}

// const bound = logger.keys.bind(person) //bind привязывает определеный контекст, который сами выберем
// bound()
//  logger.keys.call(person) //сразу вызывает указанную функцию
logger.withParams.call(person, true,true, true) 
logger.withParams.apply(person, [true,true, true])