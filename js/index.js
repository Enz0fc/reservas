const navToogle=document.querySelector(".nav-toogle")
const navMenu=document.querySelector(".nav-menu")
navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
})