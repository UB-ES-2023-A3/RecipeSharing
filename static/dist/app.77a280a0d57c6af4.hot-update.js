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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppHeader.vue */ \"./src/components/AppHeader.vue\");\n/* harmony import */ var _components_AppHeaderIni_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AppHeaderIni.vue */ \"./src/components/AppHeaderIni.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    AppHeader: _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    AppHeaderIni: _components_AppHeaderIni_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      logged: false\n    };\n  },\n  mounted() {\n    this.updateLogged();\n  },\n  methods: {\n    updateLogged() {\n      alert(this.$route.name);\n      if (this.$route.meta && this.$route.meta.requiresAuth) {\n        this.logged = true;\n        alert(\"HOLA\");\n      } else {\n        alert(\"ADIOS\");\n        this.logged = false;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7OztBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQXBwLnZ1ZT85MWEwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbiAgICAgICAgPCEtLSBFbmNhYmV6YWRvIGVzcGVjw61maWNvIHBhcmEgbGFzIHDDoWdpbmFzIFwiTG9naW5QYWdlXCIgeSBcIlJlZ2lzdGVyUGFnZVwiIC0tPlxyXG4gICAgICAgIDxBcHBIZWFkZXJJbmkgdi1pZj1cIiRyb3V0ZS5uYW1lID09PSAncmVnaXN0ZXInIHx8ICRyb3V0ZS5uYW1lID09PSAnbG9naW4nXCIvPlxyXG4gICAgICAgIDwhLS0gRW5jYWJlemFkbyBjb23Dum4gZW4gdG9kYXMgbGFzIHDDoWdpbmFzIC0tPlxyXG4gICAgICAgIDxBcHBIZWFkZXIgdi1lbHNlLz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0FwcEhlYWRlci52dWVcIjtcclxuaW1wb3J0IEFwcEhlYWRlckluaSBmcm9tIFwiLi9jb21wb25lbnRzL0FwcEhlYWRlckluaS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBBcHBIZWFkZXIsXHJcbiAgICAgICAgQXBwSGVhZGVySW5pLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9nZ2VkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMb2dnZWQoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlTG9nZ2VkKCkge1xyXG4gICAgICAgICAgICBhbGVydCh0aGlzLiRyb3V0ZS5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHJvdXRlLm1ldGEgJiYgdGhpcy4kcm91dGUubWV0YS5yZXF1aXJlc0F1dGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSE9MQVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQURJT1NcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  const _component_AppHeaderIni = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppHeaderIni\");\n  const _component_AppHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppHeader\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Encabezado específico para las páginas \\\"LoginPage\\\" y \\\"RegisterPage\\\" \"), _ctx.$route.name === 'register' || _ctx.$route.name === 'login' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AppHeaderIni, {\n    key: 0\n  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    key: 1\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Encabezado común en todas las páginas \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppHeader)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0FwcC52dWU/OTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG4gICAgICAgIDwhLS0gRW5jYWJlemFkbyBlc3BlY8OtZmljbyBwYXJhIGxhcyBww6FnaW5hcyBcIkxvZ2luUGFnZVwiIHkgXCJSZWdpc3RlclBhZ2VcIiAtLT5cclxuICAgICAgICA8QXBwSGVhZGVySW5pIHYtaWY9XCIkcm91dGUubmFtZSA9PT0gJ3JlZ2lzdGVyJyB8fCAkcm91dGUubmFtZSA9PT0gJ2xvZ2luJ1wiLz5cclxuICAgICAgICA8IS0tIEVuY2FiZXphZG8gY29tw7puIGVuIHRvZGFzIGxhcyBww6FnaW5hcyAtLT5cclxuICAgICAgICA8QXBwSGVhZGVyIHYtZWxzZS8+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBBcHBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBIZWFkZXIudnVlXCI7XHJcbmltcG9ydCBBcHBIZWFkZXJJbmkgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBIZWFkZXJJbmkudnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgQXBwSGVhZGVyLFxyXG4gICAgICAgIEFwcEhlYWRlckluaSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvZ2dlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTG9nZ2VkKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZUxvZ2dlZCgpIHtcclxuICAgICAgICAgICAgYWxlcnQodGhpcy4kcm91dGUubmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRyb3V0ZS5tZXRhICYmIHRoaXMuJHJvdXRlLm1ldGEucmVxdWlyZXNBdXRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkhPTEFcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFESU9TXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "86f9542cea504e3a"; }
/******/ }();
/******/ 
/******/ }
);