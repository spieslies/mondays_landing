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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

module.exports = require("react-ga");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb1d656f452aa0084da207d24412cfb2.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "22c350db79946bd18c18e1abf0b8e5b5.png";

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(21);

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
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(12);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(18);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(0);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(22);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(32);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(11);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(10);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(15);

// EXTERNAL MODULE: external "react-flags-select"
var external_react_flags_select_ = __webpack_require__(33);
var external_react_flags_select_default = /*#__PURE__*/__webpack_require__.n(external_react_flags_select_);

// EXTERNAL MODULE: external "react-flags-select/css/react-flags-select.css"
var react_flags_select_css_ = __webpack_require__(95);

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__(13);
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/i18n/locales/en.json
var en = __webpack_require__(34);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/i18n/locales/ru.json
var ru = __webpack_require__(35);

// EXTERNAL MODULE: external "i18next-browser-languagedetector"
var external_i18next_browser_languagedetector_ = __webpack_require__(36);
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
var external_react_device_detect_ = __webpack_require__(23);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/responsiveUtils.js


function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  @media (min-width: ", ") and (max-width: ", ") {\n    ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  @media (max-width: ", ") {\n    ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  @media (min-width: ", ") {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var emSize = function emSize(pixelValue) {
  return "".concat(pixelValue / 16, "em");
};

var responsiveUtils_getCurrentBreakpoint = function getCurrentBreakpoint() {
  var _window = window,
      innerWidth = _window.innerWidth;

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
    return Object(external_styled_components_["css"])(_templateObject(), responsiveUtils_getSizeFromBreakpoint(breakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var responsiveUtils_max = function max(breakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(_templateObject2(), responsiveUtils_getSizeFromBreakpoint(breakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var responsiveUtils_between = function between(firstBreakpoint, secondBreakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(_templateObject3(), responsiveUtils_getSizeFromBreakpoint(firstBreakpoint, BREAKPOINTS), responsiveUtils_getSizeFromBreakpoint(secondBreakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var media = {
  min: responsiveUtils_min,
  max: responsiveUtils_max,
  between: responsiveUtils_between
};
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/theme.js

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
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/helpers.js


function _templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n    ", ": calc(", "", ");\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    ", ": calc(", "", ");\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    ", ": calc(", "", ");\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    ", ": calc(", "", ");\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function helpers_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  @media (min-width: ", ") and (max-width: ", ") {\n    ", ";\n  }\n"]);

  helpers_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function helpers_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  @media (max-width: ", ") {\n    ", ";\n  }\n"]);

  helpers_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function helpers_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  @media (min-width: ", ") {\n    ", ";\n  }\n"]);

  helpers_templateObject = function _templateObject() {
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
  var _window = window,
      innerWidth = _window.innerWidth;

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
    return Object(external_styled_components_["css"])(helpers_templateObject(), helpers_getSizeFromBreakpoint(breakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var helpers_max = function max(breakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(helpers_templateObject2(), helpers_getSizeFromBreakpoint(breakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
  };
};
var helpers_between = function between(firstBreakpoint, secondBreakpoint) {
  return function () {
    return Object(external_styled_components_["css"])(helpers_templateObject3(), helpers_getSizeFromBreakpoint(firstBreakpoint, BREAKPOINTS), helpers_getSizeFromBreakpoint(secondBreakpoint, BREAKPOINTS), external_styled_components_["css"].apply(void 0, arguments));
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
    return Object(external_styled_components_["css"])(_templateObject4(), p.theme.min('lg')(_templateObject5(), rule, helpers_itemSideByBreakpoint('lg'), afterCalc && " ".concat(afterCalc)), p.theme.max('lg')(_templateObject6(), rule, helpers_itemSideByBreakpoint('md'), afterCalc && " ".concat(afterCalc)), p.theme.max('md')(_templateObject7(), rule, helpers_itemSideByBreakpoint('sm'), afterCalc && " ".concat(afterCalc)), p.theme.max('sm')(_templateObject8(), rule, helpers_itemSideByBreakpoint('xs'), afterCalc && " ".concat(afterCalc)));
  };
};
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Button.js


function _templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n    background-color: ", ";\n    border-color: ", ";\n    color: white;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    background: ", ";\n    border-color: ", ";\n    &:hover {\n      box-shadow: none;\n      cursor: not-allowed;\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function Button_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n    background: transparent;\n    color: ", ";\n    border-color: ", ";\n    &:hover {\n      background: ", ";\n      color: white;\n    }\n  "]);

  Button_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Button_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    position:relative;\n    &:after {\n      content: \"\";\n      position:absolute;\n      display: block;\n      width: 5px;\n      height: 5px;\n      border-radius: 50%;\n      background: ", ";\n      top: 50%;\n      left: 10px;\n      transform: translate(0, -50%);\n    }\n  "]);

  Button_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Button_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    background: transparent;\n    border: transparent;\n    font-weight: normal;\n    &:hover {\n      box-shadow: none;\n    }\n  "]);

  Button_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Button_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    font-weight: 300;\n    &:hover {\n      text-decoration: underline;\n      box-shadow: none;\n    }\n  "]);

  Button_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Button_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    &:hover {\n      box-shadow: none;\n    }\n  "]);

  Button_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Button_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 15px;\n    font-weight: bold;\n    padding: 1em 6em;\n  "]);

  Button_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Button_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    border-radius: 100px;\n  "]);

  Button_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Button_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  background: ", ";\n  color: white;\n  width: 279px;\n  height: 48px;\n  border-radius: 24px;\n  font-size: ", ";\n  padding: 0.7em 5em;\n  font-weight: 900;\n  cursor: pointer;\n  outline: none;\n  border: 0\n  &:hover {\n    box-shadow: ", ";\n  }\n  &:disabled {\n    border-color: ", ";\n    background-color: ", ";\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n  ", "\n  ", ";\n  ", "\n"]);

  Button_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Button = external_styled_components_default.a.button(Button_templateObject(), function (p) {
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
  return p.rounded && Object(external_styled_components_["css"])(Button_templateObject2());
}, function (p) {
  return p.huge && Object(external_styled_components_["css"])(Button_templateObject3());
}, function (p) {
  return p.unstyled && Object(external_styled_components_["css"])(Button_templateObject4());
}, function (p) {
  return p.link && Object(external_styled_components_["css"])(Button_templateObject5());
}, function (p) {
  return p["default"] && Object(external_styled_components_["css"])(Button_templateObject6());
}, function (p) {
  return p.dangerDot && Object(external_styled_components_["css"])(Button_templateObject7(), function (p) {
    return p.theme.colors.danger;
  });
}, function (p) {
  return p.outline && Object(external_styled_components_["css"])(Button_templateObject8(), function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.theme.colors.black;
  });
}, function (p) {
  return p.disabled && Object(external_styled_components_["css"])(_templateObject9(), function (p) {
    return p.theme.colors.grays.light;
  }, function (p) {
    return p.theme.colors.grays.light;
  });
}, function (p) {
  return p.black && Object(external_styled_components_["css"])(_templateObject10(), function (p) {
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

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Icon.js









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
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Checkbox.js








function Checkbox_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  position:absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  cursor: pointer;\n"]);

  Checkbox_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Checkbox_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 35px;\n  "]);

  Checkbox_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Checkbox_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  left: 15%;\n  top: -27%;\n  font-size: 20px;\n  line-height: 1;\n  pointer-events: none;\n  color: ", ";\n  ", "\n"]);

  Checkbox_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Checkbox_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    width: 32px;\n    height: 32px;\n  "]);

  Checkbox_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Checkbox_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  display:inline-block;\n  width: 18px;\n  height: 18px;\n  border: 1px solid ", ";\n  text-align: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  ", "\n"]);

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

var CheckboxCont = external_styled_components_default.a.div(Checkbox_templateObject(), function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.max('md')(Checkbox_templateObject2());
});
var CheckIcon = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Icon, extends_default()({
    icon: "check"
  }, p));
})(Checkbox_templateObject3(), function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.max('md')(Checkbox_templateObject4());
});
var Input = external_styled_components_default.a.input(Checkbox_templateObject5());
/* harmony default export */ var atoms_Checkbox = (Checkbox_Checkbox);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Input.js


function Input_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n      border-color: ", ";\n    "]);

  Input_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Input_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: block;\n  border: 0;\n  width: 100%;\n  line-height: 1.7;\n  background: transparent;\n  font-weight: 700;\n  padding-left: 8px;\n  :read-only {\n    border-color: ", ";\n    color: ", ";\n  }\n  ::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    color: ", ";\n  }\n  ::-moz-placeholder {\n    /* Firefox 19+ */\n    color: ", ";\n  }\n  :-ms-input-placeholder {\n    /* IE 10+ */\n    color: ", ";\n  }\n  :-moz-placeholder {\n    /* Firefox 18- */\n    color: ", ";\n  }\n  ", ";\n"]);

  Input_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Input_Input = external_styled_components_default.a.input(Input_templateObject(), function (p) {
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
  return p.error && Object(external_styled_components_["css"])(Input_templateObject2(), function (p) {
    return p.theme.colors.red;
  });
});
/* harmony default export */ var atoms_Input = (Input_Input);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/InputErrorMessage.js


function InputErrorMessage_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 53px;\n  font-size: 10px;\n  color: ", ";\n  padding-left: 15px;\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 1px;\n    height: 57px;\n    left: -10px;\n    top: -67px;\n    background-color: ", ";\n  }\n  &:after {\n    content: \"c\";\n    margin-left: 5px;\n    display: none;\n  }\n"]);

  InputErrorMessage_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var InputErrorMessage = external_styled_components_default.a.span(InputErrorMessage_templateObject(), function (p) {
  return p.theme.colors.danger;
}, function (p) {
  return p.theme.colors.danger;
});
/* harmony default export */ var atoms_InputErrorMessage = (InputErrorMessage);
// EXTERNAL MODULE: external "react-form-validator-core"
var external_react_form_validator_core_ = __webpack_require__(37);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/ValidatedInput.js









function ValidatedInput_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n"]);

  ValidatedInput_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







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

var InputCont = external_styled_components_default.a.div(ValidatedInput_templateObject());
/* harmony default export */ var atoms_ValidatedInput = (ValidatedInput_ValidatedInput);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Label.js


function Label_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    font-weight: 500;\n  "]);

  Label_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Label_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n      &:after {\n        content: '*';\n        position: relative;\n        color: ", ";\n        left: 5px;\n      }\n    "]);

  Label_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Label_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n      display: block !important;\n    "]);

  Label_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Label_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 14px;\n  ", "\n  ", " ", "\n  > small {\n    display: block;\n    font-weight: 300;\n  }\n"]);

  Label_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Label = external_styled_components_default.a.label(Label_templateObject(), function (p) {
  return p.block && Object(external_styled_components_["css"])(Label_templateObject2());
}, function (p) {
  return p.required && Object(external_styled_components_["css"])(Label_templateObject3(), function (p) {
    return p.theme.colors.danger;
  });
}, function (p) {
  return p.bold && Object(external_styled_components_["css"])(Label_templateObject4());
});
/* harmony default export */ var atoms_Label = (Label);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Select.js









function Select_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n"]);

  Select_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Select_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  font-size: 10px;\n  top: 19px;\n  right: 0;\n"]);

  Select_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Select_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n      border-color: ", " !important;\n      color: ", " !important;\n    "]);

  Select_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Select_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  border-bottom: ", " solid white;\n  background: transparent;\n  font-weight: 300;\n  padding: 10px 0;\n  color: white;\n  line-height: 1.5;\n  ", "\n"]);

  Select_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Select_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n"]);

  Select_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






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

var SelectCont = external_styled_components_default.a.div(Select_templateObject()); // FIXME: color: black and border-bottom-color: black are leaking in and overriding these styles

var Selected = external_styled_components_default.a.p(Select_templateObject2(), function (props) {
  return props.theme.general.borderWidth;
}, function (p) {
  return p.readOnly && Object(external_styled_components_["css"])(Select_templateObject3(), p.theme.colors.grays.light, p.theme.colors.grays.regular);
});
var Select_Icon = external_styled_components_default()(atoms_Icon)(Select_templateObject4());
var Select_Input = external_styled_components_default.a.select(Select_templateObject5());
/* harmony default export */ var atoms_Select = (Select_Select);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/SideLabel.js


function SideLabel_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    margin-bottom: 30px;\n    > label {\n      margin-top: 6px;\n      font-size: 18px;\n      margin-left: 15px;\n    }\n  "]);

  SideLabel_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function SideLabel_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  > label {\n    margin-left: 10px;\n    > span {\n      display: block;\n      color: ", ";\n    }\n  }\n  ", "\n"]);

  SideLabel_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SideLabel = external_styled_components_default.a.div(SideLabel_templateObject(), function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.max('md')(SideLabel_templateObject2());
});
/* harmony default export */ var atoms_SideLabel = (SideLabel);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/SectionHeading.js


function SectionHeading_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 38px;\n    margin-bottom: 20px;\n    margin-top: -15px;\n    padding: 0 ", ";\n  "]);

  SectionHeading_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function SectionHeading_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    margin-top: 10px;\n    margin-bottom: 20px;\n    font-size: 50px;\n  "]);

  SectionHeading_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function SectionHeading_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-weight: 100;\n  font-family: ", ";\n  color: ", ";\n  opacity: 0.7;\n  text-align: center;\n  font-size: 58px;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  ", "\n  ", "\n"]);

  SectionHeading_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SectionHeading = external_styled_components_default.a.h2(SectionHeading_templateObject(), function (p) {
  return p.theme.font.family.header;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.between('sm', 'md')(SectionHeading_templateObject2());
}, function (p) {
  return p.theme.max('sm')(SectionHeading_templateObject3(), function (p) {
    return p.theme.general.mobilePadding;
  });
});
/* harmony default export */ var atoms_SectionHeading = (SectionHeading);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Form.js


function Form_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: block;\n  width: 100%;\n"]);

  Form_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Form = external_styled_components_default.a.form(Form_templateObject());
/* harmony default export */ var atoms_Form = (Form);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/FormGroup.js


function FormGroup_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 5px 0;\n  margin-bottom: 18px;\n  > label {\n    margin-bottom: 5px;\n  }\n"]);

  FormGroup_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FormGroup = external_styled_components_default.a.div(FormGroup_templateObject());
/* harmony default export */ var atoms_FormGroup = (FormGroup);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Box.js


function Box_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    display:flex;\n    flex-direction: column;\n    align-items: ", ";\n    justify-content: ", ";\n  "]);

  Box_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Box_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    flex-grow: 0;\n    flex-shrink: 0;\n  "]);

  Box_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Box_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    padding-left: ", ";\n    padding-right: ", ";\n  "]);

  Box_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Box_templateObject2() {
  var data = taggedTemplateLiteral_default()(["width: ", ";"]);

  Box_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Box_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: block;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  Box_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getAlignment = function getAlignment(align) {
  if (align === 'center') {
    return 'center';
  } else if (align === 'right' || align === 'bottom') {
    return 'flex-end';
  }

  return 'flex-start';
};

var Box = external_styled_components_default.a.div(Box_templateObject(), function (p) {
  return p.width && Object(external_styled_components_["css"])(Box_templateObject2(), p.width);
}, flexChildMixin, buildResponsiveWidthMixin, function (p) {
  return p.padded && Object(external_styled_components_["css"])(Box_templateObject3(), p.theme.general.gridGap, p.theme.general.gridGap);
}, function (p) {
  return p.exact && Object(external_styled_components_["css"])(Box_templateObject4());
}, function (p) {
  return (p.alignX || p.alignY) && Object(external_styled_components_["css"])(Box_templateObject5(), getAlignment(p.alignX), getAlignment(p.alignY));
}, hiddenMixin);
/* harmony default export */ var atoms_Box = (Box);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/HeaderClose.js







function HeaderClose_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    background: white;\n  "]);

  HeaderClose_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function HeaderClose_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translate(0, -200%) rotate(-45deg);\n  "]);

  HeaderClose_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function HeaderClose_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translate(0, -100%) rotate(45deg);\n  "]);

  HeaderClose_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function HeaderClose_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translate(0, 0); \n  "]);

  HeaderClose_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function HeaderClose_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  top: 50%;\n  height: 2px;\n  background: ", ";\n  transform: translate(0, -300%);\n  transform-origin: center center;\n  transition: .3s ease;\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  HeaderClose_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function HeaderClose_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position:absolute;\n  top: 50%;\n  left: ", ";\n  width: 25px;\n  height: 25px;\n  z-index: 10;\n"]);

  HeaderClose_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






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

var CloseCont = external_styled_components_default()(atoms_Box)(HeaderClose_templateObject(), helpers_theme('general.mobilePadding'));
var Line = external_styled_components_default.a.div(HeaderClose_templateObject2(), helpers_theme('colors.black'), function (props) {
  return props.bottom && Object(external_styled_components_["css"])(HeaderClose_templateObject3());
}, function (props) {
  return props.opened && Object(external_styled_components_["css"])(HeaderClose_templateObject4());
}, function (props) {
  return props.opened && props.bottom && Object(external_styled_components_["css"])(HeaderClose_templateObject5());
}, function (props) {
  return props.opened && Object(external_styled_components_["css"])(HeaderClose_templateObject6());
});
/* harmony default export */ var atoms_HeaderClose = (HeaderClose_HeaderClose);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Hr.js


function Hr_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  background-color: ", ";\n  border: 0;\n  width: 100%;\n  height: 1px;\n  ", ";\n  ", "\n"]);

  Hr_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Hr = external_styled_components_default.a.hr(Hr_templateObject(), function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.grayed && "background-color: ".concat(p.theme.colors.grays.light, ";");
}, hiddenMixin);
/* harmony default export */ var atoms_Hr = (Hr);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Flex.js


function Flex_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n      flex-wrap: wrap;\n      margin-left: -", ";\n      margin-right: -", ";\n      > div {\n        flex-grow: 0;\n        flex-shrink: 0;\n      }\n    "]);

  Flex_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Flex_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n      width: 100%;\n    "]);

  Flex_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Flex_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  flex-wrap: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  Flex_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Flex = external_styled_components_default.a.div(Flex_templateObject(), function (props) {
  return props.direction || 'row';
}, function (props) {
  return props.alignItems || 'flex-start';
}, function (props) {
  return props.justifyContent || 'flex-start';
}, function (props) {
  return props.wrap || 'nowrap';
}, function (props) {
  return props.fullWidth && Object(external_styled_components_["css"])(Flex_templateObject2());
}, function (p) {
  return p.grid && Object(external_styled_components_["css"])(Flex_templateObject3(), p.theme.general.gridGap, p.theme.general.gridGap);
}, hiddenMixin, flexChildMixin, buildResponsiveWidthMixin);
/* harmony default export */ var atoms_Flex = (Flex);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Grid.js


function Grid_templateObject3() {
  var data = taggedTemplateLiteral_default()(["grid-gap: ", ";"]);

  Grid_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Grid_templateObject2() {
  var data = taggedTemplateLiteral_default()(["grid-template-columns: ", ";"]);

  Grid_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Grid_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: grid;\n  ", "\n  ", "\n"]);

  Grid_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Grid = external_styled_components_default.a.section(Grid_templateObject(), function (props) {
  return props.cols && Object(external_styled_components_["css"])(Grid_templateObject2(), props.cols);
}, function (props) {
  return props.gap && Object(external_styled_components_["css"])(Grid_templateObject3(), props.gap);
});
/* harmony default export */ var atoms_Grid = (Grid);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(16);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(38);

// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(39);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Modal.js







function _templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  flex-grow: 1;\n  {/*overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;*/}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function Modal_templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n    &:hover {\n      color: ", ";\n    }\n  "]);

  Modal_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function Modal_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  background: transparent;\n  border: 0;\n  box-shadow: none;\n  padding: 7px;\n  color: ", ";\n  font-size: 32px;\n  z-index: 2;\n  cursor: pointer;\n  ", "\n"]);

  Modal_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function Modal_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n    width: 100%;\n    height: 85vh;\n    display: flex;\n    top: auto;\n    flex-direction: column;\n    justify-content: center;\n    bottom: -5px;\n    left: 0;\n    transform: translate(0, 0);\n  "]);

  Modal_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Modal_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    width: 100vw;\n    height: 100vh;\n  "]);

  Modal_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Modal_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  position:fixed;\n  display:flex;\n  flex-direction: column;\n  width: 700px;\n  background: white;\n  left: 50%;\n  border-radius: 10px;\n  top: 50%;\n  padding: 40px;\n  transform: translate(-50%, -50%);\n  z-index: ", ";\n  ", "\n  ", "\n  ", "\n"]);

  Modal_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Modal_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  position:fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: ", ";\n  background: ", ";\n"]);

  Modal_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Modal_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    &.modal-appear {\n    }\n    &.modal-appear-active {\n    }\n    &.modal-exit {\n    }\n    &.modal-exit-active {\n    }\n  "]);

  Modal_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Modal_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    &.modal-appear {\n      opacity: 0;\n    }\n    &.modal-appear-active {\n      opacity: 1;\n      transition: all 300ms ease-out;\n    }\n    &.modal-exit {\n      opacity: 1;\n    }\n    &.modal-exit-active {\n      opacity: 0;\n      transition: all 300ms ease-in;\n    }\n  "]);

  Modal_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Modal_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    &.modal-appear {\n      transform: translate(0, 100%);\n    }\n    &.modal-appear-active {\n      transform: translate(0, 0);\n      transition: all 300ms ease-out;\n    }\n    &.modal-exit {\n      transform: translate(0, 0);\n    }\n    &.modal-exit-active {\n      transform: translate(0, 100%);\n      transition: all 300ms ease-in;\n    }\n  "]);

  Modal_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Modal_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    &.modal-appear {\n      transform: translate(100%, 0);\n    }\n    &.modal-appear-active {\n      transform: translate(0, 0);\n      transition: all 300ms ease-out;\n    }\n    &.modal-exit {\n      transform: translate(0, 0);\n    }\n    &.modal-exit-active {\n      transform: translate(100%, 0);\n      transition: all 300ms ease-in;\n    }\n  "]);

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
  fromRight: Object(external_styled_components_["css"])(Modal_templateObject()),
  fromBottom: Object(external_styled_components_["css"])(Modal_templateObject2()),
  fadeIn: Object(external_styled_components_["css"])(Modal_templateObject3()),
  empty: Object(external_styled_components_["css"])(Modal_templateObject4())
};
var ModalBackdrop = external_styled_components_default.a.div(Modal_templateObject5(), function (p) {
  return p.theme.zIndex.modalBg;
}, function (p) {
  return Object(external_polished_["rgba"])(p.theme.colors.black, 0.3);
});
var ModalContainer = external_styled_components_default.a.div(Modal_templateObject6(), function (p) {
  return p.theme.zIndex.modal;
}, function (p) {
  return p.fullScreen && Object(external_styled_components_["css"])(Modal_templateObject7());
}, function (p) {
  return animations[p.animation] || animations.empty;
}, function (p) {
  return p.theme.max('sm')(Modal_templateObject8());
});
var Close = external_styled_components_default.a.button(Modal_templateObject9(), function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.min('md')(Modal_templateObject10(), function (p) {
    return p.theme.colors.black;
  });
});
var ModalBody = external_styled_components_default.a.section(_templateObject11());
/* harmony default export */ var atoms_Modal = (Modal_Modal);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Page.js







function Page_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: block;\n"]);

  Page_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




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

var PageCont = external_styled_components_default.a.section(Page_templateObject());
/* harmony default export */ var atoms_Page = (Page_Page);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Section.js







function Section_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  padding: 50px 0;\n"]);

  Section_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




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

var SectionCont = external_styled_components_default.a.div(Section_templateObject());
/* harmony default export */ var atoms_Section = (Section_Section);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Cover.js


function Cover_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]);

  Cover_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Cover = external_styled_components_default.a.div(Cover_templateObject());
/* harmony default export */ var atoms_Cover = (Cover);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/GradientOverlay.js








function GradientOverlay_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(", "deg, ", " 0.75%, ", " 87.48%);\n"]);

  GradientOverlay_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





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

var Overlay = external_styled_components_default.a.div(GradientOverlay_templateObject(), function (p) {
  return p.deg;
}, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.secondary;
});
/* harmony default export */ var atoms_GradientOverlay = (GradientOverlay_GradientOverlay);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Container.js


function Container_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n      padding-left: ", ";\n      padding-right: ", ";\n    "]);

  Container_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Container_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    ", "\n  "]);

  Container_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Container_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    width: ", ";\n  "]);

  Container_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Container_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    width: 100%;\n  "]);

  Container_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Container_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    z-index: 2;\n  "]);

  Container_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Container_templateObject3() {
  var data = taggedTemplateLiteral_default()(["overflow: hidden;"]);

  Container_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Container_templateObject2() {
  var data = taggedTemplateLiteral_default()(["position: relative;"]);

  Container_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Container_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  width: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  Container_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = external_styled_components_default.a.section(Container_templateObject(), function (p) {
  return p.theme.general.containerWidth.md;
}, function (p) {
  return p.relative && Object(external_styled_components_["css"])(Container_templateObject2());
}, function (p) {
  return p.noOverflow && Object(external_styled_components_["css"])(Container_templateObject3());
}, function (p) {
  return p.toFront && Object(external_styled_components_["css"])(Container_templateObject4());
}, function (p) {
  return p.theme.max('md')(Container_templateObject5());
}, function (p) {
  return p.theme.min('lg')(Container_templateObject6(), function (p) {
    return p.theme.general.containerWidth.lg;
  });
}, function (p) {
  return p.mobilePadding && Object(external_styled_components_["css"])(Container_templateObject7(), p.theme.max('md')(Container_templateObject8(), p.theme.general.mobilePadding, p.theme.general.mobilePadding));
}, hiddenMixin);
/* harmony default export */ var atoms_Container = (Container);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Heading.js


function Heading_templateObject8() {
  var data = taggedTemplateLiteral_default()(["color: ", ";"]);

  Heading_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Heading_templateObject7() {
  var data = taggedTemplateLiteral_default()(["margin: 0;"]);

  Heading_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Heading_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    font-family: ", ";\n    font-style: italic;\n    font-weight: 400;\n  "]);

  Heading_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Heading_templateObject5() {
  var data = taggedTemplateLiteral_default()(["text-transform: ", ";"]);

  Heading_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Heading_templateObject4() {
  var data = taggedTemplateLiteral_default()(["font-size: ", ";"]);

  Heading_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Heading_templateObject3() {
  var data = taggedTemplateLiteral_default()(["font-size: ", ";"]);

  Heading_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Heading_templateObject2() {
  var data = taggedTemplateLiteral_default()(["letter-spacing: ", ";"]);

  Heading_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Heading_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-weight: 700;\n  font-family: ", ";\n  color: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  > span {\n    opacity: 1;\n    color: ", ";\n  }\n  ", "\n  ", "\n"]);

  Heading_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var HeadingBase = external_styled_components_default.a.h3(Heading_templateObject(), function (p) {
  return p.theme.font.family.header;
}, function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.spaced && Object(external_styled_components_["css"])(Heading_templateObject2(), p.theme.font.letterSpacing.accent);
}, function (p) {
  return p.small && Object(external_styled_components_["css"])(Heading_templateObject3(), p.theme.font.size.small);
}, function (p) {
  return p.smaller && Object(external_styled_components_["css"])(Heading_templateObject4(), p.theme.font.size.smaller);
}, function (p) {
  return p.transform && Object(external_styled_components_["css"])(Heading_templateObject5(), p.transform);
}, function (p) {
  return p.accent && Object(external_styled_components_["css"])(Heading_templateObject6(), p.theme.font.family.accent);
}, function (p) {
  return p.noMargin && Object(external_styled_components_["css"])(Heading_templateObject7());
}, hiddenMixin, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.primary && Object(external_styled_components_["css"])(Heading_templateObject8(), function (p) {
    return p.theme.colors.primary;
  });
}, function (p) {
  return p.white && 'color: white;';
});
/* harmony default export */ var Heading = (helpers_withDynamicHeading(HeadingBase));
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Text.js


function Text_templateObject6() {
  var data = taggedTemplateLiteral_default()(["font-size: ", ";\n   line-height: ", ";\n   color: ", ";\n   opacity: ", ";\n  "]);

  Text_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Text_templateObject5() {
  var data = taggedTemplateLiteral_default()(["font-size: ", ";\n   line-height: ", ";\n   color: ", ";\n   opacity: ", ";\n  "]);

  Text_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Text_templateObject4() {
  var data = taggedTemplateLiteral_default()(["font-size: ", ";\n   line-height: ", ";\n   font-weight: ", ";\n   color: ", ";\n  "]);

  Text_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Text_templateObject3() {
  var data = taggedTemplateLiteral_default()(["font-size: ", ";\n   line-height: ", ";\n   color: ", ";\n   opacity: ", ";\n   font-weight: ", ";\n  "]);

  Text_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Text_templateObject2() {
  var data = taggedTemplateLiteral_default()(["font-size: ", ";\n   line-height: ", ";\n   font-weight: ", ";\n   color: ", ";\n   text-shadow: ", ";\n  "]);

  Text_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Text_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  Text_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Text = external_styled_components_default.a.p(Text_templateObject(), function (p) {
  return p.theme.font.size.normal;
}, function (p) {
  return p.theme.font.lineHeight.normal;
}, function (props) {
  return props.textHuge ? Object(external_styled_components_["css"])(Text_templateObject2(), function (p) {
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
  return props.textBig ? Object(external_styled_components_["css"])(Text_templateObject3(), function (p) {
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
  return props.textNormal ? Object(external_styled_components_["css"])(Text_templateObject4(), function (p) {
    return p.theme.font.size.normal;
  }, function (p) {
    return p.theme.font.lineHeight.normal;
  }, function (p) {
    return p.theme.font.weight.w400;
  }, function (p) {
    return p.theme.colors.black;
  }) : '';
}, function (props) {
  return props.textSmall ? Object(external_styled_components_["css"])(Text_templateObject5(), function (p) {
    return p.theme.font.size.small;
  }, function (p) {
    return p.theme.font.lineHeight.small;
  }, function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.opacity ? '${p => p.theme.opacity.normal}' : '1';
  }) : '';
}, function (props) {
  return props.textSmaller ? Object(external_styled_components_["css"])(Text_templateObject6(), function (p) {
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
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Link.js


function Link_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  text-decoration: none;\n  color: ", ";\n"]);

  Link_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Link = external_styled_components_default.a.a(Link_templateObject(), function (props) {
  return props.theme.colors.black;
});
/* harmony default export */ var atoms_Link = (Link);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Image.js


function Image_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: block;\n"]);

  Image_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Image = external_styled_components_default.a.img(Image_templateObject());
/* harmony default export */ var atoms_Image = (Image);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/ImageBlock.js


function ImageBlock_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: ", ";\n  height: ", ";\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"]);

  ImageBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ImageBlock = external_styled_components_default.a.div(ImageBlock_templateObject(), function (props) {
  return props.width || '50px';
}, function (props) {
  return props.height || '50px';
}, function (props) {
  return props.src;
});
/* harmony default export */ var atoms_ImageBlock = (ImageBlock);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/List.js


function List_templateObject4() {
  var data = taggedTemplateLiteral_default()(["justify-content: center;"]);

  List_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function List_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  "]);

  List_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function List_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    display: flex;\n    flex-wrap: wrap;\n  "]);

  List_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function List_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  ", "\n  ", ";\n  ", "\n"]);

  List_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var List = external_styled_components_default.a.ul(List_templateObject(), function (p) {
  return p.horizontal && Object(external_styled_components_["css"])(List_templateObject2());
}, function (p) {
  return p.unstyled && Object(external_styled_components_["css"])(List_templateObject3());
}, function (props) {
  return props.centered && Object(external_styled_components_["css"])(List_templateObject4());
});
/* harmony default export */ var atoms_List = (List);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/ListItem.js


function ListItem_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: block;\n"]);

  ListItem_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ListItem = external_styled_components_default.a.li(ListItem_templateObject());
/* harmony default export */ var atoms_ListItem = (ListItem);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Radio.js








function Radio_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n"]);

  Radio_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Radio_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    width: 28px;\n    height: 28px;\n    &:after {\n      width: calc(100% - 6px);\n      height: calc(100% - 6px);\n      top: 3px;\n      left: 3px;\n    }\n  "]);

  Radio_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Radio_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    width: 36px;\n    height: 36px;\n  "]);

  Radio_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Radio_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n          top: 4px;\n          left: 4px;\n          width: calc(100% - 8px);\n          height: calc(100% - 8px);\n        "]);

  Radio_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Radio_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n      &:after {\n        position: absolute;\n        display: block;\n        content: '';\n        width: calc(100% - 4px);\n        height: calc(100% - 4px);\n        top: 2px;\n        left: 2px;\n        border-radius: 50%;\n        background: ", ";\n        ", "\n      }\n    "]);

  Radio_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Radio_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 1px solid ", ";\n  text-align: center;\n  border-radius: 50%;\n  flex-grow: 0;\n  flex-shrink: 0;\n  ", ";\n  ", "\n  ", "\n"]);

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

var RadioCont = external_styled_components_default.a.div(Radio_templateObject(), function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.checked && Object(external_styled_components_["css"])(Radio_templateObject2(), function (p) {
    return p.theme.colors.black;
  }, function (p) {
    return p.theme.max('md')(Radio_templateObject3());
  });
}, function (p) {
  return p.theme.max('md')(Radio_templateObject4());
}, function (p) {
  return p.huge && Object(external_styled_components_["css"])(Radio_templateObject5());
});
var Radio_Input = external_styled_components_default.a.input(Radio_templateObject6());
/* harmony default export */ var atoms_Radio = (Radio_Radio);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/RadioButton.js











function RadioButton_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n"]);

  RadioButton_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function RadioButton_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 7px;\n  "]);

  RadioButton_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function RadioButton_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n      background: black;\n      color: white;\n    "]);

  RadioButton_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function RadioButton_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  display: inline-block;\n  border: 2px solid ", ";\n  text-align: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 7px 18px;\n  font-size: 14px;\n  &:hover {\n    background: black;\n    color: white;\n  }\n  ", ";\n  ", "\n"]);

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

var RadioButton_RadioCont = external_styled_components_default.a.div(RadioButton_templateObject(), function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.checked && Object(external_styled_components_["css"])(RadioButton_templateObject2());
}, function (p) {
  return p.theme.max('sm')(RadioButton_templateObject3());
});
var RadioButton_Input = external_styled_components_default.a.input(RadioButton_templateObject4());
/* harmony default export */ var atoms_RadioButton = (RadioButton_RadioButton);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/Textarea.js


function Textarea_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: block;\n  width: 100%;\n  border: 2px solid ", ";\n  padding: 8px;\n  border-radius: 0;\n  box-shadow: none;\n"]);

  Textarea_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Textarea = external_styled_components_default.a.textarea(Textarea_templateObject(), function (p) {
  return p.theme.colors.black;
});
/* harmony default export */ var atoms_Textarea = (Textarea);
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/atoms/index.js

































// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/iphone.png
var iphone = __webpack_require__(40);
var iphone_default = /*#__PURE__*/__webpack_require__.n(iphone);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/top/Phone.js








function Phone_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 47%;\n  left: 53%;\n  transform: translate(-50%, -50%);\n  border-top: 30px solid transparent;\n  border-bottom: 30px solid transparent;\n  border-left: 48px solid white;\n"]);

  Phone_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Phone_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 44px;\n  width: 100%;\n  color: white;\n  font-size: 17px;\n  font-weight: 600;\n  text-align:center;\n"]);

  Phone_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Phone_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  top: 32px;\n  width: 100%;\n  color: white;\n  font-size: 13px;\n  font-weight: 400;\n  text-align:center;\n  margin-bottom: 0;\n  opacity: 0.8;\n"]);

  Phone_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Phone_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    display: none;\n  "]);

  Phone_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Phone_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translateX(-20px) scale(0.85);\n  "]);

  Phone_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Phone_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  width: 276px;\n  height: 550px;\n  background-image: url(", ");\n  background-size: cover;\n  ", "\n  ", "\n"]);

  Phone_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Phone_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  transform: scale(0.65) translateY(68%);\n"]);

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

var MeditationControl = external_styled_components_default()(Phone_Control)(Phone_templateObject());
var Cont = external_styled_components_default.a.div(Phone_templateObject2(), iphone_default.a, function (p) {
  return p.theme.between('sm', 'md')(Phone_templateObject3());
}, function (p) {
  return p.theme.max('sm')(Phone_templateObject4());
});
var Day = external_styled_components_default()(atoms_Text)(Phone_templateObject5());
var Title = external_styled_components_default()(atoms_Text)(Phone_templateObject6());
var PlayIcon = external_styled_components_default.a.div(Phone_templateObject7());
/* harmony default export */ var top_Phone = (Phone_Phone);
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/icons/logo_v.png
var logo_v = __webpack_require__(41);
var logo_v_default = /*#__PURE__*/__webpack_require__.n(logo_v);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/BgTop.jpg
var BgTop = __webpack_require__(17);
var BgTop_default = /*#__PURE__*/__webpack_require__.n(BgTop);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/icons/GooglePlay.png
var GooglePlay = __webpack_require__(24);
var GooglePlay_default = /*#__PURE__*/__webpack_require__.n(GooglePlay);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/icons/AppStore.png
var AppStore = __webpack_require__(25);
var AppStore_default = /*#__PURE__*/__webpack_require__.n(AppStore);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/CloudsTop.png
var CloudsTop = __webpack_require__(96);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/CloudsTopTop.png
var CloudsTopTop = __webpack_require__(97);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/top/Top.js











function _templateObject36() {
  var data = taggedTemplateLiteral_default()(["\n    width: 180px;\n    height: 65px;\n  "]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = taggedTemplateLiteral_default()(["\n  ", "\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = taggedTemplateLiteral_default()(["\n     display: block !important;\n     margin-top: 30px;\n  "]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = taggedTemplateLiteral_default()(["\n  display: none;\n  ", "\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = taggedTemplateLiteral_default()(["\n  cursor: pointer;\n  width: 180px;\n  height: 65px;\n  margin-right: ", ";\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = taggedTemplateLiteral_default()(["\n  text-decoration: none;\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = taggedTemplateLiteral_default()(["\n    display: none;\n  "]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  text-align: center;\n  z-index: ", ";\n  margin-top: 40px;\n  ", "\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 4.7vw;\n  "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: ", ";\n    line-height: ", ";\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = taggedTemplateLiteral_default()(["\n  color: ", ";\n  font-weight: 300;\n  ", "\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  ", "\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = taggedTemplateLiteral_default()(["\n    width: auto;\n    min-width: 274px;\n  "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = taggedTemplateLiteral_default()(["\n    z-index: ", ";\n  "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = taggedTemplateLiteral_default()(["\n    left: 0;\n  "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  top: -45px;\n  width: 450px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 7vw;\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 24px;\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 28px;\n  margin-bottom: 0;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  ", "\n  ", "\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = taggedTemplateLiteral_default()(["\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = taggedTemplateLiteral_default()(["\n    width: 160px; \n    height: 160px;\n    margin-top: 80px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = taggedTemplateLiteral_default()(["\n    width: 140px; \n    height: 140px;\n    margin-top: 30px;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = taggedTemplateLiteral_default()(["\n    left: 0;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  width: 176px;\n  height: 176px;\n  z-index: ", ";\n  margin: 5px;\n  ", "\n  ", "\n  ", "\n}\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = taggedTemplateLiteral_default()(["\n    top: -260px;\n    left: 0;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n    top: -45px;\n    left: -350px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function Top_templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n    left: -250px;\n  "]);

  Top_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function Top_templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n    position: absolute;\n    height: auto;\n    z-index: ", ";\n  ", "\n  ", "\n  ", "\n"]);

  Top_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function Top_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    display: none;\n  "]);

  Top_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function Top_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n  left: -50px;\n  "]);

  Top_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Top_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  z-index: ", ";\n  left: 100px;\n  ", "\n  ", "\n"]);

  Top_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Top_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  width: 466px;\n  height: 466px;\n  background-image:url(", ");\n  clip-path: url(#cross);\n  background-size: cover;\n"]);

  Top_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Top_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    height: 568px;\n    padding: 0 10px;\n  "]);

  Top_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Top_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    height: 580px;\n  "]);

  Top_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Top_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    background-attachment: fixed;\n    background-position: bottom;\n  "]);

  Top_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Top_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  background: url(", ") no-repeat center;\n  background-color: ", ";\n  background-size: cover;\n  ", "\n  padding: 0;\n  height: 700px;\n  ", "\n  ", "\n"]);

  Top_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Top_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 15px;\n  background: #fff;\n  color: #000;\n  text-align: center;\n  cursor: pointer;\n"]);

  Top_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

















 // import PHONE from 'core/assets/images/PhoneTop.png';




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
      return external_react_default.a.createElement(CustomSection, null, external_react_default.a.createElement(atoms_Container, null, external_react_default.a.createElement(CustomReactFlagsSelect, {
        defaultCountry: {
          ru: 'RU',
          en: 'US'
        }[i18n_getLocale()] || 'RU',
        countries: ["US", "RU"],
        customLabels: {
          "US": "Eng",
          "RU": "Рус"
        },
        onSelect: this.onSelectFlag
      }), external_react_default.a.createElement(TopFlex, null, external_react_default.a.createElement(BlockText, {
        direction: 'column'
      }, external_react_default.a.createElement(Logo, {
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
var CustomReactFlagsSelect = external_styled_components_default()(external_react_flags_select_default.a)(Top_templateObject());
var CustomSection = external_styled_components_default()(atoms_Section)(Top_templateObject2(), BgTop_default.a, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.min('md')(Top_templateObject3());
}, function (p) {
  return p.theme.between('sm', 'md')(Top_templateObject4());
}, function (p) {
  return p.theme.max('sm')(Top_templateObject5());
});
var Img = external_styled_components_default.a.div(Top_templateObject6(), BgTop_default.a);
var Top_CloudsTop = external_styled_components_default.a.img(Top_templateObject7(), function (p) {
  return p.theme.zIndex.three;
}, function (p) {
  return p.theme.max('lg')(Top_templateObject8());
}, function (p) {
  return p.theme.max('md')(Top_templateObject9());
});
var Clouds = external_styled_components_default.a.img(Top_templateObject10(), function (p) {
  return p.theme.zIndex.two;
}, function (p) {
  return p.theme.max('lg')(Top_templateObject11());
}, function (p) {
  return p.theme.max('md')(_templateObject12());
}, function (p) {
  return p.theme.max('sm')(_templateObject13());
});
var Logo = external_styled_components_default.a.img(_templateObject14(), function (p) {
  return p.theme.zIndex.four;
}, function (p) {
  return p.theme.max('lg')(_templateObject15());
}, function (p) {
  return p.theme.max('md')(_templateObject16());
}, function (p) {
  return p.theme.max('sm')(_templateObject17());
});
var TopFlex = external_styled_components_default()(atoms_Flex)(_templateObject18());
var Top_Heading = external_styled_components_default()(Heading)(_templateObject19(), function (p) {
  return p.theme.max('md')(_templateObject20());
}, function (p) {
  return p.theme.max('sm')(_templateObject21());
});
var BlockText = external_styled_components_default()(atoms_Flex)(_templateObject22(), function (p) {
  return p.theme.max('lg')(_templateObject23());
}, function (p) {
  return p.theme.max('md')(_templateObject24(), function (p) {
    return p.theme.zIndex.three;
  });
}, function (p) {
  return p.theme.max('sm')(_templateObject25());
});
var NormalText = external_styled_components_default()(atoms_Text)(_templateObject26(), function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.max('sm')(_templateObject27(), function (p) {
    return p.theme.font.size.smaller;
  }, function (p) {
    return p.theme.font.lineHeight.normal;
  });
}, function (p) {
  return p.theme.max('sm')(_templateObject28());
});
var ButtonCont = external_styled_components_default.a.div(_templateObject29(), function (p) {
  return p.theme.zIndex.two;
}, function (p) {
  return p.theme.max('sm')(_templateObject30());
});
var AppLink = external_styled_components_default()(atoms_Link)(_templateObject31());
var ButtonDownload = external_styled_components_default.a.img(_templateObject32(), function (p) {
  return p.last ? '0' : '15px';
});
var FullVersion = external_styled_components_default.a.div(_templateObject33(), function (p) {
  return p.theme.max('sm')(_templateObject34());
});
var ButtonDownloadSm = external_styled_components_default.a.img(_templateObject35(), function (p) {
  return p.theme.max('sm')(_templateObject36());
});
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/marketing1.png
var marketing1 = __webpack_require__(42);
var marketing1_default = /*#__PURE__*/__webpack_require__.n(marketing1);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/marketing2.png
var marketing2 = __webpack_require__(43);
var marketing2_default = /*#__PURE__*/__webpack_require__.n(marketing2);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/marketing3.png
var marketing3 = __webpack_require__(44);
var marketing3_default = /*#__PURE__*/__webpack_require__.n(marketing3);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/top_wave.png
var top_wave = __webpack_require__(19);
var top_wave_default = /*#__PURE__*/__webpack_require__.n(top_wave);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/marketing/Marketing.js








function Marketing_templateObject28() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 0 50px;\n    margin-top: 7px;\n    margin-bottom: 30px;\n  "]);

  Marketing_templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function Marketing_templateObject27() {
  var data = taggedTemplateLiteral_default()(["\n    margin-top: 3px;\n    padding: 0 10px;\n  "]);

  Marketing_templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function Marketing_templateObject26() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  font-weight: 700;\n  font-size: 20px;\n  text-align:center;\n  padding: 0 20px;\n  z-index: 2;\n  margin-top: 12px;\n  ", "\n  ", "\n"]);

  Marketing_templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function Marketing_templateObject25() {
  var data = taggedTemplateLiteral_default()(["\n        width: 2130px;\n      "]);

  Marketing_templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function Marketing_templateObject24() {
  var data = taggedTemplateLiteral_default()(["\n        height: 35vw;\n      "]);

  Marketing_templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function Marketing_templateObject23() {
  var data = taggedTemplateLiteral_default()(["\n        width: 2130px;\n        transform: translateX(-2194px);\n      "]);

  Marketing_templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function Marketing_templateObject22() {
  var data = taggedTemplateLiteral_default()(["\n        height: 270px;\n        transform: translate(0, calc(-17.5vw + 2px - 200px));\n      "]);

  Marketing_templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function Marketing_templateObject21() {
  var data = taggedTemplateLiteral_default()(["\n      transform: translate(0, calc(35vw - 2px));\n    "]);

  Marketing_templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function Marketing_templateObject20() {
  var data = taggedTemplateLiteral_default()(["\n      transform: translate(0, calc(-17.5vw + 2px));\n    "]);

  Marketing_templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function Marketing_templateObject19() {
  var data = taggedTemplateLiteral_default()(["\n      width: 100%;\n      left: 0;\n      height: 17.5vw;\n    "]);

  Marketing_templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function Marketing_templateObject18() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &:before, &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 100%;\n    left: 50%;\n    background: white;\n    top: 0;\n    width: 130px;\n    ", "\n  }\n  &:before {\n    transform: translateX(-194px);\n    ", "\n  }\n  &:after {\n    transform: translateX(64px);\n    ", "\n  }\n  &:first-child {\n    &:before {\n      ", "\n      ", "\n    }\n  }\n  &:last-child {\n    &:after {\n      ", "\n      ", "\n    }\n  }\n"]);

  Marketing_templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function Marketing_templateObject17() {
  var data = taggedTemplateLiteral_default()(["\n    width: 35vw;\n    height: 35vw;\n  "]);

  Marketing_templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function Marketing_templateObject16() {
  var data = taggedTemplateLiteral_default()(["\n  width: 130px;\n  height: 130px;\n  background-image: url(", ");\n  background-size: cover;\n  ", "\n"]);

  Marketing_templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function Marketing_templateObject15() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    top: 20px;\n    font-size: 18px;\n    text-align: justify;\n    line-height: 1.38;\n    margin: 10px 0 40px 0;\n    padding: 0 ", ";\n    z-index: 10;\n  "]);

  Marketing_templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function Marketing_templateObject14() {
  var data = taggedTemplateLiteral_default()(["\n    margin: 40px 0;\n  "]);

  Marketing_templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function Marketing_templateObject13() {
  var data = taggedTemplateLiteral_default()(["\n  text-align: center;\n  font-size: 20px;\n  line-height: 1.45;\n  margin: 40px 0;\n  ", "\n  ", "\n"]);

  Marketing_templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function Marketing_templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n    height: 101%;\n    width: 33vw;\n    top: 0;\n    right: 0;\n    left: auto;\n    bottom: auto;\n  "]);

  Marketing_templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function Marketing_templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  width: 100%;\n  height: 154px;\n  bottom: -50px;\n  left: 0;\n  background: white;\n  ", "\n"]);

  Marketing_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function Marketing_templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n    height: 101%;\n    width: 33vw;\n    top: 0;\n    left: 0;\n  "]);

  Marketing_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function Marketing_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    height: 198px;\n  "]);

  Marketing_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function Marketing_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  width: 100%;\n  height: 188px;\n  top: 0;\n  left: 0;\n  background: white;\n  ", "\n  ", "\n"]);

  Marketing_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Marketing_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    background-size: 200vw 38%;\n  "]);

  Marketing_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Marketing_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    background-size: 150vw 40%;\n  "]);

  Marketing_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Marketing_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  left: 0;\n  top: -99px;\n  height: 100px;\n  width: 100%;\n  background-image: url(", ");\n  z-index: 10;\n  background-size: 2420px 55%;\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  ", "\n  ", "\n"]);

  Marketing_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Marketing_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  overflow: hidden;\n"]);

  Marketing_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Marketing_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 0;\n  "]);

  Marketing_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Marketing_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    background-attachment: fixed;\n  "]);

  Marketing_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Marketing_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position:relative;\n  padding: 20px 0;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: bottom;\n  ", "\n  ", "\n"]);

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

var Marketing_Cont = external_styled_components_default.a.section(Marketing_templateObject(), BgTop_default.a, function (p) {
  return p.theme.min('md')(Marketing_templateObject2());
}, function (p) {
  return p.theme.max('md')(Marketing_templateObject3());
});
var Overflow = external_styled_components_default.a.div(Marketing_templateObject4());
var TopOverlay = external_styled_components_default.a.div(Marketing_templateObject5(), top_wave_default.a, function (p) {
  return p.theme.max('md')(Marketing_templateObject6());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject7());
});
var TopBlock = external_styled_components_default.a.div(Marketing_templateObject8(), function (p) {
  return p.theme.between('sm', 'md')(Marketing_templateObject9());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject10());
});
var BottomBlock = external_styled_components_default.a.div(Marketing_templateObject11(), function (p) {
  return p.theme.max('sm')(Marketing_templateObject12());
});
var Desc = external_styled_components_default()(atoms_Text)(Marketing_templateObject13(), function (p) {
  return p.theme.between('sm', 'md')(Marketing_templateObject14());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject15(), function (p) {
    return p.theme.general.mobilePadding;
  });
});
var Marketing_Image = external_styled_components_default.a.image(Marketing_templateObject16(), function (p) {
  return p.source;
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject17());
});
var ItemBox = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Box, extends_default()({
    md: 4,
    sm: 4,
    xs: 12
  }, p));
})(Marketing_templateObject18(), function (p) {
  return p.theme.max('sm')(Marketing_templateObject19());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject20());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject21());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject22());
}, function (p) {
  return p.theme.min('sm')(Marketing_templateObject23());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject24());
}, function (p) {
  return p.theme.min('sm')(Marketing_templateObject25());
});
var Marketing_Title = external_styled_components_default()(atoms_Text)(Marketing_templateObject26(), function (p) {
  return p.theme.between('sm', 'md')(Marketing_templateObject27());
}, function (p) {
  return p.theme.max('sm')(Marketing_templateObject28());
});
/* harmony default export */ var marketing_Marketing = (Object(external_react_i18next_["withTranslation"])()(Marketing_Marketing));
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/screenshots/screenshot1.png
var screenshot1 = __webpack_require__(45);
var screenshot1_default = /*#__PURE__*/__webpack_require__.n(screenshot1);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/screenshots/screenshot2.png
var screenshot2 = __webpack_require__(46);
var screenshot2_default = /*#__PURE__*/__webpack_require__.n(screenshot2);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/screenshots/screenshot3.png
var screenshot3 = __webpack_require__(47);
var screenshot3_default = /*#__PURE__*/__webpack_require__.n(screenshot3);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/screenshots/screenshot4.png
var screenshot4 = __webpack_require__(48);
var screenshot4_default = /*#__PURE__*/__webpack_require__.n(screenshot4);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/screenshots/screenshot5.png
var screenshot5 = __webpack_require__(49);
var screenshot5_default = /*#__PURE__*/__webpack_require__.n(screenshot5);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/screenshots/flower1.png
var flower1 = __webpack_require__(50);
var flower1_default = /*#__PURE__*/__webpack_require__.n(flower1);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/screenshots/flower2.png
var flower2 = __webpack_require__(51);
var flower2_default = /*#__PURE__*/__webpack_require__.n(flower2);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/screenshots/flower3.png
var flower3 = __webpack_require__(52);
var flower3_default = /*#__PURE__*/__webpack_require__.n(flower3);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/sati_app_logo.jpg
var sati_app_logo = __webpack_require__(53);
var sati_app_logo_default = /*#__PURE__*/__webpack_require__.n(sati_app_logo);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/how/How.js








function _templateObject52() {
  var data = taggedTemplateLiteral_default()(["\n    margin-top: 10px;\n    margin-bottom: 30px;\n  "]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = taggedTemplateLiteral_default()(["\n  margin-top: 50px;\n  margin-bottom: 100px;\n  ", "\n"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.9) translateX(27vw);\n  "]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.95) translateX(11vw);\n  "]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  transform: scale(0.85) translateX(228px);\n  ", "\n  ", "\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.9) translate(6vw, -28px);\n    filter: none;\n  "]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.95) translate(0, -28px);\n  "]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  transform: scale(0.85) translate(95px, -28px);\n  filter: blur(0.66px);\n  ", "\n  ", "\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.9) translate(49.8vw, 28px);\n    filter: none;\n  "]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.95) translate(22vw, 28px);\n  "]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = taggedTemplateLiteral_default()(["\n  transform: scale(0.85) translate(370px, 28px);\n  filter: blur(0.33px);\n  ", "\n  ", "\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(1) rotateY(0) translateX(42vw);\n  "]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.95) rotateY(0) translateX(20vw);\n  "]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = taggedTemplateLiteral_default()(["\n  transform: scale(0.95) rotateY(-2deg) translateX(270px);\n  ", "\n  ", "\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.93) rotateY(8deg) translateX(7vw);\n  "]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.8) rotateY(9deg) translateX(-1.6vw);\n  "]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function How_templateObject36() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  transform: scale(0.8) rotateY(9deg) translateX(100px);\n  ", "\n  ", "\n"]);

  How_templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function How_templateObject35() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translateX(42vw);\n  "]);

  How_templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function How_templateObject34() {
  var data = taggedTemplateLiteral_default()(["\n    transform: translateX(23vw);\n  "]);

  How_templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function How_templateObject33() {
  var data = taggedTemplateLiteral_default()(["\n  transform: translateX(258px);\n  ", "\n  ", "\n"]);

  How_templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function How_templateObject32() {
  var data = taggedTemplateLiteral_default()(["\n    filter: none;\n    transform: scale(0.88) translateX(23vw);\n  "]);

  How_templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function How_templateObject31() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.88) translateX(13vw);\n  "]);

  How_templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function How_templateObject30() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  transform: scale(0.88) translateX(136px);\n  filter: blur(0.33px);\n  ", "\n  ", "\n"]);

  How_templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function How_templateObject29() {
  var data = taggedTemplateLiteral_default()(["\n    filter: none;\n    transform: scale(0.77) translateX(2vw);\n  "]);

  How_templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function How_templateObject28() {
  var data = taggedTemplateLiteral_default()(["\n    transform: scale(0.77) translateX(", ");\n  "]);

  How_templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function How_templateObject27() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  transform: scale(0.77);\n  filter: blur(0.66px);\n  ", "\n  ", "\n"]);

  How_templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function How_templateObject26() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 12px;\n  "]);

  How_templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function How_templateObject25() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 14px;\n  margin: 7px 0 0;\n  ", "\n"]);

  How_templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function How_templateObject24() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 12px;\n  "]);

  How_templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function How_templateObject23() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 14px;\n  margin: 0;\n  color: ", ";\n  ", "\n"]);

  How_templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function How_templateObject22() {
  var data = taggedTemplateLiteral_default()(["\n    font-size: 13px;\n  "]);

  How_templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function How_templateObject21() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0;\n  font-weight: 200;\n  font-size: 14px;\n  padding-left: 10px;\n  text-transform: uppercase;\n  color: ", ";\n  ", "\n"]);

  How_templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function How_templateObject20() {
  var data = taggedTemplateLiteral_default()(["\n    width: 14px;\n    height: 14px;\n  "]);

  How_templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function How_templateObject19() {
  var data = taggedTemplateLiteral_default()(["\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  background-image: url(", ");\n  background-size: cover;\n  ", "\n"]);

  How_templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function How_templateObject18() {
  var data = taggedTemplateLiteral_default()(["\n      margin-bottom: 0;\n    "]);

  How_templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function How_templateObject17() {
  var data = taggedTemplateLiteral_default()(["\n    width: 90vw;\n    margin-left: 5vw;\n  "]);

  How_templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function How_templateObject16() {
  var data = taggedTemplateLiteral_default()(["\n    width: 46vw;\n    margin-left: ", ";\n  "]);

  How_templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function How_templateObject15() {
  var data = taggedTemplateLiteral_default()(["\n  width: 400px;\n  padding: 14px;\n  background: #eeeeee;\n  border-radius: 16px;\n  margin-bottom: 18px;\n  margin-left: 40px;\n  box-shadow: 7px 7px 20px rgba(0, 0, 0, .2);\n  &:nth-child(2) {\n    opacity: 0.75;\n  }\n  &:nth-child(3) {\n    opacity: 0.5;\n  }\n  ", "\n  ", "\n  &:last-child {\n    ", "\n  }\n"]);

  How_templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function How_templateObject14() {
  var data = taggedTemplateLiteral_default()(["\n    width: 50vw;\n    height: 108.2vw;\n  "]);

  How_templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function How_templateObject13() {
  var data = taggedTemplateLiteral_default()(["\n    width: 25vw;\n    height: 54.1vw;\n  "]);

  How_templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function How_templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n  height: 500px;\n  width: 231px;\n  border-radius: 20px;\n  box-shadow: 10px 10px 30px rgba(0, 0, 0, .2);\n  transform-style: preserve-3d;\n  background-image: url(", ");\n  background-size: cover;\n  ", "\n  ", "\n"]);

  How_templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function How_templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n    padding-bottom: 50px;\n  "]);

  How_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function How_templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  background: white;\n  z-index: 10;\n  padding-bottom: 70px;\n  ", "\n"]);

  How_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function How_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: justify;\n    padding: 0 ", ";\n  "]);

  How_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function How_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n  text-align: ", ";\n  margin-bottom: 0;\n  margin-top: 0;\n  ", "\n"]);

  How_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function How_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: center;\n    padding: ", " calc(", " * 2);\n    margin-bottom: -3px;\n    margin-top: 0;\n    font-size: 30px;\n  "]);

  How_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function How_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  color: ", ";\n  font-weight: 200;\n  font-size: 42px;\n  margin-bottom: 28px;\n  margin-top: -30px;\n  text-align: ", ";\n  ", "\n"]);

  How_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function How_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n          order: 1;\n        "]);

  How_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function How_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n          order: 2;\n        "]);

  How_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function How_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    > div {\n      &:nth-child(1) {\n        ", "\n      }\n      &:nth-child(1) {\n        ", "\n      }\n    }\n  "]);

  How_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function How_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n      margin-bottom: 100px;\n    "]);

  How_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function How_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  &:not(:last-child) {\n    ", "\n  }\n  ", "\n"]);

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
})(How_templateObject(), function (p) {
  return p.theme.max('sm')(How_templateObject2());
}, function (p) {
  return p.reverseMobile && Object(external_styled_components_["css"])(How_templateObject3(), p.theme.max('sm')(How_templateObject4()), p.theme.max('sm')(How_templateObject5()));
});
var ItemHeading = external_styled_components_default.a.h3(How_templateObject6(), function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.right ? 'right' : 'left';
}, function (p) {
  return p.theme.max('sm')(How_templateObject7(), p.theme.general.mobilePadding, p.theme.general.mobilePadding);
});
var ItemText = external_styled_components_default()(atoms_Text)(How_templateObject8(), function (p) {
  return p.right ? 'right' : 'left';
}, function (p) {
  return p.theme.max('sm')(How_templateObject9(), p.theme.general.mobilePadding);
});
var How_Cont = external_styled_components_default.a.div(How_templateObject10(), function (p) {
  return p.theme.max('sm')(How_templateObject11());
});
var Screen = external_styled_components_default.a.div(How_templateObject12(), function (p) {
  return p.source;
}, function (p) {
  return p.theme.between('sm', 'md')(How_templateObject13());
}, function (p) {
  return p.theme.max('sm')(How_templateObject14());
});
var NotificationCont = external_styled_components_default.a.div(How_templateObject15(), function (p) {
  return p.theme.between('sm', 'md')(How_templateObject16(), function (p) {
    return p.theme.general.mobilePadding;
  });
}, function (p) {
  return p.theme.max('sm')(How_templateObject17());
}, function (p) {
  return p.theme.max('sm')(How_templateObject18());
});
var NotificationIcon = external_styled_components_default.a.div(How_templateObject19(), sati_app_logo_default.a, function (p) {
  return p.theme.max('sm')(How_templateObject20());
});
var NotificationTitle = external_styled_components_default.a.h5(How_templateObject21(), function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.max('sm')(How_templateObject22());
});
var NotificationTime = external_styled_components_default.a.p(How_templateObject23(), function (p) {
  return p.theme.colors.grays.regular;
}, function (p) {
  return p.theme.max('sm')(How_templateObject24());
});
var NotificationText = external_styled_components_default()(atoms_Text)(How_templateObject25(), function (p) {
  return p.theme.max('sm')(How_templateObject26());
});
var MainView1 = external_styled_components_default()(Screen)(How_templateObject27(), function (p) {
  return p.theme.between('sm', 'md')(How_templateObject28(), p.theme.general.mobilePadding);
}, function (p) {
  return p.theme.max('sm')(How_templateObject29());
});
var MainView2 = external_styled_components_default()(Screen)(How_templateObject30(), function (p) {
  return p.theme.between('sm', 'md')(How_templateObject31());
}, function (p) {
  return p.theme.max('sm')(How_templateObject32());
});
var MainView3 = external_styled_components_default()(Screen)(How_templateObject33(), function (p) {
  return p.theme.between('sm', 'md')(How_templateObject34());
}, function (p) {
  return p.theme.max('sm')(How_templateObject35());
});
var TextScreen1 = external_styled_components_default()(Screen)(How_templateObject36(), function (p) {
  return p.theme.between('sm', 'md')(_templateObject37());
}, function (p) {
  return p.theme.max('sm')(_templateObject38());
});
var TextScreen2 = external_styled_components_default()(Screen)(_templateObject39(), function (p) {
  return p.theme.between('sm', 'md')(_templateObject40());
}, function (p) {
  return p.theme.max('sm')(_templateObject41());
});
var FlowerScreen1 = external_styled_components_default()(Screen)(_templateObject42(), function (p) {
  return p.theme.between('sm', 'md')(_templateObject43());
}, function (p) {
  return p.theme.max('sm')(_templateObject44());
});
var FlowerScreen2 = external_styled_components_default()(Screen)(_templateObject45(), function (p) {
  return p.theme.between('sm', 'md')(_templateObject46());
}, function (p) {
  return p.theme.max('sm')(_templateObject47());
});
var FlowerScreen3 = external_styled_components_default()(Screen)(_templateObject48(), function (p) {
  return p.theme.between('sm', 'md')(_templateObject49());
}, function (p) {
  return p.theme.max('sm')(_templateObject50());
});
var How_SectionHeading = external_styled_components_default()(atoms_SectionHeading)(_templateObject51(), function (p) {
  return p.theme.max('sm')(_templateObject52());
});
/* harmony default export */ var how_How = (Object(external_react_i18next_["withTranslation"])()(How_How));
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/bg_inside.jpg
var bg_inside = __webpack_require__(54);
var bg_inside_default = /*#__PURE__*/__webpack_require__.n(bg_inside);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/icons/meditation.png
var meditation = __webpack_require__(55);
var meditation_default = /*#__PURE__*/__webpack_require__.n(meditation);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/icons/brain.png
var brain = __webpack_require__(56);
var brain_default = /*#__PURE__*/__webpack_require__.n(brain);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/icons/books.png
var books = __webpack_require__(57);
var books_default = /*#__PURE__*/__webpack_require__.n(books);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/icons/buddhism.png
var buddhism = __webpack_require__(58);
var buddhism_default = /*#__PURE__*/__webpack_require__.n(buddhism);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/wave2.png
var wave2 = __webpack_require__(59);
var wave2_default = /*#__PURE__*/__webpack_require__.n(wave2);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/inside/Inside.js







function Inside_templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: justify;\n    padding: 0 ", ";\n  "]);

  Inside_templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function Inside_templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n  margin-bottom: 40px;\n  ", "\n"]);

  Inside_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function Inside_templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: center;\n    font-size: 18px;\n    padding: 0 ", ";\n  "]);

  Inside_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function Inside_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n  font-weight: 800;\n  font-size: 20px;\n  margin-bottom: 10px;\n  ", "\n"]);

  Inside_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function Inside_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n  margin-top: 20px;\n  margin-bottom: 30px;\n"]);

  Inside_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Inside_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    top: 0;\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n  "]);

  Inside_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Inside_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  top: 22px;\n  width: 60px;\n  height: 60px;\n  background-image: url(", ");\n  background-size: cover;\n  ", "\n"]);

  Inside_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Inside_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  width: 120%;\n  height: 50px;\n  bottom: 0;\n  left: -5%;\n  background-image:url(", ");\n  background-size: 103% 35%;\n  background-position: bottom;\n  background-repeat: no-repeat;\n"]);

  Inside_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Inside_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  top: 0;\n  left: 0;\n  background-image:url(", ");\n  background-size: 103% 25%;\n  background-repeat: no-repeat;\n"]);

  Inside_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Inside_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    padding-bottom: 30px;\n  "]);

  Inside_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Inside_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    background-attachment: fixed;\n    background-size: 120%;\n  "]);

  Inside_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Inside_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  padding: 70px 0;\n  background: url(", ");\n  background-size: cover;\n  overflow: hidden;\n  ", "\n  ", "\n"]);

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

var Inside_Cont = external_styled_components_default.a.div(Inside_templateObject(), bg_inside_default.a, function (p) {
  return p.theme.min('md')(Inside_templateObject2());
}, function (p) {
  return p.theme.max('sm')(Inside_templateObject3());
});
var TopWave = external_styled_components_default.a.div(Inside_templateObject4(), wave2_default.a);
var BottomWave = external_styled_components_default.a.div(Inside_templateObject5(), top_wave_default.a);
var Inside_Icon = external_styled_components_default.a.div(Inside_templateObject6(), function (p) {
  return p.source;
}, function (p) {
  return p.theme.max('md')(Inside_templateObject7());
});
var Inside_SectionHeading = external_styled_components_default()(atoms_SectionHeading)(Inside_templateObject8());
var Inside_Heading = external_styled_components_default.a.h3(Inside_templateObject9(), function (p) {
  return p.theme.max('md')(Inside_templateObject10(), p.theme.general.mobilePadding);
});
var Inside_Desc = external_styled_components_default()(atoms_Text)(Inside_templateObject11(), function (p) {
  return p.theme.max('md')(Inside_templateObject12(), p.theme.general.mobilePadding);
});
/* harmony default export */ var inside_Inside = (Object(external_react_i18next_["withTranslation"])()(Inside_Inside));
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/advantages/Advantages.js








function Advantages_templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n    position: absolute;\n    top: -30px;\n    width: 220px;\n    padding-left: 0 !important;\n    font-size: 220px;\n    z-index: -1;\n    padding-top: 20px;\n  "]);

  Advantages_templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function Advantages_templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    left: ", ";\n  "]);

  Advantages_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function Advantages_templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n  width: 80px;\n  overflow: hidden;\n  height: 170px;\n  font-size: 170px;\n  font-weight: 800;\n  line-height: 150px;\n  padding-top: 8px;\n  margin: 0;\n  color: ", ";\n  opacity: 0.5;\n  padding-left: ", ";\n  ", "\n  ", "\n"]);

  Advantages_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function Advantages_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: justify;\n    padding: 0 ", ";\n  "]);

  Advantages_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function Advantages_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n    padding-left: 40px;\n  "]);

  Advantages_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Advantages_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n  color: ", ";\n  margin-top: 10px;\n  margin-bottom: 40px;\n  padding-left: 12px;\n  ", "\n  ", "\n"]);

  Advantages_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Advantages_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n      width: 0;\n    "]);

  Advantages_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Advantages_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  &:nth-child(1) {\n    ", "\n  }\n"]);

  Advantages_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Advantages_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: center;\n    padding: 0 ", ";\n  "]);

  Advantages_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Advantages_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    padding-left: 40px;\n  "]);

  Advantages_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Advantages_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  color: ", ";\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 0;\n  padding-left: 12px;\n  ", "\n  ", "\n"]);

  Advantages_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Advantages_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 50px 0 10px;\n"]);

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

var Advantages_Cont = external_styled_components_default.a.section(Advantages_templateObject());
var Advantages_Heading = external_styled_components_default.a.h3(Advantages_templateObject2(), function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.between('sm', 'md')(Advantages_templateObject3());
}, function (p) {
  return p.theme.max('sm')(Advantages_templateObject4(), function (p) {
    return p.theme.general.mobilePadding;
  });
});
var ItemFlex = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Flex, extends_default()({
    alignItems: "center",
    grid: true
  }, p));
})(Advantages_templateObject5(), function (p) {
  return p.theme.max('sm')(Advantages_templateObject6());
});
var Advantages_Desc = external_styled_components_default()(atoms_Text)(Advantages_templateObject7(), function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.between('sm', 'md')(Advantages_templateObject8());
}, function (p) {
  return p.theme.max('sm')(Advantages_templateObject9(), function (p) {
    return p.theme.general.mobilePadding;
  });
});
var NumberCont = external_styled_components_default.a.p(Advantages_templateObject10(), function (p) {
  return p.theme.colors.grays.light;
}, function (p) {
  return p.isOne ? '33px' : 0;
}, function (p) {
  return p.theme.between('sm', 'md')(Advantages_templateObject11(), function (p) {
    return p.theme.general.mobilePadding;
  });
}, function (p) {
  return p.theme.max('sm')(Advantages_templateObject12());
});
/* harmony default export */ var advantages_Advantages = (Object(external_react_i18next_["withTranslation"])()(Advantages_Advantages));
// EXTERNAL MODULE: external "react-compare-image"
var external_react_compare_image_ = __webpack_require__(60);
var external_react_compare_image_default = /*#__PURE__*/__webpack_require__.n(external_react_compare_image_);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/positive_brain.png
var positive_brain = __webpack_require__(61);
var positive_brain_default = /*#__PURE__*/__webpack_require__.n(positive_brain);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/negative_brain.png
var negative_brain = __webpack_require__(62);
var negative_brain_default = /*#__PURE__*/__webpack_require__.n(negative_brain);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/icons/sati_green.png
var sati_green = __webpack_require__(63);
var sati_green_default = /*#__PURE__*/__webpack_require__.n(sati_green);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/fits/Fits.js







function Fits_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  font-size: 18px;\n  color: ", ";\n  margin-bottom: 20px;\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-image: url(", ");\n    background-size: cover;\n    left: -36px;\n    top: 3px;\n  }\n"]);

  Fits_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Fits_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 0 ", " 0 calc(", " * 2.6);\n  "]);

  Fits_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Fits_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  list-style: none;\n  ", "\n"]);

  Fits_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Fits_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 20px 0;\n"]);

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

var Fits_Cont = external_styled_components_default.a.section(Fits_templateObject());
var Fits_List = external_styled_components_default.a.ul(Fits_templateObject2(), function (p) {
  return p.theme.max('sm')(Fits_templateObject3(), function (p) {
    return p.theme.general.mobilePadding;
  }, function (p) {
    return p.theme.general.mobilePadding;
  });
});
var Item = external_styled_components_default.a.li(Fits_templateObject4(), function (p) {
  return p.theme.colors.black;
}, sati_green_default.a);
/* harmony default export */ var fits_Fits = (Object(external_react_i18next_["withTranslation"])()(Fits_Fits));
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/aura.jpg
var aura = __webpack_require__(64);
var aura_default = /*#__PURE__*/__webpack_require__.n(aura);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/breathe.jpg
var breathe = __webpack_require__(65);
var breathe_default = /*#__PURE__*/__webpack_require__.n(breathe);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/budhify.jpg
var budhify = __webpack_require__(66);
var budhify_default = /*#__PURE__*/__webpack_require__.n(budhify);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/calm.jpg
var calm = __webpack_require__(67);
var calm_default = /*#__PURE__*/__webpack_require__.n(calm);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/headspace.jpg
var headspace = __webpack_require__(68);
var headspace_default = /*#__PURE__*/__webpack_require__.n(headspace);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/insight.jpg
var insight = __webpack_require__(69);
var insight_default = /*#__PURE__*/__webpack_require__.n(insight);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/meditopia.jpg
var meditopia = __webpack_require__(70);
var meditopia_default = /*#__PURE__*/__webpack_require__.n(meditopia);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/percent.jpg
var percent = __webpack_require__(71);
var percent_default = /*#__PURE__*/__webpack_require__.n(percent);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/app_icons/simple.jpg
var simple = __webpack_require__(72);
var simple_default = /*#__PURE__*/__webpack_require__.n(simple);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/nofit/NoFit.js








function NoFit_templateObject9() {
  var data = taggedTemplateLiteral_default()(["\n    transform: none;\n  "]);

  NoFit_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function NoFit_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-wrap: wrap;\n  transform: translateX(-18px) scale(0.92) skewX(-7deg) rotateY(-11deg);\n  ", "\n"]);

  NoFit_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function NoFit_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    > div {\n      &:nth-child(2) {\n        order: 1;\n        padding: 0 calc(", " + 15px);\n        margin-bottom: ", ";\n      }\n      &:nth-child(1) {\n        order: 2;\n      }\n    }\n  "]);

  NoFit_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function NoFit_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  perspective: 500px;\n  ", "\n"]);

  NoFit_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function NoFit_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    width: calc((100vw - (", " * 4)) / 3);\n    height: calc((100vw - (", " * 4)) / 3);\n    margin: 0 0 ", " ", ";\n  "]);

  NoFit_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function NoFit_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  display: block;\n  width: 100px;\n  height: 100px;\n  border-radius: 14px;\n  margin: 20px;\n  background-image: url(", ");\n  background-size: 102%;\n  background-position: center;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: all .4s ease;\n  ", "\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);

  NoFit_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function NoFit_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    text-align: justify;\n    &:last-of-type {\n      margin-bottom: 30px;\n    }\n  "]);

  NoFit_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function NoFit_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  ", "\n"]);

  NoFit_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function NoFit_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 20px 0;\n  overflow: hidden;\n"]);

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

var NoFit_Cont = external_styled_components_default.a.section(NoFit_templateObject());
var NoFit_Text = external_styled_components_default()(atoms_Text)(NoFit_templateObject2(), function (p) {
  return p.theme.max('sm')(NoFit_templateObject3());
});
var AppIcon = external_styled_components_default.a.a(NoFit_templateObject4(), function (p) {
  return p.image;
}, function (p) {
  return p.theme.max('sm')(NoFit_templateObject5(), p.theme.general.mobilePadding, p.theme.general.mobilePadding, p.theme.general.mobilePadding, p.theme.general.mobilePadding);
});
var FlexCont = external_styled_components_default()(function (p) {
  return external_react_default.a.createElement(atoms_Flex, extends_default()({
    alignItems: "center",
    grid: true
  }, p));
})(NoFit_templateObject6(), function (p) {
  return p.theme.max('sm')(NoFit_templateObject7(), p.theme.general.mobilePadding, p.theme.general.mobilePadding);
});
var AppCont = external_styled_components_default.a.div(NoFit_templateObject8(), function (p) {
  return p.theme.max('sm')(NoFit_templateObject9());
});
/* harmony default export */ var nofit_NoFit = (Object(external_react_i18next_["withTranslation"])()(NoFit_NoFit));
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/faq/Faq.js









function Faq_templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  top: 8px;\n  left: 9px;\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 2px;\n    width: 14px;\n    background: ", ";\n    transform: rotate(45deg) translate(-6px);\n  }\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 2px;\n    width: 14px;\n    background: ", ";\n    transform: rotate(-45deg) translate(6px);\n  }\n"]);

  Faq_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Faq_templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  top: 0;\n  left: 9px;\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 2px;\n    width: 14px;\n    background: ", ";\n    transform: rotate(-45deg) translate(-6px);\n  }\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 2px;\n    width: 14px;\n    background: ", ";\n    transform: rotate(45deg) translate(6px);\n  }\n"]);

  Faq_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Faq_templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  margin-top: 10px;\n  padding-right: 30px;\n  padding-left: 45px;\n"]);

  Faq_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Faq_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    left: 7px;\n  "]);

  Faq_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Faq_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  font-size: 70px;\n  background: transparent;\n  padding: 7px 0;\n  border: 0;\n  cursor: pointer;\n  ", "\n"]);

  Faq_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Faq_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  padding-right: 30px;\n  padding-left: 45px;\n  cursor: pointer;\n  &:hover {\n    color: ", ";\n  }\n"]);

  Faq_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Faq_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  position: relative;\n  margin-bottom: 30px;\n"]);

  Faq_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Faq_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 20px 0;\n"]);

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

var Faq_Cont = external_styled_components_default.a.div(Faq_templateObject());
var QuestionCont = external_styled_components_default.a.div(Faq_templateObject2());
var QuestionTitle = external_styled_components_default.a.h4(Faq_templateObject3(), function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.colors.primary;
});
var QuestionButton = external_styled_components_default.a.button(Faq_templateObject4(), function (p) {
  return p.theme.max('sm')(Faq_templateObject5());
});
var QuestionText = external_styled_components_default()(atoms_Text)(Faq_templateObject6());
var AngleUp = external_styled_components_default.a.div(Faq_templateObject7(), function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.primary;
});
var AngleDown = external_styled_components_default.a.div(Faq_templateObject8(), function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.primary;
});
/* harmony default export */ var faq_Faq = (Object(external_react_i18next_["withTranslation"])()(Faq_Faq));
// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/images/footer_b.jpg
var footer_b = __webpack_require__(73);
var footer_b_default = /*#__PURE__*/__webpack_require__.n(footer_b);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/components/cost/Cost.js







function Cost_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 0 ", ";\n    text-align: justify;\n  "]);

  Cost_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Cost_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 22px;\n  text-align: center;\n  color: white;\n  ", "\n"]);

  Cost_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Cost_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  position: absolute;\n  width: 100vw;\n  height: 220vh;\n  bottom: 0;\n  left: 0;\n  background-image: url(", ");\n  background-size: cover;\n  z-index: -1;\n"]);

  Cost_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Cost_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  position:relative;\n  padding: 20px 0;\n  background-size: cover;\n  padding-bottom: 200px;\n"]);

  Cost_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Cost_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n"]);

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

var Cost_SectionHeading = external_styled_components_default()(atoms_SectionHeading)(Cost_templateObject());
var Cost_Cont = external_styled_components_default.a.div(Cost_templateObject2());
var BottomBg = external_styled_components_default.a.div(Cost_templateObject3(), footer_b_default.a);
var Cost_Desc = external_styled_components_default()(atoms_Text)(Cost_templateObject4(), function (p) {
  return p.theme.max('sm')(Cost_templateObject5(), p.theme.general.mobilePadding);
});
/* harmony default export */ var cost_Cost = (Object(external_react_i18next_["withTranslation"])()(Cost_Cost));
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/pages/Landing.js


















 // import Why from '../components/why/Why';
// import FirstStep from '../components/firststep/FirstStep';
// import Ask from '../components/ask/Ask';
// import Question from '../components/question/Question';
// import Bottom from '../components/bottom/Bottom';

external_react_ga_default.a.initialize('');
external_react_ga_default.a.pageview(window.location.pathname);

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
var external_styled_normalize_ = __webpack_require__(74);
var external_styled_normalize_default = /*#__PURE__*/__webpack_require__.n(external_styled_normalize_);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-Thin.ttf
var TT_Norms_Pro_Thin = __webpack_require__(75);
var TT_Norms_Pro_Thin_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Thin);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-ExtraLight.ttf
var TT_Norms_Pro_ExtraLight = __webpack_require__(76);
var TT_Norms_Pro_ExtraLight_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_ExtraLight);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-Light.ttf
var TT_Norms_Pro_Light = __webpack_require__(77);
var TT_Norms_Pro_Light_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Light);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-Normal.ttf
var TT_Norms_Pro_Normal = __webpack_require__(78);
var TT_Norms_Pro_Normal_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Normal);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-Medium.ttf
var TT_Norms_Pro_Medium = __webpack_require__(79);
var TT_Norms_Pro_Medium_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Medium);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-DemiBold.ttf
var TT_Norms_Pro_DemiBold = __webpack_require__(80);
var TT_Norms_Pro_DemiBold_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_DemiBold);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-Bold.ttf
var TT_Norms_Pro_Bold = __webpack_require__(81);
var TT_Norms_Pro_Bold_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Bold);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-ExtraBold.ttf
var TT_Norms_Pro_ExtraBold = __webpack_require__(82);
var TT_Norms_Pro_ExtraBold_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_ExtraBold);

// EXTERNAL MODULE: /Users/user/projects/sati_one_landing/src/core/assets/fonts/TT-Norms-Pro-Black.ttf
var TT_Norms_Pro_Black = __webpack_require__(83);
var TT_Norms_Pro_Black_default = /*#__PURE__*/__webpack_require__.n(TT_Norms_Pro_Black);

// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/globalStyles.js


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
// CONCATENATED MODULE: /Users/user/projects/sati_one_landing/src/core/ui/layouts/AppRoot.js











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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_user_projects_sati_one_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
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
  location: "/Users/user/projects/sati_one_landing",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404': __webpack_require__(88)["default"]
});
var notFoundTemplate = '/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404';

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactStatic = __webpack_require__(21);

var _router = __webpack_require__(86);

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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-flags-select");

/***/ }),
/* 34 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Top\":{\"title\":\"40-day meditation <br/>retreat in your pocket\",\"description\":\"Your first step towards mindfulness!\"},\"Marketing\":{\"description\":\"Мы подготовили для вас самый полный <strong>40-дневный курс осознанности</strong>, основанный на слиянии восточных знаний с современной нейронаукой. Всего <strong>10-20 минут в день</strong>, в течение сорока дней, и вы:\",\"box-1\":{\"title\":\"Will learn how to meditate right\"},\"box-2\":{\"title\":\"Understand the essentials of buddhism\"},\"box-3\":{\"title\":\"Bring mindfulness to your normal life\"}},\"How\":{\"title\":\"How the app works?\",\"box-1\":{\"title\":\"Daily audio sessions\",\"text-1\":\"Each session starts with a theoretical part, and then we get to guided meditation practice\",\"text-2\":\"We'll start from approximately 10 minutes, and reach 20-30 minutes in the end of the course\"},\"box-2\":{\"title\":\"Small assessments\",\"text-1\":\"During the day, you will need to complete a tiny assessments and write that down. This can be just an exploration, or something to think about\",\"text-2\":\"Only passing the knowledge through yourself, you can get the real learning.\"},\"box-3\":{\"title\":\"Smart notifications\",\"text-1\":\"During the day, you will get an unobtrusive notifications, that will help you integrate the knowledge to your life\"},\"box-4\":{\"title\":\"Track your minds condition\",\"text-1\":\"As you meditate, your Flower of life will be harmonic, if you pass the days, it will get dissolved\",\"text-2\":\"Algorithm is based on the real research and reflects the true state of your mind\"}},\"Inside\":{\"title\":\"Whats inside the course?\",\"box-1\":{\"title\":\"Most effective authentic meditation techniques\",\"description\":\"We extracted the best from the teachings of various eastern practicioners, such as Tick Naht Ton, Dogen, Ekhart Tolle etc\"},\"box-2\":{\"title\":\"Essentials of buddhist philosophy, free of cosmology and religion\",\"description\":\"We translate the core of buddhism as a logical and harmonic philosophical system. We extracted the main and overlapping from the top schools, like zen, theravada and mahayana.\"},\"box-3\":{\"title\":\"Effective scientific learning methods\",\"description\":\"Course is structured with respect to the recent advances in the neuroscience of learning. Methods used guarantee, that our course is the shortest path to mindful living\"},\"box-4\":{\"title\":\"Precise neuroscientific basis of every aspect of knowledge\",\"description\":\"Our course is a unique junction of advanced neuroscience and ancient knowledge. Every aspect of buddhism is backed by neuroiscience, and you see the knowledge from various angles\"}},\"Advantages\":{\"title\":\"\",\"box-1\":{\"title\":\"Authentic techniques, no marketing catches\",\"description\":\"Forget about useless meditations like meditatio of sleep, relaxation etc. Its not true. We are giving to you only the authentic techniques, without any transformation.\"},\"box-2\":{\"title\":\"You get the whole mindset, not only the skill\",\"description\":\"Without the philosophical framework, meditation is just a relaxation technique. By shaping your picture of the world and mindset, you are dissolving the core of your mental problems and obstacles.\"},\"box-3\":{\"title\":\"Course is free from esotherics, ritualism, religion and cosmology\",\"description\":\"We see buddhism as a philosophy, not the religion\"},\"box-4\":{\"title\":\"Our goal is bringing mindfulness to your life\",\"description\":\"We do not teach you how to meditate with a phone, we teach you to bring mindfulness into your real life, to unleash your true potential\"}},\"Fits\":{\"title\":\"Our app is a perfect fit, if you:\",\"text-1\":\"heard a lot about mindfulness and meditation, but don't know what to start with\",\"text-2\":\"tried meditating with another apps, but the courses they give you were not effective\",\"text-3\":\"practice meditation already, but need a strong theoretical basis and systematised knowledge\",\"text-4\":\"look for an all-in-one meditation app to fit your needs\"},\"NoFit\":{\"title\":\"It can not fit you in some cases:\",\"text-1\":\"This course is created for people who have a strong decision to change. You need to have at least 10-30 minutes each day\",\"text-2\":\"The skill can be learned all your life, so if you see meditation as a simple relaxation technique, there are several apps that do the job pretty good.\"},\"Faq\":{\"title\":\"People usually ask\",\"question-1\":{\"title\":\"Why 40 days?\",\"text\":\"According to the recent research, 40 days is guaranteed to get the new skill developed to automatism. Beside that, 40 is a sacral number in many traditions, who knows maybe that has something\"},\"question-2\":{\"title\":\"I'm a member of a religious confession (an atheist). Does it fit me?\",\"text\":\"Yes, totally! We reduce buddhism to a well structured, logical and scientifically proven philosophical system. It does not contradict with any mainstream religion. If you are an atheist, its also a great fit, as we have a scientific prove under all the aspects\"},\"question-3\":{\"title\":\"There are dozen of other apps, why should I pick that one?\",\"text\":\"Most other apps just scratch the surface of the real mindfulness practice, and pay no attention to the philosophical aspect. Most of them have a very short introductory courses (3-10 days), which is not sufficient for a new skill development (need at least 21). Contrary, beside practice, we give a strong theoretical framework and building a new skill together.\"},\"question-4\":{\"title\":\"How fast will i get the result?\",\"text\":\"It is all individual, and generally its a mistake to think about end result, you just need to practice, the result will come in its own time. By anticipating fast results you only slow that down. We can guaranty, that after pasing this skill, you will get s strong basement and all the tools and direction, to move further on your spiritual path.\"}},\"Cost\":{\"title\":\"How much is the app?\",\"description\":\"The regular price for such an apps starts from 35$ annual, but we believe in the consciousness of our users, so we let you <strong>pick the price for yourself</strong>. During the passing of the course, you will be able to pay whatever amount you think is sufficient. <strong>Help us build a new business, based on value and trust!</strong>\"}}");

/***/ }),
/* 35 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Top\":{\"title\":\"40-дневный медитационный <br/>ретрит в вашем смартфоне \",\"description\":\"Ваш первый шаг на пути к осознанности!\"},\"Marketing\":{\"description\":\"Мы подготовили для вас самый полный <strong>40-дневный курс осознанности</strong>, основанный на слиянии восточных знаний с современной нейронаукой. Всего <strong>10-20 минут в день</strong>, в течение сорока дней, и вы:\",\"box-1\":{\"title\":\"Привьете привычку медитировать\"},\"box-2\":{\"title\":\"Поймете суть буддистской философии\"},\"box-3\":{\"title\":\"Запустите процесс углубления осознанности\"}},\"How\":{\"title\":\"Как работает наш курс?\",\"box-1\":{\"title\":\"Каждожневные медитации\",\"text-1\":\"Каждый день вы будете получать аудио лекцию, начало которой будет состоять из теоретичесткой части, а остальная - из практики медитации.\",\"text-2\":\"Начнем с 10 минут в начале, и дойдем до 20-30 ближе к концу курса\"},\"box-2\":{\"title\":\"Небольшие задания на день\",\"text-1\":\"После медитации вам нужно будет выполнить небольшое задание, и записать ответ в виде текста. Это может быть наблюдение за определенными вещами в течение ня, оценка своего состояния и много другое.\",\"text-2\":\"Только пропустив знания и практику через себя, можно действительно усвоить материал.\"},\"box-3\":{\"title\":\"Напоминания в течение дня\",\"text-1\":\"После практики мы будем слать вам ненавязчивые но очень емкие и нужные push-оповещения, чтобы вы могли плавно и без напрягов интегрировать практику в смою жизнь\"},\"box-4\":{\"title\":\"Отслеживайте состояние ума\",\"text-1\":\"Вы можете отследить ваш прогресс и текущее состояние с помощью уникальной геймификации - Цветок жизни. Если вы медитируется без пропусков и стабильно, то цветок гармоничен и полон, если нет, то он становится негармоничным.\",\"text-2\":\"Алгоритм составлен на основе реальных исследований\"}},\"Inside\":{\"title\":\"Что входит в курс?\",\"box-1\":{\"title\":\"Самые эффективные медитационыые практики с подробным объяснением каждой детали\",\"description\":\"Мы выделили лучшее из книг таких известных мастеров дзен как Тик Фон Нхат, Сузуки Конзо, Аджан По, и структурировали это с помощью современных исследований в области науки осознанности\"},\"box-2\":{\"title\":\"Основы буддистского мировоззрения, лишенного космологии и мистицизма\",\"description\":\"В основе буддистской философии - очень мудрый и взвешанный подход к жизни, и мы передадим его вам как последовательную систему и логичную философскую систему. Мы взяли главное из различных школ, таких как дзен и випассана, и выделели только главное.\"},\"box-3\":{\"title\":\"Лучшие  проверенные научные методы по плавной интеграции осонанности в вашу жизнь\",\"description\":\"Курс разработан с учетом инновационных методов обучения, с оглядкой на последние открытия в физиологии обучения. В курс внедрены все самые современные техники, которые гарантируют понимание и усвоение теоретического материала, а также гарантируют кратчайший и эффективный путь к развитию навыка осознанности.\"},\"box-4\":{\"title\":\"Подробное объяснение работы Вашего мозга и того как он может некорректно работать\",\"description\":\"Все буддистские утверждения подкреплены конкретными научными исследованиями. Наш курс - уникальный симбиоз восточной мудрости и современной науки. С научной стороны, мы пираемся на работы Антонио Дамасио, Йон Кабат Зинн и других ученых.\"}},\"Advantages\":{\"title\":\"Что отличает нас от других\",\"box-1\":{\"title\":\"Оригинальные восточные техники, никаких маркетинговых уловок\",\"description\":\"Мы разработали курс для тех кто хочет действительно углубиться в эту технику, и по-этому наши медитации явщяются проверенными и взятыми из первоисточников, от лучших буддистских мастеров, таких как, улучшенные с помощью современной науки об обучении. Здесь вы не найдете медитаций сна, стресса и других уловок.\"},\"box-2\":{\"title\":\"Помимо медитации, мы объясняем основы буддистского мировоззрения\",\"description\":\"Без философии и изменения взглядов на жизнь, практика медитации будет простым психологическим упражнением, которое не раскроет всей своей прелести, если не будет подкреплено стройным и структурированным знанием.\"},\"box-3\":{\"title\":\"Курс абсолютно светский, без космологии и мистицизма, подкрепленный современной психологией и нейрофизиологией\",\"description\":\"Мы рассматриваем буддизм как философию, а не как религию. Каждый тезис который мы даем, мы подкрепляем современными научными исследованиями в области когнитивных наук и нейрофизиологии.\"},\"box-4\":{\"title\":\"Наша цель - интеграция осознанности в вашу жизнь.\",\"description\":\"Наш курс направлен не на то чтобы приучить вас к медитации с телефоном, а но то, чтобы вы привили себе привычку быть осознанным, и интегрировали буддистское мировоззрение в свою жизнь.\"}},\"Fits\":{\"title\":\"Курс подходит вам, если:\",\"text-1\":\"много слышали о медитации и осознанности, но не знаете с чего начать\",\"text-2\":\"пытались начать медитировать с помощью других прилодений иили курсов, но они для вас оказались недостаточно полными\",\"text-3\":\"вы уже практикуете медитацию какое-то время, но вам нехватает полной и структурированной системы базовых знаний\",\"text-4\":\"ищите что-то новое в жизни, что поможет вам поднться на новый уровень\"},\"NoFit\":{\"title\":\"Курс также может вам не подойти:\",\"text-1\":\"Этот курс предназначен для тех кто действительно решил встать на путь изменений и осознанности. Это требуем времени и усилий, как минимум 40 дней постоянной практики по 10-20 минут, но и после этого вам нужно развиваться дальше.\",\"text-2\":\"Этот навык можно развиватьвсю жизнь. Так что если вы рассматриваете медитацию как сугубо психологическую практику релаксации, то мы можем порекомендовать вам ряд других прилодений, которые справляются с задачей очень хорошо.\"},\"Faq\":{\"title\":\"Нас спрашивают\",\"question-1\":{\"title\":\"Почему именно 40 дней?\",\"text\":\"Согласно современным исследованиям, 40 дней - это гарантированно достаточное время чтобы сформировать новый навык, усвоить его на таком уровне, который не требует усилий и является частью вас. Помимо этого, число 40 является сакральным для многих религий\"},\"question-2\":{\"title\":\"Я исповедую другую религию (я атеист). Подходит ли мне это?\",\"text\":\"Наш курс является абсолюно светским, не сожержит ничего религиозного или эзотерического. Мы рассматриваем буддизм как стройную философскую систему, которая не противоречит никаким другим религиям или верованиям. Вы смело можете прохдить курс, если исповедуете другую религию, так как техники, и мировоззрение помогут вам достигать добродетелей вашего учения. Если вы атеист, то также вам пожходит этот курс, так как в основе его исключительно логика и наука\"},\"question-3\":{\"title\":\"Есть много других приложение, почему я должен использовать именно ваше?\",\"text\":\"Большинство популярных приложений очень поверхностно подходят к искусству осознанности, практически не касаются теории буддисткого мировоззрения и вцелом расчитаны на людей, не стремящихся сильно углубиться в практику. Большинство из них имеют короткие вводные программы (7-10 дней), чего физически недостаточно для формирования какого дибо навыка. Мы же, напротив, стремимся познакомить вас со всей полнотой осознанности, медитации, и буддистского мировоззрения\"},\"question-4\":{\"title\":\"Как быстро я почувствую результат?\",\"text\":\"Это все сугубо индивидуально, и вообще лучше не думать о результате, а просто практиковать. Мы можем гарантировать вам, что по прохождении этого курса вы будете обладать всеми навыками и знаниями, достаточными для продолжения своего пути к более осознанной жизни, но чтобы получить действительно озутимые результаты, нужно продолжать, и практика должна стать естественной частью жизни. Только тогда возможен хорогий рещультат, и именно в этом и цель нашего курса - сделать практику осознанности естественной и органичной частью вашей жизни\"}},\"Cost\":{\"title\":\"Сколько это стоит?\",\"description\":\"Обычно такие приложения являются платными и стоят от 3000р, но мы верим в сознательность наших пользователей, и по-этому мы даем вам возможность <strong>самим выбрать стоимость</strong>. Во время прохождения курса мы попросим вас самим назначить любую стоимость за курс, насколько он был вам полезен. <strong>Помогите нам построить компанию на новых основах</strong>\"}}");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-form-validator-core");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0ee41cfa966ea781275f2012056bfce8.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9539e03b9397b3eb254f5b6cd22d475a.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f360f693e83072c47934f9d8146d9cd6.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a5481dba7ac7ff6fbda7cfca0e9f59fa.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e0309dfd9a4c62c39db656d0df22cac.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "729e37290bd509b6fa2c3ddb694f2ec4.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d577fede16bd48ae611bfd8fe471c203.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c92887241122100da8c91539c3d0d967.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "358b89b8e1db297a63574a72266cd081.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "165aa657a31e0f7f1ffc350e151fa6d3.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "66a445eefc37546192cd6a1bd7e8bcfb.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f043b9f2154158d1e97f25e9a1861ba2.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b31b1e9f0d8caf031427224e7f7ed62.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a9f38a377f3638bcb3d214adb0d2a01.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1eb9f577c40dbfb15ce57501d814165d.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8cceed63e308eeb2baf16014091dcb14.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7a4560d2f3c4b7750841069104f16251.png";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ee3c268d1c23619b2031e0710707fe9e.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cb6cd48cc2c2fd67ffdd5783bd7c93e6.png";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-compare-image");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "585da359ff2fc6ded4b39185a89d1c56.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8fa334acf89a7461a76737c5b481f56.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b7641340abaf6a5db5e610b957d0f9bc.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "31bbd92304869447352d3b754c71f001.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ebb85e27b525b7cbb532fec99933bb33.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "51f674bd7dab6377b42b8b0ce69c00e3.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f73e67f67f91f1d96f2a0834ed050468.jpg";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d0dc292f346324a02e28f6d9c3e84c3e.jpg";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f8262caad82ada5e2e7a25ffe1010d0.jpg";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "02cccfec9b80ed0b40a3b5cc4aaf5b17.jpg";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "906e819f61a6ce8ef0a4bd16197631e1.jpg";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "de7f0f9ff3445fa773fbb06149e4de20.jpg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f1faf29d07ef13f87212dd34128dbf8.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a3484902ac0cf6f03d265260c0e24e0e.ttf";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3beb0957abf56c707e56498f0903619.ttf";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1b413af308adece662cdce87748edbf2.ttf";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a2ffa72728bda6c1a3228d46c4bab13.ttf";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f53f50bf86ed0285a386f516d19e6a2a.ttf";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "62618b593c97353490bcf112a4ea546d.ttf";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "33a327aaeb24b268c2b496ffc2d295f2.ttf";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "20790586fa1d70412d8683f90c0a2ce6.ttf";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aa4b73e3917aed58f4222ed05f197fc8.ttf";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
__webpack_require__(87);
module.exports = __webpack_require__(89);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(27)["default"];

var _require = __webpack_require__(28),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/user/projects/sati_one_landing/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(27)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26)(module)))

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(28),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(29),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/user/projects/sati_one_landing/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(29),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26)(module)))

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(90);

var _interopRequireDefault = __webpack_require__(91);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14));

var React = _interopRequireWildcard(__webpack_require__(1));

var _useStaticInfo = __webpack_require__(92);
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

var App = __webpack_require__(93)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("/Users/user/projects/sati_one_landing/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);


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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(94)(module)))

/***/ }),
/* 94 */
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
/* 95 */
/***/ (function(module, exports) {

module.exports = require("react-flags-select/css/react-flags-select.css");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1042e1d58ac392e0cd31749c4992fd75.png";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "74f056749c745c39601b3f649c125adf.png";

/***/ })
/******/ ]);
});