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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    options: Array,\n    // Array de opciones para el dropdown\n    selectedValue: String,\n    // Valor seleccionado (v-model)\n    label: String // Etiqueta del dropdown\n  },\n\n  data() {\n    return {\n      selectedOptions: [] // Lista para almacenar elementos seleccionados\n    };\n  },\n\n  methods: {\n    addSelectedOption(event) {\n      const selectedValue = event.target.value;\n      if (selectedValue && !this.selectedOptions.includes(selectedValue)) {\n        this.selectedOptions.push(selectedValue);\n      }\n    },\n    removeSelectedOption(index) {\n      this.selectedOptions.splice(index, 1);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBbUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT8zN2EyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxzZWxlY3QgQGNoYW5nZT1cImFkZFNlbGVjdGVkT3B0aW9uXCIgY2xhc3M9XCJmdWxsLXdpZHRoLWRyb3Bkb3duXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+U2VsZWN0IHt7IGxhYmVsIH19PC9vcHRpb24+XG4gICAgICA8b3B0Z3JvdXAgdi1mb3I9XCJncm91cCBpbiBvcHRpb25zXCIgOmxhYmVsPVwiZ3JvdXAuZ3JvdXBOYW1lXCIgOmtleT1cImdyb3VwLmdyb3VwTmFtZVwiPlxuICAgICAgICA8b3B0aW9uIHYtZm9yPVwib3B0aW9uIGluIGdyb3VwLm9wdGlvbnNcIiA6dmFsdWU9XCJvcHRpb25cIiA6a2V5PVwib3B0aW9uXCI+e3sgb3B0aW9uIH19PC9vcHRpb24+XG4gICAgICA8L29wdGdyb3VwPlxuICAgIDwvc2VsZWN0PlxuXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLXZhbHVlc1wiPlxuICAgICAgPGgyIGNsYXNzPVwic2VsZWN0ZWQtaW5ncmVkaWVudHMtdGl0bGVcIj5TZWxlY3RlZCBJbmdyZWRpZW50czwvaDI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVcIiB2LWZvcj1cIihzZWxlY3RlZCwgaW5kZXgpIGluIHNlbGVjdGVkT3B0aW9uc1wiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cInJlbW92ZVNlbGVjdGVkT3B0aW9uKGluZGV4KVwiPlxuICAgICAgICB7eyBzZWxlY3RlZCB9fSA8c3BhbiBjbGFzcz1cInJlbW92ZS1idXR0b25cIj7inJY8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIG9wdGlvbnM6IEFycmF5LCAvLyBBcnJheSBkZSBvcGNpb25lcyBwYXJhIGVsIGRyb3Bkb3duXG4gICAgc2VsZWN0ZWRWYWx1ZTogU3RyaW5nLCAvLyBWYWxvciBzZWxlY2Npb25hZG8gKHYtbW9kZWwpXG4gICAgbGFiZWw6IFN0cmluZywgLy8gRXRpcXVldGEgZGVsIGRyb3Bkb3duXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkT3B0aW9uczogW10sIC8vIExpc3RhIHBhcmEgYWxtYWNlbmFyIGVsZW1lbnRvcyBzZWxlY2Npb25hZG9zXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZFNlbGVjdGVkT3B0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgIXRoaXMuc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKHNlbGVjdGVkVmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2goc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVTZWxlY3RlZE9wdGlvbihpbmRleCkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0U0QTQgOyAvKiBGb25kbyBhenVsICovXG4gIG1hcmdpbjogMnB4IDVweDsgLyogTcOhcmdlbmVzIHBlcnNvbmFsaXphZG9zICovXG4gIHBhZGRpbmc6IDEwcHg7IC8qIEVzcGFjaW8gaW50ZXJubyBwYXJhIGNvbnRlbmlkbyAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcbn1cbi5yZW1vdmUtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogVGFtYcOxbyBkZSBmdWVudGUgcGVyc29uYWxpemFkbyAqL1xuICBtYXJnaW4tYm90dG9tOiAycHg7IC8qIEVzcGFjaW8gcGVyc29uYWxpemFkbyBkZXNwdcOpcyBkZWwgdMOtdHVsbyAqL1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-154cb5ee\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"container\"\n};\nconst _hoisted_2 = {\n  value: \"\",\n  disabled: \"\"\n};\nconst _hoisted_3 = [\"label\"];\nconst _hoisted_4 = [\"value\"];\nconst _hoisted_5 = {\n  class: \"selected-values\"\n};\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", {\n  class: \"selected-ingredients-title\"\n}, \"Selected Ingredients\", -1 /* HOISTED */));\nconst _hoisted_7 = [\"onClick\"];\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"remove-button\"\n}, \"✖\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.addSelectedOption && $options.addSelectedOption(...args)),\n    class: \"full-width-dropdown\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", _hoisted_2, \"Select \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, group => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"optgroup\", {\n      label: group.groupName,\n      key: group.groupName\n    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group.options, option => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n        value: option,\n        key: option\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 9 /* TEXT, PROPS */, _hoisted_4);\n    }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_3);\n  }), 128 /* KEYED_FRAGMENT */))], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [_hoisted_6, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedOptions, (selected, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n      class: \"selected-value\",\n      key: index,\n      onClick: $event => $options.removeSelectedOption(index)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(selected) + \" \", 1 /* TEXT */), _hoisted_8], 8 /* PROPS */, _hoisted_7);\n  }), 128 /* KEYED_FRAGMENT */))])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBEcm9wZG93blNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTU0Y2I1ZWUmc2NvcGVkPXRydWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUVBO0FBQUE7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7OztBQVhBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT8zN2EyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxzZWxlY3QgQGNoYW5nZT1cImFkZFNlbGVjdGVkT3B0aW9uXCIgY2xhc3M9XCJmdWxsLXdpZHRoLWRyb3Bkb3duXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+U2VsZWN0IHt7IGxhYmVsIH19PC9vcHRpb24+XG4gICAgICA8b3B0Z3JvdXAgdi1mb3I9XCJncm91cCBpbiBvcHRpb25zXCIgOmxhYmVsPVwiZ3JvdXAuZ3JvdXBOYW1lXCIgOmtleT1cImdyb3VwLmdyb3VwTmFtZVwiPlxuICAgICAgICA8b3B0aW9uIHYtZm9yPVwib3B0aW9uIGluIGdyb3VwLm9wdGlvbnNcIiA6dmFsdWU9XCJvcHRpb25cIiA6a2V5PVwib3B0aW9uXCI+e3sgb3B0aW9uIH19PC9vcHRpb24+XG4gICAgICA8L29wdGdyb3VwPlxuICAgIDwvc2VsZWN0PlxuXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLXZhbHVlc1wiPlxuICAgICAgPGgyIGNsYXNzPVwic2VsZWN0ZWQtaW5ncmVkaWVudHMtdGl0bGVcIj5TZWxlY3RlZCBJbmdyZWRpZW50czwvaDI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVcIiB2LWZvcj1cIihzZWxlY3RlZCwgaW5kZXgpIGluIHNlbGVjdGVkT3B0aW9uc1wiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cInJlbW92ZVNlbGVjdGVkT3B0aW9uKGluZGV4KVwiPlxuICAgICAgICB7eyBzZWxlY3RlZCB9fSA8c3BhbiBjbGFzcz1cInJlbW92ZS1idXR0b25cIj7inJY8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIG9wdGlvbnM6IEFycmF5LCAvLyBBcnJheSBkZSBvcGNpb25lcyBwYXJhIGVsIGRyb3Bkb3duXG4gICAgc2VsZWN0ZWRWYWx1ZTogU3RyaW5nLCAvLyBWYWxvciBzZWxlY2Npb25hZG8gKHYtbW9kZWwpXG4gICAgbGFiZWw6IFN0cmluZywgLy8gRXRpcXVldGEgZGVsIGRyb3Bkb3duXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkT3B0aW9uczogW10sIC8vIExpc3RhIHBhcmEgYWxtYWNlbmFyIGVsZW1lbnRvcyBzZWxlY2Npb25hZG9zXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZFNlbGVjdGVkT3B0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgIXRoaXMuc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKHNlbGVjdGVkVmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2goc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVTZWxlY3RlZE9wdGlvbihpbmRleCkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0U0QTQgOyAvKiBGb25kbyBhenVsICovXG4gIG1hcmdpbjogMnB4IDVweDsgLyogTcOhcmdlbmVzIHBlcnNvbmFsaXphZG9zICovXG4gIHBhZGRpbmc6IDEwcHg7IC8qIEVzcGFjaW8gaW50ZXJubyBwYXJhIGNvbnRlbmlkbyAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcbn1cbi5yZW1vdmUtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogVGFtYcOxbyBkZSBmdWVudGUgcGVyc29uYWxpemFkbyAqL1xuICBtYXJnaW4tYm90dG9tOiAycHg7IC8qIEVzcGFjaW8gcGVyc29uYWxpemFkbyBkZXNwdcOpcyBkZWwgdMOtdHVsbyAqL1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee&scoped=true\n");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=style&index=0&id=154cb5ee&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=style&index=0&id=154cb5ee&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.container[data-v-154cb5ee] {\\n  background-color: #FCE4A4 ; /* Fondo azul */\\n  margin: 2px 5px; /* Márgenes personalizados */\\n  padding: 10px; /* Espacio interno para contenido */\\n  border-radius: 10px;\\n}\\n.remove-button[data-v-154cb5ee] {\\n  cursor: pointer;\\n  margin-left: 10px;\\n}\\n.selected-ingredients-title[data-v-154cb5ee] {\\n  font-size: 16px; /* Tamaño de fuente personalizado */\\n  margin-bottom: 2px; /* Espacio personalizado después del título */\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE1NGNiNWVlJnNjb3BlZD10cnVlJmxhbmc9Y3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwRHJvcGRvd25TZWxlY3QudnVlPzk0NDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY29udGFpbmVyW2RhdGEtdi0xNTRjYjVlZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRTRBNCA7IC8qIEZvbmRvIGF6dWwgKi9cXG4gIG1hcmdpbjogMnB4IDVweDsgLyogTcOhcmdlbmVzIHBlcnNvbmFsaXphZG9zICovXFxuICBwYWRkaW5nOiAxMHB4OyAvKiBFc3BhY2lvIGludGVybm8gcGFyYSBjb250ZW5pZG8gKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5yZW1vdmUtYnV0dG9uW2RhdGEtdi0xNTRjYjVlZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5zZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZVtkYXRhLXYtMTU0Y2I1ZWVdIHtcXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogVGFtYcOxbyBkZSBmdWVudGUgcGVyc29uYWxpemFkbyAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4OyAvKiBFc3BhY2lvIHBlcnNvbmFsaXphZG8gZGVzcHXDqXMgZGVsIHTDrXR1bG8gKi9cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=style&index=0&id=154cb5ee&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "12a04fbaed4fcfad"; }
/******/ }();
/******/ 
/******/ }
);