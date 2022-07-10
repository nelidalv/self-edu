// const name ='Vladilen'
// const age = 35
//
// function getAge(){
//     return age
// }

// const output = 'Hello, my name is ' + name + ' my age ' + age + ' y'
// const output = `hi, my name is ${name} and i am  ${age < 30 ? 'ops': 'ops2'}`
// console.log(output)
// const output = `<div> <p>omg its so easy</p></div>`
// console.log(output)

// const name = 'Vladilen'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLocaleLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('e'))
// console.log(name.startsWith('V'))
// console.log(name.endsWith('m'))
// console.log(name.repeat(5))
// const string = "  sk"
// console.log(string.trim())


function logPerson(s, name, age) {
    if (age < 0 ){
        age = 'ne rodilsa'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = "Vladilen"
const personName2 = 'Nevladilen'
const personAge = 35
const personAge2 = -1
const output = logPerson`Name: ${personName}. Age: ${personAge}!`
const output2 = logPerson`Name: ${personName2}. Age: ${personAge2}!`

console.log(output)
console.log(output2)