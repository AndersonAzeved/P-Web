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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TheForm: function() { return /* binding */ TheForm; },\n/* harmony export */   TheLink: function() { return /* binding */ TheLink; },\n/* harmony export */   TheMovies: function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies33; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Movies33() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        url: \"\",\n        titleSearchString: \"\"\n    });\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.url, async (u)=>{\n        if (!state.url || !state.titleSearchString) return {\n            Search: \"\"\n        };\n        if (state.url === \"\" || state.titleSearchString === \"\") return {\n            Search: \"\"\n        };\n        const res = await fetch(\"\".concat(state.url, \"/?apiKey=31c8f11c&s=\").concat(state.titleSearchString));\n        const json = await res.json();\n        return json;\n    });\n    const onClickHandler = (e)=>{\n        e.preventDefault();\n        let s = document.getElementById(\"titleSearchString\").value;\n        if (s == \"\") {\n            let div = document.getElementById(\"info\");\n            div.innerHTML = \"*Campo obrigat\\xf3rio\";\n        } else {\n            let div = document.getElementById(\"info\");\n            div.innerHTML = \"\";\n            if (state.url === \"\") {\n                setState({\n                    url: \"http://www.omdbapi.com\",\n                    titleSearchString: s\n                });\n            } else setState({\n                url: \"\",\n                titleSearchString: state.titleSearchString\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Movies\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheForm, {}, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: state.url,\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"info\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: data ? data : {\n                    Search: \"\"\n                },\n                show: state.url !== \"\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Movies33, \"P5xu9tIXAXGd1K4bXMaWrLHh4lM=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Movies33;\nfunction TheForm() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"titleSearchString\",\n                    children: \"Filtro de T\\xedtulo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"titleSearchString\",\n                    name: \"titleSearchString\",\n                    type: \"text\",\n                    autoComplete: \"true\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_c1 = TheForm;\nfunction TheMovies(param) {\n    let { data, show } = param;\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 55,\n        columnNumber: 24\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 56,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na pesquisa\"\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 57,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 58,\n        columnNumber: 38\n    }, this);\n    let div = document.getElementById(\"info\");\n    if (data.Search == undefined) {\n        div.innerHTML = \"Busca n\\xe3o Encontrada\";\n    } else {\n        var _data_Search;\n        return (_data_Search = data.Search) === null || _data_Search === void 0 ? void 0 : _data_Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, m.imdbID, true, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 66,\n                columnNumber: 38\n            }, this));\n    }\n}\n_c2 = TheMovies;\nfunction TheLink(param) {\n    let { url, handler } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/movies3.js\",\n            children: [\n                \" \",\n                url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, this);\n}\n_c3 = TheLink;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Movies33\");\n$RefreshReg$(_c1, \"TheForm\");\n$RefreshReg$(_c2, \"TheMovies\");\n$RefreshReg$(_c3, \"TheLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUNDLGtCQUFNLDhEQUFDbEI7O29CQUFvQmtCLEVBQUVDLEtBQUs7b0JBQUM7b0JBQU1ELEVBQUVFLElBQUk7O2VBQS9CRixFQUFFRyxNQUFNOzs7OztJQUVuRDtBQUNKO01BZmdCZDtBQWtCVCxTQUFTSCxRQUFRLEtBQWM7UUFBZCxFQUFDcEIsR0FBRyxFQUFFcUIsT0FBTyxFQUFDLEdBQWQ7SUFDcEIscUJBQ0ksOERBQUNMO2tCQUNHLDRFQUFDc0I7WUFBRUMsTUFBSzs7Z0JBQWU7Z0JBQUV2QyxRQUFRLEtBQUssWUFBWTtnQkFBVTs7Ozs7Ozs7Ozs7O0FBR3hFO01BTmdCb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzMzMuanM/NzJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMzMoKXtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe3VybDonJywgdGl0bGVTZWFyY2hTdHJpbmc6Jyd9KVxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihzdGF0ZS51cmwsIGFzeW5jICh1KSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS51cmwgfHwgIXN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nKSByZXR1cm4ge1NlYXJjaDonJ31cclxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJyB8fCBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZyA9PT0nJykgcmV0dXJuIHtTZWFyY2g6Jyd9XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c3RhdGUudXJsfS8/YXBpS2V5PTMxYzhmMTFjJnM9JHtzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ31gKVxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGxldCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlU2VhcmNoU3RyaW5nJykudmFsdWVcclxuICAgICAgICBpZihzID09ICcnKXtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJylcclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9ICcqQ2FtcG8gb2JyaWdhdMOzcmlvJ1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKVxyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnVybCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKHt1cmw6J2h0dHA6Ly93d3cub21kYmFwaS5jb20nLHRpdGxlU2VhcmNoU3RyaW5nOnN9KVxyXG4gICAgICAgICAgICB9ZWxzZSBzZXRTdGF0ZSh7dXJsOicnLHRpdGxlU2VhcmNoU3RyaW5nOiBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRpdGxlPk1vdmllczwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxUaGVGb3JtLz5cclxuICAgICAgICAgICAgPFRoZUxpbmsgdXJsPXtzdGF0ZS51cmx9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdpbmZvJz48L2Rpdj5cclxuICAgICAgICAgICAgPFRoZU1vdmllcyBkYXRhPXtkYXRhID8gZGF0YToge1NlYXJjaDonJ30gfSBzaG93PXtzdGF0ZS51cmwgIT09ICcnfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUZvcm0oKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlU2VhcmNoU3RyaW5nXCI+RmlsdHJvIGRlIFTDrXR1bG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGl0bGVTZWFyY2hTdHJpbmdcIiBuYW1lPVwidGl0bGVTZWFyY2hTdHJpbmdcIiB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cInRydWVcIi8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVNb3ZpZXMoe2RhdGEsc2hvd30pe1xyXG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSBwZXNxdWlzYTwvZGl2PilcclxuICAgIGlmIChkYXRhLlNlYXJjaCA9PT0gJycgKSByZXR1cm4gKDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PilcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKVxyXG4gICAgXHJcbiAgICBpZihkYXRhLlNlYXJjaCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnQnVzY2EgbsOjbyBFbmNvbnRyYWRhJ1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBkYXRhLlNlYXJjaD8ubWFwKCAobSkgPT4gPGRpdiBrZXk9e20uaW1kYklEfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+ICApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUxpbmsoe3VybCwgaGFuZGxlcn0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllczMuanNcIiA+IHt1cmwgPT09ICcnID8gJ01vc3RyYXInIDogJ09jdWx0YXInfSA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJNb3ZpZXMzMyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1cmwiLCJ0aXRsZVNlYXJjaFN0cmluZyIsImRhdGEiLCJlcnJvciIsInUiLCJTZWFyY2giLCJyZXMiLCJmZXRjaCIsImpzb24iLCJvbkNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJkaXYiLCJpbm5lckhUTUwiLCJ0aXRsZSIsIlRoZUZvcm0iLCJUaGVMaW5rIiwiaGFuZGxlciIsImlkIiwiVGhlTW92aWVzIiwic2hvdyIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwidW5kZWZpbmVkIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies33.js\n"));

/***/ })

});