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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_AppCardCarousel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AppCardCarousel.vue */ \"./src/components/AppCardCarousel.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HomePage.vue\",\n  components: {\n    AppCardCarousel: _components_AppCardCarousel_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: {\n    logged: Boolean,\n    username: String,\n    email: String,\n    password: String\n  },\n  data() {\n    return {\n      recipesByDate: [],\n      recipesByRate: []\n    };\n  },\n  methods: {\n    redirectToRecipePage() {\n      this.$emit('username-success', this.username);\n      this.$router.push('/addRecipe');\n    },\n    getRecipesByRate() {\n      // Axios para coger el template\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/\").then(response => {\n        if (response.status === 200) {\n          const data = response.data;\n          console.log(\"Data is:\", data);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n\n      // Axios para recibir las recetas\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"recipe/rate/\").then(response => {\n        if (response.status === 200) {\n          const recipes = response.data.recipes;\n          this.recipesByRate = recipes;\n          console.log(response.data.recipes);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n    },\n    getRecipesByRecent() {\n      // Axios para coger el template\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/\").then(response => {\n        if (response.status === 200) {\n          const data = response.data;\n          console.log(\"Data is:\", data);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n\n      // Axios para recibir las recetas\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"recipe/recent/\").then(response => {\n        if (response.status === 200) {\n          const recipes = response.data.recipes;\n          this.recipesByDate = recipes;\n          console.log(response.data.recipes);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n    }\n  },\n  created() {\n    this.getRecipesByRate();\n    this.getRecipesByRecent();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL0hvbWVQYWdlLnZ1ZT81N2Q1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVDb250YWluZXJIUFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZUhQXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPiBNb3N0IFJlY2VudCBSZWNpcGVzIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBcHBDYXJkQ2Fyb3VzZWwgOnJlY2lwZXM9XCJ0aGlzLnJlY2lwZXNCeVJhdGVcIiA6dmlzaWJsZVJlY2lwZXM9XCIzXCIgOmxvZ2dlZD1cInRoaXMubG9nZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dXNlcm5hbWU9XCJ0aGlzLnVzZXJuYW1lXCIgdi1pZj1cInJlY2lwZXNCeVJhdGUubGVuZ3RoID4gMFwiPjwvQXBwQ2FyZENhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVySFBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVIUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT4gTW9zdCBMaWtlZCBSZWNpcGVzIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBcHBDYXJkQ2Fyb3VzZWwgOnJlY2lwZXM9XCJ0aGlzLnJlY2lwZXNCeVJhdGVcIiA6dmlzaWJsZVJlY2lwZXM9XCIzXCIgOmxvZ2dlZD1cInRoaXMubG9nZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dXNlcm5hbWU9XCJ0aGlzLnVzZXJuYW1lXCIgdi1pZj1cInJlY2lwZXNCeVJhdGUubGVuZ3RoID4gMFwiPjwvQXBwQ2FyZENhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PiA8IS0tIEFncmVnYW1vcyBlbCBjaWVycmUgZGVsIGRpdiBxdWUgZmFsdGFiYSAtLT5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJ0aGlzLmxvZ2dlZFwiIGNsYXNzPVwiZmxvYXRpbmctYnV0dG9uXCIgQGNsaWNrPVwicmVkaXJlY3RUb1JlY2lwZVBhZ2VcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+VXBsb2FkIG5ldyByZWNpcGU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBBcHBDYXJkQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJIb21lUGFnZS52dWVcIixcclxuXHJcbiAgICBjb21wb25lbnRzOiB7QXBwQ2FyZENhcm91c2VsfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbG9nZ2VkOiBCb29sZWFuLFxyXG4gICAgICAgIHVzZXJuYW1lOiBTdHJpbmcsXHJcbiAgICAgICAgZW1haWw6IFN0cmluZyxcclxuICAgICAgICBwYXNzd29yZDogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVjaXBlc0J5RGF0ZTogW10sXHJcbiAgICAgICAgICAgIHJlY2lwZXNCeVJhdGU6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVkaXJlY3RUb1JlY2lwZVBhZ2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VzZXJuYW1lLXN1Y2Nlc3MnLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9hZGRSZWNpcGUnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlY2lwZXNCeVJhdGUoKSB7XHJcbiAgICAgICAgICAgIC8vIEF4aW9zIHBhcmEgY29nZXIgZWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXCIvXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGlzOlwiLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQXhpb3MgcGFyYSByZWNpYmlyIGxhcyByZWNldGFzXHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwicmVjaXBlL3JhdGUvXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjaXBlcyA9IHJlc3BvbnNlLmRhdGEucmVjaXBlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNpcGVzQnlSYXRlID0gcmVjaXBlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5yZWNpcGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVjaXBlc0J5UmVjZW50KCkge1xyXG4gICAgICAgICAgICAvLyBBeGlvcyBwYXJhIGNvZ2VyIGVsIHRlbXBsYXRlXHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwiL1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBpczpcIiwgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBvYnRlbmVyIGxhcyByZWNldGFzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEF4aW9zIHBhcmEgcmVjaWJpciBsYXMgcmVjZXRhc1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcInJlY2lwZS9yZWNlbnQvXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjaXBlcyA9IHJlc3BvbnNlLmRhdGEucmVjaXBlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNpcGVzQnlEYXRlID0gcmVjaXBlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5yZWNpcGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UmVjaXBlc0J5UmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVjaXBlc0J5UmVjZW50KCk7XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5mbG9hdGluZy1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uIGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGZvbnQtc2l6ZSAwLjNzO1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogQ2FtYmlhciBlbCBib3JkZSBwYXJhIHF1ZSBzZWEgbcOhcyByZWN0YW5ndWxhciAqL1xyXG59XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uOmhvdmVyIGkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlciAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGZvbnQtc2l6ZSAwLjNzO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-24c5b49c\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\"\n};\nconst _hoisted_2 = {\n  class: \"secondaryContainer\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"titleContainerHP\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitleHP\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \" Most Recent Recipes \")])], -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"secondaryContainer\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"titleContainerHP\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitleHP\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \" Most Liked Recipes \")])], -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n  class: \"fas fa-plus\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"text\"\n}, \"Upload new recipe\", -1 /* HOISTED */));\nconst _hoisted_8 = [_hoisted_6, _hoisted_7];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppCardCarousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppCardCarousel\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, $data.recipesByRate.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AppCardCarousel, {\n    key: 0,\n    recipes: this.recipesByRate,\n    visibleRecipes: 3,\n    logged: this.logged,\n    username: this.username\n  }, null, 8 /* PROPS */, [\"recipes\", \"logged\", \"username\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, $data.recipesByRate.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AppCardCarousel, {\n    key: 0,\n    recipes: this.recipesByRate,\n    visibleRecipes: 3,\n    logged: this.logged,\n    username: this.username\n  }, null, 8 /* PROPS */, [\"recipes\", \"logged\", \"username\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Agregamos el cierre del div que faltaba \"), this.logged ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    key: 0,\n    class: \"floating-button\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.redirectToRecipePage && $options.redirectToRecipePage(...args))\n  }, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0YzViNDljJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBOzs7QUFwQkE7O0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9Ib21lUGFnZS52dWU/NTdkNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVySFBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVIUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT4gTW9zdCBSZWNlbnQgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QXBwQ2FyZENhcm91c2VsIDpyZWNpcGVzPVwidGhpcy5yZWNpcGVzQnlSYXRlXCIgOnZpc2libGVSZWNpcGVzPVwiM1wiIDpsb2dnZWQ9XCJ0aGlzLmxvZ2dlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnVzZXJuYW1lPVwidGhpcy51c2VybmFtZVwiIHYtaWY9XCJyZWNpcGVzQnlSYXRlLmxlbmd0aCA+IDBcIj48L0FwcENhcmRDYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUNvbnRhaW5lckhQXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlSFBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+IE1vc3QgTGlrZWQgUmVjaXBlcyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QXBwQ2FyZENhcm91c2VsIDpyZWNpcGVzPVwidGhpcy5yZWNpcGVzQnlSYXRlXCIgOnZpc2libGVSZWNpcGVzPVwiM1wiIDpsb2dnZWQ9XCJ0aGlzLmxvZ2dlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnVzZXJuYW1lPVwidGhpcy51c2VybmFtZVwiIHYtaWY9XCJyZWNpcGVzQnlSYXRlLmxlbmd0aCA+IDBcIj48L0FwcENhcmRDYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj4gPCEtLSBBZ3JlZ2Ftb3MgZWwgY2llcnJlIGRlbCBkaXYgcXVlIGZhbHRhYmEgLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwidGhpcy5sb2dnZWRcIiBjbGFzcz1cImZsb2F0aW5nLWJ1dHRvblwiIEBjbGljaz1cInJlZGlyZWN0VG9SZWNpcGVQYWdlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlVwbG9hZCBuZXcgcmVjaXBlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQXBwQ2FyZENhcm91c2VsIGZyb20gJ0AvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiSG9tZVBhZ2UudnVlXCIsXHJcblxyXG4gICAgY29tcG9uZW50czoge0FwcENhcmRDYXJvdXNlbH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbixcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlY2lwZXNCeURhdGU6IFtdLFxyXG4gICAgICAgICAgICByZWNpcGVzQnlSYXRlOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlZGlyZWN0VG9SZWNpcGVQYWdlKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1c2VybmFtZS1zdWNjZXNzJywgdGhpcy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvYWRkUmVjaXBlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWNpcGVzQnlSYXRlKCkge1xyXG4gICAgICAgICAgICAvLyBBeGlvcyBwYXJhIGNvZ2VyIGVsIHRlbXBsYXRlXHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwiL1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBpczpcIiwgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBvYnRlbmVyIGxhcyByZWNldGFzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEF4aW9zIHBhcmEgcmVjaWJpciBsYXMgcmVjZXRhc1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcInJlY2lwZS9yYXRlL1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2lwZXMgPSByZXNwb25zZS5kYXRhLnJlY2lwZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjaXBlc0J5UmF0ZSA9IHJlY2lwZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucmVjaXBlcylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBvYnRlbmVyIGxhcyByZWNldGFzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlY2lwZXNCeVJlY2VudCgpIHtcclxuICAgICAgICAgICAgLy8gQXhpb3MgcGFyYSBjb2dlciBlbCB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcIi9cIilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgaXM6XCIsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgb2J0ZW5lciBsYXMgcmVjZXRhczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBeGlvcyBwYXJhIHJlY2liaXIgbGFzIHJlY2V0YXNcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXCJyZWNpcGUvcmVjZW50L1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2lwZXMgPSByZXNwb25zZS5kYXRhLnJlY2lwZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjaXBlc0J5RGF0ZSA9IHJlY2lwZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucmVjaXBlcylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBvYnRlbmVyIGxhcyByZWNldGFzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmdldFJlY2lwZXNCeVJhdGUoKTtcclxuICAgICAgICB0aGlzLmdldFJlY2lwZXNCeVJlY2VudCgpO1xyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uZmxvYXRpbmctYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbiAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBmb250LXNpemUgMC4zcztcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlciB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIENhbWJpYXIgZWwgYm9yZGUgcGFyYSBxdWUgc2VhIG3DoXMgcmVjdGFuZ3VsYXIgKi9cclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlciBpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1idXR0b246aG92ZXIgLnRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBmb250LXNpemUgMC4zcztcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=24c5b49c&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e7c0e190975fa579"; }
/******/ }();
/******/ 
/******/ }
);