"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppHeader.vue */ \"./src/components/AppHeader.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    AppHeader: _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      logged: localStorage.getItem('logged') === 'true',\n      username: localStorage.getItem('username'),\n      email: localStorage.getItem('email'),\n      password: localStorage.getItem('password'),\n      menuIsOpen: false // Para rastrear si el menú está abierto o cerrado\n    };\n  },\n\n  methods: {\n    onLoginSuccess(logged) {\n      this.logged = logged;\n      localStorage.setItem('logged', logged);\n    },\n    onUsernameSuccess(username) {\n      this.username = username;\n      localStorage.setItem('username', username);\n    },\n    onEmailSuccess(email) {\n      this.email = email;\n      localStorage.setItem('email', email);\n    },\n    onPasswordSuccess(password) {\n      this.password = password;\n      localStorage.setItem('password', password);\n    },\n    closeUserMenu() {\n      if (this.menuIsOpen) {\n        this.menuIsOpen = false;\n      }\n    },\n    menuOpened() {\n      this.menuIsOpen = true;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7O0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9BcHAudnVlPzkxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBAY2xpY2s9XCJjbG9zZVVzZXJNZW51XCI+XHJcbiAgICAgICAgPHJvdXRlci12aWV3IDpsb2dnZWQ9XCJsb2dnZWRcIiA6dXNlcm5hbWU9XCJ1c2VybmFtZVwiIEBsb2dpbi1zdWNjZXNzPVwib25Mb2dpblN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICBAdXNlcm5hbWUtc3VjY2Vzcz1cIm9uVXNlcm5hbWVTdWNjZXNzXCIgQGVtYWlsLXN1Y2Nlc3M9XCJvbkVtYWlsU3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBwYXNzd29yZC1zdWNlc3M9XCJvblBhc3N3b3JkU3VjY2Vzc1wiLz5cclxuXHJcbiAgICAgICAgPEFwcEhlYWRlciA6bG9nZ2VkPVwibG9nZ2VkXCIgOnVzZXJuYW1lPVwidXNlcm5hbWVcIiA6ZW1haWw9XCJlbWFpbFwiIDpwYXNzd29yZD1cInBhc3N3b3JkXCIgQG1lbnUtb3BlbmVkPVwibWVudU9wZW5lZFwiLz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0FwcEhlYWRlci52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBBcHBIZWFkZXIsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2dnZWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWQnKSA9PT0gJ3RydWUnLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyksXHJcbiAgICAgICAgICAgIGVtYWlsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpLFxyXG4gICAgICAgICAgICBtZW51SXNPcGVuOiBmYWxzZSwgLy8gUGFyYSByYXN0cmVhciBzaSBlbCBtZW7DuiBlc3TDoSBhYmllcnRvIG8gY2VycmFkb1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uTG9naW5TdWNjZXNzKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlZCA9IGxvZ2dlZDtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIGxvZ2dlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblVzZXJuYW1lU3VjY2Vzcyh1c2VybmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRW1haWxTdWNjZXNzKGVtYWlsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZW1haWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25QYXNzd29yZFN1Y2Nlc3MocGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZVVzZXJNZW51KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZW51SXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVJc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudU9wZW5lZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51SXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  const _component_AppHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppHeader\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.closeUserMenu && $options.closeUserMenu(...args))\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view, {\n    logged: $data.logged,\n    username: $data.username,\n    onLoginSuccess: $options.onLoginSuccess,\n    onUsernameSuccess: $options.onUsernameSuccess,\n    onEmailSuccess: $options.onEmailSuccess,\n    onPasswordSucess: $options.onPasswordSuccess\n  }, null, 8 /* PROPS */, [\"logged\", \"username\", \"onLoginSuccess\", \"onUsernameSuccess\", \"onEmailSuccess\", \"onPasswordSucess\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppHeader, {\n    logged: $data.logged,\n    username: $data.username,\n    email: $data.email,\n    password: $data.password,\n    onMenuOpened: $options.menuOpened\n  }, null, 8 /* PROPS */, [\"logged\", \"username\", \"email\", \"password\", \"onMenuOpened\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9BcHAudnVlPzkxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBAY2xpY2s9XCJjbG9zZVVzZXJNZW51XCI+XHJcbiAgICAgICAgPHJvdXRlci12aWV3IDpsb2dnZWQ9XCJsb2dnZWRcIiA6dXNlcm5hbWU9XCJ1c2VybmFtZVwiIEBsb2dpbi1zdWNjZXNzPVwib25Mb2dpblN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICBAdXNlcm5hbWUtc3VjY2Vzcz1cIm9uVXNlcm5hbWVTdWNjZXNzXCIgQGVtYWlsLXN1Y2Nlc3M9XCJvbkVtYWlsU3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBwYXNzd29yZC1zdWNlc3M9XCJvblBhc3N3b3JkU3VjY2Vzc1wiLz5cclxuXHJcbiAgICAgICAgPEFwcEhlYWRlciA6bG9nZ2VkPVwibG9nZ2VkXCIgOnVzZXJuYW1lPVwidXNlcm5hbWVcIiA6ZW1haWw9XCJlbWFpbFwiIDpwYXNzd29yZD1cInBhc3N3b3JkXCIgQG1lbnUtb3BlbmVkPVwibWVudU9wZW5lZFwiLz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0FwcEhlYWRlci52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBBcHBIZWFkZXIsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2dnZWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWQnKSA9PT0gJ3RydWUnLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyksXHJcbiAgICAgICAgICAgIGVtYWlsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpLFxyXG4gICAgICAgICAgICBtZW51SXNPcGVuOiBmYWxzZSwgLy8gUGFyYSByYXN0cmVhciBzaSBlbCBtZW7DuiBlc3TDoSBhYmllcnRvIG8gY2VycmFkb1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uTG9naW5TdWNjZXNzKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlZCA9IGxvZ2dlZDtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIGxvZ2dlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblVzZXJuYW1lU3VjY2Vzcyh1c2VybmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRW1haWxTdWNjZXNzKGVtYWlsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZW1haWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25QYXNzd29yZFN1Y2Nlc3MocGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZVVzZXJNZW51KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZW51SXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVJc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudU9wZW5lZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51SXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "be325239cac494eb"; }
/******/ }();
/******/ 
/******/ }
);