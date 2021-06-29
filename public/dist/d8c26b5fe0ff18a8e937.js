/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkKnowledge_Exam"] = self["webpackChunkKnowledge_Exam"] || []).push([["src_routing_js"],{

/***/ "./src/components/Blog/FeaturedPost.js":
/*!*********************************************!*\
  !*** ./src/components/Blog/FeaturedPost.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_components_UI_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/UI/Card */ \"./src/components/UI/Card.js\");\n\n\n\n\n\n\nvar FeaturedPost = function FeaturedPost(_ref) {\n  var match = _ref.match;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      post = _useState2[0],\n      setPost = _useState2[1];\n\n  var blogImage = \"https://source.unsplash.com/random/400x200\";\n\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),\n      id = _useParams.id;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetchPost();\n  }, []);\n\n  var fetchPost = function fetchPost() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts/?id=\".concat(id)).then(function (res) {\n      setPost(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"container py-4\"\n  }, post.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"col\",\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(src_components_UI_Card__WEBPACK_IMPORTED_MODULE_3__.default, {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      src: blogImage,\n      className: \"card-img-top\",\n      alt: post.title\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h5\", {\n      className: \"card-title pt-3 text-capitalize\"\n    }, post.title, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n      className: \"card-text text-secondary\"\n    }, post.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n      className: \"btn btn-dark\",\n      to: \"/\"\n    }, \"Back to Featured Posts\")));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedPost);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/Blog/FeaturedPost.js?");

/***/ }),

/***/ "./src/components/Blog/Post.js":
/*!*************************************!*\
  !*** ./src/components/Blog/Post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_components_UI_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/UI/Card */ \"./src/components/UI/Card.js\");\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  var match = _ref.match;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      post = _useState2[0],\n      setPost = _useState2[1];\n\n  var blogImage = \"http://placeimg.com/640/360/any\";\n\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),\n      id = _useParams.id;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetchPost();\n  }, []);\n\n  var fetchPost = function fetchPost() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts/?id=\".concat(id)).then(function (res) {\n      setPost(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"container py-4\"\n  }, post.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"col\",\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(src_components_UI_Card__WEBPACK_IMPORTED_MODULE_3__.default, {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      src: blogImage,\n      className: \"card-img-top\",\n      alt: post.title\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h5\", {\n      className: \"card-title pt-3 text-capitalize\"\n    }, post.title, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n      className: \"card-text text-secondary\"\n    }, post.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n      className: \"btn btn-dark\",\n      to: \"/posts\"\n    }, \"Back to Posts\")));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/Blog/Post.js?");

/***/ }),

/***/ "./src/components/Blog/Posts.js":
/*!**************************************!*\
  !*** ./src/components/Blog/Posts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UI_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Card */ \"./src/components/UI/Card.js\");\n\n\n\n\n\n\nvar Posts = function Posts(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  var blogImage = \"http://placeimg.com/640/360/any\";\n  var MAX_LENGTH = 40;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetchPosts();\n  }, []);\n\n  var fetchPosts = function fetchPosts() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts\").then(function (res) {\n      setPosts(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"row row-cols-1 row-cols-md-3 g-4\"\n  }, posts.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"col\",\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_UI_Card__WEBPACK_IMPORTED_MODULE_3__.default, {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      src: blogImage,\n      className: \"card-img-top\",\n      alt: post.title\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h5\", {\n      className: \"card-title pt-3 text-capitalize\"\n    }, post.title, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n      className: \"card-text text-secondary\"\n    }, \"\".concat(post.body.substring(0, MAX_LENGTH), \"...\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n      className: \"btn btn-dark\",\n      to: \"/posts/\".concat(post.id)\n    }, \"Read More\")));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/Blog/Posts.js?");

/***/ }),

/***/ "./src/components/UI/Card.js":
/*!***********************************!*\
  !*** ./src/components/UI/Card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Card = function Card(props) {\n  var classes = \"card h-100 \" + props.className;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: classes\n  }, props.children)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/UI/Card.js?");

/***/ }),

/***/ "./src/components/UI/Nav.js":
/*!**********************************!*\
  !*** ./src/components/UI/Nav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nvar Nav = function Nav() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-dark bg-dark\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"navbar-brand\",\n    href: \"/\"\n  }, \"Pylot\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link\",\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link\",\n    to: \"/about\"\n  }, \"About\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link\",\n    to: \"/posts\"\n  }, \"Posts\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link\",\n    to: \"/contact\"\n  }, \"Contact\"))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/UI/Nav.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar About = function About() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"py-4\"\n  }, \"About Page\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/blog.js":
/*!***************************!*\
  !*** ./src/pages/blog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_Blog_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Blog/Posts */ \"./src/components/Blog/Posts.js\");\n\n\n\nvar Blog = function Blog() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"py-4\"\n  }, \"Posts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"blog\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Blog_Posts__WEBPACK_IMPORTED_MODULE_1__.default, null))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/pages/blog.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Contact = function Contact() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"py-4\"\n  }, \"Contact Page\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\nvar Home = function Home() {\n  var URL = 'https://jsonplaceholder.typicode.com/users/1/posts';\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      post = _useState2[0],\n      setPost = _useState2[1];\n\n  var postImage = 'https://source.unsplash.com/random/400x200';\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetchPosts();\n  }, []);\n\n  var fetchPosts = function fetchPosts() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(URL).then(function (res) {\n      setPost(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"section\", {\n    className: \"py-5 text-center container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"row py-lg-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"col-lg-6 col-md-8 mx-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", {\n    className: \"fw-light\"\n  }, \"Daily News\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n    className: \"lead text-muted\"\n  }, \"Something short and leading about the collection below\\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don\\u2019t simply skip over it entirely.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    className: \"btn btn-dark my-2 mx-2\"\n  }, \"Learn About it\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    className: \"btn btn-dark my-2 mx-2\"\n  }, \"Contact Us\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"post py-5 bg-light\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h2\", {\n    className: \"py-3\"\n  }, \"Featured Posts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3\"\n  }, post.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"col\",\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"card shadow-sm\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      src: postImage,\n      alt: \"Lady with laptop\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h4\", {\n      className: \"card-title pt-3 text-capitalize\"\n    }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n      className: \"card-text\"\n    }, post.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"d-flex justify-content-between align-items-center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"btn-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n      className: \"btn btn-dark btn-sm btn-outline\",\n      to: \"/featured/\".concat(post.id)\n    }, \"Read More\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"small\", {\n      className: \"text-muted\"\n    }, \"June 21, 2021\")))));\n  })))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/pages/home.js?");

/***/ }),

/***/ "./src/routing.js":
/*!************************!*\
  !*** ./src/routing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blog */ \"./src/pages/blog.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _components_UI_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UI/Nav */ \"./src/components/UI/Nav.js\");\n/* harmony import */ var _components_Blog_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Blog/Post */ \"./src/components/Blog/Post.js\");\n/* harmony import */ var _components_Blog_FeaturedPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Blog/FeaturedPost */ \"./src/components/Blog/FeaturedPost.js\");\n\n\n\n\n\n\n\n\n\n\nvar Start = function Start(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UI_Nav__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: \"/featured/:id\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Blog_FeaturedPost__WEBPACK_IMPORTED_MODULE_7__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: \"/posts/:id\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Blog_Post__WEBPACK_IMPORTED_MODULE_6__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: \"/posts\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_blog__WEBPACK_IMPORTED_MODULE_3__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: \"/about\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_about__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    path: \"/contact\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_contact__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_home__WEBPACK_IMPORTED_MODULE_1__.default, null))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Start);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/routing.js?");

/***/ })

}]);