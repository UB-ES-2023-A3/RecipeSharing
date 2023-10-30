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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HomePage.vue\",\n  components: {},\n  methods: {\n    redirectToRecipePage() {\n      this.$router.push('/addRecipe');\n    },\n    getAllRecipes() {\n      console.log(\"get recipes\");\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\") // Reemplaza \"/recetas/\" con la URL de tu endpoint de recetas\n      .then(response => {\n        console.log(response);\n        if (response.status === 200) {\n          // La respuesta debe contener las recetas en formato JSON\n          const recipes = response.data; // Asegúrate de que \"recetas\" sea la clave correcta en la respuesta JSON\n\n          // Haz lo que necesites con las recetas, por ejemplo, mostrarlas en la vista\n          //console.log(\"Recetas obtenidas:\", recipes);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n        // Realiza alguna acción en caso de error, como mostrar un mensaje de error\n      });\n    }\n  },\n\n  created() {\n    this.getAllRecipes();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQStCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL0hvbWVQYWdlLnZ1ZT81N2Q1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVDb250YWluZXJIUFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZUhQXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPiBUcmVuZGluZyBUb3BpYyBSZWNpcGVzIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlQ2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gQXF1w60gY29sb2NhcsOhcyBsYXMgdGFyamV0YXMgZGUgbGFzIHJlY2V0YXMgbcOhcyBwb3B1bGFyZXMgLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVySFBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVIUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT4gTW9zdCBMaWtlZCBSZWNpcGVzIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVDYXJvdXNlbFwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBBcXXDrSBjb2xvY2Fyw6FzIGxhcyB0YXJqZXRhcyBkZSBsYXMgcmVjZXRhcyBtw6FzIHBvcHVsYXJlcyAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0aW5nLWJ1dHRvblwiIEBjbGljaz1cInJlZGlyZWN0VG9SZWNpcGVQYWdlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlVwbG9hZCBuZXcgcmVjaXBlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIkhvbWVQYWdlLnZ1ZVwiLFxyXG4gICAgY29tcG9uZW50czoge30sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVkaXJlY3RUb1JlY2lwZVBhZ2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvYWRkUmVjaXBlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRBbGxSZWNpcGVzKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCByZWNpcGVzXCIpXHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXCIvXCIpIC8vIFJlZW1wbGF6YSBcIi9yZWNldGFzL1wiIGNvbiBsYSBVUkwgZGUgdHUgZW5kcG9pbnQgZGUgcmVjZXRhc1xyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMYSByZXNwdWVzdGEgZGViZSBjb250ZW5lciBsYXMgcmVjZXRhcyBlbiBmb3JtYXRvIEpTT05cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY2lwZXMgPSByZXNwb25zZS5kYXRhOyAvLyBBc2Vnw7pyYXRlIGRlIHF1ZSBcInJlY2V0YXNcIiBzZWEgbGEgY2xhdmUgY29ycmVjdGEgZW4gbGEgcmVzcHVlc3RhIEpTT05cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEhheiBsbyBxdWUgbmVjZXNpdGVzIGNvbiBsYXMgcmVjZXRhcywgcG9yIGVqZW1wbG8sIG1vc3RyYXJsYXMgZW4gbGEgdmlzdGFcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSZWNldGFzIG9idGVuaWRhczpcIiwgcmVjaXBlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBvYnRlbmVyIGxhcyByZWNldGFzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWFsaXphIGFsZ3VuYSBhY2Npw7NuIGVuIGNhc28gZGUgZXJyb3IsIGNvbW8gbW9zdHJhciB1biBtZW5zYWplIGRlIGVycm9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsUmVjaXBlcygpXHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5mbG9hdGluZy1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uIGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGZvbnQtc2l6ZSAwLjNzO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogQ2FtYmlhciBlbCBib3JkZSBwYXJhIHF1ZSBzZWEgbcOhcyByZWN0YW5ndWxhciAqL1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIGkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlciAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGZvbnQtc2l6ZSAwLjNzO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-24c5b49c\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"secondaryContainer\\\" data-v-24c5b49c><div class=\\\"titleContainerHP\\\" data-v-24c5b49c><div class=\\\"mainTitleHP\\\" data-v-24c5b49c><h1 data-v-24c5b49c> Trending Topic Recipes </h1></div></div><div class=\\\"recipeCarousel\\\" data-v-24c5b49c><!-- Aquí colocarás las tarjetas de las recetas más populares --></div></div><div class=\\\"secondaryContainer\\\" data-v-24c5b49c><div class=\\\"titleContainerHP\\\" data-v-24c5b49c><div class=\\\"mainTitleHP\\\" data-v-24c5b49c><h1 data-v-24c5b49c> Most Liked Recipes </h1></div></div><div class=\\\"recipeCarousel\\\" data-v-24c5b49c><!-- Aquí colocarás las tarjetas de las recetas más populares --></div></div>\", 2);\nconst _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n  class: \"fas fa-plus\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"text\"\n}, \"Upload new recipe\", -1 /* HOISTED */));\nconst _hoisted_6 = [_hoisted_4, _hoisted_5];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"floating-button\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.redirectToRecipePage && $options.redirectToRecipePage(...args))\n  }, _hoisted_6)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0YzViNDljJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7O0FBdkJBO0FBc0JBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/NTdkNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVySFBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVIUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT4gVHJlbmRpbmcgVG9waWMgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZUNhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEFxdcOtIGNvbG9jYXLDoXMgbGFzIHRhcmpldGFzIGRlIGxhcyByZWNldGFzIG3DoXMgcG9wdWxhcmVzIC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUNvbnRhaW5lckhQXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlSFBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+IE1vc3QgTGlrZWQgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlQ2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gQXF1w60gY29sb2NhcsOhcyBsYXMgdGFyamV0YXMgZGUgbGFzIHJlY2V0YXMgbcOhcyBwb3B1bGFyZXMgLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZy1idXR0b25cIiBAY2xpY2s9XCJyZWRpcmVjdFRvUmVjaXBlUGFnZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5VcGxvYWQgbmV3IHJlY2lwZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJIb21lUGFnZS52dWVcIixcclxuICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlZGlyZWN0VG9SZWNpcGVQYWdlKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2FkZFJlY2lwZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QWxsUmVjaXBlcygpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgcmVjaXBlc1wiKVxyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KFwiL1wiKSAvLyBSZWVtcGxhemEgXCIvcmVjZXRhcy9cIiBjb24gbGEgVVJMIGRlIHR1IGVuZHBvaW50IGRlIHJlY2V0YXNcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTGEgcmVzcHVlc3RhIGRlYmUgY29udGVuZXIgbGFzIHJlY2V0YXMgZW4gZm9ybWF0byBKU09OXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWNpcGVzID0gcmVzcG9uc2UuZGF0YTsgLy8gQXNlZ8O6cmF0ZSBkZSBxdWUgXCJyZWNldGFzXCIgc2VhIGxhIGNsYXZlIGNvcnJlY3RhIGVuIGxhIHJlc3B1ZXN0YSBKU09OXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBIYXogbG8gcXVlIG5lY2VzaXRlcyBjb24gbGFzIHJlY2V0YXMsIHBvciBlamVtcGxvLCBtb3N0cmFybGFzIGVuIGxhIHZpc3RhXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVjZXRhcyBvYnRlbmlkYXM6XCIsIHJlY2lwZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgb2J0ZW5lciBsYXMgcmVjZXRhczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVhbGl6YSBhbGd1bmEgYWNjacOzbiBlbiBjYXNvIGRlIGVycm9yLCBjb21vIG1vc3RyYXIgdW4gbWVuc2FqZSBkZSBlcnJvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmdldEFsbFJlY2lwZXMoKVxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbiAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBmb250LXNpemUgMC4zcztcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlciB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIENhbWJpYXIgZWwgYm9yZGUgcGFyYSBxdWUgc2VhIG3DoXMgcmVjdGFuZ3VsYXIgKi9cclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlciBpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b246aG92ZXIgLnRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBmb250LXNpemUgMC4zcztcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c1807d4dd58e3ec8"; }
/******/ }();
/******/ 
/******/ }
);