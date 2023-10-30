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

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/HomePage.vue */ \"./src/pages/HomePage.vue\");\n/* harmony import */ var _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/RegisterPage.vue */ \"./src/pages/RegisterPage.vue\");\n/* harmony import */ var _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LoginPage.vue */ \"./src/pages/LoginPage.vue\");\n/* harmony import */ var _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/AddRecipePage.vue */ \"./src/pages/AddRecipePage.vue\");\n\n\n\n\n\nconst routes = [{\n  path: \"\",\n  component: _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  name: 'home',\n  meta: {\n    requiresAuth: true // Puedes usar este campo para almacenar el valor de logged\n  }\n}, {\n  path: \"/register\",\n  component: _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'register'\n}, {\n  path: \"/login\",\n  component: _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  name: 'login'\n}, {\n  path: \"/addRecipe\",\n  component: _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  name: 'addRecipe'\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createWebHistory)(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3JvdXRlci5qcz80YzgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlV2ViSGlzdG9yeSwgY3JlYXRlUm91dGVyfSBmcm9tIFwidnVlLXJvdXRlclwiO1xyXG5cclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVQYWdlLnZ1ZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJQYWdlIGZyb20gXCIuL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWVcIjtcclxuaW1wb3J0IExvZ2luUGFnZSBmcm9tIFwiLi9wYWdlcy9Mb2dpblBhZ2UudnVlXCI7XHJcbmltcG9ydCBBZGRSZWNpcGVQYWdlIGZyb20gXCIuL3BhZ2VzL0FkZFJlY2lwZVBhZ2UudnVlXCI7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCJcIixcclxuICAgICAgICBjb21wb25lbnQ6IEhvbWVQYWdlLFxyXG4gICAgICAgIG5hbWU6ICdob21lJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVzQXV0aDogdHJ1ZSwgLy8gUHVlZGVzIHVzYXIgZXN0ZSBjYW1wbyBwYXJhIGFsbWFjZW5hciBlbCB2YWxvciBkZSBsb2dnZWRcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9yZWdpc3RlclwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJQYWdlLFxyXG4gICAgICAgIG5hbWU6ICdyZWdpc3RlcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBMb2dpblBhZ2UsXHJcbiAgICAgICAgbmFtZTogJ2xvZ2luJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvYWRkUmVjaXBlXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBBZGRSZWNpcGVQYWdlLFxyXG4gICAgICAgIG5hbWU6ICdhZGRSZWNpcGUnLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XHJcbiAgICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksXHJcbiAgICByb3V0ZXM6IHJvdXRlcyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7f00cdf393926226"; }
/******/ }();
/******/ 
/******/ }
);