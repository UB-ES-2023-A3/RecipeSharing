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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    recipe: Object\n  },\n  data() {\n    return {\n      showPopup: false\n    };\n  },\n  methods: {\n    togglePopup() {\n      this.showPopup = !this.showPopup;\n    },\n    parseText(listString) {\n      // Elimina los corchetes [ y ]\n      const sinCorchetes = listString.replace(/\\[|\\]/g, '');\n\n      // Elimina las comillas simples '\n      const sinComillasSimples = sinCorchetes.replace(/'/g, '');\n\n      // Divide la cadena en un array utilizando la coma como separador\n      const arrayIngredientes = sinComillasSimples.split(',');\n      return arrayIngredientes;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRSZWNpcGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcENhcmRSZWNpcGUudnVlPzg3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicmVjaXBlLWNhcmRcIj5cbiAgICA8ZGl2IEBjbGljaz1cInRvZ2dsZVBvcHVwXCIgY2xhc3M9XCJyZWNpcGUtdGl0bGVcIj5cbiAgICAgIDxoMj57eyB0aGlzLnJlY2lwZS50aXRsZSB9fTwvaDI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwic2hvd1BvcHVwXCIgY2xhc3M9XCJwb3B1cFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbGFibGUtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDI+e3sgdGhpcy5yZWNpcGUudGl0bGUgfX08L2gyPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5DcmVhdGlvbiBEYXRlOjwvc3Ryb25nPiB7eyB0aGlzLnJlY2lwZS5jcmVhdGlvbl9kYXRlIH19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDM+SW5ncmVkaWVudHM8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoc3RlcCwgaW5kZXgpIGluIHRoaXMucGFyc2VUZXh0KHRoaXMucmVjaXBlLmluZ3JlZGllbnRzKVwiIDprZXk9XCJpbmRleFwiPnt7IHN0ZXAgfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPkluc3RydWN0aW9uczwvaDM+XG4gICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihzdGVwLCBpbmRleCkgaW4gdGhpcy5yZWNpcGUuaW5zdHJ1Y3Rpb25zLnNwbGl0KCdcXG4nKVwiIDprZXk9XCJpbmRleFwiPnt7IHN0ZXAgfX08L2xpPlxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPkFsbGVyZ2VuczwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihzdGVwLCBpbmRleCkgaW4gdGhpcy5wYXJzZVRleHQodGhpcy5yZWNpcGUuYWxsZXJnZW5zKVwiIDprZXk9XCJpbmRleFwiPnt7IHN0ZXAgfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlUG9wdXBcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICByZWNpcGU6IE9iamVjdCxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlUG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dQb3B1cCA9ICF0aGlzLnNob3dQb3B1cDtcbiAgICB9LFxuICAgIHBhcnNlVGV4dChsaXN0U3RyaW5nKSB7XG4gICAgICAvLyBFbGltaW5hIGxvcyBjb3JjaGV0ZXMgWyB5IF1cbiAgICAgIGNvbnN0IHNpbkNvcmNoZXRlcyA9IGxpc3RTdHJpbmcucmVwbGFjZSgvXFxbfFxcXS9nLCAnJyk7XG5cbiAgICAgIC8vIEVsaW1pbmEgbGFzIGNvbWlsbGFzIHNpbXBsZXMgJ1xuICAgICAgY29uc3Qgc2luQ29taWxsYXNTaW1wbGVzID0gc2luQ29yY2hldGVzLnJlcGxhY2UoLycvZywgJycpO1xuXG4gICAgICAvLyBEaXZpZGUgbGEgY2FkZW5hIGVuIHVuIGFycmF5IHV0aWxpemFuZG8gbGEgY29tYSBjb21vIHNlcGFyYWRvclxuICAgICAgY29uc3QgYXJyYXlJbmdyZWRpZW50ZXMgPSBzaW5Db21pbGxhc1NpbXBsZXMuc3BsaXQoJywnKTtcblxuICAgICAgcmV0dXJuIGFycmF5SW5ncmVkaWVudGVzO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucmVjaXBlLWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlY2lwZS10aXRsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNTFkMWRlNztcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNWU1YTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXgtd2lkdGg6IDYwMHB4OyAvKiBBbmNobyBtw6FzIGdyYW5kZSAqL1xuICBtYXgtaGVpZ2h0OiA1MDBweDsgLyogQWx0byBtw6FzIGdyYW5kZSAqL1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtOyAvKiBUYW1hw7FvIGRlIHTDrXR1bG8gbcOhcyBncmFuZGUgKi9cbn1cblxuLnNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLyogUmVzdG8gZGUgZXN0aWxvcyAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=template&id=b50fc382&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=template&id=b50fc382&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-b50fc382\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"recipe-card\"\n};\nconst _hoisted_2 = {\n  key: 0,\n  class: \"popup\"\n};\nconst _hoisted_3 = {\n  class: \"popup-content\"\n};\nconst _hoisted_4 = {\n  class: \"scrollable-content\"\n};\nconst _hoisted_5 = {\n  class: \"section\"\n};\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Creation Date:\", -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"section\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Ingredients\", -1 /* HOISTED */));\nconst _hoisted_9 = {\n  class: \"section\"\n};\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Instructions\", -1 /* HOISTED */));\nconst _hoisted_11 = {\n  class: \"section\"\n};\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, \"Allergens\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.togglePopup && $options.togglePopup(...args)),\n    class: \"recipe-title\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.recipe.title), 1 /* TEXT */)]), $data.showPopup ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.recipe.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.recipe.creation_date), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.parseText(this.recipe.ingredients), (step, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: index\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(step), 1 /* TEXT */);\n  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ol\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.recipe.instructions.split('\\n'), (step, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: index\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(step), 1 /* TEXT */);\n  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.parseText(this.recipe.allergens), (step, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: index\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(step), 1 /* TEXT */);\n  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.togglePopup && $options.togglePopup(...args))\n  }, \"Close\")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkUmVjaXBlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNTBmYzM4MiZzY29wZWQ9dHJ1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7OztBQUlBOzs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQUE7QUFDQTs7QUFLQTtBQUFBO0FBQ0E7O0FBS0E7QUFBQTtBQUNBOzs7QUF4QkE7QUFDQTtBQUFBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkUmVjaXBlLnZ1ZT84Nzc5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkXCI+XG4gICAgPGRpdiBAY2xpY2s9XCJ0b2dnbGVQb3B1cFwiIGNsYXNzPVwicmVjaXBlLXRpdGxlXCI+XG4gICAgICA8aDI+e3sgdGhpcy5yZWNpcGUudGl0bGUgfX08L2gyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cInNob3dQb3B1cFwiIGNsYXNzPVwicG9wdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGxhYmxlLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgyPnt7IHRoaXMucmVjaXBlLnRpdGxlIH19PC9oMj5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+Q3JlYXRpb24gRGF0ZTo8L3N0cm9uZz4ge3sgdGhpcy5yZWNpcGUuY3JlYXRpb25fZGF0ZSB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPkluZ3JlZGllbnRzPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKHN0ZXAsIGluZGV4KSBpbiB0aGlzLnBhcnNlVGV4dCh0aGlzLnJlY2lwZS5pbmdyZWRpZW50cylcIiA6a2V5PVwiaW5kZXhcIj57eyBzdGVwIH19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz5JbnN0cnVjdGlvbnM8L2gzPlxuICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoc3RlcCwgaW5kZXgpIGluIHRoaXMucmVjaXBlLmluc3RydWN0aW9ucy5zcGxpdCgnXFxuJylcIiA6a2V5PVwiaW5kZXhcIj57eyBzdGVwIH19PC9saT5cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz5BbGxlcmdlbnM8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoc3RlcCwgaW5kZXgpIGluIHRoaXMucGFyc2VUZXh0KHRoaXMucmVjaXBlLmFsbGVyZ2VucylcIiA6a2V5PVwiaW5kZXhcIj57eyBzdGVwIH19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVBvcHVwXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcmVjaXBlOiBPYmplY3QsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZVBvcHVwKCkge1xuICAgICAgdGhpcy5zaG93UG9wdXAgPSAhdGhpcy5zaG93UG9wdXA7XG4gICAgfSxcbiAgICBwYXJzZVRleHQobGlzdFN0cmluZykge1xuICAgICAgLy8gRWxpbWluYSBsb3MgY29yY2hldGVzIFsgeSBdXG4gICAgICBjb25zdCBzaW5Db3JjaGV0ZXMgPSBsaXN0U3RyaW5nLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpO1xuXG4gICAgICAvLyBFbGltaW5hIGxhcyBjb21pbGxhcyBzaW1wbGVzICdcbiAgICAgIGNvbnN0IHNpbkNvbWlsbGFzU2ltcGxlcyA9IHNpbkNvcmNoZXRlcy5yZXBsYWNlKC8nL2csICcnKTtcblxuICAgICAgLy8gRGl2aWRlIGxhIGNhZGVuYSBlbiB1biBhcnJheSB1dGlsaXphbmRvIGxhIGNvbWEgY29tbyBzZXBhcmFkb3JcbiAgICAgIGNvbnN0IGFycmF5SW5ncmVkaWVudGVzID0gc2luQ29taWxsYXNTaW1wbGVzLnNwbGl0KCcsJyk7XG5cbiAgICAgIHJldHVybiBhcnJheUluZ3JlZGllbnRlcztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnJlY2lwZS1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWNpcGUtdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTUxZDFkZTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjVlNWE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWF4LXdpZHRoOiA2MDBweDsgLyogQW5jaG8gbcOhcyBncmFuZGUgKi9cbiAgbWF4LWhlaWdodDogNTAwcHg7IC8qIEFsdG8gbcOhcyBncmFuZGUgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDEuNXJlbTsgLyogVGFtYcOxbyBkZSB0w610dWxvIG3DoXMgZ3JhbmRlICovXG59XG5cbi5zZWN0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi8qIFJlc3RvIGRlIGVzdGlsb3MgKi9cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=template&id=b50fc382&scoped=true\n");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=style&index=0&id=b50fc382&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=style&index=0&id=b50fc382&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.recipe-card[data-v-b50fc382] {\\n  cursor: pointer;\\n  text-align: center;\\n}\\n.recipe-title[data-v-b50fc382] {\\n  cursor: pointer;\\n  text-align: center;\\n  border-radius: 4px;\\n  background-color: #a51d1de7;\\n  color: white;\\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n  max-width: 250px;\\n  padding: 10px;\\n}\\n.popup[data-v-b50fc382] {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 999;\\n  background: rgba(0, 0, 0, 0.8);\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.popup-content[data-v-b50fc382] {\\n  background-color: #625e5a;\\n  border: 1px solid #ccc;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n  max-width: 600px; /* Ancho más grande */\\n  max-height: 500px; /* Alto más grande */\\n  padding: 20px;\\n  overflow-y: auto;\\n}\\n.section h2[data-v-b50fc382] {\\n  font-size: 1.5rem; /* Tamaño de título más grande */\\n}\\n.section h3[data-v-b50fc382] {\\n  font-size: 1.2rem;\\n}\\n\\n/* Resto de estilos */\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRSZWNpcGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjUwZmMzODImc2NvcGVkPXRydWUmbGFuZz1jc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkUmVjaXBlLnZ1ZT9kYjI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9ub1NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnJlY2lwZS1jYXJkW2RhdGEtdi1iNTBmYzM4Ml0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucmVjaXBlLXRpdGxlW2RhdGEtdi1iNTBmYzM4Ml0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1MWQxZGU3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucG9wdXBbZGF0YS12LWI1MGZjMzgyXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogOTk5O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXAtY29udGVudFtkYXRhLXYtYjUwZmMzODJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjVlNWE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1heC13aWR0aDogNjAwcHg7IC8qIEFuY2hvIG3DoXMgZ3JhbmRlICovXFxuICBtYXgtaGVpZ2h0OiA1MDBweDsgLyogQWx0byBtw6FzIGdyYW5kZSAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5zZWN0aW9uIGgyW2RhdGEtdi1iNTBmYzM4Ml0ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07IC8qIFRhbWHDsW8gZGUgdMOtdHVsbyBtw6FzIGdyYW5kZSAqL1xcbn1cXG4uc2VjdGlvbiBoM1tkYXRhLXYtYjUwZmMzODJdIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiBSZXN0byBkZSBlc3RpbG9zICovXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardRecipe.vue?vue&type=style&index=0&id=b50fc382&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "593a8933461b352a"; }
/******/ }();
/******/ 
/******/ }
);