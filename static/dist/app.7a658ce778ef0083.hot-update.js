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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_lists_Allergens_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/lists/Allergens.json */ \"./src/assets/lists/Allergens.json\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      ingredientsData: _assets_lists_Allergens_json__WEBPACK_IMPORTED_MODULE_1__,\n      letras: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".split(''),\n      letraSeleccionada: null,\n      selectedIngredients: [] // New array to store selected ingredients\n    };\n  },\n\n  methods: {\n    handleButtonClick(ingrediente) {\n      // Toggle the selection state of the clicked ingredient\n      const index = this.selectedIngredients.indexOf(ingrediente);\n      if (index === -1) {\n        // Ingredient not selected, add it to the list\n        this.selectedIngredients.push(ingrediente);\n      } else {\n        // Ingredient selected, remove it from the list\n        this.selectedIngredients.splice(index, 1);\n      }\n    },\n    scrollToSection(letra) {\n      this.letraSeleccionada = letra;\n      const elemento = document.getElementById(letra);\n      if (elemento) {\n        const offset = 120; // Separación del margen superior\n        const posicion = elemento.offsetTop - offset;\n        window.scrollTo({\n          top: posicion,\n          behavior: 'smooth'\n        });\n      }\n    },\n    letraDisponible(letra) {\n      return Object.keys(this.ingredientsData).includes(letra);\n    },\n    submitSelection() {\n      // Handle the submission of selected ingredients\n      alert('Submitted Ingredients: ' + this.selectedIngredients.join(', '));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9BbGxlcmdlbnNGaWx0ZXJQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQWtEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9BbGxlcmdlbnNGaWx0ZXJQYWdlLnZ1ZT80NDA3Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1haW5Db250YWluZXJcIj5cbiAgICA8aDE+QWxsZXJnZW5zIExpc3QgQS1aPC9oMT5cblxuICAgIDwhLS0gQm90b25lcyBkZSBsZXRyYXMgLS0+XG4gICAgPGRpdiBjbGFzcz1cImxldHJhc0J1dHRvbnNcIj5cbiAgICAgIDxhXG4gICAgICAgIHYtZm9yPVwibGV0cmEgaW4gbGV0cmFzXCJcbiAgICAgICAgOmtleT1cImxldHJhXCJcbiAgICAgICAgOmhyZWY9XCJsZXRyYVwiXG4gICAgICAgIEBjbGljay5wcmV2ZW50PVwic2Nyb2xsVG9TZWN0aW9uKGxldHJhKVwiXG4gICAgICAgIDpjbGFzcz1cInsgJ2xldHJhTm9EaXNwb25pYmxlJzogIWxldHJhRGlzcG9uaWJsZShsZXRyYSksICdsZXRyYVNlbGVjY2lvbmFkYSc6IGxldHJhID09PSBsZXRyYVNlbGVjY2lvbmFkYSB9XCJcbiAgICAgID5cbiAgICAgICAge3sgbGV0cmEgfX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cIk9iamVjdC5rZXlzKGluZ3JlZGllbnRzRGF0YSkubGVuZ3RoXCI+XG4gICAgICA8ZGl2IHYtZm9yPVwiKGluZ3JlZGllbnRlcywgbGV0cmEpIGluIGluZ3JlZGllbnRzRGF0YVwiIDprZXk9XCJsZXRyYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiSW5ncmVkaWVudHNTZWN0aW9uXCIgOmlkPVwibGV0cmFcIiA6Y2xhc3M9XCJ7ICdyZXNhbHRhZG8nOiBsZXRyYSA9PT0gbGV0cmFTZWxlY2Npb25hZGEgfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXR1bG9TZWNjaW9uIGNlbnRyYWRvXCI+e3sgbGV0cmEgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudGVzTGlzdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB2LWZvcj1cImluZ3JlZGllbnRlIGluIGluZ3JlZGllbnRlc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJpbmdyZWRpZW50ZVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZUJ1dHRvbkNsaWNrKGluZ3JlZGllbnRlKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JvdG9uSW5ncmVkaWVudGUnOiB0cnVlLCAnc2VsZWNjaW9uYWRvJzogc2VsZWN0ZWRJbmdyZWRpZW50cy5pbmNsdWRlcyhpbmdyZWRpZW50ZSkgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGluZ3JlZGllbnRlIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZ0NvbnRhaW5lclwiIHYtaWY9XCJzZWxlY3RlZEluZ3JlZGllbnRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGgyPlNlbGVjdGVkIEluZ3JlZGllbnRzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLWluZ3JlZGllbnRzLWxpc3RcIj5cbiAgICAgICAgICA8ZGl2IHYtZm9yPVwic2VsZWN0ZWRJbmdyZWRpZW50ZSBpbiBzZWxlY3RlZEluZ3JlZGllbnRzXCIgOmtleT1cInNlbGVjdGVkSW5ncmVkaWVudGVcIj5cbiAgICAgICAgICAgIHt7IHNlbGVjdGVkSW5ncmVkaWVudGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic3VibWl0U2VsZWN0aW9uXCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZWxzZT5cbiAgICAgIDxwPk5vIGhheSBpbmdyZWRpZW50ZXMgZGlzcG9uaWJsZXMuPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgaW5ncmVkaWVudHNEYXRhIGZyb20gXCJAL2Fzc2V0cy9saXN0cy9BbGxlcmdlbnMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZ3JlZGllbnRzRGF0YTogaW5ncmVkaWVudHNEYXRhLFxuICAgICAgbGV0cmFzOiBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCIuc3BsaXQoJycpLFxuICAgICAgbGV0cmFTZWxlY2Npb25hZGE6IG51bGwsXG4gICAgICBzZWxlY3RlZEluZ3JlZGllbnRzOiBbXSwgLy8gTmV3IGFycmF5IHRvIHN0b3JlIHNlbGVjdGVkIGluZ3JlZGllbnRzXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUJ1dHRvbkNsaWNrKGluZ3JlZGllbnRlKSB7XG4gICAgICAvLyBUb2dnbGUgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgY2xpY2tlZCBpbmdyZWRpZW50XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmdyZWRpZW50cy5pbmRleE9mKGluZ3JlZGllbnRlKTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgLy8gSW5ncmVkaWVudCBub3Qgc2VsZWN0ZWQsIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5ncmVkaWVudHMucHVzaChpbmdyZWRpZW50ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbmdyZWRpZW50IHNlbGVjdGVkLCByZW1vdmUgaXQgZnJvbSB0aGUgbGlzdFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5ncmVkaWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbFRvU2VjdGlvbihsZXRyYSkge1xuICAgICAgdGhpcy5sZXRyYVNlbGVjY2lvbmFkYSA9IGxldHJhO1xuICAgICAgY29uc3QgZWxlbWVudG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZXRyYSk7XG4gICAgICBpZiAoZWxlbWVudG8pIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMTIwOyAvLyBTZXBhcmFjacOzbiBkZWwgbWFyZ2VuIHN1cGVyaW9yXG4gICAgICAgIGNvbnN0IHBvc2ljaW9uID0gZWxlbWVudG8ub2Zmc2V0VG9wIC0gb2Zmc2V0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHBvc2ljaW9uLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsZXRyYURpc3BvbmlibGUobGV0cmEpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluZ3JlZGllbnRzRGF0YSkuaW5jbHVkZXMobGV0cmEpO1xuICAgIH0sXG4gICAgc3VibWl0U2VsZWN0aW9uKCkge1xuICAgICAgLy8gSGFuZGxlIHRoZSBzdWJtaXNzaW9uIG9mIHNlbGVjdGVkIGluZ3JlZGllbnRzXG4gICAgICBhbGVydCgnU3VibWl0dGVkIEluZ3JlZGllbnRzOiAnICsgdGhpcy5zZWxlY3RlZEluZ3JlZGllbnRzLmpvaW4oJywgJykpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5ib2R5LCBodG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFpbkNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkM2ZjO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTU0ODA7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1NDgwO1xufVxuXG4ubGV0cmFzQnV0dG9ucyBhLmxldHJhTm9EaXNwb25pYmxlIHtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5sZXRyYXNCdXR0b25zIGEubGV0cmFTZWxlY2Npb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xufVxuXG4uSW5ncmVkaWVudHNTZWN0aW9uIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uSW5ncmVkaWVudHNTZWN0aW9uLnJlc2FsdGFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4M2QzZmM7XG59XG5cbi50aXR1bG9TZWNjaW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAwIGF1dG87IC8qIEHDsWFkaWRvIHBhcmEgY2VudHJhciBob3Jpem9udGFsbWVudGUgKi9cbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaW5ncmVkaWVudGVzTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYm90b25JbmdyZWRpZW50ZSB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgZmxleDogMCAwIGNhbGMoMzMuMzMlIC0gMTBweCk7XG59XG5cbi5ib3RvbkluZ3JlZGllbnRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbn1cblxuLmJvdG9uSW5ncmVkaWVudGUuc2VsZWNjaW9uYWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmxvYXRpbmdDb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICByaWdodDogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=template&id=1b411f78&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=template&id=1b411f78&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-1b411f78\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Allergens List A-Z\", -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"letrasButtons\"\n};\nconst _hoisted_4 = [\"href\", \"onClick\"];\nconst _hoisted_5 = {\n  key: 0\n};\nconst _hoisted_6 = [\"id\"];\nconst _hoisted_7 = {\n  class: \"tituloSeccion centrado\"\n};\nconst _hoisted_8 = {\n  class: \"ingredientesList\"\n};\nconst _hoisted_9 = [\"onClick\"];\nconst _hoisted_10 = {\n  key: 0,\n  class: \"floatingContainer\"\n};\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Selected Ingredients\", -1 /* HOISTED */));\nconst _hoisted_12 = {\n  class: \"selected-ingredients-list\"\n};\nconst _hoisted_13 = {\n  key: 1\n};\nconst _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"No hay ingredientes disponibles.\", -1 /* HOISTED */));\nconst _hoisted_15 = [_hoisted_14];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Botones de letras \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.letras, letra => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"a\", {\n      key: letra,\n      href: letra,\n      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.scrollToSection(letra), [\"prevent\"]),\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n        'letraNoDisponible': !$options.letraDisponible(letra),\n        'letraSeleccionada': letra === $data.letraSeleccionada\n      })\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(letra), 11 /* TEXT, CLASS, PROPS */, _hoisted_4);\n  }), 128 /* KEYED_FRAGMENT */))]), Object.keys($data.ingredientsData).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.ingredientsData, (ingredientes, letra) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: letra\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"IngredientsSection\", {\n        'resaltado': letra === $data.letraSeleccionada\n      }]),\n      id: letra\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(letra), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(ingredientes, ingrediente => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n        key: ingrediente,\n        onClick: $event => $options.handleButtonClick(ingrediente),\n        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n          'botonIngrediente': true,\n          'seleccionado': $data.selectedIngredients.includes(ingrediente)\n        })\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ingrediente), 11 /* TEXT, CLASS, PROPS */, _hoisted_9);\n    }), 128 /* KEYED_FRAGMENT */))])], 10 /* CLASS, PROPS */, _hoisted_6)]);\n  }), 128 /* KEYED_FRAGMENT */)), $data.selectedIngredients.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedIngredients, selectedIngrediente => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: selectedIngrediente\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(selectedIngrediente), 1 /* TEXT */);\n  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.submitSelection && $options.submitSelection(...args))\n  }, \"Submit\")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_13, _hoisted_15))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvQWxsZXJnZW5zRmlsdGVyUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI0MTFmNzgmc2NvcGVkPXRydWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7O0FBR0E7QUFBQTs7Ozs7OztBQWVBO0FBQUE7O0FBQ0E7QUFBQTs7OztBQVlBOztBQUNBOztBQUNBO0FBQUE7Ozs7QUFTQTtBQUFBOztBQTNDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBS0E7QUFHQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9BbGxlcmdlbnNGaWx0ZXJQYWdlLnZ1ZT80NDA3Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1haW5Db250YWluZXJcIj5cbiAgICA8aDE+QWxsZXJnZW5zIExpc3QgQS1aPC9oMT5cblxuICAgIDwhLS0gQm90b25lcyBkZSBsZXRyYXMgLS0+XG4gICAgPGRpdiBjbGFzcz1cImxldHJhc0J1dHRvbnNcIj5cbiAgICAgIDxhXG4gICAgICAgIHYtZm9yPVwibGV0cmEgaW4gbGV0cmFzXCJcbiAgICAgICAgOmtleT1cImxldHJhXCJcbiAgICAgICAgOmhyZWY9XCJsZXRyYVwiXG4gICAgICAgIEBjbGljay5wcmV2ZW50PVwic2Nyb2xsVG9TZWN0aW9uKGxldHJhKVwiXG4gICAgICAgIDpjbGFzcz1cInsgJ2xldHJhTm9EaXNwb25pYmxlJzogIWxldHJhRGlzcG9uaWJsZShsZXRyYSksICdsZXRyYVNlbGVjY2lvbmFkYSc6IGxldHJhID09PSBsZXRyYVNlbGVjY2lvbmFkYSB9XCJcbiAgICAgID5cbiAgICAgICAge3sgbGV0cmEgfX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cIk9iamVjdC5rZXlzKGluZ3JlZGllbnRzRGF0YSkubGVuZ3RoXCI+XG4gICAgICA8ZGl2IHYtZm9yPVwiKGluZ3JlZGllbnRlcywgbGV0cmEpIGluIGluZ3JlZGllbnRzRGF0YVwiIDprZXk9XCJsZXRyYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiSW5ncmVkaWVudHNTZWN0aW9uXCIgOmlkPVwibGV0cmFcIiA6Y2xhc3M9XCJ7ICdyZXNhbHRhZG8nOiBsZXRyYSA9PT0gbGV0cmFTZWxlY2Npb25hZGEgfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXR1bG9TZWNjaW9uIGNlbnRyYWRvXCI+e3sgbGV0cmEgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudGVzTGlzdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB2LWZvcj1cImluZ3JlZGllbnRlIGluIGluZ3JlZGllbnRlc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJpbmdyZWRpZW50ZVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZUJ1dHRvbkNsaWNrKGluZ3JlZGllbnRlKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JvdG9uSW5ncmVkaWVudGUnOiB0cnVlLCAnc2VsZWNjaW9uYWRvJzogc2VsZWN0ZWRJbmdyZWRpZW50cy5pbmNsdWRlcyhpbmdyZWRpZW50ZSkgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGluZ3JlZGllbnRlIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZ0NvbnRhaW5lclwiIHYtaWY9XCJzZWxlY3RlZEluZ3JlZGllbnRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGgyPlNlbGVjdGVkIEluZ3JlZGllbnRzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLWluZ3JlZGllbnRzLWxpc3RcIj5cbiAgICAgICAgICA8ZGl2IHYtZm9yPVwic2VsZWN0ZWRJbmdyZWRpZW50ZSBpbiBzZWxlY3RlZEluZ3JlZGllbnRzXCIgOmtleT1cInNlbGVjdGVkSW5ncmVkaWVudGVcIj5cbiAgICAgICAgICAgIHt7IHNlbGVjdGVkSW5ncmVkaWVudGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic3VibWl0U2VsZWN0aW9uXCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZWxzZT5cbiAgICAgIDxwPk5vIGhheSBpbmdyZWRpZW50ZXMgZGlzcG9uaWJsZXMuPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgaW5ncmVkaWVudHNEYXRhIGZyb20gXCJAL2Fzc2V0cy9saXN0cy9BbGxlcmdlbnMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZ3JlZGllbnRzRGF0YTogaW5ncmVkaWVudHNEYXRhLFxuICAgICAgbGV0cmFzOiBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCIuc3BsaXQoJycpLFxuICAgICAgbGV0cmFTZWxlY2Npb25hZGE6IG51bGwsXG4gICAgICBzZWxlY3RlZEluZ3JlZGllbnRzOiBbXSwgLy8gTmV3IGFycmF5IHRvIHN0b3JlIHNlbGVjdGVkIGluZ3JlZGllbnRzXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUJ1dHRvbkNsaWNrKGluZ3JlZGllbnRlKSB7XG4gICAgICAvLyBUb2dnbGUgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgY2xpY2tlZCBpbmdyZWRpZW50XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmdyZWRpZW50cy5pbmRleE9mKGluZ3JlZGllbnRlKTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgLy8gSW5ncmVkaWVudCBub3Qgc2VsZWN0ZWQsIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5ncmVkaWVudHMucHVzaChpbmdyZWRpZW50ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbmdyZWRpZW50IHNlbGVjdGVkLCByZW1vdmUgaXQgZnJvbSB0aGUgbGlzdFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5ncmVkaWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbFRvU2VjdGlvbihsZXRyYSkge1xuICAgICAgdGhpcy5sZXRyYVNlbGVjY2lvbmFkYSA9IGxldHJhO1xuICAgICAgY29uc3QgZWxlbWVudG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZXRyYSk7XG4gICAgICBpZiAoZWxlbWVudG8pIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMTIwOyAvLyBTZXBhcmFjacOzbiBkZWwgbWFyZ2VuIHN1cGVyaW9yXG4gICAgICAgIGNvbnN0IHBvc2ljaW9uID0gZWxlbWVudG8ub2Zmc2V0VG9wIC0gb2Zmc2V0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHBvc2ljaW9uLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsZXRyYURpc3BvbmlibGUobGV0cmEpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluZ3JlZGllbnRzRGF0YSkuaW5jbHVkZXMobGV0cmEpO1xuICAgIH0sXG4gICAgc3VibWl0U2VsZWN0aW9uKCkge1xuICAgICAgLy8gSGFuZGxlIHRoZSBzdWJtaXNzaW9uIG9mIHNlbGVjdGVkIGluZ3JlZGllbnRzXG4gICAgICBhbGVydCgnU3VibWl0dGVkIEluZ3JlZGllbnRzOiAnICsgdGhpcy5zZWxlY3RlZEluZ3JlZGllbnRzLmpvaW4oJywgJykpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5ib2R5LCBodG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFpbkNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkM2ZjO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTU0ODA7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1NDgwO1xufVxuXG4ubGV0cmFzQnV0dG9ucyBhLmxldHJhTm9EaXNwb25pYmxlIHtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5sZXRyYXNCdXR0b25zIGEubGV0cmFTZWxlY2Npb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xufVxuXG4uSW5ncmVkaWVudHNTZWN0aW9uIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uSW5ncmVkaWVudHNTZWN0aW9uLnJlc2FsdGFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4M2QzZmM7XG59XG5cbi50aXR1bG9TZWNjaW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAwIGF1dG87IC8qIEHDsWFkaWRvIHBhcmEgY2VudHJhciBob3Jpem9udGFsbWVudGUgKi9cbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaW5ncmVkaWVudGVzTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYm90b25JbmdyZWRpZW50ZSB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgZmxleDogMCAwIGNhbGMoMzMuMzMlIC0gMTBweCk7XG59XG5cbi5ib3RvbkluZ3JlZGllbnRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbn1cblxuLmJvdG9uSW5ncmVkaWVudGUuc2VsZWNjaW9uYWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmxvYXRpbmdDb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICByaWdodDogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=template&id=1b411f78&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c2ff939b614781f5"; }
/******/ }();
/******/ 
/******/ }
);