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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_validationForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validationForm */ \"./modules/validationForm.js\");\n/* harmony import */ var _modules_validationCalc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validationCalc */ \"./modules/validationCalc.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"31 august 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\r\n  \"portfolio-content\",\r\n  \"portfolio-item\",\r\n  \"dot\",\r\n  \"portfolio-item-active\",\r\n  \"dot-active\",\r\n]);\r\n(0,_modules_validationForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"form1\");\r\n(0,_modules_validationCalc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: \"form1\", someElem: [{ type: \"block\", id: \"total\" }] });\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: \"form2\", someElem: [{ type: \"block\", id: \"total\" }] });\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: \"form3\", someElem: [{ type: \"block\", id: \"total\" }] });\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n/* eslint-disable indent */\r\n\r\n\r\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n    if (price * calcTypeValue * calcSquareValue) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 500,\r\n      timing(timeFraction) {\r\n        return 1 - Math.sin(Math.acos(timeFraction));\r\n      },\r\n      draw(progress) {\r\n        total.textContent = parseInt(progress * +totalValue);\r\n      },\r\n    });\r\n  };\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"slicer\": () => (/* binding */ slicer)\n/* harmony export */ });\nconst slicer = (str, num) => {\r\n  return str.trim().lenght > num ? str.substring(0, num) + \"...\" : str.trim();\r\n};\r\n\r\nconst animate = ({ timing, draw, duration }, params) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n  const scrollLink = document.querySelector('a[href=\"#service-block\"]');\r\n\r\n  const scroll = (element, event) => {\r\n    event.preventDefault();\r\n    const targetElementName = element[\"hash\"];\r\n    const targetElement = document.querySelector(`${targetElementName}`);\r\n    targetElement.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n  };\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  scrollLink.addEventListener(\"click\", (event) => scroll(scrollLink, event));\r\n\r\n  menuItems.forEach((element) => {\r\n    element.addEventListener(\"click\", (event) => {\r\n      handleMenu();\r\n      scroll(element, event);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modal = document.querySelector(\".popup\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n  const popupContent = modal.querySelector(\".popup-content\");\r\n\r\n  buttons.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n      if (screen.width >= 768) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 2000,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            popupContent.style.opacity = progress;\r\n          },\r\n        });\r\n      }\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"none\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validationForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationForm */ \"./modules/validationForm.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n/* eslint-disable indent */\r\n\r\n\r\nconst sendForm = ({ formId, someElem = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement(\"div\");\r\n  const img = document.createElement(\"img\");\r\n  const successText = \"Спасибо! Наш менеджер с Вами свяжется!\";\r\n\r\n  const initPreloader = () => {\r\n    img.src = \"./images/icons8-preloader-40.png\";\r\n    img.id = \"preloader\";\r\n    img.style.opacity = \"0\";\r\n    statusBlock.style.color = \"white\";\r\n    form.append(img);\r\n    form.append(statusBlock);\r\n  };\r\n\r\n  const sendData = (data) =>\r\n    fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n\r\n  const submitForm = () => {\r\n    const formElemtns = form.querySelectorAll(\"input\");\r\n\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = \"\";\r\n    statusBlock.style.opacity = \"1\";\r\n    img.style.opacity = \"1\";\r\n\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.animate)({\r\n      duration: 500,\r\n      timing(timeFraction) {\r\n        return 1 - Math.sin(Math.acos(timeFraction));\r\n      },\r\n      draw(progress) {\r\n        img.style.transform = `rotate(${parseInt(progress * 360)}deg)`;\r\n      },\r\n    });\r\n\r\n    formData.forEach((value, key) => {\r\n      formBody[key] = value;\r\n    });\r\n    someElem.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n      if (elem.type === \"block\") {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === \"input\") {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n    const { response, message } = (0,_validationForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formId);\r\n    if (response) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          img.style.opacity = \"0\";\r\n          statusBlock.textContent = successText;\r\n          (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.animate)({\r\n            duration: 5000,\r\n            timing(timeFraction) {\r\n              return timeFraction;\r\n            },\r\n            draw(progress) {\r\n              statusBlock.style.opacity = 1 - progress;\r\n            },\r\n          });\r\n          formElemtns.forEach((input) => {\r\n            input.value = \"\";\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          img.style.opacity = \"0\";\r\n          statusBlock.textContent = message.join(\". \");\r\n          (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.animate)({\r\n            duration: 5000,\r\n            timing(timeFraction) {\r\n              return timeFraction;\r\n            },\r\n            draw(progress) {\r\n              statusBlock.style.opacity = 1 - progress;\r\n            },\r\n          });\r\n        });\r\n    } else {\r\n      img.style.opacity = \"0\";\r\n      statusBlock.textContent = message.join(\". \");\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.animate)({\r\n        duration: 5000,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n          statusBlock.style.opacity = 1 - progress;\r\n        },\r\n      });\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"Верните форму на место, пожалуйста\");\r\n    }\r\n    form.addEventListener(\"submit\", (event) => {\r\n      event.preventDefault();\r\n      initPreloader();\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (classes) => {\r\n  try {\r\n    let result = false;\r\n    classes.forEach((prop) => {\r\n      for (let index = 0; index < document.styleSheets.length; index++) {\r\n        const element = document.styleSheets[index];\r\n        for (let index = 0; index < element[\"rules\"].length; index++) {\r\n          const elementInner = element[\"rules\"][index];\r\n          if (\r\n            elementInner.selectorText &&\r\n            elementInner.selectorText.includes(`.${prop}`)\r\n          ) {\r\n            result = true;\r\n            return;\r\n          }\r\n        }\r\n      }\r\n      if (result === false) throw new SyntaxError(\"Error\");\r\n    });\r\n  } catch (e) {\r\n    return;\r\n  }\r\n\r\n  const [\r\n    classSlider,\r\n    classSlides,\r\n    classDots,\r\n    classActiveSlides,\r\n    classActiveDots,\r\n  ] = classes;\r\n\r\n  const sliderBlock = document.querySelector(`.${classSlider}`);\r\n  const slides = document.querySelectorAll(`.${classSlides}`);\r\n\r\n  let dots = document.querySelectorAll(`.${classDots}`);\r\n  const timeInterval = 2000;\r\n  const portfolioContent = document.querySelector(`.${classSlider}`);\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const validate = () => {\r\n    if (!document.querySelector(classSlider)) return;\r\n    if (!document.querySelector(classSlides)) return;\r\n    if (!document.querySelector(classDots)) return;\r\n    if (!document.querySelector(classActiveSlides)) return;\r\n    if (!document.querySelector(classActiveDots)) return;\r\n  };\r\n\r\n  const initDots = () => {\r\n    const ul = document.createElement(\"ul\");\r\n    ul.classList.add(\"portfolio-dots\");\r\n    slides.forEach((slide, index) => {\r\n      debugger;\r\n      const li = document.createElement(\"li\");\r\n      li.classList.add(\"dot\");\r\n      if (index === 0) li.classList.add(classActiveDots);\r\n      ul.insertAdjacentElement(\"beforeend\", li);\r\n    });\r\n    portfolioContent.insertAdjacentElement(\"beforeend\", ul);\r\n    dots = document.querySelectorAll(`.${classDots}`);\r\n  };\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, classActiveSlides);\r\n    prevSlide(dots, currentSlide, classActiveDots);\r\n\r\n    currentSlide++;\r\n    if (currentSlide >= slides.length) currentSlide = 0;\r\n    nextSlide(slides, currentSlide, classActiveSlides);\r\n    nextSlide(dots, currentSlide, classActiveDots);\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n    debugger;\r\n    prevSlide(slides, currentSlide, classActiveSlides);\r\n    prevSlide(dots, currentSlide, classActiveDots);\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n          return;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) currentSlide = 0;\r\n    if (currentSlide < 0) currentSlide = slides.length - 1;\r\n\r\n    nextSlide(slides, currentSlide, classActiveSlides);\r\n    nextSlide(dots, currentSlide, classActiveDots);\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  initDots();\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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

/***/ "./modules/validationCalc.js":
/*!***********************************!*\
  !*** ./modules/validationCalc.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const validate = (input) => {\r\n    if (!input.value.match(/\\d/gi)) {\r\n      alert(\"Введите цифры\");\r\n      input.value = \"\";\r\n    }\r\n  };\r\n\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n\r\n  calcBlock.addEventListener(\"change\", (e) => {\r\n    if (e.target.classList.contains(\"calc-item\")) {\r\n      validate(e.target);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validationCalc.js?");

/***/ }),

/***/ "./modules/validationForm.js":
/*!***********************************!*\
  !*** ./modules/validationForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable indent */\r\n\r\nconst validate = (idForm) => {\r\n  const form1 = document.getElementById(idForm);\r\n\r\n  const inputsName = form1.querySelectorAll(\"input[name='user_name']\");\r\n  const inputsEmail = form1.querySelectorAll(\"input[name='user_email']\");\r\n  const inputsTel = form1.querySelectorAll(\"input[name='user_phone']\");\r\n  const inputsMessage = form1.querySelectorAll(\"input[name='user_message']\");\r\n  let response = true;\r\n  let message = [];\r\n\r\n  inputsName.forEach((input) => {\r\n    if (!/[\\W\\-\\s]+/gi.test(input.value) && input.value !== \"\") {\r\n      message.push(\"Ошибка: Неккоректное имя\");\r\n      input.value = \"\";\r\n      response = false;\r\n    }\r\n  });\r\n\r\n  inputsEmail.forEach((input) => {\r\n    if (\r\n      !input.value.match(\r\n        /[a-z\\-\\_\\.\\!\\~\\*]+[@][a-z\\-\\_\\!\\~\\*]+[\\.][a-z\\-\\_\\!\\~\\*]+/gi\r\n      ) &&\r\n      input.value !== \"\"\r\n    ) {\r\n      message.push(\"Ошибка: Неккоретный почтовый ящик\");\r\n      input.target.value = \"\";\r\n      response = false;\r\n    }\r\n  });\r\n\r\n  inputsTel.forEach((input) => {\r\n    if (!input.value.match(/[\\d-\\(\\)]+/gi) && input.value !== \"\") {\r\n      message.push(\"Ошибка: Неккоретный номер телефона\");\r\n      input.value = \"\";\r\n      response = false;\r\n    }\r\n  });\r\n\r\n  inputsMessage.forEach((input) => {\r\n    if (!input.value.match(/[а-я\\s0-9\\.\\,\\!\\?]+/gi) && input.value !== \"\") {\r\n      message.push(\"Ошибка: Неккоретное сообщение\");\r\n      input.value = \"\";\r\n      response = false;\r\n    }\r\n  });\r\n  return { response, message };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\r\n\n\n//# sourceURL=webpack:///./modules/validationForm.js?");

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