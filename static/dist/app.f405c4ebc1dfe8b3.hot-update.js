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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AppTextField.vue */ \"./src/components/AppTextField.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_AppTextFieldPassword_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AppTextFieldPassword.vue */ \"./src/components/AppTextFieldPassword.vue\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"LoginPage\",\n  components: {\n    AppTextFieldPassword: _components_AppTextFieldPassword_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    AppTextField: _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data() {\n    return {\n      // Data properties for username, email, password, and more\n      usernameOrEmail: \"\",\n      password: \"\",\n      username: \"\",\n      email: \"\",\n      defaultMessageUsernameOrEmail: \"Enter your username or email\",\n      defaultMessagePassword: \"Enter your password\",\n      logged: false // A flag to indicate if the user is logged in\n    };\n  },\n\n  methods: {\n    async login() {\n      // Determine if the input is an email or username\n      if (this.usernameOrEmail === 0 || this.password.length === 0) {\n        alert(\"Complete the form\");\n        return;\n      }\n      let loginIdentifier = this.usernameOrEmail;\n      if (loginIdentifier.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/)) {\n        // If it matches the email format, set it as an email\n        this.email = loginIdentifier;\n      } else {\n        // Otherwise, set it as a username\n        this.username = loginIdentifier;\n      }\n      try {\n        let response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post('/login/', {\n          username: this.username,\n          email: this.email,\n          password: this.password\n        }, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        if (response.status === 200) {\n          // Successful login, perform necessary actions\n          alert(\"Logged!\"); // Display a success message\n          this.logged = true; // Set the logged flag to true\n          localStorage.setItem('logged', this.logged); // Store the logged status in local storage\n          localStorage.setItem('username', this.username);\n          this.$emit('login-success', this.logged); // Emit a custom event indicating login success\n          this.$emit('username-success', this.username);\n          this.$emit('email-success', this.email);\n          this.$emit('password-success', this.password);\n          this.$router.push('/'); // Redirect to the home page\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle login failure (e.g., display an error message).\n          if (error.response.status === 400) {\n            alert(error.response.data.error);\n          } else if (error.response.status === 500) {\n            alert(\"An error occurred while registering.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other errors.\n          console.error(\"An error occurred while logging in.\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Mb2dpblBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvTG9naW5QYWdlLnZ1ZT8zMDQwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgaWQ9XCJsb2dpbk1haW5Db250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibG9naW5DZW50ZXJlZENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImxvZ2luXCIgaWQ9XCJsb2dpbkZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVPckVtYWlsXCI+VXNlcm5hbWUgb3IgRW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEFwcFRleHRGaWVsZCBjb21wb25lbnQgZm9yIHVzZXJuYW1lIG9yIGVtYWlsIGlucHV0IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0TWVzc2FnZT1cImRlZmF1bHRNZXNzYWdlVXNlcm5hbWVPckVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwidXNlcm5hbWVPckVtYWlsID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBBcHBUZXh0RmllbGRQYXNzd29yZCBjb21wb25lbnQgZm9yIHBhc3N3b3JkIGlucHV0IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0RmllbGRQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRlZmF1bHRNZXNzYWdlPVwiZGVmYXVsdE1lc3NhZ2VQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRleHRWYWx1ZT1cInBhc3N3b3JkID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5SaWdodEZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvcmVnaXN0ZXJcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IFJlZ2lzdGVyIGhlcmU8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCI+wqsgUmV0dXJuPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9hcHBTdHlsZXMuY3NzJztcclxuaW1wb3J0IEFwcFRleHRGaWVsZCBmcm9tIFwiQC9jb21wb25lbnRzL0FwcFRleHRGaWVsZC52dWVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEFwcFRleHRGaWVsZFBhc3N3b3JkIGZyb20gXCJAL2NvbXBvbmVudHMvQXBwVGV4dEZpZWxkUGFzc3dvcmQudnVlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiTG9naW5QYWdlXCIsXHJcbiAgICBjb21wb25lbnRzOiB7QXBwVGV4dEZpZWxkUGFzc3dvcmQsIEFwcFRleHRGaWVsZH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vIERhdGEgcHJvcGVydGllcyBmb3IgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYW5kIG1vcmVcclxuICAgICAgICAgICAgdXNlcm5hbWVPckVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVVzZXJuYW1lT3JFbWFpbDogXCJFbnRlciB5b3VyIHVzZXJuYW1lIG9yIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlUGFzc3dvcmQ6IFwiRW50ZXIgeW91ciBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBsb2dnZWQ6IGZhbHNlLCAvLyBBIGZsYWcgdG8gaW5kaWNhdGUgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgaW5wdXQgaXMgYW4gZW1haWwgb3IgdXNlcm5hbWVcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcm5hbWVPckVtYWlsID09PSAwIHx8IHRoaXMucGFzc3dvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkNvbXBsZXRlIHRoZSBmb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsb2dpbklkZW50aWZpZXIgPSB0aGlzLnVzZXJuYW1lT3JFbWFpbDtcclxuICAgICAgICAgICAgaWYgKGxvZ2luSWRlbnRpZmllci5tYXRjaCgvXltBLVphLXowLTkuXyUtXStAW0EtWmEtejAtOS4tXStcXC5bQS1aYS16XXsyLDR9JC8pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCBtYXRjaGVzIHRoZSBlbWFpbCBmb3JtYXQsIHNldCBpdCBhcyBhbiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbCA9IGxvZ2luSWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgc2V0IGl0IGFzIGEgdXNlcm5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBsb2dpbklkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4vJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgbG9naW4sIHBlcmZvcm0gbmVjZXNzYXJ5IGFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkxvZ2dlZCFcIikgLy8gRGlzcGxheSBhIHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkID0gdHJ1ZTsgLy8gU2V0IHRoZSBsb2dnZWQgZmxhZyB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIHRoaXMubG9nZ2VkKTsgLy8gU3RvcmUgdGhlIGxvZ2dlZCBzdGF0dXMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHRoaXMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xvZ2luLXN1Y2Nlc3MnLCB0aGlzLmxvZ2dlZCk7IC8vIEVtaXQgYSBjdXN0b20gZXZlbnQgaW5kaWNhdGluZyBsb2dpbiBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXNlcm5hbWUtc3VjY2VzcycsIHRoaXMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2VtYWlsLXN1Y2Nlc3MnLCB0aGlzLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwYXNzd29yZC1zdWNjZXNzJywgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGxvZ2luIGZhaWx1cmUgKGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSkuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZWdpc3RlcmluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIHN0YXR1cyBjb2Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlVuZXhwZWN0ZWQgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgZXJyb3JzLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn07XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4jbG9naW5NYWluQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4jbG9naW5DZW50ZXJlZENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICBtaW4td2lkdGg6IDM4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWEzZDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG5cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiNsb2dpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweCA1MHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZiMzc4O1xyXG5cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XHJcblxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jbG9naW5SaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA1MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmxvZ2luVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGY4NTAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmJmMDA7XHJcblxyXG59XHJcblxyXG4ubG9naW5SaWdodEZvcm0ge1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5sb2dpblJpZ2h0Rm9ybSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNlN2Q2YzY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5sb2dpblJpZ2h0Rm9ybSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jbG9naW4gYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgY29sb3I6ICNlN2Q2YzY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2xvZ2luIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YzAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XHJcbiAgICAjbG9naW5NYWluQ29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblxyXG4gICAgICAgIG1pbi13aWR0aDogMzgwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY2NzY5O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcblxyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxuICAgICNsb2dpbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgI2xvZ2luUmlnaHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-16d8eba4\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  id: \"loginMainContainer\"\n};\nconst _hoisted_2 = {\n  id: \"loginCenteredContainer\"\n};\nconst _hoisted_3 = {\n  id: \"login\"\n};\nconst _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"usernameOrEmail\"\n}, \"Username or Email:\", -1 /* HOISTED */));\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password:\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\"\n}, \"Login\", -1 /* HOISTED */));\nconst _hoisted_7 = {\n  id: \"loginRight\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"loginTitle\"\n}, \" Login \", -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"hr\", null, null, -1 /* HOISTED */));\nconst _hoisted_10 = {\n  class: \"loginRightForm\"\n};\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"hr\", null, null, -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppTextField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppTextField\");\n  const _component_AppTextFieldPassword = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppTextFieldPassword\");\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.login && $options.login(...args), [\"prevent\"])),\n    id: \"loginForm\"\n  }, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" AppTextField component for username or email input \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessageUsernameOrEmail,\n    \"onUpdate:textValue\": _cache[0] || (_cache[0] = $event => $data.usernameOrEmail = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"]), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" AppTextFieldPassword component for password input \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextFieldPassword, {\n    defaultMessage: $data.defaultMessagePassword,\n    \"onUpdate:textValue\": _cache[1] || (_cache[1] = $event => $data.password = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"]), _hoisted_6], 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/register\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Don't have an account? Register here\")]),\n    _: 1 /* STABLE */\n  }), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"« Return\")]),\n    _: 1 /* STABLE */\n  })])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvTG9naW5QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNmQ4ZWJhNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QUFDQTtBQUFBO0FBRUE7Ozs7OztBQTFCQTtBQUdBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQVNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL0xvZ2luUGFnZS52dWU/MzA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwibG9naW5NYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvZ2luQ2VudGVyZWRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJsb2dpblwiIGlkPVwibG9naW5Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lT3JFbWFpbFwiPlVzZXJuYW1lIG9yIEVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBBcHBUZXh0RmllbGQgY29tcG9uZW50IGZvciB1c2VybmFtZSBvciBlbWFpbCBpbnB1dCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVVzZXJuYW1lT3JFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRleHRWYWx1ZT1cInVzZXJuYW1lT3JFbWFpbCA9ICRldmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQXBwVGV4dEZpZWxkUGFzc3dvcmQgY29tcG9uZW50IGZvciBwYXNzd29yZCBpbnB1dCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0TWVzc2FnZT1cImRlZmF1bHRNZXNzYWdlUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJwYXNzd29yZCA9ICRldmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luUmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpblRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luUmlnaHRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3JlZ2lzdGVyXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBSZWdpc3RlciBoZXJlPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiPsKrIFJldHVybjwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XHJcbmltcG9ydCBBcHBUZXh0RmllbGQgZnJvbSBcIkAvY29tcG9uZW50cy9BcHBUZXh0RmllbGQudnVlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBBcHBUZXh0RmllbGRQYXNzd29yZCBmcm9tIFwiQC9jb21wb25lbnRzL0FwcFRleHRGaWVsZFBhc3N3b3JkLnZ1ZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIkxvZ2luUGFnZVwiLFxyXG4gICAgY29tcG9uZW50czoge0FwcFRleHRGaWVsZFBhc3N3b3JkLCBBcHBUZXh0RmllbGR9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBEYXRhIHByb3BlcnRpZXMgZm9yIHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGFuZCBtb3JlXHJcbiAgICAgICAgICAgIHVzZXJuYW1lT3JFbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VVc2VybmFtZU9yRW1haWw6IFwiRW50ZXIgeW91ciB1c2VybmFtZSBvciBlbWFpbFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVBhc3N3b3JkOiBcIkVudGVyIHlvdXIgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgbG9nZ2VkOiBmYWxzZSwgLy8gQSBmbGFnIHRvIGluZGljYXRlIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGlucHV0IGlzIGFuIGVtYWlsIG9yIHVzZXJuYW1lXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJuYW1lT3JFbWFpbCA9PT0gMCB8fCB0aGlzLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJDb21wbGV0ZSB0aGUgZm9ybVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbG9naW5JZGVudGlmaWVyID0gdGhpcy51c2VybmFtZU9yRW1haWw7XHJcbiAgICAgICAgICAgIGlmIChsb2dpbklkZW50aWZpZXIubWF0Y2goL15bQS1aYS16MC05Ll8lLV0rQFtBLVphLXowLTkuLV0rXFwuW0EtWmEtel17Miw0fSQvKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgbWF0Y2hlcyB0aGUgZW1haWwgZm9ybWF0LCBzZXQgaXQgYXMgYW4gZW1haWxcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWwgPSBsb2dpbklkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHNldCBpdCBhcyBhIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gbG9naW5JZGVudGlmaWVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2xvZ2luLycsIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdWNjZXNzZnVsIGxvZ2luLCBwZXJmb3JtIG5lY2Vzc2FyeSBhY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJMb2dnZWQhXCIpIC8vIERpc3BsYXkgYSBzdWNjZXNzIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZCA9IHRydWU7IC8vIFNldCB0aGUgbG9nZ2VkIGZsYWcgdG8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWQnLCB0aGlzLmxvZ2dlZCk7IC8vIFN0b3JlIHRoZSBsb2dnZWQgc3RhdHVzIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2dpbi1zdWNjZXNzJywgdGhpcy5sb2dnZWQpOyAvLyBFbWl0IGEgY3VzdG9tIGV2ZW50IGluZGljYXRpbmcgbG9naW4gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VzZXJuYW1lLXN1Y2Nlc3MnLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdlbWFpbC1zdWNjZXNzJywgdGhpcy5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncGFzc3dvcmQtc3VjY2VzcycsIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlIChlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVnaXN0ZXJpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmV4cGVjdGVkIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIGVycm9ycy5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9nZ2luZyBpbi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59O1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuI2xvZ2luTWFpbkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI2xvZ2luQ2VudGVyZWRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgbWluLXdpZHRoOiAzODBweDtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzlhM2Q7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jbG9naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggNTBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmYjM3ODtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG5cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI2xvZ2luUmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5sb2dpblRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RmODUwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZiZjAwO1xyXG5cclxufVxyXG5cclxuLmxvZ2luUmlnaHRGb3JtIHtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubG9naW5SaWdodEZvcm0gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZTdkNmM2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ubG9naW5SaWdodEZvcm0gYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuI2xvZ2luIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgIGNvbG9yOiAjZTdkNmM2O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNsb2dpbiBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGMwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NzVweCkge1xyXG4gICAgI2xvZ2luTWFpbkNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cclxuICAgICAgICBtaW4td2lkdGg6IDM4MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNjc2OTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG5cclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAjbG9naW4ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgICNsb2dpblJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=style&index=0&id=16d8eba4&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=style&index=0&id=16d8eba4&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n#loginMainContainer[data-v-16d8eba4] {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    min-width: 100vw;\\r\\n    min-height: 100vh;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    \\r\\n    background-position: center;\\r\\n    background-size: cover;\\n}\\n#loginCenteredContainer[data-v-16d8eba4] {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    flex-direction: row;\\r\\n\\r\\n    min-width: 380px;\\r\\n    max-width: 900px;\\r\\n    width: 90%;\\r\\n\\r\\n    background-color: #f39a3d;\\r\\n\\r\\n    border-radius: 10px 10px 10px 10px;\\r\\n    -moz-border-radius: 10px 10px 10px 10px;\\r\\n    -webkit-border-radius: 10px 10px 10px 10px;\\r\\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);\\r\\n\\r\\n    padding: 30px;\\r\\n    box-sizing: border-box;\\n}\\n#login[data-v-16d8eba4] {\\r\\n    width: 100%;\\r\\n    padding: 30px 30px 50px 30px;\\r\\n    background-color: #efb378;\\r\\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);\\r\\n\\r\\n    -webkit-border-radius: 3px 3px 3px 3px;\\r\\n\\r\\n    box-sizing: border-box;\\r\\n\\r\\n    opacity: 1;\\n}\\n#loginRight[data-v-16d8eba4] {\\r\\n    text-align: center;\\r\\n    width: 100%;\\r\\n\\r\\n    padding: 20px 20px 20px 50px;\\r\\n    box-sizing: border-box;\\n}\\n.loginTitle[data-v-16d8eba4] {\\r\\n    font-size: 300%;\\r\\n    color: #ffffff;\\n}\\nhr[data-v-16d8eba4] {\\r\\n    border-top: 1px solid #df8500;\\r\\n    border-bottom: 1px solid #ffbf00;\\n}\\n.loginRightForm[data-v-16d8eba4] {\\r\\n    font-size: 90%;\\r\\n    text-align: center;\\r\\n    margin-top: 15px;\\r\\n    color: #ffffff;\\n}\\n.loginRightForm a[data-v-16d8eba4] {\\r\\n    display: block;\\r\\n    text-decoration: none;\\r\\n    color: #e7d6c6;\\r\\n    margin-bottom: 3px;\\n}\\n.loginRightForm a[data-v-16d8eba4]:hover {\\r\\n    color: #ffffff;\\n}\\n#login button[data-v-16d8eba4] {\\r\\n    font-family: 'Overpass', sans-serif;\\r\\n    font-size: 110%;\\r\\n    color: #e7d6c6;\\r\\n    width: 100%;\\r\\n    height: 40px;\\r\\n    border: none;\\r\\n\\r\\n    border-radius: 3px 3px 3px 3px;\\r\\n    -moz-border-radius: 3px 3px 3px 3px;\\r\\n    -webkit-border-radius: 3px 3px 3px 3px;\\r\\n\\r\\n    background-color: #ffa500;\\r\\n\\r\\n    margin-top: 10px;\\n}\\n#login button[data-v-16d8eba4]:hover {\\r\\n    background-color: #ff8c00;\\r\\n    color: #ffffff;\\n}\\n@media all and (max-width: 775px) {\\n#loginMainContainer[data-v-16d8eba4] {\\r\\n        flex-direction: column-reverse;\\r\\n\\r\\n        min-width: 380px;\\r\\n        max-width: 900px;\\r\\n        width: 90%;\\r\\n\\r\\n        background-color: #5f6769;\\r\\n\\r\\n        border-radius: 10px 10px 10px 10px;\\r\\n        -moz-border-radius: 10px 10px 10px 10px;\\r\\n        -webkit-border-radius: 10px 10px 10px 10px;\\r\\n        box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);\\r\\n\\r\\n        padding: 30px;\\r\\n        box-sizing: border-box;\\n}\\n#login[data-v-16d8eba4] {\\r\\n        margin: 0 auto;\\n}\\n#loginRight[data-v-16d8eba4] {\\r\\n        padding: 20px 20px 20px 20px;\\n}\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Mb2dpblBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTZkOGViYTQmc2NvcGVkPXRydWUmbGFuZz1jc3MiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvTG9naW5QYWdlLnZ1ZT84YTVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvbm9Tb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jbG9naW5NYWluQ29udGFpbmVyW2RhdGEtdi0xNmQ4ZWJhNF0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuI2xvZ2luQ2VudGVyZWRDb250YWluZXJbZGF0YS12LTE2ZDhlYmE0XSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbiAgICBtaW4td2lkdGg6IDM4MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YTNkO1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNsb2dpbltkYXRhLXYtMTZkOGViYTRdIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggMzBweCA1MHB4IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmIzNzg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcblxcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcXHJcXG5cXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuI2xvZ2luUmlnaHRbZGF0YS12LTE2ZDhlYmE0XSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDUwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5sb2dpblRpdGxlW2RhdGEtdi0xNmQ4ZWJhNF0ge1xcclxcbiAgICBmb250LXNpemU6IDMwMCU7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5ocltkYXRhLXYtMTZkOGViYTRdIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZjg1MDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZiZjAwO1xcbn1cXG4ubG9naW5SaWdodEZvcm1bZGF0YS12LTE2ZDhlYmE0XSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ubG9naW5SaWdodEZvcm0gYVtkYXRhLXYtMTZkOGViYTRdIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNlN2Q2YzY7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuLmxvZ2luUmlnaHRGb3JtIGFbZGF0YS12LTE2ZDhlYmE0XTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4jbG9naW4gYnV0dG9uW2RhdGEtdi0xNmQ4ZWJhNF0ge1xcclxcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMTAlO1xcclxcbiAgICBjb2xvcjogI2U3ZDZjNjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuI2xvZ2luIGJ1dHRvbltkYXRhLXYtMTZkOGViYTRdOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGMwMDtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XFxuI2xvZ2luTWFpbkNvbnRhaW5lcltkYXRhLXYtMTZkOGViYTRdIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG5cXHJcXG4gICAgICAgIG1pbi13aWR0aDogMzgwcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG5cXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjY3Njk7XFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcclxcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcclxcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuXFxyXFxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuI2xvZ2luW2RhdGEtdi0xNmQ4ZWJhNF0ge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiNsb2dpblJpZ2h0W2RhdGEtdi0xNmQ4ZWJhNF0ge1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcXG59XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=style&index=0&id=16d8eba4&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7c4af0cbacd37829"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ !function() {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"app": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = function(event) {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"] = function(chunkId, moreModules, runtime) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = function() {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var runtime = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		return __webpack_require__.O(result);
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : this)["webpackChunkfrontend"] = (typeof self !== 'undefined' ? self : this)["webpackChunkfrontend"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ }();
/******/ 
/******/ }
);