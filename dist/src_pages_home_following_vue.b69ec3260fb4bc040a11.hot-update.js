"use strict";
self["webpackHotUpdatetemplate"]("src_pages_home_following_vue",{

/***/ "./src/store/user.ts":
/*!***************************!*\
  !*** ./src/store/user.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUserStore": () => (/* binding */ useUserStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");

var useUserStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('user', {
  state: function state() {
    return {
      loginStatus: false
    };
  },
  getters: {
    getLoginStatus: function getLoginStatus(state) {
      return state.loginStatus;
    }
  }
});

/***/ })

});
//# sourceMappingURL=src_pages_home_following_vue.b69ec3260fb4bc040a11.hot-update.js.map