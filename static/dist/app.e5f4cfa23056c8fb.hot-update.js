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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    options: Array,\n    // List of options grouped by category\n    selectedValue: Array,\n    // Change the prop type to Array for multiple selections\n    label: String,\n    // Label for the select dropdown\n    groupTitle: String,\n    // Title for the selected group\n    choose: Boolean\n  },\n  data() {\n    return {\n      localSelectedValue: this.selectedValue,\n      // Use a local value to bind to the select\n      selectedOptions: [] // List to store selected items\n    };\n  },\n\n  methods: {\n    addSelectedOption() {\n      const selectedValue = this.localSelectedValue;\n      // Check if the selected value is valid and not already selected\n      if (this.choose == false) {\n        this.selectedOptions = [];\n      }\n      if (selectedValue && !this.selectedOptions.includes(selectedValue)) {\n        this.selectedOptions.push(selectedValue);\n        this.$emit('update:selectedValue', this.selectedOptions);\n      }\n    },\n    removeSelectedOption(index) {\n      this.selectedOptions.splice(index, 1);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7OztBQTJCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Ib21lRmlsdGVyRHJvcGRvd24udnVlPzlhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbHRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUZpbHRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDI+e3sgbGFiZWwgfX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gRHJvcGRvd24gc2VsZWN0IHRvIGNob29zZSBvcHRpb25zIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IEBjaGFuZ2U9XCJhZGRTZWxlY3RlZE9wdGlvblwiIGNsYXNzPVwiZnVsbC13aWR0aC1kcm9wZG93blwiIHYtbW9kZWw9XCJsb2NhbFNlbGVjdGVkVmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5TZWxlY3Qge3sgbGFiZWwgfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRncm91cCB2LWZvcj1cImdyb3VwIGluIG9wdGlvbnNcIiA6bGFiZWw9XCJncm91cC5ncm91cE5hbWVcIiA6a2V5PVwiZ3JvdXAuZ3JvdXBOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9wdGlvbiBpbiBncm91cC5vcHRpb25zXCIgOnZhbHVlPVwib3B0aW9uXCIgOmtleT1cIm9wdGlvblwiPnt7IG9wdGlvbiB9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBEaXNwbGF5IHNlbGVjdGVkIHZhbHVlcyBhbmQgYWxsb3cgcmVtb3ZhbCAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVzXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlbGVjdGVkLWluZ3JlZGllbnRzLXRpdGxlXCI+e3sgZ3JvdXBUaXRsZSB9fTwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWxlY3RlZC12YWx1ZVwiIHYtZm9yPVwiKHNlbGVjdGVkLCBpbmRleCkgaW4gc2VsZWN0ZWRPcHRpb25zXCIgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVTZWxlY3RlZE9wdGlvbihpbmRleClcIj5cclxuICAgICAgICAgICAgICAgIHt7IHNlbGVjdGVkIH19IDxzcGFuIGNsYXNzPVwicmVtb3ZlLWJ1dHRvblwiPuKcljwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIG9wdGlvbnM6IEFycmF5LCAvLyBMaXN0IG9mIG9wdGlvbnMgZ3JvdXBlZCBieSBjYXRlZ29yeVxyXG4gICAgICAgIHNlbGVjdGVkVmFsdWU6IEFycmF5LCAvLyBDaGFuZ2UgdGhlIHByb3AgdHlwZSB0byBBcnJheSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uc1xyXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsIC8vIExhYmVsIGZvciB0aGUgc2VsZWN0IGRyb3Bkb3duXHJcbiAgICAgICAgZ3JvdXBUaXRsZTogU3RyaW5nLCAvLyBUaXRsZSBmb3IgdGhlIHNlbGVjdGVkIGdyb3VwXHJcbiAgICAgICAgY2hvb3NlOiBCb29sZWFuXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2NhbFNlbGVjdGVkVmFsdWU6IHRoaXMuc2VsZWN0ZWRWYWx1ZSwgLy8gVXNlIGEgbG9jYWwgdmFsdWUgdG8gYmluZCB0byB0aGUgc2VsZWN0XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uczogW10sIC8vIExpc3QgdG8gc3RvcmUgc2VsZWN0ZWQgaXRlbXNcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRTZWxlY3RlZE9wdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMubG9jYWxTZWxlY3RlZFZhbHVlO1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgc2VsZWN0ZWQgdmFsdWUgaXMgdmFsaWQgYW5kIG5vdCBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNob29zZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiAhdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMoc2VsZWN0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2goc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6c2VsZWN0ZWRWYWx1ZScsIHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlU2VsZWN0ZWRPcHRpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5maWx0ZXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjY5YjcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ucmVtb3ZlLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-a7074ed0\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"filterContainer\"\n};\nconst _hoisted_2 = {\n  class: \"titleFilterContainer\"\n};\nconst _hoisted_3 = {\n  class: \"dropdownContainer\"\n};\nconst _hoisted_4 = {\n  value: \"\",\n  disabled: \"\"\n};\nconst _hoisted_5 = [\"label\"];\nconst _hoisted_6 = [\"value\"];\nconst _hoisted_7 = {\n  class: \"selected-values\"\n};\nconst _hoisted_8 = {\n  class: \"selected-ingredients-title\"\n};\nconst _hoisted_9 = [\"onClick\"];\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"remove-button\"\n}, \"✖\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Dropdown select to choose options \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.addSelectedOption && $options.addSelectedOption(...args)),\n    class: \"full-width-dropdown\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.localSelectedValue = $event)\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", _hoisted_4, \"Select \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, group => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"optgroup\", {\n      label: group.groupName,\n      key: group.groupName\n    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group.options, option => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n        value: option,\n        key: option\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 9 /* TEXT, PROPS */, _hoisted_6);\n    }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_5);\n  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.localSelectedValue]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Display selected values and allow removal \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.groupTitle), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedOptions, (selected, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n      class: \"selected-value\",\n      key: index,\n      onClick: $event => $options.removeSelectedOption(index)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(selected) + \" \", 1 /* TEXT */), _hoisted_10], 8 /* PROPS */, _hoisted_9);\n  }), 128 /* KEYED_FRAGMENT */))])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9Ib21lRmlsdGVyRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3MDc0ZWQwJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUlBO0FBQUE7O0FBRUE7QUFBQTs7Ozs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBR0E7QUFBQTtBQUFBOzs7QUFsQkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Ib21lRmlsdGVyRHJvcGRvd24udnVlPzlhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbHRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUZpbHRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDI+e3sgbGFiZWwgfX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gRHJvcGRvd24gc2VsZWN0IHRvIGNob29zZSBvcHRpb25zIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IEBjaGFuZ2U9XCJhZGRTZWxlY3RlZE9wdGlvblwiIGNsYXNzPVwiZnVsbC13aWR0aC1kcm9wZG93blwiIHYtbW9kZWw9XCJsb2NhbFNlbGVjdGVkVmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5TZWxlY3Qge3sgbGFiZWwgfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRncm91cCB2LWZvcj1cImdyb3VwIGluIG9wdGlvbnNcIiA6bGFiZWw9XCJncm91cC5ncm91cE5hbWVcIiA6a2V5PVwiZ3JvdXAuZ3JvdXBOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9wdGlvbiBpbiBncm91cC5vcHRpb25zXCIgOnZhbHVlPVwib3B0aW9uXCIgOmtleT1cIm9wdGlvblwiPnt7IG9wdGlvbiB9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBEaXNwbGF5IHNlbGVjdGVkIHZhbHVlcyBhbmQgYWxsb3cgcmVtb3ZhbCAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVzXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlbGVjdGVkLWluZ3JlZGllbnRzLXRpdGxlXCI+e3sgZ3JvdXBUaXRsZSB9fTwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWxlY3RlZC12YWx1ZVwiIHYtZm9yPVwiKHNlbGVjdGVkLCBpbmRleCkgaW4gc2VsZWN0ZWRPcHRpb25zXCIgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVTZWxlY3RlZE9wdGlvbihpbmRleClcIj5cclxuICAgICAgICAgICAgICAgIHt7IHNlbGVjdGVkIH19IDxzcGFuIGNsYXNzPVwicmVtb3ZlLWJ1dHRvblwiPuKcljwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIG9wdGlvbnM6IEFycmF5LCAvLyBMaXN0IG9mIG9wdGlvbnMgZ3JvdXBlZCBieSBjYXRlZ29yeVxyXG4gICAgICAgIHNlbGVjdGVkVmFsdWU6IEFycmF5LCAvLyBDaGFuZ2UgdGhlIHByb3AgdHlwZSB0byBBcnJheSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uc1xyXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsIC8vIExhYmVsIGZvciB0aGUgc2VsZWN0IGRyb3Bkb3duXHJcbiAgICAgICAgZ3JvdXBUaXRsZTogU3RyaW5nLCAvLyBUaXRsZSBmb3IgdGhlIHNlbGVjdGVkIGdyb3VwXHJcbiAgICAgICAgY2hvb3NlOiBCb29sZWFuXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2NhbFNlbGVjdGVkVmFsdWU6IHRoaXMuc2VsZWN0ZWRWYWx1ZSwgLy8gVXNlIGEgbG9jYWwgdmFsdWUgdG8gYmluZCB0byB0aGUgc2VsZWN0XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uczogW10sIC8vIExpc3QgdG8gc3RvcmUgc2VsZWN0ZWQgaXRlbXNcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRTZWxlY3RlZE9wdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMubG9jYWxTZWxlY3RlZFZhbHVlO1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgc2VsZWN0ZWQgdmFsdWUgaXMgdmFsaWQgYW5kIG5vdCBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNob29zZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiAhdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMoc2VsZWN0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2goc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6c2VsZWN0ZWRWYWx1ZScsIHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlU2VsZWN0ZWRPcHRpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5maWx0ZXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjY5YjcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ucmVtb3ZlLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6402dd0772461673"; }
/******/ }();
/******/ 
/******/ }
);