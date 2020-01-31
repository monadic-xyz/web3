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
  }, time, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), __jsx("li", {
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
    href: "#speakers",
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
    href: "#speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, s_author)));
};

var Header = function Header(_ref2) {
  var sub1 = _ref2.sub1,
      sub2 = _ref2.sub2;
  return __jsx("ul", {
    className: "row_header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, sub1, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, sub2, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
};

var Row_sub = function Row_sub(_ref3) {
  var time = _ref3.time,
      title = _ref3.title;
  return __jsx("ul", {
    className: "row_full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, time, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
};

Row.propTypes = {
  time: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var Mainstage_Table = function Mainstage_Table() {
  return __jsx("div", {
    className: "agenda",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(Header, {
    sub1: "FIRST STAGE",
    sub2: "SECOND SPACE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(Row, {
    time: "9:30",
    m_name: "Arrival & Breakfast",
    s_name: "Arrival & Breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(Row, {
    time: "10:00",
    m_name: "Welcome",
    s_name: "Welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(Row, {
    time: "10:10",
    m_name: "A New Hope for OSS Sustainability",
    m_author: "Kevin Owocki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(Row, {
    time: "10:40",
    m_name: "Traveler`s Tales: The 1st 20 Years Of Open Source",
    m_author: "Jim Jagielski",
    s_name: "Sustainably Building the Infrastructure for Web3",
    s_author: "Aidan Hyman",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
      lineNumber: 61
    },
    __self: this
  }), __jsx(Row, {
    time: "11:40",
    m_name: "A Return to Nature: Diversity and Interconnectivity in Natural Ecosystem Sustainability",
    m_author: "Simona Pop",
    s_name: "TBD",
    s_author: "Duane O`Brien",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(Row, {
    time: "12:10",
    m_name: "Why am I not funded?",
    m_author: "Eric Berry",
    s_name: "All Tech is Political",
    s_author: "Lane Rettig",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(Row, {
    time: "12:40",
    m_name: "The Language of Sustainability",
    m_author: "Phil Lucsok and Joe Petrowski",
    s_name: "Niran Babalola",
    s_author: "Convincing the World to Cooperate with Incentivized DAOs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(Row, {
    time: "13:10",
    m_name: "LUNCH",
    s_name: "LUNCH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
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
      lineNumber: 96
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
      lineNumber: 103
    },
    __self: this
  }), __jsx(Row, {
    time: "14:50",
    m_name: "SourceCred Cryptoeconomics",
    m_author: "Dandelion Mane",
    s_name: "Open Source Full Monty - Can you go all the way?",
    s_author: "Makoto Inoue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(Row, {
    time: "15:20",
    m_name: "Zcash`s Dev Fund Process",
    m_author: "Josh Cincinnati",
    s_name: "Building Open Source Companies",
    s_author: "Vivek Singh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx(Row, {
    time: "15:50",
    m_name: "Governance in Decentralized, Open Source Projects",
    m_author: "Hudson Jameson",
    s_name: "Commons Stack: A New Alternative for Funding Open Source",
    s_author: "Griff Green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(Row, {
    time: "16:20",
    m_name: "Startups need a new option: Exit to Community",
    m_author: "Nathan Schneider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), __jsx(Row, {
    time: "16:50",
    m_name: "Closing Keynote",
    m_author: "Vitalik Buterin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx(Row, {
    time: "17:20",
    m_name: "CLOSING -> HAPPY HOUR",
    s_name: "CLOSING -> HAPPY HOUR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Mainstage_Table);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/page */ "./layouts/page.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_Lecturer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Lecturer */ "./components/Lecturer.js");
/* harmony import */ var _components_Sponsors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sponsors */ "./components/Sponsors.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Icons */ "./components/Icons.js");
var _jsxFileName = "/Users/abbeytitcomb/Documents/GitHub/gitcoin-x-radicle/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_layouts_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    style: {
      display: 'inline-block',
      transform: 'scaleX(-1)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_6__["QuoteIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), "\xA0Our modern society \u2014 everything from hospitals to stock markets to newspapers to social media \u2014 runs on software. But take a closer look, and you\u2019ll find that the tools we use to build software are buckling under demand.\xA0", __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_6__["QuoteIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, " - Nadia Eghbal, Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure ")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "As we start envisioning a \"Web3\", sustaining free and open source software is more important than ever - and more realistic. We're gathering technologists, economists, maintainers, and hackers who think Web3 is - A New Hope\u2122 for free and open source software.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), "Join us for a one-day gathering to discuss active initiatives, learn from industry luminaries, and start designing the future of Web3 sustainability \u2728."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "This event is ", __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "free to attend"), " with a \"pay-what-you-can\" donation model. The goal is to stick to traditional FOSS values and fund this event by and for the community. We'll be collecting donations through a ", __jsx("a", {
    href: "https://gitcoin.co/grants/195/sustain-web3-sustainers",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Gitcoin Grant"), ". Because of ", __jsx("a", {
    href: "https://gitcoin.co/blog/gitcoin-grants-2020/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Quadratic matching"), " on the Gitcoin platform, even small contributions could go a long way."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u2192 Can't attend but interested in sponsoring SustainWeb3? Get in touch ", __jsx("a", {
    href: "https://gitcoin.co/grants/195/sustain-web3-sustainers",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "here"), "."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("h6", {
    id: "sponsors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_6__["SpeakersIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), " Speakers"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    id: "speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, " "), __jsx("div", {
    className: "row align-items-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Eleftherios Diakomichalis",
    company: "Radicle",
    companyUrl: "https://radicle.xyz/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1568990825/VsABh_tY_400x400_hwcjd4.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Dandelion Mane",
    company: "SourceCred",
    companyUrl: "https://sourcecred.io/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1575978850/1400023_bvk5yt.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Simona Pop",
    company: "Bounties Network",
    companyUrl: "https://www.bounties.network/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1576856033/Simona_2_djqtlu.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Nathan Schneider",
    company: "CU Boulder",
    companyUrl: "https://nathanschneider.info",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1575978168/nathanheadshot_eawgvk.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Vitalik Buterin",
    company: "Ethereum Foundation",
    companyUrl: "https://ethereum.org/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1579107738/image-4-250x250_zbtacu.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Josh Cincinnati",
    company: "Zcash Foundation",
    companyUrl: "https://www.zfnd.org/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1576854839/profile1_k276zl.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Jarrell James - Manesh Giday",
    company: "Cross-Chain Group",
    companyUrl: "https://www.crosschain.group/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1576856652/BC3AB8ED_711C_4B08_94F6_45807DB7D879_t9i1ga.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Kevin Owocki",
    company: "Gitcoin",
    companyUrl: "https://gitcoin.co",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1575986003/photo_2019-12-10_14.49.00_axg3ez.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Jim Jagielski",
    company: "Consensys / Apache Foundation",
    companyUrl: "https://codefund.io/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1575978736/jimheadshot_s3nucv.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Eric Berry",
    company: "CodeFund",
    companyUrl: "https://codefund.io/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1573135783/jn_XanJK_400x400_gr7kqe.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Abbey Titcomb",
    company: "Radicle",
    companyUrl: "http://radicle.xyz/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1575981117/cropped_fiw5ny.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Griff Green",
    company: "Commons Stack",
    companyUrl: "http://www.commonsstack.org/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1576854843/Profile_pic_griff_headshot_ycayri.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Makoto Inoue",
    company: "Kickback",
    companyUrl: "https://kickback.events/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1580460858/makoto_i0jyqa.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Hudson Jameson",
    company: "Ethereum Foundation",
    companyUrl: "https://ethereum.org/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1580460859/headshot_large_ompv7x.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Karl Floersch",
    company: "Optimism",
    companyUrl: "https://optimism.io/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1580460879/KarlFloersch_ohitjk.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Niran Babalola",
    company: "Panvala",
    companyUrl: "https://panvala.com/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1580460867/twitter_profile_photo_mbftrk.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Aidan Hyman",
    company: "ChainSafe Systems",
    companyUrl: "https://github.com/chainsafesystems",
    picUrl: "https://res-console.cloudinary.com/dvargvav9/thumbnails/transform/v1/image/upload//v1580462851/QWlkYW4yX3R4dnE4aw==/drilldown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Lane Rettig",
    company: "Space Mesh",
    companyUrl: "https://spacemesh.io/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1575978168/laneheadshot_wkgsio.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Joe Petrowski",
    company: "Parity Technologies",
    companyUrl: "https://www.parity.io/",
    picUrl: "https://ethcc.io/images/speakers_2020/Joe_Petrowski.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Phil Lucsok",
    company: "Parity Technologies",
    companyUrl: "https://www.parity.io/",
    picUrl: "https://ethcc.io/images/speakers_2020/Phil_Lucsok.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Duane O'Brien",
    company: "Indeed.com",
    companyUrl: "https://www.indeed.com/",
    picUrl: "https://res-console.cloudinary.com/dvargvav9/thumbnails/transform/v1/image/upload//v1580462683/TWNMZW5kb25fUGhvdG9ncmFwaHlfOTY5Nl9vbjZlbTI=/drilldown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Vivek Singh",
    company: "Gitcoin",
    companyUrl: "https://gitcoin.co",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1580461855/download_6_hlvp47.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "James Waugh",
    company: "Axia Labs",
    companyUrl: "https://consensys.net/grants/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1580461672/IMG_51019__1_2_uyjvzu.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "James Duncan",
    company: "Abridged",
    companyUrl: "http://abridged.io/",
    picUrl: "https://res.cloudinary.com/dvargvav9/image/upload/v1580462789/00010039_usmlol.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), __jsx(_components_Lecturer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Danny Zuckerman",
    company: "3box",
    companyUrl: "https://3box.io/",
    picUrl: "https://res-console.cloudinary.com/dvargvav9/thumbnails/transform/v1/image/upload//v1580462959/cHJvZmlsZV9wcXNqeXg=/drilldown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("i", {
    style: {
      fontSize: '14px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Read full agenda ", __jsx("a", {
    href: "schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "here"), ".")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("i", {
    style: {
      fontSize: '14px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Have something to say about open source sustainability in Web3?")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx("a", {
    className: "subscribe button",
    href: "https://gitcoin.typeform.com/to/pkjlfI",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "Apply to speak \u2728")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), __jsx("div", {
    className: "row justify-content-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("h3", {
    id: "sponsors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_6__["SponsorsIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), " Coordinators")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), __jsx("div", {
    className: "row justify-content-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(_components_Sponsors__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sponsorUrl: "https://gitcoin.co",
    logoUrl: "https://res.cloudinary.com/dvargvav9/image/upload/c_fit,h_150,w_150/v1573137862/GitCoinLogo.a9878d389bce_ftsl3h.svg",
    logoAlt: "Gitcoin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), __jsx(_components_Sponsors__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sponsorUrl: "https://monadic.xyz/",
    logoUrl: "https://res.cloudinary.com/juliendonck/image/upload/v1549554598/monadic-icon_myhdjk.svg",
    logoAlt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), __jsx(_components_Sponsors__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sponsorUrl: "https://sustainoss.org/",
    logoUrl: "https://demo.identihub.co/assets/Sustain_ICONS_459.svg",
    logoAlt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }))), __jsx("div", {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "In addition to SustainWeb3, Gitcoin will hosting a ", __jsx("a", {
    href: "https://hackathons.gitcoin.co/sustain-web3/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "two week virtual hackathon"), " leading up to the event. Join blockchain companies and open-source contributors from around the world for to help grow the decentralized web, with select winners presented on stage at SustainWeb3."))));
}

/***/ })

})
//# sourceMappingURL=index.js.fc0553117ea04ba24e4c.hot-update.js.map