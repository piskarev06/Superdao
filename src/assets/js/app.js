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
        -document.querySelector('header').offsetHeight

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

const sectionWordStart =
  document.querySelector('.word').clientHeight +
  document.querySelector('.header').offsetHeight +
  document.querySelector('.intro').offsetHeight
const sectionWordContent = 900
const sectionWordEnd = sectionWordStart + sectionWordContent
let words = document.querySelectorAll('.word__span')

const oneWord = (sectionWordContent / words.length) * 2
const twoWord = (sectionWordContent / words.length) * 3
const threeWord = (sectionWordContent / words.length) * 4
const fourWord = (sectionWordContent / words.length) * 5
const fiveWord = (sectionWordContent / words.length) * 6
const sixWord = (sectionWordContent / words.length) * 7
const sevenWord = (sectionWordContent / words.length) * 8

window.addEventListener('scroll', () => {
  if (oneWord <= window.pageYOffset && twoWord > window.pageYOffset) {
    words[0].classList.add('active')
  } else words[0].classList.remove('active')

  if (twoWord <= window.pageYOffset && threeWord > window.pageYOffset) {
    words[1].classList.add('active')
  } else words[1].classList.remove('active')

  if (threeWord <= window.pageYOffset && fourWord > window.pageYOffset) {
    words[2].classList.add('active')
  } else words[2].classList.remove('active')

  if (fourWord <= window.pageYOffset && fiveWord > window.pageYOffset) {
    words[3].classList.add('active')
  } else words[3].classList.remove('active')

  if (fiveWord <= window.pageYOffset && sixWord > window.pageYOffset) {
    words[4].classList.add('active')
  } else words[4].classList.remove('active')

  if (sixWord <= window.pageYOffset && sevenWord > window.pageYOffset) {
    words[5].classList.add('active')
  } else words[5].classList.remove('active')

  if (sevenWord <= window.pageYOffset && sectionWordEnd > window.pageYOffset) {
    words[6].classList.add('active')
  } else words[6].classList.remove('active')
})
// End of Word
