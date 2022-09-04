/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validationForm */ \"./modules/validationForm.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"31 august 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validationForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const scrollLink = document.querySelector('a[href=\"#service-block\"]');\r\n\r\n  const scroll = (element) => {\r\n    const targetElementName = element[\"hash\"];\r\n    const targetElement = document.querySelector(`${targetElementName}`);\r\n    targetElement.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n  };\r\n\r\n  const toggleMenu = (e) => {\r\n    if (e.target.closest(\".menu\")) {\r\n      menu.classList.toggle(\"active-menu\");\r\n    } else if (\r\n      e.target.classList.contains(\"close-btn\") ||\r\n      !e.target.closest(\"menu\")\r\n    ) {\r\n      e.preventDefault();\r\n      menu.classList.remove(\"active-menu\");\r\n    } else if (e.target.matches(\".active-menu ul li a\")) {\r\n      e.preventDefault();\r\n      menu.classList.toggle(\"active-menu\");\r\n      scroll(e.target);\r\n    }\r\n  };\r\n\r\n  scrollLink.addEventListener(\"click\", () => scroll(scrollLink));\r\n\r\n  document.body.addEventListener(\"click\", (e) => {\r\n    toggleMenu(e);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modal = document.querySelector(\".popup\");\r\n  const popupContent = modal.querySelector(\".popup-content\");\r\n  let animId;\r\n\r\n  const animModal = (prop) => {\r\n    const step = prop + 10;\r\n    animId = requestAnimationFrame(() => animModal(step));\r\n    popupContent.style.transform = `rotate(${step}deg)`;\r\n    if (step === 360) {\r\n      cancelAnimationFrame(animId);\r\n    }\r\n  };\r\n\r\n  buttons.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n      if (screen.width >= 768) {\r\n        animModal(0);\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.querySelector(\"#timer-hours\");\r\n  const timerMinutes = document.querySelector(\"#timer-minutes\");\r\n  const timerSeconds = document.querySelector(\"#timer-seconds\");\r\n  let idInterval = 0;\r\n\r\n  const getTimerRemaining = () => {\r\n    const dateStop = new Date(deadline).getTime();\r\n    const dateNow = new Date().getTime();\r\n    const timeRemaining = (dateStop - dateNow) / 1000;\r\n    const days = Math.floor(timeRemaining / 3600 / 24);\r\n    const hours = Math.floor((timeRemaining / 3600) % 60) % 24;\r\n    const minutes = Math.floor((timeRemaining / 60) % 60);\r\n    const seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return {\r\n      timeRemaining,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  const addDayBlock = () => {\r\n    let dayContainer = document.querySelector(\"#timer-days\");\r\n    if (!dayContainer) {\r\n      dayContainer = document.createElement(\"span\");\r\n      dayContainer.id = \"timer-days\";\r\n      timerHours.before(dayContainer);\r\n      dayContainer.after((document.createElement(\"span\").textContent = \" : \"));\r\n    }\r\n    return dayContainer;\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const getTime = getTimerRemaining(deadline);\r\n    const timerDays = addDayBlock();\r\n    timerDays.textContent =\r\n      getTime.days.toString().length < 2 ? `0${getTime.days}` : getTime.days;\r\n    timerHours.textContent =\r\n      getTime.hours.toString().length < 2 ? `0${getTime.hours}` : getTime.hours;\r\n    timerMinutes.textContent =\r\n      getTime.minutes.toString().length < 2\r\n        ? `0${getTime.minutes}`\r\n        : getTime.minutes;\r\n    timerSeconds.textContent =\r\n      getTime.seconds.toString().length < 2\r\n        ? `0${getTime.seconds}`\r\n        : getTime.seconds;\r\n\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(idInterval);\r\n      timerDays.textContent = \"00\";\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n    }\r\n  };\r\n  idInterval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validationForm.js":
/*!***********************************!*\
  !*** ./modules/validationForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const form1 = document.getElementById(\"form1\");\r\n\r\n  const validate = (form) => {\r\n    let isError = false;\r\n    const inputsText = form.querySelectorAll(\"input[type=text]\");\r\n    const inputsEmail = form.querySelectorAll(\".form-email\");\r\n    const inputsTel = form.querySelectorAll(\".form-phone\");\r\n\r\n    inputsText.forEach((input) => {\r\n      input.addEventListener(\"change\", (e) => {\r\n        if (/\\d+/gi.test(e.target.value) && e.target.value !== \"\")\r\n          isError && alert(\"Ошибка: Цифры не допустимы\");\r\n        e.target.value = \"\";\r\n      });\r\n    });\r\n\r\n    inputsEmail.forEach((input) => {\r\n      input.addEventListener(\"change\", (e) => {\r\n        if (\r\n          !/[a-z\\-\\_\\.\\!\\~\\*]+[@][a-z\\-\\_\\!\\~\\*]+[\\.][a-z\\-\\_\\!\\~\\*]+/gi.test(\r\n            e.target.value\r\n          )\r\n        ) {\r\n          alert(\"Ошибка: Неккоретный почтовый ящик\");\r\n          e.target.value = \"\";\r\n        }\r\n      });\r\n    });\r\n\r\n    inputsTel.forEach((input) => {\r\n      input.addEventListener(\"change\", (e) => {\r\n        if (/[^\\d-\\(\\)]+/gi.test(e.target.value) && e.target.value !== \"\") {\r\n          alert(\"Ошибка: Неккоретный номер телефона\");\r\n          e.target.value = \"\";\r\n        }\r\n      });\r\n    });\r\n  };\r\n\r\n  form1.addEventListener(\"submit\", (event, form1) => {\r\n    event.preventDefault();\r\n    validate(form1);\r\n  });\r\n  validate(form1);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validationForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;