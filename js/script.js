// Denna fil skall innehålla JavaScript (JS)
const nav = document.querySelector('.navLinks')
const menu = document.querySelector('.menu')

function toggleMeny() {
    nav.classList.toggle('navActive')
    menu.classList.toggle('toggle')
  
}
menu.addEventListener('click', toggleMeny)
