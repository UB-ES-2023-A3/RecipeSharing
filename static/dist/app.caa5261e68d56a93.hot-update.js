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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    options: Array,\n    // Array de opciones para el dropdown\n    selectedValues: Array // Valores seleccionados (prop)\n  },\n\n  data() {\n    return {\n      selectedOptions: this.selectedValues || [] // Inicializa con valores proporcionados\n    };\n  },\n\n  methods: {\n    updateSelected(event) {\n      // Al cambiar la selección, actualiza el array de opciones seleccionadas\n      const selected = Array.from(event.target.selectedOptions, option => option.value);\n      this.selectedOptions = selected;\n      this.$emit(\"update:selectedValues\", selected); // Emite un evento para notificar al padre\n    },\n\n    removeOption(option) {\n      // Elimina una opción de las seleccionadas\n      this.selectedOptions = this.selectedOptions.filter(item => item !== option);\n      this.$emit(\"update:selectedValues\", this.selectedOptions); // Emite un evento para notificar al padre\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiO0FBb0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBEcm9wZG93blNlbGVjdC52dWU/MzdhMiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHNlbGVjdCBAY2hhbmdlPVwidXBkYXRlU2VsZWN0ZWRcIiBjbGFzcz1cImZ1bGwtd2lkdGgtZHJvcGRvd25cIiBtdWx0aXBsZT5cbiAgICAgIDxvcHRpb24gdi1mb3I9XCJncm91cCBpbiBvcHRpb25zXCIgOmxhYmVsPVwiZ3JvdXAuZ3JvdXBOYW1lXCIgOmtleT1cImdyb3VwLmdyb3VwTmFtZVwiPlxuICAgICAgICA8b3B0Z3JvdXAgOmxhYmVsPVwiZ3JvdXAuZ3JvdXBOYW1lXCI+XG4gICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9wdGlvbiBpbiBncm91cC5vcHRpb25zXCIgOnZhbHVlPVwib3B0aW9uXCIgOmtleT1cIm9wdGlvblwiPnt7IG9wdGlvbiB9fTwvb3B0aW9uPlxuICAgICAgICA8L29wdGdyb3VwPlxuICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtdmFsdWVzXCI+XG4gICAgICA8ZGl2IHYtZm9yPVwic2VsZWN0ZWRPcHRpb24gaW4gc2VsZWN0ZWRPcHRpb25zXCIgOmtleT1cInNlbGVjdGVkT3B0aW9uXCI+XG4gICAgICAgIHt7IHNlbGVjdGVkT3B0aW9uIH19XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwicmVtb3ZlT3B0aW9uKHNlbGVjdGVkT3B0aW9uKVwiPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBvcHRpb25zOiBBcnJheSwgLy8gQXJyYXkgZGUgb3BjaW9uZXMgcGFyYSBlbCBkcm9wZG93blxuICAgIHNlbGVjdGVkVmFsdWVzOiBBcnJheSwgLy8gVmFsb3JlcyBzZWxlY2Npb25hZG9zIChwcm9wKVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZE9wdGlvbnM6IHRoaXMuc2VsZWN0ZWRWYWx1ZXMgfHwgW10sIC8vIEluaWNpYWxpemEgY29uIHZhbG9yZXMgcHJvcG9yY2lvbmFkb3NcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICAgIC8vIEFsIGNhbWJpYXIgbGEgc2VsZWNjacOzbiwgYWN0dWFsaXphIGVsIGFycmF5IGRlIG9wY2lvbmVzIHNlbGVjY2lvbmFkYXNcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zLCAob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGU6c2VsZWN0ZWRWYWx1ZXNcIiwgc2VsZWN0ZWQpOyAvLyBFbWl0ZSB1biBldmVudG8gcGFyYSBub3RpZmljYXIgYWwgcGFkcmVcbiAgICB9LFxuICAgIHJlbW92ZU9wdGlvbihvcHRpb24pIHtcbiAgICAgIC8vIEVsaW1pbmEgdW5hIG9wY2nDs24gZGUgbGFzIHNlbGVjY2lvbmFkYXNcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBvcHRpb24pO1xuICAgICAgdGhpcy4kZW1pdChcInVwZGF0ZTpzZWxlY3RlZFZhbHVlc1wiLCB0aGlzLnNlbGVjdGVkT3B0aW9ucyk7IC8vIEVtaXRlIHVuIGV2ZW50byBwYXJhIG5vdGlmaWNhciBhbCBwYWRyZVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = [\"label\"];\nconst _hoisted_2 = [\"label\"];\nconst _hoisted_3 = [\"value\"];\nconst _hoisted_4 = {\n  class: \"selected-values\"\n};\nconst _hoisted_5 = [\"onClick\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.updateSelected && $options.updateSelected(...args)),\n    class: \"full-width-dropdown\",\n    multiple: \"\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, group => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n      label: group.groupName,\n      key: group.groupName\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"optgroup\", {\n      label: group.groupName\n    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group.options, option => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n        value: option,\n        key: option\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 9 /* TEXT, PROPS */, _hoisted_3);\n    }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_2)], 8 /* PROPS */, _hoisted_1);\n  }), 128 /* KEYED_FRAGMENT */))], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedOptions, selectedOption => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: selectedOption\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(selectedOption) + \" \", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n      onClick: $event => $options.removeOption(selectedOption)\n    }, \"Remove\", 8 /* PROPS */, _hoisted_5)]);\n  }), 128 /* KEYED_FRAGMENT */))])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBEcm9wZG93blNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTU0Y2I1ZWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBO0FBQUE7OztBQVRBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcERyb3Bkb3duU2VsZWN0LnZ1ZT8zN2EyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8c2VsZWN0IEBjaGFuZ2U9XCJ1cGRhdGVTZWxlY3RlZFwiIGNsYXNzPVwiZnVsbC13aWR0aC1kcm9wZG93blwiIG11bHRpcGxlPlxuICAgICAgPG9wdGlvbiB2LWZvcj1cImdyb3VwIGluIG9wdGlvbnNcIiA6bGFiZWw9XCJncm91cC5ncm91cE5hbWVcIiA6a2V5PVwiZ3JvdXAuZ3JvdXBOYW1lXCI+XG4gICAgICAgIDxvcHRncm91cCA6bGFiZWw9XCJncm91cC5ncm91cE5hbWVcIj5cbiAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwib3B0aW9uIGluIGdyb3VwLm9wdGlvbnNcIiA6dmFsdWU9XCJvcHRpb25cIiA6a2V5PVwib3B0aW9uXCI+e3sgb3B0aW9uIH19PC9vcHRpb24+XG4gICAgICAgIDwvb3B0Z3JvdXA+XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cblxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RlZC12YWx1ZXNcIj5cbiAgICAgIDxkaXYgdi1mb3I9XCJzZWxlY3RlZE9wdGlvbiBpbiBzZWxlY3RlZE9wdGlvbnNcIiA6a2V5PVwic2VsZWN0ZWRPcHRpb25cIj5cbiAgICAgICAge3sgc2VsZWN0ZWRPcHRpb24gfX1cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJyZW1vdmVPcHRpb24oc2VsZWN0ZWRPcHRpb24pXCI+UmVtb3ZlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIG9wdGlvbnM6IEFycmF5LCAvLyBBcnJheSBkZSBvcGNpb25lcyBwYXJhIGVsIGRyb3Bkb3duXG4gICAgc2VsZWN0ZWRWYWx1ZXM6IEFycmF5LCAvLyBWYWxvcmVzIHNlbGVjY2lvbmFkb3MgKHByb3ApXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkT3B0aW9uczogdGhpcy5zZWxlY3RlZFZhbHVlcyB8fCBbXSwgLy8gSW5pY2lhbGl6YSBjb24gdmFsb3JlcyBwcm9wb3JjaW9uYWRvc1xuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVTZWxlY3RlZChldmVudCkge1xuICAgICAgLy8gQWwgY2FtYmlhciBsYSBzZWxlY2Npw7NuLCBhY3R1YWxpemEgZWwgYXJyYXkgZGUgb3BjaW9uZXMgc2VsZWNjaW9uYWRhc1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMsIChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy4kZW1pdChcInVwZGF0ZTpzZWxlY3RlZFZhbHVlc1wiLCBzZWxlY3RlZCk7IC8vIEVtaXRlIHVuIGV2ZW50byBwYXJhIG5vdGlmaWNhciBhbCBwYWRyZVxuICAgIH0sXG4gICAgcmVtb3ZlT3B0aW9uKG9wdGlvbikge1xuICAgICAgLy8gRWxpbWluYSB1bmEgb3BjacOzbiBkZSBsYXMgc2VsZWNjaW9uYWRhc1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9wdGlvbik7XG4gICAgICB0aGlzLiRlbWl0KFwidXBkYXRlOnNlbGVjdGVkVmFsdWVzXCIsIHRoaXMuc2VsZWN0ZWRPcHRpb25zKTsgLy8gRW1pdGUgdW4gZXZlbnRvIHBhcmEgbm90aWZpY2FyIGFsIHBhZHJlXG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppDropdownSelect.vue?vue&type=template&id=154cb5ee\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "54a8762f524d88b2"; }
/******/ }();
/******/ 
/******/ }
);