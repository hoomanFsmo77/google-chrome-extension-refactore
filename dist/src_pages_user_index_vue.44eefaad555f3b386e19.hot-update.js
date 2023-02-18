"use strict";
self["webpackHotUpdatetemplate"]("src_pages_user_index_vue",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/user/Welcome.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/user/Welcome.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _composables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composables */ "./src/composables/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Welcome',
  setup: function setup(__props, _a) {
    var expose = _a.expose;
    expose();
    var userStore = (0,_composables__WEBPACK_IMPORTED_MODULE_1__.useUserIndex)().userStore;
    var logoutHandler = function logoutHandler() {
      userStore.resetUser();
    };
    var __returned__ = {
      userStore: userStore,
      logoutHandler: logoutHandler
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ })

});
//# sourceMappingURL=src_pages_user_index_vue.44eefaad555f3b386e19.hot-update.js.map