const mobileMenu = document.querySelector('.mobile_menu')
const navList = document.querySelector('.nav_list')
const navLinks = document.querySelectorAll('.nav_list li')
const activeClass = 'active'

function MobileNavbar() {
  function animateLinks() {
    navLinks.forEach((link, index) => {

      link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade .5s ease forwards ${((index / 7) + 0.3)}s`
    });
  }
  function handleClick() {
    navList.classList.toggle(activeClass)
    mobileMenu.classList.toggle(activeClass)
    animateLinks()
  }
  mobileMenu.addEventListener('click', handleClick)
}

if (mobileMenu) {
  MobileNavbar()
}
