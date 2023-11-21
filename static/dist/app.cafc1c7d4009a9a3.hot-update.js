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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AppTextField.vue */ \"./src/components/AppTextField.vue\");\n/* harmony import */ var _components_AppTextFieldPassword_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AppTextFieldPassword.vue */ \"./src/components/AppTextFieldPassword.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"LoginPage\",\n  components: {\n    AppTextField: _components_AppTextField_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    AppTextFieldPassword: _components_AppTextFieldPassword_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data() {\n    return {\n      usernameOrEmail: \"\",\n      password: \"\",\n      username: \"\",\n      email: \"\",\n      defaultMessageUsernameOrEmail: \"Enter your username or email\",\n      defaultMessagePassword: \"Enter your password\",\n      logged: false\n    };\n  },\n  methods: {\n    async login() {\n      // Determine if the input is an email or username\n      let loginIdentifier = this.usernameOrEmail;\n      if (loginIdentifier.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/)) {\n        // If it matches the email format, set it as an email\n        this.email = loginIdentifier;\n      } else {\n        // Otherwise, set it as a username\n        this.username = loginIdentifier;\n      }\n      alert(\"Username \" + this.username);\n      alert(\"Email \" + this.email);\n      alert(\"Password \" + this.password + typeof this.password);\n      try {\n        let response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post('/login/', {\n          username: this.username,\n          email: this.email,\n          password: this.password\n        }, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        if (response.status === 200) {\n          // El inicio de sesión fue exitoso, redirigir al usuario o realizar otras acciones necesarias\n          alert(\"Logged!\");\n          this.logged = true;\n          localStorage.setItem('logged', this.logged);\n          localStorage.setItem('username', this.username);\n          this.$emit('login-success', this.logged);\n          this.$emit('username-success', this.username);\n          this.$emit('email-success', this.email);\n          this.$emit('password-success', this.password);\n          this.$router.push('/');\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle login failure (e.g., display an error message).\n          if (error.response.status === 400) {\n            alert(error.response.data.error);\n          } else if (error.response.status === 500) {\n            alert(\"An error occurred while registering.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other errors.\n          console.error(\"An error occurred while logging in.\");\n          alert(\"AAA\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Mb2dpblBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvTG9naW5QYWdlLnZ1ZT8zMDQwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGFpbmVyXCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT1cImNvbG9yOiAjZmY1NzMzXCI+TG9naW48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZU9yRW1haWxcIj5Vc2VybmFtZSBvciBFbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0TWVzc2FnZT1cImRlZmF1bHRNZXNzYWdlVXNlcm5hbWVPckVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwidXNlcm5hbWVPckVtYWlsID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFRleHRGaWVsZFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVmYXVsdE1lc3NhZ2U9XCJkZWZhdWx0TWVzc2FnZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGV4dFZhbHVlPVwicGFzc3dvcmQgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9yZWdpc3RlclwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gUmVnaXN0ZXIgaGVyZTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5Q29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljaz1cImxvZ2luXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9hcHBTdHlsZXMuY3NzJztcclxuaW1wb3J0IEFwcFRleHRGaWVsZCBmcm9tIFwiQC9jb21wb25lbnRzL0FwcFRleHRGaWVsZC52dWVcIjtcclxuaW1wb3J0IEFwcFRleHRGaWVsZFBhc3N3b3JkIGZyb20gXCJAL2NvbXBvbmVudHMvQXBwVGV4dEZpZWxkUGFzc3dvcmQudnVlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIkxvZ2luUGFnZVwiLFxyXG4gICAgY29tcG9uZW50czoge0FwcFRleHRGaWVsZCwgQXBwVGV4dEZpZWxkUGFzc3dvcmR9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VybmFtZU9yRW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlVXNlcm5hbWVPckVtYWlsOiBcIkVudGVyIHlvdXIgdXNlcm5hbWUgb3IgZW1haWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VQYXNzd29yZDogXCJFbnRlciB5b3VyIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIGxvZ2dlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgaW5wdXQgaXMgYW4gZW1haWwgb3IgdXNlcm5hbWVcclxuICAgICAgICAgICAgbGV0IGxvZ2luSWRlbnRpZmllciA9IHRoaXMudXNlcm5hbWVPckVtYWlsO1xyXG4gICAgICAgICAgICBpZiAobG9naW5JZGVudGlmaWVyLm1hdGNoKC9eW0EtWmEtejAtOS5fJS1dK0BbQS1aYS16MC05Li1dK1xcLltBLVphLXpdezIsNH0kLykpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IG1hdGNoZXMgdGhlIGVtYWlsIGZvcm1hdCwgc2V0IGl0IGFzIGFuIGVtYWlsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gbG9naW5JZGVudGlmaWVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZXQgaXQgYXMgYSB1c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGxvZ2luSWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydChcIlVzZXJuYW1lIFwiICsgdGhpcy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRW1haWwgXCIgKyB0aGlzLmVtYWlsKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZCBcIiArIHRoaXMucGFzc3dvcmQgKyB0eXBlb2YodGhpcy5wYXNzd29yZCkpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2xvZ2luLycsIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFbCBpbmljaW8gZGUgc2VzacOzbiBmdWUgZXhpdG9zbywgcmVkaXJpZ2lyIGFsIHVzdWFyaW8gbyByZWFsaXphciBvdHJhcyBhY2Npb25lcyBuZWNlc2FyaWFzXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJMb2dnZWQhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIHRoaXMubG9nZ2VkKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2dpbi1zdWNjZXNzJywgdGhpcy5sb2dnZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VzZXJuYW1lLXN1Y2Nlc3MnLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdlbWFpbC1zdWNjZXNzJywgdGhpcy5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncGFzc3dvcmQtc3VjY2VzcycsIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbG9naW4gZmFpbHVyZSAoZS5nLiwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQUFBXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4 ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"mainContainer\",\n  style: {\n    \"color\": \"black\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"form-background\"\n};\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"mainTitle\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", {\n  style: {\n    \"color\": \"#ff5733\"\n  }\n}, \"Login\")], -1 /* HOISTED */);\nconst _hoisted_4 = {\n  class: \"form\"\n};\nconst _hoisted_5 = {\n  class: \"form-group\"\n};\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"usernameOrEmail\"\n}, \"Username or Email:\", -1 /* HOISTED */);\nconst _hoisted_7 = {\n  class: \"form-group\"\n};\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"password\"\n}, \"Password:\", -1 /* HOISTED */);\nconst _hoisted_9 = {\n  class: \"secondaryContainer\",\n  style: {\n    \"background-color\": \"white\"\n  }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AppTextField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppTextField\");\n  const _component_AppTextFieldPassword = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AppTextFieldPassword\");\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextField, {\n    defaultMessage: $data.defaultMessageUsernameOrEmail,\n    \"onUpdate:textValue\": _cache[0] || (_cache[0] = $event => $data.usernameOrEmail = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppTextFieldPassword, {\n    defaultMessage: $data.defaultMessagePassword,\n    \"onUpdate:textValue\": _cache[1] || (_cache[1] = $event => $data.password = $event)\n  }, null, 8 /* PROPS */, [\"defaultMessage\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/register\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Don't have an account? Register here\")]),\n    _: 1 /* STABLE */\n  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    type: \"submit\",\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.login && $options.login(...args)),\n    class: \"submit-button\"\n  }, \"Login\")])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvTG9naW5QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNmQ4ZWJhNCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBdkJBO0FBU0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9Mb2dpblBhZ2UudnVlPzMwNDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW5Db250YWluZXJcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPVwiY29sb3I6ICNmZjU3MzNcIj5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lT3JFbWFpbFwiPlVzZXJuYW1lIG9yIEVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRlZmF1bHRNZXNzYWdlPVwiZGVmYXVsdE1lc3NhZ2VVc2VybmFtZU9yRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJ1c2VybmFtZU9yRW1haWwgPSAkZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dEZpZWxkUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0TWVzc2FnZT1cImRlZmF1bHRNZXNzYWdlUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0ZXh0VmFsdWU9XCJwYXNzd29yZCA9ICRldmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3JlZ2lzdGVyXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBSZWdpc3RlciBoZXJlPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlDb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrPVwibG9naW5cIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQXBwVGV4dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvQXBwVGV4dEZpZWxkLnZ1ZVwiO1xyXG5pbXBvcnQgQXBwVGV4dEZpZWxkUGFzc3dvcmQgZnJvbSBcIkAvY29tcG9uZW50cy9BcHBUZXh0RmllbGRQYXNzd29yZC52dWVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiTG9naW5QYWdlXCIsXHJcbiAgICBjb21wb25lbnRzOiB7QXBwVGV4dEZpZWxkLCBBcHBUZXh0RmllbGRQYXNzd29yZH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lT3JFbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VVc2VybmFtZU9yRW1haWw6IFwiRW50ZXIgeW91ciB1c2VybmFtZSBvciBlbWFpbFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVBhc3N3b3JkOiBcIkVudGVyIHlvdXIgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgbG9nZ2VkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpbnB1dCBpcyBhbiBlbWFpbCBvciB1c2VybmFtZVxyXG4gICAgICAgICAgICBsZXQgbG9naW5JZGVudGlmaWVyID0gdGhpcy51c2VybmFtZU9yRW1haWw7XHJcbiAgICAgICAgICAgIGlmIChsb2dpbklkZW50aWZpZXIubWF0Y2goL15bQS1aYS16MC05Ll8lLV0rQFtBLVphLXowLTkuLV0rXFwuW0EtWmEtel17Miw0fSQvKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgbWF0Y2hlcyB0aGUgZW1haWwgZm9ybWF0LCBzZXQgaXQgYXMgYW4gZW1haWxcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWwgPSBsb2dpbklkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHNldCBpdCBhcyBhIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gbG9naW5JZGVudGlmaWVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgXCIgKyB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJFbWFpbCBcIiArIHRoaXMuZW1haWwpO1xyXG4gICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkIFwiICsgdGhpcy5wYXNzd29yZCArIHR5cGVvZih0aGlzLnBhc3N3b3JkKSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4vJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsIGluaWNpbyBkZSBzZXNpw7NuIGZ1ZSBleGl0b3NvLCByZWRpcmlnaXIgYWwgdXN1YXJpbyBvIHJlYWxpemFyIG90cmFzIGFjY2lvbmVzIG5lY2VzYXJpYXNcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkxvZ2dlZCFcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkJywgdGhpcy5sb2dnZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHRoaXMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xvZ2luLXN1Y2Nlc3MnLCB0aGlzLmxvZ2dlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXNlcm5hbWUtc3VjY2VzcycsIHRoaXMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2VtYWlsLXN1Y2Nlc3MnLCB0aGlzLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwYXNzd29yZC1zdWNjZXNzJywgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlIChlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVnaXN0ZXJpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmV4cGVjdGVkIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIGVycm9ycy5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9nZ2luZyBpbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBQUFcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "fbf0c59e8e8d5a5d"; }
/******/ }();
/******/ 
/******/ }
);