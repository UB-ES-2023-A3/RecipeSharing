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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    options: Array,\n    // List of options grouped by category\n    selectedValue: Array,\n    // Change the prop type to Array for multiple selections\n    label: String,\n    // Label for the select dropdown\n    groupTitle: String,\n    // Title for the selected group\n    choose: Boolean,\n    reset: Boolean\n  },\n  data() {\n    return {\n      localSelectedValue: this.selectedValue,\n      // Use a local value to bind to the select\n      selectedOptions: [] // List to store selected items\n    };\n  },\n\n  methods: {\n    addSelectedOption() {\n      const selectedValue = this.localSelectedValue;\n      // Check if the selected value is valid and not already selected\n      if (this.choose == false) {\n        this.selectedOptions = [];\n      }\n      if (selectedValue && !this.selectedOptions.includes(selectedValue)) {\n        this.selectedOptions.push(selectedValue);\n        this.$emit('update:selectedValue', this.selectedOptions);\n      }\n    },\n    removeSelectedOption(index) {\n      this.selectedOptions.splice(index, 1);\n      this.localSelectedValue = '';\n    }\n  },\n  watch: {\n    reset(newVal) {\n      if (newVal == false) {\n        this.localSelectedValue = '';\n        this.selectedOptions = [];\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7OztBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/OWE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IDpjbGFzcz1cInsgZmlsdGVyQ29udGFpbmVyRGFyazogb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDAgfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUZpbHRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDI+e3sgbGFiZWwgfX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gRHJvcGRvd24gc2VsZWN0IHRvIGNob29zZSBvcHRpb25zIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IEBjaGFuZ2U9XCJhZGRTZWxlY3RlZE9wdGlvblwiIGNsYXNzPVwiZnVsbC13aWR0aC1kcm9wZG93blwiIHYtbW9kZWw9XCJsb2NhbFNlbGVjdGVkVmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRncm91cCB2LWZvcj1cImdyb3VwIGluIG9wdGlvbnNcIiA6bGFiZWw9XCJncm91cC5ncm91cE5hbWVcIiA6a2V5PVwiZ3JvdXAuZ3JvdXBOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9wdGlvbiBpbiBncm91cC5vcHRpb25zXCIgOnZhbHVlPVwib3B0aW9uXCIgOmtleT1cIm9wdGlvblwiPnt7IG9wdGlvbiB9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBEaXNwbGF5IHNlbGVjdGVkIHZhbHVlcyBhbmQgYWxsb3cgcmVtb3ZhbCAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVzXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlbGVjdGVkLWluZ3JlZGllbnRzLXRpdGxlXCI+e3sgZ3JvdXBUaXRsZSB9fTwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWxlY3RlZC12YWx1ZVwiIHYtZm9yPVwiKHNlbGVjdGVkLCBpbmRleCkgaW4gc2VsZWN0ZWRPcHRpb25zXCIgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVTZWxlY3RlZE9wdGlvbihpbmRleClcIj5cclxuICAgICAgICAgICAgICAgIHt7IHNlbGVjdGVkIH19IDxzcGFuIGNsYXNzPVwicmVtb3ZlLWJ1dHRvblwiPuKcljwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIG9wdGlvbnM6IEFycmF5LCAvLyBMaXN0IG9mIG9wdGlvbnMgZ3JvdXBlZCBieSBjYXRlZ29yeVxyXG4gICAgICAgIHNlbGVjdGVkVmFsdWU6IEFycmF5LCAvLyBDaGFuZ2UgdGhlIHByb3AgdHlwZSB0byBBcnJheSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uc1xyXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsIC8vIExhYmVsIGZvciB0aGUgc2VsZWN0IGRyb3Bkb3duXHJcbiAgICAgICAgZ3JvdXBUaXRsZTogU3RyaW5nLCAvLyBUaXRsZSBmb3IgdGhlIHNlbGVjdGVkIGdyb3VwXHJcbiAgICAgICAgY2hvb3NlOiBCb29sZWFuLFxyXG4gICAgICAgIHJlc2V0OiBCb29sZWFuLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9jYWxTZWxlY3RlZFZhbHVlOiB0aGlzLnNlbGVjdGVkVmFsdWUsIC8vIFVzZSBhIGxvY2FsIHZhbHVlIHRvIGJpbmQgdG8gdGhlIHNlbGVjdFxyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM6IFtdLCAvLyBMaXN0IHRvIHN0b3JlIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYWRkU2VsZWN0ZWRPcHRpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLmxvY2FsU2VsZWN0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNlbGVjdGVkIHZhbHVlIGlzIHZhbGlkIGFuZCBub3QgYWxyZWFkeSBzZWxlY3RlZFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaG9vc2UgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgIXRoaXMuc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKHNlbGVjdGVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKHNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnNlbGVjdGVkVmFsdWUnLCB0aGlzLnNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVNlbGVjdGVkT3B0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxTZWxlY3RlZFZhbHVlID0gJyc7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHJlc2V0KG5ld1ZhbCkge1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU2VsZWN0ZWRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5maWx0ZXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjY5YjcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4uZmlsdGVyQ29udGFpbmVyRGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjOGMyYztcclxufVxyXG5cclxuLnJlbW92ZS1idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtaW5ncmVkaWVudHMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uZnVsbC13aWR0aC1kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-a7074ed0\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"titleFilterContainer\"\n};\nconst _hoisted_2 = {\n  class: \"dropdownContainer\"\n};\nconst _hoisted_3 = [\"label\"];\nconst _hoisted_4 = [\"value\"];\nconst _hoisted_5 = {\n  class: \"selected-values\"\n};\nconst _hoisted_6 = {\n  class: \"selected-ingredients-title\"\n};\nconst _hoisted_7 = [\"onClick\"];\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"remove-button\"\n}, \"✖\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n      filterContainerDark: $props.options && $props.options.length > 0\n    })\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Dropdown select to choose options \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.addSelectedOption && $options.addSelectedOption(...args)),\n    class: \"full-width-dropdown\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.localSelectedValue = $event)\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, group => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"optgroup\", {\n      label: group.groupName,\n      key: group.groupName\n    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group.options, option => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n        value: option,\n        key: option\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 9 /* TEXT, PROPS */, _hoisted_4);\n    }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_3);\n  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.localSelectedValue]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Display selected values and allow removal \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.groupTitle), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedOptions, (selected, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n      class: \"selected-value\",\n      key: index,\n      onClick: $event => $options.removeSelectedOption(index)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(selected) + \" \", 1 /* TEXT */), _hoisted_8], 8 /* PROPS */, _hoisted_7);\n  }), 128 /* KEYED_FRAGMENT */))])], 2 /* CLASS */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9Ib21lRmlsdGVyRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3MDc0ZWQwJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFBQTs7QUFJQTtBQUFBOzs7O0FBUUE7QUFBQTs7QUFDQTtBQUFBOztBQUdBO0FBQUE7QUFBQTs7O0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Ib21lRmlsdGVyRHJvcGRvd24udnVlPzlhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiA6Y2xhc3M9XCJ7IGZpbHRlckNvbnRhaW5lckRhcms6IG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwIH1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVGaWx0ZXJDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyPnt7IGxhYmVsIH19PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIERyb3Bkb3duIHNlbGVjdCB0byBjaG9vc2Ugb3B0aW9ucyAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCBAY2hhbmdlPVwiYWRkU2VsZWN0ZWRPcHRpb25cIiBjbGFzcz1cImZ1bGwtd2lkdGgtZHJvcGRvd25cIiB2LW1vZGVsPVwibG9jYWxTZWxlY3RlZFZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0Z3JvdXAgdi1mb3I9XCJncm91cCBpbiBvcHRpb25zXCIgOmxhYmVsPVwiZ3JvdXAuZ3JvdXBOYW1lXCIgOmtleT1cImdyb3VwLmdyb3VwTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJvcHRpb24gaW4gZ3JvdXAub3B0aW9uc1wiIDp2YWx1ZT1cIm9wdGlvblwiIDprZXk9XCJvcHRpb25cIj57eyBvcHRpb24gfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvb3B0Z3JvdXA+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gRGlzcGxheSBzZWxlY3RlZCB2YWx1ZXMgYW5kIGFsbG93IHJlbW92YWwgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLXZhbHVlc1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZVwiPnt7IGdyb3VwVGl0bGUgfX08L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVcIiB2LWZvcj1cIihzZWxlY3RlZCwgaW5kZXgpIGluIHNlbGVjdGVkT3B0aW9uc1wiIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlU2VsZWN0ZWRPcHRpb24oaW5kZXgpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBzZWxlY3RlZCB9fSA8c3BhbiBjbGFzcz1cInJlbW92ZS1idXR0b25cIj7inJY8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBvcHRpb25zOiBBcnJheSwgLy8gTGlzdCBvZiBvcHRpb25zIGdyb3VwZWQgYnkgY2F0ZWdvcnlcclxuICAgICAgICBzZWxlY3RlZFZhbHVlOiBBcnJheSwgLy8gQ2hhbmdlIHRoZSBwcm9wIHR5cGUgdG8gQXJyYXkgZm9yIG11bHRpcGxlIHNlbGVjdGlvbnNcclxuICAgICAgICBsYWJlbDogU3RyaW5nLCAvLyBMYWJlbCBmb3IgdGhlIHNlbGVjdCBkcm9wZG93blxyXG4gICAgICAgIGdyb3VwVGl0bGU6IFN0cmluZywgLy8gVGl0bGUgZm9yIHRoZSBzZWxlY3RlZCBncm91cFxyXG4gICAgICAgIGNob29zZTogQm9vbGVhbixcclxuICAgICAgICByZXNldDogQm9vbGVhbixcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvY2FsU2VsZWN0ZWRWYWx1ZTogdGhpcy5zZWxlY3RlZFZhbHVlLCAvLyBVc2UgYSBsb2NhbCB2YWx1ZSB0byBiaW5kIHRvIHRoZSBzZWxlY3RcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zOiBbXSwgLy8gTGlzdCB0byBzdG9yZSBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGFkZFNlbGVjdGVkT3B0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy5sb2NhbFNlbGVjdGVkVmFsdWU7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBzZWxlY3RlZCB2YWx1ZSBpcyB2YWxpZCBhbmQgbm90IGFscmVhZHkgc2VsZWN0ZWRcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvb3NlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlICYmICF0aGlzLnNlbGVjdGVkT3B0aW9ucy5pbmNsdWRlcyhzZWxlY3RlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucHVzaChzZWxlY3RlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZFZhbHVlJywgdGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVTZWxlY3RlZE9wdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsU2VsZWN0ZWRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICByZXNldChuZXdWYWwpIHtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFNlbGVjdGVkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uZmlsdGVyQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2OWI3MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLmZpbHRlckNvbnRhaW5lckRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzhjMmM7XHJcbn1cclxuXHJcbi5yZW1vdmUtYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkLWluZ3JlZGllbnRzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgtZHJvcGRvd24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=style&index=0&id=a7074ed0&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=style&index=0&id=a7074ed0&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.filterContainer[data-v-a7074ed0] {\\r\\n    width: 10%;\\r\\n    height: 10%;\\r\\n    margin-top: 1%;\\r\\n    margin-bottom: 1%;\\r\\n    text-align: center;\\r\\n    background-color: #ffa500;\\r\\n    border: 1px solid #b69b70;\\r\\n    border-radius: 10px;\\r\\n    padding: 1%;\\n}\\n.filterContainerDark[data-v-a7074ed0] {\\r\\n  background-color: #ec8c2c;\\n}\\n.remove-button[data-v-a7074ed0] {\\r\\n    cursor: pointer;\\n}\\n.selected-ingredients-title[data-v-a7074ed0] {\\r\\n    font-size: 16px;\\r\\n    margin-bottom: 2px;\\n}\\n.full-width-dropdown[data-v-a7074ed0] {\\r\\n    margin-top: 10px;\\r\\n    width: 100%;\\r\\n    resize: vertical;\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzA3NGVkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/NmRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZpbHRlckNvbnRhaW5lcltkYXRhLXYtYTcwNzRlZDBdIHtcXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDElO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjY5YjcwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXG59XFxuLmZpbHRlckNvbnRhaW5lckRhcmtbZGF0YS12LWE3MDc0ZWQwXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM4YzJjO1xcbn1cXG4ucmVtb3ZlLWJ1dHRvbltkYXRhLXYtYTcwNzRlZDBdIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VsZWN0ZWQtaW5ncmVkaWVudHMtdGl0bGVbZGF0YS12LWE3MDc0ZWQwXSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG4uZnVsbC13aWR0aC1kcm9wZG93bltkYXRhLXYtYTcwNzRlZDBdIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=style&index=0&id=a7074ed0&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f899e7e51e3f7c4e"; }
/******/ }();
/******/ 
/******/ }
);