// 1 Number
// const num = 42 //int
// const float = 42.4242
// const pow = 10e3
//
// console.log('MIN_SAFW_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2,53) - 1)
// console.log('MIN_SAFW_INTEGER: ' , Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('2 /0', 2 / 0)
// console.log(Number.NaN) // Not a Number
// console.log(typeof Number.NaN)
// const weird = 2 / undefined
// console.log(Number(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2 )
// console.log(Number(stringInt) + 2 )
// console.log(+stringInt + 2)
//
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)


//
// console.log(0.4 + 0.2)
// console.log(+(0.4 + 0.2).toFixed(4))
// console.log(parseFloat((0.4 + 0.2).toFixed(4)))

// 2 BigInt
// console.log(9007199254740991999999n - 900719925474099199999n)
// console.log(-9007199254740991999999n - 900719925474099199999n)

// console.log(10n-4) //error
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(81))
// console.log(Math.pow(2,8))
// console.log(Math.abs(-42))
// console.log(Math.trunc(1.23))
// console.log(Math.random())

// 4 example

function getRandomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 23))
