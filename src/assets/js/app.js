const iconMenu = document.querySelector('.header__icon')
const menuBody = document.querySelector('.header__menu')
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}
// End of Burger

const menuLinks = document.querySelectorAll('.nav__link[data-goto]')
if (menuLinks.length > 0) {
  menuLinks.forEach((el) => {
    el.addEventListener('click', onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('header').offsetHeight

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active')
        menuBody.classList.remove('_active')
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      })
      e.preventDefault()
    }
  }
}
// End of Scroll

// 1100 конец секции
// 200 начало секции
// 900 контент секции
// 128 на каждый

let sectionOffset = 200
let words = document.querySelectorAll('.word__span')

let oneOffset = 200
let twoOffset = 328
let threeOffset = 456
let fourOffset = 584
let fiveOffset = 712
let sixOffset = 840
let sevenOffset = 968

window.addEventListener('scroll', () => {
  if (sectionOffset <= window.pageYOffset && twoOffset > window.pageYOffset) {
    words[0].classList.add('active')
  } else words[0].classList.remove('active')

  if (twoOffset <= window.pageYOffset && threeOffset > window.pageYOffset) {
    words[1].classList.add('active')
  } else words[1].classList.remove('active')

  if (threeOffset <= window.pageYOffset && fourOffset > window.pageYOffset) {
    words[2].classList.add('active')
  } else words[2].classList.remove('active')

  if (fourOffset <= window.pageYOffset && fiveOffset > window.pageYOffset) {
    words[3].classList.add('active')
  } else words[3].classList.remove('active')

  if (fiveOffset <= window.pageYOffset && sixOffset > window.pageYOffset) {
    words[4].classList.add('active')
  } else words[4].classList.remove('active')

  if (sixOffset <= window.pageYOffset && sevenOffset > window.pageYOffset) {
    words[5].classList.add('active')
  } else words[5].classList.remove('active')

  if (sevenOffset <= window.pageYOffset && 1100 > window.pageYOffset) {
    words[6].classList.add('active')
  } else words[6].classList.remove('active')
})
// End of Word
