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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppHeader.vue */ \"./src/components/AppHeader.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    AppHeader: _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      logged: localStorage.getItem('logged') === 'true',\n      username: localStorage.getItem('username'),\n      email: localStorage.getItem('email'),\n      password: localStorage.getItem('password')\n    };\n  },\n  methods: {\n    onLoginSuccess(logged) {\n      this.logged = logged;\n      localStorage.setItem('logged', logged);\n    },\n    onUsernameSuccess(username) {\n      this.username = username;\n      localStorage.setItem('username', username);\n    },\n    onEmailSuccess(email) {\n      this.email = email;\n      localStorage.setItem('email', email);\n    },\n    onPasswordSuccess(password) {\n      this.password = password;\n      localStorage.setItem('password', password);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7O0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0FwcC52dWU/OTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwicGFnZXNcIiBjbGFzcz1cInBhZ2VzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxyb3V0ZXItdmlldyA6bG9nZ2VkPVwibG9nZ2VkXCIgOnVzZXJuYW1lPVwidXNlcm5hbWVcIiBAbG9naW4tc3VjY2Vzcz1cIm9uTG9naW5TdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgQHVzZXJuYW1lLXN1Y2Nlc3M9XCJvblVzZXJuYW1lU3VjY2Vzc1wiIEBlbWFpbC1zdWNjZXNzPVwib25FbWFpbFN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICBAcGFzc3dvcmQtc3VjZXNzPVwib25QYXNzd29yZFN1Y2Nlc3NcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICA8QXBwSGVhZGVyIDpsb2dnZWQ9XCJsb2dnZWRcIiA6dXNlcm5hbWU9XCJ1c2VybmFtZVwiIDplbWFpbD1cImVtYWlsXCIgOnBhc3N3b3JkPVwicGFzc3dvcmRcIi8+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBBcHBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBIZWFkZXIudnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgQXBwSGVhZGVyLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9nZ2VkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkJykgPT09ICd0cnVlJyxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpLFxyXG4gICAgICAgICAgICBlbWFpbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkxvZ2luU3VjY2Vzcyhsb2dnZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWQgPSBsb2dnZWQ7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWQnLCBsb2dnZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Vc2VybmFtZVN1Y2Nlc3ModXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkVtYWlsU3VjY2VzcyhlbWFpbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUGFzc3dvcmRTdWNjZXNzKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wYWdlcy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHZoO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-7ba5bd90\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  id: \"pages\",\n  class: \"pages-container\"\n};\nconst _hoisted_2 = {\n  id: \"header\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  const _component_AppHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppHeader\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view, {\n    logged: $data.logged,\n    username: $data.username,\n    onLoginSuccess: $options.onLoginSuccess,\n    onUsernameSuccess: $options.onUsernameSuccess,\n    onEmailSuccess: $options.onEmailSuccess,\n    onPasswordSucess: $options.onPasswordSuccess\n  }, null, 8 /* PROPS */, [\"logged\", \"username\", \"onLoginSuccess\", \"onUsernameSuccess\", \"onEmailSuccess\", \"onPasswordSucess\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppHeader, {\n    logged: $data.logged,\n    username: $data.username,\n    email: $data.email,\n    password: $data.password\n  }, null, 8 /* PROPS */, [\"logged\", \"username\", \"email\", \"password\"])])], 64 /* STABLE_FRAGMENT */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7OztBQUtBO0FBQUE7Ozs7QUFMQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9BcHAudnVlPzkxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBpZD1cInBhZ2VzXCIgY2xhc3M9XCJwYWdlcy1jb250YWluZXJcIj5cclxuICAgICAgICA8cm91dGVyLXZpZXcgOmxvZ2dlZD1cImxvZ2dlZFwiIDp1c2VybmFtZT1cInVzZXJuYW1lXCIgQGxvZ2luLXN1Y2Nlc3M9XCJvbkxvZ2luU3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIEB1c2VybmFtZS1zdWNjZXNzPVwib25Vc2VybmFtZVN1Y2Nlc3NcIiBAZW1haWwtc3VjY2Vzcz1cIm9uRW1haWxTdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgQHBhc3N3b3JkLXN1Y2Vzcz1cIm9uUGFzc3dvcmRTdWNjZXNzXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPEFwcEhlYWRlciA6bG9nZ2VkPVwibG9nZ2VkXCIgOnVzZXJuYW1lPVwidXNlcm5hbWVcIiA6ZW1haWw9XCJlbWFpbFwiIDpwYXNzd29yZD1cInBhc3N3b3JkXCIvPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwSGVhZGVyLnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEFwcEhlYWRlcixcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvZ2dlZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZCcpID09PSAndHJ1ZScsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSxcclxuICAgICAgICAgICAgZW1haWw6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJyksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25Mb2dpblN1Y2Nlc3MobG9nZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkID0gbG9nZ2VkO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkJywgbG9nZ2VkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVXNlcm5hbWVTdWNjZXNzKHVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FbWFpbFN1Y2Nlc3MoZW1haWwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCBlbWFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblBhc3N3b3JkU3VjY2VzcyhwYXNzd29yZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ucGFnZXMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTB2aDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "17edaa109f111fa1"; }
/******/ }();
/******/ 
/******/ }
);