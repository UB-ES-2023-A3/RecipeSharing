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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppCardRecipe_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AppCardRecipe.vue */ \"./src/components/AppCardRecipe.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    AppCardRecipe: _components_AppCardRecipe_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    recipes: Array,\n    visibleRecipes: Number,\n    username: String,\n    logged: Boolean,\n    type: String\n  },\n  data() {\n    return {\n      currentCardIndex: 0,\n      cardHeight: 0\n    };\n  },\n  computed: {\n    displayedRecipes() {\n      const startIndex = this.currentCardIndex;\n      const endIndex = startIndex + this.visibleRecipes;\n      return this.recipes.slice(startIndex, endIndex);\n    },\n    isAtBeginning() {\n      return this.currentCardIndex === 0;\n    },\n    isAtEnd() {\n      return this.currentCardIndex + this.visibleRecipes >= this.recipes.length;\n    }\n  },\n  methods: {\n    moveCarousel(step) {\n      const newIndex = this.currentCardIndex + step;\n      if (newIndex >= 0 && newIndex <= this.recipes.length - this.visibleRecipes) {\n        this.currentCardIndex = newIndex;\n      }\n    },\n    updateCardHeight(height) {\n      this.cardHeight = height;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7QUF1QkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/Y2NmMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtY2Fyb3VzZWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJtb3ZlQ2Fyb3VzZWwoLTEpXCIgY2xhc3M9XCJhcnJvdy1idXR0b24gbGVmdC1hcnJvd1wiIDpjbGFzcz1cInsgJ2Rpc2FibGVkLWJ1dHRvbic6IGlzQXRCZWdpbm5pbmcgfVwiIDpzdHlsZT1cInsgaGVpZ2h0OiBjYXJkSGVpZ2h0ICsgJ3B4JyB9XCI+4peEPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1jb250YWluZXJcIj5cclxuICAgICAgICA8QXBwQ2FyZFJlY2lwZVxyXG4gICAgICAgICAgdi1mb3I9XCIocmVjaXBlLCBpbmRleCkgaW4gZGlzcGxheWVkUmVjaXBlc1wiXHJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgOnR5cGU9XCJ0aGlzLnR5cGVcIlxyXG4gICAgICAgICAgOnJlY2lwZT1cInJlY2lwZVwiXHJcbiAgICAgICAgICA6bG9nZ2VkPVwidGhpcy5sb2dnZWRcIlxyXG4gICAgICAgICAgOnVzZXJuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgQGNhcmQtaGVpZ2h0PVwidXBkYXRlQ2FyZEhlaWdodFwiXHJcbiAgICAgICAgPjwvQXBwQ2FyZFJlY2lwZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwibW92ZUNhcm91c2VsKDEpXCIgY2xhc3M9XCJhcnJvdy1idXR0b24gcmlnaHQtYXJyb3dcIiA6Y2xhc3M9XCJ7ICdkaXNhYmxlZC1idXR0b24nOiBpc0F0RW5kIH1cIiA6c3R5bGU9XCJ7IGhlaWdodDogY2FyZEhlaWdodCArICdweCcgfVwiPuKWujwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBBcHBDYXJkUmVjaXBlIGZyb20gJ0AvY29tcG9uZW50cy9BcHBDYXJkUmVjaXBlLnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7QXBwQ2FyZFJlY2lwZX0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHJlY2lwZXM6IEFycmF5LFxyXG4gICAgICAgIHZpc2libGVSZWNpcGVzOiBOdW1iZXIsXHJcbiAgICAgICAgdXNlcm5hbWU6IFN0cmluZyxcclxuICAgICAgICBsb2dnZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudENhcmRJbmRleDogMCxcclxuICAgICAgICAgICAgY2FyZEhlaWdodDogMCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZGlzcGxheWVkUmVjaXBlcygpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuY3VycmVudENhcmRJbmRleDtcclxuICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgdGhpcy52aXNpYmxlUmVjaXBlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjaXBlcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0F0QmVnaW5uaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FyZEluZGV4ID09PSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNBdEVuZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudENhcmRJbmRleCArIHRoaXMudmlzaWJsZVJlY2lwZXMgPj0gdGhpcy5yZWNpcGVzLmxlbmd0aDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBtb3ZlQ2Fyb3VzZWwoc3RlcCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuY3VycmVudENhcmRJbmRleCArIHN0ZXA7XHJcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwICYmIG5ld0luZGV4IDw9IHRoaXMucmVjaXBlcy5sZW5ndGggLSB0aGlzLnZpc2libGVSZWNpcGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkSW5kZXggPSBuZXdJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlQ2FyZEhlaWdodChoZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLmNhcmQtY2Fyb3VzZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDE1cHggYXV0byAxMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93OyAvKiBEaXNwb25lciBsYXMgdGFyamV0YXMgaG9yaXpvbnRhbG1lbnRlICovXHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uYXJyb3ctYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTsgLyogQXNlZ3VyYSBxdWUgbG9zIGJvdG9uZXMgdGVuZ2FuIGxhIG1pc21hIGFsdHVyYSBxdWUgbGFzIHRhcmpldGFzICovXHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTczMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdy1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODg0NDsgLyogQ2FtYmlhIGVsIGNvbG9yIGFsIHBhc2FyIGVsIGN1cnNvciBwb3IgZW5jaW1hICovXHJcbn1cclxuXHJcbi5kaXNhYmxlZC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IC8qIENvbG9yIGRlIGZvbmRvIGdyaXMgcGFyYSBib3RvbmVzIGRlc2hhYmlsaXRhZG9zICovXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIERlc2hhYmlsaXRhciBpbnRlcmFjY2nDs24gY29uIGVsIGJvdMOzbiAqL1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IC8qIENhbWJpYXIgZWwgY3Vyc29yIGEgXCJubyBwZXJtaXRpZG9cIiAqL1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-74010ed1\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"card-carousel\"\n};\nconst _hoisted_2 = {\n  class: \"carousel-container\"\n};\nconst _hoisted_3 = {\n  class: \"cards-container\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppCardRecipe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppCardRecipe\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[0] || (_cache[0] = $event => $options.moveCarousel(-1)),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"arrow-button left-arrow\", {\n      'disabled-button': $options.isAtBeginning\n    }]),\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      height: $data.cardHeight + 'px'\n    })\n  }, \"◄\", 6 /* CLASS, STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.displayedRecipes, (recipe, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AppCardRecipe, {\n      key: index,\n      type: this.type,\n      recipe: recipe,\n      logged: this.logged,\n      username: $props.username,\n      onCardHeight: $options.updateCardHeight\n    }, null, 8 /* PROPS */, [\"type\", \"recipe\", \"logged\", \"username\", \"onCardHeight\"]);\n  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = $event => $options.moveCarousel(1)),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"arrow-button right-arrow\", {\n      'disabled-button': $options.isAtEnd\n    }]),\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      height: $data.cardHeight + 'px'\n    })\n  }, \"►\", 6 /* CLASS, STYLE */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0MDEwZWQxJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUVBO0FBQUE7OztBQUhBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwQ2FyZENhcm91c2VsLnZ1ZT9jY2YwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jYXJvdXNlbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICA8YnV0dG9uIEBjbGljaz1cIm1vdmVDYXJvdXNlbCgtMSlcIiBjbGFzcz1cImFycm93LWJ1dHRvbiBsZWZ0LWFycm93XCIgOmNsYXNzPVwieyAnZGlzYWJsZWQtYnV0dG9uJzogaXNBdEJlZ2lubmluZyB9XCIgOnN0eWxlPVwieyBoZWlnaHQ6IGNhcmRIZWlnaHQgKyAncHgnIH1cIj7il4Q8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxBcHBDYXJkUmVjaXBlXHJcbiAgICAgICAgICB2LWZvcj1cIihyZWNpcGUsIGluZGV4KSBpbiBkaXNwbGF5ZWRSZWNpcGVzXCJcclxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICA6dHlwZT1cInRoaXMudHlwZVwiXHJcbiAgICAgICAgICA6cmVjaXBlPVwicmVjaXBlXCJcclxuICAgICAgICAgIDpsb2dnZWQ9XCJ0aGlzLmxvZ2dlZFwiXHJcbiAgICAgICAgICA6dXNlcm5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICBAY2FyZC1oZWlnaHQ9XCJ1cGRhdGVDYXJkSGVpZ2h0XCJcclxuICAgICAgICA+PC9BcHBDYXJkUmVjaXBlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJtb3ZlQ2Fyb3VzZWwoMSlcIiBjbGFzcz1cImFycm93LWJ1dHRvbiByaWdodC1hcnJvd1wiIDpjbGFzcz1cInsgJ2Rpc2FibGVkLWJ1dHRvbic6IGlzQXRFbmQgfVwiIDpzdHlsZT1cInsgaGVpZ2h0OiBjYXJkSGVpZ2h0ICsgJ3B4JyB9XCI+4pa6PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcENhcmRSZWNpcGUgZnJvbSAnQC9jb21wb25lbnRzL0FwcENhcmRSZWNpcGUudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtBcHBDYXJkUmVjaXBlfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcmVjaXBlczogQXJyYXksXHJcbiAgICAgICAgdmlzaWJsZVJlY2lwZXM6IE51bWJlcixcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbixcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2FyZEluZGV4OiAwLFxyXG4gICAgICAgICAgICBjYXJkSGVpZ2h0OiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBkaXNwbGF5ZWRSZWNpcGVzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5jdXJyZW50Q2FyZEluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyB0aGlzLnZpc2libGVSZWNpcGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNpcGVzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzQXRCZWdpbm5pbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDYXJkSW5kZXggPT09IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0F0RW5kKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FyZEluZGV4ICsgdGhpcy52aXNpYmxlUmVjaXBlcyA+PSB0aGlzLnJlY2lwZXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG1vdmVDYXJvdXNlbChzdGVwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5jdXJyZW50Q2FyZEluZGV4ICsgc3RlcDtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPD0gdGhpcy5yZWNpcGVzLmxlbmd0aCAtIHRoaXMudmlzaWJsZVJlY2lwZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmRJbmRleCA9IG5ld0luZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVDYXJkSGVpZ2h0KGhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uY2FyZC1jYXJvdXNlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBnYXA6IDIwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTVweCBhdXRvIDEwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIERpc3BvbmVyIGxhcyB0YXJqZXRhcyBob3Jpem9udGFsbWVudGUgKi9cclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5hcnJvdy1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBBc2VndXJhIHF1ZSBsb3MgYm90b25lcyB0ZW5nYW4gbGEgbWlzbWEgYWx0dXJhIHF1ZSBsYXMgdGFyamV0YXMgKi9cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFycm93LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ODQ0OyAvKiBDYW1iaWEgZWwgY29sb3IgYWwgcGFzYXIgZWwgY3Vyc29yIHBvciBlbmNpbWEgKi9cclxufVxyXG5cclxuLmRpc2FibGVkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgLyogQ29sb3IgZGUgZm9uZG8gZ3JpcyBwYXJhIGJvdG9uZXMgZGVzaGFiaWxpdGFkb3MgKi9cclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogRGVzaGFiaWxpdGFyIGludGVyYWNjacOzbiBjb24gZWwgYm90w7NuICovXHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgLyogQ2FtYmlhciBlbCBjdXJzb3IgYSBcIm5vIHBlcm1pdGlkb1wiICovXHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6c0342c8cb5f8071"; }
/******/ }();
/******/ 
/******/ }
);