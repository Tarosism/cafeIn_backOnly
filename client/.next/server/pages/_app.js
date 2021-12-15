"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"/home/taro/forProject/minimum/client/pages/_app.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_configureStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"].withRedux(MyApp)); //리덕스 적용하기\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO1NBRXBDQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNO3VGQUVERCxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVILHVFQUFpQixDQUFDQyxLQUFLLENBQUMsRUFDdkMsQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhcmVtaW5pbXVtX2Rldi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuLy/rpqzrjZXsiqQg7KCB7Jqp7ZWY6riwXG4iXSwibmFtZXMiOlsid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducer/index.js":
/*!**************************!*\
  !*** ./reducer/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducer/user.js\");\n //서버사이드랜더링을 위한 하이드레이트\n\n\n// 컴바인 리듀서를 index 리듀서에 써준다. 이 부분은 스타일인 듯.\n// 리듀서 자체를 다 나눠서 store에서 컴바인을 해줄 수도 있는 거고\n// 이건 하나의 root리듀서 파일에서 컴파인을 한 후에 스토어로 보내는 거고\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    index: (state = {\n    }, action)=>{\n        //이 인덱스 리듀서를 case HYDRATE로 하면 서버사이드 랜더링. 사실 복붙이라 잘 모름\n        switch(action.type){\n            case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n                return {\n                    ...state,\n                    ...action.payload\n                };\n            default:\n                return state;\n        }\n    },\n    userReducer: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2VyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QyxDQUFxQixFQUFrQztBQUM5RDtBQUNQO0FBRWhDLEVBQXlDO0FBQ0ssRUFBTDtBQUNPLEVBQUo7QUFDWSxLQUFuRCxDQUFDRyxXQUFXLEdBQUdGLHNEQUFlLENBQUMsQ0FBQztJQUNuQ0csS0FBSyxHQUFHQyxLQUFLLEdBQUcsQ0FBQztJQUFBLENBQUMsRUFBRUMsTUFBTSxHQUFLLENBQUM7UUFDOUIsRUFBcUQ7UUFDckQsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7WUFDakIsSUFBSSxDQUFDUCx1REFBTztnQkFDVixNQUFNLENBQUMsQ0FBQzt1QkFDSEssS0FBSzt1QkFDTEMsTUFBTSxDQUFDRSxPQUFPO2dCQUNuQixDQUFDOztnQkFFRCxNQUFNLENBQUNILEtBQUs7O0lBRWxCLENBQUM7SUFDREgsV0FBVztBQUNiLENBQUM7QUFFRCxpRUFBZUMsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFyZW1pbmltdW1fZGV2Ly4vcmVkdWNlci9pbmRleC5qcz83ZmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7IC8v7ISc67KE7IKs7J2065Oc656c642U66eB7J2EIOychO2VnCDtlZjsnbTrk5zroIjsnbTtirhcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gXCIuL3VzZXJcIjtcblxuLy8g7Lu067CU7J24IOumrOuTgOyEnOulvCBpbmRleCDrpqzrk4DshJzsl5Ag7I2o7KSA64ukLiDsnbQg67aA67aE7J2AIOyKpO2DgOydvOyduCDrk68uXG4vLyDrpqzrk4DshJwg7J6Q7LK066W8IOuLpCDrgpjriKDshJwgc3RvcmXsl5DshJwg7Lu067CU7J247J2EIO2VtOykhCDsiJjrj4Qg7J6I64qUIOqxsOqzoFxuLy8g7J206rG0IO2VmOuCmOydmCByb29066as65OA7IScIO2MjOydvOyXkOyEnCDsu7TtjIzsnbjsnYQg7ZWcIO2bhOyXkCDsiqTthqDslrTroZwg67O064K064qUIOqxsOqzoFxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIC8v7J20IOyduOuNseyKpCDrpqzrk4DshJzrpbwgY2FzZSBIWURSQVRF66GcIO2VmOuptCDshJzrsoTsgqzsnbTrk5wg656c642U66eBLiDsgqzsi6Qg67O167aZ7J206528IOyemCDrqqjrpoRcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEhZRFJBVEU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LFxuICB1c2VyUmVkdWNlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJIWURSQVRFIiwiY29tYmluZVJlZHVjZXJzIiwidXNlclJlZHVjZXIiLCJyb290UmVkdWNlciIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducer/index.js\n");

/***/ }),

/***/ "./reducer/type.js":
/*!*************************!*\
  !*** ./reducer/type.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOG_IN\": () => (/* binding */ LOG_IN),\n/* harmony export */   \"LOG_OUT\": () => (/* binding */ LOG_OUT)\n/* harmony export */ });\nconst LOG_IN = \"LOG_IN\";\nconst LOG_OUT = \"LOG_OUT\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2VyL3R5cGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxLQUFLLENBQUNBLE1BQU0sR0FBRyxDQUFRO0FBQ3ZCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXJlbWluaW11bV9kZXYvLi9yZWR1Y2VyL3R5cGUuanM/YzNjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTE9HX0lOID0gXCJMT0dfSU5cIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gXCJMT0dfT1VUXCI7XG4iXSwibmFtZXMiOlsiTE9HX0lOIiwiTE9HX09VVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducer/type.js\n");

/***/ }),

/***/ "./reducer/user.js":
/*!*************************!*\
  !*** ./reducer/user.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initalState\": () => (/* binding */ initalState),\n/* harmony export */   \"loginAction\": () => (/* binding */ loginAction),\n/* harmony export */   \"logoutAction\": () => (/* binding */ logoutAction),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ \"./reducer/type.js\");\n\n//리덕스 부분은 사실 가물가물한데 다시 천천히 짚어보면 할 수 있을 것 같음\nconst initalState = {\n    isLoggedIn: false,\n    me: null\n};\nconst loginAction = (data)=>{\n    return {\n        type: _type__WEBPACK_IMPORTED_MODULE_0__.LOG_IN,\n        data\n    };\n};\nconst logoutAction = ()=>{\n    return {\n        type: _type__WEBPACK_IMPORTED_MODULE_0__.LOG_OUT\n    };\n};\nconst userReducer = (state = initalState, action)=>{\n    switch(action.type){\n        case _type__WEBPACK_IMPORTED_MODULE_0__.LOG_IN:\n            return {\n                ...state,\n                isLoggedIn: true,\n                me: action.data\n            };\n        case _type__WEBPACK_IMPORTED_MODULE_0__.LOG_OUT:\n            return {\n                ...state,\n                isLoggedIn: false,\n                me: null\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2VyL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDeEMsRUFBMkM7QUFDcEMsS0FBSyxDQUFDRSxXQUFXLEdBQUcsQ0FBQztJQUMxQkMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLEVBQUUsRUFBRSxJQUFJO0FBQ1YsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsV0FBVyxJQUFJQyxJQUFJLEdBQUssQ0FBQztJQUNwQyxNQUFNLENBQUMsQ0FBQztRQUNOQyxJQUFJLEVBQUVQLHlDQUFNO1FBQ1pNLElBQUk7SUFDTixDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQ0UsWUFBWSxPQUFTLENBQUM7SUFDakMsTUFBTSxDQUFDLENBQUM7UUFDTkQsSUFBSSxFQUFFTiwwQ0FBTztJQUNmLENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxDQUFDUSxXQUFXLElBQUlDLEtBQUssR0FBR1IsV0FBVyxFQUFFUyxNQUFNLEdBQUssQ0FBQztJQUNwRCxNQUFNLENBQUVBLE1BQU0sQ0FBQ0osSUFBSTtRQUNqQixJQUFJLENBQUNQLHlDQUFNO1lBQ1QsTUFBTSxDQUFDLENBQUM7bUJBQ0hVLEtBQUs7Z0JBQ1JQLFVBQVUsRUFBRSxJQUFJO2dCQUNoQkMsRUFBRSxFQUFFTyxNQUFNLENBQUNMLElBQUk7WUFDakIsQ0FBQztRQUNILElBQUksQ0FBQ0wsMENBQU87WUFDVixNQUFNLENBQUMsQ0FBQzttQkFDSFMsS0FBSztnQkFDUlAsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCQyxFQUFFLEVBQUUsSUFBSTtZQUNWLENBQUM7O1lBRUQsTUFBTSxDQUFDTSxLQUFLOztBQUVsQixDQUFDO0FBRUQsaUVBQWVELFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhcmVtaW5pbXVtX2Rldi8uL3JlZHVjZXIvdXNlci5qcz9hNmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPR19JTiwgTE9HX09VVCB9IGZyb20gXCIuL3R5cGVcIjtcbi8v66as642V7IqkIOu2gOu2hOydgCDsgqzsi6Qg6rCA66y86rCA66y87ZWc642wIOuLpOyLnCDsspzsspztnogg7Kea7Ja067O066m0IO2VoCDsiJgg7J6I7J2EIOqygyDqsJnsnYxcbmV4cG9ydCBjb25zdCBpbml0YWxTdGF0ZSA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIG1lOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dfSU4sXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HX09VVCxcbiAgfTtcbn07XG5cbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0dfSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgbWU6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIExPR19PVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIG1lOiBudWxsLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJMT0dfSU4iLCJMT0dfT1VUIiwiaW5pdGFsU3RhdGUiLCJpc0xvZ2dlZEluIiwibWUiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducer/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducer */ \"./reducer/index.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n//성크는 아직 안 쓴 거고, 로거는 데브툴즈 써서 필요가 없는 거임\nconst configureStore = ()=>{\n    const middlewere = [];\n    const enhancer =  false ? 0 //개발용 미들웨어 설정\n     : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewere)); //배포용 미들웨어 설정(devtool연결)\n    const stroe = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n    return stroe;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {\n    debug: \"development\" === \"development\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVztBQUNDO0FBQzFCO0FBQ0g7QUFDRjtBQUMvQixFQUFzQztBQUVZLEtBQTdDLENBQUNRLGNBQWMsT0FBUyxDQUFDO0lBQzVCLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNyQixLQUFLLENBQUNDLFFBQVEsR0FWaEIsTUFXeUMsR0FDakNQLENBQXdDLENBQWEsRUFBa0I7T0FDckRDLDZFQUFDLENBQUNGLHNEQUFlLElBQUlPLFVBQVUsR0FBSSxDQUF3QjtJQUNuRixLQUFLLENBQUNFLEtBQUssR0FBR1Ysa0RBQVcsQ0FBQ0ksZ0RBQVcsRUFBRUssUUFBUTtJQUMvQyxNQUFNLENBQUNDLEtBQUs7QUFDZCxDQUFDO0FBRUQsS0FBSyxDQUFDQyxPQUFPLEdBQUdaLGlFQUFhLENBQUNRLGNBQWMsRUFBRSxDQUFDO0lBQzdDSyxLQUFLLEVBbkJQLENBQWEsaUJBbUJxQixDQUFhO0FBQy9DLENBQUM7QUFFRCxpRUFBZUQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFyZW1pbmltdW1fZGV2Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanM/ZjIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlclwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG4vL+yEse2BrOuKlCDslYTsp4Eg7JWIIOyTtCDqsbDqs6AsIOuhnOqxsOuKlCDrjbDruIztiLTspogg7I2o7IScIO2VhOyalOqwgCDsl4bripQg6rGw7J6EXG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBtaWRkbGV3ZXJlID0gW107XG4gIGNvbnN0IGVuaGFuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2VyZSkpIC8v6rCc67Cc7JqpIOuvuOuTpOybqOyWtCDshKTsoJVcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2VyZSkpOyAvL+uwsO2PrOyaqSDrr7jrk6Tsm6jslrQg7ISk7KCVKGRldnRvb2zsl7DqsrApXG4gIGNvbnN0IHN0cm9lID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGVuaGFuY2VyKTtcbiAgcmV0dXJuIHN0cm9lO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVXcmFwcGVyIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJvb3RSZWR1Y2VyIiwibG9nZ2VyIiwidGh1bmsiLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdlcmUiLCJlbmhhbmNlciIsInN0cm9lIiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();