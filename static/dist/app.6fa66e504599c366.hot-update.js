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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppCardRecipe_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AppCardRecipe.vue */ \"./src/components/AppCardRecipe.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    AppCardRecipe: _components_AppCardRecipe_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    recipes: Array,\n    visibleRecipes: Number,\n    username: String,\n    logged: Boolean\n  },\n  data() {\n    return {\n      scrollPosition: 0,\n      itemWidth: 0\n    };\n  },\n  computed: {\n    containerStyle() {\n      return {\n        transform: `translateX(-${this.scrollPosition * this.itemWidth}px)`\n      };\n    }\n  },\n  mounted() {\n    this.itemWidth = this.$refs.carouselContent.clientWidth / this.visibleRecipes;\n  },\n  methods: {\n    scrollLeft() {\n      if (this.scrollPosition > 0) {\n        this.scrollPosition--;\n      }\n    },\n    scrollRight() {\n      const maxScrollPosition = Math.max(this.recipes.length - this.visibleRecipes, 0);\n      if (this.scrollPosition < maxScrollPosition) {\n        this.scrollPosition++;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENhcmRDYXJvdXNlbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7QUFtQkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwQ2FyZENhcm91c2VsLnZ1ZT9jY2YwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNhcm91c2VsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiIDpzdHlsZT1cImNvbnRhaW5lclN0eWxlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2Nyb2xsTGVmdFwiPuKGkDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIocmVjaXBlLCBpbmRleCkgaW4gZmlsdGVyZWRSZWNpcGVzXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBcHBDYXJkUmVjaXBlIDpyZWNpcGU9XCJyZWNpcGVcIiA6bG9nZ2VkPVwidGhpcy5sb2dnZWRcIiA6dXNlcm5hbWU9XCJ1c2VybmFtZVwiPjwvQXBwQ2FyZFJlY2lwZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2Nyb2xsUmlnaHRcIj7ihpI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQXBwQ2FyZFJlY2lwZSBmcm9tICdAL2NvbXBvbmVudHMvQXBwQ2FyZFJlY2lwZS52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czogeyBBcHBDYXJkUmVjaXBlIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHJlY2lwZXM6IEFycmF5LFxyXG4gICAgICAgIHZpc2libGVSZWNpcGVzOiBOdW1iZXIsXHJcbiAgICAgICAgdXNlcm5hbWU6IFN0cmluZyxcclxuICAgICAgICBsb2dnZWQ6IEJvb2xlYW4sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY3JvbGxQb3NpdGlvbjogMCxcclxuICAgICAgICAgICAgaXRlbVdpZHRoOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjb250YWluZXJTdHlsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7dGhpcy5zY3JvbGxQb3NpdGlvbiAqIHRoaXMuaXRlbVdpZHRofXB4KWAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy4kcmVmcy5jYXJvdXNlbENvbnRlbnQuY2xpZW50V2lkdGggLyB0aGlzLnZpc2libGVSZWNpcGVzO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzY3JvbGxMZWZ0KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxQb3NpdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24tLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsUmlnaHQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFNjcm9sbFBvc2l0aW9uID0gTWF0aC5tYXgodGhpcy5yZWNpcGVzLmxlbmd0aCAtIHRoaXMudmlzaWJsZVJlY2lwZXMsIDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxQb3NpdGlvbiA8IG1heFNjcm9sbFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuXHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLmNhcmQtY2Fyb3VzZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0byAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-74010ed1\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"card-carousel\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppCardRecipe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppCardRecipe\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"carousel-container\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.containerStyle)\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.scrollLeft && $options.scrollLeft(...args))\n  }, \"←\"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredRecipes, (recipe, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      class: \"carousel-item\",\n      key: index\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppCardRecipe, {\n      recipe: recipe,\n      logged: this.logged,\n      username: $props.username\n    }, null, 8 /* PROPS */, [\"recipe\", \"logged\", \"username\"])]);\n  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.scrollRight && $options.scrollRight(...args))\n  }, \"→\")], 4 /* STYLE */)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0MDEwZWQxJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDYXJkQ2Fyb3VzZWwudnVlP2NjZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY2Fyb3VzZWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCIgOnN0eWxlPVwiY29udGFpbmVyU3R5bGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzY3JvbGxMZWZ0XCI+4oaQPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIihyZWNpcGUsIGluZGV4KSBpbiBmaWx0ZXJlZFJlY2lwZXNcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFwcENhcmRSZWNpcGUgOnJlY2lwZT1cInJlY2lwZVwiIDpsb2dnZWQ9XCJ0aGlzLmxvZ2dlZFwiIDp1c2VybmFtZT1cInVzZXJuYW1lXCI+PC9BcHBDYXJkUmVjaXBlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzY3JvbGxSaWdodFwiPuKGkjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBBcHBDYXJkUmVjaXBlIGZyb20gJ0AvY29tcG9uZW50cy9BcHBDYXJkUmVjaXBlLnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7IEFwcENhcmRSZWNpcGUgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcmVjaXBlczogQXJyYXksXHJcbiAgICAgICAgdmlzaWJsZVJlY2lwZXM6IE51bWJlcixcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbixcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uOiAwLFxyXG4gICAgICAgICAgICBpdGVtV2lkdGg6IDAsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGNvbnRhaW5lclN0eWxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHt0aGlzLnNjcm9sbFBvc2l0aW9uICogdGhpcy5pdGVtV2lkdGh9cHgpYCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLiRyZWZzLmNhcm91c2VsQ29udGVudC5jbGllbnRXaWR0aCAvIHRoaXMudmlzaWJsZVJlY2lwZXM7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNjcm9sbExlZnQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFBvc2l0aW9uID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbi0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGxSaWdodCgpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsUG9zaXRpb24gPSBNYXRoLm1heCh0aGlzLnJlY2lwZXMubGVuZ3RoIC0gdGhpcy52aXNpYmxlUmVjaXBlcywgMCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFBvc2l0aW9uIDwgbWF4U2Nyb2xsUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcblxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uY2FyZC1jYXJvdXNlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGdhcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppCardCarousel.vue?vue&type=template&id=74010ed1&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0d1b00079aa65433"; }
/******/ }();
/******/ 
/******/ }
);