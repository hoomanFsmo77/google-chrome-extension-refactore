"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_components_Home_PriceCard_vue-src_components_PLoader_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Home/PriceCard.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Home/PriceCard.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_VModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/VModal.vue */ "./src/components/VModal.vue");
/* harmony import */ var _composables_useAddFav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/useAddFav */ "./src/composables/useAddFav.ts");
/* harmony import */ var _composables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../composables */ "./src/composables/index.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'PriceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    coinName: {
      type: String,
      required: true
    },
    abbName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    hasRing: {
      type: String,
      required: true
    },
    coinId: {
      type: String,
      required: true
    },
    outTrending: {
      type: Boolean,
      required: false
    },
    price_change_percentage_24h: {
      type: Number,
      required: true
    }
  },
  setup: function setup(__props, _a) {
    var expose = _a.expose;
    expose();
    var _b = __props,
      coinName = _b.coinName,
      abbName = _b.abbName,
      icon = _b.icon,
      price = _b.price,
      price_change_percentage_24h = _b.price_change_percentage_24h,
      coinId = _b.coinId,
      hasRing = _b.hasRing;
    var _c = (0,_composables_useAddFav__WEBPACK_IMPORTED_MODULE_2__.useAddFav)(),
      userFavHandler = _c.userFavHandler,
      modalFlag = _c.modalFlag,
      closeModal = _c.closeModal;
    var userStore = (0,_composables__WEBPACK_IMPORTED_MODULE_3__.useUserIndex)().userStore;
    var __returned__ = {
      userFavHandler: userFavHandler,
      modalFlag: modalFlag,
      closeModal: closeModal,
      userStore: userStore,
      VModal: _components_VModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/PLoader.vue?vue&type=script&setup=true&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/PLoader.vue?vue&type=script&setup=true&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var epic_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! epic-spinners */ "./node_modules/epic-spinners/dist/es/components/HollowDotsSpinner.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'PLoader',
  setup: function setup(__props, _a) {
    var expose = _a.expose;
    expose();
    var __returned__ = {
      get HollowDotsSpinner() {
        return epic_spinners__WEBPACK_IMPORTED_MODULE_1__.HollowDotsSpinner;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/VModal.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/VModal.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'VModal',
  props: {
    isShown: {
      type: Boolean,
      required: true
    }
  },
  emits: ["close"],
  setup: function setup(__props, _a) {
    var expose = _a.expose,
      emits = _a.emit;
    expose();
    var props = __props;
    var closeModal = function closeModal() {
      emits('close');
    };
    var __returned__ = {
      props: props,
      emits: emits,
      closeModal: closeModal
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Home/PriceCard.vue?vue&type=template&id=38eb7459&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Home/PriceCard.vue?vue&type=template&id=38eb7459&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  "class": "price-card"
};
var _hoisted_2 = {
  "class": "price-details"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "font-700 text-1 mb-0.2"
};
var _hoisted_5 = {
  "class": "text-green-500 text-0.6"
};
var _hoisted_6 = {
  "class": "text-gray-600 text-0.8"
};
var _hoisted_7 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mx-0.3"
}, "|", -1);
var _hoisted_8 = {
  "class": "icon-wrapper"
};
var _hoisted_9 = {
  key: 1
};
var _hoisted_10 = {
  "class": "icon-wrapper"
};
var _hoisted_11 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "h6 text-center mb-0.5"
}, "Please sign in/sign up to continue", -1);
var _hoisted_12 = {
  "class": "mb-0.5 flex justify-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.icon,
    width: "30",
    alt: ""
  }, null, 8, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.coinName) + " ", 1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("sub", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.abbName.toUpperCase()), 1)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.price) + "$", 1), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("".concat($props.price_change_percentage_24h).includes('-') ? 'text-red-600' : 'text-green-600')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    "class": "text-0.6",
    icon: "".concat($props.price_change_percentage_24h).includes('-') ? 'fa-arrow-down-long' : 'fa-arrow-up-long'
  }, null, 8, ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.price_change_percentage_24h.toFixed(3)) + "% ", 1)], 2)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$props.hasRing === 'no' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.userFavHandler($props.coinId);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-1.1", $setup.userStore.isCoinExist($props.coinId) ? 'text-green-600' : 'text-gray-600']),
    icon: "fa-solid fa-heart"
  }, null, 8, ["class"])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    "class": "text-1.1 text-gray-600",
    icon: "fa-solid fa-bell"
  })])]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["VModal"], {
    onClose: $setup.closeModal,
    "is-shown": $setup.modalFlag
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        "class": "btn btn-primary",
        to: {
          name: 'index-user'
        },
        onClick: $setup.closeModal
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Continue ")];
        }),
        _: 1
      }, 8, ["onClick"])])];
    }),
    _: 1
  }, 8, ["onClose", "is-shown"])], 64);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/PLoader.vue?vue&type=template&id=426e3123&ts=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/PLoader.vue?vue&type=template&id=426e3123&ts=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  "class": "absolute w-full h-full flex justify-center items-center left-0 top-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HollowDotsSpinner"], {
    "animation-duration": 1000,
    "dot-size": 25,
    "dots-num": 3,
    color: "#29abe1"
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/VModal.vue?vue&type=template&id=7e9fc687&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/VModal.vue?vue&type=template&id=7e9fc687&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal"
};
var _hoisted_2 = {
  "class": "modal-header"
};
var _hoisted_3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Message from MultiCoin", -1);
var _hoisted_4 = {
  "class": "modal-body"
};
var _hoisted_5 = {
  "class": "overlay"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");
  var _directive_fade = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("fade");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    "class": "h5 cursor-pointer",
    onClick: $setup.closeModal,
    icon: "fa-solid fa-x"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])), [[_directive_fade, $setup.props.isShown, "20"]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, null, 512), [[_directive_fade, $setup.props.isShown, "10"]])]);
}

/***/ }),

/***/ "./src/composables/useAddFav.ts":
/*!**************************************!*\
  !*** ./src/composables/useAddFav.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAddFav": () => (/* binding */ useAddFav)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/composables/index.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var useAddFav = function useAddFav() {
  var userStore = (0,_index__WEBPACK_IMPORTED_MODULE_0__.useUserIndex)().userStore;
  var modalFlag = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  var userFavHandler = function userFavHandler(id) {
    if (userStore.loginStatus) {
      modalFlag.value = false;
      userStore.favHandler(id);
    } else {
      modalFlag.value = true;
    }
  };
  var closeModal = function closeModal() {
    modalFlag.value = false;
  };
  return {
    userFavHandler: userFavHandler,
    modalFlag: modalFlag,
    closeModal: closeModal
  };
};

/***/ }),

/***/ "./node_modules/epic-spinners/dist/style/HollowDotsSpinner.css":
/*!*********************************************************************!*\
  !*** ./node_modules/epic-spinners/dist/style/HollowDotsSpinner.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1676964188377
      var cssReload = __webpack_require__(/*! ../../../mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/components/Home/PriceCard.vue":
/*!*******************************************!*\
  !*** ./src/components/Home/PriceCard.vue ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PriceCard_vue_vue_type_template_id_38eb7459_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceCard.vue?vue&type=template&id=38eb7459&ts=true */ "./src/components/Home/PriceCard.vue?vue&type=template&id=38eb7459&ts=true");
/* harmony import */ var _PriceCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceCard.vue?vue&type=script&setup=true&lang=ts */ "./src/components/Home/PriceCard.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_WEB_Projects_SPA_projects_2_google_chrome_extenstion_refactore_with_ts_and_pinia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_SPA_projects_2_google_chrome_extenstion_refactore_with_ts_and_pinia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PriceCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PriceCard_vue_vue_type_template_id_38eb7459_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/Home/PriceCard.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "38eb7459"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('38eb7459', __exports__)) {
    api.reload('38eb7459', __exports__)
  }
  
  module.hot.accept(/*! ./PriceCard.vue?vue&type=template&id=38eb7459&ts=true */ "./src/components/Home/PriceCard.vue?vue&type=template&id=38eb7459&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _PriceCard_vue_vue_type_template_id_38eb7459_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceCard.vue?vue&type=template&id=38eb7459&ts=true */ "./src/components/Home/PriceCard.vue?vue&type=template&id=38eb7459&ts=true");
(() => {
    api.rerender('38eb7459', _PriceCard_vue_vue_type_template_id_38eb7459_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/PLoader.vue":
/*!************************************!*\
  !*** ./src/components/PLoader.vue ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PLoader_vue_vue_type_template_id_426e3123_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PLoader.vue?vue&type=template&id=426e3123&ts=true */ "./src/components/PLoader.vue?vue&type=template&id=426e3123&ts=true");
/* harmony import */ var _PLoader_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PLoader.vue?vue&type=script&setup=true&lang=ts */ "./src/components/PLoader.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_WEB_Projects_SPA_projects_2_google_chrome_extenstion_refactore_with_ts_and_pinia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_SPA_projects_2_google_chrome_extenstion_refactore_with_ts_and_pinia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PLoader_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PLoader_vue_vue_type_template_id_426e3123_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/PLoader.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "426e3123"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('426e3123', __exports__)) {
    api.reload('426e3123', __exports__)
  }
  
  module.hot.accept(/*! ./PLoader.vue?vue&type=template&id=426e3123&ts=true */ "./src/components/PLoader.vue?vue&type=template&id=426e3123&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _PLoader_vue_vue_type_template_id_426e3123_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PLoader.vue?vue&type=template&id=426e3123&ts=true */ "./src/components/PLoader.vue?vue&type=template&id=426e3123&ts=true");
(() => {
    api.rerender('426e3123', _PLoader_vue_vue_type_template_id_426e3123_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/VModal.vue":
/*!***********************************!*\
  !*** ./src/components/VModal.vue ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VModal_vue_vue_type_template_id_7e9fc687_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VModal.vue?vue&type=template&id=7e9fc687&ts=true */ "./src/components/VModal.vue?vue&type=template&id=7e9fc687&ts=true");
/* harmony import */ var _VModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VModal.vue?vue&type=script&setup=true&lang=ts */ "./src/components/VModal.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_WEB_Projects_SPA_projects_2_google_chrome_extenstion_refactore_with_ts_and_pinia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_SPA_projects_2_google_chrome_extenstion_refactore_with_ts_and_pinia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VModal_vue_vue_type_template_id_7e9fc687_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/VModal.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "7e9fc687"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('7e9fc687', __exports__)) {
    api.reload('7e9fc687', __exports__)
  }
  
  module.hot.accept(/*! ./VModal.vue?vue&type=template&id=7e9fc687&ts=true */ "./src/components/VModal.vue?vue&type=template&id=7e9fc687&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _VModal_vue_vue_type_template_id_7e9fc687_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VModal.vue?vue&type=template&id=7e9fc687&ts=true */ "./src/components/VModal.vue?vue&type=template&id=7e9fc687&ts=true");
(() => {
    api.rerender('7e9fc687', _VModal_vue_vue_type_template_id_7e9fc687_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/Home/PriceCard.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************!*\
  !*** ./src/components/Home/PriceCard.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_PriceCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_PriceCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./PriceCard.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Home/PriceCard.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/components/PLoader.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************!*\
  !*** ./src/components/PLoader.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_PLoader_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_PLoader_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./PLoader.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/PLoader.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/components/VModal.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************!*\
  !*** ./src/components/VModal.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_VModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_VModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./VModal.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/VModal.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/components/Home/PriceCard.vue?vue&type=template&id=38eb7459&ts=true":
/*!*********************************************************************************!*\
  !*** ./src/components/Home/PriceCard.vue?vue&type=template&id=38eb7459&ts=true ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_PriceCard_vue_vue_type_template_id_38eb7459_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_PriceCard_vue_vue_type_template_id_38eb7459_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./PriceCard.vue?vue&type=template&id=38eb7459&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Home/PriceCard.vue?vue&type=template&id=38eb7459&ts=true");


/***/ }),

/***/ "./src/components/PLoader.vue?vue&type=template&id=426e3123&ts=true":
/*!**************************************************************************!*\
  !*** ./src/components/PLoader.vue?vue&type=template&id=426e3123&ts=true ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_PLoader_vue_vue_type_template_id_426e3123_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_PLoader_vue_vue_type_template_id_426e3123_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./PLoader.vue?vue&type=template&id=426e3123&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/PLoader.vue?vue&type=template&id=426e3123&ts=true");


/***/ }),

/***/ "./src/components/VModal.vue?vue&type=template&id=7e9fc687&ts=true":
/*!*************************************************************************!*\
  !*** ./src/components/VModal.vue?vue&type=template&id=7e9fc687&ts=true ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_VModal_vue_vue_type_template_id_7e9fc687_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_VModal_vue_vue_type_template_id_7e9fc687_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./VModal.vue?vue&type=template&id=7e9fc687&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/VModal.vue?vue&type=template&id=7e9fc687&ts=true");


/***/ }),

/***/ "./node_modules/epic-spinners/dist/es/components/HollowDotsSpinner.js":
/*!****************************************************************************!*\
  !*** ./node_modules/epic-spinners/dist/es/components/HollowDotsSpinner.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HollowDotsSpinner": () => (/* binding */ HollowDotsSpinner)
/* harmony export */ });
/* harmony import */ var _style_HollowDotsSpinner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/HollowDotsSpinner.css */ "./node_modules/epic-spinners/dist/style/HollowDotsSpinner.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugin-vue_export-helper.js */ "./node_modules/epic-spinners/dist/es/plugin-vue_export-helper.js");




var HollowDotsSpinner_vue_vue_type_style_index_0_lang = '';

const _sfc_main = {
  name: 'HollowDotsSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000,
    },
    dotSize: {
      type: Number,
      default: 15,
    },
    dotsNum: {
      type: Number,
      default: 3,
    },
    color: {
      type: String,
      default: '#fff',
    },
  },

  computed: {
    horizontalMargin() {
      return this.dotSize / 2
    },

    spinnerStyle() {
      return {
        height: `${this.dotSize}px`,
        width: `${(this.dotSize + this.horizontalMargin * 2) * this.dotsNum}px`,
      }
    },

    dotStyle() {
      return {
        animationDuration: `${this.animationDuration}ms`,
        width: `${this.dotSize}px`,
        height: `${this.dotSize}px`,
        margin: `0 ${this.horizontalMargin}px`,
        borderWidth: `${this.dotSize / 5}px`,
        borderColor: this.color,
      }
    },

    dotsStyles() {
      const dotsStyles = [];
      const delayModifier = 0.3;
      const basicDelay = this.animationDuration;

      for (let i = 1; i <= this.dotsNum; i++) {
        dotsStyles.push({
          animationDelay: `${basicDelay * i * delayModifier}ms`,
          ...this.dotStyle,
        });
      }

      return dotsStyles
    },
  },
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", {
    class: "hollow-dots-spinner",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)($options.spinnerStyle)
  }, [
    ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderList)($options.dotsStyles, (ds, index) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", {
        key: index,
        class: "dot",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(ds)
      }, null, 4))
    }), 128))
  ], 4))
}
var HollowDotsSpinner = /*#__PURE__*/(0,_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_2__._export_sfc)(_sfc_main, [['render',_sfc_render]]);




/***/ }),

/***/ "./node_modules/epic-spinners/dist/es/plugin-vue_export-helper.js":
/*!************************************************************************!*\
  !*** ./node_modules/epic-spinners/dist/es/plugin-vue_export-helper.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_export_sfc": () => (/* binding */ _export_sfc)
/* harmony export */ });
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};




/***/ })

}]);
//# sourceMappingURL=src_components_Home_PriceCard_vue-src_components_PLoader_vue.js.map