"use strict";
self["webpackHotUpdatetemplate"]("src_composables_index_ts",{

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


var useUserStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('user', {
  state: function state() {
    return {
      loginStatus: false,
      loginFetchFlag: false
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
              this.loginFetchFlag = true;
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, 4, 5]);
              return [4, (0,ofetch__WEBPACK_IMPORTED_MODULE_1__.ofetch)("https://extension-cdfdf-default-rtdb.firebaseio.com/users.json", {
                method: 'POST',
                body: JSON.stringify({
                  email: user_info.email,
                  password: user_info.password
                })
              })];
            case 2:
              data = _a.sent();
              console.log(data.name);
              return [3, 5];
            case 3:
              err_1 = _a.sent();
              console.log(err_1);
              return [3, 5];
            case 4:
              this.loginFetchFlag = false;
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
/* harmony export */   "favCoins": () => (/* binding */ favCoins),
/* harmony export */   "passwordRegex": () => (/* binding */ passwordRegex)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'ofetch/dist/node'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
          return [4, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'ofetch/dist/node'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("https://extension-cdfdf-default-rtdb.firebaseio.com/users.json")];
        case 1:
          data = _a.sent();
          return [2, emailValidation(Object.entries(data), email)];
        case 2:
          err_1 = _a.sent();
          return [2, false];
        case 3:
          return [2];
      }
    });
  });
};

/***/ })

});
//# sourceMappingURL=src_composables_index_ts.97d50304b2fc82a57b96.hot-update.js.map