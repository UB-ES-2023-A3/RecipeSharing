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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    options: Array,\n    // List of options grouped by category\n    selectedValue: Array,\n    // Change the prop type to Array for multiple selections\n    label: String,\n    // Label for the select dropdown\n    groupTitle: String,\n    // Title for the selected group\n    choose: Boolean,\n    reset: Boolean\n  },\n  data() {\n    return {\n      localSelectedValue: this.selectedValue,\n      // Use a local value to bind to the select\n      selectedOptions: [],\n      // List to store selected items\n      dropdownFocused: false\n    };\n  },\n  methods: {\n    addSelectedOption() {\n      const selectedValue = this.localSelectedValue;\n      // Check if the selected value is valid and not already selected\n      if (this.choose == false) {\n        this.selectedOptions = [];\n      }\n      if (selectedValue && !this.selectedOptions.includes(selectedValue)) {\n        this.selectedOptions.push(selectedValue);\n        this.$emit('update:selectedValue', this.selectedOptions);\n      }\n    },\n    removeSelectedOption(index) {\n      this.selectedOptions.splice(index, 1);\n      this.localSelectedValue = '';\n    }\n  },\n  watch: {\n    reset(newVal) {\n      if (newVal == false) {\n        this.localSelectedValue = '';\n        this.selectedOptions = [];\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7OztBQTRCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/OWE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlRmlsdGVyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMj57eyBsYWJlbCB9fTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBEcm9wZG93biBzZWxlY3QgdG8gY2hvb3NlIG9wdGlvbnMgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgQGNoYW5nZT1cImFkZFNlbGVjdGVkT3B0aW9uXCIgY2xhc3M9XCJmdWxsLXdpZHRoLWRyb3Bkb3duXCIgdi1tb2RlbD1cImxvY2FsU2VsZWN0ZWRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiZHJvcGRvd25Gb2N1c2VkID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJkcm9wZG93bkZvY3VzZWQgPSBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGdyb3VwIHYtZm9yPVwiZ3JvdXAgaW4gb3B0aW9uc1wiIDpsYWJlbD1cImdyb3VwLmdyb3VwTmFtZVwiIDprZXk9XCJncm91cC5ncm91cE5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwib3B0aW9uIGluIGdyb3VwLm9wdGlvbnNcIiA6dmFsdWU9XCJvcHRpb25cIiA6a2V5PVwib3B0aW9uXCI+e3sgb3B0aW9uIH19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L29wdGdyb3VwPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIERpc3BsYXkgc2VsZWN0ZWQgdmFsdWVzIGFuZCBhbGxvdyByZW1vdmFsIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RlZC12YWx1ZXNcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VsZWN0ZWQtaW5ncmVkaWVudHMtdGl0bGVcIj57eyBncm91cFRpdGxlIH19PC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlbGVjdGVkLXZhbHVlXCIgdi1mb3I9XCIoc2VsZWN0ZWQsIGluZGV4KSBpbiBzZWxlY3RlZE9wdGlvbnNcIiA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZVNlbGVjdGVkT3B0aW9uKGluZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAge3sgc2VsZWN0ZWQgfX0gPHNwYW4gY2xhc3M9XCJyZW1vdmUtYnV0dG9uXCI+4pyWPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgb3B0aW9uczogQXJyYXksIC8vIExpc3Qgb2Ygb3B0aW9ucyBncm91cGVkIGJ5IGNhdGVnb3J5XHJcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZTogQXJyYXksIC8vIENoYW5nZSB0aGUgcHJvcCB0eXBlIHRvIEFycmF5IGZvciBtdWx0aXBsZSBzZWxlY3Rpb25zXHJcbiAgICAgICAgbGFiZWw6IFN0cmluZywgLy8gTGFiZWwgZm9yIHRoZSBzZWxlY3QgZHJvcGRvd25cclxuICAgICAgICBncm91cFRpdGxlOiBTdHJpbmcsIC8vIFRpdGxlIGZvciB0aGUgc2VsZWN0ZWQgZ3JvdXBcclxuICAgICAgICBjaG9vc2U6IEJvb2xlYW4sXHJcbiAgICAgICAgcmVzZXQ6IEJvb2xlYW4sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2NhbFNlbGVjdGVkVmFsdWU6IHRoaXMuc2VsZWN0ZWRWYWx1ZSwgLy8gVXNlIGEgbG9jYWwgdmFsdWUgdG8gYmluZCB0byB0aGUgc2VsZWN0XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uczogW10sIC8vIExpc3QgdG8gc3RvcmUgc2VsZWN0ZWQgaXRlbXNcclxuICAgICAgICAgICAgICAgICAgZHJvcGRvd25Gb2N1c2VkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYWRkU2VsZWN0ZWRPcHRpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLmxvY2FsU2VsZWN0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNlbGVjdGVkIHZhbHVlIGlzIHZhbGlkIGFuZCBub3QgYWxyZWFkeSBzZWxlY3RlZFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaG9vc2UgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgIXRoaXMuc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKHNlbGVjdGVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKHNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnNlbGVjdGVkVmFsdWUnLCB0aGlzLnNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVNlbGVjdGVkT3B0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxTZWxlY3RlZFZhbHVlID0gJyc7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHJlc2V0KG5ld1ZhbCkge1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU2VsZWN0ZWRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5maWx0ZXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjY5YjcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ucmVtb3ZlLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoLWRyb3Bkb3duIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbi5mb2N1c2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM4NDI4XHJcbn1cclxuXHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-a7074ed0\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"filterContainer\"\n};\nconst _hoisted_2 = {\n  class: \"titleFilterContainer\"\n};\nconst _hoisted_3 = {\n  class: \"dropdownContainer\"\n};\nconst _hoisted_4 = [\"label\"];\nconst _hoisted_5 = [\"value\"];\nconst _hoisted_6 = {\n  class: \"selected-values\"\n};\nconst _hoisted_7 = {\n  class: \"selected-ingredients-title\"\n};\nconst _hoisted_8 = [\"onClick\"];\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"remove-button\"\n}, \"✖\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Dropdown select to choose options \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.addSelectedOption && $options.addSelectedOption(...args)),\n    class: \"full-width-dropdown\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.localSelectedValue = $event),\n    onFocus: _cache[2] || (_cache[2] = $event => $data.dropdownFocused = true),\n    onBlur: _cache[3] || (_cache[3] = $event => $data.dropdownFocused = false)\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, group => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"optgroup\", {\n      label: group.groupName,\n      key: group.groupName\n    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group.options, option => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n        value: option,\n        key: option\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 9 /* TEXT, PROPS */, _hoisted_5);\n    }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_4);\n  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.localSelectedValue]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Display selected values and allow removal \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.groupTitle), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedOptions, (selected, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n      class: \"selected-value\",\n      key: index,\n      onClick: $event => $options.removeSelectedOption(index)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(selected) + \" \", 1 /* TEXT */), _hoisted_9], 8 /* PROPS */, _hoisted_8);\n  }), 128 /* KEYED_FRAGMENT */))])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9Ib21lRmlsdGVyRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3MDc0ZWQwJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUlBO0FBQUE7Ozs7QUFVQTtBQUFBOztBQUNBO0FBQUE7O0FBR0E7QUFBQTtBQUFBOzs7QUFuQkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUpBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvSG9tZUZpbHRlckRyb3Bkb3duLnZ1ZT85YTZmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVGaWx0ZXJDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyPnt7IGxhYmVsIH19PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIERyb3Bkb3duIHNlbGVjdCB0byBjaG9vc2Ugb3B0aW9ucyAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCBAY2hhbmdlPVwiYWRkU2VsZWN0ZWRPcHRpb25cIiBjbGFzcz1cImZ1bGwtd2lkdGgtZHJvcGRvd25cIiB2LW1vZGVsPVwibG9jYWxTZWxlY3RlZFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJkcm9wZG93bkZvY3VzZWQgPSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBAYmx1cj1cImRyb3Bkb3duRm9jdXNlZCA9IGZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0Z3JvdXAgdi1mb3I9XCJncm91cCBpbiBvcHRpb25zXCIgOmxhYmVsPVwiZ3JvdXAuZ3JvdXBOYW1lXCIgOmtleT1cImdyb3VwLmdyb3VwTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJvcHRpb24gaW4gZ3JvdXAub3B0aW9uc1wiIDp2YWx1ZT1cIm9wdGlvblwiIDprZXk9XCJvcHRpb25cIj57eyBvcHRpb24gfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvb3B0Z3JvdXA+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gRGlzcGxheSBzZWxlY3RlZCB2YWx1ZXMgYW5kIGFsbG93IHJlbW92YWwgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLXZhbHVlc1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWxlY3RlZC1pbmdyZWRpZW50cy10aXRsZVwiPnt7IGdyb3VwVGl0bGUgfX08L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVcIiB2LWZvcj1cIihzZWxlY3RlZCwgaW5kZXgpIGluIHNlbGVjdGVkT3B0aW9uc1wiIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlU2VsZWN0ZWRPcHRpb24oaW5kZXgpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBzZWxlY3RlZCB9fSA8c3BhbiBjbGFzcz1cInJlbW92ZS1idXR0b25cIj7inJY8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBvcHRpb25zOiBBcnJheSwgLy8gTGlzdCBvZiBvcHRpb25zIGdyb3VwZWQgYnkgY2F0ZWdvcnlcclxuICAgICAgICBzZWxlY3RlZFZhbHVlOiBBcnJheSwgLy8gQ2hhbmdlIHRoZSBwcm9wIHR5cGUgdG8gQXJyYXkgZm9yIG11bHRpcGxlIHNlbGVjdGlvbnNcclxuICAgICAgICBsYWJlbDogU3RyaW5nLCAvLyBMYWJlbCBmb3IgdGhlIHNlbGVjdCBkcm9wZG93blxyXG4gICAgICAgIGdyb3VwVGl0bGU6IFN0cmluZywgLy8gVGl0bGUgZm9yIHRoZSBzZWxlY3RlZCBncm91cFxyXG4gICAgICAgIGNob29zZTogQm9vbGVhbixcclxuICAgICAgICByZXNldDogQm9vbGVhbixcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvY2FsU2VsZWN0ZWRWYWx1ZTogdGhpcy5zZWxlY3RlZFZhbHVlLCAvLyBVc2UgYSBsb2NhbCB2YWx1ZSB0byBiaW5kIHRvIHRoZSBzZWxlY3RcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zOiBbXSwgLy8gTGlzdCB0byBzdG9yZSBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICBkcm9wZG93bkZvY3VzZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRTZWxlY3RlZE9wdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMubG9jYWxTZWxlY3RlZFZhbHVlO1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgc2VsZWN0ZWQgdmFsdWUgaXMgdmFsaWQgYW5kIG5vdCBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNob29zZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiAhdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMoc2VsZWN0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2goc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6c2VsZWN0ZWRWYWx1ZScsIHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlU2VsZWN0ZWRPcHRpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFNlbGVjdGVkVmFsdWUgPSAnJztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgcmVzZXQobmV3VmFsKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTZWxlY3RlZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLmZpbHRlckNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNjliNzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuXHJcbi5yZW1vdmUtYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkLWluZ3JlZGllbnRzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgtZHJvcGRvd24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmZvY3VzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzg0MjhcclxufVxyXG5cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=template&id=a7074ed0&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=style&index=0&id=a7074ed0&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=style&index=0&id=a7074ed0&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.filterContainer[data-v-a7074ed0] {\\r\\n    width: 10%;\\r\\n    height: 10%;\\r\\n    margin-top: 1%;\\r\\n    margin-bottom: 1%;\\r\\n    text-align: center;\\r\\n    background-color: #ffa500;\\r\\n    border: 1px solid #b69b70;\\r\\n    border-radius: 10px;\\r\\n    padding: 1%;\\n}\\n.remove-button[data-v-a7074ed0] {\\r\\n    cursor: pointer;\\n}\\n.selected-ingredients-title[data-v-a7074ed0] {\\r\\n    font-size: 16px;\\r\\n    margin-bottom: 2px;\\n}\\n.full-width-dropdown[data-v-a7074ed0] {\\r\\n    margin-top: 10px;\\r\\n    width: 100%;\\r\\n    resize: vertical;\\n}\\n.focused[data-v-a7074ed0] {\\r\\n  background-color: #dc8428\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzA3NGVkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0hvbWVGaWx0ZXJEcm9wZG93bi52dWU/NmRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZpbHRlckNvbnRhaW5lcltkYXRhLXYtYTcwNzRlZDBdIHtcXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDElO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjY5YjcwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXG59XFxuLnJlbW92ZS1idXR0b25bZGF0YS12LWE3MDc0ZWQwXSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlbGVjdGVkLWluZ3JlZGllbnRzLXRpdGxlW2RhdGEtdi1hNzA3NGVkMF0ge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuLmZ1bGwtd2lkdGgtZHJvcGRvd25bZGF0YS12LWE3MDc0ZWQwXSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG4uZm9jdXNlZFtkYXRhLXYtYTcwNzRlZDBdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzg0MjhcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomeFilterDropdown.vue?vue&type=style&index=0&id=a7074ed0&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "93a6f415cd625f06"; }
/******/ }();
/******/ 
/******/ }
);