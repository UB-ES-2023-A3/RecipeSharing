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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    username: String,\n    recipe_id: Number,\n    comments: Object\n  },\n  data() {\n    return {\n      newComment: '',\n      // Agrega la propiedad newComment al data\n      comments_updated: this.comments\n    };\n  },\n  methods: {\n    createDate() {\n      // Crear el objeto comment con la fecha actual y otros datos\n      const currentDate = new Date();\n      const day = currentDate.getDate().toString().padStart(2, '0');\n      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');\n      const year = currentDate.getFullYear().toString();\n      const hours = currentDate.getHours().toString().padStart(2, '0');\n      const minutes = currentDate.getMinutes().toString().padStart(2, '0');\n      const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;\n      return formattedDate;\n    },\n    addComment() {\n      if (this.checkComment()) {\n        alert(\"No comment written\");\n        return;\n      }\n      const comment = {\n        username: this.username,\n        review: this.newComment,\n        date: this.createDate()\n      };\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"postRatings/\", {\n        user_id: this.username,\n        recipe_id: this.recipe_id,\n        comment: comment,\n        review_type: \"comment\"\n      }).then(response => {\n        if (response.status === 200) {\n          console.log(\"Rating added\");\n          alert(\"Review added.\");\n          this.newComment = '';\n          this.comments_updated = response.data.comments_list;\n        }\n      }).catch(error => {\n        alert(error.response);\n      });\n    },\n    checkComment() {\n      return this.newComment == '';\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOztBQWdDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcENvbW1lbnRzLnZ1ZT9lYWQ0Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMTM5ZDQ7IHBhZGRpbmctYm90dG9tOiA1cHg7XCI+Q09NTUVOVFM8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1saXN0IHNjcm9sbGFibGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGNvbW1lbnQsIGluZGV4KSBpbiBjb21tZW50c191cGRhdGVkXCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJyZWNpcGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlVzZXJuYW1lOjwvc3Ryb25nPiB7eyBjb21tZW50LnVzZXJuYW1lIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RGF0ZTo8L3N0cm9uZz4ge3sgY29tbWVudC5kYXRlIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLXJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IGNvbW1lbnQucmV2aWV3IH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtY29tbWVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dGZpZWxkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJjb21tZW50SW5wdXRcIj5BZGQgY29tbWVudDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJuZXdDb21tZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21tZW50SW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgY29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFkZENvbW1lbnRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5BZGQgY29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIHJlY2lwZV9pZDogTnVtYmVyLFxyXG4gICAgICAgIGNvbW1lbnRzOiBPYmplY3QsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXdDb21tZW50OiAnJywgLy8gQWdyZWdhIGxhIHByb3BpZWRhZCBuZXdDb21tZW50IGFsIGRhdGFcclxuICAgICAgICAgICAgY29tbWVudHNfdXBkYXRlZDogdGhpcy5jb21tZW50c1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNyZWF0ZURhdGUoKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWFyIGVsIG9iamV0byBjb21tZW50IGNvbiBsYSBmZWNoYSBhY3R1YWwgeSBvdHJvcyBkYXRvc1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gY3VycmVudERhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRDb21tZW50KCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb21tZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTm8gY29tbWVudCB3cml0dGVuXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICByZXZpZXc6IHRoaXMubmV3Q29tbWVudCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMuY3JlYXRlRGF0ZSgpLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5wb3N0KFwicG9zdFJhdGluZ3MvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2lwZV9pZDogdGhpcy5yZWNpcGVfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogY29tbWVudCxcclxuICAgICAgICAgICAgICAgICAgICByZXZpZXdfdHlwZTogXCJjb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmF0aW5nIGFkZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlJldmlldyBhZGRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3Q29tbWVudCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHNfdXBkYXRlZCA9IHJlc3BvbnNlLmRhdGEuY29tbWVudHNfbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja0NvbW1lbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld0NvbW1lbnQgPT0gJyc7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjMzE0Y2Q0O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhhY2UgcXVlIGxhIGV0aXF1ZXRhIHNlYSB1biBibG9xdWUsIGxvIHF1ZSBwZXJtaXRlIGNlbnRyYXIgZWwgdGV4dG8gKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzE3ZGQ0O1xyXG59XHJcblxyXG4uY29tbWVudHMtbGlzdCB7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNjcm9sbGFibGUtY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMxOWJkNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYWRkLWNvbW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0ZmllbGQtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGV4dGFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMWEzZDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgbWluLWhlaWdodDogNTBweDsgLyogTWVkaWRhIGluaWNpYWwgZGVsIGN1YWRybyBkZSBjb21lbnRhcmlvcyAqL1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU4MTlhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjMDA7XHJcbn1cclxuXHJcbi5yZWNpcGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzFjZmQ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucmVjaXBlLWluZm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlY2lwZS1yZXZpZXcge1xyXG4gICAgLyogRXN0aWxvcyBhZGljaW9uYWxlcyBwYXJhIGxhIHNlY2Npw7NuIGRlIHJldmlzacOzbiAqL1xyXG4gICAgY29sb3I6ICMzMzM7IC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gc2Vnw7puIHR1cyBwcmVmZXJlbmNpYXMgKi9cclxufVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=template&id=6300a6b5&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=template&id=6300a6b5&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-6300a6b5\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"comment-container\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"title-container\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", {\n  style: {\n    \"border-bottom\": \"2px solid #3139d4\",\n    \"padding-bottom\": \"5px\"\n  }\n}, \"COMMENTS\")], -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"comments-list scrollable-content\"\n};\nconst _hoisted_4 = {\n  class: \"recipe-info\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Username:\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Date:\", -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"recipe-review\"\n};\nconst _hoisted_8 = {\n  class: \"add-comment\"\n};\nconst _hoisted_9 = {\n  class: \"textfield-container\"\n};\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  class: \"label\",\n  for: \"commentInput\"\n}, \"Add comment:\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.comments_updated, (comment, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: index,\n      class: \"recipe-container\"\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.username), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.date), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.review), 1 /* TEXT */)])]);\n  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"textarea\", {\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.newComment = $event),\n    id: \"commentInput\",\n    placeholder: \"Write your comment\",\n    class: \"textarea\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newComment]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.addComment && $options.addComment(...args)),\n    class: \"submit-button\"\n  }, \"Add comment\")])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBDb21tZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjMwMGE2YjUmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBOztBQUVBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7O0FBS0E7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQWpCQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDb21tZW50cy52dWU/ZWFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT1cImJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzEzOWQ0OyBwYWRkaW5nLWJvdHRvbTogNXB4O1wiPkNPTU1FTlRTPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtbGlzdCBzY3JvbGxhYmxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihjb21tZW50LCBpbmRleCkgaW4gY29tbWVudHNfdXBkYXRlZFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwicmVjaXBlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Vc2VybmFtZTo8L3N0cm9uZz4ge3sgY29tbWVudC51c2VybmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRhdGU6PC9zdHJvbmc+IHt7IGNvbW1lbnQuZGF0ZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1yZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57eyBjb21tZW50LnJldmlldyB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRmaWVsZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiY29tbWVudElucHV0XCI+QWRkIGNvbW1lbnQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibmV3Q29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29tbWVudElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIGNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJhZGRDb21tZW50XCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+QWRkIGNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFN0cmluZyxcclxuICAgICAgICByZWNpcGVfaWQ6IE51bWJlcixcclxuICAgICAgICBjb21tZW50czogT2JqZWN0LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmV3Q29tbWVudDogJycsIC8vIEFncmVnYSBsYSBwcm9waWVkYWQgbmV3Q29tbWVudCBhbCBkYXRhXHJcbiAgICAgICAgICAgIGNvbW1lbnRzX3VwZGF0ZWQ6IHRoaXMuY29tbWVudHNcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjcmVhdGVEYXRlKCkge1xyXG4gICAgICAgICAgICAvLyBDcmVhciBlbCBvYmpldG8gY29tbWVudCBjb24gbGEgZmVjaGEgYWN0dWFsIHkgb3Ryb3MgZGF0b3NcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aCA9IChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gY3VycmVudERhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkQ29tbWVudCgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ29tbWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIk5vIGNvbW1lbnQgd3JpdHRlblwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3OiB0aGlzLm5ld0NvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLmNyZWF0ZURhdGUoKSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAucG9zdChcInBvc3RSYXRpbmdzL1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNpcGVfaWQ6IHRoaXMucmVjaXBlX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV2aWV3X3R5cGU6IFwiY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJhdGluZyBhZGRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJSZXZpZXcgYWRkZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0NvbW1lbnQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzX3VwZGF0ZWQgPSByZXNwb25zZS5kYXRhLmNvbW1lbnRzX2xpc3RcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tDb21tZW50KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdDb21tZW50ID09ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5jb21tZW50LWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzMxNGNkNDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIYWNlIHF1ZSBsYSBldGlxdWV0YSBzZWEgdW4gYmxvcXVlLCBsbyBxdWUgcGVybWl0ZSBjZW50cmFyIGVsIHRleHRvICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMxN2RkNDtcclxufVxyXG5cclxuLmNvbW1lbnRzLWxpc3Qge1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMTliZDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFkZC1jb21tZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGV4dGZpZWxkLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHRhcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzFhM2Q0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7IC8qIE1lZGlkYSBpbmljaWFsIGRlbCBjdWFkcm8gZGUgY29tZW50YXJpb3MgKi9cclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlODE5YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAwO1xyXG59XHJcblxyXG4ucmVjaXBlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMxY2ZkNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnJlY2lwZS1pbmZvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yZWNpcGUtcmV2aWV3IHtcclxuICAgIC8qIEVzdGlsb3MgYWRpY2lvbmFsZXMgcGFyYSBsYSBzZWNjacOzbiBkZSByZXZpc2nDs24gKi9cclxuICAgIGNvbG9yOiAjMzMzOyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=template&id=6300a6b5&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=style&index=0&id=6300a6b5&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=style&index=0&id=6300a6b5&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.comment-container[data-v-6300a6b5] {\\r\\n    text-align: center;\\r\\n    align-items: center;\\r\\n    width: 75%;\\r\\n    margin: 20px auto;\\n}\\n.title-container[data-v-6300a6b5] {\\r\\n    text-align: center;\\r\\n    margin-bottom: 10px;\\r\\n    color: #314cd4;\\n}\\n.label[data-v-6300a6b5] {\\r\\n    display: block; /* Hace que la etiqueta sea un bloque, lo que permite centrar el texto */\\r\\n    text-align: center;\\r\\n    color: #317dd4;\\n}\\n.comments-list[data-v-6300a6b5] {\\r\\n\\r\\n    margin-bottom: 20px;\\n}\\n.scrollable-content[data-v-6300a6b5] {\\r\\n    max-height: 200px;\\r\\n    overflow-y: auto;\\r\\n    padding: 10px;\\r\\n    border: 2px solid #319bd4;\\r\\n    border-radius: 10px;\\r\\n    background-color: #fff;\\n}\\n.add-comment[data-v-6300a6b5] {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: 100%;\\n}\\n.textfield-container[data-v-6300a6b5] {\\r\\n    text-align: center;\\r\\n    justify-content: center;\\r\\n    margin-bottom: 10px;\\r\\n    width: 100%;\\n}\\n.textarea[data-v-6300a6b5] {\\r\\n    margin-bottom: 10px;\\r\\n    padding: 5px;\\r\\n    border: 1px solid #31a3d4;\\r\\n    border-radius: 5px;\\r\\n    width: 100%;\\r\\n    box-sizing: border-box;\\r\\n    resize: vertical;\\r\\n    min-height: 50px; /* Medida inicial del cuadro de comentarios */\\n}\\n.submit-button[data-v-6300a6b5] {\\r\\n    background-color: #0e819a;\\r\\n    color: white;\\r\\n    padding: 8px 15px;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s;\\n}\\n.submit-button[data-v-6300a6b5]:hover {\\r\\n    background-color: #ffcc00;\\n}\\n.recipe-container[data-v-6300a6b5] {\\r\\n    margin-bottom: 20px;\\r\\n    border: 2px solid #31cfd4;\\r\\n    border-radius: 10px;\\r\\n    padding: 10px;\\r\\n    background-color: #fff;\\n}\\n.recipe-info[data-v-6300a6b5] {\\r\\n    margin-bottom: 10px;\\n}\\n.recipe-review[data-v-6300a6b5] {\\r\\n    /* Estilos adicionales para la sección de revisión */\\r\\n    color: #333; /* Cambia el color del texto según tus preferencias */\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYzMDBhNmI1JnNjb3BlZD10cnVlJmxhbmc9Y3NzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwQ29tbWVudHMudnVlPzkyNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9ub1NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jb21tZW50LWNvbnRhaW5lcltkYXRhLXYtNjMwMGE2YjVdIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuLnRpdGxlLWNvbnRhaW5lcltkYXRhLXYtNjMwMGE2YjVdIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjb2xvcjogIzMxNGNkNDtcXG59XFxuLmxhYmVsW2RhdGEtdi02MzAwYTZiNV0ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jazsgLyogSGFjZSBxdWUgbGEgZXRpcXVldGEgc2VhIHVuIGJsb3F1ZSwgbG8gcXVlIHBlcm1pdGUgY2VudHJhciBlbCB0ZXh0byAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMzE3ZGQ0O1xcbn1cXG4uY29tbWVudHMtbGlzdFtkYXRhLXYtNjMwMGE2YjVdIHtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnNjcm9sbGFibGUtY29udGVudFtkYXRhLXYtNjMwMGE2YjVdIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMTliZDQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5hZGQtY29tbWVudFtkYXRhLXYtNjMwMGE2YjVdIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZXh0ZmllbGQtY29udGFpbmVyW2RhdGEtdi02MzAwYTZiNV0ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnRleHRhcmVhW2RhdGEtdi02MzAwYTZiNV0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMWEzZDQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7IC8qIE1lZGlkYSBpbmljaWFsIGRlbCBjdWFkcm8gZGUgY29tZW50YXJpb3MgKi9cXG59XFxuLnN1Ym1pdC1idXR0b25bZGF0YS12LTYzMDBhNmI1XSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTgxOWE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLnN1Ym1pdC1idXR0b25bZGF0YS12LTYzMDBhNmI1XTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjMDA7XFxufVxcbi5yZWNpcGUtY29udGFpbmVyW2RhdGEtdi02MzAwYTZiNV0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzFjZmQ0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ucmVjaXBlLWluZm9bZGF0YS12LTYzMDBhNmI1XSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5yZWNpcGUtcmV2aWV3W2RhdGEtdi02MzAwYTZiNV0ge1xcclxcbiAgICAvKiBFc3RpbG9zIGFkaWNpb25hbGVzIHBhcmEgbGEgc2VjY2nDs24gZGUgcmV2aXNpw7NuICovXFxyXFxuICAgIGNvbG9yOiAjMzMzOyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=style&index=0&id=6300a6b5&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "07e99c071cf97982"; }
/******/ }();
/******/ 
/******/ }
);