webpackHotUpdate("static/development/pages/schedule.js",{

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
  var time = _ref.time,
      m_name = _ref.m_name,
      m_author = _ref.m_author,
      s_name = _ref.s_name,
      s_author = _ref.s_author,
      title = _ref.title;
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
  }, time), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, m_name, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("a", {
    href: "/index#speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, m_author)), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, s_name, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("a", {
    href: "/index#speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, s_author)), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title));
};

var Header = function Header(_ref2) {
  var sub1 = _ref2.sub1,
      sub2 = _ref2.sub2;
  return __jsx("ul", {
    className: "row_header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, sub1, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, sub2, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
};

Row.propTypes = {
  time: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var Mainstage_Table = function Mainstage_Table() {
  return __jsx("div", {
    className: "agenda",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(Header, {
    sub1: "FIRST STAGE",
    sub2: "SECOND STAGE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    className: "background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(Row, {
    time: "9:00",
    m_name: "Arrival & Breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(Row, {
    time: "10:00",
    m_name: "Welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(Row, {
    time: "10:10",
    m_name: "A New Hope for OSS Sustainability",
    m_author: "Kevin Owocki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(Row, {
    time: "10:40",
    m_name: "Why am I not funded?",
    m_author: "Eric Berry",
    s_name: "Sustainably Building the Infrastructure for Web3",
    s_author: "Aidan Hyman",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(Row, {
    time: "11:10",
    m_name: "Open Source Means Everybody So Start Acting Like It",
    m_author: "Jarrell James - Manesh Giday",
    s_name: "DAOs + UX = Sustainability",
    s_author: "James Duncan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(Row, {
    time: "11:40",
    m_name: "A Return to Nature: Diversity and Interconnectivity in Natural Ecosystem Sustainability",
    m_author: "Simona Pop",
    s_name: "All Tech is Political",
    s_author: "Lane Rettig",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(Row, {
    time: "12:10",
    m_name: "Running a Sustainable Web3 Business After Incubation",
    m_author: "Liz Daldalian & Erin Shaben",
    s_name: "Convincing the World to Cooperate with Incentivized DAOs",
    s_author: "Niran Babalola",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(Row, {
    time: "12:40",
    m_name: "The Language of Sustainability",
    m_author: "Phil Lucsok & Joe Petrowski",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(Row, {
    time: "13:10",
    m_name: "LUNCH",
    s_name: "LUNCH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(Row, {
    time: "13:40",
    m_name: "Cryptoeconomics and FOSS Sustainability",
    m_author: "Eleftherios Diakomichalis",
    s_name: "The Path to DAO Sustainability: Funding the Web3 Ecosystem ",
    s_author: "James Waugh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(Row, {
    time: "14:20",
    m_name: "From Scalable to Sustainable Blockchains",
    m_author: "Karl Floersch",
    s_name: "The Economic Advantages of Web3: Technical Scalability, Social Scalability, and Economic Scalability",
    s_author: "Danny Zuckerman",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(Row, {
    time: "14:50",
    m_name: "SourceCred Cryptoeconomics",
    m_author: "Dandelion Mane",
    s_name: "Building Open Source Companies",
    s_author: "Vivek Singh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(Row, {
    time: "15:20",
    m_name: "Zcash`s Dev Fund Process",
    m_author: "Josh Cincinnati",
    s_name: "Commons Stack: A New Alternative for Funding Open Source",
    s_author: "Griff Green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(Row, {
    time: "15:50",
    m_name: "Governance in Decentralized, Open Source Projects",
    m_author: "Hudson Jameson",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx(Row, {
    time: "16:20",
    m_name: "Startups need a new option: Exit to Community",
    m_author: "Nathan Schneider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx(Row, {
    time: "16:50",
    m_name: "Closing Keynote",
    m_author: "Vitalik Buterin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), __jsx("div", {
    className: "background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(Row, {
    time: "17:20",
    m_name: "CLOSING -> HAPPY HOUR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Mainstage_Table);

/***/ })

})
//# sourceMappingURL=schedule.js.42400f1e4e76ba0194e9.hot-update.js.map