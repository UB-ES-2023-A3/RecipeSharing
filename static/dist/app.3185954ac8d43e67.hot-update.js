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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextField.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextField.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    defaultMessage: String // Propiedad para el texto predeterminado\n  },\n\n  data() {\n    return {\n      message: this.defaultMessage,\n      // Usa la propiedad defaultMessage como valor inicial\n      isSaved: false\n    };\n  },\n  computed: {\n    inputStyle() {\n      return {\n        backgroundColor: this.isSaved ? \"#52BE80\" : \"#34495E\",\n        color: this.isSaved ? \"white\" : \"white\",\n        padding: \"10px\",\n        border: \"1px solid #ccc\",\n        borderRadius: \"5px\",\n        width: \"auto\",\n        minWidth: \"300px\",\n        textAlign: \"center\",\n        display: \"block\",\n        margin: \"0 auto\",\n        marginTop: \"10px\"\n      };\n    }\n  },\n  methods: {\n    saveMessage() {\n      this.isSaved = true;\n      this.$refs.messageInput.blur();\n    },\n    clearDefaultMessage() {\n      // Borra el mensaje predeterminado al hacer clic en el cuadro de entrada\n      this.message = \"\";\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcFRleHRGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6IjtBQWNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcFRleHRGaWVsZC52dWU/YjNjMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGlucHV0XG4gICAgICB2LW1vZGVsPVwibWVzc2FnZVwiXG4gICAgICBAYmx1cj1cInNhdmVNZXNzYWdlXCJcbiAgICAgIEBrZXl1cC5lbnRlcj1cInNhdmVNZXNzYWdlXCJcbiAgICAgIEBmb2N1cz1cImNsZWFyRGVmYXVsdE1lc3NhZ2VcIlxuICAgICAgcmVmPVwibWVzc2FnZUlucHV0XCJcbiAgICAgIDpzdHlsZT1cImlucHV0U3R5bGVcIlxuICAgID5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgcHJvcHM6IHtcbiAgICBkZWZhdWx0TWVzc2FnZTogU3RyaW5nLCAvLyBQcm9waWVkYWQgcGFyYSBlbCB0ZXh0byBwcmVkZXRlcm1pbmFkb1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiB0aGlzLmRlZmF1bHRNZXNzYWdlLCAvLyBVc2EgbGEgcHJvcGllZGFkIGRlZmF1bHRNZXNzYWdlIGNvbW8gdmFsb3IgaW5pY2lhbFxuICAgICAgaXNTYXZlZDogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpbnB1dFN0eWxlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzU2F2ZWQgPyBcIiM1MkJFODBcIiA6IFwiIzM0NDk1RVwiLFxuICAgICAgICBjb2xvcjogdGhpcy5pc1NhdmVkID8gXCJ3aGl0ZVwiIDogXCJ3aGl0ZVwiLFxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2F2ZU1lc3NhZ2UoKSB7XG4gICAgICB0aGlzLmlzU2F2ZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kcmVmcy5tZXNzYWdlSW5wdXQuYmx1cigpO1xuICAgIH0sXG4gICAgY2xlYXJEZWZhdWx0TWVzc2FnZSgpIHtcbiAgICAgIC8vIEJvcnJhIGVsIG1lbnNhamUgcHJlZGV0ZXJtaW5hZG8gYWwgaGFjZXIgY2xpYyBlbiBlbCBjdWFkcm8gZGUgZW50cmFkYVxuICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLyogRXN0aWxvcyBwZXJzb25hbGl6YWRvcyBwYXJhIHR1IGNvbXBvbmVudGUgKi9cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextField.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextField.vue?vue&type=template&id=7c6678dc&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextField.vue?vue&type=template&id=7c6678dc&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.message = $event),\n    onBlur: _cache[1] || (_cache[1] = (...args) => $options.saveMessage && $options.saveMessage(...args)),\n    onKeyup: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((...args) => $options.saveMessage && $options.saveMessage(...args), [\"enter\"])),\n    onFocus: _cache[3] || (_cache[3] = (...args) => $options.clearDefaultMessage && $options.clearDefaultMessage(...args)),\n    ref: \"messageInput\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.inputStyle)\n  }, null, 36 /* STYLE, HYDRATE_EVENTS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.message]])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBUZXh0RmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjNjY3OGRjJnNjb3BlZD10cnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBUZXh0RmllbGQudnVlP2IzYzAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgdi1tb2RlbD1cIm1lc3NhZ2VcIlxuICAgICAgQGJsdXI9XCJzYXZlTWVzc2FnZVwiXG4gICAgICBAa2V5dXAuZW50ZXI9XCJzYXZlTWVzc2FnZVwiXG4gICAgICBAZm9jdXM9XCJjbGVhckRlZmF1bHRNZXNzYWdlXCJcbiAgICAgIHJlZj1cIm1lc3NhZ2VJbnB1dFwiXG4gICAgICA6c3R5bGU9XCJpbnB1dFN0eWxlXCJcbiAgICA+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgIHByb3BzOiB7XG4gICAgZGVmYXVsdE1lc3NhZ2U6IFN0cmluZywgLy8gUHJvcGllZGFkIHBhcmEgZWwgdGV4dG8gcHJlZGV0ZXJtaW5hZG9cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdGhpcy5kZWZhdWx0TWVzc2FnZSwgLy8gVXNhIGxhIHByb3BpZWRhZCBkZWZhdWx0TWVzc2FnZSBjb21vIHZhbG9yIGluaWNpYWxcbiAgICAgIGlzU2F2ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaW5wdXRTdHlsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc1NhdmVkID8gXCIjNTJCRTgwXCIgOiBcIiMzNDQ5NUVcIixcbiAgICAgICAgY29sb3I6IHRoaXMuaXNTYXZlZCA/IFwid2hpdGVcIiA6IFwid2hpdGVcIixcbiAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNhdmVNZXNzYWdlKCkge1xuICAgICAgdGhpcy5pc1NhdmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJHJlZnMubWVzc2FnZUlucHV0LmJsdXIoKTtcbiAgICB9LFxuICAgIGNsZWFyRGVmYXVsdE1lc3NhZ2UoKSB7XG4gICAgICAvLyBCb3JyYSBlbCBtZW5zYWplIHByZWRldGVybWluYWRvIGFsIGhhY2VyIGNsaWMgZW4gZWwgY3VhZHJvIGRlIGVudHJhZGFcbiAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi8qIEVzdGlsb3MgcGVyc29uYWxpemFkb3MgcGFyYSB0dSBjb21wb25lbnRlICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppTextField.vue?vue&type=template&id=7c6678dc&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "130e3904fb57954f"; }
/******/ }();
/******/ 
/******/ }
);