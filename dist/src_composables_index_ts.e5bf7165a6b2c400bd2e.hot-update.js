"use strict";
self["webpackHotUpdatetemplate"]("src_composables_index_ts",{

/***/ "./src/utils/Helper.ts":
/*!*****************************!*\
  !*** ./src/utils/Helper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailRegex": () => (/* binding */ emailRegex),
/* harmony export */   "emailValidation": () => (/* binding */ emailValidation),
/* harmony export */   "favCoins": () => (/* binding */ favCoins),
/* harmony export */   "passwordRegex": () => (/* binding */ passwordRegex)
/* harmony export */ });
var favCoins = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'ripple', 'cardano', 'solana', 'dogecoin', 'polkadot', 'shiba-inu', 'tron', 'avalanche-2', 'litecoin', 'bittorrent', 'neo', 'fantom'];
var emailRegex = /^([^\W])([A-Za-z0-9\.\_]+)\@([a-zA-Z]{4,6})\.([a-zA-Z]{2,3})$/;
var passwordRegex = /^([0-9A-Za-z\#\$\@\*\!]{8,16})$/;
var emailValidation = function emailValidation(data, email) {
  var isExisted = data.some(function (user) {
    return user[1].email === email.value.trim() && user[1].password === password.value.trim();
  });
  return false;
};

/***/ })

});
//# sourceMappingURL=src_composables_index_ts.e5bf7165a6b2c400bd2e.hot-update.js.map