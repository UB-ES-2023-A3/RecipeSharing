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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppCardRecipe_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AppCardRecipe.vue */ \"./src/components/AppCardRecipe.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    AppCardRecipe: _components_AppCardRecipe_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    recipes: Array,\n    visibleRecipes: Number,\n    username: String,\n    logged: Boolean,\n    type: String\n  },\n  data() {\n    return {\n      currentCardIndex: 0\n    };\n  },\n  computed: {\n    displayedRecipes() {\n      const startIndex = this.currentCardIndex;\n      const endIndex = startIndex + this.visibleRecipes;\n      return this.recipes.slice(startIndex, endIndex);\n    },\n    isAtBeginning() {\n      return this.currentCardIndex === 0;\n    },\n    isAtEnd() {\n      return this.currentCardIndex + this.visibleRecipes >= this.recipes.length;\n    }\n  },\n  methods: {\n    moveCarousel(step) {\n      const newIndex = this.currentCardIndex + step;\n      if (newIndex >= 0 && newIndex <= this.recipes.length - this.visibleRecipes) {\n        this.currentCardIndex = newIndex;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7QUFtQkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlP2NjZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNhcm91c2VsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwibW92ZUNhcm91c2VsKC0xKVwiIGNsYXNzPVwiYXJyb3ctYnV0dG9uIGxlZnQtYXJyb3dcIiA6Y2xhc3M9XCJ7ICdkaXNhYmxlZC1idXR0b24nOiBpc0F0QmVnaW5uaW5nIH1cIj7il4Q8L2J1dHRvbj5cclxuICAgICAgPEFwcENhcmRSZWNpcGVcclxuICAgICAgICB2LWZvcj1cIihyZWNpcGUsIGluZGV4KSBpbiBkaXNwbGF5ZWRSZWNpcGVzXCJcclxuICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgIDp0eXBlPVwidGhpcy50eXBlXCJcclxuICAgICAgICA6cmVjaXBlPVwicmVjaXBlXCJcclxuICAgICAgICA6bG9nZ2VkPVwidGhpcy5sb2dnZWRcIlxyXG4gICAgICAgIDp1c2VybmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgPjwvQXBwQ2FyZFJlY2lwZT5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJtb3ZlQ2Fyb3VzZWwoMSlcIiBjbGFzcz1cImFycm93LWJ1dHRvbiByaWdodC1hcnJvd1wiIDpjbGFzcz1cInsgJ2Rpc2FibGVkLWJ1dHRvbic6IGlzQXRFbmQgfVwiPuKWujwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcENhcmRSZWNpcGUgZnJvbSAnQC9jb21wb25lbnRzL0FwcENhcmRSZWNpcGUudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtBcHBDYXJkUmVjaXBlfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcmVjaXBlczogQXJyYXksXHJcbiAgICAgICAgdmlzaWJsZVJlY2lwZXM6IE51bWJlcixcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbixcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2FyZEluZGV4OiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBkaXNwbGF5ZWRSZWNpcGVzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5jdXJyZW50Q2FyZEluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyB0aGlzLnZpc2libGVSZWNpcGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNpcGVzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzQXRCZWdpbm5pbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDYXJkSW5kZXggPT09IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0F0RW5kKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FyZEluZGV4ICsgdGhpcy52aXNpYmxlUmVjaXBlcyA+PSB0aGlzLnJlY2lwZXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG1vdmVDYXJvdXNlbChzdGVwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5jdXJyZW50Q2FyZEluZGV4ICsgc3RlcDtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPD0gdGhpcy5yZWNpcGVzLmxlbmd0aCAtIHRoaXMudmlzaWJsZVJlY2lwZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmRJbmRleCA9IG5ld0luZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uY2FyZC1jYXJvdXNlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGdhcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXJyb3ctYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjg4NDQ7IC8qIENhbWJpYSBlbCBjb2xvciBhbCBwYXNhciBlbCBjdXJzb3IgcG9yIGVuY2ltYSAqL1xyXG59XHJcblxyXG4uZGlzYWJsZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyAvKiBDb2xvciBkZSBmb25kbyBncmlzIHBhcmEgYm90b25lcyBkZXNoYWJpbGl0YWRvcyAqL1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBEZXNoYWJpbGl0YXIgaW50ZXJhY2Npw7NuIGNvbiBlbCBib3TDs24gKi9cclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAvKiBDYW1iaWFyIGVsIGN1cnNvciBhIFwibm8gcGVybWl0aWRvXCIgKi9cclxufVxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-74010ed1\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"card-carousel\"\n};\nconst _hoisted_2 = {\n  class: \"carousel-container\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppCardRecipe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppCardRecipe\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[0] || (_cache[0] = $event => $options.moveCarousel(-1)),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"arrow-button left-arrow\", {\n      'disabled-button': $options.isAtBeginning\n    }])\n  }, \"◄\", 2 /* CLASS */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.displayedRecipes, (recipe, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AppCardRecipe, {\n      key: index,\n      type: this.type,\n      recipe: recipe,\n      logged: this.logged,\n      username: $props.username\n    }, null, 8 /* PROPS */, [\"type\", \"recipe\", \"logged\", \"username\"]);\n  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = $event => $options.moveCarousel(1)),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"arrow-button right-arrow\", {\n      'disabled-button': $options.isAtEnd\n    }])\n  }, \"►\", 2 /* CLASS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0MDEwZWQxJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOzs7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlP2NjZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNhcm91c2VsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwibW92ZUNhcm91c2VsKC0xKVwiIGNsYXNzPVwiYXJyb3ctYnV0dG9uIGxlZnQtYXJyb3dcIiA6Y2xhc3M9XCJ7ICdkaXNhYmxlZC1idXR0b24nOiBpc0F0QmVnaW5uaW5nIH1cIj7il4Q8L2J1dHRvbj5cclxuICAgICAgPEFwcENhcmRSZWNpcGVcclxuICAgICAgICB2LWZvcj1cIihyZWNpcGUsIGluZGV4KSBpbiBkaXNwbGF5ZWRSZWNpcGVzXCJcclxuICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgIDp0eXBlPVwidGhpcy50eXBlXCJcclxuICAgICAgICA6cmVjaXBlPVwicmVjaXBlXCJcclxuICAgICAgICA6bG9nZ2VkPVwidGhpcy5sb2dnZWRcIlxyXG4gICAgICAgIDp1c2VybmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgPjwvQXBwQ2FyZFJlY2lwZT5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJtb3ZlQ2Fyb3VzZWwoMSlcIiBjbGFzcz1cImFycm93LWJ1dHRvbiByaWdodC1hcnJvd1wiIDpjbGFzcz1cInsgJ2Rpc2FibGVkLWJ1dHRvbic6IGlzQXRFbmQgfVwiPuKWujwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcENhcmRSZWNpcGUgZnJvbSAnQC9jb21wb25lbnRzL0FwcENhcmRSZWNpcGUudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtBcHBDYXJkUmVjaXBlfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcmVjaXBlczogQXJyYXksXHJcbiAgICAgICAgdmlzaWJsZVJlY2lwZXM6IE51bWJlcixcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbixcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2FyZEluZGV4OiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBkaXNwbGF5ZWRSZWNpcGVzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5jdXJyZW50Q2FyZEluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyB0aGlzLnZpc2libGVSZWNpcGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNpcGVzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzQXRCZWdpbm5pbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDYXJkSW5kZXggPT09IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0F0RW5kKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FyZEluZGV4ICsgdGhpcy52aXNpYmxlUmVjaXBlcyA+PSB0aGlzLnJlY2lwZXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG1vdmVDYXJvdXNlbChzdGVwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5jdXJyZW50Q2FyZEluZGV4ICsgc3RlcDtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPD0gdGhpcy5yZWNpcGVzLmxlbmd0aCAtIHRoaXMudmlzaWJsZVJlY2lwZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmRJbmRleCA9IG5ld0luZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uY2FyZC1jYXJvdXNlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGdhcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXJyb3ctYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjg4NDQ7IC8qIENhbWJpYSBlbCBjb2xvciBhbCBwYXNhciBlbCBjdXJzb3IgcG9yIGVuY2ltYSAqL1xyXG59XHJcblxyXG4uZGlzYWJsZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyAvKiBDb2xvciBkZSBmb25kbyBncmlzIHBhcmEgYm90b25lcyBkZXNoYWJpbGl0YWRvcyAqL1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBEZXNoYWJpbGl0YXIgaW50ZXJhY2Npw7NuIGNvbiBlbCBib3TDs24gKi9cclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAvKiBDYW1iaWFyIGVsIGN1cnNvciBhIFwibm8gcGVybWl0aWRvXCIgKi9cclxufVxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=style&index=0&id=74010ed1&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=style&index=0&id=74010ed1&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.card-carousel[data-v-74010ed1] {\\r\\n    text-align: center;\\n}\\n.carousel-container[data-v-74010ed1] {\\r\\n    display: flex;\\r\\n    flex-wrap: nowrap;\\r\\n    overflow-x: auto;\\r\\n    gap: 20px;\\r\\n    padding: 40px;\\r\\n    border-radius: 4px;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    margin: 15px auto 10px;\\r\\n    max-width: 100%;\\n}\\n.carousel-item[data-v-74010ed1] {\\r\\n    flex: 0 0 auto;\\n}\\nbutton[data-v-74010ed1] {\\r\\n    margin-top: 10px;\\r\\n    background-color: #ff5733;\\r\\n    color: white;\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    padding: 10px;\\r\\n    cursor: pointer;\\n}\\n.arrow-button[data-v-74010ed1]:hover {\\r\\n    background-color: #ff8844; /* Cambia el color al pasar el cursor por encima */\\n}\\n.disabled-button[data-v-74010ed1] {\\r\\n  background-color: #ccc; /* Color de fondo gris para botones deshabilitados */\\r\\n  pointer-events: none; /* Deshabilitar interacción con el botón */\\r\\n  cursor: not-allowed; /* Cambiar el cursor a \\\"no permitido\\\" */\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDAxMGVkMSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/MzAwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmQtY2Fyb3VzZWxbZGF0YS12LTc0MDEwZWQxXSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNhcm91c2VsLWNvbnRhaW5lcltkYXRhLXYtNzQwMTBlZDFdIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDE1cHggYXV0byAxMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5jYXJvdXNlbC1pdGVtW2RhdGEtdi03NDAxMGVkMV0ge1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXG59XFxuYnV0dG9uW2RhdGEtdi03NDAxMGVkMV0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hcnJvdy1idXR0b25bZGF0YS12LTc0MDEwZWQxXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjg4NDQ7IC8qIENhbWJpYSBlbCBjb2xvciBhbCBwYXNhciBlbCBjdXJzb3IgcG9yIGVuY2ltYSAqL1xcbn1cXG4uZGlzYWJsZWQtYnV0dG9uW2RhdGEtdi03NDAxMGVkMV0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgLyogQ29sb3IgZGUgZm9uZG8gZ3JpcyBwYXJhIGJvdG9uZXMgZGVzaGFiaWxpdGFkb3MgKi9cXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBEZXNoYWJpbGl0YXIgaW50ZXJhY2Npw7NuIGNvbiBlbCBib3TDs24gKi9cXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IC8qIENhbWJpYXIgZWwgY3Vyc29yIGEgXFxcIm5vIHBlcm1pdGlkb1xcXCIgKi9cXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=style&index=0&id=74010ed1&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8ffbdf365b72eba7"; }
/******/ }();
/******/ 
/******/ }
);