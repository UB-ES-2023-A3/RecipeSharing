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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/appStyles.css */ \"./src/assets/styles/appStyles.css\");\n/* harmony import */ var _assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_appStyles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"LoginPage\",\n  data() {\n    return {\n      // Data properties for username, email, password, and more\n      usernameOrEmail: \"\",\n      password: \"\",\n      username: \"\",\n      email: \"\",\n      defaultMessageUsernameOrEmail: \"Enter your username or email\",\n      defaultMessagePassword: \"Enter your password\",\n      logged: false // A flag to indicate if the user is logged in\n    };\n  },\n\n  methods: {\n    async login() {\n      // Determine if the input is an email or username\n      if (this.usernameOrEmail === 0 || this.password.length === 0) {\n        alert(\"Complete the form\");\n        return;\n      }\n      let loginIdentifier = this.usernameOrEmail;\n      if (loginIdentifier.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/)) {\n        // If it matches the email format, set it as an email\n        this.email = loginIdentifier;\n      } else {\n        // Otherwise, set it as a username\n        this.username = loginIdentifier;\n      }\n      try {\n        let response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/login/', {\n          username: this.username,\n          email: this.email,\n          password: this.password\n        }, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        if (response.status === 200) {\n          // Successful login, perform necessary actions\n          alert(\"Logged!\"); // Display a success message\n          this.logged = true; // Set the logged flag to true\n          localStorage.setItem('logged', this.logged); // Store the logged status in local storage\n          localStorage.setItem('username', this.username);\n          this.$emit('login-success', this.logged); // Emit a custom event indicating login success\n          this.$emit('username-success', this.username);\n          this.$emit('email-success', this.email);\n          this.$emit('password-success', this.password);\n          this.$router.push('/'); // Redirect to the home page\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle login failure (e.g., display an error message).\n          if (error.response.status === 400) {\n            alert(error.response.data.error);\n          } else if (error.response.status === 500) {\n            alert(\"An error occurred while registering.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other errors.\n          console.error(\"An error occurred while logging in.\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Mb2dpblBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFvREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL0xvZ2luUGFnZS52dWU/MzA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXIgc2lnbi11cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkNyZWF0ZSBBY2NvdW50PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbFwiPjxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzb2NpYWxcIj48aSBjbGFzcz1cImZhYiBmYS1nb29nbGUtcGx1cy1nXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwic29jaWFsXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5vciB1c2UgeW91ciBlbWFpbCBmb3IgcmVnaXN0cmF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIHNpZ24taW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5TaWduIGluPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbFwiPjxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzb2NpYWxcIj48aSBjbGFzcz1cImZhYiBmYS1nb29nbGUtcGx1cy1nXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwic29jaWFsXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5vciB1c2UgeW91ciBhY2NvdW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Rm9yZ290IHlvdXIgcGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5TaWduIEluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LXBhbmVsIG92ZXJsYXktbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5XZWxjb21lIEJhY2shPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5UbyBrZWVwIGNvbm5lY3RlZCB3aXRoIHVzIHBsZWFzZSBsb2dpbiB3aXRoIHlvdXIgcGVyc29uYWwgaW5mbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZ2hvc3RcIiBpZD1cInNpZ25JblwiPlNpZ24gSW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGFuZWwgb3ZlcmxheS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbywgRnJpZW5kITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RW50ZXIgeW91ciBwZXJzb25hbCBkZXRhaWxzIGFuZCBzdGFydCBqb3VybmV5IHdpdGggdXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdob3N0XCIgaWQ9XCJzaWduVXBcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJMb2dpblBhZ2VcIixcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vIERhdGEgcHJvcGVydGllcyBmb3IgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYW5kIG1vcmVcclxuICAgICAgICAgICAgdXNlcm5hbWVPckVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZVVzZXJuYW1lT3JFbWFpbDogXCJFbnRlciB5b3VyIHVzZXJuYW1lIG9yIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlUGFzc3dvcmQ6IFwiRW50ZXIgeW91ciBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBsb2dnZWQ6IGZhbHNlLCAvLyBBIGZsYWcgdG8gaW5kaWNhdGUgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgaW5wdXQgaXMgYW4gZW1haWwgb3IgdXNlcm5hbWVcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcm5hbWVPckVtYWlsID09PSAwIHx8IHRoaXMucGFzc3dvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkNvbXBsZXRlIHRoZSBmb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsb2dpbklkZW50aWZpZXIgPSB0aGlzLnVzZXJuYW1lT3JFbWFpbDtcclxuICAgICAgICAgICAgaWYgKGxvZ2luSWRlbnRpZmllci5tYXRjaCgvXltBLVphLXowLTkuXyUtXStAW0EtWmEtejAtOS4tXStcXC5bQS1aYS16XXsyLDR9JC8pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCBtYXRjaGVzIHRoZSBlbWFpbCBmb3JtYXQsIHNldCBpdCBhcyBhbiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbCA9IGxvZ2luSWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgc2V0IGl0IGFzIGEgdXNlcm5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBsb2dpbklkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4vJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgbG9naW4sIHBlcmZvcm0gbmVjZXNzYXJ5IGFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkxvZ2dlZCFcIikgLy8gRGlzcGxheSBhIHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkID0gdHJ1ZTsgLy8gU2V0IHRoZSBsb2dnZWQgZmxhZyB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIHRoaXMubG9nZ2VkKTsgLy8gU3RvcmUgdGhlIGxvZ2dlZCBzdGF0dXMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHRoaXMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xvZ2luLXN1Y2Nlc3MnLCB0aGlzLmxvZ2dlZCk7IC8vIEVtaXQgYSBjdXN0b20gZXZlbnQgaW5kaWNhdGluZyBsb2dpbiBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXNlcm5hbWUtc3VjY2VzcycsIHRoaXMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2VtYWlsLXN1Y2Nlc3MnLCB0aGlzLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwYXNzd29yZC1zdWNjZXNzJywgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGxvZ2luIGZhaWx1cmUgKGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSkuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZWdpc3RlcmluZy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIHN0YXR1cyBjb2Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlVuZXhwZWN0ZWQgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgZXJyb3JzLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn07XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4jbG9naW5NYWluQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNsb2dpbkNlbnRlcmVkQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIG1pbi13aWR0aDogMzgwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YTNkO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcblxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI2xvZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDUwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmIzNzg7XHJcblxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiNsb2dpblJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDUwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubG9naW5UaXRsZSB7XHJcbiAgICBmb250LXNpemU6IDUwMCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZjg1MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYmYwMDtcclxuXHJcbn1cclxuXHJcbi5sb2dpblJpZ2h0Rm9ybSB7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxvZ2luUmlnaHRGb3JtIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2U3ZDZjNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG5cclxuLmxvZ2luUmlnaHRGb3JtIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiNsb2dpbiBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICBjb2xvcjogI2U3ZDZjNjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jbG9naW4gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjhjMDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzc1cHgpIHtcclxuICAgICNsb2dpbk1haW5Db250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHJcbiAgICAgICAgbWluLXdpZHRoOiAzODBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjY3Njk7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgI2xvZ2luIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAjbG9naW5SaWdodCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-16d8eba4\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"container\",\n  id: \"container\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"form-container sign-up-container\\\" data-v-16d8eba4><form action=\\\"#\\\" data-v-16d8eba4><h1 data-v-16d8eba4>Create Account</h1><div class=\\\"social-container\\\" data-v-16d8eba4><a href=\\\"#\\\" class=\\\"social\\\" data-v-16d8eba4><i class=\\\"fab fa-facebook-f\\\" data-v-16d8eba4></i></a><a href=\\\"#\\\" class=\\\"social\\\" data-v-16d8eba4><i class=\\\"fab fa-google-plus-g\\\" data-v-16d8eba4></i></a><a href=\\\"#\\\" class=\\\"social\\\" data-v-16d8eba4><i class=\\\"fab fa-linkedin-in\\\" data-v-16d8eba4></i></a></div><span data-v-16d8eba4>or use your email for registration</span><input type=\\\"text\\\" placeholder=\\\"Name\\\" data-v-16d8eba4><input type=\\\"email\\\" placeholder=\\\"Email\\\" data-v-16d8eba4><input type=\\\"password\\\" placeholder=\\\"Password\\\" data-v-16d8eba4><button data-v-16d8eba4>Sign Up</button></form></div><div class=\\\"form-container sign-in-container\\\" data-v-16d8eba4><form action=\\\"#\\\" data-v-16d8eba4><h1 data-v-16d8eba4>Sign in</h1><div class=\\\"social-container\\\" data-v-16d8eba4><a href=\\\"#\\\" class=\\\"social\\\" data-v-16d8eba4><i class=\\\"fab fa-facebook-f\\\" data-v-16d8eba4></i></a><a href=\\\"#\\\" class=\\\"social\\\" data-v-16d8eba4><i class=\\\"fab fa-google-plus-g\\\" data-v-16d8eba4></i></a><a href=\\\"#\\\" class=\\\"social\\\" data-v-16d8eba4><i class=\\\"fab fa-linkedin-in\\\" data-v-16d8eba4></i></a></div><span data-v-16d8eba4>or use your account</span><input type=\\\"email\\\" placeholder=\\\"Email\\\" data-v-16d8eba4><input type=\\\"password\\\" placeholder=\\\"Password\\\" data-v-16d8eba4><a href=\\\"#\\\" data-v-16d8eba4>Forgot your password?</a><button data-v-16d8eba4>Sign In</button></form></div><div class=\\\"overlay-container\\\" data-v-16d8eba4><div class=\\\"overlay\\\" data-v-16d8eba4><div class=\\\"overlay-panel overlay-left\\\" data-v-16d8eba4><h1 data-v-16d8eba4>Welcome Back!</h1><p data-v-16d8eba4>To keep connected with us please login with your personal info</p><button class=\\\"ghost\\\" id=\\\"signIn\\\" data-v-16d8eba4>Sign In</button></div><div class=\\\"overlay-panel overlay-right\\\" data-v-16d8eba4><h1 data-v-16d8eba4>Hello, Friend!</h1><p data-v-16d8eba4>Enter your personal details and start journey with us</p><button class=\\\"ghost\\\" id=\\\"signUp\\\" data-v-16d8eba4>Sign Up</button></div></div></div>\", 3);\nconst _hoisted_5 = [_hoisted_2];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, _hoisted_5);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvTG9naW5QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNmQ4ZWJhNCZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7OztBQUNBOztBQURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvTG9naW5QYWdlLnZ1ZT8zMDQwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lciBzaWduLXVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+Q3JlYXRlIEFjY291bnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwic29jaWFsXCI+PGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbFwiPjxpIGNsYXNzPVwiZmFiIGZhLWdvb2dsZS1wbHVzLWdcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzb2NpYWxcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpbi1pblwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPm9yIHVzZSB5b3VyIGVtYWlsIGZvciByZWdpc3RyYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXIgc2lnbi1pbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlNpZ24gaW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwic29jaWFsXCI+PGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbFwiPjxpIGNsYXNzPVwiZmFiIGZhLWdvb2dsZS1wbHVzLWdcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzb2NpYWxcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpbi1pblwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPm9yIHVzZSB5b3VyIGFjY291bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlNpZ24gSW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGFuZWwgb3ZlcmxheS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgQmFjayE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlRvIGtlZXAgY29ubmVjdGVkIHdpdGggdXMgcGxlYXNlIGxvZ2luIHdpdGggeW91ciBwZXJzb25hbCBpbmZvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJnaG9zdFwiIGlkPVwic2lnbkluXCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1wYW5lbCBvdmVybGF5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkhlbGxvLCBGcmllbmQhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5FbnRlciB5b3VyIHBlcnNvbmFsIGRldGFpbHMgYW5kIHN0YXJ0IGpvdXJuZXkgd2l0aCB1czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZ2hvc3RcIiBpZD1cInNpZ25VcFwiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYXBwU3R5bGVzLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIkxvZ2luUGFnZVwiLFxyXG5cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gRGF0YSBwcm9wZXJ0aWVzIGZvciB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkLCBhbmQgbW9yZVxyXG4gICAgICAgICAgICB1c2VybmFtZU9yRW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlVXNlcm5hbWVPckVtYWlsOiBcIkVudGVyIHlvdXIgdXNlcm5hbWUgb3IgZW1haWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2VQYXNzd29yZDogXCJFbnRlciB5b3VyIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIGxvZ2dlZDogZmFsc2UsIC8vIEEgZmxhZyB0byBpbmRpY2F0ZSBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW5cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpbnB1dCBpcyBhbiBlbWFpbCBvciB1c2VybmFtZVxyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VybmFtZU9yRW1haWwgPT09IDAgfHwgdGhpcy5wYXNzd29yZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29tcGxldGUgdGhlIGZvcm1cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxvZ2luSWRlbnRpZmllciA9IHRoaXMudXNlcm5hbWVPckVtYWlsO1xyXG4gICAgICAgICAgICBpZiAobG9naW5JZGVudGlmaWVyLm1hdGNoKC9eW0EtWmEtejAtOS5fJS1dK0BbQS1aYS16MC05Li1dK1xcLltBLVphLXpdezIsNH0kLykpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IG1hdGNoZXMgdGhlIGVtYWlsIGZvcm1hdCwgc2V0IGl0IGFzIGFuIGVtYWlsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gbG9naW5JZGVudGlmaWVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZXQgaXQgYXMgYSB1c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGxvZ2luSWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbi8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bCBsb2dpbiwgcGVyZm9ybSBuZWNlc3NhcnkgYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9nZ2VkIVwiKSAvLyBEaXNwbGF5IGEgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWQgPSB0cnVlOyAvLyBTZXQgdGhlIGxvZ2dlZCBmbGFnIHRvIHRydWVcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkJywgdGhpcy5sb2dnZWQpOyAvLyBTdG9yZSB0aGUgbG9nZ2VkIHN0YXR1cyBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdGhpcy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9naW4tc3VjY2VzcycsIHRoaXMubG9nZ2VkKTsgLy8gRW1pdCBhIGN1c3RvbSBldmVudCBpbmRpY2F0aW5nIGxvZ2luIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1c2VybmFtZS1zdWNjZXNzJywgdGhpcy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZW1haWwtc3VjY2VzcycsIHRoaXMuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Bhc3N3b3JkLXN1Y2Nlc3MnLCB0aGlzLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbG9naW4gZmFpbHVyZSAoZS5nLiwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbiNsb2dpbk1haW5Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI2xvZ2luQ2VudGVyZWRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgbWluLXdpZHRoOiAzODBweDtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzlhM2Q7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jbG9naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggNTBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmYjM3ODtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG5cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI2xvZ2luUmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5sb2dpblRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNTAwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RmODUwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZiZjAwO1xyXG5cclxufVxyXG5cclxuLmxvZ2luUmlnaHRGb3JtIHtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubG9naW5SaWdodEZvcm0gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZTdkNmM2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4ubG9naW5SaWdodEZvcm0gYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuI2xvZ2luIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgIGNvbG9yOiAjZTdkNmM2O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNsb2dpbiBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGMwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NzVweCkge1xyXG4gICAgI2xvZ2luTWFpbkNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cclxuICAgICAgICBtaW4td2lkdGg6IDM4MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNjc2OTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG5cclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAjbG9naW4ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgICNsb2dpblJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginPage.vue?vue&type=template&id=16d8eba4&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "75fb3d5cc8e2598c"; }
/******/ }();
/******/ 
/******/ }
);