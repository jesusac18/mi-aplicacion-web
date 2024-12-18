const button = document.querySelector("button")
const h1 = document.querySelector("h1")
const body = document.querySelector("body")
let boolean = true

button.addEventListener("click",function () {
    if (boolean) {
        h1.style.color = 'white'
        body.style.backgroundColor = 'black'
        button.textContent = 'Tema Oscuro'
        boolean = !boolean
    } else {
        h1.style.color = 'black'
        body.style.backgroundColor = 'white'
        button.textContent = 'Tema Claro'
        boolean = !boolean
    }
})
