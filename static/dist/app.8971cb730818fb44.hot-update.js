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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      loginUsernameOrEmail: \"\",\n      loginUsername: \"\",\n      loginEmail: \"\",\n      loginPassword: \"\",\n      registerUsername: \"\",\n      registerEmail: \"\",\n      registerPassword: \"\",\n      registerPasswordConfirm: \"\",\n      registerPasswordStrength: 0,\n      strength: 0,\n      logged: false\n    };\n  },\n  methods: {\n    togglePanel(isSignUp) {\n      const container = document.getElementById('container');\n      if (isSignUp) {\n        container.classList.add('right-panel-active');\n      } else {\n        container.classList.remove('right-panel-active');\n      }\n    },\n    checkUsername() {\n      const usernameInput = document.getElementById('registerUsernameInput');\n      if (this.registerUsername.length !== 0) {\n        if (this.registerUsername.length < 8 || this.registerUsername.length > 16) {\n          usernameInput.style.border = '1px solid red';\n        } else {\n          usernameInput.style.border = '';\n        }\n      } else {\n        usernameInput.style.border = '';\n      }\n    },\n    checkEmail() {\n      // Check the validity of the entered email\n      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n      const emailInput = document.getElementById('registerEmailInput');\n      if (this.registerEmail.length != 0) {\n        if (!emailRegex.test(this.registerEmail)) {\n          emailInput.style.border = '1px solid red';\n        } else {\n          // Define valid email extensions\n          const validEmailExtensions = [\"example.com\", \"yourdomain.com\", \"gmail.com\", \"hotmail.com\"];\n          // Split the email to get the domain part\n          const emailParts = this.registerEmail.split(\"@\");\n          const emailExtension = emailParts[1];\n          // Check if the email extension is valid\n          if (!validEmailExtensions.includes(emailExtension)) {\n            emailInput.style.border = '1px solid red';\n          } else {\n            emailInput.style.border = '';\n          }\n        }\n      }\n    },\n    checkPassword() {\n      // Check the validity and strength of the entered password\n      const passwordRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$/;\n      const passwordInput = document.getElementById('registerPasswordInput');\n      if (this.registerPassword.length != 0) {\n        if (!passwordRegex.test(this.registerPassword)) {\n          passwordInput.style.border = '1px solid red';\n        } else {\n          passwordInput.style.border = '';\n        }\n\n        // Calculate password strength\n        let strength = 0;\n        if (this.registerPassword.length >= 8) {\n          strength++;\n        }\n        if (/[a-z]/.test(this.registerPassword) && /[A-Z]/.test(this.registerPassword)) {\n          strength++;\n        }\n        if (/\\d/.test(this.registerPassword)) {\n          strength++;\n        }\n        if (/\\W|_/.test(this.registerPassword)) {\n          strength++;\n        }\n        this.registerPasswordStrength = strength / 4 * 100;\n      } else {\n        passwordInput.style.border = '';\n      }\n    },\n    async login() {\n      // Determine if the input is an email or username\n      if (this.loginUsernameOrEmail === 0 || this.loginPassword.length === 0) {\n        alert(\"Complete the form\");\n        return;\n      }\n      let loginIdentifier = this.loginUsernameOrEmail;\n      if (loginIdentifier.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/)) {\n        // If it matches the email format, set it as an email\n        this.loginEmail = loginIdentifier;\n      } else {\n        // Otherwise, set it as a username\n        this.loginUsername = loginIdentifier;\n      }\n      try {\n        let response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/login/', {\n          username: this.loginUsername,\n          email: this.loginEmail,\n          password: this.loginPassword\n        }, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        if (response.status === 200) {\n          // Successful login, perform necessary actions\n          alert(\"Logged!\"); // Display a success message\n          this.logged = true; // Set the logged flag to true\n          localStorage.setItem('logged', this.logged); // Store the logged status in local storage\n          localStorage.setItem('username', this.loginUsername);\n          this.$emit('login-success', this.logged); // Emit a custom event indicating login success\n          this.$emit('username-success', this.loginUsername);\n          this.$emit('email-success', this.loginEmail);\n          this.$emit('password-success', this.loginPassword);\n          this.$router.push('/'); // Redirect to the home page\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle login failure (e.g., display an error message).\n          if (error.response.status === 400) {\n            alert(error.response.data.error);\n          } else if (error.response.status === 500) {\n            alert(\"An error occurred while registering.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other errors.\n          console.error(\"An error occurred while logging in.\");\n        }\n      }\n    },\n    async register() {\n      // Check if passwords match\n      if (this.registerUsername.length === 0 || this.registerEmail.length === 0 || this.registerPassword.length === 0 || this.registerPasswordConfirm.length === 0) {\n        alert(\"Complete the form\");\n        return;\n      }\n      if (this.registerPassword !== this.registerPasswordConfirm) {\n        alert(\"Passwords do not match\");\n        return;\n      }\n      try {\n        // Send a registration request to the server\n        let response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/register/', {\n          username: this.registerUsername,\n          email: this.registerEmail,\n          password: this.registerPassword\n        }, {\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n\n        // Check the HTTP status code in the response\n        if (response.status === 200) {\n          // Registration successful, you can handle success here\n          console.log(\"Registration successful\");\n          alert(\"Registration successful\");\n          this.$router.push('/');\n        }\n      } catch (error) {\n        if (error.response) {\n          // Handle network errors\n          if (error.response.status === 400) {\n            // Handle client-side validation errors\n            alert(error.response.data.error);\n          } else if (error.response.status === 500) {\n            // Handle server errors\n            alert(\"An error occurred while registering.\");\n          } else {\n            // Handle other status codes\n            alert(\"Unexpected error\");\n          }\n        } else {\n          // Handle other unexpected errors\n          alert(\"An error occurred while registering.\");\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Mb2dpblJlZ2lzdGVyUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUE2REE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvTG9naW5SZWdpc3RlclBhZ2UudnVlP2U2OTkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW5Mb2dpblJlZ2lzdGVyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lciBzaWduLXVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5DcmVhdGUgQWNjb3VudDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVnaXN0ZXJVc2VybmFtZUlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdi1tb2RlbD1cInRoaXMucmVnaXN0ZXJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInRoaXMuY2hlY2tVc2VybmFtZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgdXNlcm5hbWUgbXVzdCBiZSBiZXR3ZWVuIDggYW5kIDE2IGNoYXJhY3RlcnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlZ2lzdGVyRW1haWxJbnB1dFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB2LW1vZGVsPVwidGhpcy5yZWdpc3RlckVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidGhpcy5jaGVja0VtYWlsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9ubHkgdGhlIGZvbGxvd2luZyBkb21haW5zIGFyZSB2YWxpZDogZXhhbXBsZS5jb20sIHlvdXJkb21haW4uY29tLCBnbWFpbC5jb20sIGhvdG1haWwuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlZ2lzdGVyUGFzc3dvcmRJbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidGhpcy5yZWdpc3RlclBhc3N3b3JkXCIgQGlucHV0PVwidGhpcy5jaGVja1Bhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLCBjb250YWluIG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXIsIG9uZSBudW1iZXIsIGFuZCBvbmUgc3ltYm9sLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCBDb25maXJtYXRpb25cIiB2LW1vZGVsPVwidGhpcy5yZWdpc3RlclBhc3N3b3JkQ29uZmlybVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFzc3dvcmQgU3RyZW5ndGg6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtbWV0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXNzd29yZC1zdHJlbmd0aC1iYXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiByZWdpc3RlclBhc3N3b3JkU3RyZW5ndGggKyAnJScgfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRoaXMucmVnaXN0ZXJcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIHNpZ24taW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZSBvciBFbWFpbFwiIHYtbW9kZWw9XCJ0aGlzLmxvZ2luVXNlcm5hbWVPckVtYWlsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdi1tb2RlbD1cInRoaXMubG9naW5QYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRoaXMubG9naW5cIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LXBhbmVsIG92ZXJsYXktbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSBCYWNrITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBMb2dpbiBhbmQgZXhwbG9yZSE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJnaG9zdFwiIGlkPVwic2lnbkluXCIgQGNsaWNrPVwidG9nZ2xlUGFuZWwoZmFsc2UpXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiPjxwPsKrIFJldHVybiB0byBtYWluIHBhZ2U8L3A+PC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1wYW5lbCBvdmVybGF5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb24ndCBoYXZlIGFuIGFjY291bnQgeWV0PyBSZWdpc3RlciBhbmQgc3RhcnQgZXhwbG9yaW5nITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdob3N0XCIgaWQ9XCJzaWduVXBcIiBAY2xpY2s9XCJ0b2dnbGVQYW5lbCh0cnVlKVwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIj48cD7CqyBSZXR1cm4gdG8gbWFpbiBwYWdlPC9wPjwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9naW5Vc2VybmFtZU9yRW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvZ2luVXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvZ2luRW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvZ2luUGFzc3dvcmQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICByZWdpc3RlclVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICByZWdpc3RlckVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICByZWdpc3RlclBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICByZWdpc3RlclBhc3N3b3JkQ29uZmlybTogXCJcIixcclxuICAgICAgICAgICAgcmVnaXN0ZXJQYXNzd29yZFN0cmVuZ3RoOiAwLFxyXG4gICAgICAgICAgICBzdHJlbmd0aDogMCxcclxuXHJcbiAgICAgICAgICAgIGxvZ2dlZDogZmFsc2UsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlUGFuZWwoaXNTaWduVXApIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzU2lnblVwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHQtcGFuZWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtcGFuZWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrVXNlcm5hbWUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJVc2VybmFtZUlucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWdpc3RlclVzZXJuYW1lLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJVc2VybmFtZS5sZW5ndGggPCA4IHx8IHRoaXMucmVnaXN0ZXJVc2VybmFtZS5sZW5ndGggPiAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lSW5wdXQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUlucHV0LnN0eWxlLmJvcmRlciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWVJbnB1dC5zdHlsZS5ib3JkZXIgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tFbWFpbCgpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIHZhbGlkaXR5IG9mIHRoZSBlbnRlcmVkIGVtYWlsXHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kLztcclxuICAgICAgICAgICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RlckVtYWlsSW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyRW1haWwubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KHRoaXMucmVnaXN0ZXJFbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbElucHV0LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVmaW5lIHZhbGlkIGVtYWlsIGV4dGVuc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEVtYWlsRXh0ZW5zaW9ucyA9IFtcImV4YW1wbGUuY29tXCIsIFwieW91cmRvbWFpbi5jb21cIiwgXCJnbWFpbC5jb21cIiwgXCJob3RtYWlsLmNvbVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTcGxpdCB0aGUgZW1haWwgdG8gZ2V0IHRoZSBkb21haW4gcGFydFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsUGFydHMgPSB0aGlzLnJlZ2lzdGVyRW1haWwuc3BsaXQoXCJAXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsRXh0ZW5zaW9uID0gZW1haWxQYXJ0c1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgZW1haWwgZXh0ZW5zaW9uIGlzIHZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZEVtYWlsRXh0ZW5zaW9ucy5pbmNsdWRlcyhlbWFpbEV4dGVuc2lvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnB1dC5zdHlsZS5ib3JkZXIgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSB2YWxpZGl0eSBhbmQgc3RyZW5ndGggb2YgdGhlIGVudGVyZWQgcGFzc3dvcmRcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW1xcV19dKS57OCx9JC87XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJQYXNzd29yZElucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWdpc3RlclBhc3N3b3JkLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhc3N3b3JkUmVnZXgudGVzdCh0aGlzLnJlZ2lzdGVyUGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQuc3R5bGUuYm9yZGVyID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBhc3N3b3JkIHN0cmVuZ3RoXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJQYXNzd29yZC5sZW5ndGggPj0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoL1thLXpdLy50ZXN0KHRoaXMucmVnaXN0ZXJQYXNzd29yZCkgJiYgL1tBLVpdLy50ZXN0KHRoaXMucmVnaXN0ZXJQYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKC9cXGQvLnRlc3QodGhpcy5yZWdpc3RlclBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoL1xcV3xfLy50ZXN0KHRoaXMucmVnaXN0ZXJQYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclBhc3N3b3JkU3RyZW5ndGggPSAoc3RyZW5ndGggLyA0KSAqIDEwMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQuc3R5bGUuYm9yZGVyID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGlucHV0IGlzIGFuIGVtYWlsIG9yIHVzZXJuYW1lXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luVXNlcm5hbWVPckVtYWlsID09PSAwIHx8IHRoaXMubG9naW5QYXNzd29yZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29tcGxldGUgdGhlIGZvcm1cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxvZ2luSWRlbnRpZmllciA9IHRoaXMubG9naW5Vc2VybmFtZU9yRW1haWw7XHJcbiAgICAgICAgICAgIGlmIChsb2dpbklkZW50aWZpZXIubWF0Y2goL15bQS1aYS16MC05Ll8lLV0rQFtBLVphLXowLTkuLV0rXFwuW0EtWmEtel17Miw0fSQvKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgbWF0Y2hlcyB0aGUgZW1haWwgZm9ybWF0LCBzZXQgaXQgYXMgYW4gZW1haWxcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5FbWFpbCA9IGxvZ2luSWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgc2V0IGl0IGFzIGEgdXNlcm5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5Vc2VybmFtZSA9IGxvZ2luSWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbi8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMubG9naW5Vc2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5sb2dpbkVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmxvZ2luUGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bCBsb2dpbiwgcGVyZm9ybSBuZWNlc3NhcnkgYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9nZ2VkIVwiKSAvLyBEaXNwbGF5IGEgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWQgPSB0cnVlOyAvLyBTZXQgdGhlIGxvZ2dlZCBmbGFnIHRvIHRydWVcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkJywgdGhpcy5sb2dnZWQpOyAvLyBTdG9yZSB0aGUgbG9nZ2VkIHN0YXR1cyBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdGhpcy5sb2dpblVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2dpbi1zdWNjZXNzJywgdGhpcy5sb2dnZWQpOyAvLyBFbWl0IGEgY3VzdG9tIGV2ZW50IGluZGljYXRpbmcgbG9naW4gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VzZXJuYW1lLXN1Y2Nlc3MnLCB0aGlzLmxvZ2luVXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2VtYWlsLXN1Y2Nlc3MnLCB0aGlzLmxvZ2luRW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Bhc3N3b3JkLXN1Y2Nlc3MnLCB0aGlzLmxvZ2luUGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlIChlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVnaXN0ZXJpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmV4cGVjdGVkIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIGVycm9ycy5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9nZ2luZyBpbi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBwYXNzd29yZHMgbWF0Y2hcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJVc2VybmFtZS5sZW5ndGggPT09IDAgfHwgdGhpcy5yZWdpc3RlckVtYWlsLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclBhc3N3b3JkLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnJlZ2lzdGVyUGFzc3dvcmRDb25maXJtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJDb21wbGV0ZSB0aGUgZm9ybVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWdpc3RlclBhc3N3b3JkICE9PSB0aGlzLnJlZ2lzdGVyUGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIFNlbmQgYSByZWdpc3RyYXRpb24gcmVxdWVzdCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVnaXN0ZXIvJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnJlZ2lzdGVyVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMucmVnaXN0ZXJFbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5yZWdpc3RlclBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGluIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gaGFuZGxlIHN1Y2Nlc3MgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG5ldHdvcmsgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBjbGllbnQtc2lkZSB2YWxpZGF0aW9uIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzZXJ2ZXIgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVnaXN0ZXJpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmV4cGVjdGVkIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIHVuZXhwZWN0ZWQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZWdpc3RlcmluZy5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY1Zjc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAtMnZoIDAgNXZoO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiAxLjV2aCAwO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNEIyQjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjRCMkI7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMS4ydmggNC41dmg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5naG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwIDV2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMnZoIDEuNXZoO1xyXG4gICAgbWFyZ2luOiAwLjh2aCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluTG9naW5SZWdpc3RlckNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9sb2dpblJlZ2lzdGVyQkcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSxcclxuICAgIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA4MHZoO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNzB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZ24taW4tY29udGFpbmVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24taW4tY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuLnNpZ24tdXAtY29udGFpbmVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGFuaW1hdGlvbjogc2hvdyAwLjZzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3cge1xyXG4gICAgMCUsIDQ5Ljk5JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSwgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRjQxNkM7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbi5vdmVybGF5LXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1sZWZ0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktbGVmdCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5vdmVybGF5LXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yaWdodCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxufVxyXG5cclxuLm5vdGUge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ucGFzc3dvcmQtc3RyZW5ndGggcCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtc3RyZW5ndGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMC44dmggMDtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoLWJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG59XHJcblxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=template&id=579e4332&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=template&id=579e4332&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-579e4332\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainLoginRegisterContainer\"\n};\nconst _hoisted_2 = {\n  class: \"container\",\n  id: \"container\"\n};\nconst _hoisted_3 = {\n  class: \"form-container sign-up-container\"\n};\nconst _hoisted_4 = {\n  action: \"#\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Create Account\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The username must be between 8 and 16 characters.\")], -1 /* HOISTED */));\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Only the following domains are valid: example.com, yourdomain.com, gmail.com, hotmail.com\")], -1 /* HOISTED */));\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"note\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"The password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one symbol.\")], -1 /* HOISTED */));\nconst _hoisted_9 = {\n  class: \"password-strength\"\n};\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Password Strength:\", -1 /* HOISTED */));\nconst _hoisted_11 = {\n  class: \"password-strength-meter\"\n};\nconst _hoisted_12 = {\n  class: \"form-container sign-in-container\"\n};\nconst _hoisted_13 = {\n  action: \"#\"\n};\nconst _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Login\", -1 /* HOISTED */));\nconst _hoisted_15 = {\n  class: \"overlay-container\"\n};\nconst _hoisted_16 = {\n  class: \"overlay\"\n};\nconst _hoisted_17 = {\n  class: \"overlay-panel overlay-left\"\n};\nconst _hoisted_18 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Welcome Back!\", -1 /* HOISTED */));\nconst _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Already have an account? Login and explore!\", -1 /* HOISTED */));\nconst _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"« Return to main page\", -1 /* HOISTED */));\nconst _hoisted_21 = {\n  class: \"overlay-panel overlay-right\"\n};\nconst _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Hello!\", -1 /* HOISTED */));\nconst _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Don't have an account yet? Register and start exploring!\", -1 /* HOISTED */));\nconst _hoisted_24 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"« Return to main page\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    id: \"registerUsernameInput\",\n    type: \"text\",\n    placeholder: \"Username\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => this.registerUsername = $event),\n    onInput: _cache[1] || (_cache[1] = (...args) => this.checkUsername && this.checkUsername(...args))\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.registerUsername]]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    id: \"registerEmailInput\",\n    type: \"email\",\n    placeholder: \"Email\",\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => this.registerEmail = $event),\n    onInput: _cache[3] || (_cache[3] = (...args) => this.checkEmail && this.checkEmail(...args))\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.registerEmail]]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    id: \"registerPasswordInput\",\n    type: \"password\",\n    placeholder: \"Password\",\n    \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => this.registerPassword = $event),\n    onInput: _cache[5] || (_cache[5] = (...args) => this.checkPassword && this.checkPassword(...args))\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.registerPassword]]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    placeholder: \"Password Confirmation\",\n    \"onUpdate:modelValue\": _cache[6] || (_cache[6] = $event => this.registerPasswordConfirm = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.registerPasswordConfirm]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"password-strength-bar\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n      width: $data.registerPasswordStrength + '%'\n    })\n  }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[7] || (_cache[7] = (...args) => this.register && this.register(...args))\n  }, \"Register\")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"email\",\n    placeholder: \"Username or Email\",\n    \"onUpdate:modelValue\": _cache[8] || (_cache[8] = $event => this.loginUsernameOrEmail = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.loginUsernameOrEmail]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"password\",\n    placeholder: \"Password\",\n    \"onUpdate:modelValue\": _cache[9] || (_cache[9] = $event => this.loginPassword = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.loginPassword]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[10] || (_cache[10] = (...args) => this.login && this.login(...args))\n  }, \"Login\")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [_hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    class: \"ghost\",\n    id: \"signIn\",\n    onClick: _cache[11] || (_cache[11] = $event => $options.togglePanel(false))\n  }, \"Login\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_20]),\n    _: 1 /* STABLE */\n  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_21, [_hoisted_22, _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    class: \"ghost\",\n    id: \"signUp\",\n    onClick: _cache[12] || (_cache[12] = $event => $options.togglePanel(true))\n  }, \"Register\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_24]),\n    _: 1 /* STABLE */\n  })])])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvTG9naW5SZWdpc3RlclBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3OWU0MzMyJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOzs7QUFDQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTs7QUFLQTtBQUFBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFPQTtBQUFBOztBQUNBO0FBQUE7QUFDQTs7QUFNQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBbkRBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL0xvZ2luUmVnaXN0ZXJQYWdlLnZ1ZT9lNjk5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluTG9naW5SZWdpc3RlckNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXIgc2lnbi11cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+Q3JlYXRlIEFjY291bnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlZ2lzdGVyVXNlcm5hbWVJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHYtbW9kZWw9XCJ0aGlzLnJlZ2lzdGVyVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ0aGlzLmNoZWNrVXNlcm5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHVzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiA4IGFuZCAxNiBjaGFyYWN0ZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZWdpc3RlckVtYWlsSW5wdXRcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdi1tb2RlbD1cInRoaXMucmVnaXN0ZXJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInRoaXMuY2hlY2tFbWFpbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Pbmx5IHRoZSBmb2xsb3dpbmcgZG9tYWlucyBhcmUgdmFsaWQ6IGV4YW1wbGUuY29tLCB5b3VyZG9tYWluLmNvbSwgZ21haWwuY29tLCBob3RtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZWdpc3RlclBhc3N3b3JkSW5wdXRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRoaXMucmVnaXN0ZXJQYXNzd29yZFwiIEBpbnB1dD1cInRoaXMuY2hlY2tQYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZywgY29udGFpbiBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHN5bWJvbC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgQ29uZmlybWF0aW9uXCIgdi1tb2RlbD1cInRoaXMucmVnaXN0ZXJQYXNzd29yZENvbmZpcm1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBhc3N3b3JkIFN0cmVuZ3RoOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFzc3dvcmQtc3RyZW5ndGgtYmFyXCIgOnN0eWxlPVwieyB3aWR0aDogcmVnaXN0ZXJQYXNzd29yZFN0cmVuZ3RoICsgJyUnIH1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0aGlzLnJlZ2lzdGVyXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lciBzaWduLWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb3IgRW1haWxcIiB2LW1vZGVsPVwidGhpcy5sb2dpblVzZXJuYW1lT3JFbWFpbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHYtbW9kZWw9XCJ0aGlzLmxvZ2luUGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0aGlzLmxvZ2luXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1wYW5lbCBvdmVybGF5LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgQmFjayE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gTG9naW4gYW5kIGV4cGxvcmUhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZ2hvc3RcIiBpZD1cInNpZ25JblwiIEBjbGljaz1cInRvZ2dsZVBhbmVsKGZhbHNlKVwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIj48cD7CqyBSZXR1cm4gdG8gbWFpbiBwYWdlPC9wPjwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGFuZWwgb3ZlcmxheS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGVsbG8hPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD8gUmVnaXN0ZXIgYW5kIHN0YXJ0IGV4cGxvcmluZyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJnaG9zdFwiIGlkPVwic2lnblVwXCIgQGNsaWNrPVwidG9nZ2xlUGFuZWwodHJ1ZSlcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCI+PHA+wqsgUmV0dXJuIHRvIG1haW4gcGFnZTwvcD48L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvZ2luVXNlcm5hbWVPckVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBsb2dpblVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBsb2dpbkVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBsb2dpblBhc3N3b3JkOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgcmVnaXN0ZXJVc2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgcmVnaXN0ZXJFbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcmVnaXN0ZXJQYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgcmVnaXN0ZXJQYXNzd29yZENvbmZpcm06IFwiXCIsXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUGFzc3dvcmRTdHJlbmd0aDogMCxcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDAsXHJcblxyXG4gICAgICAgICAgICBsb2dnZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZVBhbmVsKGlzU2lnblVwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NpZ25VcCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXBhbmVsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LXBhbmVsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja1VzZXJuYW1lKCkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyVXNlcm5hbWVJbnB1dCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJVc2VybmFtZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyVXNlcm5hbWUubGVuZ3RoIDwgOCB8fCB0aGlzLnJlZ2lzdGVyVXNlcm5hbWUubGVuZ3RoID4gMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUlucHV0LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWVJbnB1dC5zdHlsZS5ib3JkZXIgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lSW5wdXQuc3R5bGUuYm9yZGVyID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrRW1haWwoKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSB2YWxpZGl0eSBvZiB0aGUgZW50ZXJlZCBlbWFpbFxyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDR9JC87XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJFbWFpbElucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWdpc3RlckVtYWlsLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLnJlZ2lzdGVyRW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxJbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERlZmluZSB2YWxpZCBlbWFpbCBleHRlbnNpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRFbWFpbEV4dGVuc2lvbnMgPSBbXCJleGFtcGxlLmNvbVwiLCBcInlvdXJkb21haW4uY29tXCIsIFwiZ21haWwuY29tXCIsIFwiaG90bWFpbC5jb21cIl07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3BsaXQgdGhlIGVtYWlsIHRvIGdldCB0aGUgZG9tYWluIHBhcnRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWFpbFBhcnRzID0gdGhpcy5yZWdpc3RlckVtYWlsLnNwbGl0KFwiQFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWFpbEV4dGVuc2lvbiA9IGVtYWlsUGFydHNbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGVtYWlsIGV4dGVuc2lvbiBpcyB2YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRFbWFpbEV4dGVuc2lvbnMuaW5jbHVkZXMoZW1haWxFeHRlbnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5wdXQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5wdXQuc3R5bGUuYm9yZGVyID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja1Bhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgdmFsaWRpdHkgYW5kIHN0cmVuZ3RoIG9mIHRoZSBlbnRlcmVkIHBhc3N3b3JkXHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkUmVnZXggPSAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKltcXFdfXSkuezgsfSQvO1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyUGFzc3dvcmRJbnB1dCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJQYXNzd29yZC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXNzd29yZFJlZ2V4LnRlc3QodGhpcy5yZWdpc3RlclBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0LnN0eWxlLmJvcmRlciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwYXNzd29yZCBzdHJlbmd0aFxyXG4gICAgICAgICAgICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyUGFzc3dvcmQubGVuZ3RoID49IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKC9bYS16XS8udGVzdCh0aGlzLnJlZ2lzdGVyUGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdCh0aGlzLnJlZ2lzdGVyUGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgvXFxkLy50ZXN0KHRoaXMucmVnaXN0ZXJQYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlbmd0aCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKC9cXFd8Xy8udGVzdCh0aGlzLnJlZ2lzdGVyUGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZW5ndGgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYXNzd29yZFN0cmVuZ3RoID0gKHN0cmVuZ3RoIC8gNCkgKiAxMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0LnN0eWxlLmJvcmRlciA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpbnB1dCBpcyBhbiBlbWFpbCBvciB1c2VybmFtZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dpblVzZXJuYW1lT3JFbWFpbCA9PT0gMCB8fCB0aGlzLmxvZ2luUGFzc3dvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkNvbXBsZXRlIHRoZSBmb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsb2dpbklkZW50aWZpZXIgPSB0aGlzLmxvZ2luVXNlcm5hbWVPckVtYWlsO1xyXG4gICAgICAgICAgICBpZiAobG9naW5JZGVudGlmaWVyLm1hdGNoKC9eW0EtWmEtejAtOS5fJS1dK0BbQS1aYS16MC05Li1dK1xcLltBLVphLXpdezIsNH0kLykpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IG1hdGNoZXMgdGhlIGVtYWlsIGZvcm1hdCwgc2V0IGl0IGFzIGFuIGVtYWlsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRW1haWwgPSBsb2dpbklkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHNldCBpdCBhcyBhIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luVXNlcm5hbWUgPSBsb2dpbklkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4vJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmxvZ2luVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMubG9naW5FbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5sb2dpblBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3NmdWwgbG9naW4sIHBlcmZvcm0gbmVjZXNzYXJ5IGFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkxvZ2dlZCFcIikgLy8gRGlzcGxheSBhIHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkID0gdHJ1ZTsgLy8gU2V0IHRoZSBsb2dnZWQgZmxhZyB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZCcsIHRoaXMubG9nZ2VkKTsgLy8gU3RvcmUgdGhlIGxvZ2dlZCBzdGF0dXMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHRoaXMubG9naW5Vc2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9naW4tc3VjY2VzcycsIHRoaXMubG9nZ2VkKTsgLy8gRW1pdCBhIGN1c3RvbSBldmVudCBpbmRpY2F0aW5nIGxvZ2luIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1c2VybmFtZS1zdWNjZXNzJywgdGhpcy5sb2dpblVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdlbWFpbC1zdWNjZXNzJywgdGhpcy5sb2dpbkVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwYXNzd29yZC1zdWNjZXNzJywgdGhpcy5sb2dpblBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbG9naW4gZmFpbHVyZSAoZS5nLiwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyByZWdpc3RlcigpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcGFzc3dvcmRzIG1hdGNoXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyVXNlcm5hbWUubGVuZ3RoID09PSAwIHx8IHRoaXMucmVnaXN0ZXJFbWFpbC5sZW5ndGggPT09IDAgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYXNzd29yZC5sZW5ndGggPT09IDAgfHwgdGhpcy5yZWdpc3RlclBhc3N3b3JkQ29uZmlybS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29tcGxldGUgdGhlIGZvcm1cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJQYXNzd29yZCAhPT0gdGhpcy5yZWdpc3RlclBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZW5kIGEgcmVnaXN0cmF0aW9uIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL3JlZ2lzdGVyLycsIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5yZWdpc3RlclVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnJlZ2lzdGVyRW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucmVnaXN0ZXJQYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGUgSFRUUCBzdGF0dXMgY29kZSBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLCB5b3UgY2FuIGhhbmRsZSBzdWNjZXNzIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBuZXR3b3JrIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgY2xpZW50LXNpZGUgdmFsaWRhdGlvbiBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgc2VydmVyIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlZ2lzdGVyaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgc3RhdHVzIGNvZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciB1bmV4cGVjdGVkIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVnaXN0ZXJpbmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNWY3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogLTJ2aCAwIDV2aDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogMS41dmggMDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjRCMkI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY0QjJCO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEuMnZoIDQuNXZoO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5idXR0b24uZ2hvc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMCA1dmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjJ2aCAxLjV2aDtcclxuICAgIG1hcmdpbjogMC44dmggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbkxvZ2luUmVnaXN0ZXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5SZWdpc3RlckJHLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksXHJcbiAgICAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogODB2aDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zaWduLWluLWNvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLWluLWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5zaWduLXVwLWNvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi11cC1jb250YWluZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBhbmltYXRpb246IHNob3cgMC42cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93IHtcclxuICAgIDAlLCA0OS45OSUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUsIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgIH1cclxufVxyXG5cclxuLm92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY0MTZDO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG59XHJcblxyXG4ub3ZlcmxheS1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXktbGVmdCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ub3ZlcmxheS1yaWdodCB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbn1cclxuXHJcbi5ub3RlIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoIHAge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnBhc3N3b3JkLXN0cmVuZ3RoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAuOHZoIDA7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1zdHJlbmd0aC1tZXRlciB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYXNzd29yZC1zdHJlbmd0aC1iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcclxufVxyXG5cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=template&id=579e4332&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=style&index=0&id=579e4332&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=style&index=0&id=579e4332&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/loginRegisterBG.jpg */ \"./src/assets/images/loginRegisterBG.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n*[data-v-579e4332] {\\r\\n    box-sizing: border-box;\\n}\\nbody[data-v-579e4332] {\\r\\n    background: #f6f5f7;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    height: 100vh;\\r\\n    margin: -2vh 0 5vh;\\n}\\nh1[data-v-579e4332] {\\r\\n    font-weight: bold;\\r\\n    margin: 0;\\n}\\nh2[data-v-579e4332] {\\r\\n    text-align: center;\\n}\\na[data-v-579e4332] {\\r\\n    color: #FFFFFF;\\r\\n    font-size: 14px;\\r\\n    text-decoration: none;\\r\\n    margin: 1.5vh 0;\\n}\\na[data-v-579e4332]:hover {\\r\\n    text-decoration: underline;\\r\\n    font-weight: bold;\\n}\\nbutton[data-v-579e4332] {\\r\\n    border-radius: 20px;\\r\\n    border: 1px solid #FF4B2B;\\r\\n    background-color: #FF4B2B;\\r\\n    color: #FFFFFF;\\r\\n    font-size: 12px;\\r\\n    font-weight: bold;\\r\\n    padding: 1.2vh 4.5vh;\\r\\n    letter-spacing: 1px;\\r\\n    text-transform: uppercase;\\r\\n    transition: transform 80ms ease-in;\\n}\\nbutton[data-v-579e4332]:active {\\r\\n    transform: scale(0.95);\\n}\\nbutton[data-v-579e4332]:focus {\\r\\n    outline: none;\\n}\\nbutton.ghost[data-v-579e4332] {\\r\\n    background-color: transparent;\\r\\n    border-color: #FFFFFF;\\n}\\nform[data-v-579e4332] {\\r\\n    background-color: #FFFFFF;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n    padding: 0 5vh;\\r\\n    height: 100%;\\r\\n    text-align: center;\\n}\\ninput[data-v-579e4332] {\\r\\n    background-color: #eee;\\r\\n    border: none;\\r\\n    padding: 1.2vh 1.5vh;\\r\\n    margin: 0.8vh 0;\\r\\n    width: 100%;\\n}\\n.mainLoginRegisterContainer[data-v-579e4332] {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-size: cover;\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: center;\\r\\n    filter: blur(5px);\\n}\\n.container[data-v-579e4332] {\\r\\n    background-color: #fff;\\r\\n    border-radius: 10px;\\r\\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\\r\\n    0 10px 10px rgba(0, 0, 0, 0.22);\\r\\n    position: fixed;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    overflow: hidden;\\r\\n    width: 80vh;\\r\\n    max-width: 100%;\\r\\n    min-height: 70vh;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\n}\\n.form-container[data-v-579e4332] {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    height: 100%;\\r\\n    transition: all 0.6s ease-in-out;\\n}\\n.sign-in-container[data-v-579e4332] {\\r\\n    left: 0;\\r\\n    width: 50%;\\r\\n    z-index: 2;\\n}\\n.container.right-panel-active .sign-in-container[data-v-579e4332] {\\r\\n    transform: translateX(100%);\\n}\\n.sign-up-container[data-v-579e4332] {\\r\\n    left: 0;\\r\\n    width: 50%;\\r\\n    opacity: 0;\\r\\n    z-index: 1;\\n}\\n.container.right-panel-active .sign-up-container[data-v-579e4332] {\\r\\n    transform: translateX(100%);\\r\\n    opacity: 1;\\r\\n    z-index: 5;\\r\\n    animation: show-579e4332 0.6s;\\n}\\n@keyframes show-579e4332 {\\n0%, 49.99% {\\r\\n        opacity: 0;\\r\\n        z-index: 1;\\n}\\n50%, 100% {\\r\\n        opacity: 1;\\r\\n        z-index: 5;\\n}\\n}\\n.overlay-container[data-v-579e4332] {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 50%;\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    overflow: hidden;\\r\\n    transition: transform 0.6s ease-in-out;\\r\\n    z-index: 100;\\n}\\n.container.right-panel-active .overlay-container[data-v-579e4332] {\\r\\n    transform: translateX(-100%);\\n}\\n.overlay[data-v-579e4332] {\\r\\n    background: #FF416C;\\r\\n    background: linear-gradient(to right, #FF4B2B, #FF416C);\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: cover;\\r\\n    background-position: 0 0;\\r\\n    color: #FFFFFF;\\r\\n    position: relative;\\r\\n    left: -100%;\\r\\n    height: 100%;\\r\\n    width: 200%;\\r\\n    transform: translateX(0);\\r\\n    transition: transform 0.6s ease-in-out;\\n}\\n.container.right-panel-active .overlay[data-v-579e4332] {\\r\\n    transform: translateX(50%);\\n}\\n.overlay-panel[data-v-579e4332] {\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n    padding: 0 40px;\\r\\n    text-align: center;\\r\\n    top: 0;\\r\\n    height: 100%;\\r\\n    width: 50%;\\r\\n    transform: translateX(0);\\r\\n    transition: transform 0.6s ease-in-out;\\n}\\n.overlay-left[data-v-579e4332] {\\r\\n    transform: translateX(-20%);\\n}\\n.container.right-panel-active .overlay-left[data-v-579e4332] {\\r\\n    transform: translateX(0);\\n}\\n.overlay-right[data-v-579e4332] {\\r\\n    right: 0;\\r\\n    transform: translateX(0);\\n}\\n.container.right-panel-active .overlay-right[data-v-579e4332] {\\r\\n    transform: translateX(20%);\\n}\\n.note[data-v-579e4332] {\\r\\n    color: gray;\\r\\n    font-size: 12px;\\r\\n    text-align: justify;\\n}\\n.password-strength p[data-v-579e4332] {\\r\\n    color: gray;\\r\\n    text-align: justify;\\r\\n    font-weight: normal;\\n}\\n.password-strength[data-v-579e4332] {\\r\\n    font-weight: bold;\\r\\n    width: 100%;\\r\\n    margin: 0.8vh 0;\\n}\\n.password-strength-meter[data-v-579e4332] {\\r\\n    height: 10px;\\r\\n    background-color: #ccc;\\r\\n    border-radius: 5px;\\r\\n    margin-top: 10px;\\r\\n    overflow: hidden;\\n}\\n.password-strength-bar[data-v-579e4332] {\\r\\n    height: 100%;\\r\\n    background-color: #4CAF50;\\r\\n    width: 0;\\r\\n    transition: width 0.3s;\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9Mb2dpblJlZ2lzdGVyUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NzllNDMzMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL0xvZ2luUmVnaXN0ZXJQYWdlLnZ1ZT85MDljIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvbm9Tb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvbG9naW5SZWdpc3RlckJHLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbipbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHlbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmNmY1Zjc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IC0ydmggMCA1dmg7XFxufVxcbmgxW2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5oMltkYXRhLXYtNTc5ZTQzMzJdIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5hW2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMS41dmggMDtcXG59XFxuYVtkYXRhLXYtNTc5ZTQzMzJdOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5idXR0b25bZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjRCMkI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjRCMkI7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nOiAxLjJ2aCA0LjV2aDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcXG59XFxuYnV0dG9uW2RhdGEtdi01NzllNDMzMl06YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuYnV0dG9uW2RhdGEtdi01NzllNDMzMl06Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5idXR0b24uZ2hvc3RbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XFxufVxcbmZvcm1bZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwIDV2aDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmlucHV0W2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEuMnZoIDEuNXZoO1xcclxcbiAgICBtYXJnaW46IDAuOHZoIDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWFpbkxvZ2luUmVnaXN0ZXJDb250YWluZXJbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcbi5jb250YWluZXJbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksXFxyXFxuICAgIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiA4MHZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybS1jb250YWluZXJbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lnbi1pbi1jb250YWluZXJbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxufVxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLWluLWNvbnRhaW5lcltkYXRhLXYtNTc5ZTQzMzJdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG4uc2lnbi11cC1jb250YWluZXJbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lcltkYXRhLXYtNTc5ZTQzMzJdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICBhbmltYXRpb246IHNob3ctNTc5ZTQzMzIgMC42cztcXG59XFxuQGtleWZyYW1lcyBzaG93LTU3OWU0MzMyIHtcXG4wJSwgNDkuOTklIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcbn1cXG41MCUsIDEwMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDU7XFxufVxcbn1cXG4ub3ZlcmxheS1jb250YWluZXJbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyW2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4ub3ZlcmxheVtkYXRhLXYtNTc5ZTQzMzJdIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGNDE2QztcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMjAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcXG59XFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXlbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbn1cXG4ub3ZlcmxheS1wYW5lbFtkYXRhLXYtNTc5ZTQzMzJdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcbn1cXG4ub3ZlcmxheS1sZWZ0W2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XFxufVxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnRbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLm92ZXJsYXktcmlnaHRbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LXJpZ2h0W2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcXG59XFxuLm5vdGVbZGF0YS12LTU3OWU0MzMyXSB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi5wYXNzd29yZC1zdHJlbmd0aCBwW2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnBhc3N3b3JkLXN0cmVuZ3RoW2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMC44dmggMDtcXG59XFxuLnBhc3N3b3JkLXN0cmVuZ3RoLW1ldGVyW2RhdGEtdi01NzllNDMzMl0ge1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnBhc3N3b3JkLXN0cmVuZ3RoLWJhcltkYXRhLXYtNTc5ZTQzMzJdIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/LoginRegisterPage.vue?vue&type=style&index=0&id=579e4332&scoped=true&lang=css\n");

/***/ }),

/***/ "./src/assets/images/loginRegisterBG.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/loginRegisterBG.jpg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loginRegisterBG.c0f2939e.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "dbaa14c3c0869742"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ !function() {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
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