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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/IngredientsFilterPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/IngredientsFilterPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_lists_Ingredients_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/lists/Ingredients.json */ \"./src/assets/lists/Ingredients.json\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      ingredientsData: _assets_lists_Ingredients_json__WEBPACK_IMPORTED_MODULE_0__,\n      letras: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".split(''),\n      letraSeleccionada: null\n    };\n  },\n  methods: {\n    handleButtonClick(ingrediente) {\n      // Manejar el clic en el botón del ingrediente, por ejemplo, podrías mostrar más detalles\n      alert(`Haz clic en ${ingrediente}`);\n    },\n    scrollToSection(letra) {\n      this.letraSeleccionada = letra;\n      const elemento = document.getElementById(letra);\n      if (elemento) {\n        const offset = 120; // Separación del margen superior\n        const posicion = elemento.offsetTop - offset;\n        window.scrollTo({\n          top: posicion,\n          behavior: 'smooth'\n        });\n      }\n    },\n    letraDisponible(letra) {\n      return Object.keys(this.ingredientsData).includes(letra);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9wYWdlcy9JbmdyZWRpZW50c0ZpbHRlclBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7O0FBc0NBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvSW5ncmVkaWVudHNGaWx0ZXJQYWdlLnZ1ZT82ODhkIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1haW5Db250YWluZXJcIj5cbiAgICA8aDE+SW5ncmVkaWVudHMgTGlzdDwvaDE+XG5cbiAgICA8IS0tIEJvdG9uZXMgZGUgbGV0cmFzIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJsZXRyYXNCdXR0b25zXCI+XG4gICAgICA8YSB2LWZvcj1cImxldHJhIGluIGxldHJhc1wiIDprZXk9XCJsZXRyYVwiIDpocmVmPVwibGV0cmFcIiBAY2xpY2sucHJldmVudD1cInNjcm9sbFRvU2VjdGlvbihsZXRyYSlcIiA6Y2xhc3M9XCJ7ICdsZXRyYU5vRGlzcG9uaWJsZSc6ICFsZXRyYURpc3BvbmlibGUobGV0cmEpIH1cIj5cbiAgICAgICAge3sgbGV0cmEgfX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cIk9iamVjdC5rZXlzKGluZ3JlZGllbnRzRGF0YSkubGVuZ3RoXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSB2LWZvcj1cIihpbmdyZWRpZW50ZXMsIGxldHJhKSBpbiBpbmdyZWRpZW50c0RhdGFcIiA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxldHJhU2VjdGlvblwiIDpjbGFzcz1cInsgJ3Jlc2FsdGFkbyc6IGxldHJhID09PSBsZXRyYVNlbGVjY2lvbmFkYSB9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0dWxvU2VjY2lvblwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjZW50cmFkb1wiPnt7IGxldHJhIH19PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiaW5ncmVkaWVudGVzTGlzdFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJpbmdyZWRpZW50ZSBpbiBpbmdyZWRpZW50ZXNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJpbmdyZWRpZW50ZVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlQnV0dG9uQ2xpY2soaW5ncmVkaWVudGUpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IGluZ3JlZGllbnRlIH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWVsc2U+XG4gICAgICA8cD5ObyBoYXkgaW5ncmVkaWVudGVzIGRpc3BvbmlibGVzLjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGluZ3JlZGllbnRzRGF0YSBmcm9tIFwiQC9hc3NldHMvbGlzdHMvSW5ncmVkaWVudHMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZ3JlZGllbnRzRGF0YTogaW5ncmVkaWVudHNEYXRhLFxuICAgICAgbGV0cmFzOiBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCIuc3BsaXQoJycpLFxuICAgICAgbGV0cmFTZWxlY2Npb25hZGE6IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUJ1dHRvbkNsaWNrKGluZ3JlZGllbnRlKSB7XG4gICAgICAvLyBNYW5lamFyIGVsIGNsaWMgZW4gZWwgYm90w7NuIGRlbCBpbmdyZWRpZW50ZSwgcG9yIGVqZW1wbG8sIHBvZHLDrWFzIG1vc3RyYXIgbcOhcyBkZXRhbGxlc1xuICAgICAgYWxlcnQoYEhheiBjbGljIGVuICR7aW5ncmVkaWVudGV9YCk7XG4gICAgfSxcbiAgICBzY3JvbGxUb1NlY3Rpb24obGV0cmEpIHtcbiAgICAgIHRoaXMubGV0cmFTZWxlY2Npb25hZGEgPSBsZXRyYTtcbiAgICAgIGNvbnN0IGVsZW1lbnRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGV0cmEpO1xuICAgICAgaWYgKGVsZW1lbnRvKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDEyMDsgLy8gU2VwYXJhY2nDs24gZGVsIG1hcmdlbiBzdXBlcmlvclxuICAgICAgICBjb25zdCBwb3NpY2lvbiA9IGVsZW1lbnRvLm9mZnNldFRvcCAtIG9mZnNldDtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBwb3NpY2lvbiwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGV0cmFEaXNwb25pYmxlKGxldHJhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pbmdyZWRpZW50c0RhdGEpLmluY2x1ZGVzKGxldHJhKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1haW5Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBFc3RpbG8gYWRpY2lvbmFsIHBhcmEgZWwgdMOtdHVsbyBkZSBsYSBzZWNjacOzbiAqL1xuLnRpdHVsb1NlY2Npb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmEgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlICovXG59XG5cbi8qIEVzdGlsbyBwYXJhIGVsIHJlc2FsdGFkbyBkZSBsYSBzZWNjacOzbiAqL1xuLnJlc2FsdGFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LCAxMjksIDEyNywgMC45OSk7IC8qIENvbG9yIGRlIHJlc2FsdGFkbyAqL1xufVxuXG4vKiBFc3RpbG8gcGFyYSBlbCBib3TDs24gZGUgbGV0cmEgbm8gZGlzcG9uaWJsZSAqL1xuLmxldHJhc0J1dHRvbnMgYS5sZXRyYU5vRGlzcG9uaWJsZSB7XG4gIGNvbG9yOiAjNjY2OyAvKiBDb2xvciBkZSB0ZXh0byBlbiBncmlzICovXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IC8qIEN1cnNvciBubyBwZXJtaXRpZG8gKi9cbn1cblxuLyogQ2xhc2UgcGFyYSBjZW50cmFyIGVsIHRleHRvIGhvcml6b250YWxtZW50ZSAqL1xuLmNlbnRyYWRvIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBRdWl0YSBsYSB2acOxZXRhIGRlIGxhIGxpc3RhICovXG4ubGV0cmFTZWN0aW9uIHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwOyAvKiBBw7FhZGUgZXN0YSBsw61uZWEgcGFyYSBxdWl0YXIgZWwgZXNwYWNpbyBlbnRyZSBlbCB0w610dWxvIHkgbGEgbGlzdGEgKi9cblxufVxuXG4vKiBFc3RpbG8gcGFyYSBsb3MgYm90b25lcyBkZSBsYSBsaXN0YSBkZSBpbmdyZWRpZW50ZXMgKi9cbi5pbmdyZWRpZW50ZXNMaXN0IGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5pbmdyZWRpZW50ZXNMaXN0IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XG59XG5cbi5sZXRyYXNCdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4ubGV0cmFzQnV0dG9ucyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/IngredientsFilterPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/IngredientsFilterPage.vue?vue&type=template&id=70fbd415&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/IngredientsFilterPage.vue?vue&type=template&id=70fbd415&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-70fbd415\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"mainContainer\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Ingredients List\", -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"letrasButtons\"\n};\nconst _hoisted_4 = [\"href\", \"onClick\"];\nconst _hoisted_5 = {\n  key: 0\n};\nconst _hoisted_6 = {\n  class: \"tituloSeccion\"\n};\nconst _hoisted_7 = {\n  class: \"centrado\"\n};\nconst _hoisted_8 = {\n  class: \"ingredientesList\"\n};\nconst _hoisted_9 = [\"onClick\"];\nconst _hoisted_10 = {\n  key: 1\n};\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"No hay ingredientes disponibles.\", -1 /* HOISTED */));\nconst _hoisted_12 = [_hoisted_11];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Botones de letras \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.letras, letra => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"a\", {\n      key: letra,\n      href: letra,\n      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.scrollToSection(letra), [\"prevent\"]),\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n        'letraNoDisponible': !$options.letraDisponible(letra)\n      })\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(letra), 11 /* TEXT, CLASS, PROPS */, _hoisted_4);\n  }), 128 /* KEYED_FRAGMENT */))]), Object.keys($data.ingredientsData).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.ingredientsData, (ingredientes, letra) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"letraSection\", {\n        'resaltado': letra === $data.letraSeleccionada\n      }])\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(letra), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(ingredientes, ingrediente => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n        key: ingrediente,\n        onClick: $event => $options.handleButtonClick(ingrediente)\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ingrediente), 9 /* TEXT, PROPS */, _hoisted_9);\n    }), 128 /* KEYED_FRAGMENT */))])], 2 /* CLASS */)]);\n  }), 256 /* UNKEYED_FRAGMENT */))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_10, _hoisted_12))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvcGFnZXMvSW5ncmVkaWVudHNGaWx0ZXJQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MGZiZDQxNSZzY29wZWQ9dHJ1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7QUFDQTs7QUFHQTtBQUFBOzs7Ozs7QUFVQTtBQUFBOztBQUNBO0FBQUE7O0FBRUE7QUFBQTs7Ozs7QUFjQTtBQUFBOztBQS9CQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTs7QUFPQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL0luZ3JlZGllbnRzRmlsdGVyUGFnZS52dWU/Njg4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtYWluQ29udGFpbmVyXCI+XG4gICAgPGgxPkluZ3JlZGllbnRzIExpc3Q8L2gxPlxuXG4gICAgPCEtLSBCb3RvbmVzIGRlIGxldHJhcyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwibGV0cmFzQnV0dG9uc1wiPlxuICAgICAgPGEgdi1mb3I9XCJsZXRyYSBpbiBsZXRyYXNcIiA6a2V5PVwibGV0cmFcIiA6aHJlZj1cImxldHJhXCIgQGNsaWNrLnByZXZlbnQ9XCJzY3JvbGxUb1NlY3Rpb24obGV0cmEpXCIgOmNsYXNzPVwieyAnbGV0cmFOb0Rpc3BvbmlibGUnOiAhbGV0cmFEaXNwb25pYmxlKGxldHJhKSB9XCI+XG4gICAgICAgIHt7IGxldHJhIH19XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHYtaWY9XCJPYmplY3Qua2V5cyhpbmdyZWRpZW50c0RhdGEpLmxlbmd0aFwiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgdi1mb3I9XCIoaW5ncmVkaWVudGVzLCBsZXRyYSkgaW4gaW5ncmVkaWVudHNEYXRhXCIgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXRyYVNlY3Rpb25cIiA6Y2xhc3M9XCJ7ICdyZXNhbHRhZG8nOiBsZXRyYSA9PT0gbGV0cmFTZWxlY2Npb25hZGEgfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdHVsb1NlY2Npb25cIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY2VudHJhZG9cIj57eyBsZXRyYSB9fTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImluZ3JlZGllbnRlc0xpc3RcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHYtZm9yPVwiaW5ncmVkaWVudGUgaW4gaW5ncmVkaWVudGVzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaW5ncmVkaWVudGVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZUJ1dHRvbkNsaWNrKGluZ3JlZGllbnRlKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBpbmdyZWRpZW50ZSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1lbHNlPlxuICAgICAgPHA+Tm8gaGF5IGluZ3JlZGllbnRlcyBkaXNwb25pYmxlcy48L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBpbmdyZWRpZW50c0RhdGEgZnJvbSBcIkAvYXNzZXRzL2xpc3RzL0luZ3JlZGllbnRzLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbmdyZWRpZW50c0RhdGE6IGluZ3JlZGllbnRzRGF0YSxcbiAgICAgIGxldHJhczogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiLnNwbGl0KCcnKSxcbiAgICAgIGxldHJhU2VsZWNjaW9uYWRhOiBudWxsLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVCdXR0b25DbGljayhpbmdyZWRpZW50ZSkge1xuICAgICAgLy8gTWFuZWphciBlbCBjbGljIGVuIGVsIGJvdMOzbiBkZWwgaW5ncmVkaWVudGUsIHBvciBlamVtcGxvLCBwb2Ryw61hcyBtb3N0cmFyIG3DoXMgZGV0YWxsZXNcbiAgICAgIGFsZXJ0KGBIYXogY2xpYyBlbiAke2luZ3JlZGllbnRlfWApO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9TZWN0aW9uKGxldHJhKSB7XG4gICAgICB0aGlzLmxldHJhU2VsZWNjaW9uYWRhID0gbGV0cmE7XG4gICAgICBjb25zdCBlbGVtZW50byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxldHJhKTtcbiAgICAgIGlmIChlbGVtZW50bykge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAxMjA7IC8vIFNlcGFyYWNpw7NuIGRlbCBtYXJnZW4gc3VwZXJpb3JcbiAgICAgICAgY29uc3QgcG9zaWNpb24gPSBlbGVtZW50by5vZmZzZXRUb3AgLSBvZmZzZXQ7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogcG9zaWNpb24sIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxldHJhRGlzcG9uaWJsZShsZXRyYSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5ncmVkaWVudHNEYXRhKS5pbmNsdWRlcyhsZXRyYSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5tYWluQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogRXN0aWxvIGFkaWNpb25hbCBwYXJhIGVsIHTDrXR1bG8gZGUgbGEgc2VjY2nDs24gKi9cbi50aXR1bG9TZWNjaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudHJhIGVsIHRleHRvIGhvcml6b250YWxtZW50ZSAqL1xufVxuXG4vKiBFc3RpbG8gcGFyYSBlbCByZXNhbHRhZG8gZGUgbGEgc2VjY2nDs24gKi9cbi5yZXNhbHRhZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOSwgMTI5LCAxMjcsIDAuOTkpOyAvKiBDb2xvciBkZSByZXNhbHRhZG8gKi9cbn1cblxuLyogRXN0aWxvIHBhcmEgZWwgYm90w7NuIGRlIGxldHJhIG5vIGRpc3BvbmlibGUgKi9cbi5sZXRyYXNCdXR0b25zIGEubGV0cmFOb0Rpc3BvbmlibGUge1xuICBjb2xvcjogIzY2NjsgLyogQ29sb3IgZGUgdGV4dG8gZW4gZ3JpcyAqL1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAvKiBDdXJzb3Igbm8gcGVybWl0aWRvICovXG59XG5cbi8qIENsYXNlIHBhcmEgY2VudHJhciBlbCB0ZXh0byBob3Jpem9udGFsbWVudGUgKi9cbi5jZW50cmFkbyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogUXVpdGEgbGEgdmnDsWV0YSBkZSBsYSBsaXN0YSAqL1xuLmxldHJhU2VjdGlvbiB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDsgLyogQcOxYWRlIGVzdGEgbMOtbmVhIHBhcmEgcXVpdGFyIGVsIGVzcGFjaW8gZW50cmUgZWwgdMOtdHVsbyB5IGxhIGxpc3RhICovXG5cbn1cblxuLyogRXN0aWxvIHBhcmEgbG9zIGJvdG9uZXMgZGUgbGEgbGlzdGEgZGUgaW5ncmVkaWVudGVzICovXG4uaW5ncmVkaWVudGVzTGlzdCBidXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4uaW5ncmVkaWVudGVzTGlzdCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xufVxuXG4ubGV0cmFzQnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmxldHJhc0J1dHRvbnMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5sZXRyYXNCdXR0b25zIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../../../usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/IngredientsFilterPage.vue?vue&type=template&id=70fbd415&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8e52a376bdef8b6b"; }
/******/ }();
/******/ 
/******/ }
);