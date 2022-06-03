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

const getTopElement = (element) => {
  let clientTop = document.documentElement.clientTop
  return element.getBoundingClientRect().top + window.pageYOffset - clientTop
}

// End Of getTopElement

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

// let clientTop = document.documentElement.clientTop

// document.querySelector('.step').getBoundingClientRect().top + window.pageYOffset - clientTop

const sectionStepStart = getTopElement(document.querySelector('.step')) - 500
const sectionStepContent = sectionStepStart
const sectionStepEnd = sectionStepStart + sectionStepContent
let steps = document.querySelectorAll('.step__span')

const oneStep = sectionStepContent
const twoStep = sectionStepContent + 100
const threeStep = sectionStepContent + 200
const fourStep = sectionStepContent + 300
const fiveStep = sectionStepContent + 400
const sixStep = sectionStepContent + 500
const sevenStep = sectionStepContent + 600

let cards = document.querySelectorAll('.step__content')

const oneCard = sectionStepContent
const twoCard = sectionStepContent + 100
const threeCard = sectionStepContent + 200
const fourCard = sectionStepContent + 300
const fiveCard = sectionStepContent + 400
const sixCard = sectionStepContent + 500
const sevenCard = sectionStepContent + 600

window.addEventListener('scroll', () => {
  console.log(sectionStepStart, window.pageYOffset)

  if (oneStep <= window.pageYOffset && twoStep > window.pageYOffset) {
    steps[0].classList.add('active')
  } else steps[0].classList.remove('active')

  if (twoStep <= window.pageYOffset && threeStep > window.pageYOffset) {
    steps[1].classList.add('active')
  } else steps[1].classList.remove('active')

  if (threeStep <= window.pageYOffset && fourStep > window.pageYOffset) {
    steps[2].classList.add('active')
  } else steps[2].classList.remove('active')

  if (fourStep <= window.pageYOffset && fiveStep > window.pageYOffset) {
    steps[3].classList.add('active')
  } else steps[3].classList.remove('active')

  if (fiveStep <= window.pageYOffset && sixStep > window.pageYOffset) {
    steps[4].classList.add('active')
  } else steps[4].classList.remove('active')

  if (sixStep <= window.pageYOffset && sevenStep > window.pageYOffset) {
    steps[5].classList.add('active')
  } else steps[5].classList.remove('active')

  if (sevenStep <= window.pageYOffset && sectionStepEnd > window.pageYOffset) {
    steps[6].classList.add('active')
  } else steps[6].classList.remove('active')
})

window.addEventListener('scroll', () => {
  console.log(sectionStepStart, window.pageYOffset)

  if (oneCard <= window.pageYOffset && twoCard > window.pageYOffset) {
    cards[0].classList.add('active')
  } else cards[0].classList.remove('active')

  if (twoCard <= window.pageYOffset && threeCard > window.pageYOffset) {
    cards[1].classList.add('active')
  } else cards[1].classList.remove('active')

  if (threeCard <= window.pageYOffset && fourCard > window.pageYOffset) {
    cards[2].classList.add('active')
  } else cards[2].classList.remove('active')

  if (fourCard <= window.pageYOffset && fiveCard > window.pageYOffset) {
    cards[3].classList.add('active')
  } else cards[3].classList.remove('active')

  if (fiveCard <= window.pageYOffset && sixCard > window.pageYOffset) {
    cards[4].classList.add('active')
  } else cards[4].classList.remove('active')

  if (sixCard <= window.pageYOffset && sevenCard > window.pageYOffset) {
    cards[5].classList.add('active')
  } else cards[5].classList.remove('active')

  if (sevenCard <= window.pageYOffset && sectionStepEnd > window.pageYOffset) {
    cards[6].classList.add('active')
  } else cards[6].classList.remove('active')
})

// End Of Step
