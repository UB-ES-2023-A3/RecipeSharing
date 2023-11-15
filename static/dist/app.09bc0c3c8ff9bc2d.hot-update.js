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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      isMenuOpen: false,\n      name: \"AppHeaderUserButton\",\n      username: \"Nombre de Usuario\",\n      // Reemplaza con el nombre del usuario\n      userImage: __webpack_require__(/*! ../assets/images/DefaultUser.jpg */ \"./src/assets/images/DefaultUser.jpg\") // Ruta de la imagen del usuario\n    };\n  },\n\n  methods: {\n    toggleMenu() {\n      this.isMenuOpen = !this.isMenuOpen;\n    },\n    goToProfile() {\n      // Agrega la lógica para navegar a la página de perfil del usuario\n      // Ejemplo: this.$router.push('/perfil');\n    },\n    async logout() {\n      alert(\"LOGIN OUT\");\n      // Determine if the input is an email or username\n      let loginIdentifier = this.usernameOrEmail;\n      if (loginIdentifier.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/)) {\n        // If it matches the email format, set it as an email\n        this.email = loginIdentifier;\n      } else {\n        // Otherwise, set it as a username\n        this.username = loginIdentifier;\n      }\n      try {\n        let response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/login/', {\n          username: this.username,\n          email: this.email,\n          password: this.password\n        }, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        if (response.status === 200) {\n          // El inicio de sesión fue exitoso, redirigir al usuario o realizar otras acciones necesarias\n          alert(\"Logged!\");\n          this.logged = true;\n          localStorage.setItem('logged', this.logged);\n          this.$emit('login-success', true);\n          this.$router.push('/');\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle login failure (e.g., display an error message).\n          if (error.response.status === 400) {\n            alert(error.response.data.error);\n            localStorage.setItem('logged', this.logged);\n          } else if (error.response.status === 500) {\n            alert(\"An error occurred while registering.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other errors.\n          console.error(\"An error occurred while logging in.\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlclVzZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9jNWRlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlTWVudVwiIGNsYXNzPVwiYnV0dG9uLWltYWdlLXVzZXJcIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlckltYWdlXCIgYWx0PVwiQm90w7NuXCIgY2xhc3M9XCJ1c2VyLWltYWdlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gVXRpbGl6YSB2LWlmIHBhcmEgbW9zdHJhciBlbCBtZW7DuiBjdWFuZG8gaXNNZW51T3BlbiBlcyB2ZXJkYWRlcm8gLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiaXNNZW51T3BlblwiIGNsYXNzPVwidXNlci1tZW51XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSBAY2xpY2s9XCJnb1RvUHJvZmlsZVwiPk1pIHBlcmZpbDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgQGNsaWNrPVwibG9nb3V0XCI+TG9nIG91dDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNNZW51T3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBwSGVhZGVyVXNlckJ1dHRvblwiLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJOb21icmUgZGUgVXN1YXJpb1wiLCAvLyBSZWVtcGxhemEgY29uIGVsIG5vbWJyZSBkZWwgdXN1YXJpb1xyXG4gICAgICAgICAgICB1c2VySW1hZ2U6IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL0RlZmF1bHRVc2VyLmpwZ1wiKSwgLy8gUnV0YSBkZSBsYSBpbWFnZW4gZGVsIHVzdWFyaW9cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSAhdGhpcy5pc01lbnVPcGVuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ29Ub1Byb2ZpbGUoKSB7XHJcbiAgICAgICAgICAgIC8vIEFncmVnYSBsYSBsw7NnaWNhIHBhcmEgbmF2ZWdhciBhIGxhIHDDoWdpbmEgZGUgcGVyZmlsIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgICAgIC8vIEVqZW1wbG86IHRoaXMuJHJvdXRlci5wdXNoKCcvcGVyZmlsJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTE9HSU4gT1VUXCIpXHJcbiAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgaW5wdXQgaXMgYW4gZW1haWwgb3IgdXNlcm5hbWVcclxuICAgICAgICAgICAgbGV0IGxvZ2luSWRlbnRpZmllciA9IHRoaXMudXNlcm5hbWVPckVtYWlsO1xyXG4gICAgICAgICAgICBpZiAobG9naW5JZGVudGlmaWVyLm1hdGNoKC9eW0EtWmEtejAtOS5fJS1dK0BbQS1aYS16MC05Li1dK1xcLltBLVphLXpdezIsNH0kLykpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IG1hdGNoZXMgdGhlIGVtYWlsIGZvcm1hdCwgc2V0IGl0IGFzIGFuIGVtYWlsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gbG9naW5JZGVudGlmaWVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZXQgaXQgYXMgYSB1c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGxvZ2luSWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbi8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRWwgaW5pY2lvIGRlIHNlc2nDs24gZnVlIGV4aXRvc28sIHJlZGlyaWdpciBhbCB1c3VhcmlvIG8gcmVhbGl6YXIgb3RyYXMgYWNjaW9uZXMgbmVjZXNhcmlhc1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9nZ2VkIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWQnLCB0aGlzLmxvZ2dlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9naW4tc3VjY2VzcycsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbG9naW4gZmFpbHVyZSAoZS5nLiwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWQnLCB0aGlzLmxvZ2dlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5idXR0b24taW1hZ2UtdXNlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnVzZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51c2VyLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4OyAvKiBQb3NpY2nDs24gZGViYWpvIGRlbCBib3TDs24gZGUgdXN1YXJpbyAqL1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHdpZHRoOiAxMDBweDsgLyogQWp1c3RhIGVsIGFuY2hvIHNlZ8O6biB0dXMgbmVjZXNpZGFkZXMgKi9cclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5e6f3bea\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"button-image-user\"\n};\nconst _hoisted_2 = [\"src\"];\nconst _hoisted_3 = {\n  key: 0,\n  class: \"user-menu\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleMenu && $options.toggleMenu(...args)),\n    class: \"button-image-user\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    src: $data.userImage,\n    alt: \"Botón\",\n    class: \"user-image\"\n  }, null, 8 /* PROPS */, _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Utiliza v-if para mostrar el menú cuando isMenuOpen es verdadero \"), $data.isMenuOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.goToProfile && $options.goToProfile(...args))\n  }, \"Mi perfil\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.logout && $options.logout(...args))\n  }, \"Log out\")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZTZmM2JlYSZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7QUFLQTs7O0FBTEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9jNWRlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlTWVudVwiIGNsYXNzPVwiYnV0dG9uLWltYWdlLXVzZXJcIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlckltYWdlXCIgYWx0PVwiQm90w7NuXCIgY2xhc3M9XCJ1c2VyLWltYWdlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gVXRpbGl6YSB2LWlmIHBhcmEgbW9zdHJhciBlbCBtZW7DuiBjdWFuZG8gaXNNZW51T3BlbiBlcyB2ZXJkYWRlcm8gLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiaXNNZW51T3BlblwiIGNsYXNzPVwidXNlci1tZW51XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSBAY2xpY2s9XCJnb1RvUHJvZmlsZVwiPk1pIHBlcmZpbDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgQGNsaWNrPVwibG9nb3V0XCI+TG9nIG91dDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNNZW51T3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBwSGVhZGVyVXNlckJ1dHRvblwiLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJOb21icmUgZGUgVXN1YXJpb1wiLCAvLyBSZWVtcGxhemEgY29uIGVsIG5vbWJyZSBkZWwgdXN1YXJpb1xyXG4gICAgICAgICAgICB1c2VySW1hZ2U6IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL0RlZmF1bHRVc2VyLmpwZ1wiKSwgLy8gUnV0YSBkZSBsYSBpbWFnZW4gZGVsIHVzdWFyaW9cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSAhdGhpcy5pc01lbnVPcGVuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ29Ub1Byb2ZpbGUoKSB7XHJcbiAgICAgICAgICAgIC8vIEFncmVnYSBsYSBsw7NnaWNhIHBhcmEgbmF2ZWdhciBhIGxhIHDDoWdpbmEgZGUgcGVyZmlsIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgICAgIC8vIEVqZW1wbG86IHRoaXMuJHJvdXRlci5wdXNoKCcvcGVyZmlsJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTE9HSU4gT1VUXCIpXHJcbiAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgaW5wdXQgaXMgYW4gZW1haWwgb3IgdXNlcm5hbWVcclxuICAgICAgICAgICAgbGV0IGxvZ2luSWRlbnRpZmllciA9IHRoaXMudXNlcm5hbWVPckVtYWlsO1xyXG4gICAgICAgICAgICBpZiAobG9naW5JZGVudGlmaWVyLm1hdGNoKC9eW0EtWmEtejAtOS5fJS1dK0BbQS1aYS16MC05Li1dK1xcLltBLVphLXpdezIsNH0kLykpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IG1hdGNoZXMgdGhlIGVtYWlsIGZvcm1hdCwgc2V0IGl0IGFzIGFuIGVtYWlsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gbG9naW5JZGVudGlmaWVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZXQgaXQgYXMgYSB1c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGxvZ2luSWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbi8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRWwgaW5pY2lvIGRlIHNlc2nDs24gZnVlIGV4aXRvc28sIHJlZGlyaWdpciBhbCB1c3VhcmlvIG8gcmVhbGl6YXIgb3RyYXMgYWNjaW9uZXMgbmVjZXNhcmlhc1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9nZ2VkIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWQnLCB0aGlzLmxvZ2dlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9naW4tc3VjY2VzcycsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbG9naW4gZmFpbHVyZSAoZS5nLiwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWQnLCB0aGlzLmxvZ2dlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5idXR0b24taW1hZ2UtdXNlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnVzZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51c2VyLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4OyAvKiBQb3NpY2nDs24gZGViYWpvIGRlbCBib3TDs24gZGUgdXN1YXJpbyAqL1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHdpZHRoOiAxMDBweDsgLyogQWp1c3RhIGVsIGFuY2hvIHNlZ8O6biB0dXMgbmVjZXNpZGFkZXMgKi9cclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "566882165ca6df78"; }
/******/ }();
/******/ 
/******/ }
);