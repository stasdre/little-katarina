const burgerIcon = document.querySelector('.burger')
const navContainer = document.querySelector('.header__top')

burgerIcon.addEventListener('click', () => {
    navContainer.classList.toggle('header__top_active')
    burgerIcon.classList.toggle('burger_active')
    document.body.classList.toggle('lock')
})
