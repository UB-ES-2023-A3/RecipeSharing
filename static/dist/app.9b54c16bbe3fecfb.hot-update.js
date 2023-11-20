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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AppTextField.vue */ \"./src/components/AppTextField.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RegisterPage\",\n  components: {\n    AppTextField: _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      username: \"\",\n      email: \"\",\n      emailError: false,\n      password: \"\",\n      passwordError: false,\n      confirmPassword: \"\",\n      passwordStrength: 0,\n      defaultMessageUsername: \"Introduce your username\",\n      defaultMessageEmail: \"Introduce your email\",\n      defaultMessagePassword: \"Introduce your password\",\n      defaultMessagePasswordCheck: \"Introduce your password again\"\n    };\n  },\n  methods: {\n    checkEmail() {\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n      if (!emailRegex.test(this.email)) {\n        this.emailError = true;\n      } else {\n        const validEmailExtensions = [\"example.com\", \"yourdomain.com\", \"gmail.com\", \"hotmail.com\"];\n        const emailParts = this.email.split(\"@\");\n        const emailExtension = emailParts[1];\n        this.emailError = !validEmailExtensions.includes(emailExtension);\n      }\n    },\n    checkPassword() {\n      const passwordRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$/;\n      this.passwordError = !passwordRegex.test(this.password);\n      let strength = 0;\n      if (this.password.length >= 8) {\n        strength++;\n      }\n      if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) {\n        strength++;\n      }\n      if (/\\d/.test(this.password)) {\n        strength++;\n      }\n      if (/\\W|_/.test(this.password)) {\n        strength++;\n      }\n      this.passwordStrength = strength / 4 * 100;\n    },\n    async register() {\n      alert('A');\n      if (this.password !== this.confirmPassword) {\n        alert(\"Passwords do not match\");\n        return;\n      }\n      alert('B');\n      try {\n        alert('C');\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/register/', {\n          username: this.username,\n          email: this.email,\n          password: this.password\n        });\n        alert('D');\n        alert(response.data.message);\n        // Puedes redirigir al usuario a la página de inicio de sesión u otra página aquí.\n      } catch (error) {\n        if (error.response) {\n          alert(error.response.data.error);\n        } else {\n          alert(\"An error occurred while registering.\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBb0VBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlPzFiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW5Db250YWluZXJcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiIHN0eWxlPVwiY29sb3I6ICNmZjU3MzNcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgeyUgY3NyZl90b2tlbiAlfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPXVzZXJuYW1lPlVzZXJuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRlZmF1bHRNZXNzYWdlPVwiZGVmYXVsdE1lc3NhZ2VVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRleHRWYWx1ZT1cInVzZXJuYW1lID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSB1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gOCBhbmQgMTYgY2hhcmFjdGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZUVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwiZW1haWwgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Pbmx5IHRoZSBmb2xsb3dpbmcgZG9tYWlucyBhcmUgdmFsaWQ6IGV4YW1wbGUuY29tLCB5b3VyZG9tYWluLmNvbSwgZ21haWwuY29tLCBob3RtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZW1haWxFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIGVtYWlsIGV4dGVuc2lvbiBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwicGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZywgY29udGFpbiBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHN5bWJvbC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInBhc3N3b3JkRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBwYXNzd29yZCBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm1QYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJjb25maXJtUGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIFN0cmVuZ3RoOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1tZXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBMb2cgaW48L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQXBwVGV4dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvQXBwVGV4dEZpZWxkLnZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJSZWdpc3RlclBhZ2VcIixcclxuICAgIGNvbXBvbmVudHM6IHtBcHBUZXh0RmllbGR9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsRXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmRTdHJlbmd0aDogMCxcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VVc2VybmFtZTogXCJJbnRyb2R1Y2UgeW91ciB1c2VybmFtZVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZUVtYWlsOiBcIkludHJvZHVjZSB5b3VyIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlUGFzc3dvcmQ6IFwiSW50cm9kdWNlIHlvdXIgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VQYXNzd29yZENoZWNrOiBcIkludHJvZHVjZSB5b3VyIHBhc3N3b3JkIGFnYWluXCIsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2tFbWFpbCgpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fSQvO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5lbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEVtYWlsRXh0ZW5zaW9ucyA9IFtcImV4YW1wbGUuY29tXCIsIFwieW91cmRvbWFpbi5jb21cIiwgXCJnbWFpbC5jb21cIiwgXCJob3RtYWlsLmNvbVwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsUGFydHMgPSB0aGlzLmVtYWlsLnNwbGl0KFwiQFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsRXh0ZW5zaW9uID0gZW1haWxQYXJ0c1sxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9ICF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkUmVnZXggPSAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKltcXFdfXSkuezgsfSQvO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkRXJyb3IgPSAhcGFzc3dvcmRSZWdleC50ZXN0KHRoaXMucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQubGVuZ3RoID49IDgpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9bYS16XS8udGVzdCh0aGlzLnBhc3N3b3JkKSAmJiAvW0EtWl0vLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXGQvLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXFd8Xy8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkU3RyZW5ndGggPSAoc3RyZW5ndGggLyA0KSAqIDEwMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgICAgICBhbGVydCgnQScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0KCdCJylcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdDJylcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL3JlZ2lzdGVyLycsIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0QnKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIC8vIFB1ZWRlcyByZWRpcmlnaXIgYWwgdXN1YXJpbyBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlIHNlc2nDs24gdSBvdHJhIHDDoWdpbmEgYXF1w60uXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZWdpc3RlcmluZy5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ucGFzc3dvcmQtc3RyZW5ndGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1zdHJlbmd0aC1tZXRlciB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYXNzd29yZC1zdHJlbmd0aC1iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-86ab1514\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\",\n  style: {\n    \"color\": \"black\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"form-background\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitle\",\n  style: {\n    \"color\": \"#ff5733\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Register\")], -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"form-group\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"username\"\n}, \"Username:\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The username must be between 8 and 16 characters.\")], -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"form-group\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"email\"\n}, \"Email:\", -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Only the following domains are valid: example.com, yourdomain.com, gmail.com, hotmail.com\")], -1 /* HOISTED */));\nconst _hoisted_10 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_11 = {\n  class: \"form-group\"\n};\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password:\", -1 /* HOISTED */));\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one symbol.\")], -1 /* HOISTED */));\nconst _hoisted_14 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_15 = {\n  class: \"form-group\"\n};\nconst _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"confirmPassword\"\n}, \"Confirm Password:\", -1 /* HOISTED */));\nconst _hoisted_17 = {\n  class: \"password-strength\"\n};\nconst _hoisted_18 = {\n  class: \"password-strength-meter\"\n};\nconst _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"secondaryContainer\",\n  style: {\n    \"background-color\": \"white\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\",\n  class: \"submit-button\"\n}, \"Register\")], -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppTextField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppTextField\");\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.register && $options.register(...args), [\"prevent\"])),\n    class: \"form\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" {% csrf_token %} \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessageUsername,\n    \"onUpdate:textValue\": _cache[0] || (_cache[0] = $event => $data.username = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessageEmail,\n    \"onUpdate:textValue\": _cache[1] || (_cache[1] = $event => $data.email = $event),\n    onInput: $options.checkEmail\n  }, null, 8 /* PROPS */, [\"defaultMessage\", \"onInput\"]), _hoisted_9, $data.emailError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_10, \"This email extension is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessagePassword,\n    \"onUpdate:textValue\": _cache[2] || (_cache[2] = $event => $data.password = $event),\n    onInput: $options.checkPassword\n  }, null, 8 /* PROPS */, [\"defaultMessage\", \"onInput\"]), _hoisted_13, $data.passwordError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_14, \"This password is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessagePasswordCheck,\n    \"onUpdate:textValue\": _cache[3] || (_cache[3] = $event => $data.confirmPassword = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Password Strength: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"password-strength-bar\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      width: $data.passwordStrength + '%'\n    })\n  }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/login\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Already have an account? Log in\")]),\n    _: 1 /* STABLE */\n  })]), _hoisted_19], 32 /* HYDRATE_EVENTS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NmFiMTUxNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTs7O0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7OztBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQU1BO0FBQUE7O0FBRUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUEzREE7QUFLQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWU/MWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCIgc3R5bGU9XCJjb2xvcjogI2ZmNTczM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICB7JSBjc3JmX3Rva2VuICV9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9dXNlcm5hbWU+VXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwidXNlcm5hbWUgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHVzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiA4IGFuZCAxNiBjaGFyYWN0ZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0TWVzc2FnZT1cImRlZmF1bHRNZXNzYWdlRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJlbWFpbCA9ICRldmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJjaGVja0VtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9ubHkgdGhlIGZvbGxvd2luZyBkb21haW5zIGFyZSB2YWxpZDogZXhhbXBsZS5jb20sIHlvdXJkb21haW4uY29tLCBnbWFpbC5jb20sIGhvdG1haWwuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJlbWFpbEVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlRoaXMgZW1haWwgZXh0ZW5zaW9uIGlzIG5vdCB2YWxpZDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0TWVzc2FnZT1cImRlZmF1bHRNZXNzYWdlUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJwYXNzd29yZCA9ICRldmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJjaGVja1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLCBjb250YWluIG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXIsIG9uZSBudW1iZXIsIGFuZCBvbmUgc3ltYm9sLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicGFzc3dvcmRFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIHBhc3N3b3JkIGlzIG5vdCB2YWxpZDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0TWVzc2FnZT1cImRlZmF1bHRNZXNzYWdlUGFzc3dvcmRDaGVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRleHRWYWx1ZT1cImNvbmZpcm1QYXNzd29yZCA9ICRldmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQgU3RyZW5ndGg6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1iYXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiBwYXNzd29yZFN0cmVuZ3RoICsgJyUnIH1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2xvZ2luXCI+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IExvZyBpbjwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5Q29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XHJcbmltcG9ydCBBcHBUZXh0RmllbGQgZnJvbSBcIkAvY29tcG9uZW50cy9BcHBUZXh0RmllbGQudnVlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIlJlZ2lzdGVyUGFnZVwiLFxyXG4gICAgY29tcG9uZW50czoge0FwcFRleHRGaWVsZH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgZW1haWxFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZEVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZFN0cmVuZ3RoOiAwLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVVzZXJuYW1lOiBcIkludHJvZHVjZSB5b3VyIHVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlRW1haWw6IFwiSW50cm9kdWNlIHlvdXIgZW1haWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VQYXNzd29yZDogXCJJbnRyb2R1Y2UgeW91ciBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2s6IFwiSW50cm9kdWNlIHlvdXIgcGFzc3dvcmQgYWdhaW5cIixcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGVja0VtYWlsKCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDR9JC87XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLmVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkRW1haWxFeHRlbnNpb25zID0gW1wiZXhhbXBsZS5jb21cIiwgXCJ5b3VyZG9tYWluLmNvbVwiLCBcImdtYWlsLmNvbVwiLCBcImhvdG1haWwuY29tXCJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxQYXJ0cyA9IHRoaXMuZW1haWwuc3BsaXQoXCJAXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxFeHRlbnNpb24gPSBlbWFpbFBhcnRzWzFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gIXZhbGlkRW1haWxFeHRlbnNpb25zLmluY2x1ZGVzKGVtYWlsRXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tQYXNzd29yZCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW1xcV19dKS57OCx9JC87XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRFcnJvciA9ICFwYXNzd29yZFJlZ2V4LnRlc3QodGhpcy5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RyZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZC5sZW5ndGggPj0gOCkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1thLXpdLy50ZXN0KHRoaXMucGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1xcZC8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1xcV3xfLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRTdHJlbmd0aCA9IChzdHJlbmd0aCAvIDQpICogMTAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdBJylcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxlcnQoJ0InKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0MnKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVnaXN0ZXIvJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRCcpXHJcbiAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gUHVlZGVzIHJlZGlyaWdpciBhbCB1c3VhcmlvIGEgbGEgcMOhZ2luYSBkZSBpbmljaW8gZGUgc2VzacOzbiB1IG90cmEgcMOhZ2luYSBhcXXDrS5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wYXNzd29yZC1zdHJlbmd0aCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoLWJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0d6483ed053ce7de"; }
/******/ }();
/******/ 
/******/ }
);