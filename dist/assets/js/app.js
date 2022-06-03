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

eval("const iconMenu = document.querySelector('.header__icon')\r\nconst menuBody = document.querySelector('.header__menu')\r\nif (iconMenu) {\r\n  iconMenu.addEventListener('click', function (e) {\r\n    document.body.classList.toggle('_lock')\r\n    iconMenu.classList.toggle('_active')\r\n    menuBody.classList.toggle('_active')\r\n  })\r\n}\r\n// End of Burger\r\n\r\nconst menuLinks = document.querySelectorAll('.nav__link[data-goto]')\r\nif (menuLinks.length > 0) {\r\n  menuLinks.forEach((el) => {\r\n    el.addEventListener('click', onMenuLinkClick)\r\n  })\r\n\r\n  function onMenuLinkClick(e) {\r\n    const menuLink = e.target\r\n    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {\r\n      const gotoBlock = document.querySelector(menuLink.dataset.goto)\r\n      const gotoBlockValue =\r\n        gotoBlock.getBoundingClientRect().top +\r\n        pageYOffset -\r\n        -document.querySelector('header').offsetHeight\r\n\r\n      if (iconMenu.classList.contains('_active')) {\r\n        document.body.classList.remove('_lock')\r\n        iconMenu.classList.remove('_active')\r\n        menuBody.classList.remove('_active')\r\n      }\r\n\r\n      window.scrollTo({\r\n        top: gotoBlockValue,\r\n        behavior: 'smooth',\r\n      })\r\n      e.preventDefault()\r\n    }\r\n  }\r\n}\r\n// End of Scroll\r\n\r\n// 1100 конец секции\r\n// 200 начало секции\r\n// 900 контент секции\r\n// 128 на каждый\r\n\r\nconst sectionWordStart =\r\n  document.querySelector('.word').clientHeight +\r\n  document.querySelector('.header').offsetHeight +\r\n  document.querySelector('.intro').offsetHeight\r\nconst sectionWordContent = 900\r\nconst sectionWordEnd = sectionWordStart + sectionWordContent\r\nlet words = document.querySelectorAll('.word__span')\r\n\r\nconst oneWord = (sectionWordContent / words.length) * 2\r\nconst twoWord = (sectionWordContent / words.length) * 3\r\nconst threeWord = (sectionWordContent / words.length) * 4\r\nconst fourWord = (sectionWordContent / words.length) * 5\r\nconst fiveWord = (sectionWordContent / words.length) * 6\r\nconst sixWord = (sectionWordContent / words.length) * 7\r\nconst sevenWord = (sectionWordContent / words.length) * 8\r\n\r\nwindow.addEventListener('scroll', () => {\r\n  if (oneWord <= window.pageYOffset && twoWord > window.pageYOffset) {\r\n    words[0].classList.add('active')\r\n  } else words[0].classList.remove('active')\r\n\r\n  if (twoWord <= window.pageYOffset && threeWord > window.pageYOffset) {\r\n    words[1].classList.add('active')\r\n  } else words[1].classList.remove('active')\r\n\r\n  if (threeWord <= window.pageYOffset && fourWord > window.pageYOffset) {\r\n    words[2].classList.add('active')\r\n  } else words[2].classList.remove('active')\r\n\r\n  if (fourWord <= window.pageYOffset && fiveWord > window.pageYOffset) {\r\n    words[3].classList.add('active')\r\n  } else words[3].classList.remove('active')\r\n\r\n  if (fiveWord <= window.pageYOffset && sixWord > window.pageYOffset) {\r\n    words[4].classList.add('active')\r\n  } else words[4].classList.remove('active')\r\n\r\n  if (sixWord <= window.pageYOffset && sevenWord > window.pageYOffset) {\r\n    words[5].classList.add('active')\r\n  } else words[5].classList.remove('active')\r\n\r\n  if (sevenWord <= window.pageYOffset && sectionWordEnd > window.pageYOffset) {\r\n    words[6].classList.add('active')\r\n  } else words[6].classList.remove('active')\r\n})\r\n// End of Word\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });