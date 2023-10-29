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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AppTextField.vue */ \"./src/components/AppTextField.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RegisterPage\",\n  components: {\n    AppTextField: _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      username: \"\",\n      email: \"\",\n      emailError: false,\n      password: \"\",\n      passwordError: false,\n      confirmPassword: \"\",\n      passwordStrength: 0,\n      defaultMessageUsername: \"Introduce your username\",\n      defaultMessageEmail: \"Introduce your email\",\n      defaultMessagePassword: \"Introduce your password\",\n      defaultMessagePasswordCheck: \"Introduce your password again\"\n    };\n  },\n  methods: {\n    checkEmail() {\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n      if (!emailRegex.test(this.email)) {\n        this.emailError = true;\n      } else {\n        const validEmailExtensions = [\"example.com\", \"yourdomain.com\", \"gmail.com\", \"hotmail.com\"];\n        const emailParts = this.email.split(\"@\");\n        const emailExtension = emailParts[1];\n        this.emailError = !validEmailExtensions.includes(emailExtension);\n      }\n    },\n    checkPassword() {\n      const passwordRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$/;\n      this.passwordError = !passwordRegex.test(this.password);\n      let strength = 0;\n      if (this.password.length >= 8) {\n        strength++;\n      }\n      if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) {\n        strength++;\n      }\n      if (/\\d/.test(this.password)) {\n        strength++;\n      }\n      if (/\\W|_/.test(this.password)) {\n        strength++;\n      }\n      this.passwordStrength = strength / 4 * 100;\n    },\n    async register() {\n      if (this.password !== this.confirmPassword) {\n        alert(\"Passwords do not match\");\n        return;\n      }\n      let response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/register/', {\n        username: this.username,\n        email: this.email,\n        password: this.password\n      }, {\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      });\n      alert(response.status);\n      // Check the HTTP status code in the response\n      if (response.status === 200) {\n        // Registration successful, you can handle success here\n        console.log(\"Registration successful\");\n        alert(\"Registration successful\");\n      } else if (response.status === 400) {\n        // Handle client-side validation errors\n        alert('AAAAAAAAA');\n        alert(response.data.error);\n      } else if (response.status === 500) {\n        // Handle server errors\n        alert(\"An error occurred while registering.\");\n      } else {\n        // Handle other status codes\n        alert(\"Unexpected error\");\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBbUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWU/MWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCIgc3R5bGU9XCJjb2xvcjogI2ZmNTczM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRlZmF1bHRNZXNzYWdlPVwiZGVmYXVsdE1lc3NhZ2VVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRleHRWYWx1ZT1cInVzZXJuYW1lID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSB1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gOCBhbmQgMTYgY2hhcmFjdGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZUVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwiZW1haWwgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Pbmx5IHRoZSBmb2xsb3dpbmcgZG9tYWlucyBhcmUgdmFsaWQ6IGV4YW1wbGUuY29tLCB5b3VyZG9tYWluLmNvbSwgZ21haWwuY29tLCBob3RtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZW1haWxFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIGVtYWlsIGV4dGVuc2lvbiBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwicGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZywgY29udGFpbiBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHN5bWJvbC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInBhc3N3b3JkRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBwYXNzd29yZCBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm1QYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJjb25maXJtUGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIFN0cmVuZ3RoOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1tZXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBMb2cgaW48L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQXBwVGV4dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvQXBwVGV4dEZpZWxkLnZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJSZWdpc3RlclBhZ2VcIixcclxuICAgIGNvbXBvbmVudHM6IHtBcHBUZXh0RmllbGR9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsRXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmRTdHJlbmd0aDogMCxcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VVc2VybmFtZTogXCJJbnRyb2R1Y2UgeW91ciB1c2VybmFtZVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZUVtYWlsOiBcIkludHJvZHVjZSB5b3VyIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlUGFzc3dvcmQ6IFwiSW50cm9kdWNlIHlvdXIgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VQYXNzd29yZENoZWNrOiBcIkludHJvZHVjZSB5b3VyIHBhc3N3b3JkIGFnYWluXCIsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2tFbWFpbCgpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fSQvO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5lbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEVtYWlsRXh0ZW5zaW9ucyA9IFtcImV4YW1wbGUuY29tXCIsIFwieW91cmRvbWFpbi5jb21cIiwgXCJnbWFpbC5jb21cIiwgXCJob3RtYWlsLmNvbVwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsUGFydHMgPSB0aGlzLmVtYWlsLnNwbGl0KFwiQFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsRXh0ZW5zaW9uID0gZW1haWxQYXJ0c1sxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9ICF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkUmVnZXggPSAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKltcXFdfXSkuezgsfSQvO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkRXJyb3IgPSAhcGFzc3dvcmRSZWdleC50ZXN0KHRoaXMucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQubGVuZ3RoID49IDgpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9bYS16XS8udGVzdCh0aGlzLnBhc3N3b3JkKSAmJiAvW0EtWl0vLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXGQvLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXFd8Xy8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkU3RyZW5ndGggPSAoc3RyZW5ndGggLyA0KSAqIDEwMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL3JlZ2lzdGVyLycsIHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGluIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLCB5b3UgY2FuIGhhbmRsZSBzdWNjZXNzIGhlcmVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgY2xpZW50LXNpZGUgdmFsaWRhdGlvbiBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdBQUFBQUFBQUEnKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzZXJ2ZXIgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXNcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wYXNzd29yZC1zdHJlbmd0aCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoLWJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-86ab1514\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\",\n  style: {\n    \"color\": \"black\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"form-background\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitle\",\n  style: {\n    \"color\": \"#ff5733\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Register\")], -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"form-group\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"username\"\n}, \"Username:\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The username must be between 8 and 16 characters.\")], -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"form-group\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"email\"\n}, \"Email:\", -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Only the following domains are valid: example.com, yourdomain.com, gmail.com, hotmail.com\")], -1 /* HOISTED */));\nconst _hoisted_10 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_11 = {\n  class: \"form-group\"\n};\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password:\", -1 /* HOISTED */));\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one symbol.\")], -1 /* HOISTED */));\nconst _hoisted_14 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_15 = {\n  class: \"form-group\"\n};\nconst _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"confirmPassword\"\n}, \"Confirm Password:\", -1 /* HOISTED */));\nconst _hoisted_17 = {\n  class: \"password-strength\"\n};\nconst _hoisted_18 = {\n  class: \"password-strength-meter\"\n};\nconst _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"secondaryContainer\",\n  style: {\n    \"background-color\": \"white\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\",\n  class: \"submit-button\"\n}, \"Register\")], -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppTextField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppTextField\");\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.register && $options.register(...args), [\"prevent\"])),\n    class: \"form\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessageUsername,\n    \"onUpdate:textValue\": _cache[0] || (_cache[0] = $event => $data.username = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessageEmail,\n    \"onUpdate:textValue\": _cache[1] || (_cache[1] = $event => $data.email = $event),\n    onInput: $options.checkEmail\n  }, null, 8 /* PROPS */, [\"defaultMessage\", \"onInput\"]), _hoisted_9, $data.emailError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_10, \"This email extension is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessagePassword,\n    \"onUpdate:textValue\": _cache[2] || (_cache[2] = $event => $data.password = $event),\n    onInput: $options.checkPassword\n  }, null, 8 /* PROPS */, [\"defaultMessage\", \"onInput\"]), _hoisted_13, $data.passwordError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_14, \"This password is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessagePasswordCheck,\n    \"onUpdate:textValue\": _cache[3] || (_cache[3] = $event => $data.confirmPassword = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Password Strength: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"password-strength-bar\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      width: $data.passwordStrength + '%'\n    })\n  }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/login\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Already have an account? Log in\")]),\n    _: 1 /* STABLE */\n  })]), _hoisted_19], 32 /* HYDRATE_EVENTS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NmFiMTUxNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTs7O0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7OztBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQU1BO0FBQUE7O0FBRUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUExREE7QUFLQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWU/MWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCIgc3R5bGU9XCJjb2xvcjogI2ZmNTczM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRlZmF1bHRNZXNzYWdlPVwiZGVmYXVsdE1lc3NhZ2VVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRleHRWYWx1ZT1cInVzZXJuYW1lID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSB1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gOCBhbmQgMTYgY2hhcmFjdGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZUVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwiZW1haWwgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Pbmx5IHRoZSBmb2xsb3dpbmcgZG9tYWlucyBhcmUgdmFsaWQ6IGV4YW1wbGUuY29tLCB5b3VyZG9tYWluLmNvbSwgZ21haWwuY29tLCBob3RtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZW1haWxFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIGVtYWlsIGV4dGVuc2lvbiBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwicGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZywgY29udGFpbiBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHN5bWJvbC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInBhc3N3b3JkRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBwYXNzd29yZCBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm1QYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJjb25maXJtUGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIFN0cmVuZ3RoOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1tZXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBMb2cgaW48L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQXBwVGV4dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvQXBwVGV4dEZpZWxkLnZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJSZWdpc3RlclBhZ2VcIixcclxuICAgIGNvbXBvbmVudHM6IHtBcHBUZXh0RmllbGR9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsRXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmRTdHJlbmd0aDogMCxcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VVc2VybmFtZTogXCJJbnRyb2R1Y2UgeW91ciB1c2VybmFtZVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZUVtYWlsOiBcIkludHJvZHVjZSB5b3VyIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlUGFzc3dvcmQ6IFwiSW50cm9kdWNlIHlvdXIgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VQYXNzd29yZENoZWNrOiBcIkludHJvZHVjZSB5b3VyIHBhc3N3b3JkIGFnYWluXCIsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2tFbWFpbCgpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fSQvO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5lbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEVtYWlsRXh0ZW5zaW9ucyA9IFtcImV4YW1wbGUuY29tXCIsIFwieW91cmRvbWFpbi5jb21cIiwgXCJnbWFpbC5jb21cIiwgXCJob3RtYWlsLmNvbVwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsUGFydHMgPSB0aGlzLmVtYWlsLnNwbGl0KFwiQFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsRXh0ZW5zaW9uID0gZW1haWxQYXJ0c1sxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9ICF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkUmVnZXggPSAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKltcXFdfXSkuezgsfSQvO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkRXJyb3IgPSAhcGFzc3dvcmRSZWdleC50ZXN0KHRoaXMucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQubGVuZ3RoID49IDgpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9bYS16XS8udGVzdCh0aGlzLnBhc3N3b3JkKSAmJiAvW0EtWl0vLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXGQvLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXFd8Xy8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkU3RyZW5ndGggPSAoc3RyZW5ndGggLyA0KSAqIDEwMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL3JlZ2lzdGVyLycsIHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGluIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLCB5b3UgY2FuIGhhbmRsZSBzdWNjZXNzIGhlcmVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgY2xpZW50LXNpZGUgdmFsaWRhdGlvbiBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdBQUFBQUFBQUEnKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzZXJ2ZXIgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXNcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wYXNzd29yZC1zdHJlbmd0aCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoLWJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "870b6ec634387ef3"; }
/******/ }();
/******/ 
/******/ }
);