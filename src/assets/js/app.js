//burger
let burger = document.querySelector('.header__burger');
let cross = document.querySelector('.header__top-cross');
let mobMenu = document.querySelector('.header__mobile');

let body = document.querySelector('body');

burger.onclick = function () {
	body.classList.add('opened');

	body.classList.add('scroll-hidden');
};
cross.onclick = function () {
	body.classList.remove('opened');

	body.classList.remove('scroll-hidden');
};

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach((el) => {
		el.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				pageYOffset -
				-document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}
// End of Scroll

const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content__item');

const changeClass = (el, tabs) => {
	for (let i = 0; i < tabs.children.length; i++) {
		tabs.children[i].classList.remove('active');
	}
	el.classList.add('active');
};

const listener = (tabs, content) => {
	tabs.addEventListener('click', (e) => {
		const currentTab = e.target.dataset.btn;
		changeClass(e.target, tabs);
		for (let i = 0; i < content.length; i++) {
			content[i].classList.remove('active');
			if (content[i].dataset.content === currentTab) {
				content[i].classList.add('active');
			}
		}
	});
};

listener(tabs, content);

// End of Tabs

const getTopElement = (element) => {
	let clientTop = document.documentElement.clientTop;
	return element.getBoundingClientRect().top + window.pageYOffset - clientTop;
};

// End Of getTopElement

const sectionWordStart = getTopElement(document.querySelector('.word')) - 400;
const sectionWordContent = sectionWordStart;
const sectionWordEnd = sectionWordStart + sectionWordContent;
let words = document.querySelectorAll('.word__span');

const oneWord = sectionWordContent;
const twoWord = sectionWordContent + 100;
const threeWord = sectionWordContent + 200;
const fourWord = sectionWordContent + 300;
const fiveWord = sectionWordContent + 400;
const sixWord = sectionWordContent + 500;
const sevenWord = sectionWordContent + 600;

window.addEventListener('resize', () => {
	window.removeEventListener('scroll', wordListeneer);

	console.log('resize');

	const sectionWordStart = getTopElement(document.querySelector('.word')) - 400;
	const sectionWordContent = sectionWordStart;
	const sectionWordEnd = sectionWordStart + sectionWordContent;

	const oneWord = sectionWordContent;
	const twoWord = sectionWordContent + 100;
	const threeWord = sectionWordContent + 200;
	const fourWord = sectionWordContent + 300;
	const fiveWord = sectionWordContent + 400;
	const sixWord = sectionWordContent + 500;
	const sevenWord = sectionWordContent + 600;

	wordListeneer(
		sectionWordStart,
		sectionWordContent,
		sectionWordEnd,
		words,
		oneWord,
		twoWord,
		threeWord,
		fourWord,
		fiveWord,
		sixWord,
		sevenWord
	);
});

function wordListeneer(
	sectionWordStart,
	sectionWordContent,
	sectionWordEnd,
	words,
	oneWord,
	twoWord,
	threeWord,
	fourWord,
	fiveWord,
	sixWord,
	sevenWord
) {
	console.log('func');
	window.addEventListener('scroll', () => {
		if (oneWord <= window.pageYOffset && twoWord > window.pageYOffset) {
			words[0].classList.add('active');
		} else words[0].classList.remove('active');

		if (twoWord <= window.pageYOffset && threeWord > window.pageYOffset) {
			words[1].classList.add('active');
		} else words[1].classList.remove('active');

		if (threeWord <= window.pageYOffset && fourWord > window.pageYOffset) {
			words[2].classList.add('active');
		} else words[2].classList.remove('active');

		if (fourWord <= window.pageYOffset && fiveWord > window.pageYOffset) {
			words[3].classList.add('active');
		} else words[3].classList.remove('active');

		if (fiveWord <= window.pageYOffset && sixWord > window.pageYOffset) {
			words[4].classList.add('active');
		} else words[4].classList.remove('active');

		if (sixWord <= window.pageYOffset && sevenWord > window.pageYOffset) {
			words[5].classList.add('active');
		} else words[5].classList.remove('active');

		if (
			sevenWord <= window.pageYOffset &&
			sevenWord + 100 > window.pageYOffset
		) {
			words[6].classList.add('active');
		} else words[6].classList.remove('active');

		// console.log(sevenWord);
		// console.log(window.pageYOffset);
		// console.log(sectionWordEnd);
	});
}

wordListeneer(
	sectionWordStart,
	sectionWordContent,
	sectionWordEnd,
	words,
	oneWord,
	twoWord,
	threeWord,
	fourWord,
	fiveWord,
	sixWord,
	sevenWord
);

const constellation = (element) => {
	window.addEventListener('scroll', (e) => {
		element.style.setProperty('--rotation', window.scrollY);
	});
};

document.querySelectorAll('.constellation').forEach(constellation);

const navbar = document.querySelector('.header');

window.onscroll = function () {
	const top = window.scrollY;
	if (top == 0) {
		navbar.classList.remove('header-background');
	} else {
		navbar.classList.add('header-background');
	}
};

// End of Word

// let clientTop = document.documentElement.clientTop

// document.querySelector('.step').getBoundingClientRect().top + window.pageYOffset - clientTop

// const sectionStepStart = getTopElement(document.querySelector('.step')) - 500
// const sectionStepContent = sectionStepStart
// const sectionStepEnd = sectionStepStart + sectionStepContent
// let steps = document.querySelectorAll('.step__span')

// const oneStep = sectionStepContent
// const twoStep = sectionStepContent + 100
// const threeStep = sectionStepContent + 200
// const fourStep = sectionStepContent + 300
// const fiveStep = sectionStepContent + 400
// const sixStep = sectionStepContent + 500
// const sevenStep = sectionStepContent + 600

// let cards = document.querySelectorAll('.step__content')

// const oneCard = sectionStepContent
// const twoCard = sectionStepContent + 100
// const threeCard = sectionStepContent + 200
// const fourCard = sectionStepContent + 300
// const fiveCard = sectionStepContent + 400
// const sixCard = sectionStepContent + 500
// const sevenCard = sectionStepContent + 600

// window.addEventListener('scroll', () => {
//   console.log(sectionStepStart, window.pageYOffset)

//   if (oneStep <= window.pageYOffset && twoStep > window.pageYOffset) {
//     steps[0].classList.add('active')
//   } else steps[0].classList.remove('active')

//   if (twoStep <= window.pageYOffset && threeStep > window.pageYOffset) {
//     steps[1].classList.add('active')
//   } else steps[1].classList.remove('active')

//   if (threeStep <= window.pageYOffset && fourStep > window.pageYOffset) {
//     steps[2].classList.add('active')
//   } else steps[2].classList.remove('active')

//   if (fourStep <= window.pageYOffset && fiveStep > window.pageYOffset) {
//     steps[3].classList.add('active')
//   } else steps[3].classList.remove('active')

//   if (fiveStep <= window.pageYOffset && sixStep > window.pageYOffset) {
//     steps[4].classList.add('active')
//   } else steps[4].classList.remove('active')

//   if (sixStep <= window.pageYOffset && sevenStep > window.pageYOffset) {
//     steps[5].classList.add('active')
//   } else steps[5].classList.remove('active')

//   if (sevenStep <= window.pageYOffset && sectionStepEnd > window.pageYOffset) {
//     steps[6].classList.add('active')
//   } else steps[6].classList.remove('active')
// })

// window.addEventListener('scroll', () => {
//   console.log(sectionStepStart, window.pageYOffset)

//   if (oneCard <= window.pageYOffset && twoCard > window.pageYOffset) {
//     cards[0].classList.add('active')
//   } else cards[0].classList.remove('active')

//   if (twoCard <= window.pageYOffset && threeCard > window.pageYOffset) {
//     cards[1].classList.add('active')
//   } else cards[1].classList.remove('active')

//   if (threeCard <= window.pageYOffset && fourCard > window.pageYOffset) {
//     cards[2].classList.add('active')
//   } else cards[2].classList.remove('active')

//   if (fourCard <= window.pageYOffset && fiveCard > window.pageYOffset) {
//     cards[3].classList.add('active')
//   } else cards[3].classList.remove('active')

//   if (fiveCard <= window.pageYOffset && sixCard > window.pageYOffset) {
//     cards[4].classList.add('active')
//   } else cards[4].classList.remove('active')

//   if (sixCard <= window.pageYOffset && sevenCard > window.pageYOffset) {
//     cards[5].classList.add('active')
//   } else cards[5].classList.remove('active')

//   if (sevenCard <= window.pageYOffset && sectionStepEnd > window.pageYOffset) {
//     cards[6].classList.add('active')
//   } else cards[6].classList.remove('active')
// })

// End Of Step
