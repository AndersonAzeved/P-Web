"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies33",{

/***/ "./pages/movies33.js":
/*!***************************!*\
  !*** ./pages/movies33.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TheForm: function() { return /* binding */ TheForm; },\n/* harmony export */   TheLink: function() { return /* binding */ TheLink; },\n/* harmony export */   TheMovies: function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies33; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Movies33() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        url: \"\",\n        titleSearchString: \"\"\n    });\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.url, async (u)=>{\n        if (!state.url || !state.titleSearchString) return {\n            Search: \"\"\n        };\n        if (state.url === \"\" || state.titleSearchString === \"\") return {\n            Search: \"\"\n        };\n        const res = await fetch(\"\".concat(state.url, \"/?apiKey=31c8f11c&s=\").concat(state.titleSearchString));\n        const json = await res.json();\n        return json;\n    });\n    const onClickHandler = (e)=>{\n        e.preventDefault();\n        let s = document.getElementById(\"titleSearchString\").value;\n        if (s == \"\") {\n            let div = document.getElementById(\"info\");\n            div.innerHTML = \"*Campo obrigat\\xf3rio\";\n        } else {\n            let div = document.getElementById(\"info\");\n            div.innerHTML = \"\";\n            if (state.url === \"\") {\n                setState({\n                    url: \"http://www.omdbapi.com\",\n                    titleSearchString: s\n                });\n            } else setState({\n                url: \"\",\n                titleSearchString: state.titleSearchString\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Movies\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheForm, {}, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: state.url\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"info\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: data ? data : {\n                    Search: \"\"\n                },\n                show: state.url !== \"\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Movies33, \"P5xu9tIXAXGd1K4bXMaWrLHh4lM=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Movies33;\nfunction TheForm() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"titleSearchString\",\n                    children: \"Filtro de T\\xedtulo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"titleSearchString\",\n                    name: \"titleSearchString\",\n                    type: \"text\",\n                    autoComplete: \"true\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_c1 = TheForm;\nfunction TheMovies(param) {\n    let { data, show } = param;\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 55,\n        columnNumber: 24\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 56,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na pesquisa\"\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 57,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 58,\n        columnNumber: 38\n    }, this);\n    let div = document.getElementById(\"info\");\n    if (data.Search == undefined) {\n        div.innerHTML = \"Busca n\\xe3o Encontrada\";\n    } else {\n        var _data_Search;\n        return (_data_Search = data.Search) === null || _data_Search === void 0 ? void 0 : _data_Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, m.imdbID, true, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 66,\n                columnNumber: 38\n            }, this));\n    }\n}\n_c2 = TheMovies;\nfunction TheLink(param) {\n    let { url, handler } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/movies3.js\",\n            onClick: handler,\n            children: [\n                \" \",\n                url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, this);\n}\n_c3 = TheLink;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Movies33\");\n$RefreshReg$(_c1, \"TheForm\");\n$RefreshReg$(_c2, \"TheMovies\");\n$RefreshReg$(_c3, \"TheLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSw4REFBQ2pCOztvQkFBb0JpQixFQUFFQyxLQUFLO29CQUFDO29CQUFNRCxFQUFFRSxJQUFJOztlQUEvQkYsRUFBRUcsTUFBTTs7Ozs7SUFFbkQ7QUFDSjtNQWZnQmQ7QUFrQlQsU0FBU0YsUUFBUSxLQUFjO1FBQWQsRUFBQ3BCLEdBQUcsRUFBRXFDLE9BQU8sRUFBQyxHQUFkO0lBQ3BCLHFCQUNJLDhEQUFDckI7a0JBQ0csNEVBQUNzQjtZQUFFQyxNQUFLO1lBQWNDLFNBQVNIOztnQkFBUztnQkFBRXJDLFFBQVEsS0FBSyxZQUFZO2dCQUFVOzs7Ozs7Ozs7Ozs7QUFHekY7TUFOZ0JvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMzMy5qcz83MmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzMygpe1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7dXJsOicnLCB0aXRsZVNlYXJjaFN0cmluZzonJ30pXHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKHN0YXRlLnVybCwgYXN5bmMgKHUpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLnVybCB8fCAhc3RhdGUudGl0bGVTZWFyY2hTdHJpbmcpIHJldHVybiB7U2VhcmNoOicnfVxyXG4gICAgICAgIGlmIChzdGF0ZS51cmwgPT09ICcnIHx8IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nID09PScnKSByZXR1cm4ge1NlYXJjaDonJ31cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzdGF0ZS51cmx9Lz9hcGlLZXk9MzFjOGYxMWMmcz0ke3N0YXRlLnRpdGxlU2VhcmNoU3RyaW5nfWApXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVTZWFyY2hTdHJpbmcnKS52YWx1ZVxyXG4gICAgICAgIGlmKHMgPT0gJycpe1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKVxyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJypDYW1wbyBvYnJpZ2F0w7NyaW8nXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpXHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoe3VybDonaHR0cDovL3d3dy5vbWRiYXBpLmNvbScsdGl0bGVTZWFyY2hTdHJpbmc6c30pXHJcbiAgICAgICAgICAgIH1lbHNlIHNldFN0YXRlKHt1cmw6JycsdGl0bGVTZWFyY2hTdHJpbmc6IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGl0bGU+TW92aWVzPC90aXRsZT5cclxuICAgICAgICAgICAgPFRoZUZvcm0vPlxyXG4gICAgICAgICAgICA8VGhlTGluayB1cmw9e3N0YXRlLnVybH0gIC8+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J2luZm8nPjwvZGl2PlxyXG4gICAgICAgICAgICA8VGhlTW92aWVzIGRhdGE9e2RhdGEgPyBkYXRhOiB7U2VhcmNoOicnfSB9IHNob3c9e3N0YXRlLnVybCAhPT0gJyd9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlRm9ybSgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVTZWFyY2hTdHJpbmdcIj5GaWx0cm8gZGUgVMOtdHVsbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiIG5hbWU9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XHJcbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcbiAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuICg8ZGl2PmZhbGhhIG5hIHBlc3F1aXNhPC9kaXY+KVxyXG4gICAgaWYgKGRhdGEuU2VhcmNoID09PSAnJyApIHJldHVybiAoPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+KVxyXG5cclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpXHJcbiAgICBcclxuICAgIGlmKGRhdGEuU2VhcmNoID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9ICdCdXNjYSBuw6NvIEVuY29udHJhZGEnXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIGRhdGEuU2VhcmNoPy5tYXAoIChtKSA9PiA8ZGl2IGtleT17bS5pbWRiSUR9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gIClcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTGluayh7dXJsLCBoYW5kbGVyfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWVzMy5qc1wiIG9uQ2xpY2s9e2hhbmRsZXJ9PiB7dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ30gPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVN0YXRlIiwiTW92aWVzMzMiLCJzdGF0ZSIsInNldFN0YXRlIiwidXJsIiwidGl0bGVTZWFyY2hTdHJpbmciLCJkYXRhIiwiZXJyb3IiLCJ1IiwiU2VhcmNoIiwicmVzIiwiZmV0Y2giLCJqc29uIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZGl2IiwiaW5uZXJIVE1MIiwidGl0bGUiLCJUaGVGb3JtIiwiVGhlTGluayIsImlkIiwiVGhlTW92aWVzIiwic2hvdyIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwidW5kZWZpbmVkIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsImhhbmRsZXIiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies33.js\n"));

/***/ })

});