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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    username: String,\n    recipe_id: Number,\n    comments: Object\n  },\n  data() {\n    return {\n      newComment: '',\n      // Agrega la propiedad newComment al data\n      comments_updated: this.comments\n    };\n  },\n  methods: {\n    createDate() {\n      // Crear el objeto comment con la fecha actual y otros datos\n      const currentDate = new Date();\n      const day = currentDate.getDate().toString().padStart(2, '0');\n      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');\n      const year = currentDate.getFullYear().toString();\n      const hours = currentDate.getHours().toString().padStart(2, '0');\n      const minutes = currentDate.getMinutes().toString().padStart(2, '0');\n      const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;\n      return formattedDate;\n    },\n    addComment() {\n      if (this.checkComment()) {\n        alert(\"No review was writed\");\n        return;\n      }\n      const comment = {\n        username: this.username,\n        review: this.newComment,\n        date: this.createDate()\n      };\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"recipesPostRatings/\", {\n        user_id: this.username,\n        recipe_id: this.recipe_id,\n        comment: comment,\n        review_type: \"comment\"\n      }).then(response => {\n        if (response.status === 200) {\n          console.log(\"Rating added\");\n          alert(\"Review added.\");\n          this.newComment = '';\n          this.comments_updated = response.data.comments_list;\n        }\n      }).catch(error => {\n        alert(error.response);\n      });\n    },\n    checkComment() {\n      return this.newComment == '';\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOztBQWdDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcENvbW1lbnRzLnZ1ZT9lYWQ0Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbW1lbnQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgPGgzIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkNDRkMzE7IHBhZGRpbmctYm90dG9tOiA1cHg7XCI+Q09NTUVOVFM8L2gzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1saXN0IHNjcm9sbGFibGUtY29udGVudFwiPlxuICAgICAgPGRpdiB2LWZvcj1cIihjb21tZW50LCBpbmRleCkgaW4gY29tbWVudHNfdXBkYXRlZFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwicmVjaXBlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWluZm9cIj5cbiAgICAgICAgICA8cD48c3Ryb25nPlVzZXJuYW1lOjwvc3Ryb25nPiB7eyBjb21tZW50LnVzZXJuYW1lIH19PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+RGF0ZTo8L3N0cm9uZz4ge3sgY29tbWVudC5kYXRlIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1yZXZpZXdcIj5cbiAgICAgICAgICA8cD57eyBjb21tZW50LnJldmlldyB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0ZmllbGQtY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiY29tbWVudElucHV0XCI+QcOxYWRpciBjb21lbnRhcmlvOjwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHYtbW9kZWw9XCJuZXdDb21tZW50XCJcbiAgICAgICAgICBpZD1cImNvbW1lbnRJbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFc2NyaWJlIHR1IGNvbWVudGFyaW8gYXF1w61cIlxuICAgICAgICAgIGNsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJhZGRDb21tZW50XCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+QWRkIGNvbW1lbnQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHVzZXJuYW1lOiBTdHJpbmcsXG4gICAgcmVjaXBlX2lkOiBOdW1iZXIsXG4gICAgY29tbWVudHM6IE9iamVjdCxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmV3Q29tbWVudDogJycsIC8vIEFncmVnYSBsYSBwcm9waWVkYWQgbmV3Q29tbWVudCBhbCBkYXRhXG4gICAgICBjb21tZW50c191cGRhdGVkOiB0aGlzLmNvbW1lbnRzXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNyZWF0ZURhdGUoKXtcbiAgICAgIC8vIENyZWFyIGVsIG9iamV0byBjb21tZW50IGNvbiBsYSBmZWNoYSBhY3R1YWwgeSBvdHJvcyBkYXRvc1xuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgY29uc3QgaG91cnMgPSBjdXJyZW50RGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc31gO1xuICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG4gICAgfSxcbiAgICBhZGRDb21tZW50KCkge1xuXG4gICAgICBpZih0aGlzLmNoZWNrQ29tbWVudCgpKXtcbiAgICAgICAgYWxlcnQoXCJObyByZXZpZXcgd2FzIHdyaXRlZFwiKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbW1lbnQgPSB7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICByZXZpZXc6IHRoaXMubmV3Q29tbWVudCwgXG4gICAgICAgIGRhdGU6IHRoaXMuY3JlYXRlRGF0ZSgpLFxuICAgICAgfTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCJyZWNpcGVzUG9zdFJhdGluZ3MvXCIsIHtcbiAgICAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgIHJlY2lwZV9pZDogdGhpcy5yZWNpcGVfaWQsXG4gICAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgICAgICByZXZpZXdfdHlwZTogXCJjb21tZW50XCIsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSYXRpbmcgYWRkZWRcIik7XG4gICAgICAgICAgICBhbGVydChcIlJldmlldyBhZGRlZC5cIik7XG4gICAgICAgICAgICB0aGlzLm5ld0NvbW1lbnQgPScnXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzX3VwZGF0ZWQgPSByZXNwb25zZS5kYXRhLmNvbW1lbnRzX2xpc3RcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY2hlY2tDb21tZW50KCl7XG4gICAgICByZXR1cm4gdGhpcy5uZXdDb21tZW50ID09ICcnO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uY29tbWVudC1jb250YWluZXIge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNkNDRkMzE7XG59XG5cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIYWNlIHF1ZSBsYSBldGlxdWV0YSBzZWEgdW4gYmxvcXVlLCBsbyBxdWUgcGVybWl0ZSBjZW50cmFyIGVsIHRleHRvICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNkNDRkMzE7XG59XG5cbi5jb21tZW50cy1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNjcm9sbGFibGUtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDQ0ZDMxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYWRkLWNvbW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHRmaWVsZC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHRhcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDQ0ZDMxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiA4MHB4OyAvKiBNZWRpZGEgaW5pY2lhbCBkZWwgY3VhZHJvIGRlIGNvbWVudGFyaW9zICovXG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTczMztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjMDA7XG59XG5cbi5yZWNpcGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2Q0NGQzMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnJlY2lwZS1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJlY2lwZS1yZXZpZXcge1xuICAvKiBFc3RpbG9zIGFkaWNpb25hbGVzIHBhcmEgbGEgc2VjY2nDs24gZGUgcmV2aXNpw7NuICovXG4gIGNvbG9yOiAjMzMzOyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=template&id=6300a6b5&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=template&id=6300a6b5&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-6300a6b5\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"comment-container\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"title-container\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", {\n  style: {\n    \"border-bottom\": \"2px solid #d44d31\",\n    \"padding-bottom\": \"5px\"\n  }\n}, \"COMMENTS\")], -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"comments-list scrollable-content\"\n};\nconst _hoisted_4 = {\n  class: \"recipe-info\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Username:\", -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Date:\", -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"recipe-review\"\n};\nconst _hoisted_8 = {\n  class: \"add-comment\"\n};\nconst _hoisted_9 = {\n  class: \"textfield-container\"\n};\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  class: \"label\",\n  for: \"commentInput\"\n}, \"Añadir comentario:\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.comments_updated, (comment, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: index,\n      class: \"recipe-container\"\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.username), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.date), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.review), 1 /* TEXT */)])]);\n  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"textarea\", {\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.newComment = $event),\n    id: \"commentInput\",\n    placeholder: \"Escribe tu comentario aquí\",\n    class: \"textarea\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newComment]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.addComment && $options.addComment(...args)),\n    class: \"submit-button\"\n  }, \"Add comment\")])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9BcHBDb21tZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjMwMGE2YjUmc2NvcGVkPXRydWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBOztBQUVBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7O0FBS0E7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQWpCQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHBDb21tZW50cy52dWU/ZWFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb21tZW50LWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cbiAgICAgIDxoMyBzdHlsZT1cImJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDQ0ZDMxOyBwYWRkaW5nLWJvdHRvbTogNXB4O1wiPkNPTU1FTlRTPC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtbGlzdCBzY3JvbGxhYmxlLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgdi1mb3I9XCIoY29tbWVudCwgaW5kZXgpIGluIGNvbW1lbnRzX3VwZGF0ZWRcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInJlY2lwZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1pbmZvXCI+XG4gICAgICAgICAgPHA+PHN0cm9uZz5Vc2VybmFtZTo8L3N0cm9uZz4ge3sgY29tbWVudC51c2VybmFtZSB9fTwvcD5cbiAgICAgICAgICA8cD48c3Ryb25nPkRhdGU6PC9zdHJvbmc+IHt7IGNvbW1lbnQuZGF0ZSB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtcmV2aWV3XCI+XG4gICAgICAgICAgPHA+e3sgY29tbWVudC5yZXZpZXcgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFkZC1jb21tZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dGZpZWxkLWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cImNvbW1lbnRJbnB1dFwiPkHDsWFkaXIgY29tZW50YXJpbzo8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICB2LW1vZGVsPVwibmV3Q29tbWVudFwiXG4gICAgICAgICAgaWQ9XCJjb21tZW50SW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBjb21lbnRhcmlvIGFxdcOtXCJcbiAgICAgICAgICBjbGFzcz1cInRleHRhcmVhXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiYWRkQ29tbWVudFwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiPkFkZCBjb21tZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB1c2VybmFtZTogU3RyaW5nLFxuICAgIHJlY2lwZV9pZDogTnVtYmVyLFxuICAgIGNvbW1lbnRzOiBPYmplY3QsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld0NvbW1lbnQ6ICcnLCAvLyBBZ3JlZ2EgbGEgcHJvcGllZGFkIG5ld0NvbW1lbnQgYWwgZGF0YVxuICAgICAgY29tbWVudHNfdXBkYXRlZDogdGhpcy5jb21tZW50c1xuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVEYXRlKCl7XG4gICAgICAvLyBDcmVhciBlbCBvYmpldG8gY29tbWVudCBjb24gbGEgZmVjaGEgYWN0dWFsIHkgb3Ryb3MgZGF0b3NcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtb250aCA9IChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gY3VycmVudERhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBtaW51dGVzID0gY3VycmVudERhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblxuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICAgIH0sXG4gICAgYWRkQ29tbWVudCgpIHtcblxuICAgICAgaWYodGhpcy5jaGVja0NvbW1lbnQoKSl7XG4gICAgICAgIGFsZXJ0KFwiTm8gcmV2aWV3IHdhcyB3cml0ZWRcIilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBjb21tZW50ID0ge1xuICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgcmV2aWV3OiB0aGlzLm5ld0NvbW1lbnQsIFxuICAgICAgICBkYXRlOiB0aGlzLmNyZWF0ZURhdGUoKSxcbiAgICAgIH07XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwicmVjaXBlc1Bvc3RSYXRpbmdzL1wiLCB7XG4gICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICByZWNpcGVfaWQ6IHRoaXMucmVjaXBlX2lkLFxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXG4gICAgICAgICAgcmV2aWV3X3R5cGU6IFwiY29tbWVudFwiLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmF0aW5nIGFkZGVkXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJSZXZpZXcgYWRkZWQuXCIpO1xuICAgICAgICAgICAgdGhpcy5uZXdDb21tZW50ID0nJ1xuICAgICAgICAgICAgdGhpcy5jb21tZW50c191cGRhdGVkID0gcmVzcG9uc2UuZGF0YS5jb21tZW50c19saXN0XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNoZWNrQ29tbWVudCgpe1xuICAgICAgcmV0dXJuIHRoaXMubmV3Q29tbWVudCA9PSAnJztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmNvbW1lbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjZDQ0ZDMxO1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBibG9jazsgLyogSGFjZSBxdWUgbGEgZXRpcXVldGEgc2VhIHVuIGJsb3F1ZSwgbG8gcXVlIHBlcm1pdGUgY2VudHJhciBlbCB0ZXh0byAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZDQ0ZDMxO1xufVxuXG4uY29tbWVudHMtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zY3JvbGxhYmxlLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2Q0NGQzMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFkZC1jb21tZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0ZmllbGQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0NGQzMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgbWluLWhlaWdodDogODBweDsgLyogTWVkaWRhIGluaWNpYWwgZGVsIGN1YWRybyBkZSBjb21lbnRhcmlvcyAqL1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjU3MzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAwO1xufVxuXG4ucmVjaXBlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkNDRkMzE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5yZWNpcGUtaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5yZWNpcGUtcmV2aWV3IHtcbiAgLyogRXN0aWxvcyBhZGljaW9uYWxlcyBwYXJhIGxhIHNlY2Npw7NuIGRlIHJldmlzacOzbiAqL1xuICBjb2xvcjogIzMzMzsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=template&id=6300a6b5&scoped=true\n");

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=style&index=0&id=6300a6b5&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=style&index=0&id=6300a6b5&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ \"../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_usr_local_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.comment-container[data-v-6300a6b5] {\\n  width: 75%;\\n  margin: 20px auto;\\n}\\n.title-container[data-v-6300a6b5] {\\n  text-align: center;\\n  margin-bottom: 10px;\\n  color: #d44d31;\\n}\\n.label[data-v-6300a6b5] {\\n  display: block; /* Hace que la etiqueta sea un bloque, lo que permite centrar el texto */\\n  text-align: center;\\n  color: #d44d31;\\n}\\n.comments-list[data-v-6300a6b5] {\\n  margin-bottom: 20px;\\n}\\n.scrollable-content[data-v-6300a6b5] {\\n  max-height: 200px;\\n  overflow-y: auto;\\n  padding: 10px;\\n  border: 2px solid #d44d31;\\n  border-radius: 10px;\\n  background-color: #fff;\\n}\\n.add-comment[data-v-6300a6b5] {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n}\\n.textfield-container[data-v-6300a6b5] {\\n  text-align: center;\\n  justify-content: center;\\n  margin-bottom: 10px;\\n  width: 100%;\\n}\\n.textarea[data-v-6300a6b5] {\\n  margin-bottom: 10px;\\n  padding: 5px;\\n  border: 1px solid #d44d31;\\n  border-radius: 5px;\\n  width: 100%;\\n  box-sizing: border-box;\\n  resize: vertical;\\n  min-height: 80px; /* Medida inicial del cuadro de comentarios */\\n}\\n.submit-button[data-v-6300a6b5] {\\n  background-color: #FF5733;\\n  color: white;\\n  padding: 8px 15px;\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  transition: background-color 0.3s;\\n}\\n.submit-button[data-v-6300a6b5]:hover {\\n  background-color: #ffcc00;\\n}\\n.recipe-container[data-v-6300a6b5] {\\n  margin-bottom: 20px;\\n  border: 2px solid #d44d31;\\n  border-radius: 10px;\\n  padding: 10px;\\n  background-color: #fff;\\n}\\n.recipe-info[data-v-6300a6b5] {\\n  margin-bottom: 10px;\\n}\\n.recipe-review[data-v-6300a6b5] {\\n  /* Estilos adicionales para la sección de revisión */\\n  color: #333; /* Cambia el color del texto según tus preferencias */\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0FwcENvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYzMDBhNmI1JnNjb3BlZD10cnVlJmxhbmc9Y3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwQ29tbWVudHMudnVlPzI0MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY29tbWVudC1jb250YWluZXJbZGF0YS12LTYzMDBhNmI1XSB7XFxuICB3aWR0aDogNzUlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcbi50aXRsZS1jb250YWluZXJbZGF0YS12LTYzMDBhNmI1XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICNkNDRkMzE7XFxufVxcbi5sYWJlbFtkYXRhLXYtNjMwMGE2YjVdIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIYWNlIHF1ZSBsYSBldGlxdWV0YSBzZWEgdW4gYmxvcXVlLCBsbyBxdWUgcGVybWl0ZSBjZW50cmFyIGVsIHRleHRvICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2Q0NGQzMTtcXG59XFxuLmNvbW1lbnRzLWxpc3RbZGF0YS12LTYzMDBhNmI1XSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uc2Nyb2xsYWJsZS1jb250ZW50W2RhdGEtdi02MzAwYTZiNV0ge1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkNDRkMzE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmFkZC1jb21tZW50W2RhdGEtdi02MzAwYTZiNV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZXh0ZmllbGQtY29udGFpbmVyW2RhdGEtdi02MzAwYTZiNV0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50ZXh0YXJlYVtkYXRhLXYtNjMwMGE2YjVdIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDQ0ZDMxO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7IC8qIE1lZGlkYSBpbmljaWFsIGRlbCBjdWFkcm8gZGUgY29tZW50YXJpb3MgKi9cXG59XFxuLnN1Ym1pdC1idXR0b25bZGF0YS12LTYzMDBhNmI1XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5zdWJtaXQtYnV0dG9uW2RhdGEtdi02MzAwYTZiNV06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDtcXG59XFxuLnJlY2lwZS1jb250YWluZXJbZGF0YS12LTYzMDBhNmI1XSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2Q0NGQzMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLnJlY2lwZS1pbmZvW2RhdGEtdi02MzAwYTZiNV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnJlY2lwZS1yZXZpZXdbZGF0YS12LTYzMDBhNmI1XSB7XFxuICAvKiBFc3RpbG9zIGFkaWNpb25hbGVzIHBhcmEgbGEgc2VjY2nDs24gZGUgcmV2aXNpw7NuICovXFxuICBjb2xvcjogIzMzMzsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppComments.vue?vue&type=style&index=0&id=6300a6b5&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bc2d5e7421ce77a5"; }
/******/ }();
/******/ 
/******/ }
);