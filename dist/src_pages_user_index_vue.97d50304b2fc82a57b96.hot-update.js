"use strict";
self["webpackHotUpdatetemplate"]("src_pages_user_index_vue",{

/***/ "./src/composables/useAuth.ts":
/*!************************************!*\
  !*** ./src/composables/useAuth.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAuth": () => (/* binding */ useAuth),
/* harmony export */   "useSignIn": () => (/* binding */ useSignIn),
/* harmony export */   "useSignUp": () => (/* binding */ useSignUp)
/* harmony export */ });
/* harmony import */ var src_utils_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/Helper */ "./src/utils/Helper.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/composables/index.ts");




var useAuth = function useAuth() {
  var isLogin = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  var toggleAuthState = function toggleAuthState() {
    isLogin.value = !isLogin.value;
  };
  return {
    isLogin: isLogin,
    toggleAuthState: toggleAuthState
  };
};
var useSignIn = function useSignIn() {
  return {};
};
var useSignUp = function useSignUp() {
  var userStore = (0,_index__WEBPACK_IMPORTED_MODULE_2__.useUserIndex)().userStore;
  var errorFlag = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  var user_info = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
    email: 'hoomanmousavi77@gmail.com',
    password: '13777731Ho@'
  });
  var signupHandler = function signupHandler() {
    errorFlag.value = false;
    if (src_utils_Helper__WEBPACK_IMPORTED_MODULE_0__.emailRegex.test(user_info.email) && src_utils_Helper__WEBPACK_IMPORTED_MODULE_0__.passwordRegex.test(user_info.password)) {
      console.log((0,src_utils_Helper__WEBPACK_IMPORTED_MODULE_0__.checkEmail)(user_info.email));
      userStore.triggerSignUp(user_info);
      errorFlag.value = false;
    } else {
      errorFlag.value = true;
    }
  };
  return {
    signupHandler: signupHandler,
    user_info: user_info,
    errorFlag: errorFlag
  };
};

/***/ })

});
//# sourceMappingURL=src_pages_user_index_vue.97d50304b2fc82a57b96.hot-update.js.map