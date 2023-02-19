"use strict";
self["webpackHotUpdatetemplate"]("src_pages_home_following_vue",{

/***/ "./src/composables/useFollowing.ts":
/*!*****************************************!*\
  !*** ./src/composables/useFollowing.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFollowing": () => (/* binding */ useFollowing)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/composables/index.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var ofetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ofetch */ "./node_modules/ofetch/dist/index.mjs");



var useFollowing = function useFollowing() {
  var favCoinList = (0,_index__WEBPACK_IMPORTED_MODULE_0__.useUserIndex)().favCoinList;
  var coinInfoContainer = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var activePreloader = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
    activePreloader.value = false;
    favCoinList.value.forEach(function (coinId) {
      (0,ofetch__WEBPACK_IMPORTED_MODULE_2__.ofetch)("https://api.coingecko.com/api/v3/coins/".concat(coinId)).then(function (res) {
        coinInfoContainer.value.push(res);
        activePreloader.value = true;
      });
    });
  });
  return {
    coinInfoContainer: coinInfoContainer,
    activePreloader: activePreloader
  };
};

/***/ })

});
//# sourceMappingURL=src_pages_home_following_vue.42abf26c77ba8ef5d0ee.hot-update.js.map