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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextArea.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextArea.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    defaultMessage: String\n  },\n  data() {\n    return {\n      message: this.defaultMessage\n    };\n  },\n  computed: {\n    inputStyle() {\n      return {\n        color: \"black\",\n        padding: \"10px\",\n        border: \"1px solid #ccc\",\n        width: \"100%\",\n        minWidth: \"300px\",\n        display: \"block\",\n        margin: \"0 auto\",\n        marginTop: \"10px\",\n        backgroundColor: \"#FCE4A4\"\n      };\n    }\n  },\n  methods: {\n    clearDefaultMessage() {\n      this.message = \"\";\n    },\n    adjustTextAreaHeight() {\n      // Ajusta la altura del textarea en función del contenido\n      const textarea = this.$refs.messageInput;\n      textarea.style.height = \"auto\";\n      textarea.style.height = textarea.scrollHeight + \"px\";\n\n      // Emitir un evento personalizado con el valor actualizado\n      this.$emit('update:textValue', this.message);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcFRleHRBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcFRleHRBcmVhLnZ1ZT8xZmFkIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gVGV4dEFyZWEudnVlIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDx0ZXh0YXJlYVxuICAgICAgdi1tb2RlbD1cIm1lc3NhZ2VcIlxuICAgICAgQGtleXVwPVwiYWRqdXN0VGV4dEFyZWFIZWlnaHRcIlxuICAgICAgQGZvY3VzPVwiY2xlYXJEZWZhdWx0TWVzc2FnZVwiXG4gICAgICByZWY9XCJtZXNzYWdlSW5wdXRcIlxuICAgICAgOnN0eWxlPVwiaW5wdXRTdHlsZVwiXG4gICAgPjwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkZWZhdWx0TWVzc2FnZTogU3RyaW5nLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiB0aGlzLmRlZmF1bHRNZXNzYWdlLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaW5wdXRTdHlsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGQ0U0QTRcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsZWFyRGVmYXVsdE1lc3NhZ2UoKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xuICAgIH0sXG4gICAgYWRqdXN0VGV4dEFyZWFIZWlnaHQoKSB7XG4gICAgICAvLyBBanVzdGEgbGEgYWx0dXJhIGRlbCB0ZXh0YXJlYSBlbiBmdW5jacOzbiBkZWwgY29udGVuaWRvXG4gICAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuJHJlZnMubWVzc2FnZUlucHV0O1xuICAgICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICBcbiAgICAgIC8vIEVtaXRpciB1biBldmVudG8gcGVyc29uYWxpemFkbyBjb24gZWwgdmFsb3IgYWN0dWFsaXphZG9cbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTp0ZXh0VmFsdWUnLCB0aGlzLm1lc3NhZ2UpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextArea.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextArea.vue?vue&type=template&id=81865dca":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextArea.vue?vue&type=template&id=81865dca ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"textarea\", {\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.message = $event),\n    onKeyup: _cache[1] || (_cache[1] = (...args) => $options.adjustTextAreaHeight && $options.adjustTextAreaHeight(...args)),\n    onFocus: _cache[2] || (_cache[2] = (...args) => $options.clearDefaultMessage && $options.clearDefaultMessage(...args)),\n    ref: \"messageInput\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.inputStyle)\n  }, null, 36 /* STYLE, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.message]])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBUZXh0QXJlYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODE4NjVkY2EuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBUZXh0QXJlYS52dWU/MWZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIFRleHRBcmVhLnZ1ZSAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8dGV4dGFyZWFcbiAgICAgIHYtbW9kZWw9XCJtZXNzYWdlXCJcbiAgICAgIEBrZXl1cD1cImFkanVzdFRleHRBcmVhSGVpZ2h0XCJcbiAgICAgIEBmb2N1cz1cImNsZWFyRGVmYXVsdE1lc3NhZ2VcIlxuICAgICAgcmVmPVwibWVzc2FnZUlucHV0XCJcbiAgICAgIDpzdHlsZT1cImlucHV0U3R5bGVcIlxuICAgID48L3RleHRhcmVhPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGVmYXVsdE1lc3NhZ2U6IFN0cmluZyxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdGhpcy5kZWZhdWx0TWVzc2FnZSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlucHV0U3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkNFNEE0XCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGVhckRlZmF1bHRNZXNzYWdlKCkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcbiAgICB9LFxuICAgIGFkanVzdFRleHRBcmVhSGVpZ2h0KCkge1xuICAgICAgLy8gQWp1c3RhIGxhIGFsdHVyYSBkZWwgdGV4dGFyZWEgZW4gZnVuY2nDs24gZGVsIGNvbnRlbmlkb1xuICAgICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLiRyZWZzLm1lc3NhZ2VJbnB1dDtcbiAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgXG4gICAgICAvLyBFbWl0aXIgdW4gZXZlbnRvIHBlcnNvbmFsaXphZG8gY29uIGVsIHZhbG9yIGFjdHVhbGl6YWRvXG4gICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6dGV4dFZhbHVlJywgdGhpcy5tZXNzYWdlKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextArea.vue?vue&type=template&id=81865dca\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "216c8129a1c36a38"; }
/******/ }();
/******/ 
/******/ }
);