import { data } from './data'
import css from '../css/main.css'

const someLetters = []
const users = JSON.parse(data)
const letters = document.getElementsByClassName('letter')
const wraps = document.getElementsByClassName('wrap')
const errorText = 'Name not found'



const generationLetters = (func) => {
    if (someLetters.length === 5) return someLetters;
    const current = String.fromCharCode(func(97, 122)).toLocaleUpperCase()
    someLetters.includes(current) 
        ? generationLetters(func) 
            : someLetters.push(current)
    return generationLetters(func)
}

const generationNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

const doVisible = (value) => {
    document.getElementById(value).style.display = 'block'
}

const showText = (value, text, className = null) => {
    const itemList = document.getElementById(value)
        .appendChild(document.createElement('li'))
    itemList.innerText = text
    itemList.className = className
}

generationLetters(generationNumbers)

Array.from(wraps).forEach((item, index) => {
    item.appendChild(document.createElement('ol')).id = someLetters[index]
})


Array.from(letters).forEach((item, index) => {
    item.value = someLetters[index]
    item.onclick = function (event) {
        const user = users.filter((item) => item.name.indexOf(event.target.value) === 0)
        if(user.length !== 0) {
            doVisible(event.target.value)
            for (let index = 0; index < user.length; index++) {
                showText(event.target.value, user[index].name) 
            }
        } else {
            doVisible(event.target.value)
            showText(event.target.value, errorText, 'errorText')
        }
        this.onclick = null
    }
    
})