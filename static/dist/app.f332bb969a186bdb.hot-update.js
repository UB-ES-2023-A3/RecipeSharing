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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_lists_Allergens_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/lists/Allergens.json */ \"./src/assets/lists/Allergens.json\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      ingredientsData: _assets_lists_Allergens_json__WEBPACK_IMPORTED_MODULE_1__,\n      letras: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".split(''),\n      letraSeleccionada: null,\n      selectedIngredients: [] // New array to store selected ingredients\n    };\n  },\n\n  methods: {\n    handleButtonClick(ingrediente) {\n      // Toggle the selection state of the clicked ingredient\n      const index = this.selectedIngredients.indexOf(ingrediente);\n      if (index === -1) {\n        // Ingredient not selected, add it to the list\n        this.selectedIngredients.push(ingrediente);\n      } else {\n        // Ingredient selected, remove it from the list\n        this.selectedIngredients.splice(index, 1);\n      }\n    },\n    scrollToSection(letra) {\n      this.letraSeleccionada = letra;\n      const elemento = document.getElementById(letra);\n      if (elemento) {\n        const offset = 120; // Separación del margen superior\n        const posicion = elemento.offsetTop - offset;\n        window.scrollTo({\n          top: posicion,\n          behavior: 'smooth'\n        });\n      }\n    },\n    letraDisponible(letra) {\n      return Object.keys(this.ingredientsData).includes(letra);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9BbGxlcmdlbnNGaWx0ZXJQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQXlDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvQWxsZXJnZW5zRmlsdGVyUGFnZS52dWU/NDQwNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtYWluQ29udGFpbmVyXCI+XG4gICAgPGgxPkFsbGVyZ2VucyBMaXN0IEEtWjwvaDE+XG5cbiAgICA8IS0tIEJvdG9uZXMgZGUgbGV0cmFzIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJsZXRyYXNCdXR0b25zXCI+XG4gICAgICA8YVxuICAgICAgICB2LWZvcj1cImxldHJhIGluIGxldHJhc1wiXG4gICAgICAgIDprZXk9XCJsZXRyYVwiXG4gICAgICAgIDpocmVmPVwibGV0cmFcIlxuICAgICAgICBAY2xpY2sucHJldmVudD1cInNjcm9sbFRvU2VjdGlvbihsZXRyYSlcIlxuICAgICAgICA6Y2xhc3M9XCJ7ICdsZXRyYU5vRGlzcG9uaWJsZSc6ICFsZXRyYURpc3BvbmlibGUobGV0cmEpLCAnbGV0cmFTZWxlY2Npb25hZGEnOiBsZXRyYSA9PT0gbGV0cmFTZWxlY2Npb25hZGEgfVwiXG4gICAgICA+XG4gICAgICAgIHt7IGxldHJhIH19XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHYtaWY9XCJPYmplY3Qua2V5cyhpbmdyZWRpZW50c0RhdGEpLmxlbmd0aFwiPlxuICAgICAgPGRpdiB2LWZvcj1cIihpbmdyZWRpZW50ZXMsIGxldHJhKSBpbiBpbmdyZWRpZW50c0RhdGFcIiA6a2V5PVwibGV0cmFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIkluZ3JlZGllbnRzU2VjdGlvblwiIDppZD1cImxldHJhXCIgOmNsYXNzPVwieyAncmVzYWx0YWRvJzogbGV0cmEgPT09IGxldHJhU2VsZWNjaW9uYWRhIH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0dWxvU2VjY2lvbiBjZW50cmFkb1wiPnt7IGxldHJhIH19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRlc0xpc3RcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdi1mb3I9XCJpbmdyZWRpZW50ZSBpbiBpbmdyZWRpZW50ZXNcIlxuICAgICAgICAgICAgICA6a2V5PVwiaW5ncmVkaWVudGVcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJoYW5kbGVCdXR0b25DbGljayhpbmdyZWRpZW50ZSlcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdib3RvbkluZ3JlZGllbnRlJzogdHJ1ZSwgJ3NlbGVjY2lvbmFkbyc6IHNlbGVjdGVkSW5ncmVkaWVudHMuaW5jbHVkZXMoaW5ncmVkaWVudGUpIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBpbmdyZWRpZW50ZSB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWVsc2U+XG4gICAgICA8cD5ObyBoYXkgaW5ncmVkaWVudGVzIGRpc3BvbmlibGVzLjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGluZ3JlZGllbnRzRGF0YSBmcm9tIFwiQC9hc3NldHMvbGlzdHMvQWxsZXJnZW5zLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbmdyZWRpZW50c0RhdGE6IGluZ3JlZGllbnRzRGF0YSxcbiAgICAgIGxldHJhczogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiLnNwbGl0KCcnKSxcbiAgICAgIGxldHJhU2VsZWNjaW9uYWRhOiBudWxsLFxuICAgICAgc2VsZWN0ZWRJbmdyZWRpZW50czogW10sIC8vIE5ldyBhcnJheSB0byBzdG9yZSBzZWxlY3RlZCBpbmdyZWRpZW50c1xuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVCdXR0b25DbGljayhpbmdyZWRpZW50ZSkge1xuICAgICAgLy8gVG9nZ2xlIHRoZSBzZWxlY3Rpb24gc3RhdGUgb2YgdGhlIGNsaWNrZWQgaW5ncmVkaWVudFxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkSW5ncmVkaWVudHMuaW5kZXhPZihpbmdyZWRpZW50ZSk7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIC8vIEluZ3JlZGllbnQgbm90IHNlbGVjdGVkLCBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZ3JlZGllbnRzLnB1c2goaW5ncmVkaWVudGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSW5ncmVkaWVudCBzZWxlY3RlZCwgcmVtb3ZlIGl0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZ3JlZGllbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzY3JvbGxUb1NlY3Rpb24obGV0cmEpIHtcbiAgICAgIHRoaXMubGV0cmFTZWxlY2Npb25hZGEgPSBsZXRyYTtcbiAgICAgIGNvbnN0IGVsZW1lbnRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGV0cmEpO1xuICAgICAgaWYgKGVsZW1lbnRvKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDEyMDsgLy8gU2VwYXJhY2nDs24gZGVsIG1hcmdlbiBzdXBlcmlvclxuICAgICAgICBjb25zdCBwb3NpY2lvbiA9IGVsZW1lbnRvLm9mZnNldFRvcCAtIG9mZnNldDtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBwb3NpY2lvbiwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGV0cmFEaXNwb25pYmxlKGxldHJhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pbmdyZWRpZW50c0RhdGEpLmluY2x1ZGVzKGxldHJhKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuYm9keSwgaHRtbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1haW5Db250YWluZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sZXRyYXNCdXR0b25zIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5sZXRyYXNCdXR0b25zIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1NDgwO1xufVxuXG4ubGV0cmFzQnV0dG9ucyBhLmxldHJhTm9EaXNwb25pYmxlIHtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5sZXRyYXNCdXR0b25zIGEubGV0cmFTZWxlY2Npb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xufVxuXG4uSW5ncmVkaWVudHNTZWN0aW9uIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uSW5ncmVkaWVudHNTZWN0aW9uLnJlc2FsdGFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4M2QzZmM7XG59XG5cbi50aXR1bG9TZWNjaW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAwIGF1dG87IC8qIEHDsWFkaWRvIHBhcmEgY2VudHJhciBob3Jpem9udGFsbWVudGUgKi9cbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaW5ncmVkaWVudGVzTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYm90b25JbmdyZWRpZW50ZSB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgZmxleDogMCAwIGNhbGMoMzMuMzMlIC0gMTBweCk7XG59XG5cbi5ib3RvbkluZ3JlZGllbnRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcbn1cblxuLmJvdG9uSW5ncmVkaWVudGUuc2VsZWNjaW9uYWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcbiAgY29sb3I6IHdoaXRlO1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=template&id=1b411f78&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=template&id=1b411f78&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-1b411f78\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Allergens List A-Z\", -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"letrasButtons\"\n};\nconst _hoisted_4 = [\"href\", \"onClick\"];\nconst _hoisted_5 = {\n  key: 0\n};\nconst _hoisted_6 = [\"id\"];\nconst _hoisted_7 = {\n  class: \"tituloSeccion centrado\"\n};\nconst _hoisted_8 = {\n  class: \"ingredientesList\"\n};\nconst _hoisted_9 = [\"onClick\"];\nconst _hoisted_10 = {\n  key: 1\n};\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"No hay ingredientes disponibles.\", -1 /* HOISTED */));\nconst _hoisted_12 = [_hoisted_11];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Botones de letras \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.letras, letra => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"a\", {\n      key: letra,\n      href: letra,\n      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.scrollToSection(letra), [\"prevent\"]),\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n        'letraNoDisponible': !$options.letraDisponible(letra),\n        'letraSeleccionada': letra === $data.letraSeleccionada\n      })\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(letra), 11 /* TEXT, CLASS, PROPS */, _hoisted_4);\n  }), 128 /* KEYED_FRAGMENT */))]), Object.keys($data.ingredientsData).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.ingredientsData, (ingredientes, letra) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: letra\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"IngredientsSection\", {\n        'resaltado': letra === $data.letraSeleccionada\n      }]),\n      id: letra\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(letra), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(ingredientes, ingrediente => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n        key: ingrediente,\n        onClick: $event => $options.handleButtonClick(ingrediente),\n        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n          'botonIngrediente': true,\n          'seleccionado': $data.selectedIngredients.includes(ingrediente)\n        })\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ingrediente), 11 /* TEXT, CLASS, PROPS */, _hoisted_9);\n    }), 128 /* KEYED_FRAGMENT */))])], 10 /* CLASS, PROPS */, _hoisted_6)]);\n  }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_10, _hoisted_12))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvQWxsZXJnZW5zRmlsdGVyUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI0MTFmNzgmc2NvcGVkPXRydWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7O0FBR0E7QUFBQTs7Ozs7OztBQWVBO0FBQUE7O0FBQ0E7QUFBQTs7Ozs7QUFjQTtBQUFBOztBQWxDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9BbGxlcmdlbnNGaWx0ZXJQYWdlLnZ1ZT80NDA3Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1haW5Db250YWluZXJcIj5cbiAgICA8aDE+QWxsZXJnZW5zIExpc3QgQS1aPC9oMT5cblxuICAgIDwhLS0gQm90b25lcyBkZSBsZXRyYXMgLS0+XG4gICAgPGRpdiBjbGFzcz1cImxldHJhc0J1dHRvbnNcIj5cbiAgICAgIDxhXG4gICAgICAgIHYtZm9yPVwibGV0cmEgaW4gbGV0cmFzXCJcbiAgICAgICAgOmtleT1cImxldHJhXCJcbiAgICAgICAgOmhyZWY9XCJsZXRyYVwiXG4gICAgICAgIEBjbGljay5wcmV2ZW50PVwic2Nyb2xsVG9TZWN0aW9uKGxldHJhKVwiXG4gICAgICAgIDpjbGFzcz1cInsgJ2xldHJhTm9EaXNwb25pYmxlJzogIWxldHJhRGlzcG9uaWJsZShsZXRyYSksICdsZXRyYVNlbGVjY2lvbmFkYSc6IGxldHJhID09PSBsZXRyYVNlbGVjY2lvbmFkYSB9XCJcbiAgICAgID5cbiAgICAgICAge3sgbGV0cmEgfX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cIk9iamVjdC5rZXlzKGluZ3JlZGllbnRzRGF0YSkubGVuZ3RoXCI+XG4gICAgICA8ZGl2IHYtZm9yPVwiKGluZ3JlZGllbnRlcywgbGV0cmEpIGluIGluZ3JlZGllbnRzRGF0YVwiIDprZXk9XCJsZXRyYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiSW5ncmVkaWVudHNTZWN0aW9uXCIgOmlkPVwibGV0cmFcIiA6Y2xhc3M9XCJ7ICdyZXNhbHRhZG8nOiBsZXRyYSA9PT0gbGV0cmFTZWxlY2Npb25hZGEgfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXR1bG9TZWNjaW9uIGNlbnRyYWRvXCI+e3sgbGV0cmEgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudGVzTGlzdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB2LWZvcj1cImluZ3JlZGllbnRlIGluIGluZ3JlZGllbnRlc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJpbmdyZWRpZW50ZVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZUJ1dHRvbkNsaWNrKGluZ3JlZGllbnRlKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JvdG9uSW5ncmVkaWVudGUnOiB0cnVlLCAnc2VsZWNjaW9uYWRvJzogc2VsZWN0ZWRJbmdyZWRpZW50cy5pbmNsdWRlcyhpbmdyZWRpZW50ZSkgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGluZ3JlZGllbnRlIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZWxzZT5cbiAgICAgIDxwPk5vIGhheSBpbmdyZWRpZW50ZXMgZGlzcG9uaWJsZXMuPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgaW5ncmVkaWVudHNEYXRhIGZyb20gXCJAL2Fzc2V0cy9saXN0cy9BbGxlcmdlbnMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZ3JlZGllbnRzRGF0YTogaW5ncmVkaWVudHNEYXRhLFxuICAgICAgbGV0cmFzOiBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCIuc3BsaXQoJycpLFxuICAgICAgbGV0cmFTZWxlY2Npb25hZGE6IG51bGwsXG4gICAgICBzZWxlY3RlZEluZ3JlZGllbnRzOiBbXSwgLy8gTmV3IGFycmF5IHRvIHN0b3JlIHNlbGVjdGVkIGluZ3JlZGllbnRzXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUJ1dHRvbkNsaWNrKGluZ3JlZGllbnRlKSB7XG4gICAgICAvLyBUb2dnbGUgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgY2xpY2tlZCBpbmdyZWRpZW50XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmdyZWRpZW50cy5pbmRleE9mKGluZ3JlZGllbnRlKTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgLy8gSW5ncmVkaWVudCBub3Qgc2VsZWN0ZWQsIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5ncmVkaWVudHMucHVzaChpbmdyZWRpZW50ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbmdyZWRpZW50IHNlbGVjdGVkLCByZW1vdmUgaXQgZnJvbSB0aGUgbGlzdFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5ncmVkaWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbFRvU2VjdGlvbihsZXRyYSkge1xuICAgICAgdGhpcy5sZXRyYVNlbGVjY2lvbmFkYSA9IGxldHJhO1xuICAgICAgY29uc3QgZWxlbWVudG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZXRyYSk7XG4gICAgICBpZiAoZWxlbWVudG8pIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMTIwOyAvLyBTZXBhcmFjacOzbiBkZWwgbWFyZ2VuIHN1cGVyaW9yXG4gICAgICAgIGNvbnN0IHBvc2ljaW9uID0gZWxlbWVudG8ub2Zmc2V0VG9wIC0gb2Zmc2V0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHBvc2ljaW9uLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsZXRyYURpc3BvbmlibGUobGV0cmEpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluZ3JlZGllbnRzRGF0YSkuaW5jbHVkZXMobGV0cmEpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5ib2R5LCBodG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFpbkNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkM2ZjO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTU0ODA7XG59XG5cbi5sZXRyYXNCdXR0b25zIGEubGV0cmFOb0Rpc3BvbmlibGUge1xuICBjb2xvcjogIzY2NjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYS5sZXRyYVNlbGVjY2lvbmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XG59XG5cbi5JbmdyZWRpZW50c1NlY3Rpb24ge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5JbmdyZWRpZW50c1NlY3Rpb24ucmVzYWx0YWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzgzZDNmYztcbn1cblxuLnRpdHVsb1NlY2Npb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkM2ZjO1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW46IDAgYXV0bzsgLyogQcOxYWRpZG8gcGFyYSBjZW50cmFyIGhvcml6b250YWxtZW50ZSAqL1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbmdyZWRpZW50ZXNMaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5ib3RvbkluZ3JlZGllbnRlIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBmbGV4OiAwIDAgY2FsYygzMy4zMyUgLSAxMHB4KTtcbn1cblxuLmJvdG9uSW5ncmVkaWVudGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkM2ZjO1xufVxuXG4uYm90b25JbmdyZWRpZW50ZS5zZWxlY2Npb25hZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xuICBjb2xvcjogd2hpdGU7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=template&id=1b411f78&scoped=true\n");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=style&index=0&id=1b411f78&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=style&index=0&id=1b411f78&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody[data-v-1b411f78], html[data-v-1b411f78] {\\n  margin: 0;\\n  padding: 0;\\n}\\n.mainContainer[data-v-1b411f78] {\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  padding-top: 120px;\\n  color: black;\\n  background: white;\\n}\\nh1[data-v-1b411f78] {\\n  text-align: center;\\n  margin-bottom: 20px;\\n}\\n.letrasButtons a[data-v-1b411f78] {\\n  text-decoration: none;\\n  color: black;\\n  background-color: #83d3fc;\\n  padding: 5px 10px;\\n  border-radius: 2px;\\n  cursor: pointer;\\n  margin: 5px;\\n  transition: background-color 0.3s ease;\\n  margin-top: 30px;\\n}\\n.letrasButtons a[data-v-1b411f78]:hover {\\n  background-color: #055480;\\n}\\n.letrasButtons a.letraNoDisponible[data-v-1b411f78] {\\n  color: #666;\\n  cursor: not-allowed;\\n}\\n.letrasButtons a.letraSeleccionada[data-v-1b411f78] {\\n  background-color: #ff5733;\\n}\\n.IngredientsSection[data-v-1b411f78] {\\n  transition: background-color 0.3s ease;\\n  margin-top: 40px;\\n  justify-content: center;\\n}\\n.IngredientsSection.resaltado[data-v-1b411f78] {\\n  background-color: #ffffff;\\n  margin-right: 20px;\\n  margin-left: 20px;\\n  padding: 10px;\\n  border: 2px solid #83d3fc;\\n}\\n.tituloSeccion[data-v-1b411f78] {\\n  text-align: center;\\n  font-size: larger;\\n  background-color: #83d3fc;\\n  width: 25%;\\n  margin: 0 auto; /* Añadido para centrar horizontalmente */\\n  padding: 5px;\\n  margin-top: 20px;\\n}\\n.ingredientesList[data-v-1b411f78] {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: flex-start;\\n  margin-top: 20px;\\n  margin-right: 20px;\\n  margin-left: 20px;\\n}\\n.botonIngrediente[data-v-1b411f78] {\\n  margin: 5px;\\n  padding: 10px;\\n  cursor: pointer;\\n  background-color: white;\\n  color: black;\\n  border-top: 1px solid black;\\n  border: none;\\n  border-radius: 0;\\n  transition: background-color 0.3s ease;\\n  flex: 0 0 calc(33.33% - 10px);\\n}\\n.botonIngrediente[data-v-1b411f78]:hover {\\n  background-color: #83d3fc;\\n}\\n.botonIngrediente.seleccionado[data-v-1b411f78] {\\n  background-color: #ff5733;\\n  color: white;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9BbGxlcmdlbnNGaWx0ZXJQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiNDExZjc4JnNjb3BlZD10cnVlJmxhbmc9Y3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL0FsbGVyZ2Vuc0ZpbHRlclBhZ2UudnVlPzJkNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5W2RhdGEtdi0xYjQxMWY3OF0sIGh0bWxbZGF0YS12LTFiNDExZjc4XSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWFpbkNvbnRhaW5lcltkYXRhLXYtMWI0MTFmNzhdIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuaDFbZGF0YS12LTFiNDExZjc4XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubGV0cmFzQnV0dG9ucyBhW2RhdGEtdi0xYjQxMWY3OF0ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5sZXRyYXNCdXR0b25zIGFbZGF0YS12LTFiNDExZjc4XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1NDgwO1xcbn1cXG4ubGV0cmFzQnV0dG9ucyBhLmxldHJhTm9EaXNwb25pYmxlW2RhdGEtdi0xYjQxMWY3OF0ge1xcbiAgY29sb3I6ICM2NjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ubGV0cmFzQnV0dG9ucyBhLmxldHJhU2VsZWNjaW9uYWRhW2RhdGEtdi0xYjQxMWY3OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcXG59XFxuLkluZ3JlZGllbnRzU2VjdGlvbltkYXRhLXYtMWI0MTFmNzhdIHtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uSW5ncmVkaWVudHNTZWN0aW9uLnJlc2FsdGFkb1tkYXRhLXYtMWI0MTFmNzhdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjODNkM2ZjO1xcbn1cXG4udGl0dWxvU2VjY2lvbltkYXRhLXYtMWI0MTFmNzhdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcXG4gIHdpZHRoOiAyNSU7XFxuICBtYXJnaW46IDAgYXV0bzsgLyogQcOxYWRpZG8gcGFyYSBjZW50cmFyIGhvcml6b250YWxtZW50ZSAqL1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmluZ3JlZGllbnRlc0xpc3RbZGF0YS12LTFiNDExZjc4XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4uYm90b25JbmdyZWRpZW50ZVtkYXRhLXYtMWI0MTFmNzhdIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgZmxleDogMCAwIGNhbGMoMzMuMzMlIC0gMTBweCk7XFxufVxcbi5ib3RvbkluZ3JlZGllbnRlW2RhdGEtdi0xYjQxMWY3OF06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDNmYztcXG59XFxuLmJvdG9uSW5ncmVkaWVudGUuc2VsZWNjaW9uYWRvW2RhdGEtdi0xYjQxMWY3OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/AllergensFilterPage.vue?vue&type=style&index=0&id=1b411f78&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9ffebdc930b40b9d"; }
/******/ }();
/******/ 
/******/ }
);