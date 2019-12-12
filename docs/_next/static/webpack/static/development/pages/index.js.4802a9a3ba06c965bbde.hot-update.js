webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/abbeytitcomb/Documents/GitHub/gitcoin-x-radicle/components/Table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Row = function Row(_ref) {
  var name = _ref.name,
      author = _ref.author,
      date = _ref.date;
  return __jsx("ul", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, name), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    href: "/lecturers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, author)), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, date));
};

Row.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var Table = function Table() {
  return __jsx("div", {
    className: "agenda",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(Row, {
    name: "\"A New Hope for OSS Sustainability\"",
    author: "Kevin Owocki",
    date: "4 Nov 2019 \u2013 18:30-20:30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(Row, {
    name: "2. agenda item",
    author: "author name",
    date: "6 Nov 2019 \u2013 18:30-20:30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(Row, {
    name: "3. agenda item",
    author: "author name",
    date: "11 Nov 2019 \u2013 18:30-20:30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

})
//# sourceMappingURL=index.js.4802a9a3ba06c965bbde.hot-update.js.map