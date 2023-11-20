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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RegisterPage\",\n  data() {\n    return {\n      username: \"\",\n      email: \"\",\n      emailError: false,\n      password: \"\",\n      passwordError: false,\n      confirmPassword: \"\",\n      passwordStrength: 0\n    };\n  },\n  methods: {\n    checkEmail() {\n      // Expresión regular que verifica una dirección de correo electrónico.\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n      if (!emailRegex.test(this.email)) {\n        this.emailError = true;\n      } else {\n        const validEmailExtensions = [\"example.com\", \"yourdomain.com\", \"gmail.com\", \"hotmail.com\"]; // Agrega aquí las extensiones válidas\n\n        // Obtén la extensión del correo electrónico\n        const emailParts = this.email.split(\"@\");\n        const emailExtension = emailParts[1];\n\n        // Verifica si la extensión está en la lista de extensiones válidas\n        this.emailError = !validEmailExtensions.includes(emailExtension);\n      }\n    },\n    checkPassword() {\n      const passwordRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$/;\n      this.passwordError = !passwordRegex.test(this.password);\n\n      // Calcula la fuerza de la contraseña (puedes personalizar esta lógica)\n      let strength = 0;\n      if (this.password.length >= 8) {\n        strength++;\n      }\n      if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) {\n        strength++;\n      }\n      if (/\\d/.test(this.password)) {\n        strength++;\n      }\n      if (/\\W|_/.test(this.password)) {\n        strength++;\n      }\n\n      // Calcula el porcentaje de fortaleza\n      this.passwordStrength = strength / 4 * 100;\n    },\n    register(e) {\n      e.preventDefault();\n\n      // Validar que la contraseña y la confirmación coincidan\n      if (this.password !== this.confirmPassword) {\n        alert(\"Passwords do not match\");\n      } else {\n        // Realizar el registro aquí\n        alert(\"Registration successful!\");\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7OztBQTJDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT8xYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6YmxhY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlZ2lzdGVyLWZvcm0tYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJyZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHYtbW9kZWw9XCJ1c2VybmFtZVwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiB2LW1vZGVsPVwiZW1haWxcIiBAaW5wdXQ9XCJjaGVja0VtYWlsXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImVtYWlsRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBlbWFpbCBleHRlbnNpb24gaXMgbm90IHZhbGlkPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInBhc3N3b3JkXCIgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJwYXNzd29yZEVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlRoaXMgcGFzc3dvcmQgaXMgbm90IHZhbGlkPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtUGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImNvbmZpcm1QYXNzd29yZFwiIHYtbW9kZWw9XCJjb25maXJtUGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZCBTdHJlbmd0aDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+QmFjayB0byBMb2dpbjwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlJlZ2lzdGVyUGFnZVwiLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgZW1haWxFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgcGFzc3dvcmRTdHJlbmd0aDogMCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hlY2tFbWFpbCgpIHtcbiAgICAgICAgICAgIC8vIEV4cHJlc2nDs24gcmVndWxhciBxdWUgdmVyaWZpY2EgdW5hIGRpcmVjY2nDs24gZGUgY29ycmVvIGVsZWN0csOzbmljby5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kLztcblxuICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5lbWFpbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEVtYWlsRXh0ZW5zaW9ucyA9IFtcImV4YW1wbGUuY29tXCIsIFwieW91cmRvbWFpbi5jb21cIiwgXCJnbWFpbC5jb21cIiwgXCJob3RtYWlsLmNvbVwiXTsgLy8gQWdyZWdhIGFxdcOtIGxhcyBleHRlbnNpb25lcyB2w6FsaWRhc1xuXG4gICAgICAgICAgICAgICAgLy8gT2J0w6luIGxhIGV4dGVuc2nDs24gZGVsIGNvcnJlbyBlbGVjdHLDs25pY29cbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbFBhcnRzID0gdGhpcy5lbWFpbC5zcGxpdChcIkBcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxFeHRlbnNpb24gPSBlbWFpbFBhcnRzWzFdO1xuXG4gICAgICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2kgbGEgZXh0ZW5zacOzbiBlc3TDoSBlbiBsYSBsaXN0YSBkZSBleHRlbnNpb25lcyB2w6FsaWRhc1xuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9ICF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJlZ2V4ID0gL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbXFxXX10pLns4LH0kLztcblxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZEVycm9yID0gIXBhc3N3b3JkUmVnZXgudGVzdCh0aGlzLnBhc3N3b3JkKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYSBsYSBmdWVyemEgZGUgbGEgY29udHJhc2XDsWEgKHB1ZWRlcyBwZXJzb25hbGl6YXIgZXN0YSBsw7NnaWNhKVxuICAgICAgICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkLmxlbmd0aCA+PSA4KSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvW2Etel0vLnRlc3QodGhpcy5wYXNzd29yZCkgJiYgL1tBLVpdLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXFxkLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXFxXfF8vLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhIGVsIHBvcmNlbnRhamUgZGUgZm9ydGFsZXphXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkU3RyZW5ndGggPSAoc3RyZW5ndGggLyA0KSAqIDEwMDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXIoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBWYWxpZGFyIHF1ZSBsYSBjb250cmFzZcOxYSB5IGxhIGNvbmZpcm1hY2nDs24gY29pbmNpZGFuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlYWxpemFyIGVsIHJlZ2lzdHJvIGFxdcOtXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLnBhc3N3b3JkLXN0cmVuZ3RoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgtYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICB3aWR0aDogMDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xufVxuXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-86ab1514\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\",\n  style: {\n    \"color\": \"black\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"register-form-background\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitle\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Register\")], -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"form-group\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"username\"\n}, \"Username:\", -1 /* HOISTED */));\nconst _hoisted_6 = {\n  class: \"form-group\"\n};\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"email\"\n}, \"Email:\", -1 /* HOISTED */));\nconst _hoisted_8 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_9 = {\n  class: \"form-group\"\n};\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password:\", -1 /* HOISTED */));\nconst _hoisted_11 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_12 = {\n  class: \"form-group\"\n};\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"confirmPassword\"\n}, \"Confirm Password:\", -1 /* HOISTED */));\nconst _hoisted_14 = {\n  class: \"password-strength\"\n};\nconst _hoisted_15 = {\n  class: \"password-strength-meter\"\n};\nconst _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"/login\"\n}, \"Back to Login\")], -1 /* HOISTED */));\nconst _hoisted_17 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"secondaryContainer\",\n  style: {\n    \"background-color\": \"white\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\",\n  class: \"submit-button\"\n}, \"Register\")], -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.register && $options.register(...args), [\"prevent\"])),\n    class: \"register-form\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    id: \"username\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.username = $event),\n    class: \"input\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"email\",\n    id: \"email\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.email = $event),\n    onInput: _cache[2] || (_cache[2] = (...args) => $options.checkEmail && $options.checkEmail(...args)),\n    class: \"input\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]]), $data.emailError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_8, \"This email extension is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    id: \"password\",\n    \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $data.password = $event),\n    onInput: _cache[4] || (_cache[4] = (...args) => $options.checkPassword && $options.checkPassword(...args)),\n    class: \"input\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]]), $data.passwordError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_11, \"This password is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    id: \"confirmPassword\",\n    \"onUpdate:modelValue\": _cache[5] || (_cache[5] = $event => $data.confirmPassword = $event),\n    class: \"input\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.confirmPassword]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Password Strength: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"password-strength-bar\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      width: $data.passwordStrength + '%'\n    })\n  }, null, 4 /* STYLE */)])]), _hoisted_16, _hoisted_17], 32 /* HYDRATE_EVENTS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NmFiMTUxNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7OztBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7O0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FBbENBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT8xYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6YmxhY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlZ2lzdGVyLWZvcm0tYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJyZWdpc3Rlci1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHYtbW9kZWw9XCJ1c2VybmFtZVwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiB2LW1vZGVsPVwiZW1haWxcIiBAaW5wdXQ9XCJjaGVja0VtYWlsXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImVtYWlsRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBlbWFpbCBleHRlbnNpb24gaXMgbm90IHZhbGlkPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInBhc3N3b3JkXCIgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJwYXNzd29yZEVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlRoaXMgcGFzc3dvcmQgaXMgbm90IHZhbGlkPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtUGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImNvbmZpcm1QYXNzd29yZFwiIHYtbW9kZWw9XCJjb25maXJtUGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZCBTdHJlbmd0aDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+QmFjayB0byBMb2dpbjwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlJlZ2lzdGVyUGFnZVwiLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgZW1haWxFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgcGFzc3dvcmRTdHJlbmd0aDogMCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hlY2tFbWFpbCgpIHtcbiAgICAgICAgICAgIC8vIEV4cHJlc2nDs24gcmVndWxhciBxdWUgdmVyaWZpY2EgdW5hIGRpcmVjY2nDs24gZGUgY29ycmVvIGVsZWN0csOzbmljby5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kLztcblxuICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5lbWFpbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEVtYWlsRXh0ZW5zaW9ucyA9IFtcImV4YW1wbGUuY29tXCIsIFwieW91cmRvbWFpbi5jb21cIiwgXCJnbWFpbC5jb21cIiwgXCJob3RtYWlsLmNvbVwiXTsgLy8gQWdyZWdhIGFxdcOtIGxhcyBleHRlbnNpb25lcyB2w6FsaWRhc1xuXG4gICAgICAgICAgICAgICAgLy8gT2J0w6luIGxhIGV4dGVuc2nDs24gZGVsIGNvcnJlbyBlbGVjdHLDs25pY29cbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbFBhcnRzID0gdGhpcy5lbWFpbC5zcGxpdChcIkBcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxFeHRlbnNpb24gPSBlbWFpbFBhcnRzWzFdO1xuXG4gICAgICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2kgbGEgZXh0ZW5zacOzbiBlc3TDoSBlbiBsYSBsaXN0YSBkZSBleHRlbnNpb25lcyB2w6FsaWRhc1xuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9ICF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJlZ2V4ID0gL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbXFxXX10pLns4LH0kLztcblxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZEVycm9yID0gIXBhc3N3b3JkUmVnZXgudGVzdCh0aGlzLnBhc3N3b3JkKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYSBsYSBmdWVyemEgZGUgbGEgY29udHJhc2XDsWEgKHB1ZWRlcyBwZXJzb25hbGl6YXIgZXN0YSBsw7NnaWNhKVxuICAgICAgICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkLmxlbmd0aCA+PSA4KSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvW2Etel0vLnRlc3QodGhpcy5wYXNzd29yZCkgJiYgL1tBLVpdLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXFxkLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXFxXfF8vLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhIGVsIHBvcmNlbnRhamUgZGUgZm9ydGFsZXphXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkU3RyZW5ndGggPSAoc3RyZW5ndGggLyA0KSAqIDEwMDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXIoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBWYWxpZGFyIHF1ZSBsYSBjb250cmFzZcOxYSB5IGxhIGNvbmZpcm1hY2nDs24gY29pbmNpZGFuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlYWxpemFyIGVsIHJlZ2lzdHJvIGFxdcOtXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLnBhc3N3b3JkLXN0cmVuZ3RoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgtYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICB3aWR0aDogMDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xufVxuXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b251a4d130419967"; }
/******/ }();
/******/ 
/******/ }
);