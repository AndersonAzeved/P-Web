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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TheForm: function() { return /* binding */ TheForm; },\n/* harmony export */   TheLink: function() { return /* binding */ TheLink; },\n/* harmony export */   TheMovies: function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies33; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Movies33() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        url: \"\",\n        titleSearchString: \"\"\n    });\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.url, async (u)=>{\n        if (!state.url || !state.titleSearchString) return {\n            Search: \"\"\n        };\n        if (state.url === \"\" || state.titleSearchString === \"\") return {\n            Search: \"\"\n        };\n        const res = await fetch(\"\".concat(state.url, \"/?apiKey=31c8f11c&s=\").concat(state.titleSearchString));\n        const json = await res.json();\n        return json;\n    });\n    const onClickHandler = (e)=>{\n    /*\r\n        e.preventDefault()\r\n        let s = document.getElementById('titleSearchString').value\r\n        if(s == ''){\r\n            let div = document.getElementById('info')\r\n            div.innerHTML = '*Campo obrigatório'\r\n        }else{\r\n            let div = document.getElementById('info')\r\n            div.innerHTML = ''\r\n            if (state.url === '') {\r\n                setState({url:'http://www.omdbapi.com',titleSearchString:s})\r\n            }else setState({url:'',titleSearchString: state.titleSearchString})\r\n        }*/ };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Movies\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheForm, {}, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: state.url,\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"info\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: data ? data : {\n                    Search: \"\"\n                },\n                show: state.url !== \"\"\n            }, void 0, false, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Movies33, \"P5xu9tIXAXGd1K4bXMaWrLHh4lM=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Movies33;\nfunction TheForm() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"titleSearchString\",\n                    children: \"Filtro de T\\xedtulo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"titleSearchString\",\n                    name: \"titleSearchString\",\n                    type: \"text\",\n                    autoComplete: \"true\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_c1 = TheForm;\nfunction TheMovies(param) {\n    let { data, show } = param;\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 58,\n        columnNumber: 24\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 59,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na pesquisa\"\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 60,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 61,\n        columnNumber: 38\n    }, this);\n    let div = document.getElementById(\"info\");\n    if (data.Search == undefined) {\n        div.innerHTML = \"Busca n\\xe3o Encontrada\";\n    } else {\n        var _data_Search;\n        return (_data_Search = data.Search) === null || _data_Search === void 0 ? void 0 : _data_Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, m.imdbID, true, {\n                fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n                lineNumber: 69,\n                columnNumber: 38\n            }, this));\n    }\n}\n_c2 = TheMovies;\nfunction TheLink(param) {\n    let { url, handler } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/movies3.js\",\n            onClick: handler,\n            children: [\n                \" \",\n                url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n            lineNumber: 78,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\P-Web\\\\Receitas\\\\React com NextJS\\\\next-06\\\\pages\\\\movies33.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_c3 = TheLink;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Movies33\");\n$RefreshReg$(_c1, \"TheForm\");\n$RefreshReg$(_c2, \"TheMovies\");\n$RefreshReg$(_c3, \"TheLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/NzJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczMzKCl7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt1cmw6JycsIHRpdGxlU2VhcmNoU3RyaW5nOicnfSlcclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1Ioc3RhdGUudXJsLCBhc3luYyAodSkgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdGUudXJsIHx8ICFzdGF0ZS50aXRsZVNlYXJjaFN0cmluZykgcmV0dXJuIHtTZWFyY2g6Jyd9XHJcbiAgICAgICAgaWYgKHN0YXRlLnVybCA9PT0gJycgfHwgc3RhdGUudGl0bGVTZWFyY2hTdHJpbmcgPT09JycpIHJldHVybiB7U2VhcmNoOicnfVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3N0YXRlLnVybH0vP2FwaUtleT0zMWM4ZjExYyZzPSR7c3RhdGUudGl0bGVTZWFyY2hTdHJpbmd9YClcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4ganNvbjtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSBlID0+IHtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVNlYXJjaFN0cmluZycpLnZhbHVlXHJcbiAgICAgICAgaWYocyA9PSAnJyl7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpXHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSAnKkNhbXBvIG9icmlnYXTDs3JpbydcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJylcclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS51cmwgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7dXJsOidodHRwOi8vd3d3Lm9tZGJhcGkuY29tJyx0aXRsZVNlYXJjaFN0cmluZzpzfSlcclxuICAgICAgICAgICAgfWVsc2Ugc2V0U3RhdGUoe3VybDonJyx0aXRsZVNlYXJjaFN0cmluZzogc3RhdGUudGl0bGVTZWFyY2hTdHJpbmd9KVxyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRpdGxlPk1vdmllczwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxUaGVGb3JtLz5cclxuICAgICAgICAgICAgPFRoZUxpbmsgdXJsPXtzdGF0ZS51cmx9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdpbmZvJz48L2Rpdj5cclxuICAgICAgICAgICAgPFRoZU1vdmllcyBkYXRhPXtkYXRhID8gZGF0YToge1NlYXJjaDonJ30gfSBzaG93PXtzdGF0ZS51cmwgIT09ICcnfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUZvcm0oKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlU2VhcmNoU3RyaW5nXCI+RmlsdHJvIGRlIFTDrXR1bG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGl0bGVTZWFyY2hTdHJpbmdcIiBuYW1lPVwidGl0bGVTZWFyY2hTdHJpbmdcIiB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cInRydWVcIi8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVNb3ZpZXMoe2RhdGEsc2hvd30pe1xyXG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSBwZXNxdWlzYTwvZGl2PilcclxuICAgIGlmIChkYXRhLlNlYXJjaCA9PT0gJycgKSByZXR1cm4gKDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PilcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKVxyXG4gICAgXHJcbiAgICBpZihkYXRhLlNlYXJjaCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnQnVzY2EgbsOjbyBFbmNvbnRyYWRhJ1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBkYXRhLlNlYXJjaD8ubWFwKCAobSkgPT4gPGRpdiBrZXk9e20uaW1kYklEfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+ICApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUxpbmsoe3VybCwgaGFuZGxlcn0pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllczMuanNcIiBvbkNsaWNrPXtoYW5kbGVyfT4ge3VybCA9PT0gJycgPyAnTW9zdHJhcicgOiAnT2N1bHRhcid9IDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk1vdmllczMzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVybCIsInRpdGxlU2VhcmNoU3RyaW5nIiwiZGF0YSIsImVycm9yIiwidSIsIlNlYXJjaCIsInJlcyIsImZldGNoIiwianNvbiIsIm9uQ2xpY2tIYW5kbGVyIiwiZSIsImRpdiIsInRpdGxlIiwiVGhlRm9ybSIsIlRoZUxpbmsiLCJoYW5kbGVyIiwiaWQiLCJUaGVNb3ZpZXMiLCJzaG93IiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsImEiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies33.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});