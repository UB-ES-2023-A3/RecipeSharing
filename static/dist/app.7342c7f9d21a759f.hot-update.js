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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/HomePage.vue */ \"./src/pages/HomePage.vue\");\n/* harmony import */ var _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/RegisterPage.vue */ \"./src/pages/RegisterPage.vue\");\n/* harmony import */ var _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LoginPage.vue */ \"./src/pages/LoginPage.vue\");\n/* harmony import */ var _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/AddRecipePage.vue */ \"./src/pages/AddRecipePage.vue\");\n\n\n\n\n\nconst routes = [{\n  path: \"\",\n  component: (_pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0___default()),\n  name: 'home'\n}, {\n  path: \"/register\",\n  component: _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'register'\n}, {\n  path: \"/login\",\n  component: _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  name: 'login'\n}, {\n  path: \"/addRecipe\",\n  component: _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  name: 'addRecipe'\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createWebHistory)(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0ZXIuanM/NGM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVdlYkhpc3RvcnksIGNyZWF0ZVJvdXRlcn0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcblxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVQYWdlLnZ1ZVwiO1xuaW1wb3J0IFJlZ2lzdGVyUGFnZSBmcm9tIFwiLi9wYWdlcy9SZWdpc3RlclBhZ2UudnVlXCI7XG5pbXBvcnQgTG9naW5QYWdlIGZyb20gXCIuL3BhZ2VzL0xvZ2luUGFnZS52dWVcIjtcbmltcG9ydCBBZGRSZWNpcGVQYWdlIGZyb20gXCIuL3BhZ2VzL0FkZFJlY2lwZVBhZ2UudnVlXCI7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZVBhZ2UsXG4gICAgICAgIG5hbWU6ICdob21lJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvcmVnaXN0ZXJcIixcbiAgICAgICAgY29tcG9uZW50OiBSZWdpc3RlclBhZ2UsXG4gICAgICAgIG5hbWU6ICdyZWdpc3RlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgICAgIGNvbXBvbmVudDogTG9naW5QYWdlLFxuICAgICAgICBuYW1lOiAnbG9naW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9hZGRSZWNpcGVcIixcbiAgICAgICAgY29tcG9uZW50OiBBZGRSZWNpcGVQYWdlLFxuICAgICAgICBuYW1lOiAnYWRkUmVjaXBlJyxcbiAgICB9LFxuXTtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksXG4gICAgcm91dGVzOiByb3V0ZXMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ }),

/***/ "./src/pages/HomePage.vue":
/*!********************************!*\
  !*** ./src/pages/HomePage.vue ***!
  \********************************/
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "689ef32046d8a696"; }
/******/ }();
/******/ 
/******/ }
);