// Denna fil skall innehålla JavaScript (JS)
const nav = document.querySelector('.navLinks')
const menu = document.querySelector('.menu')

function toggleMeny() {
    nav.classList.toggle('navActive')
    menu.classList.toggle('toggle')
  
}
menu.addEventListener('click', toggleMeny)

document.querySelector("footer").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, error ipsam rerum cumque laborum impedit ea corrupti debitis, amet facere neque iure repudiandae molestias similique? Quam facilis iusto et sapiente."
