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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    options: Array,\n    // Array de opciones para el dropdown\n    selectedValue: String,\n    // Valor seleccionado (v-model)\n    label: String // Etiqueta del dropdown\n  },\n\n  data() {\n    return {\n      selectedOptions: [] // Lista para almacenar elementos seleccionados\n    };\n  },\n\n  methods: {\n    addSelectedOption(event) {\n      const selectedValue = event.target.value;\n      if (selectedValue && !this.selectedOptions.includes(selectedValue)) {\n        this.selectedOptions.push(selectedValue);\n      }\n    },\n    removeSelectedOption(index) {\n      this.selectedOptions.splice(index, 1);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBbUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT8zN2EyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8c2VsZWN0IEBjaGFuZ2U9XCJhZGRTZWxlY3RlZE9wdGlvblwiIGNsYXNzPVwiZnVsbC13aWR0aC1kcm9wZG93blwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlNlbGVjdCB7eyBsYWJlbCB9fTwvb3B0aW9uPlxuICAgICAgPG9wdGdyb3VwIHYtZm9yPVwiZ3JvdXAgaW4gb3B0aW9uc1wiIDpsYWJlbD1cImdyb3VwLmdyb3VwTmFtZVwiIDprZXk9XCJncm91cC5ncm91cE5hbWVcIj5cbiAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9wdGlvbiBpbiBncm91cC5vcHRpb25zXCIgOnZhbHVlPVwib3B0aW9uXCIgOmtleT1cIm9wdGlvblwiPnt7IG9wdGlvbiB9fTwvb3B0aW9uPlxuICAgICAgPC9vcHRncm91cD5cbiAgICA8L3NlbGVjdD5cblxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RlZC12YWx1ZXNcIj5cbiAgICAgIDxoMiBjbGFzcz1cInNlbGVjdGVkLWluZ3JlZGllbnRzLXRpdGxlXCI+U2VsZWN0ZWQgSW5ncmVkaWVudHM8L2gyPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlbGVjdGVkLXZhbHVlXCIgdi1mb3I9XCIoc2VsZWN0ZWQsIGluZGV4KSBpbiBzZWxlY3RlZE9wdGlvbnNcIiA6a2V5PVwiaW5kZXhcIiBAY2xpY2s9XCJyZW1vdmVTZWxlY3RlZE9wdGlvbihpbmRleClcIj5cbiAgICAgICAge3sgc2VsZWN0ZWQgfX0gPHNwYW4gY2xhc3M9XCJyZW1vdmUtYnV0dG9uXCI+4pyWPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBvcHRpb25zOiBBcnJheSwgLy8gQXJyYXkgZGUgb3BjaW9uZXMgcGFyYSBlbCBkcm9wZG93blxuICAgIHNlbGVjdGVkVmFsdWU6IFN0cmluZywgLy8gVmFsb3Igc2VsZWNjaW9uYWRvICh2LW1vZGVsKVxuICAgIGxhYmVsOiBTdHJpbmcsIC8vIEV0aXF1ZXRhIGRlbCBkcm9wZG93blxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZE9wdGlvbnM6IFtdLCAvLyBMaXN0YSBwYXJhIGFsbWFjZW5hciBlbGVtZW50b3Mgc2VsZWNjaW9uYWRvc1xuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRTZWxlY3RlZE9wdGlvbihldmVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChzZWxlY3RlZFZhbHVlICYmICF0aGlzLnNlbGVjdGVkT3B0aW9ucy5pbmNsdWRlcyhzZWxlY3RlZFZhbHVlKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKHNlbGVjdGVkVmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRPcHRpb24oaW5kZXgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5yZW1vdmUtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogVGFtYcOxbyBkZSBmdWVudGUgcGVyc29uYWxpemFkbyAqL1xuICBtYXJnaW4tYm90dG9tOiAycHg7IC8qIEVzcGFjaW8gcGVyc29uYWxpemFkbyBkZXNwdcOpcyBkZWwgdMOtdHVsbyAqL1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-154cb5ee\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  value: \"\",\n  disabled: \"\"\n};\nconst _hoisted_2 = [\"label\"];\nconst _hoisted_3 = [\"value\"];\nconst _hoisted_4 = {\n  class: \"selected-values\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", {\n  class: \"selected-ingredients-title\"\n}, \"Selected Ingredients\", -1 /* HOISTED */));\nconst _hoisted_6 = [\"onClick\"];\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"remove-button\"\n}, \"✖\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.addSelectedOption && $options.addSelectedOption(...args)),\n    class: \"full-width-dropdown\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", _hoisted_1, \"Select \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, group => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"optgroup\", {\n      label: group.groupName,\n      key: group.groupName\n    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group.options, option => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n        value: option,\n        key: option\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 9 /* TEXT, PROPS */, _hoisted_3);\n    }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_2);\n  }), 128 /* KEYED_FRAGMENT */))], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedOptions, (selected, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n      class: \"selected-value\",\n      key: index,\n      onClick: $event => $options.removeSelectedOption(index)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(selected) + \" \", 1 /* TEXT */), _hoisted_7], 8 /* PROPS */, _hoisted_6);\n  }), 128 /* KEYED_FRAGMENT */))])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBEcm9wZG93blNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTU0Y2I1ZWUmc2NvcGVkPXRydWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTtBQUFBOzs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBOzs7QUFYQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBEcm9wZG93blNlbGVjdC52dWU/MzdhMiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHNlbGVjdCBAY2hhbmdlPVwiYWRkU2VsZWN0ZWRPcHRpb25cIiBjbGFzcz1cImZ1bGwtd2lkdGgtZHJvcGRvd25cIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5TZWxlY3Qge3sgbGFiZWwgfX08L29wdGlvbj5cbiAgICAgIDxvcHRncm91cCB2LWZvcj1cImdyb3VwIGluIG9wdGlvbnNcIiA6bGFiZWw9XCJncm91cC5ncm91cE5hbWVcIiA6a2V5PVwiZ3JvdXAuZ3JvdXBOYW1lXCI+XG4gICAgICAgIDxvcHRpb24gdi1mb3I9XCJvcHRpb24gaW4gZ3JvdXAub3B0aW9uc1wiIDp2YWx1ZT1cIm9wdGlvblwiIDprZXk9XCJvcHRpb25cIj57eyBvcHRpb24gfX08L29wdGlvbj5cbiAgICAgIDwvb3B0Z3JvdXA+XG4gICAgPC9zZWxlY3Q+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVzXCI+XG4gICAgICA8aDIgY2xhc3M9XCJzZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZVwiPlNlbGVjdGVkIEluZ3JlZGllbnRzPC9oMj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzZWxlY3RlZC12YWx1ZVwiIHYtZm9yPVwiKHNlbGVjdGVkLCBpbmRleCkgaW4gc2VsZWN0ZWRPcHRpb25zXCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwicmVtb3ZlU2VsZWN0ZWRPcHRpb24oaW5kZXgpXCI+XG4gICAgICAgIHt7IHNlbGVjdGVkIH19IDxzcGFuIGNsYXNzPVwicmVtb3ZlLWJ1dHRvblwiPuKcljwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgb3B0aW9uczogQXJyYXksIC8vIEFycmF5IGRlIG9wY2lvbmVzIHBhcmEgZWwgZHJvcGRvd25cbiAgICBzZWxlY3RlZFZhbHVlOiBTdHJpbmcsIC8vIFZhbG9yIHNlbGVjY2lvbmFkbyAodi1tb2RlbClcbiAgICBsYWJlbDogU3RyaW5nLCAvLyBFdGlxdWV0YSBkZWwgZHJvcGRvd25cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRPcHRpb25zOiBbXSwgLy8gTGlzdGEgcGFyYSBhbG1hY2VuYXIgZWxlbWVudG9zIHNlbGVjY2lvbmFkb3NcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkU2VsZWN0ZWRPcHRpb24oZXZlbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiAhdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMoc2VsZWN0ZWRWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucHVzaChzZWxlY3RlZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZVNlbGVjdGVkT3B0aW9uKGluZGV4KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucmVtb3ZlLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uc2VsZWN0ZWQtaW5ncmVkaWVudHMtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7IC8qIFRhbWHDsW8gZGUgZnVlbnRlIHBlcnNvbmFsaXphZG8gKi9cbiAgbWFyZ2luLWJvdHRvbTogMnB4OyAvKiBFc3BhY2lvIHBlcnNvbmFsaXphZG8gZGVzcHXDqXMgZGVsIHTDrXR1bG8gKi9cbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee&scoped=true\n");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=style&index=0&id=154cb5ee&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=style&index=0&id=154cb5ee&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.remove-button[data-v-154cb5ee] {\\n  cursor: pointer;\\n  margin-left: 10px;\\n}\\n.selected-ingredients-title[data-v-154cb5ee] {\\n  font-size: 16px; /* Tamaño de fuente personalizado */\\n  margin-bottom: 2px; /* Espacio personalizado después del título */\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE1NGNiNWVlJnNjb3BlZD10cnVlJmxhbmc9Y3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwRHJvcGRvd25TZWxlY3QudnVlPzk0NDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucmVtb3ZlLWJ1dHRvbltkYXRhLXYtMTU0Y2I1ZWVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uc2VsZWN0ZWQtaW5ncmVkaWVudHMtdGl0bGVbZGF0YS12LTE1NGNiNWVlXSB7XFxuICBmb250LXNpemU6IDE2cHg7IC8qIFRhbWHDsW8gZGUgZnVlbnRlIHBlcnNvbmFsaXphZG8gKi9cXG4gIG1hcmdpbi1ib3R0b206IDJweDsgLyogRXNwYWNpbyBwZXJzb25hbGl6YWRvIGRlc3B1w6lzIGRlbCB0w610dWxvICovXFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=style&index=0&id=154cb5ee&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6078b2ecb61bc0fe"; }
/******/ }();
/******/ 
/******/ }
);