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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RegisterPage\",\n  components: {},\n  data() {\n    return {\n      username: \"\",\n      email: \"\",\n      emailError: false,\n      password: \"\",\n      passwordError: false,\n      confirmPassword: \"\",\n      passwordStrength: 0,\n      defaultMessageUsername: \"Introduce your username\",\n      defaultMessageEmail: \"Introduce your email\",\n      defaultMessagePassword: \"Introduce your password\",\n      defaultMessagePasswordCheck: \"Introduce you password again\"\n    };\n  },\n  methods: {\n    checkEmail() {\n      // Expresión regular que verifica una dirección de correo electrónico.\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n      if (!emailRegex.test(this.email)) {\n        this.emailError = true;\n      } else {\n        const validEmailExtensions = [\"example.com\", \"yourdomain.com\", \"gmail.com\", \"hotmail.com\"]; // Agrega aquí las extensiones válidas\n\n        // Obtén la extensión del correo electrónico\n        const emailParts = this.email.split(\"@\");\n        const emailExtension = emailParts[1];\n\n        // Verifica si la extensión está en la lista de extensiones válidas\n        this.emailError = !validEmailExtensions.includes(emailExtension);\n      }\n    },\n    checkPassword() {\n      const passwordRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$/;\n      this.passwordError = !passwordRegex.test(this.password);\n\n      // Calcula la fuerza de la contraseña (puedes personalizar esta lógica)\n      let strength = 0;\n      if (this.password.length >= 8) {\n        strength++;\n      }\n      if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) {\n        strength++;\n      }\n      if (/\\d/.test(this.password)) {\n        strength++;\n      }\n      if (/\\W|_/.test(this.password)) {\n        strength++;\n      }\n\n      // Calcula el porcentaje de fortaleza\n      this.passwordStrength = strength / 4 * 100;\n    },\n    register(e) {\n      e.preventDefault();\n\n      // Validar que la contraseña y la confirmación coincidan\n      if (this.password !== this.confirmPassword) {\n        alert(\"Passwords do not match\");\n      } else {\n        // Realizar el registro aquí\n        alert(\"Registration successful!\");\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9SZWdpc3RlclBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7OztBQW9EQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS52dWU/MWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1haW5Db250YWluZXJcIiBzdHlsZT1cImNvbG9yOmJsYWNrXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWdpc3Rlci1mb3JtLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIiBzdHlsZT1cImNvbG9yOiAjZmY1NzMzXCI+XG4gICAgICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwicmVnaXN0ZXJcIiBjbGFzcz1cInJlZ2lzdGVyLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgdi1tb2RlbD1cInVzZXJuYW1lXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSB1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gOCBhbmQgMTYgY2hhcmFjdGVycy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdi1tb2RlbD1cImVtYWlsXCIgQGlucHV0PVwiY2hlY2tFbWFpbFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Pbmx5IHRoZSBmb2xsb3dpbmcgZG9tYWlucyBhcmUgdmFsaWQ6IGV4YW1wbGUuY29tLCB5b3VyZG9tYWluLmNvbSwgZ21haWwuY29tLCBob3RtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJlbWFpbEVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlRoaXMgZW1haWwgZXh0ZW5zaW9uIGlzIG5vdCB2YWxpZDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIEBpbnB1dD1cImNoZWNrUGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcsIGNvbnRhaW4gb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHN5bWJvbC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicGFzc3dvcmRFcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5UaGlzIHBhc3N3b3JkIGlzIG5vdCB2YWxpZDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJjb25maXJtUGFzc3dvcmRcIiB2LW1vZGVsPVwiY29uZmlybVBhc3N3b3JkXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQgU3RyZW5ndGg6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1tZXRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoLWJhclwiIDpzdHlsZT1cInsgd2lkdGg6IHBhc3N3b3JkU3RyZW5ndGggKyAnJScgfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dpblwiPkJhY2sgdG8gTG9naW48L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6d2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJSZWdpc3RlclBhZ2VcIixcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgIGVtYWlsRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgICBwYXNzd29yZEVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkU3RyZW5ndGg6IDAsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVVzZXJuYW1lOiBcIkludHJvZHVjZSB5b3VyIHVzZXJuYW1lXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZUVtYWlsOiBcIkludHJvZHVjZSB5b3VyIGVtYWlsXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVBhc3N3b3JkOiBcIkludHJvZHVjZSB5b3VyIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVBhc3N3b3JkQ2hlY2s6IFwiSW50cm9kdWNlIHlvdSBwYXNzd29yZCBhZ2FpblwiXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoZWNrRW1haWwoKSB7XG4gICAgICAgICAgICAvLyBFeHByZXNpw7NuIHJlZ3VsYXIgcXVlIHZlcmlmaWNhIHVuYSBkaXJlY2Npw7NuIGRlIGNvcnJlbyBlbGVjdHLDs25pY28uXG4gICAgICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDR9JC87XG5cbiAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KHRoaXMuZW1haWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRFbWFpbEV4dGVuc2lvbnMgPSBbXCJleGFtcGxlLmNvbVwiLCBcInlvdXJkb21haW4uY29tXCIsIFwiZ21haWwuY29tXCIsIFwiaG90bWFpbC5jb21cIl07IC8vIEFncmVnYSBhcXXDrSBsYXMgZXh0ZW5zaW9uZXMgdsOhbGlkYXNcblxuICAgICAgICAgICAgICAgIC8vIE9idMOpbiBsYSBleHRlbnNpw7NuIGRlbCBjb3JyZW8gZWxlY3Ryw7NuaWNvXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxQYXJ0cyA9IHRoaXMuZW1haWwuc3BsaXQoXCJAXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsRXh0ZW5zaW9uID0gZW1haWxQYXJ0c1sxXTtcblxuICAgICAgICAgICAgICAgIC8vIFZlcmlmaWNhIHNpIGxhIGV4dGVuc2nDs24gZXN0w6EgZW4gbGEgbGlzdGEgZGUgZXh0ZW5zaW9uZXMgdsOhbGlkYXNcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSAhdmFsaWRFbWFpbEV4dGVuc2lvbnMuaW5jbHVkZXMoZW1haWxFeHRlbnNpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGVja1Bhc3N3b3JkKCkge1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW1xcV19dKS57OCx9JC87XG5cbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRFcnJvciA9ICFwYXNzd29yZFJlZ2V4LnRlc3QodGhpcy5wYXNzd29yZCk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGEgbGEgZnVlcnphIGRlIGxhIGNvbnRyYXNlw7FhIChwdWVkZXMgcGVyc29uYWxpemFyIGVzdGEgbMOzZ2ljYSlcbiAgICAgICAgICAgIGxldCBzdHJlbmd0aCA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZC5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1thLXpdLy50ZXN0KHRoaXMucGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1xcZC8udGVzdCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1xcV3xfLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsY3VsYSBlbCBwb3JjZW50YWplIGRlIGZvcnRhbGV6YVxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFN0cmVuZ3RoID0gKHN0cmVuZ3RoIC8gNCkgKiAxMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lzdGVyKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gVmFsaWRhciBxdWUgbGEgY29udHJhc2XDsWEgeSBsYSBjb25maXJtYWNpw7NuIGNvaW5jaWRhblxuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZWFsaXphciBlbCByZWdpc3RybyBhcXXDrVxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucGFzc3dvcmQtc3RyZW5ndGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgtbWV0ZXIge1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wYXNzd29yZC1zdHJlbmd0aC1iYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIHdpZHRoOiAwO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG59XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-86ab1514\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\",\n  style: {\n    \"color\": \"black\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"register-form-background\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitle\",\n  style: {\n    \"color\": \"#ff5733\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Register\")], -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"form-group\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"username\"\n}, \"Username:\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The username must be between 8 and 16 characters.\")], -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"form-group\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"email\"\n}, \"Email:\", -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Only the following domains are valid: example.com, yourdomain.com, gmail.com, hotmail.com\")], -1 /* HOISTED */));\nconst _hoisted_10 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_11 = {\n  class: \"form-group\"\n};\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password:\", -1 /* HOISTED */));\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one symbol.\")], -1 /* HOISTED */));\nconst _hoisted_14 = {\n  key: 0,\n  class: \"error\"\n};\nconst _hoisted_15 = {\n  class: \"form-group\"\n};\nconst _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"confirmPassword\"\n}, \"Confirm Password:\", -1 /* HOISTED */));\nconst _hoisted_17 = {\n  class: \"password-strength\"\n};\nconst _hoisted_18 = {\n  class: \"password-strength-meter\"\n};\nconst _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"/login\"\n}, \"Back to Login\")], -1 /* HOISTED */));\nconst _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"secondaryContainer\",\n  style: {\n    \"background-color\": \"white\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\",\n  class: \"submit-button\"\n}, \"Register\")], -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.register && $options.register(...args), [\"prevent\"])),\n    class: \"register-form\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    id: \"username\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.username = $event),\n    class: \"input\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"email\",\n    id: \"email\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.email = $event),\n    onInput: _cache[2] || (_cache[2] = (...args) => $options.checkEmail && $options.checkEmail(...args)),\n    class: \"input\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]]), _hoisted_9, $data.emailError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_10, \"This email extension is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    id: \"password\",\n    \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $data.password = $event),\n    onInput: _cache[4] || (_cache[4] = (...args) => $options.checkPassword && $options.checkPassword(...args)),\n    class: \"input\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]]), _hoisted_13, $data.passwordError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", _hoisted_14, \"This password is not valid\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    id: \"confirmPassword\",\n    \"onUpdate:modelValue\": _cache[5] || (_cache[5] = $event => $data.confirmPassword = $event),\n    class: \"input\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.confirmPassword]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Password Strength: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"password-strength-bar\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      width: $data.passwordStrength + '%'\n    })\n  }, null, 4 /* STYLE */)])]), _hoisted_19, _hoisted_20], 32 /* HYDRATE_EVENTS */)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NmFiMTUxNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7O0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7OztBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7O0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FBM0NBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvUmVnaXN0ZXJQYWdlLnZ1ZT8xYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPVwiY29sb3I6YmxhY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlZ2lzdGVyLWZvcm0tYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiIHN0eWxlPVwiY29sb3I6ICNmZjU3MzNcIj5cbiAgICAgICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiIGNsYXNzPVwicmVnaXN0ZXItZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiB2LW1vZGVsPVwidXNlcm5hbWVcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHVzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiA4IGFuZCAxNiBjaGFyYWN0ZXJzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiB2LW1vZGVsPVwiZW1haWxcIiBAaW5wdXQ9XCJjaGVja0VtYWlsXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9ubHkgdGhlIGZvbGxvd2luZyBkb21haW5zIGFyZSB2YWxpZDogZXhhbXBsZS5jb20sIHlvdXJkb21haW4uY29tLCBnbWFpbC5jb20sIGhvdG1haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImVtYWlsRXJyb3JcIiBjbGFzcz1cImVycm9yXCI+VGhpcyBlbWFpbCBleHRlbnNpb24gaXMgbm90IHZhbGlkPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInBhc3N3b3JkXCIgQGlucHV0PVwiY2hlY2tQYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZywgY29udGFpbiBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZSBsZXR0ZXIsIG9uZSBudW1iZXIsIGFuZCBvbmUgc3ltYm9sLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJwYXNzd29yZEVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlRoaXMgcGFzc3dvcmQgaXMgbm90IHZhbGlkPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtUGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImNvbmZpcm1QYXNzd29yZFwiIHYtbW9kZWw9XCJjb25maXJtUGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZCBTdHJlbmd0aDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcGFzc3dvcmRTdHJlbmd0aCArICclJyB9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+QmFjayB0byBMb2dpbjwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeUNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlJlZ2lzdGVyUGFnZVwiLFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgZW1haWxFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgcGFzc3dvcmRTdHJlbmd0aDogMCxcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlVXNlcm5hbWU6IFwiSW50cm9kdWNlIHlvdXIgdXNlcm5hbWVcIixcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlRW1haWw6IFwiSW50cm9kdWNlIHlvdXIgZW1haWxcIixcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlUGFzc3dvcmQ6IFwiSW50cm9kdWNlIHlvdXIgcGFzc3dvcmRcIixcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlUGFzc3dvcmRDaGVjazogXCJJbnRyb2R1Y2UgeW91IHBhc3N3b3JkIGFnYWluXCJcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hlY2tFbWFpbCgpIHtcbiAgICAgICAgICAgIC8vIEV4cHJlc2nDs24gcmVndWxhciBxdWUgdmVyaWZpY2EgdW5hIGRpcmVjY2nDs24gZGUgY29ycmVvIGVsZWN0csOzbmljby5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kLztcblxuICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5lbWFpbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEVtYWlsRXh0ZW5zaW9ucyA9IFtcImV4YW1wbGUuY29tXCIsIFwieW91cmRvbWFpbi5jb21cIiwgXCJnbWFpbC5jb21cIiwgXCJob3RtYWlsLmNvbVwiXTsgLy8gQWdyZWdhIGFxdcOtIGxhcyBleHRlbnNpb25lcyB2w6FsaWRhc1xuXG4gICAgICAgICAgICAgICAgLy8gT2J0w6luIGxhIGV4dGVuc2nDs24gZGVsIGNvcnJlbyBlbGVjdHLDs25pY29cbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbFBhcnRzID0gdGhpcy5lbWFpbC5zcGxpdChcIkBcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxFeHRlbnNpb24gPSBlbWFpbFBhcnRzWzFdO1xuXG4gICAgICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2kgbGEgZXh0ZW5zacOzbiBlc3TDoSBlbiBsYSBsaXN0YSBkZSBleHRlbnNpb25lcyB2w6FsaWRhc1xuICAgICAgICAgICAgICAgIHRoaXMuZW1haWxFcnJvciA9ICF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJlZ2V4ID0gL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbXFxXX10pLns4LH0kLztcblxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZEVycm9yID0gIXBhc3N3b3JkUmVnZXgudGVzdCh0aGlzLnBhc3N3b3JkKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYSBsYSBmdWVyemEgZGUgbGEgY29udHJhc2XDsWEgKHB1ZWRlcyBwZXJzb25hbGl6YXIgZXN0YSBsw7NnaWNhKVxuICAgICAgICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkLmxlbmd0aCA+PSA4KSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvW2Etel0vLnRlc3QodGhpcy5wYXNzd29yZCkgJiYgL1tBLVpdLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXFxkLy50ZXN0KHRoaXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXFxXfF8vLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhIGVsIHBvcmNlbnRhamUgZGUgZm9ydGFsZXphXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkU3RyZW5ndGggPSAoc3RyZW5ndGggLyA0KSAqIDEwMDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXIoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBWYWxpZGFyIHF1ZSBsYSBjb250cmFzZcOxYSB5IGxhIGNvbmZpcm1hY2nDs24gY29pbmNpZGFuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlYWxpemFyIGVsIHJlZ2lzdHJvIGFxdcOtXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5wYXNzd29yZC1zdHJlbmd0aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXNzd29yZC1zdHJlbmd0aC1tZXRlciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBhc3N3b3JkLXN0cmVuZ3RoLWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgd2lkdGg6IDA7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbn1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/RegisterPage.vue?vue&type=template&id=86ab1514&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "53549651ec9c544b"; }
/******/ }();
/******/ 
/******/ }
);