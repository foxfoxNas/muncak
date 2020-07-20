const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const letterBlue = document.querySelector('.letter-blue')
const welcomeContent = document.querySelector('.welcome-content');
const body = document.getElementsByTagName('body')[0];


function toggleMenu() {
    welcomeContent.classList.toggle('invisible');
    letterBlue.classList.toggle('letter-pink')
    menu.classList.toggle('menu-expand');
    burgerMenu.classList.toggle('expand-burger')
    body.classList.toggle('disable-scroll')
}

burgerMenu.addEventListener('click', (e) => {
    toggleMenu()
});

menu.addEventListener('click', (e) => {
    Array.from(e.target.classList)[0] == "menu-item" ? e : toggleMenu();
});

