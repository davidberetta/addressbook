webpackJsonp([2],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#search-bar {\r\n  padding-top: 7px;\r\n}\r\n\r\n.panel-info {\r\n  min-height: 300px;\r\n}\r\n\r\ndiv.page-header {\r\n  margin: 0px;\r\n}\r\n\r\n.label {\r\n  margin-left: 3px;\r\n  padding: .4em .6em .4em .6em !important;\r\n}\r\n\r\n#contact-summary {\r\n  cursor: pointer;\r\n  transition: opacity 0.3s ease-in-out;\r\n  -webkit-transition: opacity 0.3s ease-in-out;\r\n  -o-transition: opacity 0.3s ease-in-out;\r\n  -moz-transition: opacity 0.3s ease-in-out;\r\n  opacity: 0.8;\r\n}\r\n\r\n#contact-summary:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.panel .panel-heading {\r\n  padding: 12px 4px 11px 15px;\r\n}\r\n\r\n.panel .panel-heading .panel-title {\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n}\r\n\r\n.panel .panel-body h4 {\r\n  font-size: 16px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#search-tags-list.dropdown-menu {\r\n  overflow-y: auto;\r\n  max-height: 200px;\r\n  min-width: 300px;\r\n  display: block !important;\r\n  left: inherit !important;\r\n  margin-top: -4px;\r\n}\r\n\r\n#tag-control-dropdown {\r\n  display: block !important;\r\n}\r\n\r\n#tag-control-wrapper {\r\n  float: right;\r\n  padding: 5px;\r\n}\r\n\r\n#tag-control button {\r\n  z-index: 50;\r\n}\r\n\r\n#tag-control-dropdown {\r\n  min-width: 250px;\r\n}\r\n\r\n\r\n.tag-options {\r\n  float: right;\r\n  font-size: 12px;\r\n  padding: 4px 6px 2px 2px;\r\n  display: none;\r\n}\r\n\r\n#tag-item:hover {\r\n  background: #eee;\r\n}\r\n\r\n#tag-item:hover > .tag-options {\r\n  display: block;\r\n}\r\n\r\n#tag-control .tag-options .glyphicon {\r\n  cursor: pointer;\r\n}\r\n\r\n#tag-control #new-tag-form {\r\n  padding: 6px 6px 2px 6px;\r\n}\r\n\r\n#tag-control #edit-tag-form {\r\n  display: inline-block;\r\n}\r\n\r\n#tag-control .tag-list {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n#tag-control .tag-options .glyphicon.glyphicon-pencil {\r\n  padding-right: 6px;\r\n}\r\n\r\n#tag-control .tag-list {\r\n  overflow-y: auto;\r\n  max-height: 150px;\r\n}\r\n\r\n#tag-control .tag-list .tag-item {\r\n  padding: 4px;\r\n}\r\n\r\n#tag-control .tag-list .tag-item label {\r\n  margin: 0px;\r\n  vertical-align: middle;\r\n  font-weight: normal;\r\n  padding-left: 10px;\r\n}\r\n\r\n#tag-control .tag-list .tag-item input[type=checkbox] {\r\n  vertical-align: middle;\r\n  margin: 0px 0px 0px 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n  #tag-control .tag-list .tag-item input[type=text] {\r\n    padding: 1px 1px 1px 8px ;\r\n    height: initial;\r\n  }\r\n\r\n\r\n.sk-circle {\r\n  margin: 100px auto;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative;\r\n}\r\n.sk-circle .sk-child {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.sk-circle .sk-child:before {\r\n  content: '';\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 15%;\r\n  height: 15%;\r\n  background-color: #4169e1;\r\n  border-radius: 100%;\r\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\r\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\r\n}\r\n.sk-circle .sk-circle2 {\r\n  -webkit-transform: rotate(30deg);\r\n  transform: rotate(30deg); }\r\n.sk-circle .sk-circle3 {\r\n  -webkit-transform: rotate(60deg);\r\n  transform: rotate(60deg); }\r\n.sk-circle .sk-circle4 {\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg); }\r\n.sk-circle .sk-circle5 {\r\n  -webkit-transform: rotate(120deg);\r\n  transform: rotate(120deg); }\r\n.sk-circle .sk-circle6 {\r\n  -webkit-transform: rotate(150deg);\r\n  transform: rotate(150deg); }\r\n.sk-circle .sk-circle7 {\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg); }\r\n.sk-circle .sk-circle8 {\r\n  -webkit-transform: rotate(210deg);\r\n  transform: rotate(210deg); }\r\n.sk-circle .sk-circle9 {\r\n  -webkit-transform: rotate(240deg);\r\n  transform: rotate(240deg); }\r\n.sk-circle .sk-circle10 {\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg); }\r\n.sk-circle .sk-circle11 {\r\n  -webkit-transform: rotate(300deg);\r\n  transform: rotate(300deg); }\r\n.sk-circle .sk-circle12 {\r\n  -webkit-transform: rotate(330deg);\r\n  transform: rotate(330deg); }\r\n.sk-circle .sk-circle2:before {\r\n  -webkit-animation-delay: -1.1s;\r\n  animation-delay: -1.1s; }\r\n.sk-circle .sk-circle3:before {\r\n  -webkit-animation-delay: -1s;\r\n  animation-delay: -1s; }\r\n.sk-circle .sk-circle4:before {\r\n  -webkit-animation-delay: -0.9s;\r\n  animation-delay: -0.9s; }\r\n.sk-circle .sk-circle5:before {\r\n  -webkit-animation-delay: -0.8s;\r\n  animation-delay: -0.8s; }\r\n.sk-circle .sk-circle6:before {\r\n  -webkit-animation-delay: -0.7s;\r\n  animation-delay: -0.7s; }\r\n.sk-circle .sk-circle7:before {\r\n  -webkit-animation-delay: -0.6s;\r\n  animation-delay: -0.6s; }\r\n.sk-circle .sk-circle8:before {\r\n  -webkit-animation-delay: -0.5s;\r\n  animation-delay: -0.5s; }\r\n.sk-circle .sk-circle9:before {\r\n  -webkit-animation-delay: -0.4s;\r\n  animation-delay: -0.4s; }\r\n.sk-circle .sk-circle10:before {\r\n  -webkit-animation-delay: -0.3s;\r\n  animation-delay: -0.3s; }\r\n.sk-circle .sk-circle11:before {\r\n  -webkit-animation-delay: -0.2s;\r\n  animation-delay: -0.2s; }\r\n.sk-circle .sk-circle12:before {\r\n  -webkit-animation-delay: -0.1s;\r\n  animation-delay: -0.1s; }\r\n\r\n@-webkit-keyframes sk-circleBounceDelay {\r\n  0%, 80%, 100% {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n  } 40% {\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes sk-circleBounceDelay {\r\n  0%, 80%, 100% {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n  } 40% {\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n    }\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map