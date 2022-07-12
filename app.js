// DOM // объекты WINDOW //
// window.confirm('Ok?')
//
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2')[0]
const heading2 = document.querySelector('h2') // возвращает первый попавшийся 
// console.log(heading2)
// const heading3 = heading2.nextElementSibling
const h2list = document.querySelectorAll('h2')
// console.log(h2list)
const heading3 = h2list[h2list.length-1]
// console.log(heading3)

setTimeout( () => {
    addStylesTo(heading,'Modified JS')
}, 2000)
const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    
    window.location = url
})
setTimeout( () => {
    addStylesTo(heading2,'norm')
}, 2500)
setTimeout( () => {
    addStylesTo(heading3.children[0],'GoGo Leearn more', '#f55555', '#fff', '3rem') //querySelector('a')
}, 3000)

function addStylesTo(node, text, bgcolor = '#f1f1f1', color= 'green', fontSize) {
    node.textContent = text
    node.style.backgroundColor = bgcolor
    node.style.textAlign = 'center'  
    node.style.color = color
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    //falsy: '', undefined, mull, 0, false 
    if (fontSize){
        node.style.fontSize = fontSize
    }
}

heading.onclick = () =>{// on , название события, описываем функцию //f.e. mdn mouse events
if (heading.style.color === 'green') {
    heading.style.color = '#fff'
    heading.style.backgroundColor = '#55a5f5'
} else {
    heading.style.color = 'green'
    heading.style.backgroundColor = '#55f5a5'
}
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'green') {
        heading2.style.color = '#fff'
        heading2.style.backgroundColor = '#55f5a5'
    } else {
        heading2.style.color = 'green'
        heading2.style.backgroundColor = '#55a5f5'
    }
})