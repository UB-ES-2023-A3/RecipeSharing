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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    logged: Boolean,\n    // Define the logged property\n    username: String,\n    email: String,\n    password: String\n  },\n  data() {\n    return {\n      isMenuOpen: false,\n      // Controls the visibility of the user menu\n      name: \"AppHeaderUserButton\",\n      userImage: __webpack_require__(/*! ../assets/images/DefaultUser.jpg */ \"./src/assets/images/DefaultUser.jpg\") // User image path\n    };\n  },\n\n  methods: {\n    toggleMenu() {\n      this.isMenuOpen = !this.isMenuOpen; // Toggles the user menu\n      if (this.isMenuOpen) {\n        // Si el menú se abre, agrega un manejador de eventos de clic al documento\n        document.addEventListener('click', this.closeMenuOnClickOutside);\n      } else {\n        // Si el menú se cierra, elimina el manejador de eventos de clic del documento\n        document.removeEventListener('click', this.closeMenuOnClickOutside);\n      }\n    },\n    closeMenu() {\n      this.isMenuOpen = false;\n      document.removeEventListener('click', this.closeMenuOnClickOutside);\n    },\n    closeMenuOnClickOutside(event) {\n      // Cierra el menú si se hace clic en cualquier parte de la pantalla que no sea el botón o el menú.\n      const button = this.$el.querySelector('.button-image-user');\n      const menu = this.$el.querySelector('.user-menu');\n      if (button && !button.contains(event.target) && menu && !menu.contains(event.target)) {\n        this.closeMenu();\n      }\n    },\n    goToLogin() {\n      this.$router.push('/login'); // Navigate to the login page\n    },\n\n    goToProfile() {\n      this.$router.push('/profile');\n    },\n    async logout() {\n      try {\n        let response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/login/', {\n          username: \"Logout\",\n          email: this.email,\n          password: this.password\n        }, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        if (response.status === 200) {\n          // Successful login, redirect the user or perform other necessary actions\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle login failure (e.g., display an error message).\n          if (error.response.status === 400) {\n            alert(error.response.data.error);\n            localStorage.setItem('logged', false);\n            localStorage.setItem('username', null);\n            localStorage.setItem('email', null);\n            localStorage.setItem('password', null);\n            window.location.reload();\n          } else if (error.response.status === 500) {\n            alert(\"An error occurred while logging in.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other errors.\n          console.error(\"An error occurred while logging in.\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlclVzZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9jNWRlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWltYWdlLXVzZXJcIj5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJ0b2dnbGVNZW51XCIgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxuICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlckltYWdlXCIgYWx0PVwiQnV0dG9uXCIgY2xhc3M9XCJ1c2VyLWltYWdlXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBVc2Ugdi1pZiB0byBzaG93IHRoZSBtZW51IHdoZW4gaXNNZW51T3BlbiBpcyB0cnVlIC0tPlxuICAgICAgICA8ZGl2IHYtaWY9XCJsb2dnZWQgJiYgaXNNZW51T3BlblwiIGNsYXNzPVwidXNlci1tZW51XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImdvVG9Qcm9maWxlXCI+TXkgUHJvZmlsZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImxvZ291dFwiPkxvZyBPdXQ8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cIiFsb2dnZWQgJiYgaXNNZW51T3BlblwiIGNsYXNzPVwidXNlci1tZW51XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImdvVG9Mb2dpblwiPkxvZyBJbjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbiwgLy8gRGVmaW5lIHRoZSBsb2dnZWQgcHJvcGVydHlcbiAgICAgICAgdXNlcm5hbWU6IFN0cmluZyxcbiAgICAgICAgZW1haWw6IFN0cmluZyxcbiAgICAgICAgcGFzc3dvcmQ6IFN0cmluZyxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc01lbnVPcGVuOiBmYWxzZSwgLy8gQ29udHJvbHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHVzZXIgbWVudVxuICAgICAgICAgICAgbmFtZTogXCJBcHBIZWFkZXJVc2VyQnV0dG9uXCIsXG4gICAgICAgICAgICB1c2VySW1hZ2U6IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL0RlZmF1bHRVc2VyLmpwZ1wiKSwgLy8gVXNlciBpbWFnZSBwYXRoXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSAhdGhpcy5pc01lbnVPcGVuOyAvLyBUb2dnbGVzIHRoZSB1c2VyIG1lbnVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCBtZW7DuiBzZSBhYnJlLCBhZ3JlZ2EgdW4gbWFuZWphZG9yIGRlIGV2ZW50b3MgZGUgY2xpYyBhbCBkb2N1bWVudG9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51T25DbGlja091dHNpZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCBtZW7DuiBzZSBjaWVycmEsIGVsaW1pbmEgZWwgbWFuZWphZG9yIGRlIGV2ZW50b3MgZGUgY2xpYyBkZWwgZG9jdW1lbnRvXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudU9uQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNZW51KCkge1xuICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51T25DbGlja091dHNpZGUpO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZU1lbnVPbkNsaWNrT3V0c2lkZShldmVudCkge1xuICAgICAgICAgICAgLy8gQ2llcnJhIGVsIG1lbsO6IHNpIHNlIGhhY2UgY2xpYyBlbiBjdWFscXVpZXIgcGFydGUgZGUgbGEgcGFudGFsbGEgcXVlIG5vIHNlYSBlbCBib3TDs24gbyBlbCBtZW7Dui5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24taW1hZ2UtdXNlcicpO1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW1lbnUnKTtcbiAgICAgICAgICAgIGlmIChidXR0b24gJiYgIWJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpICYmIG1lbnUgJiYgIW1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdvVG9Mb2dpbigpIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbG9naW4nKTsgLy8gTmF2aWdhdGUgdG8gdGhlIGxvZ2luIHBhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgZ29Ub1Byb2ZpbGUoKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbG9nb3V0KCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4vJywge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJMb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bCBsb2dpbiwgcmVkaXJlY3QgdGhlIHVzZXIgb3IgcGVyZm9ybSBvdGhlciBuZWNlc3NhcnkgYWN0aW9uc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlIChlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UpLlxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzc3dvcmQnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4uYnV0dG9uLWltYWdlLXVzZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1pbWFnZSB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VyLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmxpIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5e6f3bea\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"button-image-user\"\n};\nconst _hoisted_2 = [\"src\"];\nconst _hoisted_3 = {\n  key: 0,\n  class: \"user-menu\"\n};\nconst _hoisted_4 = {\n  key: 1,\n  class: \"user-menu\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleMenu && $options.toggleMenu(...args)),\n    class: \"button-image-user\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    src: $data.userImage,\n    alt: \"Button\",\n    class: \"user-image\"\n  }, null, 8 /* PROPS */, _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Use v-if to show the menu when isMenuOpen is true \"), $props.logged && $data.isMenuOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.goToProfile && $options.goToProfile(...args))\n  }, \"My Profile\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.logout && $options.logout(...args))\n  }, \"Log Out\")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), !$props.logged && $data.isMenuOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[3] || (_cache[3] = (...args) => $options.goToLogin && $options.goToLogin(...args))\n  }, \"Log In\")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZTZmM2JlYSZzY29wZWQ9dHJ1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7QUFLQTs7OztBQU1BOzs7QUFYQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXJVc2VyQnV0dG9uLnZ1ZT9jNWRlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWltYWdlLXVzZXJcIj5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJ0b2dnbGVNZW51XCIgY2xhc3M9XCJidXR0b24taW1hZ2UtdXNlclwiPlxuICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlckltYWdlXCIgYWx0PVwiQnV0dG9uXCIgY2xhc3M9XCJ1c2VyLWltYWdlXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBVc2Ugdi1pZiB0byBzaG93IHRoZSBtZW51IHdoZW4gaXNNZW51T3BlbiBpcyB0cnVlIC0tPlxuICAgICAgICA8ZGl2IHYtaWY9XCJsb2dnZWQgJiYgaXNNZW51T3BlblwiIGNsYXNzPVwidXNlci1tZW51XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImdvVG9Qcm9maWxlXCI+TXkgUHJvZmlsZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImxvZ291dFwiPkxvZyBPdXQ8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cIiFsb2dnZWQgJiYgaXNNZW51T3BlblwiIGNsYXNzPVwidXNlci1tZW51XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIEBjbGljaz1cImdvVG9Mb2dpblwiPkxvZyBJbjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGxvZ2dlZDogQm9vbGVhbiwgLy8gRGVmaW5lIHRoZSBsb2dnZWQgcHJvcGVydHlcbiAgICAgICAgdXNlcm5hbWU6IFN0cmluZyxcbiAgICAgICAgZW1haWw6IFN0cmluZyxcbiAgICAgICAgcGFzc3dvcmQ6IFN0cmluZyxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc01lbnVPcGVuOiBmYWxzZSwgLy8gQ29udHJvbHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHVzZXIgbWVudVxuICAgICAgICAgICAgbmFtZTogXCJBcHBIZWFkZXJVc2VyQnV0dG9uXCIsXG4gICAgICAgICAgICB1c2VySW1hZ2U6IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL0RlZmF1bHRVc2VyLmpwZ1wiKSwgLy8gVXNlciBpbWFnZSBwYXRoXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSAhdGhpcy5pc01lbnVPcGVuOyAvLyBUb2dnbGVzIHRoZSB1c2VyIG1lbnVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCBtZW7DuiBzZSBhYnJlLCBhZ3JlZ2EgdW4gbWFuZWphZG9yIGRlIGV2ZW50b3MgZGUgY2xpYyBhbCBkb2N1bWVudG9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51T25DbGlja091dHNpZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTaSBlbCBtZW7DuiBzZSBjaWVycmEsIGVsaW1pbmEgZWwgbWFuZWphZG9yIGRlIGV2ZW50b3MgZGUgY2xpYyBkZWwgZG9jdW1lbnRvXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudU9uQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNZW51KCkge1xuICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51T25DbGlja091dHNpZGUpO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZU1lbnVPbkNsaWNrT3V0c2lkZShldmVudCkge1xuICAgICAgICAgICAgLy8gQ2llcnJhIGVsIG1lbsO6IHNpIHNlIGhhY2UgY2xpYyBlbiBjdWFscXVpZXIgcGFydGUgZGUgbGEgcGFudGFsbGEgcXVlIG5vIHNlYSBlbCBib3TDs24gbyBlbCBtZW7Dui5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24taW1hZ2UtdXNlcicpO1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW1lbnUnKTtcbiAgICAgICAgICAgIGlmIChidXR0b24gJiYgIWJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpICYmIG1lbnUgJiYgIW1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdvVG9Mb2dpbigpIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbG9naW4nKTsgLy8gTmF2aWdhdGUgdG8gdGhlIGxvZ2luIHBhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgZ29Ub1Byb2ZpbGUoKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbG9nb3V0KCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4vJywge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJMb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bCBsb2dpbiwgcmVkaXJlY3QgdGhlIHVzZXIgb3IgcGVyZm9ybSBvdGhlciBuZWNlc3NhcnkgYWN0aW9uc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlIChlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UpLlxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzc3dvcmQnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4uYnV0dG9uLWltYWdlLXVzZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1pbWFnZSB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VyLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmxpIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeaderUserButton.vue?vue&type=template&id=5e6f3bea&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "563ab8cae00610cf"; }
/******/ }();
/******/ 
/******/ }
);