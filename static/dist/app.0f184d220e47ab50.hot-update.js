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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      isMenuOpen: false,\n      name: \"AppHeaderUserButton\",\n      username: \"Nombre de Usuario\",\n      // Reemplaza con el nombre del usuario\n      userImage: __webpack_require__(/*! ../assets/images/DefaultUser.jpg */ \"./src/assets/images/DefaultUser.jpg\") // Ruta de la imagen del usuario\n    };\n  },\n\n  methods: {\n    toggleMenu() {\n      this.isMenuOpen = !this.isMenuOpen;\n    },\n    goToProfile() {\n      // Agrega la lógica para navegar a la página de perfil del usuario\n      // Ejemplo: this.$router.push('/perfil');\n    },\n    logout() {\n      // Agrega la lógica para cerrar la sesión del usuario\n      // Ejemplo: Realiza una petición al servidor para cerrar la sesión\n      alert(\"Cerrar sesión\"); // Muestra una alerta como ejemplo\n    }\n  },\n\n  created() {\n    // Agregar un escuchador de clics al documento para cerrar el menú al hacer clic en cualquier parte de la pantalla\n    document.addEventListener(\"click\", this.closeMenu);\n  },\n  beforeDestroy() {\n    // Eliminar el escuchador de clics al destruir el componente\n    document.removeEventListener(\"click\", this.closeMenu);\n  },\n  methods: {\n    closeMenu(event) {\n      // Cerrar el menú si está abierto y se hizo clic fuera de él\n      if (this.isMenuOpen) {\n        const menu = this.$el.querySelector(\".user-menu\");\n        if (menu && !menu.contains(event.target)) {\n          this.isMenuOpen = false;\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlclVzZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9jNWRlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlTWVudVwiIGNsYXNzPVwiYnV0dG9uLWltYWdlLXVzZXJcIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlckltYWdlXCIgYWx0PVwiQm90w7NuXCIgY2xhc3M9XCJ1c2VyLWltYWdlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gVXRpbGl6YSB2LWlmIHBhcmEgbW9zdHJhciBlbCBtZW7DuiBjdWFuZG8gaXNNZW51T3BlbiBlcyB2ZXJkYWRlcm8gLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiaXNNZW51T3BlblwiIGNsYXNzPVwidXNlci1tZW51XCIgQGNsaWNrLnN0b3A9XCJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImdvVG9Qcm9maWxlXCI+TWkgcGVyZmlsPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBAY2xpY2s9XCJsb2dvdXRcIj5Mb2cgb3V0PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc01lbnVPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgbmFtZTogXCJBcHBIZWFkZXJVc2VyQnV0dG9uXCIsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIk5vbWJyZSBkZSBVc3VhcmlvXCIsIC8vIFJlZW1wbGF6YSBjb24gZWwgbm9tYnJlIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgICAgIHVzZXJJbWFnZTogcmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvRGVmYXVsdFVzZXIuanBnXCIpLCAvLyBSdXRhIGRlIGxhIGltYWdlbiBkZWwgdXN1YXJpb1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNZW51T3BlbiA9ICF0aGlzLmlzTWVudU9wZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb1RvUHJvZmlsZSgpIHtcclxuICAgICAgICAgICAgLy8gQWdyZWdhIGxhIGzDs2dpY2EgcGFyYSBuYXZlZ2FyIGEgbGEgcMOhZ2luYSBkZSBwZXJmaWwgZGVsIHVzdWFyaW9cclxuICAgICAgICAgICAgLy8gRWplbXBsbzogdGhpcy4kcm91dGVyLnB1c2goJy9wZXJmaWwnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgLy8gQWdyZWdhIGxhIGzDs2dpY2EgcGFyYSBjZXJyYXIgbGEgc2VzacOzbiBkZWwgdXN1YXJpb1xyXG4gICAgICAgICAgICAvLyBFamVtcGxvOiBSZWFsaXphIHVuYSBwZXRpY2nDs24gYWwgc2Vydmlkb3IgcGFyYSBjZXJyYXIgbGEgc2VzacOzblxyXG4gICAgICAgICAgICBhbGVydChcIkNlcnJhciBzZXNpw7NuXCIpOyAvLyBNdWVzdHJhIHVuYSBhbGVydGEgY29tbyBlamVtcGxvXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIC8vIEFncmVnYXIgdW4gZXNjdWNoYWRvciBkZSBjbGljcyBhbCBkb2N1bWVudG8gcGFyYSBjZXJyYXIgZWwgbWVuw7ogYWwgaGFjZXIgY2xpYyBlbiBjdWFscXVpZXIgcGFydGUgZGUgbGEgcGFudGFsbGFcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZU1lbnUpO1xyXG4gICAgfSxcclxuICAgIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gRWxpbWluYXIgZWwgZXNjdWNoYWRvciBkZSBjbGljcyBhbCBkZXN0cnVpciBlbCBjb21wb25lbnRlXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xvc2VNZW51KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2xvc2VNZW51KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIENlcnJhciBlbCBtZW7DuiBzaSBlc3TDoSBhYmllcnRvIHkgc2UgaGl6byBjbGljIGZ1ZXJhIGRlIMOpbFxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01lbnVPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcihcIi51c2VyLW1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVudSAmJiAhbWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uYnV0dG9uLWltYWdlLXVzZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDsgLyogUG9zaWNpw7NuIGRlYmFqbyBkZWwgYm90w7NuIGRlIHVzdWFyaW8gKi9cclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB3aWR0aDogMTAwcHg7IC8qIEFqdXN0YSBlbCBhbmNobyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5e6f3bea\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"button-image-user\"\n};\nconst _hoisted_2 = [\"src\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleMenu && $options.toggleMenu(...args)),\n    class: \"button-image-user\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    src: $data.userImage,\n    alt: \"Botón\",\n    class: \"user-image\"\n  }, null, 8 /* PROPS */, _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Utiliza v-if para mostrar el menú cuando isMenuOpen es verdadero \"), $data.isMenuOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    key: 0,\n    class: \"user-menu\",\n    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, [\"stop\"]))\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.goToProfile && $options.goToProfile(...args))\n  }, \"Mi perfil\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.logout && $options.logout(...args))\n  }, \"Log out\")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZTZmM2JlYSZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlclVzZXJCdXR0b24udnVlP2M1ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1pbWFnZS11c2VyXCI+XHJcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJ0b2dnbGVNZW51XCIgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxyXG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2VySW1hZ2VcIiBhbHQ9XCJCb3TDs25cIiBjbGFzcz1cInVzZXItaW1hZ2VcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBVdGlsaXphIHYtaWYgcGFyYSBtb3N0cmFyIGVsIG1lbsO6IGN1YW5kbyBpc01lbnVPcGVuIGVzIHZlcmRhZGVybyAtLT5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJpc01lbnVPcGVuXCIgY2xhc3M9XCJ1c2VyLW1lbnVcIiBAY2xpY2suc3RvcD1cIlwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgQGNsaWNrPVwiZ29Ub1Byb2ZpbGVcIj5NaSBwZXJmaWw8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImxvZ291dFwiPkxvZyBvdXQ8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzTWVudU9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkFwcEhlYWRlclVzZXJCdXR0b25cIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiTm9tYnJlIGRlIFVzdWFyaW9cIiwgLy8gUmVlbXBsYXphIGNvbiBlbCBub21icmUgZGVsIHVzdWFyaW9cclxuICAgICAgICAgICAgdXNlckltYWdlOiByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9EZWZhdWx0VXNlci5qcGdcIiksIC8vIFJ1dGEgZGUgbGEgaW1hZ2VuIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gIXRoaXMuaXNNZW51T3BlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvVG9Qcm9maWxlKCkge1xyXG4gICAgICAgICAgICAvLyBBZ3JlZ2EgbGEgbMOzZ2ljYSBwYXJhIG5hdmVnYXIgYSBsYSBww6FnaW5hIGRlIHBlcmZpbCBkZWwgdXN1YXJpb1xyXG4gICAgICAgICAgICAvLyBFamVtcGxvOiB0aGlzLiRyb3V0ZXIucHVzaCgnL3BlcmZpbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0KCkge1xyXG4gICAgICAgICAgICAvLyBBZ3JlZ2EgbGEgbMOzZ2ljYSBwYXJhIGNlcnJhciBsYSBzZXNpw7NuIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgICAgIC8vIEVqZW1wbG86IFJlYWxpemEgdW5hIHBldGljacOzbiBhbCBzZXJ2aWRvciBwYXJhIGNlcnJhciBsYSBzZXNpw7NuXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2VycmFyIHNlc2nDs25cIik7IC8vIE11ZXN0cmEgdW5hIGFsZXJ0YSBjb21vIGVqZW1wbG9cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgLy8gQWdyZWdhciB1biBlc2N1Y2hhZG9yIGRlIGNsaWNzIGFsIGRvY3VtZW50byBwYXJhIGNlcnJhciBlbCBtZW7DuiBhbCBoYWNlciBjbGljIGVuIGN1YWxxdWllciBwYXJ0ZSBkZSBsYSBwYW50YWxsYVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsb3NlTWVudSk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBFbGltaW5hciBlbCBlc2N1Y2hhZG9yIGRlIGNsaWNzIGFsIGRlc3RydWlyIGVsIGNvbXBvbmVudGVcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZU1lbnUpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjbG9zZU1lbnUoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gQ2VycmFyIGVsIG1lbsO6IHNpIGVzdMOhIGFiaWVydG8geSBzZSBoaXpvIGNsaWMgZnVlcmEgZGUgw6lsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWVudU9wZW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbWVudVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZW51ICYmICFtZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5idXR0b24taW1hZ2UtdXNlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnVzZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51c2VyLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4OyAvKiBQb3NpY2nDs24gZGViYWpvIGRlbCBib3TDs24gZGUgdXN1YXJpbyAqL1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHdpZHRoOiAxMDBweDsgLyogQWp1c3RhIGVsIGFuY2hvIHNlZ8O6biB0dXMgbmVjZXNpZGFkZXMgKi9cclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cb03e1a108142918"; }
/******/ }();
/******/ 
/******/ }
);