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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_AppCardCarousel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AppCardCarousel.vue */ \"./src/components/AppCardCarousel.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HomePage.vue\",\n  components: {\n    AppCardCarousel: _components_AppCardCarousel_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: {\n    logged: Boolean,\n    username: String,\n    email: String,\n    password: String\n  },\n  data() {\n    return {\n      recipesByDate: [],\n      recipesByRate: [],\n      rate: \"rate\",\n      recent: \"recent\"\n    };\n  },\n  methods: {\n    redirectToRecipePage() {\n      this.$router.push('/addRecipe');\n    },\n    getRecipesByRate() {\n      // Axios para coger el template\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/\").then(response => {\n        if (response.status === 200) {\n          const data = response.data;\n          console.log(\"Data is:\", data);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n\n      // Axios para recibir las recetas\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"recipe/rate/\").then(response => {\n        if (response.status === 200) {\n          const recipes = response.data.recipes;\n          this.recipesByRate = recipes;\n          console.log(response.data.recipes);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n    },\n    getRecipesByRecent() {\n      // Axios para coger el template\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/\").then(response => {\n        if (response.status === 200) {\n          const data = response.data;\n          console.log(\"Data is:\", data);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n\n      // Axios para recibir las recetas\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"recipe/recent/\").then(response => {\n        if (response.status === 200) {\n          const recipes = response.data.recipes;\n          this.recipesByDate = recipes;\n          console.log(response.data.recipes);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n    }\n  },\n  created() {\n    this.getRecipesByRate();\n    this.getRecipesByRecent();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUErQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvSG9tZVBhZ2UudnVlPzU3ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBpZD1cImhvbWVNYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImhvbWVOYW1lU2VhcmNoZXJDb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImhvbWVGaWx0ZXJDb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImhvbWVTZWN0aW9uQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lU2VjdGlvblRpdGxlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+IFNlYXJjaGVkIFJlY2lwZXMgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lU2VjdGlvbkNhcnJvdXNlbENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8QXBwQ2FyZENhcm91c2VsIDp0eXBlPVwicmVjZW50XCIgOnJlY2lwZXM9XCJ0aGlzLnJlY2lwZXNCeVJhdGVcIiA6dmlzaWJsZVJlY2lwZXM9XCI4XCIgOmxvZ2dlZD1cInRoaXMubG9nZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dXNlcm5hbWU9XCJ0aGlzLnVzZXJuYW1lXCIgdi1pZj1cInJlY2lwZXNCeVJhdGUubGVuZ3RoID4gMFwiPjwvQXBwQ2FyZENhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWVTZWN0aW9uU2VwYXJhdG9yQ29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWVTZWN0aW9uVGl0bGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT4gTW9zdCBSZWNlbnQgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWVTZWN0aW9uQ2Fycm91c2VsQ29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWVTZWN0aW9uU2VwYXJhdG9yQ29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWVTZWN0aW9uVGl0bGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT4gTW9zdCBMaWtlZCBSZWNpcGVzIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25DYXJyb3VzZWxDb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25TZXBhcmF0b3JDb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQXBwQ2FyZENhcm91c2VsIGZyb20gJ0AvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiSG9tZVBhZ2UudnVlXCIsXHJcblxyXG4gICAgY29tcG9uZW50czoge0FwcENhcmRDYXJvdXNlbH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbixcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlY2lwZXNCeURhdGU6IFtdLFxyXG4gICAgICAgICAgICByZWNpcGVzQnlSYXRlOiBbXSxcclxuICAgICAgICAgICAgcmF0ZTogXCJyYXRlXCIsXHJcbiAgICAgICAgICAgIHJlY2VudDogXCJyZWNlbnRcIixcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByZWRpcmVjdFRvUmVjaXBlUGFnZSgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9hZGRSZWNpcGUnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlY2lwZXNCeVJhdGUoKSB7XHJcbiAgICAgICAgICAgIC8vIEF4aW9zIHBhcmEgY29nZXIgZWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXCIvXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGlzOlwiLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQXhpb3MgcGFyYSByZWNpYmlyIGxhcyByZWNldGFzXHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwicmVjaXBlL3JhdGUvXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjaXBlcyA9IHJlc3BvbnNlLmRhdGEucmVjaXBlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNpcGVzQnlSYXRlID0gcmVjaXBlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5yZWNpcGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVjaXBlc0J5UmVjZW50KCkge1xyXG4gICAgICAgICAgICAvLyBBeGlvcyBwYXJhIGNvZ2VyIGVsIHRlbXBsYXRlXHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwiL1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBpczpcIiwgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBvYnRlbmVyIGxhcyByZWNldGFzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEF4aW9zIHBhcmEgcmVjaWJpciBsYXMgcmVjZXRhc1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcInJlY2lwZS9yZWNlbnQvXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjaXBlcyA9IHJlc3BvbnNlLmRhdGEucmVjaXBlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNpcGVzQnlEYXRlID0gcmVjaXBlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5yZWNpcGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UmVjaXBlc0J5UmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVjaXBlc0J5UmVjZW50KCk7XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5mbG9hdGluZy1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uIGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGZvbnQtc2l6ZSAwLjNzO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogQ2FtYmlhciBlbCBib3JkZSBwYXJhIHF1ZSBzZWEgbcOhcyByZWN0YW5ndWxhciAqL1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIGkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlciAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGZvbnQtc2l6ZSAwLjNzO1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-24c5b49c\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  id: \"homeMainContainer\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"homeNameSearcherContainer\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"homeFilterContainer\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_4 = {\n  id: \"homeSectionContainer\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"homeSectionTitleContainer\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \" Searched Recipes \")], -1 /* HOISTED */));\nconst _hoisted_6 = {\n  id: \"homeSectionCarrouselContainer\"\n};\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"homeSectionSeparatorContainer\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"homeSectionContainer\\\" data-v-24c5b49c><div id=\\\"homeSectionTitleContainer\\\" data-v-24c5b49c><h1 data-v-24c5b49c> Most Recent Recipes </h1></div><div id=\\\"homeSectionCarrouselContainer\\\" data-v-24c5b49c></div><div id=\\\"homeSectionSeparatorContainer\\\" data-v-24c5b49c></div></div><div id=\\\"homeSectionContainer\\\" data-v-24c5b49c><div id=\\\"homeSectionTitleContainer\\\" data-v-24c5b49c><h1 data-v-24c5b49c> Most Liked Recipes </h1></div><div id=\\\"homeSectionCarrouselContainer\\\" data-v-24c5b49c></div><div id=\\\"homeSectionSeparatorContainer\\\" data-v-24c5b49c></div></div>\", 2);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppCardCarousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppCardCarousel\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [$data.recipesByRate.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AppCardCarousel, {\n    key: 0,\n    type: $data.recent,\n    recipes: this.recipesByRate,\n    visibleRecipes: 8,\n    logged: this.logged,\n    username: this.username\n  }, null, 8 /* PROPS */, [\"type\", \"recipes\", \"logged\", \"username\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), _hoisted_7]), _hoisted_8]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0YzViNDljJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7Ozs7QUFmQTs7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/NTdkNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwiaG9tZU1haW5Db250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiaG9tZU5hbWVTZWFyY2hlckNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiaG9tZUZpbHRlckNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWVTZWN0aW9uVGl0bGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT4gU2VhcmNoZWQgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWVTZWN0aW9uQ2Fycm91c2VsQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxBcHBDYXJkQ2Fyb3VzZWwgOnR5cGU9XCJyZWNlbnRcIiA6cmVjaXBlcz1cInRoaXMucmVjaXBlc0J5UmF0ZVwiIDp2aXNpYmxlUmVjaXBlcz1cIjhcIiA6bG9nZ2VkPVwidGhpcy5sb2dnZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp1c2VybmFtZT1cInRoaXMudXNlcm5hbWVcIiB2LWlmPVwicmVjaXBlc0J5UmF0ZS5sZW5ndGggPiAwXCI+PC9BcHBDYXJkQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25TZXBhcmF0b3JDb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJob21lU2VjdGlvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25UaXRsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPiBNb3N0IFJlY2VudCBSZWNpcGVzIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25DYXJyb3VzZWxDb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25TZXBhcmF0b3JDb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJob21lU2VjdGlvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVNlY3Rpb25UaXRsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPiBNb3N0IExpa2VkIFJlY2lwZXMgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lU2VjdGlvbkNhcnJvdXNlbENvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lU2VjdGlvblNlcGFyYXRvckNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBBcHBDYXJkQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJIb21lUGFnZS52dWVcIixcclxuXHJcbiAgICBjb21wb25lbnRzOiB7QXBwQ2FyZENhcm91c2VsfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbG9nZ2VkOiBCb29sZWFuLFxyXG4gICAgICAgIHVzZXJuYW1lOiBTdHJpbmcsXHJcbiAgICAgICAgZW1haWw6IFN0cmluZyxcclxuICAgICAgICBwYXNzd29yZDogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVjaXBlc0J5RGF0ZTogW10sXHJcbiAgICAgICAgICAgIHJlY2lwZXNCeVJhdGU6IFtdLFxyXG4gICAgICAgICAgICByYXRlOiBcInJhdGVcIixcclxuICAgICAgICAgICAgcmVjZW50OiBcInJlY2VudFwiLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlZGlyZWN0VG9SZWNpcGVQYWdlKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2FkZFJlY2lwZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVjaXBlc0J5UmF0ZSgpIHtcclxuICAgICAgICAgICAgLy8gQXhpb3MgcGFyYSBjb2dlciBlbCB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcIi9cIilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgaXM6XCIsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgb2J0ZW5lciBsYXMgcmVjZXRhczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBeGlvcyBwYXJhIHJlY2liaXIgbGFzIHJlY2V0YXNcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXCJyZWNpcGUvcmF0ZS9cIilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNpcGVzID0gcmVzcG9uc2UuZGF0YS5yZWNpcGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2lwZXNCeVJhdGUgPSByZWNpcGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnJlY2lwZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgb2J0ZW5lciBsYXMgcmVjZXRhczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWNpcGVzQnlSZWNlbnQoKSB7XHJcbiAgICAgICAgICAgIC8vIEF4aW9zIHBhcmEgY29nZXIgZWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXCIvXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGlzOlwiLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQXhpb3MgcGFyYSByZWNpYmlyIGxhcyByZWNldGFzXHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwicmVjaXBlL3JlY2VudC9cIilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNpcGVzID0gcmVzcG9uc2UuZGF0YS5yZWNpcGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2lwZXNCeURhdGUgPSByZWNpcGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnJlY2lwZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgb2J0ZW5lciBsYXMgcmVjZXRhczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSZWNpcGVzQnlSYXRlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRSZWNpcGVzQnlSZWNlbnQoKTtcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b24gaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b24gLnRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgZm9udC1zaXplIDAuM3M7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b246aG92ZXIge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBDYW1iaWFyIGVsIGJvcmRlIHBhcmEgcXVlIHNlYSBtw6FzIHJlY3Rhbmd1bGFyICovXHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b246aG92ZXIgaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgZm9udC1zaXplIDAuM3M7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "67e9991a8a650f43"; }
/******/ }();
/******/ 
/******/ }
);