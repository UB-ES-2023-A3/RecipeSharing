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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    logged: Boolean,\n    // Define la propiedad logged\n    username: String,\n    email: String,\n    password: String\n  },\n  data() {\n    return {\n      isMenuOpen: false,\n      name: \"AppHeaderUserButton\",\n      userImage: __webpack_require__(/*! ../assets/images/DefaultUser.jpg */ \"./src/assets/images/DefaultUser.jpg\") // Ruta de la imagen del usuario\n    };\n  },\n\n  methods: {\n    toggleMenu() {\n      this.isMenuOpen = !this.isMenuOpen;\n    },\n    goToProfile() {\n      // Agrega la lógica para navegar a la página de perfil del usuario\n      // Ejemplo: this.$router.push('/perfil');\n    },\n    async logout() {\n      try {\n        let response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/login/', {\n          username: this.username,\n          email: this.email,\n          password: this.password\n        }, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        if (response.status === 200) {\n          // El inicio de sesión fue exitoso, redirigir al usuario o realizar otras acciones necesarias\n          alert(\"Logged!\");\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle login failure (e.g., display an error message).\n          if (error.response.status === 400) {\n            alert(error.response.data.error);\n            localStorage.setItem('logged', false);\n            window.location.refresh();\n          } else if (error.response.status === 500) {\n            alert(\"An error occurred while registering.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other errors.\n          console.error(\"An error occurred while logging in.\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlclVzZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7O0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlclVzZXJCdXR0b24udnVlP2M1ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1pbWFnZS11c2VyXCI+XHJcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJ0b2dnbGVNZW51XCIgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxyXG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2VySW1hZ2VcIiBhbHQ9XCJCb3TDs25cIiBjbGFzcz1cInVzZXItaW1hZ2VcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBVdGlsaXphIHYtaWYgcGFyYSBtb3N0cmFyIGVsIG1lbsO6IGN1YW5kbyBpc01lbnVPcGVuIGVzIHZlcmRhZGVybyAtLT5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJpc01lbnVPcGVuXCIgY2xhc3M9XCJ1c2VyLW1lbnVcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImdvVG9Qcm9maWxlXCI+TWkgcGVyZmlsPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBAY2xpY2s9XCJsb2dvdXRcIj5Mb2cgb3V0PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBsb2dnZWQ6IEJvb2xlYW4sIC8vIERlZmluZSBsYSBwcm9waWVkYWQgbG9nZ2VkXHJcbiAgICAgICAgdXNlcm5hbWU6IFN0cmluZyxcclxuICAgICAgICBlbWFpbDogU3RyaW5nLFxyXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc01lbnVPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgbmFtZTogXCJBcHBIZWFkZXJVc2VyQnV0dG9uXCIsXHJcbiAgICAgICAgICAgIHVzZXJJbWFnZTogcmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvRGVmYXVsdFVzZXIuanBnXCIpLCAvLyBSdXRhIGRlIGxhIGltYWdlbiBkZWwgdXN1YXJpb1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNZW51T3BlbiA9ICF0aGlzLmlzTWVudU9wZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb1RvUHJvZmlsZSgpIHtcclxuICAgICAgICAgICAgLy8gQWdyZWdhIGxhIGzDs2dpY2EgcGFyYSBuYXZlZ2FyIGEgbGEgcMOhZ2luYSBkZSBwZXJmaWwgZGVsIHVzdWFyaW9cclxuICAgICAgICAgICAgLy8gRWplbXBsbzogdGhpcy4kcm91dGVyLnB1c2goJy9wZXJmaWwnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbi8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRWwgaW5pY2lvIGRlIHNlc2nDs24gZnVlIGV4aXRvc28sIHJlZGlyaWdpciBhbCB1c3VhcmlvIG8gcmVhbGl6YXIgb3RyYXMgYWNjaW9uZXMgbmVjZXNhcmlhc1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9nZ2VkIVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGxvZ2luIGZhaWx1cmUgKGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSkuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVmcmVzaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5idXR0b24taW1hZ2UtdXNlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnVzZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51c2VyLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4OyAvKiBQb3NpY2nDs24gZGViYWpvIGRlbCBib3TDs24gZGUgdXN1YXJpbyAqL1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHdpZHRoOiAxMDBweDsgLyogQWp1c3RhIGVsIGFuY2hvIHNlZ8O6biB0dXMgbmVjZXNpZGFkZXMgKi9cclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5e6f3bea\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"button-image-user\"\n};\nconst _hoisted_2 = [\"src\"];\nconst _hoisted_3 = {\n  key: 0,\n  class: \"user-menu\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleMenu && $options.toggleMenu(...args)),\n    class: \"button-image-user\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    src: $data.userImage,\n    alt: \"Botón\",\n    class: \"user-image\"\n  }, null, 8 /* PROPS */, _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Utiliza v-if para mostrar el menú cuando isMenuOpen es verdadero \"), $data.isMenuOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.goToProfile && $options.goToProfile(...args))\n  }, \"Mi perfil\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.logout && $options.logout(...args))\n  }, \"Log out\")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZTZmM2JlYSZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7QUFLQTs7O0FBTEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9jNWRlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlTWVudVwiIGNsYXNzPVwiYnV0dG9uLWltYWdlLXVzZXJcIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlckltYWdlXCIgYWx0PVwiQm90w7NuXCIgY2xhc3M9XCJ1c2VyLWltYWdlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gVXRpbGl6YSB2LWlmIHBhcmEgbW9zdHJhciBlbCBtZW7DuiBjdWFuZG8gaXNNZW51T3BlbiBlcyB2ZXJkYWRlcm8gLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiaXNNZW51T3BlblwiIGNsYXNzPVwidXNlci1tZW51XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSBAY2xpY2s9XCJnb1RvUHJvZmlsZVwiPk1pIHBlcmZpbDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgQGNsaWNrPVwibG9nb3V0XCI+TG9nIG91dDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbG9nZ2VkOiBCb29sZWFuLCAvLyBEZWZpbmUgbGEgcHJvcGllZGFkIGxvZ2dlZFxyXG4gICAgICAgIHVzZXJuYW1lOiBTdHJpbmcsXHJcbiAgICAgICAgZW1haWw6IFN0cmluZyxcclxuICAgICAgICBwYXNzd29yZDogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNNZW51T3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBwSGVhZGVyVXNlckJ1dHRvblwiLFxyXG4gICAgICAgICAgICB1c2VySW1hZ2U6IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL0RlZmF1bHRVc2VyLmpwZ1wiKSwgLy8gUnV0YSBkZSBsYSBpbWFnZW4gZGVsIHVzdWFyaW9cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSAhdGhpcy5pc01lbnVPcGVuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ29Ub1Byb2ZpbGUoKSB7XHJcbiAgICAgICAgICAgIC8vIEFncmVnYSBsYSBsw7NnaWNhIHBhcmEgbmF2ZWdhciBhIGxhIHDDoWdpbmEgZGUgcGVyZmlsIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgICAgIC8vIEVqZW1wbG86IHRoaXMuJHJvdXRlci5wdXNoKCcvcGVyZmlsJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4vJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsIGluaWNpbyBkZSBzZXNpw7NuIGZ1ZSBleGl0b3NvLCByZWRpcmlnaXIgYWwgdXN1YXJpbyBvIHJlYWxpemFyIG90cmFzIGFjY2lvbmVzIG5lY2VzYXJpYXNcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkxvZ2dlZCFcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlIChlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlZnJlc2goKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZWdpc3RlcmluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIHN0YXR1cyBjb2Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlVuZXhwZWN0ZWQgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgZXJyb3JzLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uYnV0dG9uLWltYWdlLXVzZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDsgLyogUG9zaWNpw7NuIGRlYmFqbyBkZWwgYm90w7NuIGRlIHVzdWFyaW8gKi9cclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB3aWR0aDogMTAwcHg7IC8qIEFqdXN0YSBlbCBhbmNobyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "61fd9e10eaf00601"; }
/******/ }();
/******/ 
/******/ }
);