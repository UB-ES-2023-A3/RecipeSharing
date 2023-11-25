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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/HomePage.vue */ \"./src/pages/HomePage.vue\");\n/* harmony import */ var _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/RegisterPage.vue */ \"./src/pages/RegisterPage.vue\");\n/* harmony import */ var _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LoginPage.vue */ \"./src/pages/LoginPage.vue\");\n/* harmony import */ var _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/AddRecipePage.vue */ \"./src/pages/AddRecipePage.vue\");\n/* harmony import */ var _pages_ProfilePage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ProfilePage.vue */ \"./src/pages/ProfilePage.vue\");\n/* harmony import */ var _pages_RecipePage_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/RecipePage.vue */ \"./src/pages/RecipePage.vue\");\n\n\n\n\n\n\n\nconst routes = [{\n  path: \"\",\n  component: _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  name: \"home\"\n}, {\n  path: \"/register\",\n  component: _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: \"register\"\n}, {\n  path: \"/login\",\n  component: _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  name: \"login\"\n}, {\n  path: \"/addRecipe\",\n  component: _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  name: \"addRecipe\"\n}, {\n  path: \"/profile\",\n  component: _pages_ProfilePage_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  name: \"profile\"\n}, {\n  path: \"/recipePage/:recipe_id\",\n  component: _pages_RecipePage_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  name: \"recipePage\"\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.createWebHistory)(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0ZXIuanM/NGM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVdlYkhpc3RvcnksIGNyZWF0ZVJvdXRlcn0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9wYWdlcy9Ib21lUGFnZS52dWVcIjtcclxuaW1wb3J0IFJlZ2lzdGVyUGFnZSBmcm9tIFwiLi9wYWdlcy9SZWdpc3RlclBhZ2UudnVlXCI7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4vcGFnZXMvTG9naW5QYWdlLnZ1ZVwiO1xyXG5pbXBvcnQgQWRkUmVjaXBlUGFnZSBmcm9tIFwiLi9wYWdlcy9BZGRSZWNpcGVQYWdlLnZ1ZVwiO1xyXG5pbXBvcnQgUHJvZmlsZVBhZ2UgZnJvbSBcIi4vcGFnZXMvUHJvZmlsZVBhZ2UudnVlXCJcclxuaW1wb3J0IFJlY2lwZVBhZ2UgZnJvbSBcIi4vcGFnZXMvUmVjaXBlUGFnZS52dWVcIlxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiXCIsXHJcbiAgICBjb21wb25lbnQ6IEhvbWVQYWdlLFxyXG4gICAgbmFtZTogXCJob21lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9yZWdpc3RlclwiLFxyXG4gICAgY29tcG9uZW50OiBSZWdpc3RlclBhZ2UsXHJcbiAgICBuYW1lOiBcInJlZ2lzdGVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9sb2dpblwiLFxyXG4gICAgY29tcG9uZW50OiBMb2dpblBhZ2UsXHJcbiAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9hZGRSZWNpcGVcIixcclxuICAgIGNvbXBvbmVudDogQWRkUmVjaXBlUGFnZSxcclxuICAgIG5hbWU6IFwiYWRkUmVjaXBlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wcm9maWxlXCIsXHJcbiAgICBjb21wb25lbnQ6IFByb2ZpbGVQYWdlLFxyXG4gICAgbmFtZTogXCJwcm9maWxlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9yZWNpcGVQYWdlLzpyZWNpcGVfaWRcIixcclxuICAgIGNvbXBvbmVudDogUmVjaXBlUGFnZSxcclxuICAgIG5hbWU6IFwicmVjaXBlUGFnZVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xyXG4gICAgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeSgpLFxyXG4gICAgcm91dGVzOiByb3V0ZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "558fa2e486920a71"; }
/******/ }();
/******/ 
/******/ }
);