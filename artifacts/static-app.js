(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(25);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(97)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(96);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(98);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(34);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(99);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(25);

var _helpers = __webpack_require__(100);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/BgTop.fb1d656f.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/top_wave.22c350db.png";

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(26);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(5);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(15);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(19);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(27);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(40);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(11);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(10);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(13);

// EXTERNAL MODULE: external "react-flags-select"
var external_react_flags_select_ = __webpack_require__(41);
var external_react_flags_select_default = /*#__PURE__*/__webpack_require__.n(external_react_flags_select_);

// EXTERNAL MODULE: external "react-flags-select/css/react-flags-select.css"
var react_flags_select_css_ = __webpack_require__(107);

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__(12);
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/i18n/locales/en.json
var en = __webpack_require__(42);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/i18n/locales/ru.json
var ru = __webpack_require__(43);

// EXTERNAL MODULE: external "i18next-browser-languagedetector"
var external_i18next_browser_languagedetector_ = __webpack_require__(44);
var external_i18next_browser_languagedetector_default = /*#__PURE__*/__webpack_require__.n(external_i18next_browser_languagedetector_);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/i18n/constants.js
var SUPPORTED_LOCALES = ['en', 'ru'];
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/i18n/index.js






external_i18next_default.a.use(external_i18next_browser_languagedetector_default.a).use(external_react_i18next_["initReactI18next"]).init({
  fallbackLng: 'ru',
  whitelist: SUPPORTED_LOCALES,
  nonExplicitWhitelist: true,
  debug: true,
  resources: {
    en: {
      translation: en
    },
    ru: {
      translation: ru
    }
  },
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: true
  }
});
var i18n_getLocale = function getLocale() {
  var locale = external_i18next_default.a.language.split('-')[0].split('_')[0];
  return SUPPORTED_LOCALES.includes(locale) ? locale : 'en';
};

if (external_i18next_default.a.language.includes('-')) {
  external_i18next_default.a.changeLanguage(i18n_getLocale());
}

/* harmony default export */ var i18n = (external_i18next_default.a);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(28);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/responsiveUtils.js



var emSize = function emSize(pixelValue) {
  return "".concat(pixelValue / 16, "em");
};

var responsiveUtils_getCurrentBreakpoint = function getCurrentBreakpoint() {
  var _ref = window || {},
      innerWidth = _ref.innerWidth;

  if (innerWidth <= BREAKPOINTS['sm']) {
    return 'xs';
  } else if (innerWidth >= BREAKPOINTS['sm'] && innerWidth < BREAKPOINTS['md']) {
    return 'sm';
  } else if (innerWidth >= BREAKPOINTS['md'] && innerWidth < BREAKPOINTS['lg']) {
    return 'md';
  } else if (innerWidth >= BREAKPOINTS['lg']) {
    return 'lg';
  }
};
var responsiveUtils_getSizeFromBreakpoint = function getSizeFromBreakpoint(breakpointValue) {
  if (BREAKPOINTS[breakpointValue]) {
    return emSize(BREAKPOINTS[breakpointValue]);
  } else if (parseInt(breakpointValue, 10)) {
    return emSize(BREAKPOINTS[breakpointValue]);
  }

  console.error('styled-media-query: No valid breakpoint or size specified for media.');
  return '0';
};
var responsiveUtils_min = function min(breakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(["@media (min-width:", "){", ";}"], responsiveUtils_getSizeFromBreakpoint(breakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var responsiveUtils_max = function max(breakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(["@media (max-width:", "){", ";}"], responsiveUtils_getSizeFromBreakpoint(breakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var responsiveUtils_between = function between(firstBreakpoint, secondBreakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(["@media (min-width:", ") and (max-width:", "){", ";}"], responsiveUtils_getSizeFromBreakpoint(firstBreakpoint, BREAKPOINTS), responsiveUtils_getSizeFromBreakpoint(secondBreakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var media = {
  min: responsiveUtils_min,
  max: responsiveUtils_max,
  between: responsiveUtils_between
};
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/theme.js

var BIG_SHADOW = 'rgba(118, 152, 207, 0.5)';
var SMALLER_SHADOW = 'rgba(0, 0, 0, 0.24)';
var theme = {
  breakpoints: {
    xs: 449,
    sm: 767,
    md: 980,
    lg: 1420
  },
  colors: {
    white: '#fff',
    black: '#414856',
    almostBlack: '#111111',
    gradientBlue: 'linear-gradient(170.24deg, #AB9BD3 0%, #6D9FF0 100%)',
    primary: '#5a8536',
    secondary: '#E84B28',
    grays: {
      darker: '#444444',
      dark: '#555555',
      regular: '#8E8E8E',
      light: '#e4e4e4',
      lighter: '#f2f2f2'
    },
    danger: '#C70018',
    warning: '#ffa836',
    info: '#6654ff',
    success: '#46ff3e'
  },
  borderRadius: {
    smaller: '20px',
    small: '24px',
    circle: '50%'
  },
  general: {
    gridSize: 12,
    gridGap: '12px',
    mobilePadding: '22px',
    borderWidth: '1px',
    headerHeight: '60px',
    menuShift: '52px',
    modalBackdropColor: 'rgba(0, 0, 0, .8)',
    overlayColor: 'rgba(30, 30, 30, .85)',
    containerWidth: {
      xs: '449',
      sm: '767px',
      md: '980px',
      lg: '1420px'
    }
  },
  transitions: {
    fast: '.2s ease',
    medium: '.5s ease',
    slow: '.8s ease'
  },
  zIndex: {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5'
  },
  shadows: {
    level1: "0 2px 8px ".concat(BIG_SHADOW),
    level2: "0 0 8px ".concat(SMALLER_SHADOW)
  },
  opacity: {
    big: '0.5',
    normal: '0.8',
    small: '0.9',
    "null": '1'
  },
  font: {
    size: {
      huge: '44px',
      big: '38px',
      normal: '18px',
      small: '16px',
      smaller: '15px'
    },
    lineHeight: {
      huge: '56px',
      big: '28px',
      normal: 1.3,
      small: '22px',
      smaller: '18px'
    },
    weight: {
      w900: '900',
      w700: '700',
      w500: '500',
      w400: '400',
      w300: '300'
    },
    letterSpacing: {
      base: 'normal',
      accent: '0.2em'
    },
    family: {
      text: 'TT',
      header: 'TT',
      accent: 'TT'
    }
  },
  min: responsiveUtils_min,
  max: responsiveUtils_max,
  between: responsiveUtils_between,
  getCurrentBreakpoint: responsiveUtils_getCurrentBreakpoint
};
/* harmony default export */ var ui_theme = (theme);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/helpers.js


function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    ", ": calc(", "", ");\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    ", ": calc(", "", ");\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    ", ": calc(", "", ");\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    ", ": calc(", "", ");\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BREAKPOINTS = {
  xs: 449,
  sm: 765,
  md: 980,
  lg: 1420
};
var getBorderColor = function getBorderColor(props) {
  if (props.success) return props.theme.colors.success;else if (props.error) return props.theme.colors.grays.light;
  return props.theme.colors.black;
};
var displayPrice = function displayPrice(price) {
  return "".concat(price.currency.symbol).concat((price.fractional / price.currency.subunitToUnit).toFixed(2));
};
var helpers_getStripeInputStyleProps = function getStripeInputStyleProps() {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: theme.colors.black,
        fontWeight: 200,
        lineHeight: 1.7,
        fontFamily: theme.typography.familyText,
        '::placeholder': {
          color: theme.colors.grays.regular,
          fontWeight: 200
        }
      },
      invalid: {
        color: theme.colors.black
      }
    }
  };
};
var helpers_theme = function theme(path, displayError) {
  return function (props) {
    return path.split('.').reduce(function (res, segment) {
      if (!res[segment]) return displayError ? console.error("No prop ".concat(segment, " on current theme")) : null;
      return res[segment];
    }, props.theme);
  };
};

var getColorRule = function getColorRule(color) {
  return "color: ".concat(color, ";");
};

var helpers_getCurrentBreakpoint = function getCurrentBreakpoint() {
  var _ref = window || {},
      innerWidth = _ref.innerWidth;

  if (innerWidth <= BREAKPOINTS['sm']) {
    return 'xs';
  } else if (innerWidth >= BREAKPOINTS['sm'] && innerWidth < BREAKPOINTS['md']) {
    return 'sm';
  } else if (innerWidth >= BREAKPOINTS['md'] && innerWidth < BREAKPOINTS['lg']) {
    return 'md';
  } else if (innerWidth >= BREAKPOINTS['lg']) {
    return 'lg';
  }
};
var helpers_colorMixin = function colorMixin(props) {
  if (!props.color) return '';
  var themeColor = helpers_theme("colors.".concat(props.color), false)({
    theme: theme
  });
  if (themeColor) return getColorRule(themeColor);
  return getColorRule(props.color);
};
var flexChildMixin = function flexChildMixin(props) {
  var rules = '';
  if (props.order) rules += "order: ".concat(props.order, ";");
  if (props.grow) rules += "flex-grow: ".concat(props.grow, ";");
  if (props.shrink) rules += "flex-shrink: ".concat(props.shrink, ";");
  return rules;
};
var hiddenMixin = function hiddenMixin(props) {
  var res = '';

  if (props.hiddenXS) {
    res += "\n      @media (max-width: ".concat(helpers_getSizeFromBreakpoint('xs'), ") {\n        display: none !important;\n      }\n    ");
  }

  if (props.hiddenSM) {
    res += "\n      @media (max-width: ".concat(helpers_getSizeFromBreakpoint('md'), ") {\n        display: none !important;\n      }\n    ");
  }

  if (props.hiddenMD) {
    res += "\n      @media (min-width: ".concat(helpers_getSizeFromBreakpoint('sm'), ") {\n        display: none !important;\n      }\n    ");
  }

  if (props.hiddenLG) {
    res += "\n      @media (min-width: ".concat(helpers_getSizeFromBreakpoint('lg'), ") {\n        display: none !important;\n      }\n    ");
  }

  return res;
};

var helpers_getGridRelatedValue = function getGridRelatedValue(value) {
  if (value && typeof value === 'number') {
    return "".concat(value / theme.general.gridSize * 100, "%");
  }

  return value;
};

var buildResponsiveWidthMixin = function buildResponsiveWidthMixin(props) {
  var res = '';

  if (props.md != null || props.lg != null || props.sm != null || props.xs != null) {
    if (props.lg != null) {
      res += "\n        @media (max-width: ".concat(helpers_getSizeFromBreakpoint('lg'), ") {\n          width: ").concat(helpers_getGridRelatedValue(props.lg), ";\n        }\n      ");
    }

    if (props.md != null) {
      res += "\n        @media (min-width: ".concat(helpers_getSizeFromBreakpoint('md'), ") {\n          width: ").concat(helpers_getGridRelatedValue(props.md), ";\n        }\n      ");
      res += "\n        @media (max-width: ".concat(helpers_getSizeFromBreakpoint('md'), ") {\n          width: 100%;\n        }\n      ");
    }

    if (props.sm != null) {
      res += "\n        @media (max-width: ".concat(helpers_getSizeFromBreakpoint('md'), ") {\n          width: ").concat(helpers_getGridRelatedValue(props.sm), ";\n        }\n      ");
    }

    if (props.xs != null) {
      res += "\n        @media (max-width: ".concat(helpers_getSizeFromBreakpoint('xs'), ") {\n          width: ").concat(helpers_getGridRelatedValue(props.xs), ";\n        }\n      ");
    }
  }

  if (props.mdOffset != null || props.lgOffset != null || props.smOffset != null || props.xsOffset != null) {
    if (props.lgOffset != null) {
      res += "\n        @media (max-width: ".concat(helpers_getSizeFromBreakpoint('lg'), ") {\n          margin-left: ").concat(helpers_getGridRelatedValue(props.lgOffset), ";\n        }\n      ");
    }

    if (props.mdOffset != null) {
      res += "\n        @media (min-width: ".concat(helpers_getSizeFromBreakpoint('md'), ") {\n          margin-left: ").concat(helpers_getGridRelatedValue(props.mdOffset), ";\n        }\n      ");
    }

    if (props.smOffset != null) {
      res += "\n        @media (max-width: ".concat(helpers_getSizeFromBreakpoint('md'), ") {\n          margin-left: ").concat(helpers_getGridRelatedValue(props.smOffset), ";\n        }\n      ");
    }

    if (props.xsOffset != null) {
      res += "\n        @media (max-width: ".concat(helpers_getSizeFromBreakpoint('xs'), ") {\n          margin-left: ").concat(helpers_getGridRelatedValue(props.xsOffset), ";\n        }\n      ");
    }
  }

  return res;
};
var helpers_withDynamicHeading = function withDynamicHeading(Component) {
  var bucket = Object.create(null);

  var DynamicTag = function DynamicTag(props) {
    var tag = "h".concat(props.level || 4); // if (!props.level || !styled.hasOwnProperty(tag)) {
    //   return h(Component, props);
    // }

    if (bucket[tag] === undefined) {
      bucket[tag] = Component.withComponent(tag);
    }

    return Object(external_react_["createElement"])(bucket[tag], props);
  };

  var name = Component.displayName || Component.constructor.name;

  if (name) {
    DynamicTag.displayName = "DynamicTag(".concat(name, ")");
  }

  return DynamicTag;
};
var helpers_responsiveRule = function responsiveRule(ruleName, propPath) {
  var values = helpers_theme(propPath)({
    theme: theme
  });
  var res = '';
  if (!values) return res;

  if (values.lg) {
    res += "\n      @media (min-width: ".concat(helpers_getSizeFromBreakpoint('lg'), ") {\n        ").concat(ruleName, ": ").concat(values.lg, ";\n      }\n    ");
  }

  if (values.md) {
    res += "\n      @media (max-width: ".concat(helpers_getSizeFromBreakpoint('lg'), ") {\n        ").concat(ruleName, ": ").concat(values.md, ";\n      }\n    ");
  }

  if (values.sm) {
    res += "\n      @media (max-width: ".concat(helpers_getSizeFromBreakpoint('md'), ") {\n        ").concat(ruleName, ": ").concat(values.sm, ";\n      }\n    ");
  }

  if (values.xs) {
    res += "\n      @media (max-width: ".concat(helpers_getSizeFromBreakpoint('sm'), ") {\n        ").concat(ruleName, ": ").concat(values.xs, ";\n      }\n    ");
  }

  return res;
};

var helpers_emSize = function emSize(pixelValue) {
  return "".concat(pixelValue / 16, "em");
};

var helpers_getSizeFromBreakpoint = function getSizeFromBreakpoint(breakpointValue) {
  if (BREAKPOINTS[breakpointValue]) {
    return helpers_emSize(BREAKPOINTS[breakpointValue]);
  } else if (parseInt(breakpointValue, 10)) {
    return helpers_emSize(BREAKPOINTS[breakpointValue]);
  }

  console.error('styled-media-query: No valid breakpoint or size specified for media.');
  return '0';
};
var helpers_min = function min(breakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(["@media (min-width:", "){", ";}"], helpers_getSizeFromBreakpoint(breakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var helpers_max = function max(breakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(["@media (max-width:", "){", ";}"], helpers_getSizeFromBreakpoint(breakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var helpers_between = function between(firstBreakpoint, secondBreakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(["@media (min-width:", ") and (max-width:", "){", ";}"], helpers_getSizeFromBreakpoint(firstBreakpoint, BREAKPOINTS), helpers_getSizeFromBreakpoint(secondBreakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var helpers_media = {
  min: helpers_min,
  max: helpers_max,
  between: helpers_between
}; // export const responsive = (values) => {
//   return css`
//
//   `;
// };

var helpers_itemSideByBreakpoint = function itemSideByBreakpoint(breakpoint) {
  if (breakpoint === 'lg') {
    return "calc((".concat(theme.general.containerWidth.lg, " - (").concat(theme.general.gridGap, " * 6)) / 4)");
  } else if (breakpoint === 'md') {
    return "calc((".concat(theme.general.containerWidth.md, " - (").concat(theme.general.gridGap, " * 6)) / 4)");
  } else if (breakpoint === 'sm') {
    return "calc((100vw - ".concat(theme.general.mobilePadding, " * 2 - ").concat(theme.general.gridGap, " * 4) / 3)");
  } else if (breakpoint === 'xs') {
    return "calc((100vw - ".concat(theme.general.mobilePadding, " * 3) / 2)");
  }

  return '0';
}; // TODO logic seems too complex

var helpers_getItemDimensions = function getItemDimensions(rule, afterCalc) {
  return function (p) {
    return Object(external_styled_components_["css"])(["", " ", " ", " ", ""], p.theme.min('lg')(_templateObject(), rule, helpers_itemSideByBreakpoint('lg'), afterCalc && " ".concat(afterCalc)), p.theme.max('lg')(_templateObject2(), rule, helpers_itemSideByBreakpoint('md'), afterCalc && " ".concat(afterCalc)), p.theme.max('md')(_templateObject3(), rule, helpers_itemSideByBreakpoint('sm'), afterCalc && " ".concat(afterCalc)), p.theme.max('sm')(_templateObject4(), rule, helpers_itemSideByBreakpoint('xs'), afterCalc && " ".concat(afterCalc)));
  };
};
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Button.js


var Button = external_styled_components_default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1qkz7ei-0"
})(["background:", ";color:white;width:279px;height:48px;border-radius:24px;font-size:", ";padding:0.7em 5em;font-weight:900;cursor:pointer;outline:none;border:0 &:hover{box-shadow:", ";}&:disabled{border-color:", ";background-color:", ";}", " ", " ", " ", " ", " ", " ", ";", " ", ";", ""], function (p) {
  return p.theme.colors.gradientBlue;
}, function (p) {
  return p.theme.font.size.smaller;
}, function (p) {
  return p.theme.shadows.level1;
}, function (p) {
  return p.theme.colors.grays.light;
}, function (p) {
  return p.theme.colors.grays.light;
}, function (p) {
  return p.rounded && Object(external_styled_components_["css"])(["border-radius:100px;"]);
}, function (p) {
  return p.huge && Object(external_styled_components_["css"])(["font-size:15px;font-weight:bold;padding:1em 6em;"]);
}, function (p) {
  return p.unstyled && Object(external_styled_components_["css"])(["background:transparent;border:0;margin:0;padding:0;&:hover{box-shadow:none;}"]);
}, function (p) {
  return p.link && Object(external_styled_components_["css"])(["background:transparent;border:0;margin:0;padding:0;font-weight:300;&:hover{text-decoration:underline;box-shadow:none;}"]);
}, function (p) {
  return p["default"] && Object(external_styled_components_["css"])(["background:transparent;border:transparent;font-weight:normal;&:hover{box-shadow:none;}"]);
}, function (p) {
  return p.dangerDot && Object(external_styled_components_["css"])(["position:relative;&:after{content:\"\";position:absolute;display:block;width:5px;height:5px;border-radius:50%;background:", ";top:50%;left:10px;transform:translate(0,-50%);}"], function (p) {
    return p.theme.colors.danger;
  });
}, function (p) {
  return p.outline && Object(external_styled_components_["css"])(["background:transparent;color:", ";border-color:", ";&:hover{background:", ";color:white;}"], function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.theme.colors.black;
  });
}, function (p) {
  return p.disabled && Object(external_styled_components_["css"])(["background:", ";border-color:", ";&:hover{box-shadow:none;cursor:not-allowed;}"], function (p) {
    return p.theme.colors.grays.light;
  }, function (p) {
    return p.theme.colors.grays.light;
  });
}, function (p) {
  return p.black && Object(external_styled_components_["css"])(["background-color:", ";border-color:", ";color:white;"], function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.theme.colors.black;
  });
}, hiddenMixin);
/* harmony default export */ var atoms_Button = (Button);
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(14);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Icon.js









var Icon_Icon =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Icon, _PureComponent);

  function Icon() {
    classCallCheck_default()(this, Icon);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Icon).apply(this, arguments));
  }

  createClass_default()(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          rest = objectWithoutProperties_default()(_this$props, ["className"]);

      return external_react_default.a.createElement("i", extends_default()({
        className: "".concat(className || '', " icon-").concat(this.props.icon)
      }, rest));
    }
  }]);

  return Icon;
}(external_react_["PureComponent"]);

/* harmony default export */ var atoms_Icon = (Icon_Icon);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Checkbox.js








function Checkbox_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 35px;\n  "]);

  Checkbox_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Checkbox_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    width: 32px;\n    height: 32px;\n  "]);

  Checkbox_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Checkbox_Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Checkbox, _PureComponent);

  function Checkbox() {
    classCallCheck_default()(this, Checkbox);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Checkbox).apply(this, arguments));
  }

  createClass_default()(Checkbox, [{
    key: "render",
    value: function render() {
      var checked = this.props.checked || false;
      return external_react_default.a.createElement(CheckboxCont, {
        checked: checked
      }, external_react_default.a.createElement(Input, extends_default()({
        type: "checkbox"
      }, this.props)), checked && external_react_default.a.createElement(CheckIcon, null));
    }
  }]);

  return Checkbox;
}(external_react_["PureComponent"]);

var CheckboxCont = external_styled_components_default.a.div.withConfig({
  displayName: "Checkbox__CheckboxCont",
  componentId: "alw87u-0"
})(["position:relative;display:inline-block;width:18px;height:18px;border:1px solid ", ";text-align:center;flex-grow:0;flex-shrink:0;", ""], function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.max('md')(Checkbox_templateObject());
});
var CheckIcon = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Icon, extends_default()({
    icon: "check"
  }, p));
}).withConfig({
  displayName: "Checkbox__CheckIcon",
  componentId: "alw87u-1"
})(["position:absolute;left:15%;top:-27%;font-size:20px;line-height:1;pointer-events:none;color:", ";", ""], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.max('md')(Checkbox_templateObject2());
});
var Input = external_styled_components_default.a.input.withConfig({
  displayName: "Checkbox__Input",
  componentId: "alw87u-2"
})(["position:absolute;width:100%;height:100%;top:0;left:0;opacity:0;cursor:pointer;"]);
/* harmony default export */ var atoms_Checkbox = (Checkbox_Checkbox);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Input.js

var Input_Input = external_styled_components_default.a.input.withConfig({
  displayName: "Input",
  componentId: "icu8o2-0"
})(["display:block;border:0;width:100%;line-height:1.7;background:transparent;font-weight:700;padding-left:8px;:read-only{border-color:", ";color:", ";}::-webkit-input-placeholder{color:", ";}::-moz-placeholder{color:", ";}:-ms-input-placeholder{color:", ";}:-moz-placeholder{color:", ";}", ";"], function (p) {
  return p.theme.colors.grays.light;
}, function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.error && Object(external_styled_components_["css"])(["border-color:", ";"], function (p) {
    return p.theme.colors.red;
  });
});
/* harmony default export */ var atoms_Input = (Input_Input);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/InputErrorMessage.js

var InputErrorMessage = external_styled_components_default.a.span.withConfig({
  displayName: "InputErrorMessage",
  componentId: "sc-14qbbmf-0"
})(["position:absolute;top:53px;font-size:10px;color:", ";padding-left:15px;&:before{content:\"\";display:block;position:absolute;width:1px;height:57px;left:-10px;top:-67px;background-color:", ";}&:after{content:\"c\";margin-left:5px;display:none;}"], function (p) {
  return p.theme.colors.danger;
}, function (p) {
  return p.theme.colors.danger;
});
/* harmony default export */ var atoms_InputErrorMessage = (InputErrorMessage);
// EXTERNAL MODULE: external "react-form-validator-core"
var external_react_form_validator_core_ = __webpack_require__(45);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/ValidatedInput.js













var ValidatedInput_ValidatedInput =
/*#__PURE__*/
function (_ValidatorComponent) {
  inherits_default()(ValidatedInput, _ValidatorComponent);

  function ValidatedInput() {
    classCallCheck_default()(this, ValidatedInput);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(ValidatedInput).apply(this, arguments));
  }

  createClass_default()(ValidatedInput, [{
    key: "render",
    value: function render() {
      var errorText = this.getErrorMessage();

      var _this$props = this.props,
          errorMessages = _this$props.errorMessages,
          validators = _this$props.validators,
          requiredError = _this$props.requiredError,
          validatorListener = _this$props.validatorListener,
          rest = objectWithoutProperties_default()(_this$props, ["errorMessages", "validators", "requiredError", "validatorListener"]);

      return external_react_default.a.createElement(InputCont, null, !this.isValid() && external_react_default.a.createElement(atoms_InputErrorMessage, {
        "data-test-error": rest.name
      }, errorText), external_react_default.a.createElement(atoms_Input, extends_default()({
        error: !this.isValid()
      }, rest)));
    }
  }]);

  return ValidatedInput;
}(external_react_form_validator_core_["ValidatorComponent"]);

var InputCont = external_styled_components_default.a.div.withConfig({
  displayName: "ValidatedInput__InputCont",
  componentId: "sc-1aj8wyx-0"
})(["position:relative;"]);
/* harmony default export */ var atoms_ValidatedInput = (ValidatedInput_ValidatedInput);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Label.js

var Label = external_styled_components_default.a.label.withConfig({
  displayName: "Label",
  componentId: "sc-7bapqi-0"
})(["font-size:14px;", " ", " ", " > small{display:block;font-weight:300;}"], function (p) {
  return p.block && Object(external_styled_components_["css"])(["display:block !important;"]);
}, function (p) {
  return p.required && Object(external_styled_components_["css"])(["&:after{content:'*';position:relative;color:", ";left:5px;}"], function (p) {
    return p.theme.colors.danger;
  });
}, function (p) {
  return p.bold && Object(external_styled_components_["css"])(["font-weight:500;"]);
});
/* harmony default export */ var atoms_Label = (Label);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Select.js












var Select_Select =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Select, _PureComponent);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      selected: _this.props.options[0] && _this.props.options[0].value
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onChange", function (e) {
      _this.setState({
        selected: e.target.value
      });

      _this.props.onChange && _this.props.onChange(e.target.value);
    });

    return _this;
  }

  createClass_default()(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var selected = this.props.selected;

      if (selected !== undefined) {
        this.setState({
          selected: selected
        });
        this.props.onChange && this.props.onChange(selected);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          options = _this$props.options,
          readOnly = _this$props.readOnly;
      var selected = this.state.selected;
      var selectedOption = options.find(function (o) {
        return o.value === selected;
      }) || {};
      return external_react_default.a.createElement(SelectCont, null, external_react_default.a.createElement(Selected, {
        className: this.props.className,
        readOnly: readOnly
      }, selectedOption.title, external_react_default.a.createElement(Select_Icon, {
        icon: "cared_down"
      })), external_react_default.a.createElement(Select_Input, {
        name: name,
        onChange: this.onChange,
        value: selected,
        disabled: readOnly
      }, options.map(function (_ref, i) {
        var value = _ref.value,
            title = _ref.title;
        return external_react_default.a.createElement("option", {
          key: "".concat(value, "-").concat(i),
          value: value
        }, title);
      })));
    }
  }]);

  return Select;
}(external_react_["PureComponent"]);

var SelectCont = external_styled_components_default.a.div.withConfig({
  displayName: "Select__SelectCont",
  componentId: "btb6io-0"
})(["position:relative;"]); // FIXME: color: black and border-bottom-color: black are leaking in and overriding these styles

var Selected = external_styled_components_default.a.p.withConfig({
  displayName: "Select__Selected",
  componentId: "btb6io-1"
})(["width:100%;border-bottom:", " solid white;background:transparent;font-weight:300;padding:10px 0;color:white;line-height:1.5;", ""], function (props) {
  return props.theme.general.borderWidth;
}, function (p) {
  return p.readOnly && Object(external_styled_components_["css"])(["border-color:", " !important;color:", " !important;"], p.theme.colors.grays.light, p.theme.colors.grays.regular);
});
var Select_Icon = external_styled_components_default()(atoms_Icon).withConfig({
  displayName: "Select__Icon",
  componentId: "btb6io-2"
})(["position:absolute;font-size:10px;top:19px;right:0;"]);
var Select_Input = external_styled_components_default.a.select.withConfig({
  displayName: "Select__Input",
  componentId: "btb6io-3"
})(["position:absolute;width:100%;height:100%;top:0;left:0;opacity:0;"]);
/* harmony default export */ var atoms_Select = (Select_Select);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/SideLabel.js


function SideLabel_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    margin-bottom: 30px;\n    > label {\n      margin-top: 6px;\n      font-size: 18px;\n      margin-left: 15px;\n    }\n  "]);

  SideLabel_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SideLabel = external_styled_components_default.a.div.withConfig({
  displayName: "SideLabel",
  componentId: "sc-1fdmdif-0"
})(["display:flex;align-items:flex-start;margin-bottom:20px;> label{margin-left:10px;> span{display:block;color:", ";}}", ""], function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.max('md')(SideLabel_templateObject());
});
/* harmony default export */ var atoms_SideLabel = (SideLabel);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/SectionHeading.js


function SectionHeading_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 38px;\n    margin-bottom: 20px;\n    margin-top: -15px;\n    padding: 0 ", ";\n  "]);

  SectionHeading_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function SectionHeading_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    margin-top: 10px;\n    margin-bottom: 20px;\n    font-size: 50px;\n  "]);

  SectionHeading_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SectionHeading = external_styled_components_default.a.h2.withConfig({
  displayName: "SectionHeading",
  componentId: "sc-1jy4qeg-0"
})(["font-weight:100;font-family:", ";color:", ";opacity:0.7;text-align:center;font-size:58px;margin-top:20px;margin-bottom:50px;", " ", ""], function (p) {
  return p.theme.font.family.header;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.between('sm', 'md')(SectionHeading_templateObject());
}, function (p) {
  return p.theme.max('sm')(SectionHeading_templateObject2(), function (p) {
    return p.theme.general.mobilePadding;
  });
});
/* harmony default export */ var atoms_SectionHeading = (SectionHeading);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Form.js

var Form = external_styled_components_default.a.form.withConfig({
  displayName: "Form",
  componentId: "u4lzp1-0"
})(["display:block;width:100%;"]);
/* harmony default export */ var atoms_Form = (Form);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/FormGroup.js

var FormGroup = external_styled_components_default.a.div.withConfig({
  displayName: "FormGroup",
  componentId: "sc-1nf62to-0"
})(["padding:5px 0;margin-bottom:18px;> label{margin-bottom:5px;}"]);
/* harmony default export */ var atoms_FormGroup = (FormGroup);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Box.js



var getAlignment = function getAlignment(align) {
  if (align === 'center') {
    return 'center';
  } else if (align === 'right' || align === 'bottom') {
    return 'flex-end';
  }

  return 'flex-start';
};

var Box = external_styled_components_default.a.div.withConfig({
  displayName: "Box",
  componentId: "r0y1u0-0"
})(["display:block;", " ", " ", " ", " ", " ", " ", ""], function (p) {
  return p.width && Object(external_styled_components_["css"])(["width:", ";"], p.width);
}, flexChildMixin, buildResponsiveWidthMixin, function (p) {
  return p.padded && Object(external_styled_components_["css"])(["padding-left:", ";padding-right:", ";"], p.theme.general.gridGap, p.theme.general.gridGap);
}, function (p) {
  return p.exact && Object(external_styled_components_["css"])(["flex-grow:0;flex-shrink:0;"]);
}, function (p) {
  return (p.alignX || p.alignY) && Object(external_styled_components_["css"])(["display:flex;flex-direction:column;align-items:", ";justify-content:", ";"], getAlignment(p.alignX), getAlignment(p.alignY));
}, hiddenMixin);
/* harmony default export */ var atoms_Box = (Box);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/HeaderClose.js










var HeaderClose_HeaderClose =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(HeaderClose, _PureComponent);

  function HeaderClose() {
    classCallCheck_default()(this, HeaderClose);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(HeaderClose).apply(this, arguments));
  }

  createClass_default()(HeaderClose, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(CloseCont, {
        onClick: this.props.onClick,
        hiddenMD: true,
        hiddenLG: true
      }, external_react_default.a.createElement(Line, {
        opened: this.props.opened
      }), external_react_default.a.createElement(Line, {
        opened: this.props.opened,
        bottom: true
      }));
    }
  }]);

  return HeaderClose;
}(external_react_["PureComponent"]);

var CloseCont = external_styled_components_default()(atoms_Box).withConfig({
  displayName: "HeaderClose__CloseCont",
  componentId: "v3wdck-0"
})(["position:absolute;top:50%;left:", ";width:25px;height:25px;z-index:10;"], helpers_theme('general.mobilePadding'));
var Line = external_styled_components_default.a.div.withConfig({
  displayName: "HeaderClose__Line",
  componentId: "v3wdck-1"
})(["width:100%;top:50%;height:2px;background:", ";transform:translate(0,-300%);transform-origin:center center;transition:.3s ease;", " ", " ", " ", ""], helpers_theme('colors.black'), function (props) {
  return props.bottom && Object(external_styled_components_["css"])(["transform:translate(0,0);"]);
}, function (props) {
  return props.opened && Object(external_styled_components_["css"])(["transform:translate(0,-100%) rotate(45deg);"]);
}, function (props) {
  return props.opened && props.bottom && Object(external_styled_components_["css"])(["transform:translate(0,-200%) rotate(-45deg);"]);
}, function (props) {
  return props.opened && Object(external_styled_components_["css"])(["background:white;"]);
});
/* harmony default export */ var atoms_HeaderClose = (HeaderClose_HeaderClose);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Hr.js


var Hr = external_styled_components_default.a.hr.withConfig({
  displayName: "Hr",
  componentId: "mp73i8-0"
})(["background-color:", ";border:0;width:100%;height:1px;", ";", ""], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.grayed && "background-color: ".concat(p.theme.colors.grays.light, ";");
}, hiddenMixin);
/* harmony default export */ var atoms_Hr = (Hr);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Flex.js


var Flex = external_styled_components_default.a.div.withConfig({
  displayName: "Flex",
  componentId: "sc-1noxrkc-0"
})(["display:flex;flex-direction:", ";align-items:", ";justify-content:", ";flex-wrap:", ";", " ", " ", " ", " ", ""], function (props) {
  return props.direction || 'row';
}, function (props) {
  return props.alignItems || 'flex-start';
}, function (props) {
  return props.justifyContent || 'flex-start';
}, function (props) {
  return props.wrap || 'nowrap';
}, function (props) {
  return props.fullWidth && Object(external_styled_components_["css"])(["width:100%;"]);
}, function (p) {
  return p.grid && Object(external_styled_components_["css"])(["flex-wrap:wrap;margin-left:-", ";margin-right:-", ";> div{flex-grow:0;flex-shrink:0;}"], p.theme.general.gridGap, p.theme.general.gridGap);
}, hiddenMixin, flexChildMixin, buildResponsiveWidthMixin);
/* harmony default export */ var atoms_Flex = (Flex);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Grid.js

var Grid = external_styled_components_default.a.section.withConfig({
  displayName: "Grid",
  componentId: "sc-7ioyzo-0"
})(["display:grid;", " ", ""], function (props) {
  return props.cols && Object(external_styled_components_["css"])(["grid-template-columns:", ";"], props.cols);
}, function (props) {
  return props.gap && Object(external_styled_components_["css"])(["grid-gap:", ";"], props.gap);
});
/* harmony default export */ var atoms_Grid = (Grid);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(17);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(46);

// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(47);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Modal.js







function Modal_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    &:hover {\n      color: ", ";\n    }\n  "]);

  Modal_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Modal_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    width: 100%;\n    height: 85vh;\n    display: flex;\n    top: auto;\n    flex-direction: column;\n    justify-content: center;\n    bottom: -5px;\n    left: 0;\n    transform: translate(0, 0);\n  "]);

  Modal_templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Modal_Modal =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Modal, _Component);

  function Modal() {
    classCallCheck_default()(this, Modal);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Modal).apply(this, arguments));
  }

  createClass_default()(Modal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          fullScreen = _this$props.fullScreen,
          animation = _this$props.animation;
      return external_react_dom_default.a.createPortal(external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(ModalBackdrop, {
        onClick: this.props.onClose
      }), external_react_default.a.createElement(external_react_transition_group_["CSSTransition"], {
        appear: true,
        "in": true,
        classNames: "modal",
        timeout: 600
      }, external_react_default.a.createElement(ModalContainer, {
        className: className,
        animation: animation,
        fullScreen: fullScreen
      }, external_react_default.a.createElement(Close, {
        onClick: this.props.onClose
      }, "\xD7"), external_react_default.a.createElement(ModalBody, {
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, this.props.children)))), document.body);
    }
  }]);

  return Modal;
}(external_react_["Component"]);

var animations = {
  fromRight: Object(external_styled_components_["css"])(["&.modal-appear{transform:translate(100%,0);}&.modal-appear-active{transform:translate(0,0);transition:all 300ms ease-out;}&.modal-exit{transform:translate(0,0);}&.modal-exit-active{transform:translate(100%,0);transition:all 300ms ease-in;}"]),
  fromBottom: Object(external_styled_components_["css"])(["&.modal-appear{transform:translate(0,100%);}&.modal-appear-active{transform:translate(0,0);transition:all 300ms ease-out;}&.modal-exit{transform:translate(0,0);}&.modal-exit-active{transform:translate(0,100%);transition:all 300ms ease-in;}"]),
  fadeIn: Object(external_styled_components_["css"])(["&.modal-appear{opacity:0;}&.modal-appear-active{opacity:1;transition:all 300ms ease-out;}&.modal-exit{opacity:1;}&.modal-exit-active{opacity:0;transition:all 300ms ease-in;}"]),
  empty: Object(external_styled_components_["css"])(["&.modal-appear{}&.modal-appear-active{}&.modal-exit{}&.modal-exit-active{}"])
};
var ModalBackdrop = external_styled_components_default.a.div.withConfig({
  displayName: "Modal__ModalBackdrop",
  componentId: "sc-7ji1fq-0"
})(["position:fixed;width:100%;height:100%;top:0;left:0;z-index:", ";background:", ";"], function (p) {
  return p.theme.zIndex.modalBg;
}, function (p) {
  return Object(external_polished_["rgba"])(p.theme.colors.black, 0.3);
});
var ModalContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Modal__ModalContainer",
  componentId: "sc-7ji1fq-1"
})(["position:fixed;display:flex;flex-direction:column;width:700px;background:white;left:50%;border-radius:10px;top:50%;padding:40px;transform:translate(-50%,-50%);z-index:", ";", " ", " ", ""], function (p) {
  return p.theme.zIndex.modal;
}, function (p) {
  return p.fullScreen && Object(external_styled_components_["css"])(["width:100vw;height:100vh;"]);
}, function (p) {
  return animations[p.animation] || animations.empty;
}, function (p) {
  return p.theme.max('sm')(Modal_templateObject());
});
var Close = external_styled_components_default.a.button.withConfig({
  displayName: "Modal__Close",
  componentId: "sc-7ji1fq-2"
})(["position:absolute;top:5px;right:10px;background:transparent;border:0;box-shadow:none;padding:7px;color:", ";font-size:32px;z-index:2;cursor:pointer;", ""], function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.min('md')(Modal_templateObject2(), function (p) {
    return p.theme.colors.black;
  });
});
var ModalBody = external_styled_components_default.a.section.withConfig({
  displayName: "Modal__ModalBody",
  componentId: "sc-7ji1fq-3"
})(["position:relative;flex-grow:1;{}"]);
/* harmony default export */ var atoms_Modal = (Modal_Modal);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Page.js








var Page_Page =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Page, _Component);

  function Page() {
    classCallCheck_default()(this, Page);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Page).apply(this, arguments));
  }

  createClass_default()(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.scrollTop) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(PageCont, this.props, this.props.children);
    }
  }]);

  return Page;
}(external_react_["Component"]);

var PageCont = external_styled_components_default.a.section.withConfig({
  displayName: "Page__PageCont",
  componentId: "dnohn6-0"
})(["display:block;"]);
/* harmony default export */ var atoms_Page = (Page_Page);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Section.js








var Section_Section =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Section, _PureComponent);

  function Section() {
    classCallCheck_default()(this, Section);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Section).apply(this, arguments));
  }

  createClass_default()(Section, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(SectionCont, this.props, this.props.children);
    }
  }]);

  return Section;
}(external_react_["PureComponent"]);

var SectionCont = external_styled_components_default.a.div.withConfig({
  displayName: "Section__SectionCont",
  componentId: "sc-3vcvy4-0"
})(["position:relative;padding:50px 0;"]);
/* harmony default export */ var atoms_Section = (Section_Section);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Cover.js

var Cover = external_styled_components_default.a.div.withConfig({
  displayName: "Cover",
  componentId: "sc-1955xn2-0"
})(["position:absolute;width:100%;height:100%;top:0;left:0;"]);
/* harmony default export */ var atoms_Cover = (Cover);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/GradientOverlay.js










var GradientOverlay_GradientOverlay =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(GradientOverlay, _PureComponent);

  function GradientOverlay() {
    classCallCheck_default()(this, GradientOverlay);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(GradientOverlay).apply(this, arguments));
  }

  createClass_default()(GradientOverlay, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Overlay, this.props);
    }
  }]);

  return GradientOverlay;
}(external_react_["PureComponent"]);

defineProperty_default()(GradientOverlay_GradientOverlay, "defaultProps", {
  deg: 224.34
});

var Overlay = external_styled_components_default.a.div.withConfig({
  displayName: "GradientOverlay__Overlay",
  componentId: "sc-1tnekrg-0"
})(["position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(", "deg,", " 0.75%,", " 87.48%);"], function (p) {
  return p.deg;
}, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.secondary;
});
/* harmony default export */ var atoms_GradientOverlay = (GradientOverlay_GradientOverlay);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Container.js


function Container_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n      padding-left: ", ";\n      padding-right: ", ";\n    "]);

  Container_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Container_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    width: ", ";\n  "]);

  Container_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Container_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    width: 100%;\n  "]);

  Container_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = external_styled_components_default.a.section.withConfig({
  displayName: "Container",
  componentId: "n5m14-0"
})(["margin-left:auto;margin-right:auto;height:100%;width:", ";", " ", " ", " ", " ", " ", " ", ""], function (p) {
  return p.theme.general.containerWidth.md;
}, function (p) {
  return p.relative && Object(external_styled_components_["css"])(["position:relative;"]);
}, function (p) {
  return p.noOverflow && Object(external_styled_components_["css"])(["overflow:hidden;"]);
}, function (p) {
  return p.toFront && Object(external_styled_components_["css"])(["position:relative;z-index:2;"]);
}, function (p) {
  return p.theme.max('md')(Container_templateObject());
}, function (p) {
  return p.theme.min('lg')(Container_templateObject2(), function (p) {
    return p.theme.general.containerWidth.lg;
  });
}, function (p) {
  return p.mobilePadding && Object(external_styled_components_["css"])(["", ""], p.theme.max('md')(Container_templateObject3(), p.theme.general.mobilePadding, p.theme.general.mobilePadding));
}, hiddenMixin);
/* harmony default export */ var atoms_Container = (Container);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Heading.js


var HeadingBase = external_styled_components_default.a.h3.withConfig({
  displayName: "Heading__HeadingBase",
  componentId: "sc-1xhd8z9-0"
})(["font-weight:700;font-family:", ";color:", ";", " ", " ", " ", " ", " ", " ", " > span{opacity:1;color:", ";}", " ", ""], function (p) {
  return p.theme.font.family.header;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.spaced && Object(external_styled_components_["css"])(["letter-spacing:", ";"], p.theme.font.letterSpacing.accent);
}, function (p) {
  return p.small && Object(external_styled_components_["css"])(["font-size:", ";"], p.theme.font.size.small);
}, function (p) {
  return p.smaller && Object(external_styled_components_["css"])(["font-size:", ";"], p.theme.font.size.smaller);
}, function (p) {
  return p.transform && Object(external_styled_components_["css"])(["text-transform:", ";"], p.transform);
}, function (p) {
  return p.accent && Object(external_styled_components_["css"])(["font-family:", ";font-style:italic;font-weight:400;"], p.theme.font.family.accent);
}, function (p) {
  return p.noMargin && Object(external_styled_components_["css"])(["margin:0;"]);
}, hiddenMixin, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.primary && Object(external_styled_components_["css"])(["color:", ";"], function (p) {
    return p.theme.colors.primary;
  });
}, function (p) {
  return p.white && 'color: white;';
});
/* harmony default export */ var Heading = (helpers_withDynamicHeading(HeadingBase));
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Text.js

var Text = external_styled_components_default.a.p.withConfig({
  displayName: "Text",
  componentId: "pkamgi-0"
})(["font-size:", ";line-height:", ";", " ", " ", " ", " ", ""], function (p) {
  return p.theme.font.size.normal;
}, function (p) {
  return p.theme.font.lineHeight.normal;
}, function (props) {
  return props.textHuge ? Object(external_styled_components_["css"])(["font-size:", ";line-height:", ";font-weight:", ";color:", ";text-shadow:", ";"], function (p) {
    return p.theme.font.size.huge;
  }, function (p) {
    return p.theme.font.lineHeight.huge;
  }, function (p) {
    return p.theme.font.weight.w700;
  }, function (p) {
    return p.theme.colors.white;
  }, function (p) {
    return p.theme.shadows.level2;
  }) : '';
}, function (props) {
  return props.textBig ? Object(external_styled_components_["css"])(["font-size:", ";line-height:", ";color:", ";opacity:", ";font-weight:", ";"], function (p) {
    return p.theme.font.size.big;
  }, function (p) {
    return p.theme.font.lineHeight.huge;
  }, function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.theme.opacity.small;
  }, function (p) {
    return p.theme.font.weight.w400;
  }) : '';
}, function (props) {
  return props.textNormal ? Object(external_styled_components_["css"])(["font-size:", ";line-height:", ";font-weight:", ";color:", ";"], function (p) {
    return p.theme.font.size.normal;
  }, function (p) {
    return p.theme.font.lineHeight.normal;
  }, function (p) {
    return p.theme.font.weight.w400;
  }, function (p) {
    return p.theme.colors.black;
  }) : '';
}, function (props) {
  return props.textSmall ? Object(external_styled_components_["css"])(["font-size:", ";line-height:", ";color:", ";opacity:", ";"], function (p) {
    return p.theme.font.size.small;
  }, function (p) {
    return p.theme.font.lineHeight.small;
  }, function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.opacity ? '${p => p.theme.opacity.normal}' : '1';
  }) : '';
}, function (props) {
  return props.textSmaller ? Object(external_styled_components_["css"])(["font-size:", ";line-height:", ";color:", ";opacity:", ";"], function (p) {
    return p.theme.font.size.smaller;
  }, function (p) {
    return p.theme.font.lineHeight.smaller;
  }, function (p) {
    return p.theme.colors.almostBlack;
  }, function (p) {
    return p.theme.opacity.big;
  }) : '';
});
/* harmony default export */ var atoms_Text = (Text);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Link.js

var Link = external_styled_components_default.a.a.withConfig({
  displayName: "Link",
  componentId: "sc-1fsgs7m-0"
})(["text-decoration:none;color:", ";"], function (props) {
  return props.theme.colors.black;
});
/* harmony default export */ var atoms_Link = (Link);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Image.js

var Image = external_styled_components_default.a.img.withConfig({
  displayName: "Image",
  componentId: "sgnf05-0"
})(["display:block;"]);
/* harmony default export */ var atoms_Image = (Image);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/ImageBlock.js

var ImageBlock = external_styled_components_default.a.div.withConfig({
  displayName: "ImageBlock",
  componentId: "oeicy5-0"
})(["width:", ";height:", ";background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;"], function (props) {
  return props.width || '50px';
}, function (props) {
  return props.height || '50px';
}, function (props) {
  return props.src;
});
/* harmony default export */ var atoms_ImageBlock = (ImageBlock);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/List.js

var List = external_styled_components_default.a.ul.withConfig({
  displayName: "List",
  componentId: "l3sjbh-0"
})(["", " ", ";", ""], function (p) {
  return p.horizontal && Object(external_styled_components_["css"])(["display:flex;flex-wrap:wrap;"]);
}, function (p) {
  return p.unstyled && Object(external_styled_components_["css"])(["margin:0;padding:0;list-style:none;"]);
}, function (props) {
  return props.centered && Object(external_styled_components_["css"])(["justify-content:center;"]);
});
/* harmony default export */ var atoms_List = (List);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/ListItem.js

var ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "ListItem",
  componentId: "sc-19galkn-0"
})(["display:block;"]);
/* harmony default export */ var atoms_ListItem = (ListItem);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Radio.js








function Radio_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    width: 36px;\n    height: 36px;\n  "]);

  Radio_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Radio_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n          top: 4px;\n          left: 4px;\n          width: calc(100% - 8px);\n          height: calc(100% - 8px);\n        "]);

  Radio_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Radio_Radio =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Radio, _PureComponent);

  function Radio() {
    classCallCheck_default()(this, Radio);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Radio).apply(this, arguments));
  }

  createClass_default()(Radio, [{
    key: "render",
    value: function render() {
      var checked = this.props.checked || false;
      return external_react_default.a.createElement(RadioCont, {
        checked: checked,
        huge: this.props.huge
      }, external_react_default.a.createElement(Radio_Input, extends_default()({
        type: "radio"
      }, this.props)));
    }
  }]);

  return Radio;
}(external_react_["PureComponent"]);

var RadioCont = external_styled_components_default.a.div.withConfig({
  displayName: "Radio__RadioCont",
  componentId: "sc-16efxyy-0"
})(["position:relative;display:inline-block;width:18px;height:18px;border:1px solid ", ";text-align:center;border-radius:50%;flex-grow:0;flex-shrink:0;", ";", " ", ""], function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.checked && Object(external_styled_components_["css"])(["&:after{position:absolute;display:block;content:'';width:calc(100% - 4px);height:calc(100% - 4px);top:2px;left:2px;border-radius:50%;background:", ";", "}"], function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.theme.max('md')(Radio_templateObject());
  });
}, function (p) {
  return p.theme.max('md')(Radio_templateObject2());
}, function (p) {
  return p.huge && Object(external_styled_components_["css"])(["width:28px;height:28px;&:after{width:calc(100% - 6px);height:calc(100% - 6px);top:3px;left:3px;}"]);
});
var Radio_Input = external_styled_components_default.a.input.withConfig({
  displayName: "Radio__Input",
  componentId: "sc-16efxyy-1"
})(["position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;cursor:pointer;"]);
/* harmony default export */ var atoms_Radio = (Radio_Radio);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/RadioButton.js











function RadioButton_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 7px;\n  "]);

  RadioButton_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var RadioButton_RadioButton =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(RadioButton, _PureComponent);

  function RadioButton() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(RadioButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "onClick", function () {
      _this.props.onChange(_this.props.value);
    });

    return _this;
  }

  createClass_default()(RadioButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onChange = _this$props.onChange,
          rest = objectWithoutProperties_default()(_this$props, ["children", "onChange"]);

      var checked = this.props.checked || false;
      return external_react_default.a.createElement(RadioButton_RadioCont, {
        checked: checked,
        onClick: this.onClick
      }, children, external_react_default.a.createElement(RadioButton_Input, extends_default()({
        type: "radio"
      }, rest)));
    }
  }]);

  return RadioButton;
}(external_react_["PureComponent"]);

var RadioButton_RadioCont = external_styled_components_default.a.div.withConfig({
  displayName: "RadioButton__RadioCont",
  componentId: "tys55a-0"
})(["position:relative;display:inline-block;border:2px solid ", ";text-align:center;flex-grow:0;flex-shrink:0;padding:7px 18px;font-size:14px;&:hover{background:black;color:white;}", ";", ""], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.checked && Object(external_styled_components_["css"])(["background:black;color:white;"]);
}, function (p) {
  return p.theme.max('sm')(RadioButton_templateObject());
});
var RadioButton_Input = external_styled_components_default.a.input.withConfig({
  displayName: "RadioButton__Input",
  componentId: "tys55a-1"
})(["position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;cursor:pointer;"]);
/* harmony default export */ var atoms_RadioButton = (RadioButton_RadioButton);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/Textarea.js

var Textarea = external_styled_components_default.a.textarea.withConfig({
  displayName: "Textarea",
  componentId: "efw5o4-0"
})(["display:block;width:100%;border:2px solid ", ";padding:8px;border-radius:0;box-shadow:none;"], function (p) {
  return p.theme.colors.black;
});
/* harmony default export */ var atoms_Textarea = (Textarea);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/atoms/index.js

































// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/iphone.png
var iphone = __webpack_require__(48);
var iphone_default = /*#__PURE__*/__webpack_require__.n(iphone);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/top/Phone.js








function Phone_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    display: none;\n  "]);

  Phone_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Phone_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translateX(-20px) scale(0.85);\n  "]);

  Phone_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Phone_Control =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Control, _PureComponent);

  function Control() {
    classCallCheck_default()(this, Control);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Control).apply(this, arguments));
  }

  createClass_default()(Control, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("svg", extends_default()({
        id: "hello",
        viewBox: "0 0 200 200",
        xmlSpace: "preserve"
      }, this.props), external_react_default.a.createElement("circle", {
        r: "90",
        cx: "100",
        cy: "100",
        strokeWidth: 3,
        fill: "transparent",
        stroke: "rgba(255, 255, 255, 0.4)",
        strokeDasharray: "565.48",
        strokeDashoffset: "0"
      }), external_react_default.a.createElement("circle", {
        id: "bar",
        r: "90",
        cx: "100",
        strokeWidth: 3,
        strokeLinecap: "round",
        cy: "100",
        stroke: "#ffffff",
        fill: "transparent",
        strokeDasharray: "565.48",
        strokeDashoffset: 400
      }));
    }
  }]);

  return Control;
}(external_react_["PureComponent"]);

var Phone_Phone =
/*#__PURE__*/
function (_PureComponent2) {
  inherits_default()(Phone, _PureComponent2);

  function Phone() {
    classCallCheck_default()(this, Phone);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Phone).apply(this, arguments));
  }

  createClass_default()(Phone, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Cont, null, external_react_default.a.createElement(Day, null, "\u0414\u0435\u043D\u044C 1"), external_react_default.a.createElement(Title, null, "\u041E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u043E\u0441\u0442\u044C"), external_react_default.a.createElement(MeditationControl, null), external_react_default.a.createElement(PlayIcon, null));
    }
  }]);

  return Phone;
}(external_react_["PureComponent"]);

var MeditationControl = external_styled_components_default()(Phone_Control).withConfig({
  displayName: "Phone__MeditationControl",
  componentId: "sc-1ukouqy-0"
})(["transform:scale(0.65) translateY(68%);"]);
var Cont = external_styled_components_default.a.div.withConfig({
  displayName: "Phone__Cont",
  componentId: "sc-1ukouqy-1"
})(["position:relative;width:276px;height:550px;background-image:url(", ");background-size:cover;", " ", ""], iphone_default.a, function (p) {
  return p.theme.between('sm', 'md')(Phone_templateObject());
}, function (p) {
  return p.theme.max('sm')(Phone_templateObject2());
});
var Day = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Phone__Day",
  componentId: "sc-1ukouqy-2"
})(["position:absolute;top:32px;width:100%;color:white;font-size:13px;font-weight:400;text-align:center;margin-bottom:0;opacity:0.8;"]);
var Title = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Phone__Title",
  componentId: "sc-1ukouqy-3"
})(["position:absolute;top:44px;width:100%;color:white;font-size:17px;font-weight:600;text-align:center;"]);
var PlayIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Phone__PlayIcon",
  componentId: "sc-1ukouqy-4"
})(["position:absolute;top:47%;left:53%;transform:translate(-50%,-50%);border-top:30px solid transparent;border-bottom:30px solid transparent;border-left:48px solid white;"]);
/* harmony default export */ var top_Phone = (Phone_Phone);
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/icons/logo_v.png
var logo_v = __webpack_require__(49);
var logo_v_default = /*#__PURE__*/__webpack_require__.n(logo_v);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/BgTop.jpg
var BgTop = __webpack_require__(20);
var BgTop_default = /*#__PURE__*/__webpack_require__.n(BgTop);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/icons/GooglePlay.png
var GooglePlay = __webpack_require__(29);
var GooglePlay_default = /*#__PURE__*/__webpack_require__.n(GooglePlay);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/icons/AppStore.png
var AppStore = __webpack_require__(30);
var AppStore_default = /*#__PURE__*/__webpack_require__.n(AppStore);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/top/Top.js











function _templateObject16() {
  var data = taggedTemplateLiteral_default()(["\n    width: 180px;\n    height: 65px;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = taggedTemplateLiteral_default()(["\n     display: block !important;\n     margin-top: 30px;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = taggedTemplateLiteral_default()(["\n    display: none;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 4.7vw;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: ", ";\n    line-height: ", ";\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n    width: 100%;\n    min-width: 274px;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n    z-index: ", ";\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    left: 0;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 7vw;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 24px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    width: 160px; \n    height: 160px;\n    margin-top: 80px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    width: 140px; \n    height: 140px;\n    margin-top: 30px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Top_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    left: 0;\n  "]);

  Top_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Top_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    height: 568px;\n    padding: 0 10px;\n  "]);

  Top_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Top_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    height: 580px;\n  "]);

  Top_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Top_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    background-attachment: fixed;\n    background-position: bottom;\n  "]);

  Top_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



















var Top_Top =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Top, _PureComponent);

  function Top() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Top);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Top)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "topios", function () {
      external_react_ga_default.a.event({
        category: 'desktop_events',
        action: 'up1'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "topandroid", function () {
      external_react_ga_default.a.event({
        category: 'desktop_events',
        action: 'up2'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "topiosmob", function () {
      external_react_ga_default.a.event({
        category: 'mobile_events',
        action: 'mup1'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "topandroidmob", function () {
      external_react_ga_default.a.event({
        category: 'mobile_events',
        action: 'mup2'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onSelectFlag",
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(lang) {
        var LOCALES;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                LOCALES = {
                  US: 'en',
                  RU: 'ru'
                };
                _context.next = 3;
                return external_i18next_default.a.changeLanguage(LOCALES[lang], function () {
                  _this.forceUpdate();
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  createClass_default()(Top, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(CustomSection, null, external_react_default.a.createElement(CustomReactFlagsSelect, {
        defaultCountry: {
          ru: 'RU',
          en: 'US'
        }[i18n_getLocale()] || 'RU',
        countries: ["US", "RU"],
        className: "menu-flags",
        customLabels: {
          "US": "EN",
          "RU": "RU"
        },
        onSelect: this.onSelectFlag
      }), external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(TopFlex, null, external_react_default.a.createElement(BlockText, null, external_react_default.a.createElement(Logo, {
        src: logo_v_default.a
      }), external_react_default.a.createElement(Top_Heading, {
        white: true,
        dangerouslySetInnerHTML: {
          __html: t('Top.title')
        }
      }), external_react_default.a.createElement(NormalText, {
        textNormal: true
      }, t('Top.description')), external_react_default.a.createElement(ButtonCont, null, external_react_default.a.createElement(AppLink, {
        href: "/ios",
        onClick: this.topios
      }, external_react_default.a.createElement(ButtonDownload, {
        src: AppStore_default.a
      })), external_react_default.a.createElement(AppLink, {
        href: "/android",
        onClick: this.topandroid
      }, external_react_default.a.createElement(ButtonDownload, {
        src: GooglePlay_default.a,
        last: true
      }))), external_react_default.a.createElement(FullVersion, null, external_react_default.a.createElement(external_react_device_detect_["AndroidView"], null, external_react_default.a.createElement(AppLink, {
        href: "/android",
        onClick: this.topandroidmob
      }, external_react_default.a.createElement(ButtonDownloadSm, {
        src: GooglePlay_default.a
      }))), external_react_default.a.createElement(external_react_device_detect_["IOSView"], null, external_react_default.a.createElement(AppLink, {
        href: "/ios",
        onClick: this.topiosmob
      }, external_react_default.a.createElement(ButtonDownloadSm, {
        src: AppStore_default.a
      }))))), external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
        y: [-90, 80]
      }, external_react_default.a.createElement(top_Phone, null)))));
    }
  }]);

  return Top;
}(external_react_["PureComponent"]);

/* harmony default export */ var top_Top = (Object(external_react_i18next_["withTranslation"])()(Top_Top));
var CustomReactFlagsSelect = external_styled_components_default()(external_react_flags_select_default.a).withConfig({
  displayName: "Top__CustomReactFlagsSelect",
  componentId: "tw6vr5-0"
})(["position:absolute;right:0;padding:15px;color:rgba(255,255,255,0.7);text-transform:uppercase;text-align:center;cursor:pointer;&&{.flag-options{background:rgba(0,0,0,0.3);border:0;}.flag-option{&:hover{background:rgba(0,0,0,.5);}}.arrow-down{color:rgba(255,255,255,0.7);}}"]);
var CustomSection = external_styled_components_default()(atoms_Section).withConfig({
  displayName: "Top__CustomSection",
  componentId: "tw6vr5-1"
})(["background:url(", ") no-repeat center;background-color:", ";background-size:cover;", " padding:0;height:700px;", " ", ""], BgTop_default.a, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.min('md')(Top_templateObject());
}, function (p) {
  return p.theme.between('sm', 'md')(Top_templateObject2());
}, function (p) {
  return p.theme.max('sm')(Top_templateObject3());
});
var Logo = external_styled_components_default.a.img.withConfig({
  displayName: "Top__Logo",
  componentId: "tw6vr5-2"
})(["position:relative;width:176px;height:176px;z-index:", ";margin:5px;", " ", " ", "}"], function (p) {
  return p.theme.zIndex.four;
}, function (p) {
  return p.theme.max('lg')(Top_templateObject4());
}, function (p) {
  return p.theme.max('md')(_templateObject5());
}, function (p) {
  return p.theme.max('sm')(_templateObject6());
});
var TopFlex = external_styled_components_default()(atoms_Flex).withConfig({
  displayName: "Top__TopFlex",
  componentId: "tw6vr5-3"
})(["height:100%;justify-content:space-between;align-items:center;"]);
var Top_Heading = external_styled_components_default()(Heading).withConfig({
  displayName: "Top__Heading",
  componentId: "tw6vr5-4"
})(["font-size:28px;margin-bottom:0;text-shadow:0 0 3px rgba(0,0,0,0.3);", " ", ""], function (p) {
  return p.theme.max('md')(_templateObject7());
}, function (p) {
  return p.theme.max('sm')(_templateObject8());
});
var BlockText = external_styled_components_default()(atoms_Flex).withConfig({
  displayName: "Top__BlockText",
  componentId: "tw6vr5-5"
})(["position:relative;top:-45px;width:450px;flex-direction:column;align-items:center;justify-content:center;text-align:center;", " ", " ", ""], function (p) {
  return p.theme.max('lg')(_templateObject9());
}, function (p) {
  return p.theme.max('md')(_templateObject10(), function (p) {
    return p.theme.zIndex.three;
  });
}, function (p) {
  return p.theme.max('sm')(_templateObject11());
});
var NormalText = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Top__NormalText",
  componentId: "tw6vr5-6"
})(["color:", ";font-weight:300;", " text-shadow:0 0 3px rgba(0,0,0,0.3);", ""], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.max('sm')(_templateObject12(), function (p) {
    return p.theme.font.size.smaller;
  }, function (p) {
    return p.theme.font.lineHeight.normal;
  });
}, function (p) {
  return p.theme.max('sm')(_templateObject13());
});
var ButtonCont = external_styled_components_default.a.div.withConfig({
  displayName: "Top__ButtonCont",
  componentId: "tw6vr5-7"
})(["position:relative;text-align:center;z-index:", ";margin-top:40px;", ""], function (p) {
  return p.theme.zIndex.two;
}, function (p) {
  return p.theme.max('sm')(_templateObject14());
});
var AppLink = external_styled_components_default()(atoms_Link).withConfig({
  displayName: "Top__AppLink",
  componentId: "tw6vr5-8"
})(["text-decoration:none;"]);
var ButtonDownload = external_styled_components_default.a.img.withConfig({
  displayName: "Top__ButtonDownload",
  componentId: "tw6vr5-9"
})(["cursor:pointer;width:180px;height:65px;margin-right:", ";"], function (p) {
  return p.last ? '0' : '15px';
});
var FullVersion = external_styled_components_default.a.div.withConfig({
  displayName: "Top__FullVersion",
  componentId: "tw6vr5-10"
})(["display:none;", ""], function (p) {
  return p.theme.max('sm')(_templateObject15());
});
var ButtonDownloadSm = external_styled_components_default.a.img.withConfig({
  displayName: "Top__ButtonDownloadSm",
  componentId: "tw6vr5-11"
})(["", ""], function (p) {
  return p.theme.max('sm')(_templateObject16());
});
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/marketing1.png
var marketing1 = __webpack_require__(50);
var marketing1_default = /*#__PURE__*/__webpack_require__.n(marketing1);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/marketing2.png
var marketing2 = __webpack_require__(51);
var marketing2_default = /*#__PURE__*/__webpack_require__.n(marketing2);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/marketing3.png
var marketing3 = __webpack_require__(52);
var marketing3_default = /*#__PURE__*/__webpack_require__.n(marketing3);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/top_wave.png
var top_wave = __webpack_require__(21);
var top_wave_default = /*#__PURE__*/__webpack_require__.n(top_wave);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/marketing/Marketing.js








function _templateObject19() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 0 50px;\n    margin-top: 7px;\n    margin-bottom: 30px;\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = taggedTemplateLiteral_default()(["\n    margin-top: 3px;\n    padding: 0 10px;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = taggedTemplateLiteral_default()(["\n        width: 2130px;\n      "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function Marketing_templateObject16() {
  var data = taggedTemplateLiteral_default()(["\n        height: 35vw;\n      "]);

  Marketing_templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function Marketing_templateObject15() {
  var data = taggedTemplateLiteral_default()(["\n        width: 2130px;\n        transform: translateX(-2194px);\n      "]);

  Marketing_templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function Marketing_templateObject14() {
  var data = taggedTemplateLiteral_default()(["\n        height: 270px;\n        transform: translate(0, calc(-17.5vw + 2px - 200px));\n      "]);

  Marketing_templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function Marketing_templateObject13() {
  var data = taggedTemplateLiteral_default()(["\n      transform: translate(0, calc(35vw - 2px));\n    "]);

  Marketing_templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function Marketing_templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n      transform: translate(0, calc(-17.5vw + 2px));\n    "]);

  Marketing_templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function Marketing_templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n      width: 100%;\n      left: 0;\n      height: 17.5vw;\n    "]);

  Marketing_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function Marketing_templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n    width: 35vw;\n    height: 35vw;\n  "]);

  Marketing_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function Marketing_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    top: 20px;\n    font-size: 18px;\n    text-align: justify;\n    line-height: 1.38;\n    margin: 10px 0 40px 0;\n    padding: 0 ", ";\n    z-index: 10;\n  "]);

  Marketing_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function Marketing_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n    margin: 40px 0;\n  "]);

  Marketing_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Marketing_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    height: 101%;\n    width: 33vw;\n    top: 0;\n    right: 0;\n    left: auto;\n    bottom: auto;\n  "]);

  Marketing_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Marketing_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    height: 101%;\n    width: 33vw;\n    top: 0;\n    left: 0;\n  "]);

  Marketing_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Marketing_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    height: 198px;\n  "]);

  Marketing_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Marketing_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    background-size: 200vw 38%;\n  "]);

  Marketing_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Marketing_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    background-size: 150vw 40%;\n  "]);

  Marketing_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Marketing_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 0;\n  "]);

  Marketing_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Marketing_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    background-attachment: fixed;\n  "]);

  Marketing_templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var Marketing_Marketing =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Marketing, _PureComponent);

  function Marketing() {
    classCallCheck_default()(this, Marketing);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Marketing).apply(this, arguments));
  }

  createClass_default()(Marketing, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(Marketing_Cont, null, external_react_default.a.createElement(TopOverlay, null), external_react_default.a.createElement(Overflow, null, external_react_default.a.createElement(TopBlock, null), external_react_default.a.createElement(BottomBlock, null), external_react_default.a.createElement(atoms_Container, {
        relative: true
      }, external_react_default.a.createElement(atoms_Flex, null, external_react_default.a.createElement(atoms_Box, {
        md: 10,
        sm: 10,
        xs: 12,
        mdOffset: 1,
        smOffset: 1,
        xsOffset: 0
      }, external_react_default.a.createElement(Desc, {
        dangerouslySetInnerHTML: {
          __html: t('Marketing.description')
        }
      }))), external_react_default.a.createElement(atoms_Flex, {
        grid: true
      }, external_react_default.a.createElement(ItemBox, null, external_react_default.a.createElement(Marketing_Image, {
        source: marketing1_default.a
      }), external_react_default.a.createElement(Marketing_Title, null, t('Marketing.box-1.title'))), external_react_default.a.createElement(ItemBox, null, external_react_default.a.createElement(Marketing_Image, {
        source: marketing2_default.a
      }), external_react_default.a.createElement(Marketing_Title, null, t('Marketing.box-2.title'))), external_react_default.a.createElement(ItemBox, null, external_react_default.a.createElement(Marketing_Image, {
        source: marketing3_default.a
      }), external_react_default.a.createElement(Marketing_Title, null, t('Marketing.box-3.title')))))));
    }
  }]);

  return Marketing;
}(external_react_["PureComponent"]);

var Marketing_Cont = external_styled_components_default.a.section.withConfig({
  displayName: "Marketing__Cont",
  componentId: "sc-496sae-0"
})(["position:relative;padding:20px 0;background-image:url(", ");background-size:cover;background-position:bottom;", " ", ""], BgTop_default.a, function (p) {
  return p.theme.min('md')(Marketing_templateObject());
}, function (p) {
  return p.theme.max('md')(Marketing_templateObject2());
});
var Overflow = external_styled_components_default.a.div.withConfig({
  displayName: "Marketing__Overflow",
  componentId: "sc-496sae-1"
})(["overflow:hidden;"]);
var TopOverlay = external_styled_components_default.a.div.withConfig({
  displayName: "Marketing__TopOverlay",
  componentId: "sc-496sae-2"
})(["position:absolute;left:0;top:-99px;height:100px;width:100%;background-image:url(", ");z-index:10;background-size:2420px 55%;background-position:center bottom;background-repeat:no-repeat;", " ", ""], top_wave_default.a, function (p) {
  return p.theme.max('md')(Marketing_templateObject3());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject4());
});
var TopBlock = external_styled_components_default.a.div.withConfig({
  displayName: "Marketing__TopBlock",
  componentId: "sc-496sae-3"
})(["position:absolute;width:100%;height:188px;top:0;left:0;background:white;", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(Marketing_templateObject5());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject6());
});
var BottomBlock = external_styled_components_default.a.div.withConfig({
  displayName: "Marketing__BottomBlock",
  componentId: "sc-496sae-4"
})(["position:absolute;width:100%;height:154px;bottom:-50px;left:0;background:white;", ""], function (p) {
  return p.theme.max('sm')(Marketing_templateObject7());
});
var Desc = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Marketing__Desc",
  componentId: "sc-496sae-5"
})(["text-align:center;font-size:20px;line-height:1.45;margin:40px 0;", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(Marketing_templateObject8());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject9(), function (p) {
    return p.theme.general.mobilePadding;
  });
});
var Marketing_Image = external_styled_components_default.a.image.withConfig({
  displayName: "Marketing__Image",
  componentId: "sc-496sae-6"
})(["width:130px;height:130px;background-image:url(", ");background-size:cover;", ""], function (p) {
  return p.source;
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject10());
});
var ItemBox = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Box, extends_default()({
    md: 4,
    sm: 4,
    xs: 12
  }, p));
}).withConfig({
  displayName: "Marketing__ItemBox",
  componentId: "sc-496sae-7"
})(["position:relative;display:flex;flex-direction:column;align-items:center;&:before,&:after{content:'';display:block;position:absolute;height:100%;left:50%;background:white;top:0;width:130px;", "}&:before{transform:translateX(-194px);", "}&:after{transform:translateX(64px);", "}&:first-child{&:before{", " ", "}}&:last-child{&:after{", " ", "}}"], function (p) {
  return p.theme.max('sm')(Marketing_templateObject11());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject12());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject13());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject14());
}, function (p) {
  return p.theme.min('sm')(Marketing_templateObject15());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject16());
}, function (p) {
  return p.theme.min('sm')(_templateObject17());
});
var Marketing_Title = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Marketing__Title",
  componentId: "sc-496sae-8"
})(["position:relative;font-weight:700;font-size:20px;text-align:center;padding:0 20px;z-index:2;margin-top:12px;", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(_templateObject18());
}, function (p) {
  return p.theme.max('sm')(_templateObject19());
});
/* harmony default export */ var marketing_Marketing = (Object(external_react_i18next_["withTranslation"])()(Marketing_Marketing));
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/screenshots/screenshot1.png
var screenshot1 = __webpack_require__(53);
var screenshot1_default = /*#__PURE__*/__webpack_require__.n(screenshot1);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/screenshots/screenshot2.png
var screenshot2 = __webpack_require__(54);
var screenshot2_default = /*#__PURE__*/__webpack_require__.n(screenshot2);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/screenshots/screenshot3.png
var screenshot3 = __webpack_require__(55);
var screenshot3_default = /*#__PURE__*/__webpack_require__.n(screenshot3);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/screenshots/screenshot4.png
var screenshot4 = __webpack_require__(56);
var screenshot4_default = /*#__PURE__*/__webpack_require__.n(screenshot4);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/screenshots/screenshot5.png
var screenshot5 = __webpack_require__(57);
var screenshot5_default = /*#__PURE__*/__webpack_require__.n(screenshot5);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/screenshots/flower1.png
var flower1 = __webpack_require__(58);
var flower1_default = /*#__PURE__*/__webpack_require__.n(flower1);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/screenshots/flower2.png
var flower2 = __webpack_require__(59);
var flower2_default = /*#__PURE__*/__webpack_require__.n(flower2);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/screenshots/flower3.png
var flower3 = __webpack_require__(60);
var flower3_default = /*#__PURE__*/__webpack_require__.n(flower3);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/sati_app_logo.jpg
var sati_app_logo = __webpack_require__(61);
var sati_app_logo_default = /*#__PURE__*/__webpack_require__.n(sati_app_logo);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/how/How.js








function _templateObject32() {
  var data = taggedTemplateLiteral_default()(["\n    margin-top: 10px;\n    margin-bottom: 30px;\n  "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.9) translateX(27vw);\n  "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.95) translateX(11vw);\n  "]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.9) translate(6vw, -28px);\n    filter: none;\n  "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.95) translate(0, -28px);\n  "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.9) translate(49.8vw, 28px);\n    filter: none;\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.95) translate(22vw, 28px);\n  "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(1) rotateY(0) translateX(42vw);\n  "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.95) rotateY(0) translateX(20vw);\n  "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.93) rotateY(8deg) translateX(7vw);\n  "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.8) rotateY(9deg) translateX(-1.6vw);\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translateX(42vw);\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translateX(23vw);\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function How_templateObject19() {
  var data = taggedTemplateLiteral_default()(["\n    filter: none;\n    transform: scale(0.88) translateX(23vw);\n  "]);

  How_templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function How_templateObject18() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.88) translateX(13vw);\n  "]);

  How_templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function How_templateObject17() {
  var data = taggedTemplateLiteral_default()(["\n    filter: none;\n    transform: scale(0.77) translateX(2vw);\n  "]);

  How_templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function How_templateObject16() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.77) translateX(", ");\n  "]);

  How_templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function How_templateObject15() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 12px;\n  "]);

  How_templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function How_templateObject14() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 12px;\n  "]);

  How_templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function How_templateObject13() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 13px;\n  "]);

  How_templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function How_templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n    width: 14px;\n    height: 14px;\n  "]);

  How_templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function How_templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n      margin-bottom: 0;\n    "]);

  How_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function How_templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n    width: 90vw;\n    margin-left: 5vw;\n  "]);

  How_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function How_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    width: 46vw;\n    margin-left: ", ";\n  "]);

  How_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function How_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n    width: 50vw;\n    height: 108.2vw;\n  "]);

  How_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function How_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    width: 25vw;\n    height: 54.1vw;\n  "]);

  How_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function How_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    padding-bottom: 50px;\n  "]);

  How_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function How_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: justify;\n    padding: 0 ", ";\n  "]);

  How_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function How_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: center;\n    padding: ", " calc(", " * 2);\n    margin-bottom: -3px;\n    margin-top: 0;\n    font-size: 30px;\n  "]);

  How_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function How_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n          order: 1;\n        "]);

  How_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function How_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n          order: 2;\n        "]);

  How_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function How_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n      margin-bottom: 100px;\n    "]);

  How_templateObject = function _templateObject() {
    return data;
  };

  return data;
}















var How_Notification =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Notification, _PureComponent);

  function Notification() {
    classCallCheck_default()(this, Notification);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Notification).apply(this, arguments));
  }

  createClass_default()(Notification, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(NotificationCont, null, external_react_default.a.createElement(atoms_Flex, {
        alignItems: "center"
      }, external_react_default.a.createElement(atoms_Box, {
        grow: 0,
        shrink: 0
      }, external_react_default.a.createElement(NotificationIcon, null)), external_react_default.a.createElement(atoms_Box, {
        grow: 1
      }, external_react_default.a.createElement(NotificationTitle, null, "Sati start")), external_react_default.a.createElement(atoms_Box, null, external_react_default.a.createElement(NotificationTime, null, "now"))), external_react_default.a.createElement(NotificationText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut cumque debitis ducimus eaque et ex facere itaque, nesciunt nisi numquam odit optio, praesentium, quae quos sed sunt veniam voluptatibus."));
    }
  }]);

  return Notification;
}(external_react_["PureComponent"]);

var How_How =
/*#__PURE__*/
function (_PureComponent2) {
  inherits_default()(How, _PureComponent2);

  function How() {
    classCallCheck_default()(this, How);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(How).apply(this, arguments));
  }

  createClass_default()(How, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(How_Cont, null, external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(How_SectionHeading, null, t('How.title')), external_react_default.a.createElement(ItemsFlex, null, external_react_default.a.createElement(atoms_Box, {
        md: 7,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(MainView1, {
        source: screenshot1_default.a
      }), external_react_default.a.createElement(MainView2, {
        source: screenshot2_default.a
      }), external_react_default.a.createElement(MainView3, {
        source: screenshot3_default.a
      })), external_react_default.a.createElement(atoms_Box, {
        md: 5,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(ItemHeading, null, t('How.box-1.title')), external_react_default.a.createElement(ItemText, null, t('How.box-1.text-1')), external_react_default.a.createElement(ItemText, null, t('How.box-1.text-2')))), external_react_default.a.createElement(ItemsFlex, {
        reverseMobile: true
      }, external_react_default.a.createElement(atoms_Box, {
        md: 5,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(ItemHeading, {
        right: true
      }, t('How.box-2.title')), external_react_default.a.createElement(ItemText, {
        right: true
      }, t('How.box-2.text-1')), external_react_default.a.createElement(ItemText, {
        right: true
      }, t('How.box-2.text-2'))), external_react_default.a.createElement(atoms_Box, {
        md: 7,
        sm: 6,
        xs: 12,
        padded: true,
        style: {
          perspective: '600px'
        }
      }, external_react_default.a.createElement(TextScreen1, {
        source: screenshot4_default.a
      }), external_react_default.a.createElement(TextScreen2, {
        source: screenshot5_default.a
      }))), external_react_default.a.createElement(ItemsFlex, null, external_react_default.a.createElement(atoms_Box, {
        md: 7,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(How_Notification, null), external_react_default.a.createElement(How_Notification, null), external_react_default.a.createElement(How_Notification, null)), external_react_default.a.createElement(atoms_Box, {
        md: 5,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(ItemHeading, null, t('How.box-3.title')), external_react_default.a.createElement(ItemText, null, t('How.box-3.text-1')))), external_react_default.a.createElement(ItemsFlex, {
        reverseMobile: true
      }, external_react_default.a.createElement(atoms_Box, {
        md: 5,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(ItemHeading, {
        right: true
      }, t('How.box-4.title')), external_react_default.a.createElement(ItemText, {
        right: true
      }, t('How.box-4.text-1')), external_react_default.a.createElement(ItemText, {
        right: true
      }, t('How.box-4.text-2'))), external_react_default.a.createElement(atoms_Box, {
        md: 7,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(FlowerScreen2, {
        source: flower3_default.a
      }), external_react_default.a.createElement(FlowerScreen3, {
        source: flower1_default.a
      }), external_react_default.a.createElement(FlowerScreen1, {
        source: flower2_default.a
      })))));
    }
  }]);

  return How;
}(external_react_["PureComponent"]);

var ItemsFlex = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Flex, extends_default()({
    alignItems: "center",
    grid: true
  }, p));
}).withConfig({
  displayName: "How__ItemsFlex",
  componentId: "sc-18lqjty-0"
})(["&:not(:last-child){", "}", ""], function (p) {
  return p.theme.max('sm')(How_templateObject());
}, function (p) {
  return p.reverseMobile && Object(external_styled_components_["css"])(["> div{&:nth-child(1){", "}&:nth-child(1){", "}}"], p.theme.max('sm')(How_templateObject2()), p.theme.max('sm')(How_templateObject3()));
});
var ItemHeading = external_styled_components_default.a.h3.withConfig({
  displayName: "How__ItemHeading",
  componentId: "sc-18lqjty-1"
})(["color:", ";font-weight:200;font-size:42px;margin-bottom:28px;margin-top:-30px;text-align:", ";", ""], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.right ? 'right' : 'left';
}, function (p) {
  return p.theme.max('sm')(How_templateObject4(), p.theme.general.mobilePadding, p.theme.general.mobilePadding);
});
var ItemText = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "How__ItemText",
  componentId: "sc-18lqjty-2"
})(["text-align:", ";margin-bottom:0;margin-top:0;", ""], function (p) {
  return p.right ? 'right' : 'left';
}, function (p) {
  return p.theme.max('sm')(How_templateObject5(), p.theme.general.mobilePadding);
});
var How_Cont = external_styled_components_default.a.div.withConfig({
  displayName: "How__Cont",
  componentId: "sc-18lqjty-3"
})(["position:relative;background:white;z-index:10;padding-bottom:70px;", ""], function (p) {
  return p.theme.max('sm')(How_templateObject6());
});
var Screen = external_styled_components_default.a.div.withConfig({
  displayName: "How__Screen",
  componentId: "sc-18lqjty-4"
})(["height:500px;width:231px;border-radius:20px;box-shadow:10px 10px 30px rgba(0,0,0,.2);transform-style:preserve-3d;background-image:url(", ");background-size:cover;", " ", ""], function (p) {
  return p.source;
}, function (p) {
  return p.theme.between('sm', 'md')(How_templateObject7());
}, function (p) {
  return p.theme.max('sm')(How_templateObject8());
});
var NotificationCont = external_styled_components_default.a.div.withConfig({
  displayName: "How__NotificationCont",
  componentId: "sc-18lqjty-5"
})(["width:400px;padding:14px;background:#eeeeee;border-radius:16px;margin-bottom:18px;margin-left:40px;box-shadow:7px 7px 20px rgba(0,0,0,.2);&:nth-child(2){opacity:0.75;}&:nth-child(3){opacity:0.5;}", " ", " &:last-child{", "}"], function (p) {
  return p.theme.between('sm', 'md')(How_templateObject9(), function (p) {
    return p.theme.general.mobilePadding;
  });
}, function (p) {
  return p.theme.max('sm')(How_templateObject10());
}, function (p) {
  return p.theme.max('sm')(How_templateObject11());
});
var NotificationIcon = external_styled_components_default.a.div.withConfig({
  displayName: "How__NotificationIcon",
  componentId: "sc-18lqjty-6"
})(["width:20px;height:20px;border-radius:5px;background-image:url(", ");background-size:cover;", ""], sati_app_logo_default.a, function (p) {
  return p.theme.max('sm')(How_templateObject12());
});
var NotificationTitle = external_styled_components_default.a.h5.withConfig({
  displayName: "How__NotificationTitle",
  componentId: "sc-18lqjty-7"
})(["margin:0;font-weight:200;font-size:14px;padding-left:10px;text-transform:uppercase;color:", ";", ""], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.max('sm')(How_templateObject13());
});
var NotificationTime = external_styled_components_default.a.p.withConfig({
  displayName: "How__NotificationTime",
  componentId: "sc-18lqjty-8"
})(["font-size:14px;margin:0;color:", ";", ""], function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.max('sm')(How_templateObject14());
});
var NotificationText = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "How__NotificationText",
  componentId: "sc-18lqjty-9"
})(["font-size:14px;margin:7px 0 0;", ""], function (p) {
  return p.theme.max('sm')(How_templateObject15());
});
var MainView1 = external_styled_components_default()(Screen).withConfig({
  displayName: "How__MainView1",
  componentId: "sc-18lqjty-10"
})(["position:absolute;transform:scale(0.77);filter:blur(0.66px);", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(How_templateObject16(), p.theme.general.mobilePadding);
}, function (p) {
  return p.theme.max('sm')(How_templateObject17());
});
var MainView2 = external_styled_components_default()(Screen).withConfig({
  displayName: "How__MainView2",
  componentId: "sc-18lqjty-11"
})(["position:absolute;transform:scale(0.88) translateX(136px);filter:blur(0.33px);", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(How_templateObject18());
}, function (p) {
  return p.theme.max('sm')(How_templateObject19());
});
var MainView3 = external_styled_components_default()(Screen).withConfig({
  displayName: "How__MainView3",
  componentId: "sc-18lqjty-12"
})(["transform:translateX(258px);", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(_templateObject20());
}, function (p) {
  return p.theme.max('sm')(_templateObject21());
});
var TextScreen1 = external_styled_components_default()(Screen).withConfig({
  displayName: "How__TextScreen1",
  componentId: "sc-18lqjty-13"
})(["position:absolute;transform:scale(0.8) rotateY(9deg) translateX(100px);", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(_templateObject22());
}, function (p) {
  return p.theme.max('sm')(_templateObject23());
});
var TextScreen2 = external_styled_components_default()(Screen).withConfig({
  displayName: "How__TextScreen2",
  componentId: "sc-18lqjty-14"
})(["transform:scale(0.95) rotateY(-2deg) translateX(270px);", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(_templateObject24());
}, function (p) {
  return p.theme.max('sm')(_templateObject25());
});
var FlowerScreen1 = external_styled_components_default()(Screen).withConfig({
  displayName: "How__FlowerScreen1",
  componentId: "sc-18lqjty-15"
})(["transform:scale(0.85) translate(370px,28px);filter:blur(0.33px);", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(_templateObject26());
}, function (p) {
  return p.theme.max('sm')(_templateObject27());
});
var FlowerScreen2 = external_styled_components_default()(Screen).withConfig({
  displayName: "How__FlowerScreen2",
  componentId: "sc-18lqjty-16"
})(["position:absolute;transform:scale(0.85) translate(95px,-28px);filter:blur(0.66px);", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(_templateObject28());
}, function (p) {
  return p.theme.max('sm')(_templateObject29());
});
var FlowerScreen3 = external_styled_components_default()(Screen).withConfig({
  displayName: "How__FlowerScreen3",
  componentId: "sc-18lqjty-17"
})(["position:absolute;transform:scale(0.85) translateX(228px);", " ", ""], function (p) {
  return p.theme.between('sm', 'md')(_templateObject30());
}, function (p) {
  return p.theme.max('sm')(_templateObject31());
});
var How_SectionHeading = external_styled_components_default()(atoms_SectionHeading).withConfig({
  displayName: "How__SectionHeading",
  componentId: "sc-18lqjty-18"
})(["margin-top:50px;margin-bottom:100px;", ""], function (p) {
  return p.theme.max('sm')(_templateObject32());
});
/* harmony default export */ var how_How = (Object(external_react_i18next_["withTranslation"])()(How_How));
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/bg_inside.jpg
var bg_inside = __webpack_require__(62);
var bg_inside_default = /*#__PURE__*/__webpack_require__.n(bg_inside);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/icons/meditation.png
var meditation = __webpack_require__(63);
var meditation_default = /*#__PURE__*/__webpack_require__.n(meditation);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/icons/brain.png
var brain = __webpack_require__(64);
var brain_default = /*#__PURE__*/__webpack_require__.n(brain);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/icons/books.png
var books = __webpack_require__(65);
var books_default = /*#__PURE__*/__webpack_require__.n(books);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/icons/buddhism.png
var buddhism = __webpack_require__(66);
var buddhism_default = /*#__PURE__*/__webpack_require__.n(buddhism);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/wave2.png
var wave2 = __webpack_require__(67);
var wave2_default = /*#__PURE__*/__webpack_require__.n(wave2);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/inside/Inside.js







function Inside_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: justify;\n    padding: 0 ", ";\n  "]);

  Inside_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Inside_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: center;\n    font-size: 18px;\n    padding: 0 ", ";\n  "]);

  Inside_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Inside_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    top: 0;\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n  "]);

  Inside_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Inside_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    padding-bottom: 30px;\n  "]);

  Inside_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Inside_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    background-attachment: fixed;\n    background-size: 120%;\n  "]);

  Inside_templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var Inside_Inside =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Inside, _PureComponent);

  function Inside() {
    classCallCheck_default()(this, Inside);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Inside).apply(this, arguments));
  }

  createClass_default()(Inside, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(Inside_Cont, null, external_react_default.a.createElement(TopWave, null), external_react_default.a.createElement(BottomWave, null), external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(Inside_SectionHeading, null, t('Inside.title')), external_react_default.a.createElement(atoms_Flex, {
        grid: true
      }, external_react_default.a.createElement(atoms_Box, {
        md: 6,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(atoms_Flex, {
        grid: true
      }, external_react_default.a.createElement(atoms_Box, {
        md: 2,
        sm: 12,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Inside_Icon, {
        source: meditation_default.a
      })), external_react_default.a.createElement(atoms_Box, {
        md: 10,
        sm: 12,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Inside_Heading, null, t('Inside.box-1.title')), external_react_default.a.createElement(Inside_Desc, null, t('Inside.box-1.description'))))), external_react_default.a.createElement(atoms_Box, {
        md: 6,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(atoms_Flex, {
        grid: true
      }, external_react_default.a.createElement(atoms_Box, {
        md: 2,
        sm: 12,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Inside_Icon, {
        source: buddhism_default.a
      })), external_react_default.a.createElement(atoms_Box, {
        md: 10,
        sm: 12,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Inside_Heading, null, t('Inside.box-2.title')), external_react_default.a.createElement(Inside_Desc, null, t('Inside.box-1.description')))))), external_react_default.a.createElement(atoms_Flex, {
        grid: true
      }, external_react_default.a.createElement(atoms_Box, {
        md: 6,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(atoms_Flex, {
        grid: true
      }, external_react_default.a.createElement(atoms_Box, {
        md: 2,
        sm: 12,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Inside_Icon, {
        source: books_default.a
      })), external_react_default.a.createElement(atoms_Box, {
        md: 10,
        sm: 12,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Inside_Heading, null, t('Inside.box-3.title')), external_react_default.a.createElement(Inside_Desc, null, t('Inside.box-1.description'))))), external_react_default.a.createElement(atoms_Box, {
        md: 6,
        sm: 6,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(atoms_Flex, {
        grid: true
      }, external_react_default.a.createElement(atoms_Box, {
        md: 2,
        sm: 12,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Inside_Icon, {
        source: brain_default.a
      })), external_react_default.a.createElement(atoms_Box, {
        md: 10,
        sm: 12,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Inside_Heading, null, t('Inside.box-4.title')), external_react_default.a.createElement(Inside_Desc, null, t('Inside.box-1.description'))))))));
    }
  }]);

  return Inside;
}(external_react_["PureComponent"]);

var Inside_Cont = external_styled_components_default.a.div.withConfig({
  displayName: "Inside__Cont",
  componentId: "sc-5gxyww-0"
})(["position:relative;padding:70px 0;background:url(", ");background-size:cover;overflow:hidden;", " ", ""], bg_inside_default.a, function (p) {
  return p.theme.min('md')(Inside_templateObject());
}, function (p) {
  return p.theme.max('sm')(Inside_templateObject2());
});
var TopWave = external_styled_components_default.a.div.withConfig({
  displayName: "Inside__TopWave",
  componentId: "sc-5gxyww-1"
})(["position:absolute;width:100%;height:50px;top:0;left:0;background-image:url(", ");background-size:103% 25%;background-repeat:no-repeat;"], wave2_default.a);
var BottomWave = external_styled_components_default.a.div.withConfig({
  displayName: "Inside__BottomWave",
  componentId: "sc-5gxyww-2"
})(["position:absolute;width:120%;height:50px;bottom:0;left:-5%;background-image:url(", ");background-size:103% 35%;background-position:bottom;background-repeat:no-repeat;"], top_wave_default.a);
var Inside_Icon = external_styled_components_default.a.div.withConfig({
  displayName: "Inside__Icon",
  componentId: "sc-5gxyww-3"
})(["position:relative;top:22px;width:60px;height:60px;background-image:url(", ");background-size:cover;", ""], function (p) {
  return p.source;
}, function (p) {
  return p.theme.max('md')(Inside_templateObject3());
});
var Inside_SectionHeading = external_styled_components_default()(atoms_SectionHeading).withConfig({
  displayName: "Inside__SectionHeading",
  componentId: "sc-5gxyww-4"
})(["color:white;margin-top:20px;margin-bottom:30px;"]);
var Inside_Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "Inside__Heading",
  componentId: "sc-5gxyww-5"
})(["color:white;font-weight:800;font-size:20px;margin-bottom:10px;", ""], function (p) {
  return p.theme.max('md')(Inside_templateObject4(), p.theme.general.mobilePadding);
});
var Inside_Desc = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Inside__Desc",
  componentId: "sc-5gxyww-6"
})(["color:white;margin-bottom:40px;", ""], function (p) {
  return p.theme.max('md')(Inside_templateObject5(), p.theme.general.mobilePadding);
});
/* harmony default export */ var inside_Inside = (Object(external_react_i18next_["withTranslation"])()(Inside_Inside));
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/advantages/Advantages.js








function Advantages_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    position: absolute;\n    top: -30px;\n    width: 220px;\n    padding-left: 0 !important;\n    font-size: 220px;\n    z-index: -1;\n    padding-top: 20px;\n  "]);

  Advantages_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Advantages_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    left: ", ";\n  "]);

  Advantages_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Advantages_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: justify;\n    padding: 0 ", ";\n  "]);

  Advantages_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Advantages_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    padding-left: 40px;\n  "]);

  Advantages_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Advantages_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n      width: 0;\n    "]);

  Advantages_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Advantages_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: center;\n    padding: 0 ", ";\n  "]);

  Advantages_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Advantages_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    padding-left: 40px;\n  "]);

  Advantages_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Advantages_Advantages =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Advantages, _PureComponent);

  function Advantages() {
    classCallCheck_default()(this, Advantages);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Advantages).apply(this, arguments));
  }

  createClass_default()(Advantages, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(Advantages_Cont, null, external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(atoms_SectionHeading, null, t('Advantages.title')), external_react_default.a.createElement(ItemFlex, null, external_react_default.a.createElement(atoms_Box, {
        md: 1,
        sm: 1,
        xs: 0
      }, external_react_default.a.createElement(NumberCont, {
        isOne: true
      }, "1")), external_react_default.a.createElement(atoms_Box, {
        md: 11,
        sm: 11,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Advantages_Heading, null, t('Advantages.box-1.title')), external_react_default.a.createElement(Advantages_Desc, null, t('Advantages.box-1.description')))), external_react_default.a.createElement(ItemFlex, null, external_react_default.a.createElement(atoms_Box, {
        md: 1,
        sm: 1,
        xs: 0
      }, external_react_default.a.createElement(NumberCont, null, "2")), external_react_default.a.createElement(atoms_Box, {
        md: 11,
        sm: 11,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Advantages_Heading, null, t('Advantages.box-2.title')), external_react_default.a.createElement(Advantages_Desc, null, t('Advantages.box-2.description')))), external_react_default.a.createElement(ItemFlex, null, external_react_default.a.createElement(atoms_Box, {
        md: 1,
        sm: 1,
        xs: 0
      }, external_react_default.a.createElement(NumberCont, null, "3")), external_react_default.a.createElement(atoms_Box, {
        md: 11,
        sm: 11,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Advantages_Heading, null, t('Advantages.box-3.title')), external_react_default.a.createElement(Advantages_Desc, null, t('Advantages.box-3.description')))), external_react_default.a.createElement(ItemFlex, null, external_react_default.a.createElement(atoms_Box, {
        md: 1,
        sm: 1,
        xs: 0
      }, external_react_default.a.createElement(NumberCont, null, "4")), external_react_default.a.createElement(atoms_Box, {
        md: 11,
        sm: 11,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(Advantages_Heading, null, t('Advantages.box-4.title')), external_react_default.a.createElement(Advantages_Desc, null, t('Advantages.box-4.description'))))));
    }
  }]);

  return Advantages;
}(external_react_["PureComponent"]);

var Advantages_Cont = external_styled_components_default.a.section.withConfig({
  displayName: "Advantages__Cont",
  componentId: "zuvi60-0"
})(["padding:50px 0 10px;"]);
var Advantages_Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "Advantages__Heading",
  componentId: "zuvi60-1"
})(["color:", ";font-weight:700;font-size:20px;margin-bottom:0;padding-left:12px;", " ", ""], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.between('sm', 'md')(Advantages_templateObject());
}, function (p) {
  return p.theme.max('sm')(Advantages_templateObject2(), function (p) {
    return p.theme.general.mobilePadding;
  });
});
var ItemFlex = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Flex, extends_default()({
    alignItems: "center",
    grid: true
  }, p));
}).withConfig({
  displayName: "Advantages__ItemFlex",
  componentId: "zuvi60-2"
})(["position:relative;&:nth-child(1){", "}"], function (p) {
  return p.theme.max('sm')(Advantages_templateObject3());
});
var Advantages_Desc = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Advantages__Desc",
  componentId: "zuvi60-3"
})(["color:", ";margin-top:10px;margin-bottom:40px;padding-left:12px;", " ", ""], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.between('sm', 'md')(Advantages_templateObject4());
}, function (p) {
  return p.theme.max('sm')(Advantages_templateObject5(), function (p) {
    return p.theme.general.mobilePadding;
  });
});
var NumberCont = external_styled_components_default.a.p.withConfig({
  displayName: "Advantages__NumberCont",
  componentId: "zuvi60-4"
})(["width:80px;overflow:hidden;height:170px;font-size:170px;font-weight:800;line-height:150px;padding-top:8px;margin:0;color:", ";opacity:0.5;padding-left:", ";", " ", ""], function (p) {
  return p.theme.colors.grays.light;
}, function (p) {
  return p.isOne ? '33px' : 0;
}, function (p) {
  return p.theme.between('sm', 'md')(Advantages_templateObject6(), function (p) {
    return p.theme.general.mobilePadding;
  });
}, function (p) {
  return p.theme.max('sm')(Advantages_templateObject7());
});
/* harmony default export */ var advantages_Advantages = (Object(external_react_i18next_["withTranslation"])()(Advantages_Advantages));
// EXTERNAL MODULE: external "react-compare-image"
var external_react_compare_image_ = __webpack_require__(68);
var external_react_compare_image_default = /*#__PURE__*/__webpack_require__.n(external_react_compare_image_);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/positive_brain.png
var positive_brain = __webpack_require__(69);
var positive_brain_default = /*#__PURE__*/__webpack_require__.n(positive_brain);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/negative_brain.png
var negative_brain = __webpack_require__(70);
var negative_brain_default = /*#__PURE__*/__webpack_require__.n(negative_brain);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/icons/sati_green.png
var sati_green = __webpack_require__(71);
var sati_green_default = /*#__PURE__*/__webpack_require__.n(sati_green);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/fits/Fits.js







function Fits_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 0 ", " 0 calc(", " * 2.6);\n  "]);

  Fits_templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Fits_Fits =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Fits, _PureComponent);

  function Fits() {
    classCallCheck_default()(this, Fits);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Fits).apply(this, arguments));
  }

  createClass_default()(Fits, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(Fits_Cont, null, external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(atoms_SectionHeading, null, t('Fits.title')), external_react_default.a.createElement(atoms_Flex, {
        alignItems: "center"
      }, external_react_default.a.createElement(atoms_Box, {
        md: 6
      }, external_react_default.a.createElement(Fits_List, null, external_react_default.a.createElement(Item, null, t('Fits.text-1')), external_react_default.a.createElement(Item, null, t('Fits.text-2')), external_react_default.a.createElement(Item, null, t('Fits.text-3')), external_react_default.a.createElement(Item, null, t('Fits.text-4')))), external_react_default.a.createElement(atoms_Box, {
        md: 6,
        hiddenSM: true,
        hiddenXS: true
      }, external_react_default.a.createElement(external_react_compare_image_default.a, {
        leftImage: positive_brain_default.a,
        rightImage: negative_brain_default.a
      })))));
    }
  }]);

  return Fits;
}(external_react_["PureComponent"]);

var Fits_Cont = external_styled_components_default.a.section.withConfig({
  displayName: "Fits__Cont",
  componentId: "orsyau-0"
})(["padding:20px 0;"]);
var Fits_List = external_styled_components_default.a.ul.withConfig({
  displayName: "Fits__List",
  componentId: "orsyau-1"
})(["list-style:none;", ""], function (p) {
  return p.theme.max('sm')(Fits_templateObject(), function (p) {
    return p.theme.general.mobilePadding;
  }, function (p) {
    return p.theme.general.mobilePadding;
  });
});
var Item = external_styled_components_default.a.li.withConfig({
  displayName: "Fits__Item",
  componentId: "orsyau-2"
})(["position:relative;font-size:18px;color:", ";margin-bottom:20px;&:before{content:'';display:block;position:absolute;width:20px;height:20px;background-image:url(", ");background-size:cover;left:-36px;top:3px;}"], function (p) {
  return p.theme.colors.black;
}, sati_green_default.a);
/* harmony default export */ var fits_Fits = (Object(external_react_i18next_["withTranslation"])()(Fits_Fits));
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/aura.jpg
var aura = __webpack_require__(72);
var aura_default = /*#__PURE__*/__webpack_require__.n(aura);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/breathe.jpg
var breathe = __webpack_require__(73);
var breathe_default = /*#__PURE__*/__webpack_require__.n(breathe);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/budhify.jpg
var budhify = __webpack_require__(74);
var budhify_default = /*#__PURE__*/__webpack_require__.n(budhify);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/calm.jpg
var calm = __webpack_require__(75);
var calm_default = /*#__PURE__*/__webpack_require__.n(calm);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/headspace.jpg
var headspace = __webpack_require__(76);
var headspace_default = /*#__PURE__*/__webpack_require__.n(headspace);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/insight.jpg
var insight = __webpack_require__(77);
var insight_default = /*#__PURE__*/__webpack_require__.n(insight);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/meditopia.jpg
var meditopia = __webpack_require__(78);
var meditopia_default = /*#__PURE__*/__webpack_require__.n(meditopia);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/percent.jpg
var percent = __webpack_require__(79);
var percent_default = /*#__PURE__*/__webpack_require__.n(percent);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/app_icons/simple.jpg
var simple = __webpack_require__(80);
var simple_default = /*#__PURE__*/__webpack_require__.n(simple);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/nofit/NoFit.js








function NoFit_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    transform: none;\n  "]);

  NoFit_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function NoFit_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    > div {\n      &:nth-child(2) {\n        order: 1;\n        padding: 0 calc(", " + 15px);\n        margin-bottom: ", ";\n      }\n      &:nth-child(1) {\n        order: 2;\n      }\n    }\n  "]);

  NoFit_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function NoFit_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    width: calc((100vw - (", " * 4)) / 3);\n    height: calc((100vw - (", " * 4)) / 3);\n    margin: 0 0 ", " ", ";\n  "]);

  NoFit_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function NoFit_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: justify;\n    &:last-of-type {\n      margin-bottom: 30px;\n    }\n  "]);

  NoFit_templateObject = function _templateObject() {
    return data;
  };

  return data;
}















var NoFit_NoFit =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(NoFit, _PureComponent);

  function NoFit() {
    classCallCheck_default()(this, NoFit);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(NoFit).apply(this, arguments));
  }

  createClass_default()(NoFit, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(NoFit_Cont, null, external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(atoms_SectionHeading, null, t('NoFit.title')), external_react_default.a.createElement(FlexCont, null, external_react_default.a.createElement(atoms_Box, {
        md: 6,
        sm: 7,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(AppCont, null, external_react_default.a.createElement(AppIcon, {
        image: calm_default.a,
        href: "https://calm.com",
        target: "_blank"
      }), external_react_default.a.createElement(AppIcon, {
        image: headspace_default.a,
        href: "https://www.headspace.com",
        target: "_blank"
      }), external_react_default.a.createElement(AppIcon, {
        image: insight_default.a,
        href: "https://insighttimer.com/",
        target: "_blank"
      }), external_react_default.a.createElement(AppIcon, {
        image: aura_default.a,
        href: "https://www.aurahealth.io/",
        target: "_blank"
      }), external_react_default.a.createElement(AppIcon, {
        image: budhify_default.a,
        href: "https://buddhify.com/",
        target: "_blank"
      }), external_react_default.a.createElement(AppIcon, {
        image: breathe_default.a,
        href: "https://www.stopbreathethink.com/",
        target: "_blank"
      }), external_react_default.a.createElement(AppIcon, {
        image: simple_default.a,
        href: "https://try.simplehabit.com/",
        target: "_blank"
      }), external_react_default.a.createElement(AppIcon, {
        image: percent_default.a,
        href: "https://www.tenpercent.com/",
        target: "_blank"
      }), external_react_default.a.createElement(AppIcon, {
        image: meditopia_default.a,
        href: "https://meditopia.com/",
        target: "_blank"
      }))), external_react_default.a.createElement(atoms_Box, {
        md: 6,
        sm: 5,
        xs: 12,
        padded: true
      }, external_react_default.a.createElement(NoFit_Text, null, t('NoFit.text-1')), external_react_default.a.createElement(NoFit_Text, null, t('NoFit.text-2'))))));
    }
  }]);

  return NoFit;
}(external_react_["PureComponent"]);

var NoFit_Cont = external_styled_components_default.a.section.withConfig({
  displayName: "NoFit__Cont",
  componentId: "sc-1rjdr3u-0"
})(["padding:20px 0;overflow:hidden;"]);
var NoFit_Text = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "NoFit__Text",
  componentId: "sc-1rjdr3u-1"
})(["", ""], function (p) {
  return p.theme.max('sm')(NoFit_templateObject());
});
var AppIcon = external_styled_components_default.a.a.withConfig({
  displayName: "NoFit__AppIcon",
  componentId: "sc-1rjdr3u-2"
})(["display:block;width:100px;height:100px;border-radius:14px;margin:20px;background-image:url(", ");background-size:102%;background-position:center;box-shadow:0 0 30px rgba(0,0,0,0.1);cursor:pointer;transition:all .4s ease;", " &:hover{transform:scale(1.1);}"], function (p) {
  return p.image;
}, function (p) {
  return p.theme.max('sm')(NoFit_templateObject2(), p.theme.general.mobilePadding, p.theme.general.mobilePadding, p.theme.general.mobilePadding, p.theme.general.mobilePadding);
});
var FlexCont = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Flex, extends_default()({
    alignItems: "center",
    grid: true
  }, p));
}).withConfig({
  displayName: "NoFit__FlexCont",
  componentId: "sc-1rjdr3u-3"
})(["perspective:500px;", ""], function (p) {
  return p.theme.max('sm')(NoFit_templateObject3(), p.theme.general.mobilePadding, p.theme.general.mobilePadding);
});
var AppCont = external_styled_components_default.a.div.withConfig({
  displayName: "NoFit__AppCont",
  componentId: "sc-1rjdr3u-4"
})(["display:flex;flex-wrap:wrap;transform:translateX(-18px) scale(0.92) skewX(-7deg) rotateY(-11deg);", ""], function (p) {
  return p.theme.max('sm')(NoFit_templateObject4());
});
/* harmony default export */ var nofit_NoFit = (Object(external_react_i18next_["withTranslation"])()(NoFit_NoFit));
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/faq/Faq.js









function Faq_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    left: 7px;\n  "]);

  Faq_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Faq_Question =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Question, _PureComponent);

  function Question() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Question);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Question)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      expanded: !!_this.props.expanded
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleExpanded", function () {
      _this.setState(function (st) {
        return {
          expanded: !st.expanded
        };
      });
    });

    return _this;
  }

  createClass_default()(Question, [{
    key: "render",
    value: function render() {
      var expanded = this.state.expanded;
      return external_react_default.a.createElement(QuestionCont, null, external_react_default.a.createElement(QuestionButton, {
        onClick: this.toggleExpanded
      }, expanded ? external_react_default.a.createElement(AngleUp, null) : external_react_default.a.createElement(AngleDown, null)), external_react_default.a.createElement(QuestionTitle, {
        onClick: this.toggleExpanded
      }, this.props.title), expanded && external_react_default.a.createElement(QuestionText, null, this.props.children));
    }
  }]);

  return Question;
}(external_react_["PureComponent"]);

var Faq_Faq =
/*#__PURE__*/
function (_PureComponent2) {
  inherits_default()(Faq, _PureComponent2);

  function Faq() {
    classCallCheck_default()(this, Faq);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Faq).apply(this, arguments));
  }

  createClass_default()(Faq, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(Faq_Cont, null, external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(atoms_SectionHeading, null, t('Faq.title')), external_react_default.a.createElement(Faq_Question, {
        title: t('Faq.question-1.title'),
        expanded: true
      }, t('Faq.question-1.text')), external_react_default.a.createElement(Faq_Question, {
        title: t('Faq.question-2.title')
      }, t('Faq.question-2.text')), external_react_default.a.createElement(Faq_Question, {
        title: t('Faq.question-3.title')
      }, t('Faq.question-3.text')), external_react_default.a.createElement(Faq_Question, {
        title: t('Faq.question-4.title')
      }, t('Faq.question-4.text'))));
    }
  }]);

  return Faq;
}(external_react_["PureComponent"]);

var Faq_Cont = external_styled_components_default.a.div.withConfig({
  displayName: "Faq__Cont",
  componentId: "sc-1qr1dde-0"
})(["padding:20px 0;"]);
var QuestionCont = external_styled_components_default.a.div.withConfig({
  displayName: "Faq__QuestionCont",
  componentId: "sc-1qr1dde-1"
})(["position:relative;margin-bottom:30px;"]);
var QuestionTitle = external_styled_components_default.a.h4.withConfig({
  displayName: "Faq__QuestionTitle",
  componentId: "sc-1qr1dde-2"
})(["color:", ";font-size:20px;font-weight:700;margin-bottom:10px;padding-right:30px;padding-left:45px;cursor:pointer;&:hover{color:", ";}"], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.colors.primary;
});
var QuestionButton = external_styled_components_default.a.button.withConfig({
  displayName: "Faq__QuestionButton",
  componentId: "sc-1qr1dde-3"
})(["position:absolute;font-size:70px;background:transparent;padding:7px 0;border:0;cursor:pointer;", ""], function (p) {
  return p.theme.max('sm')(Faq_templateObject());
});
var QuestionText = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Faq__QuestionText",
  componentId: "sc-1qr1dde-4"
})(["margin-top:10px;padding-right:30px;padding-left:45px;"]);
var AngleUp = external_styled_components_default.a.div.withConfig({
  displayName: "Faq__AngleUp",
  componentId: "sc-1qr1dde-5"
})(["position:relative;top:0;left:9px;&:before{content:'';display:block;position:absolute;top:0;height:2px;width:14px;background:", ";transform:rotate(-45deg) translate(-6px);}&:after{content:'';display:block;position:absolute;top:0;height:2px;width:14px;background:", ";transform:rotate(45deg) translate(6px);}"], function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.primary;
});
var AngleDown = external_styled_components_default.a.div.withConfig({
  displayName: "Faq__AngleDown",
  componentId: "sc-1qr1dde-6"
})(["position:relative;top:8px;left:9px;&:before{content:'';display:block;position:absolute;top:0;height:2px;width:14px;background:", ";transform:rotate(45deg) translate(-6px);}&:after{content:'';display:block;position:absolute;top:0;height:2px;width:14px;background:", ";transform:rotate(-45deg) translate(6px);}"], function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.primary;
});
/* harmony default export */ var faq_Faq = (Object(external_react_i18next_["withTranslation"])()(Faq_Faq));
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/images/footer_b.jpg
var footer_b = __webpack_require__(81);
var footer_b_default = /*#__PURE__*/__webpack_require__.n(footer_b);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/components/cost/Cost.js







function Cost_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 0 ", ";\n    text-align: justify;\n  "]);

  Cost_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Cost_Cost =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Cost, _PureComponent);

  function Cost() {
    classCallCheck_default()(this, Cost);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Cost).apply(this, arguments));
  }

  createClass_default()(Cost, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return external_react_default.a.createElement(Cost_Cont, null, external_react_default.a.createElement(BottomBg, null), external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(Cost_SectionHeading, null, t('Cost.title')), external_react_default.a.createElement(atoms_Flex, null, external_react_default.a.createElement(atoms_Box, {
        md: 10,
        mdOffset: 1
      }, external_react_default.a.createElement(Cost_Desc, {
        dangerouslySetInnerHTML: {
          __html: t('Cost.description')
        }
      })))));
    }
  }]);

  return Cost;
}(external_react_["PureComponent"]);

var Cost_SectionHeading = external_styled_components_default()(atoms_SectionHeading).withConfig({
  displayName: "Cost__SectionHeading",
  componentId: "j2wdpy-0"
})(["color:white;"]);
var Cost_Cont = external_styled_components_default.a.div.withConfig({
  displayName: "Cost__Cont",
  componentId: "j2wdpy-1"
})(["position:relative;padding:20px 0;background-size:cover;padding-bottom:200px;"]);
var BottomBg = external_styled_components_default.a.div.withConfig({
  displayName: "Cost__BottomBg",
  componentId: "j2wdpy-2"
})(["position:absolute;width:100vw;height:220vh;bottom:0;left:0;background-image:url(", ");background-size:cover;z-index:-1;"], footer_b_default.a);
var Cost_Desc = external_styled_components_default()(atoms_Text).withConfig({
  displayName: "Cost__Desc",
  componentId: "j2wdpy-3"
})(["font-size:22px;text-align:center;color:white;", ""], function (p) {
  return p.theme.max('sm')(Cost_templateObject(), p.theme.general.mobilePadding);
});
/* harmony default export */ var cost_Cost = (Object(external_react_i18next_["withTranslation"])()(Cost_Cost));
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/pages/Landing.js


















 // import Why from '../components/why/Why';
// import FirstStep from '../components/firststep/FirstStep';
// import Ask from '../components/ask/Ask';
// import Question from '../components/question/Question';
// import Bottom from '../components/bottom/Bottom';
// ReactGA.initialize('');
// ReactGA.pageview(window.location.pathname);

var Landing_Landing =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Landing, _PureComponent);

  function Landing() {
    classCallCheck_default()(this, Landing);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Landing).apply(this, arguments));
  }

  createClass_default()(Landing, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_scroll_parallax_["ParallaxProvider"], null, external_react_default.a.createElement(top_Top, null), external_react_default.a.createElement(marketing_Marketing, null), external_react_default.a.createElement(how_How, null), external_react_default.a.createElement(inside_Inside, null), external_react_default.a.createElement(advantages_Advantages, null), external_react_default.a.createElement(fits_Fits, null), external_react_default.a.createElement(nofit_NoFit, null), external_react_default.a.createElement(faq_Faq, null), external_react_default.a.createElement(cost_Cost, null));
    }
  }]);

  return Landing;
}(external_react_["PureComponent"]);

/* harmony default export */ var pages_Landing = (Object(external_react_i18next_["withTranslation"])()(Landing_Landing));
// EXTERNAL MODULE: external "styled-normalize"
var external_styled_normalize_ = __webpack_require__(82);
var external_styled_normalize_default = /*#__PURE__*/__webpack_require__.n(external_styled_normalize_);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-Thin.ttf
var TT_Norms_Pro_Thin = __webpack_require__(83);
var TT_Norms_Pro_Thin_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Thin);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-ExtraLight.ttf
var TT_Norms_Pro_ExtraLight = __webpack_require__(84);
var TT_Norms_Pro_ExtraLight_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_ExtraLight);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-Light.ttf
var TT_Norms_Pro_Light = __webpack_require__(85);
var TT_Norms_Pro_Light_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Light);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-Normal.ttf
var TT_Norms_Pro_Normal = __webpack_require__(86);
var TT_Norms_Pro_Normal_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Normal);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-Medium.ttf
var TT_Norms_Pro_Medium = __webpack_require__(87);
var TT_Norms_Pro_Medium_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Medium);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-DemiBold.ttf
var TT_Norms_Pro_DemiBold = __webpack_require__(88);
var TT_Norms_Pro_DemiBold_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_DemiBold);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-Bold.ttf
var TT_Norms_Pro_Bold = __webpack_require__(89);
var TT_Norms_Pro_Bold_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Bold);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-ExtraBold.ttf
var TT_Norms_Pro_ExtraBold = __webpack_require__(90);
var TT_Norms_Pro_ExtraBold_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_ExtraBold);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/assets/fonts/TT-Norms-Pro-Black.ttf
var TT_Norms_Pro_Black = __webpack_require__(91);
var TT_Norms_Pro_Black_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Black);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/globalStyles.js


function globalStyles_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n      overflow: hidden;\n      width: 100vw;\n    "]);

  globalStyles_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function globalStyles_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  ", "\n  * {\n    box-sizing: border-box;\n    outline: none !important;\n    -webkit-font-smoothing: antialiased;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n  #root {\n    ", "\n  }\n  ::selection {\n    background: #fffe90;\n  }\n  *:not(input, textarea) {\n    user-select: none;\n    -moz-user-select: -moz-none;\n    -webkit-user-select: none;\n  }\n  body {\n    font-family: ", ";\n    line-height: ", ";\n    font-weight: normal;\n  }\n  p {\n    color: ", ";\n    font-size: ", ";\n  }\n  .reorder-wrapper-item {\n    position: relative;\n    transition: top 1s ease-in;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 100;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 200;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 300;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 400;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 500;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 700;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 800;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'TT';\n    src: url(", ");\n    font-weight: 900;\n    font-style: normal;\n  }\n"]);

  globalStyles_templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(globalStyles_templateObject(), external_styled_normalize_default.a, function (p) {
  return p.theme.max('md')(globalStyles_templateObject2());
}, function (p) {
  return p.theme.font.family.text;
}, function (p) {
  return p.theme.font.lineHeight.normal;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.font.size.base;
}, TT_Norms_Pro_Thin_default.a, TT_Norms_Pro_ExtraLight_default.a, TT_Norms_Pro_Light_default.a, TT_Norms_Pro_Normal_default.a, TT_Norms_Pro_Medium_default.a, TT_Norms_Pro_DemiBold_default.a, TT_Norms_Pro_Bold_default.a, TT_Norms_Pro_ExtraBold_default.a, TT_Norms_Pro_Black_default.a);
/* harmony default export */ var globalStyles = (GlobalStyle);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/ui/layouts/AppRoot.js











var AppRoot_AppRoot =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(AppRoot, _PureComponent);

  function AppRoot() {
    classCallCheck_default()(this, AppRoot);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(AppRoot).apply(this, arguments));
  }

  createClass_default()(AppRoot, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: ui_theme
      }, external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(globalStyles, null), external_react_default.a.createElement(pages_Landing, null)));
    }
  }]);

  return AppRoot;
}(external_react_["PureComponent"]);

/* harmony default export */ var layouts_AppRoot = (AppRoot_AppRoot);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/App.js

 //

 // Any routes that start with 'dynamic' will be treated as non-static routes

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(layouts_AppRoot, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(16);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/GooglePlay.54d0dc20.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/AppStore.2c6e596e.png";

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_user_projects_sati_one_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _Users_user_projects_sati_one_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_projects_sati_one_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/Users/user/projects/sati_one_landing/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_user_projects_sati_one_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/Users/user/projects/sati_one_landing/node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/user/projects/sati_one_landing/node_modules/react-static-plugin-favicons",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/user/projects/sati_one_landing",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_user_projects_sati_one_landing_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _Users_user_projects_sati_one_landing_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_user_projects_sati_one_landing_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);




Object(_Users_user_projects_sati_one_landing_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_user_projects_sati_one_landing_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 35, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404': t_0
}); // Not Found Template

var notFoundTemplate = "/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(26);

var _router = __webpack_require__(94);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-flags-select");

/***/ }),
/* 42 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Top\":{\"title\":\"40-day meditation <br/>retreat in your pocket\",\"description\":\"Your first step towards mindfulness!\"},\"Marketing\":{\"description\":\"Мы подготовили для вас самый полный <strong>40-дневный курс осознанности</strong>, основанный на слиянии восточных знаний с современной нейронаукой. Всего <strong>10-20 минут в день</strong>, в течение сорока дней, и вы:\",\"box-1\":{\"title\":\"Will learn how to meditate right\"},\"box-2\":{\"title\":\"Understand the essentials of buddhism\"},\"box-3\":{\"title\":\"Bring mindfulness to your normal life\"}},\"How\":{\"title\":\"How the app works?\",\"box-1\":{\"title\":\"Daily audio sessions\",\"text-1\":\"Each session starts with a theoretical part, and then we get to guided meditation practice\",\"text-2\":\"We'll start from approximately 10 minutes, and reach 20-30 minutes in the end of the course\"},\"box-2\":{\"title\":\"Small assessments\",\"text-1\":\"During the day, you will need to complete a tiny assessments and write that down. This can be just an exploration, or something to think about\",\"text-2\":\"Only passing the knowledge through yourself, you can get the real learning.\"},\"box-3\":{\"title\":\"Smart notifications\",\"text-1\":\"During the day, you will get an unobtrusive notifications, that will help you integrate the knowledge to your life\"},\"box-4\":{\"title\":\"Track your minds condition\",\"text-1\":\"As you meditate, your Flower of life will be harmonic, if you pass the days, it will get dissolved\",\"text-2\":\"Algorithm is based on the real research and reflects the true state of your mind\"}},\"Inside\":{\"title\":\"Whats inside the course?\",\"box-1\":{\"title\":\"Most effective authentic meditation techniques\",\"description\":\"We extracted the best from the teachings of various eastern practicioners, such as Tick Naht Ton, Dogen, Ekhart Tolle etc\"},\"box-2\":{\"title\":\"Essentials of buddhist philosophy, free of cosmology and religion\",\"description\":\"We translate the core of buddhism as a logical and harmonic philosophical system. We extracted the main and overlapping from the top schools, like zen, theravada and mahayana.\"},\"box-3\":{\"title\":\"Effective scientific learning methods\",\"description\":\"Course is structured with respect to the recent advances in the neuroscience of learning. Methods used guarantee, that our course is the shortest path to mindful living\"},\"box-4\":{\"title\":\"Precise neuroscientific basis of every aspect of knowledge\",\"description\":\"Our course is a unique junction of advanced neuroscience and ancient knowledge. Every aspect of buddhism is backed by neuroiscience, and you see the knowledge from various angles\"}},\"Advantages\":{\"title\":\"\",\"box-1\":{\"title\":\"Authentic techniques, no marketing catches\",\"description\":\"Forget about useless meditations like meditatio of sleep, relaxation etc. Its not true. We are giving to you only the authentic techniques, without any transformation.\"},\"box-2\":{\"title\":\"You get the whole mindset, not only the skill\",\"description\":\"Without the philosophical framework, meditation is just a relaxation technique. By shaping your picture of the world and mindset, you are dissolving the core of your mental problems and obstacles.\"},\"box-3\":{\"title\":\"Course is free from esotherics, ritualism, religion and cosmology\",\"description\":\"We see buddhism as a philosophy, not the religion\"},\"box-4\":{\"title\":\"Our goal is bringing mindfulness to your life\",\"description\":\"We do not teach you how to meditate with a phone, we teach you to bring mindfulness into your real life, to unleash your true potential\"}},\"Fits\":{\"title\":\"Our app is a perfect fit, if you:\",\"text-1\":\"heard a lot about mindfulness and meditation, but don't know what to start with\",\"text-2\":\"tried meditating with another apps, but the courses they give you were not effective\",\"text-3\":\"practice meditation already, but need a strong theoretical basis and systematised knowledge\",\"text-4\":\"look for an all-in-one meditation app to fit your needs\"},\"NoFit\":{\"title\":\"It can not fit you in some cases:\",\"text-1\":\"This course is created for people who have a strong decision to change. You need to have at least 10-30 minutes each day\",\"text-2\":\"The skill can be learned all your life, so if you see meditation as a simple relaxation technique, there are several apps that do the job pretty good.\"},\"Faq\":{\"title\":\"People usually ask\",\"question-1\":{\"title\":\"Why 40 days?\",\"text\":\"According to the recent research, 40 days is guaranteed to get the new skill developed to automatism. Beside that, 40 is a sacral number in many traditions, who knows maybe that has something\"},\"question-2\":{\"title\":\"I'm a member of a religious confession (an atheist). Does it fit me?\",\"text\":\"Yes, totally! We reduce buddhism to a well structured, logical and scientifically proven philosophical system. It does not contradict with any mainstream religion. If you are an atheist, its also a great fit, as we have a scientific prove under all the aspects\"},\"question-3\":{\"title\":\"There are dozen of other apps, why should I pick that one?\",\"text\":\"Most other apps just scratch the surface of the real mindfulness practice, and pay no attention to the philosophical aspect. Most of them have a very short introductory courses (3-10 days), which is not sufficient for a new skill development (need at least 21). Contrary, beside practice, we give a strong theoretical framework and building a new skill together.\"},\"question-4\":{\"title\":\"How fast will i get the result?\",\"text\":\"It is all individual, and generally its a mistake to think about end result, you just need to practice, the result will come in its own time. By anticipating fast results you only slow that down. We can guaranty, that after pasing this skill, you will get s strong basement and all the tools and direction, to move further on your spiritual path.\"}},\"Cost\":{\"title\":\"How much is the app?\",\"description\":\"The regular price for such an apps starts from 35$ annual, but we believe in the consciousness of our users, so we let you <strong>pick the price for yourself</strong>. During the passing of the course, you will be able to pay whatever amount you think is sufficient. <strong>Help us build a new business, based on value and trust!</strong>\"}}");

/***/ }),
/* 43 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Top\":{\"title\":\"40-дневный медитационный <br/>ретрит в вашем смартфоне \",\"description\":\"Ваш первый шаг на пути к осознанности!\"},\"Marketing\":{\"description\":\"Мы подготовили для вас самый полный <strong>40-дневный курс осознанности</strong>, основанный на слиянии восточных знаний с современной нейронаукой. Всего <strong>10-20 минут в день</strong>, в течение сорока дней, и вы:\",\"box-1\":{\"title\":\"Привьете привычку медитировать\"},\"box-2\":{\"title\":\"Поймете суть буддистской философии\"},\"box-3\":{\"title\":\"Запустите процесс углубления осознанности\"}},\"How\":{\"title\":\"Как работает наш курс?\",\"box-1\":{\"title\":\"Каждожневные медитации\",\"text-1\":\"Каждый день вы будете получать аудио лекцию, начало которой будет состоять из теоретичесткой части, а остальная - из практики медитации.\",\"text-2\":\"Начнем с 10 минут в начале, и дойдем до 20-30 ближе к концу курса\"},\"box-2\":{\"title\":\"Небольшие задания на день\",\"text-1\":\"После медитации вам нужно будет выполнить небольшое задание, и записать ответ в виде текста. Это может быть наблюдение за определенными вещами в течение ня, оценка своего состояния и много другое.\",\"text-2\":\"Только пропустив знания и практику через себя, можно действительно усвоить материал.\"},\"box-3\":{\"title\":\"Напоминания в течение дня\",\"text-1\":\"После практики мы будем слать вам ненавязчивые но очень емкие и нужные push-оповещения, чтобы вы могли плавно и без напрягов интегрировать практику в смою жизнь\"},\"box-4\":{\"title\":\"Отслеживайте состояние ума\",\"text-1\":\"Вы можете отследить ваш прогресс и текущее состояние с помощью уникальной геймификации - Цветок жизни. Если вы медитируется без пропусков и стабильно, то цветок гармоничен и полон, если нет, то он становится негармоничным.\",\"text-2\":\"Алгоритм составлен на основе реальных исследований\"}},\"Inside\":{\"title\":\"Что входит в курс?\",\"box-1\":{\"title\":\"Самые эффективные медитационыые практики с подробным объяснением каждой детали\",\"description\":\"Мы выделили лучшее из книг таких известных мастеров дзен как Тик Фон Нхат, Сузуки Конзо, Аджан По, и структурировали это с помощью современных исследований в области науки осознанности\"},\"box-2\":{\"title\":\"Основы буддистского мировоззрения, лишенного космологии и мистицизма\",\"description\":\"В основе буддистской философии - очень мудрый и взвешанный подход к жизни, и мы передадим его вам как последовательную систему и логичную философскую систему. Мы взяли главное из различных школ, таких как дзен и випассана, и выделели только главное.\"},\"box-3\":{\"title\":\"Лучшие  проверенные научные методы по плавной интеграции осонанности в вашу жизнь\",\"description\":\"Курс разработан с учетом инновационных методов обучения, с оглядкой на последние открытия в физиологии обучения. В курс внедрены все самые современные техники, которые гарантируют понимание и усвоение теоретического материала, а также гарантируют кратчайший и эффективный путь к развитию навыка осознанности.\"},\"box-4\":{\"title\":\"Подробное объяснение работы Вашего мозга и того как он может некорректно работать\",\"description\":\"Все буддистские утверждения подкреплены конкретными научными исследованиями. Наш курс - уникальный симбиоз восточной мудрости и современной науки. С научной стороны, мы пираемся на работы Антонио Дамасио, Йон Кабат Зинн и других ученых.\"}},\"Advantages\":{\"title\":\"Что отличает нас от других\",\"box-1\":{\"title\":\"Оригинальные восточные техники, никаких маркетинговых уловок\",\"description\":\"Мы разработали курс для тех кто хочет действительно углубиться в эту технику, и по-этому наши медитации явщяются проверенными и взятыми из первоисточников, от лучших буддистских мастеров, таких как, улучшенные с помощью современной науки об обучении. Здесь вы не найдете медитаций сна, стресса и других уловок.\"},\"box-2\":{\"title\":\"Помимо медитации, мы объясняем основы буддистского мировоззрения\",\"description\":\"Без философии и изменения взглядов на жизнь, практика медитации будет простым психологическим упражнением, которое не раскроет всей своей прелести, если не будет подкреплено стройным и структурированным знанием.\"},\"box-3\":{\"title\":\"Курс абсолютно светский, без космологии и мистицизма, подкрепленный современной психологией и нейрофизиологией\",\"description\":\"Мы рассматриваем буддизм как философию, а не как религию. Каждый тезис который мы даем, мы подкрепляем современными научными исследованиями в области когнитивных наук и нейрофизиологии.\"},\"box-4\":{\"title\":\"Наша цель - интеграция осознанности в вашу жизнь.\",\"description\":\"Наш курс направлен не на то чтобы приучить вас к медитации с телефоном, а но то, чтобы вы привили себе привычку быть осознанным, и интегрировали буддистское мировоззрение в свою жизнь.\"}},\"Fits\":{\"title\":\"Курс подходит вам, если:\",\"text-1\":\"много слышали о медитации и осознанности, но не знаете с чего начать\",\"text-2\":\"пытались начать медитировать с помощью других прилодений иили курсов, но они для вас оказались недостаточно полными\",\"text-3\":\"вы уже практикуете медитацию какое-то время, но вам нехватает полной и структурированной системы базовых знаний\",\"text-4\":\"ищите что-то новое в жизни, что поможет вам поднться на новый уровень\"},\"NoFit\":{\"title\":\"Курс также может вам не подойти:\",\"text-1\":\"Этот курс предназначен для тех кто действительно решил встать на путь изменений и осознанности. Это требуем времени и усилий, как минимум 40 дней постоянной практики по 10-20 минут, но и после этого вам нужно развиваться дальше.\",\"text-2\":\"Этот навык можно развиватьвсю жизнь. Так что если вы рассматриваете медитацию как сугубо психологическую практику релаксации, то мы можем порекомендовать вам ряд других прилодений, которые справляются с задачей очень хорошо.\"},\"Faq\":{\"title\":\"Нас спрашивают\",\"question-1\":{\"title\":\"Почему именно 40 дней?\",\"text\":\"Согласно современным исследованиям, 40 дней - это гарантированно достаточное время чтобы сформировать новый навык, усвоить его на таком уровне, который не требует усилий и является частью вас. Помимо этого, число 40 является сакральным для многих религий\"},\"question-2\":{\"title\":\"Я исповедую другую религию (я атеист). Подходит ли мне это?\",\"text\":\"Наш курс является абсолюно светским, не сожержит ничего религиозного или эзотерического. Мы рассматриваем буддизм как стройную философскую систему, которая не противоречит никаким другим религиям или верованиям. Вы смело можете прохдить курс, если исповедуете другую религию, так как техники, и мировоззрение помогут вам достигать добродетелей вашего учения. Если вы атеист, то также вам пожходит этот курс, так как в основе его исключительно логика и наука\"},\"question-3\":{\"title\":\"Есть много других приложение, почему я должен использовать именно ваше?\",\"text\":\"Большинство популярных приложений очень поверхностно подходят к искусству осознанности, практически не касаются теории буддисткого мировоззрения и вцелом расчитаны на людей, не стремящихся сильно углубиться в практику. Большинство из них имеют короткие вводные программы (7-10 дней), чего физически недостаточно для формирования какого дибо навыка. Мы же, напротив, стремимся познакомить вас со всей полнотой осознанности, медитации, и буддистского мировоззрения\"},\"question-4\":{\"title\":\"Как быстро я почувствую результат?\",\"text\":\"Это все сугубо индивидуально, и вообще лучше не думать о результате, а просто практиковать. Мы можем гарантировать вам, что по прохождении этого курса вы будете обладать всеми навыками и знаниями, достаточными для продолжения своего пути к более осознанной жизни, но чтобы получить действительно озутимые результаты, нужно продолжать, и практика должна стать естественной частью жизни. Только тогда возможен хорогий рещультат, и именно в этом и цель нашего курса - сделать практику осознанности естественной и органичной частью вашей жизни\"}},\"Cost\":{\"title\":\"Сколько это стоит?\",\"description\":\"Обычно такие приложения являются платными и стоят от 3000р, но мы верим в сознательность наших пользователей, и по-этому мы даем вам возможность <strong>самим выбрать стоимость</strong>. Во время прохождения курса мы попросим вас самим назначить любую стоимость за курс, насколько он был вам полезен. <strong>Помогите нам построить компанию на новых основах</strong>\"}}");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-form-validator-core");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/iphone.0ee41cfa.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo_v.9539e03b.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/marketing1.f360f693.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/marketing2.a5481dba.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/marketing3.3e0309df.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/screenshot1.729e3729.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/screenshot2.d577fede.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/screenshot3.c9288724.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/screenshot4.358b89b8.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/screenshot5.165aa657.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower1.66a445ee.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower2.f043b9f2.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower3.0b31b1e9.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sati_app_logo.1a9f38a3.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg_inside.1eb9f577.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/meditation.8cceed63.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brain.7a4560d2.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/books.21ab8d3d.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/buddhism.ee3c268d.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/wave2.cb6cd48c.png";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-compare-image");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/positive_brain.585da359.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/negative_brain.a8fa334a.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sati_green.b7641340.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aura.31bbd923.jpg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/breathe.ebb85e27.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/budhify.51f674bd.jpg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/calm.f73e67f6.jpg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/headspace.d0dc292f.jpg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/insight.2f8262ca.jpg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/meditopia.02cccfec.jpg";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/percent.906e819f.jpg";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/simple.de7f0f9f.jpg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/footer_b.8f1faf29.jpg";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-Thin.a3484902.ttf";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-ExtraLight.f3beb095.ttf";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-Light.1b413af3.ttf";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-Normal.1a2ffa72.ttf";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-Medium.f53f50bf.ttf";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-DemiBold.62618b59.ttf";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-Bold.33a327aa.ttf";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-ExtraBold.20790586.ttf";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/TT-Norms-Pro-Black.aa4b73e3.ttf";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
__webpack_require__(95);
module.exports = __webpack_require__(101);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(31)["default"];

var _require = __webpack_require__(32),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/user/projects/sati_one_landing/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(31)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(32),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(33),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/user/projects/sati_one_landing/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(33),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(25);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 16,
	"./": 16,
	"./index": 16,
	"./index.js": 16
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 97;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(34);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(102);

var _interopRequireDefault = __webpack_require__(103);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(104);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(105)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(106)(module)))

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("react-flags-select/css/react-flags-select.css");

/***/ })
/******/ ]);
});