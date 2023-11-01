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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    logged: Boolean,\n    // Define la propiedad logged\n    username: String,\n    email: String,\n    password: String\n  },\n  data() {\n    return {\n      isMenuOpen: false,\n      name: \"AppHeaderUserButton\",\n      userImage: __webpack_require__(/*! ../assets/images/DefaultUser.jpg */ \"./src/assets/images/DefaultUser.jpg\") // Ruta de la imagen del usuario\n    };\n  },\n\n  methods: {\n    toggleMenu() {\n      this.isMenuOpen = !this.isMenuOpen;\n    },\n    goToLogin() {\n      this.$router.push(\"/login\");\n    },\n    goToProfile() {\n      // Agrega la lógica para navegar a la página de perfil del usuario\n      // Ejemplo: this.$router.push('/perfil');\n    },\n    closeMenuOutsideClick(event) {\n      // Verificar si el evento de clic ocurrió fuera del menú\n      const menu = this.$el.querySelector(\".user-menu\");\n      if (menu && !menu.contains(event.target)) {\n        this.closeMenu();\n      }\n    },\n    closeMenu() {\n      this.isMenuOpen = false;\n    },\n    async logout() {\n      try {\n        let response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/login/\", {\n          username: this.username,\n          email: this.email,\n          password: this.password\n        }, {\n          headers: {\n            \"Content-Type\": \"application/json\"\n          }\n        });\n        if (response.status === 200) {\n          // El inicio de sesión fue exitoso, redirigir al usuario o realizar otras acciones necesarias\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle login failure (e.g., display an error message).\n          if (error.response.status === 400) {\n            alert(error.response.data.error);\n            localStorage.setItem(\"logged\", false);\n            localStorage.setItem(\"username\", null);\n            localStorage.setItem(\"email\", null);\n            localStorage.setItem(\"password\", null);\n            window.location.reload();\n          } else if (error.response.status === 500) {\n            alert(\"An error occurred while registering.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other errors.\n          console.error(\"An error occurred while logging in.\");\n        }\n      }\n    }\n  },\n  mounted() {\n    // Agregar un escuchador de clics al documento para cerrar el menú\n    document.addEventListener(\"click\", this.closeMenuOutsideClick);\n  },\n  beforeUnmount() {\n    // Quitar el escuchador de clics al destruir el componente\n    document.removeEventListener(\"click\", this.closeMenuOutsideClick);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlclVzZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9jNWRlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlTWVudVwiIGNsYXNzPVwiYnV0dG9uLWltYWdlLXVzZXJcIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlckltYWdlXCIgYWx0PVwiQm90w7NuXCIgY2xhc3M9XCJ1c2VyLWltYWdlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gVXRpbGl6YSB2LWlmIHBhcmEgbW9zdHJhciBlbCBtZW7DuiBjdWFuZG8gaXNNZW51T3BlbiBlcyB2ZXJkYWRlcm8gLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwibG9nZ2VkICYmIGlzTWVudU9wZW5cIiBjbGFzcz1cInVzZXItbWVudVwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgQGNsaWNrPVwiZ29Ub1Byb2ZpbGVcIj5NaSBwZXJmaWw8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImxvZ291dFwiPkxvZyBvdXQ8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbiwgLy8gRGVmaW5lIGxhIHByb3BpZWRhZCBsb2dnZWRcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzTWVudU9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkFwcEhlYWRlclVzZXJCdXR0b25cIixcclxuICAgICAgICAgICAgdXNlckltYWdlOiByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9EZWZhdWx0VXNlci5qcGdcIiksIC8vIFJ1dGEgZGUgbGEgaW1hZ2VuIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gIXRoaXMuaXNNZW51T3BlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvVG9Mb2dpbigpIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb1RvUHJvZmlsZSgpIHtcclxuICAgICAgICAgICAgLy8gQWdyZWdhIGxhIGzDs2dpY2EgcGFyYSBuYXZlZ2FyIGEgbGEgcMOhZ2luYSBkZSBwZXJmaWwgZGVsIHVzdWFyaW9cclxuICAgICAgICAgICAgLy8gRWplbXBsbzogdGhpcy4kcm91dGVyLnB1c2goJy9wZXJmaWwnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlTWVudU91dHNpZGVDbGljayhldmVudCkge1xyXG4gICAgICAgICAgICAvLyBWZXJpZmljYXIgc2kgZWwgZXZlbnRvIGRlIGNsaWMgb2N1cnJpw7MgZnVlcmEgZGVsIG1lbsO6XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbWVudVwiKTtcclxuICAgICAgICAgICAgaWYgKG1lbnUgJiYgIW1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VNZW51KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvbG9naW4vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsIGluaWNpbyBkZSBzZXNpw7NuIGZ1ZSBleGl0b3NvLCByZWRpcmlnaXIgYWwgdXN1YXJpbyBvIHJlYWxpemFyIG90cmFzIGFjY2lvbmVzIG5lY2VzYXJpYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlIChlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dnZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBhc3N3b3JkXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIEFncmVnYXIgdW4gZXNjdWNoYWRvciBkZSBjbGljcyBhbCBkb2N1bWVudG8gcGFyYSBjZXJyYXIgZWwgbWVuw7pcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZU1lbnVPdXRzaWRlQ2xpY2spO1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVVubW91bnQoKSB7XHJcbiAgICAgICAgLy8gUXVpdGFyIGVsIGVzY3VjaGFkb3IgZGUgY2xpY3MgYWwgZGVzdHJ1aXIgZWwgY29tcG9uZW50ZVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsb3NlTWVudU91dHNpZGVDbGljayk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uYnV0dG9uLWltYWdlLXVzZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDsgLyogUG9zaWNpw7NuIGRlYmFqbyBkZWwgYm90w7NuIGRlIHVzdWFyaW8gKi9cclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB3aWR0aDogMTAwcHg7IC8qIEFqdXN0YSBlbCBhbmNobyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5e6f3bea\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"button-image-user\"\n};\nconst _hoisted_2 = [\"src\"];\nconst _hoisted_3 = {\n  key: 0,\n  class: \"user-menu\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleMenu && $options.toggleMenu(...args)),\n    class: \"button-image-user\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    src: $data.userImage,\n    alt: \"Botón\",\n    class: \"user-image\"\n  }, null, 8 /* PROPS */, _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Utiliza v-if para mostrar el menú cuando isMenuOpen es verdadero \"), $props.logged && $data.isMenuOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.goToProfile && $options.goToProfile(...args))\n  }, \"Mi perfil\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.logout && $options.logout(...args))\n  }, \"Log out\")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZTZmM2JlYSZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7QUFLQTs7O0FBTEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9jNWRlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlTWVudVwiIGNsYXNzPVwiYnV0dG9uLWltYWdlLXVzZXJcIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlckltYWdlXCIgYWx0PVwiQm90w7NuXCIgY2xhc3M9XCJ1c2VyLWltYWdlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gVXRpbGl6YSB2LWlmIHBhcmEgbW9zdHJhciBlbCBtZW7DuiBjdWFuZG8gaXNNZW51T3BlbiBlcyB2ZXJkYWRlcm8gLS0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwibG9nZ2VkICYmIGlzTWVudU9wZW5cIiBjbGFzcz1cInVzZXItbWVudVwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgQGNsaWNrPVwiZ29Ub1Byb2ZpbGVcIj5NaSBwZXJmaWw8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImxvZ291dFwiPkxvZyBvdXQ8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbiwgLy8gRGVmaW5lIGxhIHByb3BpZWRhZCBsb2dnZWRcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzTWVudU9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkFwcEhlYWRlclVzZXJCdXR0b25cIixcclxuICAgICAgICAgICAgdXNlckltYWdlOiByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9EZWZhdWx0VXNlci5qcGdcIiksIC8vIFJ1dGEgZGUgbGEgaW1hZ2VuIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gIXRoaXMuaXNNZW51T3BlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvVG9Mb2dpbigpIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb1RvUHJvZmlsZSgpIHtcclxuICAgICAgICAgICAgLy8gQWdyZWdhIGxhIGzDs2dpY2EgcGFyYSBuYXZlZ2FyIGEgbGEgcMOhZ2luYSBkZSBwZXJmaWwgZGVsIHVzdWFyaW9cclxuICAgICAgICAgICAgLy8gRWplbXBsbzogdGhpcy4kcm91dGVyLnB1c2goJy9wZXJmaWwnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlTWVudU91dHNpZGVDbGljayhldmVudCkge1xyXG4gICAgICAgICAgICAvLyBWZXJpZmljYXIgc2kgZWwgZXZlbnRvIGRlIGNsaWMgb2N1cnJpw7MgZnVlcmEgZGVsIG1lbsO6XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbWVudVwiKTtcclxuICAgICAgICAgICAgaWYgKG1lbnUgJiYgIW1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VNZW51KCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvbG9naW4vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsIGluaWNpbyBkZSBzZXNpw7NuIGZ1ZSBleGl0b3NvLCByZWRpcmlnaXIgYWwgdXN1YXJpbyBvIHJlYWxpemFyIG90cmFzIGFjY2lvbmVzIG5lY2VzYXJpYXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlIChlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dnZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBhc3N3b3JkXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIEFncmVnYXIgdW4gZXNjdWNoYWRvciBkZSBjbGljcyBhbCBkb2N1bWVudG8gcGFyYSBjZXJyYXIgZWwgbWVuw7pcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZU1lbnVPdXRzaWRlQ2xpY2spO1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVVubW91bnQoKSB7XHJcbiAgICAgICAgLy8gUXVpdGFyIGVsIGVzY3VjaGFkb3IgZGUgY2xpY3MgYWwgZGVzdHJ1aXIgZWwgY29tcG9uZW50ZVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsb3NlTWVudU91dHNpZGVDbGljayk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uYnV0dG9uLWltYWdlLXVzZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDsgLyogUG9zaWNpw7NuIGRlYmFqbyBkZWwgYm90w7NuIGRlIHVzdWFyaW8gKi9cclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB3aWR0aDogMTAwcHg7IC8qIEFqdXN0YSBlbCBhbmNobyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=style&index=0&id=5e6f3bea&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=style&index=0&id=5e6f3bea&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.button-image-user[data-v-5e6f3bea] {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    margin-top: 5px;\\r\\n    margin-right: 20px;\\r\\n    border-radius: 50%;\\n}\\n.user-image[data-v-5e6f3bea] {\\r\\n    width: 70px;\\r\\n    height: 70px;\\r\\n    border-radius: 50%;\\r\\n    margin-right: 10px;\\n}\\n.user-menu[data-v-5e6f3bea] {\\r\\n    position: absolute;\\r\\n    top: 60px; /* Posición debajo del botón de usuario */\\r\\n    right: 0;\\r\\n    background-color: #fff;\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 4px;\\r\\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\\r\\n    width: 100px; /* Ajusta el ancho según tus necesidades */\\n}\\nul[data-v-5e6f3bea] {\\r\\n    list-style: none;\\r\\n    padding: 0;\\r\\n    margin: 0;\\n}\\nli[data-v-5e6f3bea] {\\r\\n    padding: 10px;\\r\\n    cursor: pointer;\\n}\\nli[data-v-5e6f3bea]:hover {\\r\\n    background-color: #f0f0f0;\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlclVzZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWU2ZjNiZWEmc2NvcGVkPXRydWUmbGFuZz1jc3MiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9kZmFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvbm9Tb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnV0dG9uLWltYWdlLXVzZXJbZGF0YS12LTVlNmYzYmVhXSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi51c2VyLWltYWdlW2RhdGEtdi01ZTZmM2JlYV0ge1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnVzZXItbWVudVtkYXRhLXYtNWU2ZjNiZWFdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDYwcHg7IC8qIFBvc2ljacOzbiBkZWJham8gZGVsIGJvdMOzbiBkZSB1c3VhcmlvICovXFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4OyAvKiBBanVzdGEgZWwgYW5jaG8gc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xcbn1cXG51bFtkYXRhLXYtNWU2ZjNiZWFdIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5saVtkYXRhLXYtNWU2ZjNiZWFdIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5saVtkYXRhLXYtNWU2ZjNiZWFdOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=style&index=0&id=5e6f3bea&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3b213e300abcb666"; }
/******/ }();
/******/ 
/******/ }
);