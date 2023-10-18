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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AppTextField.vue */ \"./src/components/AppTextField.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RegisterPage\",\n  components: {\n    AppTextField: _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      str_data: \"\",\n      data_register: {},\n      username: \"\",\n      email: \"\",\n      emailError: false,\n      password: \"\",\n      passwordError: false,\n      confirmPassword: \"\",\n      passwordStrength: 0,\n      defaultMessageUsername: \"Introduce your username\",\n      defaultMessageEmail: \"Introduce your email\",\n      defaultMessagePassword: \"Introduce your password\",\n      defaultMessagePasswordCheck: \"Introduce your password again\"\n    };\n  },\n  methods: {\n    checkEmail() {\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n      if (!emailRegex.test(this.email)) {\n        this.emailError = true;\n      } else {\n        const validEmailExtensions = [\"example.com\", \"yourdomain.com\", \"gmail.com\", \"hotmail.com\"];\n        const emailParts = this.email.split(\"@\");\n        const emailExtension = emailParts[1];\n        this.emailError = !validEmailExtensions.includes(emailExtension);\n      }\n    },\n    checkPassword() {\n      const passwordRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$/;\n      this.passwordError = !passwordRegex.test(this.password);\n      let strength = 0;\n      if (this.password.length >= 8) {\n        strength++;\n      }\n      if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) {\n        strength++;\n      }\n      if (/\\d/.test(this.password)) {\n        strength++;\n      }\n      if (/\\W|_/.test(this.password)) {\n        strength++;\n      }\n      this.passwordStrength = strength / 4 * 100;\n    },\n    async register() {\n      if (this.password !== this.confirmPassword) {\n        alert(\"Passwords do not match\");\n        return;\n      }\n      try {\n        this.data_register = {\n          username: this.username,\n          email: this.email,\n          password: this.password\n        };\n        this.str_data = \"username=\" + this.username + \"&email=\" + this.email + \"&password=\" + this.password;\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/register', this.str_data, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        alert(response.data.message);\n        // Puedes redirigir al usuario a la página de inicio de sesión u otra página aquí.\n      } catch (error) {\n        if (error.response) {\n          alert(error.response.data.error);\n        } else {\n          alert(\"An error occurred while registering.\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBbUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWU/MWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCIgc3R5bGU9XCJjb2xvcjogI2ZmNTczM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRlZmF1bHRNZXNzYWdlPVwiZGVmYXVsdE1lc3NhZ2VVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRleHRWYWx1ZT1cInVzZXJuYW1lID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSB1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gOCBhbmQgMTYgY2hhcmFjdGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZUVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwiZW1haWwgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Pbmx5IHRoZSBmb2xsb3dpbmcgZG9tYWlucyBhcmUgdmFsaWQ6IGV4YW1wbGUuY29tLCB5b3VyZG9tYWluLmNvbSwgZ21haWwuY29tLCBob3RtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZW1haWxFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIGVtYWlsIGV4dGVuc2lvbiBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwicGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZywgY29udGFpbiBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHN5bWJvbC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInBhc3N3b3JkRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBwYXNzd29yZCBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm1QYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJjb25maXJtUGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIFN0cmVuZ3RoOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1tZXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBMb2cgaW48L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQXBwVGV4dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvQXBwVGV4dEZpZWxkLnZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJSZWdpc3RlclBhZ2VcIixcclxuICAgIGNvbXBvbmVudHM6IHtBcHBUZXh0RmllbGR9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJfZGF0YTogXCJcIixcclxuICAgICAgICAgICAgZGF0YV9yZWdpc3Rlcjoge30sXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgZW1haWxFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZEVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZFN0cmVuZ3RoOiAwLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVVzZXJuYW1lOiBcIkludHJvZHVjZSB5b3VyIHVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlRW1haWw6IFwiSW50cm9kdWNlIHlvdXIgZW1haWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VQYXNzd29yZDogXCJJbnRyb2R1Y2UgeW91ciBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2s6IFwiSW50cm9kdWNlIHlvdXIgcGFzc3dvcmQgYWdhaW5cIixcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGVja0VtYWlsKCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDR9JC87XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLmVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkRW1haWxFeHRlbnNpb25zID0gW1wiZXhhbXBsZS5jb21cIiwgXCJ5b3VyZG9tYWluLmNvbVwiLCBcImdtYWlsLmNvbVwiLCBcImhvdG1haWwuY29tXCJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxQYXJ0cyA9IHRoaXMuZW1haWwuc3BsaXQoXCJAXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxFeHRlbnNpb24gPSBlbWFpbFBhcnRzWzFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gIXZhbGlkRW1haWxFeHRlbnNpb25zLmluY2x1ZGVzKGVtYWlsRXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tQYXNzd29yZCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW1xcV19dKS57OCx9JC87XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRFcnJvciA9ICFwYXNzd29yZFJlZ2V4LnRlc3QodGhpcy5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RyZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZC5sZW5ndGggPj0gOCkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1thLXpdLy50ZXN0KHRoaXMucGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1xcZC8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1xcV3xfLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRTdHJlbmd0aCA9IChzdHJlbmd0aCAvIDQpICogMTAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5kYXRhX3JlZ2lzdGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RyX2RhdGEgPSBcInVzZXJuYW1lPVwiICsgdGhpcy51c2VybmFtZSArXCImZW1haWw9XCIgKyB0aGlzLmVtYWlsICsgXCImcGFzc3dvcmQ9XCIgKyB0aGlzLnBhc3N3b3JkXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVnaXN0ZXInLCB0aGlzLnN0cl9kYXRhLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIC8vIFB1ZWRlcyByZWRpcmlnaXIgYWwgdXN1YXJpbyBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlIHNlc2nDs24gdSBvdHJhIHDDoWdpbmEgYXF1w60uXHJcbiAgICAgICAgICAgIH0gY2F0Y2hcclxuICAgICAgICAgICAgICAgIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVnaXN0ZXJpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtc3RyZW5ndGgtbWV0ZXIge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtc3RyZW5ndGgtYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-86ab1514\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\",\n  style: {\n    \"color\": \"black\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"form-background\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitle\",\n  style: {\n    \"color\": \"#ff5733\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Register\")], -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"form-group\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"username\"\n}, \"Username:\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The username must be between 8 and 16 characters.\")], -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"form-group\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"email\"\n}, \"Email:\", -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Only the following domains are valid: example.com, yourdomain.com, gmail.com, hotmail.com\")], -1 /* HOISTED */));\nconst _hoisted_10 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_11 = {\n  class: \"form-group\"\n};\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password:\", -1 /* HOISTED */));\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one symbol.\")], -1 /* HOISTED */));\nconst _hoisted_14 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_15 = {\n  class: \"form-group\"\n};\nconst _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"confirmPassword\"\n}, \"Confirm Password:\", -1 /* HOISTED */));\nconst _hoisted_17 = {\n  class: \"password-strength\"\n};\nconst _hoisted_18 = {\n  class: \"password-strength-meter\"\n};\nconst _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"secondaryContainer\",\n  style: {\n    \"background-color\": \"white\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\",\n  class: \"submit-button\"\n}, \"Register\")], -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppTextField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppTextField\");\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.register && $options.register(...args), [\"prevent\"])),\n    class: \"form\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessageUsername,\n    \"onUpdate:textValue\": _cache[0] || (_cache[0] = $event => $data.username = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessageEmail,\n    \"onUpdate:textValue\": _cache[1] || (_cache[1] = $event => $data.email = $event),\n    onInput: $options.checkEmail\n  }, null, 8 /* PROPS */, [\"defaultMessage\", \"onInput\"]), _hoisted_9, $data.emailError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_10, \"This email extension is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessagePassword,\n    \"onUpdate:textValue\": _cache[2] || (_cache[2] = $event => $data.password = $event),\n    onInput: $options.checkPassword\n  }, null, 8 /* PROPS */, [\"defaultMessage\", \"onInput\"]), _hoisted_13, $data.passwordError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_14, \"This password is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessagePasswordCheck,\n    \"onUpdate:textValue\": _cache[3] || (_cache[3] = $event => $data.confirmPassword = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Password Strength: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"password-strength-bar\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      width: $data.passwordStrength + '%'\n    })\n  }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/login\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Already have an account? Log in\")]),\n    _: 1 /* STABLE */\n  })]), _hoisted_19], 32 /* HYDRATE_EVENTS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NmFiMTUxNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTs7O0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7OztBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQU1BO0FBQUE7O0FBRUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUExREE7QUFLQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWU/MWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCIgc3R5bGU9XCJjb2xvcjogI2ZmNTczM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRlZmF1bHRNZXNzYWdlPVwiZGVmYXVsdE1lc3NhZ2VVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRleHRWYWx1ZT1cInVzZXJuYW1lID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSB1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gOCBhbmQgMTYgY2hhcmFjdGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZUVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwiZW1haWwgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Pbmx5IHRoZSBmb2xsb3dpbmcgZG9tYWlucyBhcmUgdmFsaWQ6IGV4YW1wbGUuY29tLCB5b3VyZG9tYWluLmNvbSwgZ21haWwuY29tLCBob3RtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZW1haWxFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIGVtYWlsIGV4dGVuc2lvbiBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwicGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZywgY29udGFpbiBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHN5bWJvbC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInBhc3N3b3JkRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBwYXNzd29yZCBpcyBub3QgdmFsaWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm1QYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJjb25maXJtUGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIFN0cmVuZ3RoOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1tZXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBMb2cgaW48L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQXBwVGV4dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvQXBwVGV4dEZpZWxkLnZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJSZWdpc3RlclBhZ2VcIixcclxuICAgIGNvbXBvbmVudHM6IHtBcHBUZXh0RmllbGR9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJfZGF0YTogXCJcIixcclxuICAgICAgICAgICAgZGF0YV9yZWdpc3Rlcjoge30sXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgZW1haWxFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZEVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZFN0cmVuZ3RoOiAwLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVVzZXJuYW1lOiBcIkludHJvZHVjZSB5b3VyIHVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlRW1haWw6IFwiSW50cm9kdWNlIHlvdXIgZW1haWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VQYXNzd29yZDogXCJJbnRyb2R1Y2UgeW91ciBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2s6IFwiSW50cm9kdWNlIHlvdXIgcGFzc3dvcmQgYWdhaW5cIixcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGVja0VtYWlsKCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDR9JC87XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLmVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkRW1haWxFeHRlbnNpb25zID0gW1wiZXhhbXBsZS5jb21cIiwgXCJ5b3VyZG9tYWluLmNvbVwiLCBcImdtYWlsLmNvbVwiLCBcImhvdG1haWwuY29tXCJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxQYXJ0cyA9IHRoaXMuZW1haWwuc3BsaXQoXCJAXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxFeHRlbnNpb24gPSBlbWFpbFBhcnRzWzFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gIXZhbGlkRW1haWxFeHRlbnNpb25zLmluY2x1ZGVzKGVtYWlsRXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tQYXNzd29yZCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW1xcV19dKS57OCx9JC87XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRFcnJvciA9ICFwYXNzd29yZFJlZ2V4LnRlc3QodGhpcy5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RyZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZC5sZW5ndGggPj0gOCkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1thLXpdLy50ZXN0KHRoaXMucGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1xcZC8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1xcV3xfLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRTdHJlbmd0aCA9IChzdHJlbmd0aCAvIDQpICogMTAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5kYXRhX3JlZ2lzdGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RyX2RhdGEgPSBcInVzZXJuYW1lPVwiICsgdGhpcy51c2VybmFtZSArXCImZW1haWw9XCIgKyB0aGlzLmVtYWlsICsgXCImcGFzc3dvcmQ9XCIgKyB0aGlzLnBhc3N3b3JkXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVnaXN0ZXInLCB0aGlzLnN0cl9kYXRhLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIC8vIFB1ZWRlcyByZWRpcmlnaXIgYWwgdXN1YXJpbyBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlIHNlc2nDs24gdSBvdHJhIHDDoWdpbmEgYXF1w60uXHJcbiAgICAgICAgICAgIH0gY2F0Y2hcclxuICAgICAgICAgICAgICAgIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVnaXN0ZXJpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtc3RyZW5ndGgtbWV0ZXIge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtc3RyZW5ndGgtYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "866e2ff161632547"; }
/******/ }();
/******/ 
/******/ }
);