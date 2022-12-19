const navBtn = document.querySelector('button')
const nav = document.querySelector('nav')
const navItems = document.querySelectorAll('a')

const handleBurgerNavigation = () => {
    nav.classList.toggle('nav-media')
}

navBtn.addEventListener('click', handleBurgerNavigation)

