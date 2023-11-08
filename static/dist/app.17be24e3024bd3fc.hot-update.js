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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    recipe: Object,\n    username: String\n  },\n  data() {\n    return {\n      showPopup: false,\n      rating: 0,\n      // Valoración inicial\n      NumRatings: this.recipe.rating_amount,\n      CurrRating: this.recipe.rating_average\n    };\n  },\n  methods: {\n    togglePopup() {\n      this.showPopup = !this.showPopup;\n    },\n    parseText(listString) {\n      const sinCorchetes = listString.replace(/\\[|\\]/g, '');\n      const sinComillasSimples = sinCorchetes.replace(/'/g, '');\n      const arrayIngredientes = sinComillasSimples.split(',');\n      return arrayIngredientes;\n    },\n    setRating(rating) {\n      this.rating = rating;\n      this.addRating();\n    },\n    getRecipesByRecent() {\n      // Axios para recibir las recetas\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"recipes/ratings/\").then(response => {\n        if (response.status === 200) {\n          const ratings = response.data.recipes;\n          this.NumRatings = ratings.rating_amount;\n          this.recipe.CurrRating = ratings.rating_average;\n          console.log(response.data.recipes);\n        }\n      }).catch(error => {\n        console.error(\"Error al obtener las recetas:\", error);\n      });\n    },\n    addRating() {\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"recipes/ratings/\", {\n        user_id: this.username,\n        recipe_id: this.recipe.id,\n        rating: this.rating\n      }).then(response => {\n        if (response.status === 200) {\n          console.log(\"Rating added\");\n          alert(\"Rating added.\");\n        }\n      }).catch(error => {\n        alert(error.response);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRSZWNpcGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7O0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkUmVjaXBlLnZ1ZT84Nzc5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkXCI+XG4gICAgPGRpdiBAY2xpY2s9XCJ0b2dnbGVQb3B1cFwiIGNsYXNzPVwicmVjaXBlLXRpdGxlXCI+XG4gICAgICA8aDI+e3sgdGhpcy5yZWNpcGUudGl0bGUgfX08L2gyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cInNob3dQb3B1cFwiIGNsYXNzPVwicG9wdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGxhYmxlLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgyPnt7IFwiVGl0bGU6IFwiICsgdGhpcy5yZWNpcGUudGl0bGUgfX08L2gyPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5DcmVhdGlvbiBEYXRlOjwvc3Ryb25nPiB7eyB0aGlzLnJlY2lwZS5jcmVhdGlvbl9kYXRlIH19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+Q3VycmVudCBSYXRpbmc8L2gzPlxuICAgICAgICAgICAgPHA+e3sgdGhpcy5DdXJyUmF0aW5nICsgXCIgZnJvbSBcIiArIHRoaXMuTnVtUmF0aW5ncyArIFwiIHJhdGluZ3NcIiB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZy1zdGFyc1wiPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHYtZm9yPVwic3RhciBpbiBbMSwgMiwgMywgNCwgNV1cIlxuICAgICAgICAgICAgICAgIDprZXk9XCJzdGFyXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZXRSYXRpbmcoc3RhcilcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2ZpbGxlZCc6IHN0YXIgPD0gcmF0aW5nIH1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDimIVcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz5JbmdyZWRpZW50czwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihzdGVwLCBpbmRleCkgaW4gdGhpcy5wYXJzZVRleHQodGhpcy5yZWNpcGUuaW5ncmVkaWVudHMpXCIgOmtleT1cImluZGV4XCI+e3sgc3RlcCB9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+SW5zdHJ1Y3Rpb25zPC9oMz5cbiAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKHN0ZXAsIGluZGV4KSBpbiB0aGlzLnJlY2lwZS5pbnN0cnVjdGlvbnMuc3BsaXQoJ1xcbicpXCIgOmtleT1cImluZGV4XCI+e3sgc3RlcCB9fTwvbGk+XG4gICAgICAgICAgICA8L29sPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+QWxsZXJnZW5zPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKHN0ZXAsIGluZGV4KSBpbiB0aGlzLnBhcnNlVGV4dCh0aGlzLnJlY2lwZS5hbGxlcmdlbnMpXCIgOmtleT1cImluZGV4XCI+e3sgc3RlcCB9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+VHlwZTwvaDM+IHt7IHRoaXMucmVjaXBlLnJlY2lwZV90eXBlIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz5QcmVwYXJhdGlvbiB0aW1lPC9oMz4ge3sgdGhpcy5yZWNpcGUucHJlcGFyYXRpb25fdGltZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+U2VydmluZ3M8L2gzPiB7eyB0aGlzLnJlY2lwZS5zZXJ2aW5ncyB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVQb3B1cFwiPkNsb3NlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICByZWNpcGU6IE9iamVjdCxcbiAgICB1c2VybmFtZTogU3RyaW5nLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgcmF0aW5nOiAwLCAvLyBWYWxvcmFjacOzbiBpbmljaWFsXG4gICAgICBOdW1SYXRpbmdzOiB0aGlzLnJlY2lwZS5yYXRpbmdfYW1vdW50LFxuICAgICAgQ3VyclJhdGluZzogdGhpcy5yZWNpcGUucmF0aW5nX2F2ZXJhZ2UsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZVBvcHVwKCkge1xuICAgICAgdGhpcy5zaG93UG9wdXAgPSAhdGhpcy5zaG93UG9wdXA7XG4gICAgfSxcbiAgICBwYXJzZVRleHQobGlzdFN0cmluZykge1xuICAgICAgY29uc3Qgc2luQ29yY2hldGVzID0gbGlzdFN0cmluZy5yZXBsYWNlKC9cXFt8XFxdL2csICcnKTtcbiAgICAgIGNvbnN0IHNpbkNvbWlsbGFzU2ltcGxlcyA9IHNpbkNvcmNoZXRlcy5yZXBsYWNlKC8nL2csICcnKTtcbiAgICAgIGNvbnN0IGFycmF5SW5ncmVkaWVudGVzID0gc2luQ29taWxsYXNTaW1wbGVzLnNwbGl0KCcsJyk7XG4gICAgICByZXR1cm4gYXJyYXlJbmdyZWRpZW50ZXM7XG4gICAgfSxcbiAgICBzZXRSYXRpbmcocmF0aW5nKSB7XG4gICAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcbiAgICAgIHRoaXMuYWRkUmF0aW5nKCk7XG4gICAgfSxcbiAgICBnZXRSZWNpcGVzQnlSZWNlbnQoKSB7XG4gICAgICAvLyBBeGlvcyBwYXJhIHJlY2liaXIgbGFzIHJlY2V0YXNcbiAgICAgIGF4aW9zXG4gICAgICAgICAgLmdldChcInJlY2lwZXMvcmF0aW5ncy9cIilcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByYXRpbmdzID0gcmVzcG9uc2UuZGF0YS5yZWNpcGVzO1xuICAgICAgICAgICAgICAgICAgdGhpcy5OdW1SYXRpbmdzID0gcmF0aW5ncy5yYXRpbmdfYW1vdW50O1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZWNpcGUuQ3VyclJhdGluZyA9IHJhdGluZ3MucmF0aW5nX2F2ZXJhZ2U7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnJlY2lwZXMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgbGFzIHJlY2V0YXM6XCIsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgICAgYWRkUmF0aW5nKCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCJyZWNpcGVzL3JhdGluZ3MvXCIsIHtcbiAgICAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgIHJlY2lwZV9pZDogdGhpcy5yZWNpcGUuaWQsXG4gICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZ1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmF0aW5nIGFkZGVkXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJSYXRpbmcgYWRkZWQuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnJlY2lwZS1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWNpcGUtdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTUxZDFkZTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjVlNWE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5yYXRpbmctc3RhcnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJhdGluZy1zdGFycyBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNjY2M7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5yYXRpbmctc3RhcnMgc3Bhbi5maWxsZWQge1xuICBjb2xvcjogI2ZmY2MwMDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=template&id=b50fc382&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=template&id=b50fc382&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-b50fc382\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"recipe-card\"\n};\nconst _hoisted_2 = {\n  key: 0,\n  class: \"popup\"\n};\nconst _hoisted_3 = {\n  class: \"popup-content\"\n};\nconst _hoisted_4 = {\n  class: \"scrollable-content\"\n};\nconst _hoisted_5 = {\n  class: \"section\"\n};\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Creation Date:\", -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"section\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Current Rating\", -1 /* HOISTED */));\nconst _hoisted_9 = {\n  class: \"section\"\n};\nconst _hoisted_10 = {\n  class: \"rating-stars\"\n};\nconst _hoisted_11 = [\"onClick\"];\nconst _hoisted_12 = {\n  class: \"section\"\n};\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Ingredients\", -1 /* HOISTED */));\nconst _hoisted_14 = {\n  class: \"section\"\n};\nconst _hoisted_15 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Instructions\", -1 /* HOISTED */));\nconst _hoisted_16 = {\n  class: \"section\"\n};\nconst _hoisted_17 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Allergens\", -1 /* HOISTED */));\nconst _hoisted_18 = {\n  class: \"section\"\n};\nconst _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Type\", -1 /* HOISTED */));\nconst _hoisted_20 = {\n  class: \"section\"\n};\nconst _hoisted_21 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Preparation time\", -1 /* HOISTED */));\nconst _hoisted_22 = {\n  class: \"section\"\n};\nconst _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Servings\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.togglePopup && $options.togglePopup(...args)),\n    class: \"recipe-title\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.recipe.title), 1 /* TEXT */)]), $data.showPopup ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(\"Title: \" + this.recipe.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.recipe.creation_date), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.CurrRating + \" from \" + this.NumRatings + \" ratings\"), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)([1, 2, 3, 4, 5], star => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n      key: star,\n      onClick: $event => $options.setRating(star),\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n        'filled': star <= $data.rating\n      })\n    }, \" ★ \", 10 /* CLASS, PROPS */, _hoisted_11);\n  }), 64 /* STABLE_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.parseText(this.recipe.ingredients), (step, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: index\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(step), 1 /* TEXT */);\n  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ol\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.recipe.instructions.split('\\n'), (step, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: index\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(step), 1 /* TEXT */);\n  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.parseText(this.recipe.allergens), (step, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: index\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(step), 1 /* TEXT */);\n  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.recipe.recipe_type), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.recipe.preparation_time), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.recipe.servings), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.togglePopup && $options.togglePopup(...args))\n  }, \"Close\")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkUmVjaXBlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNTBmYzM4MiZzY29wZWQ9dHJ1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7OztBQUlBOzs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQUE7QUFDQTs7QUFHQTtBQUFBOztBQUNBO0FBQUE7OztBQVdBO0FBQUE7QUFDQTs7QUFLQTtBQUFBO0FBQ0E7O0FBS0E7QUFBQTtBQUNBOztBQUtBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBOzs7QUFwREE7QUFDQTtBQUFBO0FBQ0E7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBVUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwQ2FyZFJlY2lwZS52dWU/ODc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyZWNpcGUtY2FyZFwiPlxuICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlUG9wdXBcIiBjbGFzcz1cInJlY2lwZS10aXRsZVwiPlxuICAgICAgPGgyPnt7IHRoaXMucmVjaXBlLnRpdGxlIH19PC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJzaG93UG9wdXBcIiBjbGFzcz1cInBvcHVwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsYWJsZS1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMj57eyBcIlRpdGxlOiBcIiArIHRoaXMucmVjaXBlLnRpdGxlIH19PC9oMj5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+Q3JlYXRpb24gRGF0ZTo8L3N0cm9uZz4ge3sgdGhpcy5yZWNpcGUuY3JlYXRpb25fZGF0ZSB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPkN1cnJlbnQgUmF0aW5nPC9oMz5cbiAgICAgICAgICAgIDxwPnt7IHRoaXMuQ3VyclJhdGluZyArIFwiIGZyb20gXCIgKyB0aGlzLk51bVJhdGluZ3MgKyBcIiByYXRpbmdzXCIgfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmctc3RhcnNcIj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICB2LWZvcj1cInN0YXIgaW4gWzEsIDIsIDMsIDQsIDVdXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwic3RhclwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2V0UmF0aW5nKHN0YXIpXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdmaWxsZWQnOiBzdGFyIDw9IHJhdGluZyB9XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4piFXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+SW5ncmVkaWVudHM8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoc3RlcCwgaW5kZXgpIGluIHRoaXMucGFyc2VUZXh0KHRoaXMucmVjaXBlLmluZ3JlZGllbnRzKVwiIDprZXk9XCJpbmRleFwiPnt7IHN0ZXAgfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPkluc3RydWN0aW9uczwvaDM+XG4gICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihzdGVwLCBpbmRleCkgaW4gdGhpcy5yZWNpcGUuaW5zdHJ1Y3Rpb25zLnNwbGl0KCdcXG4nKVwiIDprZXk9XCJpbmRleFwiPnt7IHN0ZXAgfX08L2xpPlxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPkFsbGVyZ2VuczwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihzdGVwLCBpbmRleCkgaW4gdGhpcy5wYXJzZVRleHQodGhpcy5yZWNpcGUuYWxsZXJnZW5zKVwiIDprZXk9XCJpbmRleFwiPnt7IHN0ZXAgfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPlR5cGU8L2gzPiB7eyB0aGlzLnJlY2lwZS5yZWNpcGVfdHlwZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+UHJlcGFyYXRpb24gdGltZTwvaDM+IHt7IHRoaXMucmVjaXBlLnByZXBhcmF0aW9uX3RpbWUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPlNlcnZpbmdzPC9oMz4ge3sgdGhpcy5yZWNpcGUuc2VydmluZ3MgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlUG9wdXBcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcmVjaXBlOiBPYmplY3QsXG4gICAgdXNlcm5hbWU6IFN0cmluZyxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgIHJhdGluZzogMCwgLy8gVmFsb3JhY2nDs24gaW5pY2lhbFxuICAgICAgTnVtUmF0aW5nczogdGhpcy5yZWNpcGUucmF0aW5nX2Ftb3VudCxcbiAgICAgIEN1cnJSYXRpbmc6IHRoaXMucmVjaXBlLnJhdGluZ19hdmVyYWdlLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVQb3B1cCgpIHtcbiAgICAgIHRoaXMuc2hvd1BvcHVwID0gIXRoaXMuc2hvd1BvcHVwO1xuICAgIH0sXG4gICAgcGFyc2VUZXh0KGxpc3RTdHJpbmcpIHtcbiAgICAgIGNvbnN0IHNpbkNvcmNoZXRlcyA9IGxpc3RTdHJpbmcucmVwbGFjZSgvXFxbfFxcXS9nLCAnJyk7XG4gICAgICBjb25zdCBzaW5Db21pbGxhc1NpbXBsZXMgPSBzaW5Db3JjaGV0ZXMucmVwbGFjZSgvJy9nLCAnJyk7XG4gICAgICBjb25zdCBhcnJheUluZ3JlZGllbnRlcyA9IHNpbkNvbWlsbGFzU2ltcGxlcy5zcGxpdCgnLCcpO1xuICAgICAgcmV0dXJuIGFycmF5SW5ncmVkaWVudGVzO1xuICAgIH0sXG4gICAgc2V0UmF0aW5nKHJhdGluZykge1xuICAgICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XG4gICAgICB0aGlzLmFkZFJhdGluZygpO1xuICAgIH0sXG4gICAgZ2V0UmVjaXBlc0J5UmVjZW50KCkge1xuICAgICAgLy8gQXhpb3MgcGFyYSByZWNpYmlyIGxhcyByZWNldGFzXG4gICAgICBheGlvc1xuICAgICAgICAgIC5nZXQoXCJyZWNpcGVzL3JhdGluZ3MvXCIpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmF0aW5ncyA9IHJlc3BvbnNlLmRhdGEucmVjaXBlcztcbiAgICAgICAgICAgICAgICAgIHRoaXMuTnVtUmF0aW5ncyA9IHJhdGluZ3MucmF0aW5nX2Ftb3VudDtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVjaXBlLkN1cnJSYXRpbmcgPSByYXRpbmdzLnJhdGluZ19hdmVyYWdlO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5yZWNpcGVzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBvYnRlbmVyIGxhcyByZWNldGFzOlwiLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sICAgIGFkZFJhdGluZygpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwicmVjaXBlcy9yYXRpbmdzL1wiLCB7XG4gICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICByZWNpcGVfaWQ6IHRoaXMucmVjaXBlLmlkLFxuICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmdcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJhdGluZyBhZGRlZFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiUmF0aW5nIGFkZGVkLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5yZWNpcGUtY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVjaXBlLXRpdGxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1MWQxZGU3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI1ZTVhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucmF0aW5nLXN0YXJzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5yYXRpbmctc3RhcnMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjY2NjO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucmF0aW5nLXN0YXJzIHNwYW4uZmlsbGVkIHtcbiAgY29sb3I6ICNmZmNjMDA7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=template&id=b50fc382&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6500daf7a4ac00d3"; }
/******/ }();
/******/ 
/******/ }
);