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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/HomePage.vue */ \"./src/pages/HomePage.vue\");\n/* harmony import */ var _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/RegisterPage.vue */ \"./src/pages/RegisterPage.vue\");\n/* harmony import */ var _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LoginPage.vue */ \"./src/pages/LoginPage.vue\");\n/* harmony import */ var _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/AddRecipePage.vue */ \"./src/pages/AddRecipePage.vue\");\n/* harmony import */ var _pages_ProfilePage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ProfilePage.vue */ \"./src/pages/ProfilePage.vue\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/RecipePage.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\nconst routes = [{\n  path: \"\",\n  component: _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  name: \"home\"\n}, {\n  path: \"/register\",\n  component: _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: \"register\"\n}, {\n  path: \"/login\",\n  component: _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  name: \"login\"\n}, {\n  path: \"/addRecipe\",\n  component: _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  name: \"addRecipe\"\n}, {\n  path: \"/profile\",\n  component: _pages_ProfilePage_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  name: \"profile\"\n}, {\n  path: \"/recipePage\",\n  component: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/RecipePage.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  name: \"recipePage\"\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.createWebHistory)(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0ZXIuanM/NGM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVdlYkhpc3RvcnksIGNyZWF0ZVJvdXRlcn0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcblxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVQYWdlLnZ1ZVwiO1xuaW1wb3J0IFJlZ2lzdGVyUGFnZSBmcm9tIFwiLi9wYWdlcy9SZWdpc3RlclBhZ2UudnVlXCI7XG5pbXBvcnQgTG9naW5QYWdlIGZyb20gXCIuL3BhZ2VzL0xvZ2luUGFnZS52dWVcIjtcbmltcG9ydCBBZGRSZWNpcGVQYWdlIGZyb20gXCIuL3BhZ2VzL0FkZFJlY2lwZVBhZ2UudnVlXCI7XG5pbXBvcnQgUHJvZmlsZVBhZ2UgZnJvbSBcIi4vcGFnZXMvUHJvZmlsZVBhZ2UudnVlXCJcbmltcG9ydCBSZWNpcGVQYWdlIGZyb20gXCIuL3BhZ2VzL1JlY2lwZVBhZ2UudnVlXCJcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCJcIixcbiAgICBjb21wb25lbnQ6IEhvbWVQYWdlLFxuICAgIG5hbWU6IFwiaG9tZVwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvcmVnaXN0ZXJcIixcbiAgICBjb21wb25lbnQ6IFJlZ2lzdGVyUGFnZSxcbiAgICBuYW1lOiBcInJlZ2lzdGVyXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9sb2dpblwiLFxuICAgIGNvbXBvbmVudDogTG9naW5QYWdlLFxuICAgIG5hbWU6IFwibG9naW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2FkZFJlY2lwZVwiLFxuICAgIGNvbXBvbmVudDogQWRkUmVjaXBlUGFnZSxcbiAgICBuYW1lOiBcImFkZFJlY2lwZVwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvcHJvZmlsZVwiLFxuICAgIGNvbXBvbmVudDogUHJvZmlsZVBhZ2UsXG4gICAgbmFtZTogXCJwcm9maWxlXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9yZWNpcGVQYWdlXCIsXG4gICAgY29tcG9uZW50OiBSZWNpcGVQYWdlLFxuICAgIG5hbWU6IFwicmVjaXBlUGFnZVwiLFxuICB9LFxuXTtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksXG4gICAgcm91dGVzOiByb3V0ZXMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c7bf9acc1640a2c3"; }
/******/ }();
/******/ 
/******/ }
);