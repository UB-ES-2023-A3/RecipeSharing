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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppCardRecipe_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AppCardRecipe.vue */ \"./src/components/AppCardRecipe.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    AppCardRecipe: _components_AppCardRecipe_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    recipes: Array,\n    visibleRecipes: Number,\n    username: String,\n    logged: Boolean,\n    type: String\n  },\n  data() {\n    return {\n      currentCardIndex: 0\n    };\n  },\n  computed: {\n    displayedRecipes() {\n      const startIndex = this.currentCardIndex;\n      const endIndex = startIndex + this.visibleRecipes;\n      return this.recipes.slice(startIndex, endIndex);\n    },\n    isAtBeginning() {\n      return this.currentCardIndex === 0;\n    },\n    isAtEnd() {\n      return this.currentCardIndex + this.visibleRecipes >= this.recipes.length;\n    }\n  },\n  methods: {\n    moveCarousel(step) {\n      const newIndex = this.currentCardIndex + step;\n      if (newIndex >= 0 && newIndex <= this.recipes.length - this.visibleRecipes) {\n        this.currentCardIndex = newIndex;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7QUFxQkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlP2NjZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNhcm91c2VsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwibW92ZUNhcm91c2VsKC0xKVwiIGNsYXNzPVwiYXJyb3ctYnV0dG9uIGxlZnQtYXJyb3dcIiA6Y2xhc3M9XCJ7ICdkaXNhYmxlZC1idXR0b24nOiBpc0F0QmVnaW5uaW5nIH1cIj7il4Q8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxBcHBDYXJkUmVjaXBlXHJcbiAgICAgICAgICB2LWZvcj1cIihyZWNpcGUsIGluZGV4KSBpbiBkaXNwbGF5ZWRSZWNpcGVzXCJcclxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICA6dHlwZT1cInRoaXMudHlwZVwiXHJcbiAgICAgICAgICA6cmVjaXBlPVwicmVjaXBlXCJcclxuICAgICAgICAgIDpsb2dnZWQ9XCJ0aGlzLmxvZ2dlZFwiXHJcbiAgICAgICAgICA6dXNlcm5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgPjwvQXBwQ2FyZFJlY2lwZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwibW92ZUNhcm91c2VsKDEpXCIgY2xhc3M9XCJhcnJvdy1idXR0b24gcmlnaHQtYXJyb3dcIiA6Y2xhc3M9XCJ7ICdkaXNhYmxlZC1idXR0b24nOiBpc0F0RW5kIH1cIj7ilro8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBBcHBDYXJkUmVjaXBlIGZyb20gJ0AvY29tcG9uZW50cy9BcHBDYXJkUmVjaXBlLnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7QXBwQ2FyZFJlY2lwZX0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHJlY2lwZXM6IEFycmF5LFxyXG4gICAgICAgIHZpc2libGVSZWNpcGVzOiBOdW1iZXIsXHJcbiAgICAgICAgdXNlcm5hbWU6IFN0cmluZyxcclxuICAgICAgICBsb2dnZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudENhcmRJbmRleDogMCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZGlzcGxheWVkUmVjaXBlcygpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuY3VycmVudENhcmRJbmRleDtcclxuICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgdGhpcy52aXNpYmxlUmVjaXBlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjaXBlcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0F0QmVnaW5uaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FyZEluZGV4ID09PSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNBdEVuZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudENhcmRJbmRleCArIHRoaXMudmlzaWJsZVJlY2lwZXMgPj0gdGhpcy5yZWNpcGVzLmxlbmd0aDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBtb3ZlQ2Fyb3VzZWwoc3RlcCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuY3VycmVudENhcmRJbmRleCArIHN0ZXA7XHJcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwICYmIG5ld0luZGV4IDw9IHRoaXMucmVjaXBlcy5sZW5ndGggLSB0aGlzLnZpc2libGVSZWNpcGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkSW5kZXggPSBuZXdJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLmNhcmQtY2Fyb3VzZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0byAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYXJyb3ctYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsZXg6IDAgMCBhdXRvOyAvKiBFc3RhYmxlY2UgZWwgYW5jaG8gZmlqbyBwYXJhIGxvcyBib3RvbmVzICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBBc2VndXJhIHF1ZSBsb3MgYm90b25lcyB0ZW5nYW4gbGEgbWlzbWEgYWx0dXJhIHF1ZSBsYXMgdGFyamV0YXMgKi9cclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdy1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODg0NDsgLyogQ2FtYmlhIGVsIGNvbG9yIGFsIHBhc2FyIGVsIGN1cnNvciBwb3IgZW5jaW1hICovXHJcbn1cclxuXHJcbi5kaXNhYmxlZC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IC8qIENvbG9yIGRlIGZvbmRvIGdyaXMgcGFyYSBib3RvbmVzIGRlc2hhYmlsaXRhZG9zICovXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIERlc2hhYmlsaXRhciBpbnRlcmFjY2nDs24gY29uIGVsIGJvdMOzbiAqL1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IC8qIENhbWJpYXIgZWwgY3Vyc29yIGEgXCJubyBwZXJtaXRpZG9cIiAqL1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-74010ed1\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"card-carousel\"\n};\nconst _hoisted_2 = {\n  class: \"carousel-container\"\n};\nconst _hoisted_3 = {\n  class: \"cards-container\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppCardRecipe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppCardRecipe\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[0] || (_cache[0] = $event => $options.moveCarousel(-1)),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"arrow-button left-arrow\", {\n      'disabled-button': $options.isAtBeginning\n    }])\n  }, \"◄\", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.displayedRecipes, (recipe, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AppCardRecipe, {\n      key: index,\n      type: this.type,\n      recipe: recipe,\n      logged: this.logged,\n      username: $props.username\n    }, null, 8 /* PROPS */, [\"type\", \"recipe\", \"logged\", \"username\"]);\n  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = $event => $options.moveCarousel(1)),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"arrow-button right-arrow\", {\n      'disabled-button': $options.isAtEnd\n    }])\n  }, \"►\", 2 /* CLASS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0MDEwZWQxJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUVBO0FBQUE7OztBQUhBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/Y2NmMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtY2Fyb3VzZWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJtb3ZlQ2Fyb3VzZWwoLTEpXCIgY2xhc3M9XCJhcnJvdy1idXR0b24gbGVmdC1hcnJvd1wiIDpjbGFzcz1cInsgJ2Rpc2FibGVkLWJ1dHRvbic6IGlzQXRCZWdpbm5pbmcgfVwiPuKXhDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPEFwcENhcmRSZWNpcGVcclxuICAgICAgICAgIHYtZm9yPVwiKHJlY2lwZSwgaW5kZXgpIGluIGRpc3BsYXllZFJlY2lwZXNcIlxyXG4gICAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgIDp0eXBlPVwidGhpcy50eXBlXCJcclxuICAgICAgICAgIDpyZWNpcGU9XCJyZWNpcGVcIlxyXG4gICAgICAgICAgOmxvZ2dlZD1cInRoaXMubG9nZ2VkXCJcclxuICAgICAgICAgIDp1c2VybmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICA+PC9BcHBDYXJkUmVjaXBlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJtb3ZlQ2Fyb3VzZWwoMSlcIiBjbGFzcz1cImFycm93LWJ1dHRvbiByaWdodC1hcnJvd1wiIDpjbGFzcz1cInsgJ2Rpc2FibGVkLWJ1dHRvbic6IGlzQXRFbmQgfVwiPuKWujwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcENhcmRSZWNpcGUgZnJvbSAnQC9jb21wb25lbnRzL0FwcENhcmRSZWNpcGUudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtBcHBDYXJkUmVjaXBlfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcmVjaXBlczogQXJyYXksXHJcbiAgICAgICAgdmlzaWJsZVJlY2lwZXM6IE51bWJlcixcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbixcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2FyZEluZGV4OiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBkaXNwbGF5ZWRSZWNpcGVzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5jdXJyZW50Q2FyZEluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyB0aGlzLnZpc2libGVSZWNpcGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNpcGVzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzQXRCZWdpbm5pbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDYXJkSW5kZXggPT09IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0F0RW5kKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FyZEluZGV4ICsgdGhpcy52aXNpYmxlUmVjaXBlcyA+PSB0aGlzLnJlY2lwZXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG1vdmVDYXJvdXNlbChzdGVwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5jdXJyZW50Q2FyZEluZGV4ICsgc3RlcDtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPD0gdGhpcy5yZWNpcGVzLmxlbmd0aCAtIHRoaXMudmlzaWJsZVJlY2lwZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmRJbmRleCA9IG5ld0luZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uY2FyZC1jYXJvdXNlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGdhcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hcnJvdy1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleDogMCAwIGF1dG87IC8qIEVzdGFibGVjZSBlbCBhbmNobyBmaWpvIHBhcmEgbG9zIGJvdG9uZXMgKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEFzZWd1cmEgcXVlIGxvcyBib3RvbmVzIHRlbmdhbiBsYSBtaXNtYSBhbHR1cmEgcXVlIGxhcyB0YXJqZXRhcyAqL1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFycm93LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ODQ0OyAvKiBDYW1iaWEgZWwgY29sb3IgYWwgcGFzYXIgZWwgY3Vyc29yIHBvciBlbmNpbWEgKi9cclxufVxyXG5cclxuLmRpc2FibGVkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgLyogQ29sb3IgZGUgZm9uZG8gZ3JpcyBwYXJhIGJvdG9uZXMgZGVzaGFiaWxpdGFkb3MgKi9cclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogRGVzaGFiaWxpdGFyIGludGVyYWNjacOzbiBjb24gZWwgYm90w7NuICovXHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgLyogQ2FtYmlhciBlbCBjdXJzb3IgYSBcIm5vIHBlcm1pdGlkb1wiICovXHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=style&index=0&id=74010ed1&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=style&index=0&id=74010ed1&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.card-carousel[data-v-74010ed1] {\\r\\n    text-align: center;\\n}\\n.carousel-container[data-v-74010ed1] {\\r\\n    display: flex;\\r\\n    flex-wrap: nowrap;\\r\\n    overflow-x: auto;\\r\\n    gap: 20px;\\r\\n    padding: 40px;\\r\\n    border-radius: 4px;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    margin: 15px auto 10px;\\r\\n    max-width: 100%;\\n}\\n.carousel-container[data-v-74010ed1] {\\r\\n  display: flex;\\n}\\n.arrow-button[data-v-74010ed1] {\\r\\n  background-color: #ff5733;\\r\\n  color: white;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  padding: 10px;\\r\\n  cursor: pointer;\\r\\n  flex: 0 0 auto; /* Establece el ancho fijo para los botones */\\r\\n  height: 100%; /* Asegura que los botones tengan la misma altura que las tarjetas */\\n}\\nbutton[data-v-74010ed1] {\\r\\n    margin-top: 10px;\\r\\n    background-color: #ff5733;\\r\\n    color: white;\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    padding: 10px;\\r\\n    cursor: pointer;\\n}\\n.arrow-button[data-v-74010ed1]:hover {\\r\\n    background-color: #ff8844; /* Cambia el color al pasar el cursor por encima */\\n}\\n.disabled-button[data-v-74010ed1] {\\r\\n  background-color: #ccc; /* Color de fondo gris para botones deshabilitados */\\r\\n  pointer-events: none; /* Deshabilitar interacción con el botón */\\r\\n  cursor: not-allowed; /* Cambiar el cursor a \\\"no permitido\\\" */\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDAxMGVkMSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/MzAwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmQtY2Fyb3VzZWxbZGF0YS12LTc0MDEwZWQxXSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNhcm91c2VsLWNvbnRhaW5lcltkYXRhLXYtNzQwMTBlZDFdIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDE1cHggYXV0byAxMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5jYXJvdXNlbC1jb250YWluZXJbZGF0YS12LTc0MDEwZWQxXSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYXJyb3ctYnV0dG9uW2RhdGEtdi03NDAxMGVkMV0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmbGV4OiAwIDAgYXV0bzsgLyogRXN0YWJsZWNlIGVsIGFuY2hvIGZpam8gcGFyYSBsb3MgYm90b25lcyAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlOyAvKiBBc2VndXJhIHF1ZSBsb3MgYm90b25lcyB0ZW5nYW4gbGEgbWlzbWEgYWx0dXJhIHF1ZSBsYXMgdGFyamV0YXMgKi9cXG59XFxuYnV0dG9uW2RhdGEtdi03NDAxMGVkMV0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hcnJvdy1idXR0b25bZGF0YS12LTc0MDEwZWQxXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjg4NDQ7IC8qIENhbWJpYSBlbCBjb2xvciBhbCBwYXNhciBlbCBjdXJzb3IgcG9yIGVuY2ltYSAqL1xcbn1cXG4uZGlzYWJsZWQtYnV0dG9uW2RhdGEtdi03NDAxMGVkMV0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgLyogQ29sb3IgZGUgZm9uZG8gZ3JpcyBwYXJhIGJvdG9uZXMgZGVzaGFiaWxpdGFkb3MgKi9cXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBEZXNoYWJpbGl0YXIgaW50ZXJhY2Npw7NuIGNvbiBlbCBib3TDs24gKi9cXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IC8qIENhbWJpYXIgZWwgY3Vyc29yIGEgXFxcIm5vIHBlcm1pdGlkb1xcXCIgKi9cXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=style&index=0&id=74010ed1&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7eb653e7f3e8be38"; }
/******/ }();
/******/ 
/******/ }
);