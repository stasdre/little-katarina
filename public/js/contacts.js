(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/contacts"],{

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const burgerIcon = document.querySelector('.burger');
const navContainer = document.querySelector('.header__top');
burgerIcon.addEventListener('click', () => {
  navContainer.classList.toggle('header__top_active');
  burgerIcon.classList.toggle('burger_active');
  document.body.classList.toggle('lock');
});

/***/ }),

/***/ "./src/assets/js/webp-checker.js":
/*!***************************************!*\
  !*** ./src/assets/js/webp-checker.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var supports_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! supports-webp */ "./node_modules/supports-webp/dist/supports-webp.common-js.js");
/* harmony import */ var supports_webp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(supports_webp__WEBPACK_IMPORTED_MODULE_0__);


async function checkSupport() {
  const supported = await supports_webp__WEBPACK_IMPORTED_MODULE_0___default.a;

  if (supported) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
}

checkSupport();

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svgxuse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svgxuse */ "./node_modules/svgxuse/svgxuse.js");
/* harmony import */ var svgxuse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svgxuse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_js_webp_checker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/webp-checker */ "./src/assets/js/webp-checker.js");
/* harmony import */ var _assets_js_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/burger */ "./src/assets/js/burger.js");
/* harmony import */ var _assets_js_burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_burger__WEBPACK_IMPORTED_MODULE_2__);


 // import './assets/css/contact.css'

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/contacts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stasdre/Projects/little-katarina/src/contacts.js */"./src/contacts.js");


/***/ })

},[[2,"/js/manifest","/js/vendors"]]]);