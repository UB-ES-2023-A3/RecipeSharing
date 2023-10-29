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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppHeader.vue */ \"./src/components/AppHeader.vue\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RegisterPage\",\n  components: {\n    AppHeader: _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      username: \"\",\n      email: \"\",\n      emailError: false,\n      password: \"\",\n      passwordError: false,\n      confirmPassword: \"\",\n      passwordStrength: 0\n    };\n  },\n  methods: {\n    checkEmail() {\n      // Expresión regular que verifica una dirección de correo electrónico.\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n      if (!emailRegex.test(this.email)) {\n        this.emailError = true;\n      } else {\n        const validEmailExtensions = [\"example.com\", \"yourdomain.com\", \"gmail.com\", \"hotmail.com\"]; // Agrega aquí las extensiones válidas\n\n        // Obtén la extensión del correo electrónico\n        const emailParts = this.email.split(\"@\");\n        const emailExtension = emailParts[1];\n\n        // Verifica si la extensión está en la lista de extensiones válidas\n        this.emailError = !validEmailExtensions.includes(emailExtension);\n      }\n    },\n    checkPassword() {\n      const passwordRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$/;\n      this.passwordError = !passwordRegex.test(this.password);\n\n      // Calcula la fuerza de la contraseña (puedes personalizar esta lógica)\n      let strength = 0;\n      if (this.password.length >= 8) {\n        strength++;\n      }\n      if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) {\n        strength++;\n      }\n      if (/\\d/.test(this.password)) {\n        strength++;\n      }\n      if (/\\W|_/.test(this.password)) {\n        strength++;\n      }\n\n      // Calcula el porcentaje de fortaleza\n      this.passwordStrength = strength / 4 * 100;\n    },\n    register(e) {\n      e.preventDefault();\n\n      // Validar que la contraseña y la confirmación coincidan\n      if (this.password !== this.confirmPassword) {\n        alert(\"Passwords do not match\");\n      } else {\n        // Realizar el registro aquí\n        alert(\"Registration successful!\");\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT8xYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6YmxhY2tcIj5cbiAgPGRpdiBjbGFzcz1cInJlZ2lzdGVyLXBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8QXBwSGVhZGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwicmVnaXN0ZXItaGVhZGluZ1wiPlJlZ2lzdGVyPC9oMj5cbiAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiIGNsYXNzPVwicmVnaXN0ZXItZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWUgKDgtMTYgY2hhcmFjdGVycyk6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHYtbW9kZWw9XCJ1c2VybmFtZVwiIGNsYXNzPVwiaW5wdXRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHYtbW9kZWw9XCJlbWFpbFwiIEBpbnB1dD1cImNoZWNrRW1haWxcIiBjbGFzcz1cImlucHV0XCIgLz5cbiAgICAgICAgPHAgdi1pZj1cImVtYWlsRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBlbWFpbCBleHRlbnNpb24gaXMgbm90IHZhbGlkPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZCAoOCBjaGFyYWN0ZXJzLCAxIHN5bWJvbCwgMSBsb3dlcmNhc2UsIDEgdXBwZXJjYXNlKTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIEBpbnB1dD1cImNoZWNrUGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgLz5cbiAgICAgICAgPHAgdi1pZj1cInBhc3N3b3JkRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBwYXNzd29yZCBpcyBub3QgdmFsaWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtUGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImNvbmZpcm1QYXNzd29yZFwiIHYtbW9kZWw9XCJjb25maXJtUGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoXCI+XG4gICAgICAgIFBhc3N3b3JkIFN0cmVuZ3RoOlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtbWV0ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFwcEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0FwcEhlYWRlci52dWUnO1xuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlJlZ2lzdGVyUGFnZVwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQXBwSGVhZGVyLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgZW1haWxFcnJvcjogZmFsc2UsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIHBhc3N3b3JkRXJyb3I6IGZhbHNlLFxuICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgICAgcGFzc3dvcmRTdHJlbmd0aDogMCxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2hlY2tFbWFpbCgpIHtcbiAgICAgIC8vIEV4cHJlc2nDs24gcmVndWxhciBxdWUgdmVyaWZpY2EgdW5hIGRpcmVjY2nDs24gZGUgY29ycmVvIGVsZWN0csOzbmljby5cbiAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kLztcblxuICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5lbWFpbCkpIHtcbiAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbGlkRW1haWxFeHRlbnNpb25zID0gW1wiZXhhbXBsZS5jb21cIiwgXCJ5b3VyZG9tYWluLmNvbVwiLCBcImdtYWlsLmNvbVwiLCBcImhvdG1haWwuY29tXCJdOyAvLyBBZ3JlZ2EgYXF1w60gbGFzIGV4dGVuc2lvbmVzIHbDoWxpZGFzXG5cbiAgICAgICAgLy8gT2J0w6luIGxhIGV4dGVuc2nDs24gZGVsIGNvcnJlbyBlbGVjdHLDs25pY29cbiAgICAgICAgY29uc3QgZW1haWxQYXJ0cyA9IHRoaXMuZW1haWwuc3BsaXQoXCJAXCIpO1xuICAgICAgICBjb25zdCBlbWFpbEV4dGVuc2lvbiA9IGVtYWlsUGFydHNbMV07XG5cbiAgICAgICAgLy8gVmVyaWZpY2Egc2kgbGEgZXh0ZW5zacOzbiBlc3TDoSBlbiBsYSBsaXN0YSBkZSBleHRlbnNpb25lcyB2w6FsaWRhc1xuICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSAhdmFsaWRFbWFpbEV4dGVuc2lvbnMuaW5jbHVkZXMoZW1haWxFeHRlbnNpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tQYXNzd29yZCgpIHtcbiAgICAgIGNvbnN0IHBhc3N3b3JkUmVnZXggPSAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKltcXFdfXSkuezgsfSQvO1xuXG4gICAgICB0aGlzLnBhc3N3b3JkRXJyb3IgPSAhcGFzc3dvcmRSZWdleC50ZXN0KHRoaXMucGFzc3dvcmQpO1xuXG4gICAgICAvLyBDYWxjdWxhIGxhIGZ1ZXJ6YSBkZSBsYSBjb250cmFzZcOxYSAocHVlZGVzIHBlcnNvbmFsaXphciBlc3RhIGzDs2dpY2EpXG4gICAgICBsZXQgc3RyZW5ndGggPSAwO1xuICAgICAgaWYgKHRoaXMucGFzc3dvcmQubGVuZ3RoID49IDgpIHtcbiAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgIH1cbiAgICAgIGlmICgvW2Etel0vLnRlc3QodGhpcy5wYXNzd29yZCkgJiYgL1tBLVpdLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgIHN0cmVuZ3RoKys7XG4gICAgICB9XG4gICAgICBpZiAoL1xcZC8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgfVxuICAgICAgaWYgKC9cXFd8Xy8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWxjdWxhIGVsIHBvcmNlbnRhamUgZGUgZm9ydGFsZXphXG4gICAgICB0aGlzLnBhc3N3b3JkU3RyZW5ndGggPSAoc3RyZW5ndGggLyA0KSAqIDEwMDtcbiAgICB9LFxuICAgIHJlZ2lzdGVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gVmFsaWRhciBxdWUgbGEgY29udHJhc2XDsWEgeSBsYSBjb25maXJtYWNpw7NuIGNvaW5jaWRhblxuICAgICAgaWYgKHRoaXMucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIGFsZXJ0KFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJlYWxpemFyIGVsIHJlZ2lzdHJvIGFxdcOtXG4gICAgICAgIGFsZXJ0KFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXCIpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucmVnaXN0ZXItcGFnZSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNFNEE0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yZWdpc3Rlci1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjRkY1NzMzO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wYXNzd29yZC1zdHJlbmd0aC1iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIHdpZHRoOiAwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTczMztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4NEEyOTtcbn1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-86ab1514\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\",\n  style: {\n    \"color\": \"black\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"register-page\"\n};\nconst _hoisted_3 = {\n  class: \"container\"\n};\nconst _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", {\n  class: \"register-heading\"\n}, \"Register\", -1 /* HOISTED */));\nconst _hoisted_5 = {\n  class: \"form-group\"\n};\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"username\"\n}, \"Username (8-16 characters):\", -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"form-group\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"email\"\n}, \"Email:\", -1 /* HOISTED */));\nconst _hoisted_9 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_10 = {\n  class: \"form-group\"\n};\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password (8 characters, 1 symbol, 1 lowercase, 1 uppercase):\", -1 /* HOISTED */));\nconst _hoisted_12 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_13 = {\n  class: \"form-group\"\n};\nconst _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"confirmPassword\"\n}, \"Confirm Password:\", -1 /* HOISTED */));\nconst _hoisted_15 = {\n  class: \"password-strength\"\n};\nconst _hoisted_16 = {\n  class: \"password-strength-meter\"\n};\nconst _hoisted_17 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\",\n  class: \"register-button\"\n}, \"Register\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppHeader\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppHeader)]), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.register && $options.register(...args), [\"prevent\"])),\n    class: \"register-form\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    id: \"username\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.username = $event),\n    class: \"input\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"email\",\n    id: \"email\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.email = $event),\n    onInput: _cache[2] || (_cache[2] = (...args) => $options.checkEmail && $options.checkEmail(...args)),\n    class: \"input\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]]), $data.emailError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_9, \"This email extension is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    id: \"password\",\n    \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $data.password = $event),\n    onInput: _cache[4] || (_cache[4] = (...args) => $options.checkPassword && $options.checkPassword(...args)),\n    class: \"input\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]]), $data.passwordError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_12, \"This password is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    id: \"confirmPassword\",\n    \"onUpdate:modelValue\": _cache[5] || (_cache[5] = $event => $data.confirmPassword = $event),\n    class: \"input\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.confirmPassword]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Password Strength: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"password-strength-bar\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      width: $data.passwordStrength + '%'\n    })\n  }, null, 4 /* STYLE */)])]), _hoisted_17], 32 /* HYDRATE_EVENTS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NmFiMTUxNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBOztBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTs7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUEvQkE7QUFNQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlPzFiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGFpbmVyXCIgc3R5bGU9XCJjb2xvcjpibGFja1wiPlxuICA8ZGl2IGNsYXNzPVwicmVnaXN0ZXItcGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxBcHBIZWFkZXIgLz5cbiAgICA8L2Rpdj5cbiAgICA8aDIgY2xhc3M9XCJyZWdpc3Rlci1oZWFkaW5nXCI+UmVnaXN0ZXI8L2gyPlxuICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgY2xhc3M9XCJyZWdpc3Rlci1mb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZSAoOC0xNiBjaGFyYWN0ZXJzKTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgdi1tb2RlbD1cInVzZXJuYW1lXCIgY2xhc3M9XCJpbnB1dFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdi1tb2RlbD1cImVtYWlsXCIgQGlucHV0PVwiY2hlY2tFbWFpbFwiIGNsYXNzPVwiaW5wdXRcIiAvPlxuICAgICAgICA8cCB2LWlmPVwiZW1haWxFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIGVtYWlsIGV4dGVuc2lvbiBpcyBub3QgdmFsaWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkICg4IGNoYXJhY3RlcnMsIDEgc3ltYm9sLCAxIGxvd2VyY2FzZSwgMSB1cHBlcmNhc2UpOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInBhc3N3b3JkXCIgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIiAvPlxuICAgICAgICA8cCB2LWlmPVwicGFzc3dvcmRFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIHBhc3N3b3JkIGlzIG5vdCB2YWxpZDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImNvbmZpcm1QYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiY29uZmlybVBhc3N3b3JkXCIgdi1tb2RlbD1cImNvbmZpcm1QYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGhcIj5cbiAgICAgICAgUGFzc3dvcmQgU3RyZW5ndGg6XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1tZXRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1iYXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiBwYXNzd29yZFN0cmVuZ3RoICsgJyUnIH1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uXCI+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwSGVhZGVyLnZ1ZSc7XG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUmVnaXN0ZXJQYWdlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBcHBIZWFkZXIsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBlbWFpbEVycm9yOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgcGFzc3dvcmRFcnJvcjogZmFsc2UsXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXG4gICAgICBwYXNzd29yZFN0cmVuZ3RoOiAwLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja0VtYWlsKCkge1xuICAgICAgLy8gRXhwcmVzacOzbiByZWd1bGFyIHF1ZSB2ZXJpZmljYSB1bmEgZGlyZWNjacOzbiBkZSBjb3JyZW8gZWxlY3Ryw7NuaWNvLlxuICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fSQvO1xuXG4gICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLmVtYWlsKSkge1xuICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsaWRFbWFpbEV4dGVuc2lvbnMgPSBbXCJleGFtcGxlLmNvbVwiLCBcInlvdXJkb21haW4uY29tXCIsIFwiZ21haWwuY29tXCIsIFwiaG90bWFpbC5jb21cIl07IC8vIEFncmVnYSBhcXXDrSBsYXMgZXh0ZW5zaW9uZXMgdsOhbGlkYXNcblxuICAgICAgICAvLyBPYnTDqW4gbGEgZXh0ZW5zacOzbiBkZWwgY29ycmVvIGVsZWN0csOzbmljb1xuICAgICAgICBjb25zdCBlbWFpbFBhcnRzID0gdGhpcy5lbWFpbC5zcGxpdChcIkBcIik7XG4gICAgICAgIGNvbnN0IGVtYWlsRXh0ZW5zaW9uID0gZW1haWxQYXJ0c1sxXTtcblxuICAgICAgICAvLyBWZXJpZmljYSBzaSBsYSBleHRlbnNpw7NuIGVzdMOhIGVuIGxhIGxpc3RhIGRlIGV4dGVuc2lvbmVzIHbDoWxpZGFzXG4gICAgICAgIHRoaXMuZW1haWxFcnJvciA9ICF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja1Bhc3N3b3JkKCkge1xuICAgICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW1xcV19dKS57OCx9JC87XG5cbiAgICAgIHRoaXMucGFzc3dvcmRFcnJvciA9ICFwYXNzd29yZFJlZ2V4LnRlc3QodGhpcy5wYXNzd29yZCk7XG5cbiAgICAgIC8vIENhbGN1bGEgbGEgZnVlcnphIGRlIGxhIGNvbnRyYXNlw7FhIChwdWVkZXMgcGVyc29uYWxpemFyIGVzdGEgbMOzZ2ljYSlcbiAgICAgIGxldCBzdHJlbmd0aCA9IDA7XG4gICAgICBpZiAodGhpcy5wYXNzd29yZC5sZW5ndGggPj0gOCkge1xuICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgfVxuICAgICAgaWYgKC9bYS16XS8udGVzdCh0aGlzLnBhc3N3b3JkKSAmJiAvW0EtWl0vLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgIH1cbiAgICAgIGlmICgvXFxkLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgIHN0cmVuZ3RoKys7XG4gICAgICB9XG4gICAgICBpZiAoL1xcV3xfLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgIHN0cmVuZ3RoKys7XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGN1bGEgZWwgcG9yY2VudGFqZSBkZSBmb3J0YWxlemFcbiAgICAgIHRoaXMucGFzc3dvcmRTdHJlbmd0aCA9IChzdHJlbmd0aCAvIDQpICogMTAwO1xuICAgIH0sXG4gICAgcmVnaXN0ZXIoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBWYWxpZGFyIHF1ZSBsYSBjb250cmFzZcOxYSB5IGxhIGNvbmZpcm1hY2nDs24gY29pbmNpZGFuXG4gICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVhbGl6YXIgZWwgcmVnaXN0cm8gYXF1w61cbiAgICAgICAgYWxlcnQoXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5yZWdpc3Rlci1wYWdlIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0U0QTQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJlZ2lzdGVyLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNGRjU3MzM7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yZWdpc3Rlci1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wYXNzd29yZC1zdHJlbmd0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgtbWV0ZXIge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBhc3N3b3JkLXN0cmVuZ3RoLWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgd2lkdGg6IDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG59XG5cbi5yZWdpc3Rlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5yZWdpc3Rlci1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg0QTI5O1xufVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e7e4c96e72f7b03c"; }
/******/ }();
/******/ 
/******/ }
);