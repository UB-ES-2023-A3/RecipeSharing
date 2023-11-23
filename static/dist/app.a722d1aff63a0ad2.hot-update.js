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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/HomePage.vue */ \"./src/pages/HomePage.vue\");\n/* harmony import */ var _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/RegisterPage.vue */ \"./src/pages/RegisterPage.vue\");\n/* harmony import */ var _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LoginPage.vue */ \"./src/pages/LoginPage.vue\");\n/* harmony import */ var _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/AddRecipePage.vue */ \"./src/pages/AddRecipePage.vue\");\n/* harmony import */ var _pages_ProfilePage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ProfilePage.vue */ \"./src/pages/ProfilePage.vue\");\n/* harmony import */ var _pages_RecipePage_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/RecipePage.vue */ \"./src/pages/RecipePage.vue\");\n\n\n\n\n\n\n\nconst routes = [{\n  path: \"\",\n  component: _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  name: \"home\"\n}, {\n  path: \"/register\",\n  component: _pages_RegisterPage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: \"register\"\n}, {\n  path: \"/login\",\n  component: _pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  name: \"login\"\n}, {\n  path: \"/addRecipe\",\n  component: _pages_AddRecipePage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  name: \"addRecipe\"\n}, {\n  path: \"/profile\",\n  component: _pages_ProfilePage_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  name: \"profile\"\n}, {\n  path: \"/recipePage/recipe/\",\n  component: _pages_RecipePage_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  name: \"recipePage\"\n}, {\n  path: \"/recipePage/recipe/:recipe_id\",\n  component: _pages_RecipePage_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  name: \"recipePages\"\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.createWebHistory)(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3JvdXRlci5qcz80YzgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlV2ViSGlzdG9yeSwgY3JlYXRlUm91dGVyfSBmcm9tIFwidnVlLXJvdXRlclwiO1xyXG5cclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVQYWdlLnZ1ZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJQYWdlIGZyb20gXCIuL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWVcIjtcclxuaW1wb3J0IExvZ2luUGFnZSBmcm9tIFwiLi9wYWdlcy9Mb2dpblBhZ2UudnVlXCI7XHJcbmltcG9ydCBBZGRSZWNpcGVQYWdlIGZyb20gXCIuL3BhZ2VzL0FkZFJlY2lwZVBhZ2UudnVlXCI7XHJcbmltcG9ydCBQcm9maWxlUGFnZSBmcm9tIFwiLi9wYWdlcy9Qcm9maWxlUGFnZS52dWVcIlxyXG5pbXBvcnQgUmVjaXBlUGFnZSBmcm9tIFwiLi9wYWdlcy9SZWNpcGVQYWdlLnZ1ZVwiXHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCJcIixcclxuICAgICAgICBjb21wb25lbnQ6IEhvbWVQYWdlLFxyXG4gICAgICAgIG5hbWU6IFwiaG9tZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9yZWdpc3RlclwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJQYWdlLFxyXG4gICAgICAgIG5hbWU6IFwicmVnaXN0ZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvbG9naW5cIixcclxuICAgICAgICBjb21wb25lbnQ6IExvZ2luUGFnZSxcclxuICAgICAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2FkZFJlY2lwZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogQWRkUmVjaXBlUGFnZSxcclxuICAgICAgICBuYW1lOiBcImFkZFJlY2lwZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9wcm9maWxlXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBQcm9maWxlUGFnZSxcclxuICAgICAgICBuYW1lOiBcInByb2ZpbGVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvcmVjaXBlUGFnZS9yZWNpcGUvXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZWNpcGVQYWdlLFxyXG4gICAgICAgIG5hbWU6IFwicmVjaXBlUGFnZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9yZWNpcGVQYWdlL3JlY2lwZS86cmVjaXBlX2lkXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZWNpcGVQYWdlLFxyXG4gICAgICAgIG5hbWU6IFwicmVjaXBlUGFnZXNcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xyXG4gICAgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeSgpLFxyXG4gICAgcm91dGVzOiByb3V0ZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f660063920116102"; }
/******/ }();
/******/ 
/******/ }
);