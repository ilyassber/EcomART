module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/elements/Article/article-utilities/ArticleCover.js":
/*!***********************************************************************!*\
  !*** ./components/elements/Article/article-utilities/ArticleCover.js ***!
  \***********************************************************************/
/*! exports provided: ArticleCover, ArticleCover1, ArticleCover2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCover", function() { return ArticleCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCover1", function() { return ArticleCover1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCover2", function() { return ArticleCover2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _article_widgets_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-widgets/Cover */ "./components/elements/Article/article-utilities/article-widgets/Cover.js");
/* harmony import */ var _article_widgets_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-widgets/Title */ "./components/elements/Article/article-utilities/article-widgets/Title.js");
/* harmony import */ var _article_widgets_Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-widgets/Description */ "./components/elements/Article/article-utilities/article-widgets/Description.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\Article\\article-utilities\\ArticleCover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ArticleCover({
  image,
  title,
  description
}) {
  return __jsx("div", {
    className: "flex flex-col justify-start items-center mb-2 w-11/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_article_widgets_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    height: "h-180",
    style: "relative flex flex-col justify-center items-center mt-4 w-full h-180  bg-gray-400 shadow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }, __jsx(_article_widgets_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    style: "absolute -bottom-12 flex justify-center items-center w-108 h-32 font-abrilfatface font-bold text-7xl bg-white bg-opacity-50 shadow-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })), __jsx(_article_widgets_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: description,
    style: "mt-10 p-5 w-full bg-white shadow-sm ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
}
function ArticleCover1({
  image,
  title,
  description
}) {
  return __jsx("div", {
    className: " flex flex-col justify-start items-center w-full  ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_article_widgets_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    style: "flex justify-center items-center w-64 h-24 font-bold text-3xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(_article_widgets_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: description,
    style: " p-5 w-6/12 bg-white shadow-sm ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx(_article_widgets_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    height: "h-204",
    style: "w-11/12 h-204 overflow-hidden bg-gray-400 shadow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }), __jsx(_article_widgets_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: description,
    style: "m-10 p-5 w-6/12 bg-white shadow-sm ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }));
}
function ArticleCover2({
  image,
  title,
  description
}) {
  return __jsx("div", {
    className: "relative flex flex-col justify-start items-center w-full  ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_article_widgets_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    style: "absolute top-48 left-24 flex justify-center items-center h-24 font-abrilfatface font-thin text-9xl text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(_article_widgets_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: description,
    style: " p-5 w-6/12 bg-white shadow-sm ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_article_widgets_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    height: "h-288",
    style: "w-full h-288 overflow-hidden bg-gray-400 shadow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }
  }), __jsx(_article_widgets_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: description,
    style: "absolute bottom-36 right-12 m-10 p-5 w-4/12 text-white shadow-sm bg-gray-900 bg-opacity-50 shadow-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }));
} // export default {
//     ArticleCover, ArticleCover1, ArticleCover2
// }

/***/ }),

/***/ "./components/elements/Article/article-utilities/article-widgets/Cover.js":
/*!********************************************************************************!*\
  !*** ./components/elements/Article/article-utilities/article-widgets/Cover.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\Article\\article-utilities\\article-widgets\\Cover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Cover({
  children,
  image,
  height,
  style
}) {
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-full overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: `${height} w-full object-cover object-center`,
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  })), children);
}

/***/ }),

/***/ "./components/elements/Article/article-utilities/article-widgets/Description.js":
/*!**************************************************************************************!*\
  !*** ./components/elements/Article/article-utilities/article-widgets/Description.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Description; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\Article\\article-utilities\\article-widgets\\Description.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Description({
  text,
  style
}) {
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, text));
}

/***/ }),

/***/ "./components/elements/Article/article-utilities/article-widgets/Title.js":
/*!********************************************************************************!*\
  !*** ./components/elements/Article/article-utilities/article-widgets/Title.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\Article\\article-utilities\\article-widgets\\Title.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Title({
  title,
  style
}) {
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, title));
}

/***/ }),

/***/ "./components/elements/StoriesEntry/StoriesEntryRes.js":
/*!*************************************************************!*\
  !*** ./components/elements/StoriesEntry/StoriesEntryRes.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoryEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/textDisplayer/Text */ "./components/graphics/textDisplayer/Text.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/md/ic_arrow_forward */ "react-icons-kit/md/ic_arrow_forward");
/* harmony import */ var react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\StoriesEntry\\StoriesEntryRes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function CentredCard({
  image,
  title,
  description,
  link,
  width,
  descriptionHeight,
  style
}) {
  const styleFont = {
    titleStyle: "my-3 font-kumbhsans font-bold md:text-xl hover:underline cursor-pointer text-center ",
    descriptionStyle: "font-amiri text-base text-center",
    linkStyle: "my-3 font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: `flex flex-col justify-center bg-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${width} flex justify-center overflow-hidden`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-full object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: `flex flex-col justify-start w-full items-center py-10 md:${descriptionHeight}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: link.text,
    style: `mr-2 text-gray-90`,
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_4__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 197
    }
  }))))));
}

function LeftCard({
  image,
  title,
  description,
  link,
  width,
  descriptionHeight
}) {
  const styleFont = {
    titleStyle: "my-3 font-kumbhsans font-bold md:text-xl hover:underline cursor-pointer text-center md:text-left",
    descriptionStyle: "font-amiri text-base text-center md:text-left",
    linkStyle: "my-3 font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: `flex flex-col md:flex-row justify-center bg-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${width} flex justify-center overflow-hidden`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-full object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: `flex flex-col justify-center sm:w-full items-center md:${descriptionHeight} px-12 md:items-start `,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: link.text,
    style: `mr-2 text-gray-90`,
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_4__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 197
    }
  }))))));
}

function RightCard({
  image,
  title,
  description,
  link,
  width,
  descriptionHeight,
  style
}) {
  const styleFont = {
    titleStyle: "my-3 font-kumbhsans font-bold  md:text-xl hover:underline cursor-pointer text-center md:text-right break-words",
    descriptionStyle: "font-amiri text-base text-center md:text-right",
    linkStyle: "my-3 font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: ` flex flex-col md:flex-row-reverse justify-center bg-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${width} flex justify-center overflow-hidden`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-full  object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: `flex flex-col justify-center items-center md:${descriptionHeight} px-12 md:items-end `,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: link.text,
    style: `mr-2 text-gray-90`,
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_4__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 197
    }
  }))))));
}

function StoryEntry({
  type,
  image,
  title,
  description,
  link,
  margin
}) {
  const sizeStyle = {
    1: {
      width: "max-w-3xl",
      descriptionSize: "w-96",
      style: "flex justify-start w-full  px-5 py-12"
    },
    2: {
      width: "max-w-3xl",
      descriptionSize: "w-96",
      style: "flex justify-end w-full  px-5 py-12"
    },
    3: {
      width: "max-w-4xl",
      descriptionSize: "",
      style: "flex justify-center items-center w-full px-5 py-12"
    }
  };
  return __jsx("div", {
    className: sizeStyle[type].style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, type === 1 && __jsx(LeftCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    width: sizeStyle[type].width,
    descriptionHeight: sizeStyle[type].descriptionSize,
    style: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 28
    }
  }), type === 2 && __jsx(RightCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    width: sizeStyle[type].width,
    descriptionHeight: sizeStyle[type].descriptionSize,
    style: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 28
    }
  }), type === 3 && __jsx(CentredCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    width: sizeStyle[type].width,
    descriptionHeight: sizeStyle[type].descriptionSize,
    style: "m-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 28
    }
  }));
}

/***/ }),

/***/ "./components/elements/nav-bar/categoriesBar/categoriesBar.js":
/*!********************************************************************!*\
  !*** ./components/elements/nav-bar/categoriesBar/categoriesBar.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sousCategoriesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sousCategoriesBar */ "./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\categoriesBar\\categoriesBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function CategoriesBar({
  max_shown,
  categories
}) {
  const {
    0: hovredCategorie,
    1: setHovredCategorie
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    hovered: false,
    categorie: null
  });
  const {
    0: moreCategorie,
    1: setmoreCategorie
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const show = () => {
    setHovredCategorie(prevstate => _objectSpread({}, prevstate, {
      hovered: true
    }));
  };

  const hide = () => {
    setHovredCategorie(prevstate => _objectSpread({}, prevstate, {
      hovered: false
    }));
  };

  return __jsx("div", {
    className: "hidden md:block z-50 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center w-full shadow-sm bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "flex justify-center items-center h-12 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, categories.map((categorie, index) => (index < max_shown || moreCategorie) && __jsx("li", {
    key: index,
    className: "flex-shrink p-4 cursor-pointer text-md hover:text-gray-500",
    onMouseEnter: () => setHovredCategorie({
      hovered: true,
      categorie: categorie
    }),
    onMouseLeave: () => setHovredCategorie({
      hovered: false,
      categorie: categorie
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 65
    }
  }, categorie.tag.toUpperCase())), categories.length >= max_shown && __jsx("li", {
    className: "flex-shrink p-4 cursor-pointer font-bold font-amiri",
    key: max_shown,
    onMouseDown: () => setmoreCategorie(!moreCategorie),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 56
    }
  }, moreCategorie ? "less" : "more ..."))), __jsx(_sousCategoriesBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    hovredCategorie: hovredCategorie,
    show: show,
    hide: hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js":
/*!************************************************************************!*\
  !*** ./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\categoriesBar\\sousCategoriesBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SousCategoriesBar({
  show,
  hide,
  hovredCategorie
}) {
  const SousCategoriesContent = () => __jsx("div", {
    className: "flex justify-between flex-shrink-0 w-full h-full pt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-start  flex-1 flex-shrink-0 mr-5 ml-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "flex flex-col items-start justify-start w-full p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, hovredCategorie.categorie && hovredCategorie.categorie.sous_tags.map((sous_tag, index) => __jsx("li", {
    className: "w-full mt-1 cursor-pointer text-center hover:text-gray-500",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, sous_tag)))), __jsx("div", {
    className: "flex  flex-col items-center flex-1 flex-shrink-0 ml-5 mr-5 border-l border-gray-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex items-end justify-center w-full h-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "HIGH LIGHT")), __jsx("div", {
    className: "h-64 w-48 m-10 rounded-full overflow-hidden shadow-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, hovredCategorie.categorie && __jsx("img", {
    className: "object-contain",
    src: hovredCategorie.categorie.tag_image,
    alt: hovredCategorie.categorie.tag,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 51
    }
  }))));

  return __jsx("div", {
    className: hovredCategorie.hovered ? " transform h-96 transition-all ease-out duration-100 flex flex-col items-center w-full shadow bg-white" : "shadow transform h-0 transition-all ease-out duration-100 w-full overflow-hidden bg-white",
    onMouseEnter: show,
    onMouseLeave: hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-75",
    image: "/images/Styles/style2.jpg",
    height: "h-full",
    imageStyle: "opacity-25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-xl font-amiri font-bold text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "SOUS CATEGORIES")));
}

/* harmony default export */ __webpack_exports__["default"] = (SousCategoriesBar);

/***/ }),

/***/ "./components/elements/nav-bar/middleNav/MiddleNav.js":
/*!************************************************************!*\
  !*** ./components/elements/nav-bar/middleNav/MiddleNav.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/icomoon */ "react-icons-kit/icomoon");
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\middleNav\\MiddleNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SearchWidget() {
  return __jsx("form", {
    className: "flex justify-end h-8 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "h-full w-8 outline-none  border-gray-500 focus:outline-none",
    onClick: e => {
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("input", {
    className: "h-full w-16 lg:w-24 outline-none border-b text-gray-900 border-gray-500 text-lg text-center transform transition-all ease-out duration-500 lg:focus:w-40",
    type: "text",
    placeholder: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

function MiddleNav({
  style,
  links
}) {
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full flex-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), " ", __jsx("ul", {
    className: "flex flex-1 justify-center items-center h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, links.map((link, indx) => __jsx("li", {
    className: "m-8 cursor-pointer text-base font-bold md:text-xl font-relway tracking-wide  text-gray-900 hover:text-gray-700",
    key: indx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 48
    }
  }, link.page))))), __jsx("div", {
    className: "flex flex-1 justify-end items-center h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(SearchWidget, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MiddleNav);

/***/ }),

/***/ "./components/elements/nav-bar/navbar.js":
/*!***********************************************!*\
  !*** ./components/elements/nav-bar/navbar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upperNav/UpperNav */ "./components/elements/nav-bar/upperNav/UpperNav.js");
/* harmony import */ var _middleNav_MiddleNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleNav/MiddleNav */ "./components/elements/nav-bar/middleNav/MiddleNav.js");
/* harmony import */ var _welcomeBar_welcomeBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcomeBar/welcomeBar */ "./components/elements/nav-bar/welcomeBar/welcomeBar.js");
/* harmony import */ var _categoriesBar_categoriesBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoriesBar/categoriesBar */ "./components/elements/nav-bar/categoriesBar/categoriesBar.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function NavBar({
  changeMenuClicked,
  categories,
  max_shown,
  links,
  home
}) {
  return __jsx("nav", {
    className: "z-10 fixed flex flex-col w-full bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex w-full h-12 px-2",
    changeMenuClicked: changeMenuClicked,
    home: home,
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx(_middleNav_MiddleNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: "hidden md:flex h-12 w-full px-2",
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_welcomeBar_welcomeBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: "hidden lg:relative lg:flex justify-center items-center w-full h-10 bg-gray-900 sm:hidden ",
    textToDisplay: "welcome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx(_categoriesBar_categoriesBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    max_shown: max_shown,
    categories: categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/elements/nav-bar/upperNav/UpperNav.js":
/*!**********************************************************!*\
  !*** ./components/elements/nav-bar/upperNav/UpperNav.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconsContainer/iconsContainer */ "./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/md/ic_menu */ "react-icons-kit/md/ic_menu");
/* harmony import */ var react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\upperNav\\UpperNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function UpperNav({
  style,
  changeMenuClicked,
  home,
  logo
}) {
  const {
    0: openSearch,
    1: setOpenSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // search icon for small screens -> expanded or closed

  const openSearchClickHandler = () => {
    setOpenSearch(!openSearch); // open/close the search component for small screens
  };

  const MenuContainer = ({
    style
  }) => __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "m-1 md:hidden cursor-pointer text-gray-700",
    onClick: changeMenuClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: 25,
    icon: react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__["ic_menu"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })));

  const SiteNameContainer = ({
    style
  }) => __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-lg font-bold whitespace-no-wrap text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Mor Made")));

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(MenuContainer, {
    style: `${openSearch ? "hidden" : "flex"} flex items-center justify-start h-full md:flex-1 h-full`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(SiteNameContainer, {
    style: `${openSearch ? "hidden" : "flex"} md:flex  justify-start md:justify-center items-center  w-full md:flex-1 h-full`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx(_iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex flex-row md:flex-1 justify-center md:justify-end items-center w-full h-full",
    openSearch: openSearch,
    openSearchClickHandler: openSearchClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UpperNav);

/***/ }),

/***/ "./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js":
/*!*******************************************************************************!*\
  !*** ./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/icomoon */ "react-icons-kit/icomoon");
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon/cross */ "react-icons-kit/icomoon/cross");
/* harmony import */ var react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\upperNav\\iconsContainer\\iconsContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function IconsContainer({
  openSearch,
  openSearchClickHandler,
  style
}) {
  const searchIconStyle = {
    openStyle: "order-last flex justify-center h-full w-8 outline-none focus:outline-none",
    closeStyle: "flex justify-center h-full w-8 outline-none focus:outline-none"
  };
  const inputStyle = {
    openStyle: "h-full transform w-full transition-all ease-out duration-300  outline-none border-b border-gray-500",
    closeStyle: "transform w-0 transition-all ease-out duration-300"
  };

  const SearchIcon = () => __jsx("form", {
    className: "md:hidden flex justify-end h-8 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: openSearch ? searchIconStyle.openStyle : searchIconStyle.closeStyle,
    onClick: openSearchClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: openSearch ? react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__["cross"] : react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })), openSearch && __jsx("button", {
    className: "h-full w-8 outline-none focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 28
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 91
    }
  })), __jsx("input", {
    className: openSearch ? inputStyle.openStyle : inputStyle.closeStyle,
    type: "text",
    placeholder: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }));

  const NewIcon = ({
    size,
    icon
  }) => __jsx("div", {
    className: `inline m-2 md:m-2 cursor-pointer text-gray-700`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: size,
    icon: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }));

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(SearchIcon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: `${!openSearch ? "flex" : "hidden"} flex-row h-full`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(NewIcon, {
    size: 15,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["user"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden lg:inline my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "user"), __jsx(NewIcon, {
    size: 15,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["heart"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden lg:inline my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "favorites"), __jsx(NewIcon, {
    size: 15,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["cart"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden lg:inline my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, `(${0})`)));
}

/* harmony default export */ __webpack_exports__["default"] = (IconsContainer);

/***/ }),

/***/ "./components/elements/nav-bar/welcomeBar/welcomeBar.js":
/*!**************************************************************!*\
  !*** ./components/elements/nav-bar/welcomeBar/welcomeBar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WelcomeBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\welcomeBar\\welcomeBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function WelcomeBar({
  style,
  textToDisplay
}) {
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-full overflow-hidden bg-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-full object-contain object-center opacity-25",
    src: "/images/Styles/style2.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: " absolute flex justify-center items-center h-full w-full text-center font-bold text-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, textToDisplay)));
}

/***/ }),

/***/ "./components/elements/side-menu/sideMenu.js":
/*!***************************************************!*\
  !*** ./components/elements/side-menu/sideMenu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/sideMenu.module.css */ "./components/elements/side-menu/styles/sideMenu.module.css");
/* harmony import */ var _styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowRight2 */ "react-icons-kit/icomoon/arrowRight2");
/* harmony import */ var react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\side-menu\\sideMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function FrameSlide({
  children,
  show
}) {
  return __jsx("div", {
    className: `${show ? "transform -translate-x-full transition-all ease-out duration-400" : "transform translate-x-0 transition-all ease-out duration-300"} bg-indigo-400`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, children);
}

function ScrollBlocks({
  children,
  changeSwap
}) {
  return __jsx("div", {
    className: "flex-row justify-between items-center w-full h-full overflow-scroll",
    onClick: changeSwap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, " ", children);
}

function TitleBlock({
  children,
  color,
  height
}) {
  return __jsx("div", {
    className: `flex justify-between items-center w-full ${height ? height : "h-16"} border-b ${color ? color : "border-gray-300"} bg-gray-100`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, " ", children);
}

function Block({
  children,
  changeTitle,
  title,
  changeItems
}) {
  return __jsx("div", {
    className: "flex justify-between items-center w-full h-20 p-5 border-b border-gray-300  hover:bg-blue-200 hover:text-gray-900",
    onClick: () => changeTitle(title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, " ", children);
}

function SideMenu({
  menuClick,
  changeMenuClicked,
  currentPage,
  changeCurrentPage,
  categories,
  max_shown,
  links
}) {
  const {
    0: initAppearance,
    1: setInitAppearance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: swap,
    1: setSwap
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("CATEGORIES"); // nav title

  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(categories.reduce((acc, item) => {
    acc.push(item.tag);
    return acc;
  }, []));

  const changeTitle = newTitle => {
    setTitle(newTitle);
    changeItems(newTitle, categories);
  };

  const changeItems = (title, categories) => {
    const listFound = categories.find(item => item.tag === title);
    if (listFound) setItems(listFound.sous_tags);else {
      setTitle("CATEGORIES");
      setItems(categories.reduce((acc, item) => {
        acc.push(item.tag);
        return acc;
      }, []));
    }
  };

  const changeSwap = () => {
    setSwap(!swap);
  };

  return __jsx("nav", {
    className: `${menuClick ? "transform translate-x-0 transition-all ease-out duration-500" : "transform -translate-x-full transition-all ease-out duration-0 "} fixed top-0 -left-full  flex-row w-11/12 z-30 h-full font-sans bg-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, " ", __jsx(TitleBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center h-full p-5 cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, currentPage.page)), __jsx("div", {
    className: "flex justify-center items-center p-5 h-full cursor-pointer",
    onClick: changeMenuClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "close"))), __jsx(TitleBlock, {
    color: "bg-white",
    height: "h-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center h-full w-full p-5 cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, title))), __jsx(ScrollBlocks, {
    changeSwap: changeSwap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, items.map((categorie, indx) => __jsx(Block, {
    key: indx,
    changeTitle: changeTitle,
    title: categorie,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, categorie), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    icon: react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__["arrowRight2"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./components/elements/side-menu/styles/sideMenu.module.css":
/*!******************************************************************!*\
  !*** ./components/elements/side-menu/styles/sideMenu.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "sideMenu_container__1SxfO"
};

/***/ }),

/***/ "./components/graphics/imageCover/Cover.js":
/*!*************************************************!*\
  !*** ./components/graphics/imageCover/Cover.js ***!
  \*************************************************/
/*! exports provided: default, Cover1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cover1", function() { return Cover1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\graphics\\imageCover\\Cover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Cover({
  children,
  image,
  height,
  style,
  imageStyle
}) {
  return __jsx("div", {
    className: "relative " + style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "z-10 " + style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, children), __jsx("div", {
    className: "z-0 absolute top-0 left-0 w-full h-full overflow-hidden ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: `${height} w-full object-cover object-center ${imageStyle}`,
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })));
}
function Cover1({
  image,
  title,
  description,
  buttonText
}) {
  return __jsx("div", {
    className: "relative flex overflow-hidden my-4 mx-4 bg-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "absolute flex justify-center items-end w-full h-full b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center items-center  w-10/12 h-4/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "text-white text-7xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, description), __jsx("div", {
    className: "flex justify-center items-center m-5 bg-white w-4/12 h-2/12 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 99
    }
  }, buttonText)))));
}

/***/ }),

/***/ "./components/graphics/textDisplayer/Text.js":
/*!***************************************************!*\
  !*** ./components/graphics/textDisplayer/Text.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\graphics\\textDisplayer\\Text.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Text({
  text,
  style,
  textStyle
}) {
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: textStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, text));
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/utilities/wrapper */ "./components/widgets/utilities/wrapper.js");
/* harmony import */ var _elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/nav-bar/navbar */ "./components/elements/nav-bar/navbar.js");
/* harmony import */ var _elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/side-menu/sideMenu */ "./components/elements/side-menu/sideMenu.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // fake data 

const categories = [{
  tag: "clothes",
  sous_tags: ["shoes", "t-shirts", "jeans", "socks"],
  tag_image: "images/tags/clothes/clothes-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}];
const links = [{
  page: 'MAKERS',
  path: '/makers'
}, {
  page: 'REGIONS',
  path: '/regions'
}, {
  page: 'STORIES',
  path: '/stories'
}];

function BlackFocusScreen({
  display,
  onClick
}) {
  return __jsx("div", {
    className: display ? "absolute z-20 top-0 left-0 w-full h-full transition ease-out duration-500 bg-gray-900 bg-opacity-50" : "z-20 bg-opacity-0 bg-gray-900",
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  });
}

function Layout({
  children
}) {
  const {
    0: menuClicked,
    1: setMenuClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: selectedPage,
    1: setSelectedPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    page: "HOME",
    path: "/"
  });

  const clickMenuIcon = () => {
    setMenuClicked(!menuClicked);
  };

  const selectPage = link => {
    setSelectedPage(link);
  };

  return __jsx("div", {
    className: "flex flex-col w-full bg-xw-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, menuClicked && __jsx(_elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuClick: menuClicked,
    changeMenuClicked: clickMenuIcon,
    currentPage: selectedPage,
    changeCurrentPage: selectPage,
    categories: categories,
    max_shown: 8,
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }), menuClicked && __jsx(BlackFocusScreen, {
    display: menuClicked,
    onClick: clickMenuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }), __jsx(_elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    changeMenuClicked: clickMenuIcon,
    logo: "/logo.png",
    categories: categories,
    max_shown: 8,
    links: links,
    home: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx(_widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "w-full h-48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/widgets/utilities/wrapper.js":
/*!*************************************************!*\
  !*** ./components/widgets/utilities/wrapper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\widgets\\utilities\\wrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Wrapper({
  children,
  style,
  onClick
}) {
  return __jsx("div", {
    className: style,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, children);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/stories.js":
/*!**************************!*\
  !*** ./pages/stories.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_elements_Article_article_utilities_ArticleCover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/elements/Article/article-utilities/ArticleCover */ "./components/elements/Article/article-utilities/ArticleCover.js");
/* harmony import */ var _components_elements_StoriesEntry_StoriesEntryRes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/elements/StoriesEntry/StoriesEntryRes */ "./components/elements/StoriesEntry/StoriesEntryRes.js");
/* harmony import */ var _components_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/graphics/textDisplayer/Text */ "./components/graphics/textDisplayer/Text.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\pages\\stories.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import StoriesEntry from '../components/elements/StoriesEntry/StoriesEntry'




const images = {
  cover1: "images/Articles/cover-1.jpg",
  cover2: "images/Articles/cover-2.jpg",
  cover3: "images/Articles/cover-3.jpg",
  cover4: "images/Articles/cover-4.jpg",
  cover5: "images/Articles/cover-5.jpg",
  cover6: "images/Articles/cover-6.jpg",
  cover7: "images/Articles/cover-7.jpg",
  cover8: "images/Articles/cover-8.jpg",
  cover9: "images/Articles/cover-9.jpg",
  cover01: "images/Articles/cover-01.jpg",
  cover02: "images/Articles/cover-02.jpg",
  cover03: "images/Articles/cover-03.jpg",
  cover04: "images/Articles/cover-04.jpg",
  cover05: "images/Articles/cover-05.jpg",
  cover06: "images/Articles/cover-06.jpg"
};

function Stories() {
  const componentMargin = "pt-0 md:pt-24 pb-18";
  const storyEntryStyle = "flex justify-start items-center w-full";
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_components_elements_StoriesEntry_StoriesEntryRes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: 1,
    image: images.cover03,
    title: "Innovation in every detail",
    description: "With significant initiatives and amazing innovations, we can design clothes",
    link: {
      path: "/article",
      text: "Read The Story"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx(_components_elements_StoriesEntry_StoriesEntryRes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: 2,
    image: images.cover04,
    title: "Kangol x H&M feat Mabel: A streetwear collab for the self-made generation",
    description: "With significant initiatives and amazing innovations, we can design clothes",
    link: {
      path: "/article",
      text: "Read The Story"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx(_components_elements_StoriesEntry_StoriesEntryRes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: 2,
    image: images.cover05,
    title: "Kangol x H&M feat Mabel: A streetwear collab for the self-made generation",
    description: "With significant initiatives and amazing innovations, we can design clothes",
    link: {
      path: "/article",
      text: "Read The Story"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx(_components_elements_StoriesEntry_StoriesEntryRes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: 1,
    image: images.cover06,
    title: "Kangol x H&M feat Mabel: A streetwear collab for the self-made generation",
    description: "With significant initiatives and amazing innovations, we can design clothes",
    link: {
      path: "/article",
      text: "Read The Story"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx(_components_elements_StoriesEntry_StoriesEntryRes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: 2,
    image: images.cover7,
    title: "Kangol x H&M feat Mabel: A streetwear collab for the self-made generation",
    description: "With significant initiatives and amazing innovations, we can design clothes",
    link: {
      path: "/article",
      text: "Read The Story"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }), __jsx(_components_elements_StoriesEntry_StoriesEntryRes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: 1,
    image: images.cover3,
    title: "Kangol x H&M feat Mabel: A streetwear collab for the self-made generation",
    description: "With significant initiatives and amazing innovations, we can design clothes",
    link: {
      path: "/article",
      text: "Read The Story"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx(_components_elements_StoriesEntry_StoriesEntryRes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: 3,
    image: images.cover04,
    title: "Kangol x H&M feat Mabel: A streetwear collab for the self-made generation",
    description: "With significant initiatives and amazing innovations, we can design clothes",
    link: {
      path: "/article",
      text: "Read The Story"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/stories.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Soguma\MorMade_project\mormadeWebSite\pages\stories.js */"./pages/stories.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/icomoon":
/*!******************************************!*\
  !*** external "react-icons-kit/icomoon" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon");

/***/ }),

/***/ "react-icons-kit/icomoon/arrowRight2":
/*!******************************************************!*\
  !*** external "react-icons-kit/icomoon/arrowRight2" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/arrowRight2");

/***/ }),

/***/ "react-icons-kit/icomoon/cross":
/*!************************************************!*\
  !*** external "react-icons-kit/icomoon/cross" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/cross");

/***/ }),

/***/ "react-icons-kit/md/ic_arrow_forward":
/*!******************************************************!*\
  !*** external "react-icons-kit/md/ic_arrow_forward" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_arrow_forward");

/***/ }),

/***/ "react-icons-kit/md/ic_menu":
/*!*********************************************!*\
  !*** external "react-icons-kit/md/ic_menu" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_menu");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=stories.js.map