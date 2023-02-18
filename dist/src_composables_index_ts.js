"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_composables_index_ts"],{

/***/ "./src/composables/index.ts":
/*!**********************************!*\
  !*** ./src/composables/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePopularIndex": () => (/* binding */ usePopularIndex),
/* harmony export */   "useSearchIndex": () => (/* binding */ useSearchIndex),
/* harmony export */   "useUserIndex": () => (/* binding */ useUserIndex)
/* harmony export */ });
/* harmony import */ var src_store_popular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/popular */ "./src/store/popular.ts");
/* harmony import */ var src_store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/user */ "./src/store/user.ts");
/* harmony import */ var _store_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/search */ "./src/store/search.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");




var usePopularIndex = function usePopularIndex() {
  var popularStore = (0,src_store_popular__WEBPACK_IMPORTED_MODULE_0__.usePopularCoinStore)();
  var popularCoinLists = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return popularStore.getCoinList;
  });
  var fetchFlag = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return popularStore.getFetchFlag;
  });
  var bitcoinPrice = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return popularStore.getBitCoinPrice;
  });
  return {
    popularStore: popularStore,
    popularCoinLists: popularCoinLists,
    fetchFlag: fetchFlag,
    bitcoinPrice: bitcoinPrice
  };
};
var useUserIndex = function useUserIndex() {
  var userStore = (0,src_store_user__WEBPACK_IMPORTED_MODULE_1__.useUserStore)();
  var loginStatus = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return userStore.getLoginStatus;
  });
  var signUpFetchFlag = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return userStore.signUpFetchFlag;
  });
  var signInErrorFlag = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return userStore.signInErrorFlag;
  });
  return {
    loginStatus: loginStatus,
    userStore: userStore,
    signUpFetchFlag: signUpFetchFlag,
    signInErrorFlag: signInErrorFlag
  };
};
var useSearchIndex = function useSearchIndex() {
  var searchStore = (0,_store_search__WEBPACK_IMPORTED_MODULE_2__.useSearchStore)();
  var searchResult = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return searchStore.searchResult;
  });
  var searchFlag = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return searchStore.getSearchFlag;
  });
  var searchText = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return searchStore.searchText;
  });
  var trendingList = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return searchStore.getTrendingList;
  });
  var trendingFlag = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
    return searchStore.getTrendingFlag;
  });
  return {
    searchStore: searchStore,
    searchResult: searchResult,
    searchFlag: searchFlag,
    searchText: searchText,
    trendingList: trendingList,
    trendingFlag: trendingFlag
  };
};

/***/ }),

/***/ "./src/store/popular.ts":
/*!******************************!*\
  !*** ./src/store/popular.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePopularCoinStore": () => (/* binding */ usePopularCoinStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var ofetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ofetch */ "./node_modules/ofetch/dist/index.mjs");
/* harmony import */ var src_utils_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/Helper */ "./src/utils/Helper.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var usePopularCoinStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)('popular', {
  state: function state() {
    return {
      coinList: [],
      fetchFlag: false
    };
  },
  getters: {
    getCoinList: function getCoinList(state) {
      return state.coinList;
    },
    getFetchFlag: function getFetchFlag(state) {
      return state.fetchFlag;
    },
    getFilteredCoinList: function getFilteredCoinList() {
      return function (allCoinList) {
        var result = [];
        src_utils_Helper__WEBPACK_IMPORTED_MODULE_0__.favCoins.forEach(function (item) {
          allCoinList.forEach(function (coin) {
            if (item === coin.id) {
              result.push(coin);
            }
          });
        });
        return result;
      };
    },
    getBitCoinPrice: function getBitCoinPrice(state) {
      if (state.fetchFlag) {
        return state.coinList.filter(function (item) {
          return item.id === 'bitcoin';
        })[0].current_price;
      }
    }
  },
  actions: {
    setCoinList: function setCoinList() {
      return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.fetchFlag = false;
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, 4, 5]);
              return [4, (0,ofetch__WEBPACK_IMPORTED_MODULE_2__.ofetch)("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h")];
            case 2:
              data = _a.sent();
              this.coinList = this.getFilteredCoinList(data);
              return [3, 5];
            case 3:
              err_1 = _a.sent();
              console.warn(err_1, 'in popular store');
              return [3, 5];
            case 4:
              this.fetchFlag = true;
              return [7];
            case 5:
              return [2];
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./src/store/search.ts":
/*!*****************************!*\
  !*** ./src/store/search.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSearchStore": () => (/* binding */ useSearchStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var ofetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ofetch */ "./node_modules/ofetch/dist/index.mjs");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};


var useSearchStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('search', {
  state: function state() {
    return {
      searchText: '',
      searchResult: [],
      searchFlag: false,
      trendingList: [],
      trendingFlag: false
    };
  },
  getters: {
    getSearchResult: function getSearchResult(state) {
      return state.searchResult;
    },
    getSearchFlag: function getSearchFlag(state) {
      return state.searchFlag;
    },
    getTrendingList: function getTrendingList(state) {
      return state.trendingList;
    },
    getTrendingFlag: function getTrendingFlag(state) {
      return state.trendingFlag;
    }
  },
  actions: {
    triggerSearch: function triggerSearch(value) {
      return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.searchText = value;
              this.searchFlag = false;
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, 4, 5]);
              return [4, (0,ofetch__WEBPACK_IMPORTED_MODULE_1__.ofetch)("https://api.coingecko.com/api/v3/search", {
                query: {
                  query: value
                }
              })];
            case 2:
              data = _a.sent();
              this.searchResult = data.coins;
              return [3, 5];
            case 3:
              err_1 = _a.sent();
              console.warn(err_1, 'in search store');
              return [3, 5];
            case 4:
              this.searchFlag = true;
              return [7];
            case 5:
              return [2];
          }
        });
      });
    },
    triggerTrendingList: function triggerTrendingList() {
      return __awaiter(this, void 0, void 0, function () {
        var data, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.trendingFlag = false;
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, 4, 5]);
              return [4, (0,ofetch__WEBPACK_IMPORTED_MODULE_1__.ofetch)("https://api.coingecko.com/api/v3/search/trending")];
            case 2:
              data = _a.sent();
              this.trendingList = data.coins;
              return [3, 5];
            case 3:
              e_1 = _a.sent();
              console.log(e_1, 'in search store');
              return [3, 5];
            case 4:
              this.trendingFlag = true;
              return [7];
            case 5:
              return [2];
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./src/store/user.ts":
/*!***************************!*\
  !*** ./src/store/user.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUserStore": () => (/* binding */ useUserStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var ofetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ofetch */ "./node_modules/ofetch/dist/index.mjs");
/* harmony import */ var _utils_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Helper */ "./src/utils/Helper.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var useUserStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)('user', {
  state: function state() {
    return {
      loginStatus: false,
      signUpFetchFlag: false,
      signInErrorFlag: false,
      email: undefined
    };
  },
  getters: {
    getLoginStatus: function getLoginStatus(state) {
      return state.loginStatus;
    }
  },
  actions: {
    triggerSignUp: function triggerSignUp(user_info) {
      return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.signUpFetchFlag = true;
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, 4, 5]);
              return [4, (0,ofetch__WEBPACK_IMPORTED_MODULE_2__.ofetch)("https://extension-cdfdf-default-rtdb.firebaseio.com/users.json", {
                method: 'POST',
                body: JSON.stringify({
                  email: user_info.email,
                  password: user_info.password
                })
              })];
            case 2:
              data = _a.sent();
              this.email = user_info.email;
              this.loginStatus = true;
              (0,_utils_Helper__WEBPACK_IMPORTED_MODULE_0__.setCookie)(10, data.name);
              return [3, 5];
            case 3:
              err_1 = _a.sent();
              this.loginStatus = false;
              console.log(err_1);
              return [3, 5];
            case 4:
              this.signUpFetchFlag = false;
              return [7];
            case 5:
              return [2];
          }
        });
      });
    },
    triggerSignIn: function triggerSignIn(user_info) {
      return __awaiter(this, void 0, void 0, function () {
        var data, targetUser, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.signInErrorFlag = false;
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3,, 4]);
              return [4, (0,ofetch__WEBPACK_IMPORTED_MODULE_2__.ofetch)("https://extension-cdfdf-default-rtdb.firebaseio.com/users.json")];
            case 2:
              data = _a.sent();
              this.signInErrorFlag = !(0,_utils_Helper__WEBPACK_IMPORTED_MODULE_0__.loginValidation)(Object.entries(data), user_info);
              if (!this.signInErrorFlag) {
                targetUser = (0,_utils_Helper__WEBPACK_IMPORTED_MODULE_0__.extractUser)(Object.entries(data), user_info);
                this.email = user_info.email;
                this.loginStatus = true;
                (0,_utils_Helper__WEBPACK_IMPORTED_MODULE_0__.setCookie)(10, targetUser[0]);
              }
              return [3, 4];
            case 3:
              e_1 = _a.sent();
              this.signInErrorFlag = true;
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./src/utils/Helper.ts":
/*!*****************************!*\
  !*** ./src/utils/Helper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkEmail": () => (/* binding */ checkEmail),
/* harmony export */   "emailRegex": () => (/* binding */ emailRegex),
/* harmony export */   "emailValidation": () => (/* binding */ emailValidation),
/* harmony export */   "extractToken": () => (/* binding */ extractToken),
/* harmony export */   "extractUser": () => (/* binding */ extractUser),
/* harmony export */   "favCoins": () => (/* binding */ favCoins),
/* harmony export */   "loginValidation": () => (/* binding */ loginValidation),
/* harmony export */   "passwordRegex": () => (/* binding */ passwordRegex),
/* harmony export */   "setCookie": () => (/* binding */ setCookie)
/* harmony export */ });
/* harmony import */ var ofetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ofetch */ "./node_modules/ofetch/dist/index.mjs");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var favCoins = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'ripple', 'cardano', 'solana', 'dogecoin', 'polkadot', 'shiba-inu', 'tron', 'avalanche-2', 'litecoin', 'bittorrent', 'neo', 'fantom'];
var emailRegex = /^([^\W])([A-Za-z0-9\.\_]+)\@([a-zA-Z]{4,6})\.([a-zA-Z]{2,3})$/;
var passwordRegex = /^([0-9A-Za-z\#\$\@\*\!]{8,16})$/;
var emailValidation = function emailValidation(data, email) {
  return data.some(function (user) {
    return user[1].email === email.trim();
  });
};
var checkEmail = function checkEmail(email) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);
          return [4, (0,ofetch__WEBPACK_IMPORTED_MODULE_0__.ofetch)("https://extension-cdfdf-default-rtdb.firebaseio.com/users.json")];
        case 1:
          data = _a.sent();
          return [2, !emailValidation(Object.entries(data), email)];
        case 2:
          err_1 = _a.sent();
          return [2, true];
        case 3:
          return [2];
      }
    });
  });
};
var loginValidation = function loginValidation(data, user_info) {
  return data.some(function (user) {
    return user[1].email === user_info.email.trim() && user[1].password === user_info.password.trim();
  });
};
var extractUser = function extractUser(data, user_info) {
  return data.filter(function (user) {
    return user[1].email === user_info.email && user[1].password === user_info.password;
  })[0];
};
var setCookie = function setCookie(day, id) {
  var date = new Date();
  date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
  document.cookie = "token=".concat(id, ";path=/;expires=").concat(date);
};
var extractToken = function extractToken() {
  return document.cookie.slice(document.cookie.indexOf('=') + 1);
};

/***/ })

}]);
//# sourceMappingURL=src_composables_index_ts.js.map