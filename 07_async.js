// Event loop

// const timeout = setTimeout(() => {
//     // clearTimeout(timeout)
//     console.log('After timeout')
// }, 2000)

// const interval = setInterval(() => {
//     console.log('Interval')
// }, 2000)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() =>{
//     console.log('after 2sec ')
// }, 2000)





const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() =>{
            reject('что-то пошло не так:')
            //resolve()
    }, wait)
    })
    return promise
}

/// когда есть then/catch/finaly = асинхронность
// delay(2500)
//     .then(() => {
//         console.log('after 2 sec')
//     })
//     .catch( err => console.error(err)) // помогает отлавлилвать ошибки
//     .finally( () => console.log('finaly'))

const getData = () => new Promise( resolve => resolve([1,1,2,3,5,8,13]))
// getData().then( data => console.log(data))

async function asyncExmpl() {
    try{
    await delay(3000)
    const data = await getData()
    console.log('Data', data)
    }catch (e){
    console.log(e)
    } finally{
    console.log('Finally')
    }
}
asyncExmpl()

//передача колбэков, работа с промисами и async