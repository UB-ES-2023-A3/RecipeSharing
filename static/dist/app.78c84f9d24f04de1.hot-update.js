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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      title: \"Chef's Nook\",\n      imageUrl: __webpack_require__(/*! ../assets/images/HeaderImage.jpg */ \"./src/assets/images/HeaderImage.jpg\"),\n      logged: false\n    };\n  },\n  methods: {\n    handleLogoClick() {\n      // Lógica para el clic en el logo\n      // Puedes utilizar Vue Router para navegar a la página principal:\n      this.$router.push('/');\n    },\n    handleUserClick() {\n      // Lógica para el clic en el botón del usuario\n      // Puedes realizar alguna acción específica, como abrir un menú de usuario, etc.\n      // Por ejemplo, muestra una alerta en este caso:\n      alert('Hiciste clic en el botón del usuario');\n      alert(this.logged);\n    },\n    updateLoginStatus(logged) {\n      alert(\"UPDATE\" + logged);\n      this.logged = logged;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlci52dWU/ZjU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8SG9tZVBhZ2UgQGxvZ2luU3RhdHVzQ2hhbmdlZD1cInVwZGF0ZUxvZ2luU3RhdHVzXCIvPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidXR0b24taW1hZ2UtbG9nb1wiIEBjbGljaz1cImhhbmRsZUxvZ29DbGlja1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvTG9nby5wbmdcIiBhbHQ9XCJCb3TDs25cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlXCIgOnNyYz1cImltYWdlVXJsXCIgYWx0PVwiSW1hZ2VuXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiIEBjbGljaz1cImhhbmRsZVVzZXJDbGlja1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvRGVmYXVsdFVzZXIuanBnXCIgYWx0PVwiQm90w7NuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYW5pbWF0ZWQtdGl0bGVcIj57eyB0aXRsZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNoZWYncyBOb29rXCIsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9IZWFkZXJJbWFnZS5qcGdcIiksXHJcbiAgICAgICAgICAgIGxvZ2dlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaGFuZGxlTG9nb0NsaWNrKCkge1xyXG4gICAgICAgICAgICAvLyBMw7NnaWNhIHBhcmEgZWwgY2xpYyBlbiBlbCBsb2dvXHJcbiAgICAgICAgICAgIC8vIFB1ZWRlcyB1dGlsaXphciBWdWUgUm91dGVyIHBhcmEgbmF2ZWdhciBhIGxhIHDDoWdpbmEgcHJpbmNpcGFsOlxyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlVXNlckNsaWNrKCkge1xyXG4gICAgICAgICAgICAvLyBMw7NnaWNhIHBhcmEgZWwgY2xpYyBlbiBlbCBib3TDs24gZGVsIHVzdWFyaW9cclxuICAgICAgICAgICAgLy8gUHVlZGVzIHJlYWxpemFyIGFsZ3VuYSBhY2Npw7NuIGVzcGVjw61maWNhLCBjb21vIGFicmlyIHVuIG1lbsO6IGRlIHVzdWFyaW8sIGV0Yy5cclxuICAgICAgICAgICAgLy8gUG9yIGVqZW1wbG8sIG11ZXN0cmEgdW5hIGFsZXJ0YSBlbiBlc3RlIGNhc286XHJcbiAgICAgICAgICAgIGFsZXJ0KCdIaWNpc3RlIGNsaWMgZW4gZWwgYm90w7NuIGRlbCB1c3VhcmlvJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMubG9nZ2VkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZUxvZ2luU3RhdHVzKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBhbGVydChcIlVQREFURVwiICsgbG9nZ2VkKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWQgPSBsb2dnZWQ7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogRmlqYSBlbCBlbmNhYmV6YWRvIGVuIGxhIHBhcnRlIHN1cGVyaW9yIGRlIGxhIHZlbnRhbmEgKi9cclxuICAgIHRvcDogMDsgLyogUGVnYWRvIGVuIGxhIHBhcnRlIHN1cGVyaW9yICovXHJcbiAgICBsZWZ0OiAwOyAvKiBQZWdhZG8gYSBsYSBpenF1aWVyZGEgKi9cclxuICAgIHJpZ2h0OiAwOyAvKiBQZWdhZG8gYSBsYSBkZXJlY2hhICovXHJcbiAgICB6LWluZGV4OiA5OTk7IC8qIEFzZWd1cmEgcXVlIGVzdMOpIGVuIGxhIHBhcnRlIHN1cGVyaW9yIGRlIG90cm9zIGVsZW1lbnRvcyAqL1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogQWp1c3RhIGVsIGFuY2hvIGRlIGxhIGltYWdlbiBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEFqdXN0YSBsYSBhbHR1cmEgYWwgMTAwJSBwYXJhIG1hbnRlbmVyIGxhIHJlbGFjacOzbiBkZSBhc3BlY3RvICovXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgLyogTGEgaW1hZ2VuIHNlIGFqdXN0YSBhbCBjb250ZW5lZG9yIG1hbnRlbmllbmRvIGxhIHJlbGFjacOzbiBkZSBhc3BlY3RvICovXHJcbn1cclxuXHJcbi50ZXh0LW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMzAwcHg7IC8qIERlc3BsYXphbWllbnRvIGRlIDIwMHB4IGRlc2RlIGVsIGJvcmRlIGl6cXVpZXJkbyAqL1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuLnRleHQtb3ZlcmxheSBwIHtcclxuICAgIGNvbG9yOiAjZmZmOyAvKiBDb2xvciBkZWwgdGV4dG8gKi9cclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBmb250LXNpemU6IDFjbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQWxpbmVhIGVsIHRleHRvIGhvcml6b250YWxtZW50ZSBlbiBlbCBjZW50cm8gKi9cclxuXHJcbn1cclxuXHJcbi5hbmltYXRlZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGFuaW1hdGlvbjogYm91bmNlIDEwcyBpbmZpbml0ZTsgLyogTm9tYnJlIGRlIGxhIGFuaW1hY2nDs24sIGR1cmFjacOzbiB5IHJlcGV0aWNpw7NuICovXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICAgIDAlLCAyMCUsIDUwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24taW1hZ2UtdXNlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1pbWFnZS1sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7IC8qIENhbWJpYSBcInJpZ2h0XCIgYSBcImxlZnRcIiBwYXJhIHBvc2ljaW9uYXIgYSBsYSBpenF1aWVyZGEgKi9cclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyAvKiBBanVzdGEgZWwgbWFyZ2VuIGl6cXVpZXJkbyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=template&id=bb50a5e4&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=template&id=bb50a5e4&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/Logo.png */ \"./src/assets/images/Logo.png\");\n/* harmony import */ var _assets_images_DefaultUser_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/DefaultUser.jpg */ \"./src/assets/images/DefaultUser.jpg\");\n\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-bb50a5e4\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"app-header\"\n};\nconst _hoisted_2 = {\n  class: \"image-container\"\n};\nconst _hoisted_3 = [\"src\"];\nconst _hoisted_4 = {\n  class: \"text-overlay\"\n};\nconst _hoisted_5 = {\n  class: \"animated-title\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_HomePage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"HomePage\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_HomePage, {\n    onLoginStatusChanged: $options.updateLoginStatus\n  }, null, 8 /* PROPS */, [\"onLoginStatusChanged\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"header\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    class: \"button-image-logo\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.handleLogoClick && $options.handleLogoClick(...args)),\n    src: _assets_images_Logo_png__WEBPACK_IMPORTED_MODULE_1__,\n    alt: \"Botón\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    class: \"image\",\n    src: $data.imageUrl,\n    alt: \"Imagen\"\n  }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    class: \"button-image-user\",\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.handleUserClick && $options.handleUserClick(...args)),\n    src: _assets_images_DefaultUser_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"Botón\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1 /* TEXT */)])])])], 64 /* STABLE_FRAGMENT */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJiNTBhNWU0JnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUE7QUFFQTs7O0FBSkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFJQTtBQUFBOztBQUNBO0FBQUE7OztBQVBBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlci52dWU/ZjU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8SG9tZVBhZ2UgQGxvZ2luU3RhdHVzQ2hhbmdlZD1cInVwZGF0ZUxvZ2luU3RhdHVzXCIvPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidXR0b24taW1hZ2UtbG9nb1wiIEBjbGljaz1cImhhbmRsZUxvZ29DbGlja1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvTG9nby5wbmdcIiBhbHQ9XCJCb3TDs25cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlXCIgOnNyYz1cImltYWdlVXJsXCIgYWx0PVwiSW1hZ2VuXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiIEBjbGljaz1cImhhbmRsZVVzZXJDbGlja1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvRGVmYXVsdFVzZXIuanBnXCIgYWx0PVwiQm90w7NuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYW5pbWF0ZWQtdGl0bGVcIj57eyB0aXRsZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNoZWYncyBOb29rXCIsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9IZWFkZXJJbWFnZS5qcGdcIiksXHJcbiAgICAgICAgICAgIGxvZ2dlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaGFuZGxlTG9nb0NsaWNrKCkge1xyXG4gICAgICAgICAgICAvLyBMw7NnaWNhIHBhcmEgZWwgY2xpYyBlbiBlbCBsb2dvXHJcbiAgICAgICAgICAgIC8vIFB1ZWRlcyB1dGlsaXphciBWdWUgUm91dGVyIHBhcmEgbmF2ZWdhciBhIGxhIHDDoWdpbmEgcHJpbmNpcGFsOlxyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlVXNlckNsaWNrKCkge1xyXG4gICAgICAgICAgICAvLyBMw7NnaWNhIHBhcmEgZWwgY2xpYyBlbiBlbCBib3TDs24gZGVsIHVzdWFyaW9cclxuICAgICAgICAgICAgLy8gUHVlZGVzIHJlYWxpemFyIGFsZ3VuYSBhY2Npw7NuIGVzcGVjw61maWNhLCBjb21vIGFicmlyIHVuIG1lbsO6IGRlIHVzdWFyaW8sIGV0Yy5cclxuICAgICAgICAgICAgLy8gUG9yIGVqZW1wbG8sIG11ZXN0cmEgdW5hIGFsZXJ0YSBlbiBlc3RlIGNhc286XHJcbiAgICAgICAgICAgIGFsZXJ0KCdIaWNpc3RlIGNsaWMgZW4gZWwgYm90w7NuIGRlbCB1c3VhcmlvJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMubG9nZ2VkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZUxvZ2luU3RhdHVzKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBhbGVydChcIlVQREFURVwiICsgbG9nZ2VkKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWQgPSBsb2dnZWQ7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogRmlqYSBlbCBlbmNhYmV6YWRvIGVuIGxhIHBhcnRlIHN1cGVyaW9yIGRlIGxhIHZlbnRhbmEgKi9cclxuICAgIHRvcDogMDsgLyogUGVnYWRvIGVuIGxhIHBhcnRlIHN1cGVyaW9yICovXHJcbiAgICBsZWZ0OiAwOyAvKiBQZWdhZG8gYSBsYSBpenF1aWVyZGEgKi9cclxuICAgIHJpZ2h0OiAwOyAvKiBQZWdhZG8gYSBsYSBkZXJlY2hhICovXHJcbiAgICB6LWluZGV4OiA5OTk7IC8qIEFzZWd1cmEgcXVlIGVzdMOpIGVuIGxhIHBhcnRlIHN1cGVyaW9yIGRlIG90cm9zIGVsZW1lbnRvcyAqL1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogQWp1c3RhIGVsIGFuY2hvIGRlIGxhIGltYWdlbiBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEFqdXN0YSBsYSBhbHR1cmEgYWwgMTAwJSBwYXJhIG1hbnRlbmVyIGxhIHJlbGFjacOzbiBkZSBhc3BlY3RvICovXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgLyogTGEgaW1hZ2VuIHNlIGFqdXN0YSBhbCBjb250ZW5lZG9yIG1hbnRlbmllbmRvIGxhIHJlbGFjacOzbiBkZSBhc3BlY3RvICovXHJcbn1cclxuXHJcbi50ZXh0LW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMzAwcHg7IC8qIERlc3BsYXphbWllbnRvIGRlIDIwMHB4IGRlc2RlIGVsIGJvcmRlIGl6cXVpZXJkbyAqL1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuLnRleHQtb3ZlcmxheSBwIHtcclxuICAgIGNvbG9yOiAjZmZmOyAvKiBDb2xvciBkZWwgdGV4dG8gKi9cclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBmb250LXNpemU6IDFjbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQWxpbmVhIGVsIHRleHRvIGhvcml6b250YWxtZW50ZSBlbiBlbCBjZW50cm8gKi9cclxuXHJcbn1cclxuXHJcbi5hbmltYXRlZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGFuaW1hdGlvbjogYm91bmNlIDEwcyBpbmZpbml0ZTsgLyogTm9tYnJlIGRlIGxhIGFuaW1hY2nDs24sIGR1cmFjacOzbiB5IHJlcGV0aWNpw7NuICovXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICAgIDAlLCAyMCUsIDUwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24taW1hZ2UtdXNlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1pbWFnZS1sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7IC8qIENhbWJpYSBcInJpZ2h0XCIgYSBcImxlZnRcIiBwYXJhIHBvc2ljaW9uYXIgYSBsYSBpenF1aWVyZGEgKi9cclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyAvKiBBanVzdGEgZWwgbWFyZ2VuIGl6cXVpZXJkbyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=template&id=bb50a5e4&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7ec10fba70a55f57"; }
/******/ }();
/******/ 
/******/ }
);