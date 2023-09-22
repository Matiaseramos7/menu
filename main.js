const nav = document.querySelector('#navBar')
const cerrar = document.querySelector('#cerrar')
const abrir = document.querySelector('#abrir')

abrir.addEventListener('click', () => {
    nav.classList.add("nav-visible")
}) 
cerrar.addEventListener('click', () => {
    nav.classList.remove('nav-visible')
})