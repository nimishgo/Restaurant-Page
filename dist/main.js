/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Stardew.jpg */ \"./src/assets/Stardew.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Silkscreen&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --backgroundColor : #fef3c7    ;\\n    --borderColor : #92400e;\\n    --menuColor : #fed7aa;\\n    --navbarColor : #7f1d1d;\\n    --hover : #f97316;\\n    --fontColor : #292524;\\n}\\n\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml {\\n    font-size: 16px;\\n}\\n\\nbody {\\n    margin: 0;\\n    height: 100vh;\\n    background-color: var(--backgroundColor);\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;   \\n}\\n\\n.heading {\\n    display: flex;\\n    font-family: 'Bungee Inline', cursive;\\n    color: #ffd900f8;\\n    min-width: 100vw;\\n    min-height: 10vh;\\n    justify-content: center;\\n    align-items: center;\\n    border: 15px outset var(--borderColor);\\n    background-color: #f8853d;\\n}\\n.navbar {\\n    display: grid;\\n    grid-template-columns: repeat(3 , 1fr);\\n}\\n.navbar >* {\\n    border: 5px ridge var(--borderColor);\\n    color: #ffd900f8;\\n    font-family: 'Bungee Inline', cursive;\\n    font-size: 1.5rem;\\n    background-color: var(--borderColor);\\n}\\n\\nbutton:hover {\\n    color: white;    \\n}\\n\\n.footer {\\n  position: fixed;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  height: 40px;\\n  background-color: var(--navbarColor) ;\\n  border: 5px ridge var(--borderColor);\\n  color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\na {\\n    text-decoration: none;\\n    color: white;\\n}\\n\\n.description {\\n    display: flex;\\n    font-family: 'Silkscreen', cursive;\\n    margin: 50px auto 0px auto;\\n    height: 30vh;\\n    width: 80vw;\\n    max-width: 60vw;\\n    padding: 50px;\\n    color: #ffd700;\\n    background-color: var(--fontColor);\\n    justify-content: center;\\n    align-items: center;\\n    border: 30px ridge var(--borderColor);\\n    overflow : hidden;\\n}\\n\\n.quote {\\n    margin: 250px auto 0px auto;\\n    font-family: 'Bungee Inline', cursive;\\n    max-width: 60vw;\\n    max-height: 40vh;\\n    background: #eee;\\n    border: 2px solid #292524;\\n    border-radius: 1em;\\n    padding: 20px;\\n  }\\n\\n\\n.quote figcaption,\\n.quote blockquote {\\n    margin: 1em;\\n  }\\n  \\n.quote .caption {\\n    text-align: end;\\n}\\n\\n.saloonImg {\\n    width: 150px;\\n    height: 150px;\\n    margin-right: 10px;\\n}\\n\\n.cardGrid {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill , 150px);\\n    background-color: #fed7aa;\\n    max-width: 600px;\\n    height: 50vh;\\n    margin: 100px auto;\\n    padding: 8px;\\n    gap: 10px;\\n    justify-content: center;\\n    align-items: center;\\n    opacity: 0.9;\\n    border: 10px ridge #C0C0C0\\t;\\n}\\n\\n.cards {\\n    display: flex;\\n    font-family: 'Silkscreen', cursive;\\n    color: #ffd700;\\n    font-size: 12px;\\n    font-weight: bolder;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    width: 140px;\\n    height: 100px;\\n    background-color: #f97316;\\n    border-radius: 1em;\\n    border: 5px ridge var(--borderColor);\\n}\\n\\n.cardContacts {\\n    background-color: #292524;\\n    color: #ffd700;\\n    display: grid;\\n    grid-template-columns: repeat(2,1fr);\\n    padding: 15px;\\n    width: 800px;\\n    height: auto;\\n    margin: 100px auto 0 auto;\\n    /* justify-content: center; */\\n    justify-items : center;\\n    align-content: center;\\n    border: 20px ridge var(--borderColor);\\n}\\n\\n.cardContacts img {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px;\\n    width: auto;\\n}\\n\\n.cardContacts table td {\\n    padding: 5px;\\n    font-family: 'Silkscreen', cursive;\\n    justify-content: center;\\n    align-items: center;\\n    border : 5px ridge var(--borderColor);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_Gus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Gus.png */ \"./src/assets/Gus.png\");\n\n\nfunction contactContent() {\n    const content = document.getElementById(\"insideTab\");\n\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n\n    const cardContacts = document.createElement(\"div\");\n    cardContacts.classList.add(\"cardContacts\");\n\n    const gusImg = document.createElement(\"img\");\n    gusImg.src = _assets_Gus_png__WEBPACK_IMPORTED_MODULE_0__;\n    cardContacts.appendChild(gusImg);\n\n    const contactTable = document.createElement(\"table\");\n    const tableRow = document.createElement(\"tr\");\n    const tableTime = document.createElement(\"td\");\n    const tableTvalue = document.createElement(\"td\");\n\n    tableTime.textContent =  \"Opening Hours\";\n    tableTvalue.textContent = \"12:00pm to 12:00am\"\n\n    const tableRow1 = document.createElement(\"tr\");\n    const tableAddress = document.createElement(\"td\");\n    const tableAvalue = document.createElement(\"td\");\n\n    tableAddress.textContent = \"Address\";\n    tableAvalue.textContent = \"Pelican Town\";\n\n    const tableRow2 = document.createElement(\"tr\");\n    const tableNumber = document.createElement(\"td\");\n    const tableNvalue = document.createElement(\"td\");\n\n    tableNumber.textContent = \"Contact No.\";\n    tableNvalue.textContent = \"+007 6969420\"\n\n    cardContacts.appendChild(contactTable);\n    contactTable.appendChild(tableRow);\n    contactTable.appendChild(tableRow1);\n    contactTable.appendChild(tableRow2);\n\n\n    tableRow.appendChild(tableTime);\n    tableRow.appendChild(tableTvalue);\n\n    tableRow1.appendChild(tableAddress);\n    tableRow1.appendChild(tableAvalue);\n\n    tableRow2.appendChild(tableNumber);\n    tableRow2.appendChild(tableNvalue);\n\n\n    content.appendChild(cardContacts);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contacts.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_Saloon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Saloon.png */ \"./src/assets/Saloon.png\");\n\n\nconst homeContent = () => {\n    const content = document.getElementById(\"insideTab\");\n\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n    const description = document.createElement(\"div\");\n    const para = document.createElement(\"p\");\n    const img = document.createElement(\"img\");\n\n    img.classList.add(\"saloonImg\");\n    img.src = _assets_Saloon_png__WEBPACK_IMPORTED_MODULE_0__;\n\n\n    para.textContent = \"The Stardrop Saloon is the main bar/restaurant in Stardew Valley. It located toward the center of Pelican Town. The owner of the Saloon is Gus who also lives there.\";\n\n    description.classList.add(\"description\");\n\n    description.appendChild(img);\n    description.appendChild(para);\n\n    \n    const quote = document.createElement(\"blockquote\");\n    quote.textContent = \"???Hungry? Thirsty? I've got just the thing!???\";\n    quote.classList.add(\"quote\");\n    \n    const caption = document.createElement(\"figcaption\");\n    caption.classList.add(\"caption\");\n    \n    caption.innerHTML = `&mdash; Gus,\n    <cite>Stardew Valley wikiFandom</cite>`;\n    quote.appendChild(caption);\n    content.appendChild(description);\n    content.appendChild(quote);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.js */ \"./src/contacts.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\n\nconst load = (() => {\n    const content = document.getElementById(\"content\");\n\n    const header = document.createElement(\"h1\");\n    const navbar = document.createElement(\"div\");\n    const insideTab = document.createElement(\"div\");\n    const footer = document.createElement(\"div\");\n\n    const home = document.createElement(\"button\");\n    const menu = document.createElement(\"button\");\n    const contacts = document.createElement(\"button\");\n    \n    \n    home.setAttribute('id','home');\n    menu.setAttribute('id','menu');\n    contacts.setAttribute('id','contacts');\n    insideTab.setAttribute('id','insideTab');\n    \n    header.classList.add(\"heading\");\n    navbar.classList.add(\"navbar\");\n    footer.classList.add(\"footer\");\n    \n    header.textContent = \"The Stardrop Saloon\";\n    \n    home.textContent = \"Home\";\n    menu.textContent = \"Menu\";\n    contacts.textContent = \"Contacts\";  \n    footer.innerHTML = `<p>Created by <a href=\"https://github.com/nimishgo\">nimishgo</a></p>`;\n    \n    navbar.appendChild(home);\n    navbar.appendChild(menu);\n    navbar.appendChild(contacts);\n    \n    content.appendChild(header);\n    content.appendChild(navbar);\n    content.appendChild(insideTab);\n    content.appendChild(footer);\n})();\n\ninit();\nfunction other() {\n    const home = document.getElementById(\"home\");\n    const menu = document.getElementById(\"menu\");\n    const contacts = document.getElementById(\"contacts\");\n        \n    home.addEventListener(\"click\",_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    menu.addEventListener(\"click\",_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    contacts.addEventListener(\"click\",_contacts_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}\n\nfunction init() {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    other();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_Beer_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Beer.png */ \"./src/assets/Beer.png\");\n/* harmony import */ var _assets_Bread_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Bread.png */ \"./src/assets/Bread.png\");\n/* harmony import */ var _assets_Coffee_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Coffee.png */ \"./src/assets/Coffee.png\");\n/* harmony import */ var _assets_Pizza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/Pizza.png */ \"./src/assets/Pizza.png\");\n/* harmony import */ var _assets_Salad_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/Salad.png */ \"./src/assets/Salad.png\");\n/* harmony import */ var _assets_Spaghetti_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Spaghetti.png */ \"./src/assets/Spaghetti.png\");\n\n\n\n\n\n\n\nconst menuContent = () => {\n    const content = document.getElementById(\"insideTab\");\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n\n    const menuCard = document.createElement(\"div\");\n    menuCard.classList.add(\"cardGrid\");\n\n    const createDishCard = (img,name,price) => {\n        const dishCard = document.createElement(\"div\");\n        dishCard.classList.add(\"cards\");\n\n        const dishImage = document.createElement(\"img\");\n        dishImage.src = img;\n        dishImage.alt = name;\n\n        const  dishName = document.createElement(\"figcaption\");\n        dishName.textContent = name + \" \" + price;\n\n        dishCard.appendChild(dishImage);\n        dishCard.appendChild(dishName);\n\n        return dishCard;\n    }\n\n    const dishes = [\n        createDishCard(_assets_Beer_png__WEBPACK_IMPORTED_MODULE_0__,\"Beer\",\"400g\"),\n        createDishCard(_assets_Salad_png__WEBPACK_IMPORTED_MODULE_4__,\"Salad\",\"220g\"),\n        createDishCard(_assets_Bread_png__WEBPACK_IMPORTED_MODULE_1__,\"Bread\",\"120g\"),\n        createDishCard(_assets_Spaghetti_png__WEBPACK_IMPORTED_MODULE_5__,\"Spaghetti\",\"240g\"),\n        createDishCard(_assets_Pizza_png__WEBPACK_IMPORTED_MODULE_3__,\"Pizza\",\"600g\"),\n        createDishCard(_assets_Coffee_png__WEBPACK_IMPORTED_MODULE_2__,\"Coffee\",\"400g\"),\n    ];\n\n    dishes.forEach((value) => {\n        menuCard.appendChild(value);\n    });\n    content.appendChild(menuCard);\n    // return menuCard;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/Beer.png":
/*!*****************************!*\
  !*** ./src/assets/Beer.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9fcd9b34ee15fb3d2d64.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Beer.png?");

/***/ }),

/***/ "./src/assets/Bread.png":
/*!******************************!*\
  !*** ./src/assets/Bread.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84ed7e379ba8b5e15a89.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Bread.png?");

/***/ }),

/***/ "./src/assets/Coffee.png":
/*!*******************************!*\
  !*** ./src/assets/Coffee.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"247f7c5948dd0f4a459b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Coffee.png?");

/***/ }),

/***/ "./src/assets/Gus.png":
/*!****************************!*\
  !*** ./src/assets/Gus.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c0894c66b884366f088.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Gus.png?");

/***/ }),

/***/ "./src/assets/Pizza.png":
/*!******************************!*\
  !*** ./src/assets/Pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"074c4abfa282309cf0dd.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Pizza.png?");

/***/ }),

/***/ "./src/assets/Salad.png":
/*!******************************!*\
  !*** ./src/assets/Salad.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9757c735a8bafcc0f421.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Salad.png?");

/***/ }),

/***/ "./src/assets/Saloon.png":
/*!*******************************!*\
  !*** ./src/assets/Saloon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c602c843815d3501d77f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Saloon.png?");

/***/ }),

/***/ "./src/assets/Spaghetti.png":
/*!**********************************!*\
  !*** ./src/assets/Spaghetti.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c2e08a945077b3196c58.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Spaghetti.png?");

/***/ }),

/***/ "./src/assets/Stardew.jpg":
/*!********************************!*\
  !*** ./src/assets/Stardew.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"924a2d3373c6d349141c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Stardew.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;