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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HomePage.vue\",\n  components: {},\n  methods: {\n    redirectToRecipePage() {\n      this.$router.push('/addRecipe');\n    },\n    getAllRecipes() {\n      // Axios para coger el template\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\").then(response => {\n        if (response.status === 200) {\n          const data = response.data;\n          console.log(\"Data is:\", data);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n\n      // Axios para recibir las recetas\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/getRecipies/\").then(response => {\n        if (response.status === 200) {\n          const recipes = response.data.recipes;\n          console.log(\"Recetas obtenidas:\", recipes);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n    }\n  },\n  created() {\n    this.getAllRecipes();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQStCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/NTdkNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVySFBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVIUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT4gVHJlbmRpbmcgVG9waWMgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZUNhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEFxdcOtIGNvbG9jYXLDoXMgbGFzIHRhcmpldGFzIGRlIGxhcyByZWNldGFzIG3DoXMgcG9wdWxhcmVzIC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUNvbnRhaW5lckhQXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlSFBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+IE1vc3QgTGlrZWQgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlQ2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gQXF1w60gY29sb2NhcsOhcyBsYXMgdGFyamV0YXMgZGUgbGFzIHJlY2V0YXMgbcOhcyBwb3B1bGFyZXMgLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZy1idXR0b25cIiBAY2xpY2s9XCJyZWRpcmVjdFRvUmVjaXBlUGFnZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5VcGxvYWQgbmV3IHJlY2lwZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJIb21lUGFnZS52dWVcIixcclxuICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlZGlyZWN0VG9SZWNpcGVQYWdlKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2FkZFJlY2lwZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QWxsUmVjaXBlcygpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEF4aW9zIHBhcmEgY29nZXIgZWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcIi9cIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBpczpcIiwgZGF0YSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBeGlvcyBwYXJhIHJlY2liaXIgbGFzIHJlY2V0YXNcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcIi9nZXRSZWNpcGllcy9cIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY2lwZXMgPSByZXNwb25zZS5kYXRhLnJlY2lwZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2V0YXMgb2J0ZW5pZGFzOlwiLCByZWNpcGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxSZWNpcGVzKClcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b24gaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b24gLnRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgZm9udC1zaXplIDAuM3M7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b246aG92ZXIge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBDYW1iaWFyIGVsIGJvcmRlIHBhcmEgcXVlIHNlYSBtw6FzIHJlY3Rhbmd1bGFyICovXHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b246aG92ZXIgaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgZm9udC1zaXplIDAuM3M7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-24c5b49c\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"secondaryContainer\\\" data-v-24c5b49c><div class=\\\"titleContainerHP\\\" data-v-24c5b49c><div class=\\\"mainTitleHP\\\" data-v-24c5b49c><h1 data-v-24c5b49c> Trending Topic Recipes </h1></div></div><div class=\\\"recipeCarousel\\\" data-v-24c5b49c><!-- Aquí colocarás las tarjetas de las recetas más populares --></div></div><div class=\\\"secondaryContainer\\\" data-v-24c5b49c><div class=\\\"titleContainerHP\\\" data-v-24c5b49c><div class=\\\"mainTitleHP\\\" data-v-24c5b49c><h1 data-v-24c5b49c> Most Liked Recipes </h1></div></div><div class=\\\"recipeCarousel\\\" data-v-24c5b49c><!-- Aquí colocarás las tarjetas de las recetas más populares --></div></div>\", 2);\nconst _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n  class: \"fas fa-plus\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"text\"\n}, \"Upload new recipe\", -1 /* HOISTED */));\nconst _hoisted_6 = [_hoisted_4, _hoisted_5];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"floating-button\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.redirectToRecipePage && $options.redirectToRecipePage(...args))\n  }, _hoisted_6)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0YzViNDljJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7O0FBdkJBO0FBc0JBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/NTdkNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVySFBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVIUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT4gVHJlbmRpbmcgVG9waWMgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZUNhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEFxdcOtIGNvbG9jYXLDoXMgbGFzIHRhcmpldGFzIGRlIGxhcyByZWNldGFzIG3DoXMgcG9wdWxhcmVzIC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUNvbnRhaW5lckhQXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlSFBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+IE1vc3QgTGlrZWQgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlQ2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gQXF1w60gY29sb2NhcsOhcyBsYXMgdGFyamV0YXMgZGUgbGFzIHJlY2V0YXMgbcOhcyBwb3B1bGFyZXMgLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZy1idXR0b25cIiBAY2xpY2s9XCJyZWRpcmVjdFRvUmVjaXBlUGFnZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5VcGxvYWQgbmV3IHJlY2lwZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJIb21lUGFnZS52dWVcIixcclxuICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlZGlyZWN0VG9SZWNpcGVQYWdlKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2FkZFJlY2lwZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QWxsUmVjaXBlcygpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEF4aW9zIHBhcmEgY29nZXIgZWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcIi9cIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBpczpcIiwgZGF0YSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBeGlvcyBwYXJhIHJlY2liaXIgbGFzIHJlY2V0YXNcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcIi9nZXRSZWNpcGllcy9cIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY2lwZXMgPSByZXNwb25zZS5kYXRhLnJlY2lwZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2V0YXMgb2J0ZW5pZGFzOlwiLCByZWNpcGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxSZWNpcGVzKClcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b24gaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b24gLnRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgZm9udC1zaXplIDAuM3M7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b246aG92ZXIge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBDYW1iaWFyIGVsIGJvcmRlIHBhcmEgcXVlIHNlYSBtw6FzIHJlY3Rhbmd1bGFyICovXHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b246aG92ZXIgaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgZm9udC1zaXplIDAuM3M7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9c47f0f7e530a1ce"; }
/******/ }();
/******/ 
/******/ }
);