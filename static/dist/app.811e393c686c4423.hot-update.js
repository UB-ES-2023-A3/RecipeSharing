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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RegisterPage\",\n  data() {\n    return {\n      username: \"\",\n      email: \"\",\n      emailError: false,\n      password: \"\",\n      passwordError: false,\n      confirmPassword: \"\",\n      passwordStrength: 0\n    };\n  },\n  methods: {\n    checkEmail() {\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n      if (!emailRegex.test(this.email)) {\n        this.emailError = true;\n      } else {\n        const validEmailExtensions = [\"example.com\", \"yourdomain.com\", \"gmail.com\", \"hotmail.com\"];\n        const emailParts = this.email.split(\"@\");\n        const emailExtension = emailParts[1];\n        this.emailError = !validEmailExtensions.includes(emailExtension);\n      }\n    },\n    checkPassword() {\n      const passwordRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$/;\n      this.passwordError = !passwordRegex.test(this.password);\n      let strength = 0;\n      if (this.password.length >= 8) {\n        strength++;\n      }\n      if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) {\n        strength++;\n      }\n      if (/\\d/.test(this.password)) {\n        strength++;\n      }\n      if (/\\W|_/.test(this.password)) {\n        strength++;\n      }\n      this.passwordStrength = strength / 4 * 100;\n    },\n    register(e) {\n      e.preventDefault();\n      if (this.password !== this.confirmPassword) {\n        alert(\"Passwords do not match\");\n      } else {\n        alert(\"Registration successful!\");\n        // Add code to handle registration here\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7OztBQW9EQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWU/MWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtYWluQ29udGFpbmVyXCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVnaXN0ZXItZm9ybS1iYWNrZ3JvdW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFpblRpdGxlXCIgc3R5bGU9XCJjb2xvcjogI2ZmNTczM1wiPlxuICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiIGNsYXNzPVwicmVnaXN0ZXItZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHYtbW9kZWw9XCJ1c2VybmFtZVwiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSB5b3VyIHVzZXJuYW1lXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxuICAgICAgICAgICAgPHA+VGhlIHVzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiA4IGFuZCAxNiBjaGFyYWN0ZXJzLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHYtbW9kZWw9XCJlbWFpbFwiIEBpbnB1dD1cImNoZWNrRW1haWxcIiBjbGFzcz1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgeW91ciBlbWFpbFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVcIj5cbiAgICAgICAgICAgIDxwPk9ubHkgdGhlIGZvbGxvd2luZyBkb21haW5zIGFyZSB2YWxpZDogZXhhbXBsZS5jb20sIHlvdXJkb21haW4uY29tLCBnbWFpbC5jb20sIGhvdG1haWwuY29tPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIHYtaWY9XCJlbWFpbEVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlRoaXMgZW1haWwgZXh0ZW5zaW9uIGlzIG5vdCB2YWxpZDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIEBpbnB1dD1cImNoZWNrUGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgeW91ciBwYXNzd29yZFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVcIj5cbiAgICAgICAgICAgIDxwPlRoZSBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLCBjb250YWluIG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIG51bWJlciwgYW5kIG9uZSBzeW1ib2wuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIHYtaWY9XCJwYXNzd29yZEVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlRoaXMgcGFzc3dvcmQgaXMgbm90IHZhbGlkPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImNvbmZpcm1QYXNzd29yZFwiIHYtbW9kZWw9XCJjb25maXJtUGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgeW91ciBwYXNzd29yZCBhZ2FpblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGhcIj5cbiAgICAgICAgICBQYXNzd29yZCBTdHJlbmd0aDpcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtbWV0ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1iYXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiBwYXNzd29yZFN0cmVuZ3RoICsgJyUnIH1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiPkJhY2sgdG8gTG9naW48L3JvdXRlci1saW5rPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUmVnaXN0ZXJQYWdlXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBlbWFpbEVycm9yOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgcGFzc3dvcmRFcnJvcjogZmFsc2UsXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXG4gICAgICBwYXNzd29yZFN0cmVuZ3RoOiAwLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja0VtYWlsKCkge1xuICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fSQvO1xuXG4gICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLmVtYWlsKSkge1xuICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsaWRFbWFpbEV4dGVuc2lvbnMgPSBbXCJleGFtcGxlLmNvbVwiLCBcInlvdXJkb21haW4uY29tXCIsIFwiZ21haWwuY29tXCIsIFwiaG90bWFpbC5jb21cIl07XG4gICAgICAgIGNvbnN0IGVtYWlsUGFydHMgPSB0aGlzLmVtYWlsLnNwbGl0KFwiQFwiKTtcbiAgICAgICAgY29uc3QgZW1haWxFeHRlbnNpb24gPSBlbWFpbFBhcnRzWzFdO1xuICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSAhdmFsaWRFbWFpbEV4dGVuc2lvbnMuaW5jbHVkZXMoZW1haWxFeHRlbnNpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tQYXNzd29yZCgpIHtcbiAgICAgIGNvbnN0IHBhc3N3b3JkUmVnZXggPSAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKltcXFdfXSkuezgsfSQvO1xuICAgICAgdGhpcy5wYXNzd29yZEVycm9yID0gIXBhc3N3b3JkUmVnZXgudGVzdCh0aGlzLnBhc3N3b3JkKTtcblxuICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcbiAgICAgIGlmICh0aGlzLnBhc3N3b3JkLmxlbmd0aCA+PSA4KSB7XG4gICAgICAgIHN0cmVuZ3RoKys7XG4gICAgICB9XG4gICAgICBpZiAoL1thLXpdLy50ZXN0KHRoaXMucGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgfVxuICAgICAgaWYgKC9cXGQvLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgIH1cbiAgICAgIGlmICgvXFxXfF8vLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgIH1cbiAgICAgIHRoaXMucGFzc3dvcmRTdHJlbmd0aCA9IChzdHJlbmd0aCAvIDQpICogMTAwO1xuICAgIH0sXG4gICAgcmVnaXN0ZXIoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIGFsZXJ0KFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXCIpO1xuICAgICAgICAvLyBBZGQgY29kZSB0byBoYW5kbGUgcmVnaXN0cmF0aW9uIGhlcmVcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnBhc3N3b3JkLXN0cmVuZ3RoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXNzd29yZC1zdHJlbmd0aC1tZXRlciB7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgtYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICB3aWR0aDogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-86ab1514\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\",\n  style: {\n    \"color\": \"black\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"register-form-background\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitle\",\n  style: {\n    \"color\": \"#ff5733\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Register\")], -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"form-group\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"username\"\n}, \"Username:\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The username must be between 8 and 16 characters.\")], -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"form-group\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"email\"\n}, \"Email:\", -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Only the following domains are valid: example.com, yourdomain.com, gmail.com, hotmail.com\")], -1 /* HOISTED */));\nconst _hoisted_10 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_11 = {\n  class: \"form-group\"\n};\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password:\", -1 /* HOISTED */));\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one symbol.\")], -1 /* HOISTED */));\nconst _hoisted_14 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_15 = {\n  class: \"form-group\"\n};\nconst _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"confirmPassword\"\n}, \"Confirm Password:\", -1 /* HOISTED */));\nconst _hoisted_17 = {\n  class: \"password-strength\"\n};\nconst _hoisted_18 = {\n  class: \"password-strength-meter\"\n};\nconst _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"secondaryContainer\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\",\n  class: \"submit-button\"\n}, \"Register\")], -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.register && $options.register(...args), [\"prevent\"])),\n    class: \"register-form\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    id: \"username\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.username = $event),\n    class: \"input\",\n    placeholder: \"Introduce your username\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"email\",\n    id: \"email\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.email = $event),\n    onInput: _cache[2] || (_cache[2] = (...args) => $options.checkEmail && $options.checkEmail(...args)),\n    class: \"input\",\n    placeholder: \"Introduce your email\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]]), _hoisted_9, $data.emailError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_10, \"This email extension is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    id: \"password\",\n    \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $data.password = $event),\n    onInput: _cache[4] || (_cache[4] = (...args) => $options.checkPassword && $options.checkPassword(...args)),\n    class: \"input\",\n    placeholder: \"Introduce your password\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]]), _hoisted_13, $data.passwordError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_14, \"This password is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    id: \"confirmPassword\",\n    \"onUpdate:modelValue\": _cache[5] || (_cache[5] = $event => $data.confirmPassword = $event),\n    class: \"input\",\n    placeholder: \"Introduce your password again\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.confirmPassword]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Password Strength: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"password-strength-bar\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      width: $data.passwordStrength + '%'\n    })\n  }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/login\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Back to Login\")]),\n    _: 1 /* STABLE */\n  })]), _hoisted_19], 32 /* HYDRATE_EVENTS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NmFiMTUxNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7O0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7OztBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7O0FBRUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7OztBQTNDQTtBQUtBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT8xYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1haW5Db250YWluZXJcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiPlxuICAgIDxkaXYgY2xhc3M9XCJyZWdpc3Rlci1mb3JtLWJhY2tncm91bmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIiBzdHlsZT1cImNvbG9yOiAjZmY1NzMzXCI+XG4gICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJyZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgdi1tb2RlbD1cInVzZXJuYW1lXCIgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIHlvdXIgdXNlcm5hbWVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XG4gICAgICAgICAgICA8cD5UaGUgdXNlcm5hbWUgbXVzdCBiZSBiZXR3ZWVuIDggYW5kIDE2IGNoYXJhY3RlcnMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdi1tb2RlbD1cImVtYWlsXCIgQGlucHV0PVwiY2hlY2tFbWFpbFwiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSB5b3VyIGVtYWlsXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxuICAgICAgICAgICAgPHA+T25seSB0aGUgZm9sbG93aW5nIGRvbWFpbnMgYXJlIHZhbGlkOiBleGFtcGxlLmNvbSwgeW91cmRvbWFpbi5jb20sIGdtYWlsLmNvbSwgaG90bWFpbC5jb208L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgdi1pZj1cImVtYWlsRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBlbWFpbCBleHRlbnNpb24gaXMgbm90IHZhbGlkPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInBhc3N3b3JkXCIgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSB5b3VyIHBhc3N3b3JkXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxuICAgICAgICAgICAgPHA+VGhlIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcsIGNvbnRhaW4gb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHN5bWJvbC48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgdi1pZj1cInBhc3N3b3JkRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBwYXNzd29yZCBpcyBub3QgdmFsaWQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtUGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiY29uZmlybVBhc3N3b3JkXCIgdi1tb2RlbD1cImNvbmZpcm1QYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSB5b3VyIHBhc3N3b3JkIGFnYWluXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxuICAgICAgICAgIFBhc3N3b3JkIFN0cmVuZ3RoOlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1tZXRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoLWJhclwiIDpzdHlsZT1cInsgd2lkdGg6IHBhc3N3b3JkU3RyZW5ndGggKyAnJScgfVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2xvZ2luXCI+QmFjayB0byBMb2dpbjwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJSZWdpc3RlclBhZ2VcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIGVtYWlsRXJyb3I6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBwYXNzd29yZEVycm9yOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcbiAgICAgIHBhc3N3b3JkU3RyZW5ndGg6IDAsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNoZWNrRW1haWwoKSB7XG4gICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDR9JC87XG5cbiAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KHRoaXMuZW1haWwpKSB7XG4gICAgICAgIHRoaXMuZW1haWxFcnJvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWxpZEVtYWlsRXh0ZW5zaW9ucyA9IFtcImV4YW1wbGUuY29tXCIsIFwieW91cmRvbWFpbi5jb21cIiwgXCJnbWFpbC5jb21cIiwgXCJob3RtYWlsLmNvbVwiXTtcbiAgICAgICAgY29uc3QgZW1haWxQYXJ0cyA9IHRoaXMuZW1haWwuc3BsaXQoXCJAXCIpO1xuICAgICAgICBjb25zdCBlbWFpbEV4dGVuc2lvbiA9IGVtYWlsUGFydHNbMV07XG4gICAgICAgIHRoaXMuZW1haWxFcnJvciA9ICF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja1Bhc3N3b3JkKCkge1xuICAgICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW1xcV19dKS57OCx9JC87XG4gICAgICB0aGlzLnBhc3N3b3JkRXJyb3IgPSAhcGFzc3dvcmRSZWdleC50ZXN0KHRoaXMucGFzc3dvcmQpO1xuXG4gICAgICBsZXQgc3RyZW5ndGggPSAwO1xuICAgICAgaWYgKHRoaXMucGFzc3dvcmQubGVuZ3RoID49IDgpIHtcbiAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgIH1cbiAgICAgIGlmICgvW2Etel0vLnRlc3QodGhpcy5wYXNzd29yZCkgJiYgL1tBLVpdLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgIHN0cmVuZ3RoKys7XG4gICAgICB9XG4gICAgICBpZiAoL1xcZC8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgfVxuICAgICAgaWYgKC9cXFd8Xy8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXNzd29yZFN0cmVuZ3RoID0gKHN0cmVuZ3RoIC8gNCkgKiAxMDA7XG4gICAgfSxcbiAgICByZWdpc3RlcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIik7XG4gICAgICAgIC8vIEFkZCBjb2RlIHRvIGhhbmRsZSByZWdpc3RyYXRpb24gaGVyZVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucGFzc3dvcmQtc3RyZW5ndGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wYXNzd29yZC1zdHJlbmd0aC1iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIHdpZHRoOiAwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "15f5b7e147e5f5fc"; }
/******/ }();
/******/ 
/******/ }
);