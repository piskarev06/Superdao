/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const formEl = document.getElementById('form');\r\nconst emailEl = document.getElementById('email');\r\nconst buttonEl = document.getElementById('button');\r\nconst loaderEl = document.getElementById('loader');\r\nconst checkedEl = document.getElementById('checked');\r\n\r\nformEl.addEventListener('submit', async (event) => {\r\n\tevent.preventDefault();\r\n\tconsole.log('submitted', emailEl.value);\r\n\r\n\t// сменить текст кнопки\r\n\tbuttonEl.innerHTML =\r\n\t\t'<div id=\"loader\" class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>';\r\n\r\n\tawait fetch('https://api-eu.customer.io/v1/webhook/a5a02b55d37837cb', {\r\n\t\tmethod: 'POST',\r\n\t\theaders: {\r\n\t\t\t'Content-Type': 'application/json',\r\n\t\t},\r\n\t\tbody: JSON.stringify({\r\n\t\t\temail: emailEl.value,\r\n\t\t\tcreatedAt: new Date().toISOString(),\r\n\t\t\tformName: 'Site newsletter form',\r\n\t\t}),\r\n\t});\r\n\r\n\t// сменить текст кнопки\r\n\tbuttonEl.innerHTML = `<svg id=\"checked\" width=\"27\" height=\"20\" viewBox=\"0 0 27 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.7121 0.507124C26.4675 1.21537 26.5058 2.40194 25.7976 3.1574L10.5632 19.4074C10.2087 19.7855 9.71358 20 9.19532 20C8.67705 20 8.1819 19.7855 7.82744 19.4074L1.38212 12.5324C0.67388 11.7769 0.712156 10.5904 1.46762 9.88212C2.22308 9.17388 3.40964 9.21216 4.11789 9.96762L9.19532 15.3835L23.0618 0.592616C23.7701 -0.162844 24.9566 -0.20112 25.7121 0.507124Z\" fill=\"#3A3A3A\"/></svg>`;\r\n\r\n\t// очистить инпут\r\n\tsetTimeout(() => {\r\n\t\tbuttonEl.innerHTML = 'Subscribe';\r\n\t\temailEl.value = '';\r\n\t}, 4 * 1000);\r\n});\r\n\r\n//burger\r\nlet burger = document.querySelector('.header__burger');\r\nlet cross = document.querySelector('.header__top-cross');\r\nlet mobMenu = document.querySelector('.header__mobile');\r\n\r\nlet body = document.querySelector('body');\r\n\r\nburger.onclick = function () {\r\n\tbody.classList.add('opened');\r\n\r\n\tbody.classList.add('scroll-hidden');\r\n};\r\ncross.onclick = function () {\r\n\tbody.classList.remove('opened');\r\n\r\n\tbody.classList.remove('scroll-hidden');\r\n};\r\n\r\nconst menuLinks = document.querySelectorAll('.nav__link[data-goto]');\r\nif (menuLinks.length > 0) {\r\n\tmenuLinks.forEach((el) => {\r\n\t\tel.addEventListener('click', onMenuLinkClick);\r\n\t});\r\n\r\n\tfunction onMenuLinkClick(e) {\r\n\t\tconst menuLink = e.target;\r\n\t\tif (\r\n\t\t\tmenuLink.dataset.goto &&\r\n\t\t\tdocument.querySelector(menuLink.dataset.goto)\r\n\t\t) {\r\n\t\t\tconst gotoBlock = document.querySelector(menuLink.dataset.goto);\r\n\t\t\tconst gotoBlockValue =\r\n\t\t\t\tgotoBlock.getBoundingClientRect().top +\r\n\t\t\t\tpageYOffset -\r\n\t\t\t\t-document.querySelector('header').offsetHeight;\r\n\r\n\t\t\tif (iconMenu.classList.contains('_active')) {\r\n\t\t\t\tdocument.body.classList.remove('_lock');\r\n\t\t\t\ticonMenu.classList.remove('_active');\r\n\t\t\t\tmenuBody.classList.remove('_active');\r\n\t\t\t}\r\n\r\n\t\t\twindow.scrollTo({\r\n\t\t\t\ttop: gotoBlockValue,\r\n\t\t\t\tbehavior: 'smooth',\r\n\t\t\t});\r\n\t\t\te.preventDefault();\r\n\t\t}\r\n\t}\r\n}\r\n// End of Scroll\r\n\r\nconst tabs = document.getElementById('tabs');\r\nconst content = document.querySelectorAll('.content__item');\r\n\r\nconst changeClass = (el, tabs) => {\r\n\tfor (let i = 0; i < tabs.children.length; i++) {\r\n\t\ttabs.children[i].classList.remove('active');\r\n\t}\r\n\tel.classList.add('active');\r\n};\r\n\r\nconst listener = (tabs, content) => {\r\n\ttabs.addEventListener('click', (e) => {\r\n\t\tconst currentTab = e.target.dataset.btn;\r\n\t\tchangeClass(e.target, tabs);\r\n\t\tfor (let i = 0; i < content.length; i++) {\r\n\t\t\tcontent[i].classList.remove('active');\r\n\t\t\tif (content[i].dataset.content === currentTab) {\r\n\t\t\t\tcontent[i].classList.add('active');\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n};\r\n\r\nlistener(tabs, content);\r\n\r\n// End of Tabs\r\n\r\nconst getTopElement = (element) => {\r\n\tlet clientTop = document.documentElement.clientTop;\r\n\treturn element.getBoundingClientRect().top + window.pageYOffset - clientTop;\r\n};\r\n\r\n// End Of getTopElement\r\n\r\nconst sectionWordStart = getTopElement(document.querySelector('.word')) - 400;\r\nconst sectionWordContent = sectionWordStart;\r\nconst sectionWordEnd = sectionWordStart + sectionWordContent;\r\nlet words = document.querySelectorAll('.word__span');\r\n\r\nconst oneWord = sectionWordContent;\r\nconst twoWord = sectionWordContent + 100;\r\nconst threeWord = sectionWordContent + 200;\r\nconst fourWord = sectionWordContent + 300;\r\nconst fiveWord = sectionWordContent + 400;\r\nconst sixWord = sectionWordContent + 500;\r\nconst sevenWord = sectionWordContent + 600;\r\n\r\nwindow.addEventListener('resize', () => {\r\n\twindow.removeEventListener('scroll', wordListeneer);\r\n\r\n\tconsole.log('resize');\r\n\r\n\tconst sectionWordStart = getTopElement(document.querySelector('.word')) - 400;\r\n\tconst sectionWordContent = sectionWordStart;\r\n\tconst sectionWordEnd = sectionWordStart + sectionWordContent;\r\n\r\n\tconst oneWord = sectionWordContent;\r\n\tconst twoWord = sectionWordContent + 100;\r\n\tconst threeWord = sectionWordContent + 200;\r\n\tconst fourWord = sectionWordContent + 300;\r\n\tconst fiveWord = sectionWordContent + 400;\r\n\tconst sixWord = sectionWordContent + 500;\r\n\tconst sevenWord = sectionWordContent + 600;\r\n\r\n\twordListeneer(\r\n\t\tsectionWordStart,\r\n\t\tsectionWordContent,\r\n\t\tsectionWordEnd,\r\n\t\twords,\r\n\t\toneWord,\r\n\t\ttwoWord,\r\n\t\tthreeWord,\r\n\t\tfourWord,\r\n\t\tfiveWord,\r\n\t\tsixWord,\r\n\t\tsevenWord\r\n\t);\r\n});\r\n\r\nfunction wordListeneer(\r\n\tsectionWordStart,\r\n\tsectionWordContent,\r\n\tsectionWordEnd,\r\n\twords,\r\n\toneWord,\r\n\ttwoWord,\r\n\tthreeWord,\r\n\tfourWord,\r\n\tfiveWord,\r\n\tsixWord,\r\n\tsevenWord\r\n) {\r\n\tconsole.log('func');\r\n\twindow.addEventListener('scroll', () => {\r\n\t\tif (oneWord <= window.pageYOffset && twoWord > window.pageYOffset) {\r\n\t\t\twords[0].classList.add('active');\r\n\t\t} else words[0].classList.remove('active');\r\n\r\n\t\tif (twoWord <= window.pageYOffset && threeWord > window.pageYOffset) {\r\n\t\t\twords[1].classList.add('active');\r\n\t\t} else words[1].classList.remove('active');\r\n\r\n\t\tif (threeWord <= window.pageYOffset && fourWord > window.pageYOffset) {\r\n\t\t\twords[2].classList.add('active');\r\n\t\t} else words[2].classList.remove('active');\r\n\r\n\t\tif (fourWord <= window.pageYOffset && fiveWord > window.pageYOffset) {\r\n\t\t\twords[3].classList.add('active');\r\n\t\t} else words[3].classList.remove('active');\r\n\r\n\t\tif (fiveWord <= window.pageYOffset && sixWord > window.pageYOffset) {\r\n\t\t\twords[4].classList.add('active');\r\n\t\t} else words[4].classList.remove('active');\r\n\r\n\t\tif (sixWord <= window.pageYOffset && sevenWord > window.pageYOffset) {\r\n\t\t\twords[5].classList.add('active');\r\n\t\t} else words[5].classList.remove('active');\r\n\r\n\t\tif (\r\n\t\t\tsevenWord <= window.pageYOffset &&\r\n\t\t\tsevenWord + 100 > window.pageYOffset\r\n\t\t) {\r\n\t\t\twords[6].classList.add('active');\r\n\t\t} else words[6].classList.remove('active');\r\n\r\n\t\t// console.log(sevenWord);\r\n\t\t// console.log(window.pageYOffset);\r\n\t\t// console.log(sectionWordEnd);\r\n\t});\r\n}\r\n\r\nwordListeneer(\r\n\tsectionWordStart,\r\n\tsectionWordContent,\r\n\tsectionWordEnd,\r\n\twords,\r\n\toneWord,\r\n\ttwoWord,\r\n\tthreeWord,\r\n\tfourWord,\r\n\tfiveWord,\r\n\tsixWord,\r\n\tsevenWord\r\n);\r\n\r\nconst constellation = (element) => {\r\n\twindow.addEventListener('scroll', (e) => {\r\n\t\telement.style.setProperty('--rotation', window.scrollY);\r\n\t});\r\n};\r\n\r\ndocument.querySelectorAll('.constellation').forEach(constellation);\r\n\r\nconst navbar = document.querySelector('.header');\r\n\r\nwindow.onscroll = function () {\r\n\tconst top = window.scrollY;\r\n\tif (top == 0) {\r\n\t\tnavbar.classList.remove('header-background');\r\n\t} else {\r\n\t\tnavbar.classList.add('header-background');\r\n\t}\r\n};\r\n\r\n// End of Word\r\n\r\n// let clientTop = document.documentElement.clientTop\r\n\r\n// document.querySelector('.step').getBoundingClientRect().top + window.pageYOffset - clientTop\r\n\r\n// const sectionStepStart = getTopElement(document.querySelector('.step')) - 500\r\n// const sectionStepContent = sectionStepStart\r\n// const sectionStepEnd = sectionStepStart + sectionStepContent\r\n// let steps = document.querySelectorAll('.step__span')\r\n\r\n// const oneStep = sectionStepContent\r\n// const twoStep = sectionStepContent + 100\r\n// const threeStep = sectionStepContent + 200\r\n// const fourStep = sectionStepContent + 300\r\n// const fiveStep = sectionStepContent + 400\r\n// const sixStep = sectionStepContent + 500\r\n// const sevenStep = sectionStepContent + 600\r\n\r\n// let cards = document.querySelectorAll('.step__content')\r\n\r\n// const oneCard = sectionStepContent\r\n// const twoCard = sectionStepContent + 100\r\n// const threeCard = sectionStepContent + 200\r\n// const fourCard = sectionStepContent + 300\r\n// const fiveCard = sectionStepContent + 400\r\n// const sixCard = sectionStepContent + 500\r\n// const sevenCard = sectionStepContent + 600\r\n\r\n// window.addEventListener('scroll', () => {\r\n//   console.log(sectionStepStart, window.pageYOffset)\r\n\r\n//   if (oneStep <= window.pageYOffset && twoStep > window.pageYOffset) {\r\n//     steps[0].classList.add('active')\r\n//   } else steps[0].classList.remove('active')\r\n\r\n//   if (twoStep <= window.pageYOffset && threeStep > window.pageYOffset) {\r\n//     steps[1].classList.add('active')\r\n//   } else steps[1].classList.remove('active')\r\n\r\n//   if (threeStep <= window.pageYOffset && fourStep > window.pageYOffset) {\r\n//     steps[2].classList.add('active')\r\n//   } else steps[2].classList.remove('active')\r\n\r\n//   if (fourStep <= window.pageYOffset && fiveStep > window.pageYOffset) {\r\n//     steps[3].classList.add('active')\r\n//   } else steps[3].classList.remove('active')\r\n\r\n//   if (fiveStep <= window.pageYOffset && sixStep > window.pageYOffset) {\r\n//     steps[4].classList.add('active')\r\n//   } else steps[4].classList.remove('active')\r\n\r\n//   if (sixStep <= window.pageYOffset && sevenStep > window.pageYOffset) {\r\n//     steps[5].classList.add('active')\r\n//   } else steps[5].classList.remove('active')\r\n\r\n//   if (sevenStep <= window.pageYOffset && sectionStepEnd > window.pageYOffset) {\r\n//     steps[6].classList.add('active')\r\n//   } else steps[6].classList.remove('active')\r\n// })\r\n\r\n// window.addEventListener('scroll', () => {\r\n//   console.log(sectionStepStart, window.pageYOffset)\r\n\r\n//   if (oneCard <= window.pageYOffset && twoCard > window.pageYOffset) {\r\n//     cards[0].classList.add('active')\r\n//   } else cards[0].classList.remove('active')\r\n\r\n//   if (twoCard <= window.pageYOffset && threeCard > window.pageYOffset) {\r\n//     cards[1].classList.add('active')\r\n//   } else cards[1].classList.remove('active')\r\n\r\n//   if (threeCard <= window.pageYOffset && fourCard > window.pageYOffset) {\r\n//     cards[2].classList.add('active')\r\n//   } else cards[2].classList.remove('active')\r\n\r\n//   if (fourCard <= window.pageYOffset && fiveCard > window.pageYOffset) {\r\n//     cards[3].classList.add('active')\r\n//   } else cards[3].classList.remove('active')\r\n\r\n//   if (fiveCard <= window.pageYOffset && sixCard > window.pageYOffset) {\r\n//     cards[4].classList.add('active')\r\n//   } else cards[4].classList.remove('active')\r\n\r\n//   if (sixCard <= window.pageYOffset && sevenCard > window.pageYOffset) {\r\n//     cards[5].classList.add('active')\r\n//   } else cards[5].classList.remove('active')\r\n\r\n//   if (sevenCard <= window.pageYOffset && sectionStepEnd > window.pageYOffset) {\r\n//     cards[6].classList.add('active')\r\n//   } else cards[6].classList.remove('active')\r\n// })\r\n\r\n// End Of Step\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });