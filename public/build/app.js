(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.


/**
 * Simple (ugly) code to handle the comment vote up/down
 */

var $container = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.js-vote-arrows');
$container.find('a').on('click', function (e) {
  e.preventDefault();
  var $link = jquery__WEBPACK_IMPORTED_MODULE_2___default()(e.currentTarget);
  jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
    url: '/comments/10/vote/' + $link.data('direction'),
    method: 'POST'
  }).then(function (data) {
    $container.find('.js-vote-total').text(data.votes);
  });
});
var $containerDreamer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.js-random-dreamer');
$containerDreamer.find('a').on('click', function (e) {
  e.preventDefault();
  var $link = jquery__WEBPACK_IMPORTED_MODULE_2___default()(e.currentTarget);
  jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
    url: '/rand/dreamer',
    method: 'POST'
  }).then(function (data) {
    $containerDreamer.find('.js-rand-dreamer').text(data.dreamer);
  });
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkY29udGFpbmVyIiwiJCIsImZpbmQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiRsaW5rIiwiY3VycmVudFRhcmdldCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwidGhlbiIsInRleHQiLCJ2b3RlcyIsIiRjb250YWluZXJEcmVhbWVyIiwiZHJlYW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyw2Q0FBQyxDQUFDLGlCQUFELENBQWxCO0FBQ0FELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixHQUFoQixFQUFxQkMsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pDQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxLQUFLLEdBQUdMLDZDQUFDLENBQUNHLENBQUMsQ0FBQ0csYUFBSCxDQUFiO0FBRUFOLCtDQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUUsdUJBQXFCSCxLQUFLLENBQUNJLElBQU4sQ0FBVyxXQUFYLENBRHZCO0FBRUhDLFVBQU0sRUFBRTtBQUZMLEdBQVAsRUFHR0MsSUFISCxDQUdRLFVBQVNGLElBQVQsRUFBZTtBQUNuQlYsY0FBVSxDQUFDRSxJQUFYLENBQWdCLGdCQUFoQixFQUFrQ1csSUFBbEMsQ0FBdUNILElBQUksQ0FBQ0ksS0FBNUM7QUFDSCxHQUxEO0FBTUgsQ0FWRDtBQVlBLElBQUlDLGlCQUFpQixHQUFHZCw2Q0FBQyxDQUFDLG9CQUFELENBQXpCO0FBQ0FjLGlCQUFpQixDQUFDYixJQUFsQixDQUF1QixHQUF2QixFQUE0QkMsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hEQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJQyxLQUFLLEdBQUdMLDZDQUFDLENBQUNHLENBQUMsQ0FBQ0csYUFBSCxDQUFiO0FBRUFOLCtDQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUUsZUFERjtBQUVIRSxVQUFNLEVBQUU7QUFGTCxHQUFQLEVBR0dDLElBSEgsQ0FHUSxVQUFTRixJQUFULEVBQWU7QUFDbkJLLHFCQUFpQixDQUFDYixJQUFsQixDQUF1QixrQkFBdkIsRUFBMkNXLElBQTNDLENBQWdESCxJQUFJLENBQUNNLE9BQXJEO0FBQ0gsR0FMRDtBQU1ILENBVkQsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBTaW1wbGUgKHVnbHkpIGNvZGUgdG8gaGFuZGxlIHRoZSBjb21tZW50IHZvdGUgdXAvZG93blxuICovXG52YXIgJGNvbnRhaW5lciA9ICQoJy5qcy12b3RlLWFycm93cycpO1xuJGNvbnRhaW5lci5maW5kKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgJGxpbmsgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvY29tbWVudHMvMTAvdm90ZS8nKyRsaW5rLmRhdGEoJ2RpcmVjdGlvbicpLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkY29udGFpbmVyLmZpbmQoJy5qcy12b3RlLXRvdGFsJykudGV4dChkYXRhLnZvdGVzKTtcbiAgICB9KTtcbn0pO1xuXG52YXIgJGNvbnRhaW5lckRyZWFtZXIgPSAkKCcuanMtcmFuZG9tLWRyZWFtZXInKTtcbiRjb250YWluZXJEcmVhbWVyLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciAkbGluayA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9yYW5kL2RyZWFtZXInLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkY29udGFpbmVyRHJlYW1lci5maW5kKCcuanMtcmFuZC1kcmVhbWVyJykudGV4dChkYXRhLmRyZWFtZXIpO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9