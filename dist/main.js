!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.xrender=e():t.xrender=e()}(window,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),i=f(n(2)),o=f(n(16)),r=f(n(15)),a=f(n(4)),l=f(n(1)),u=f(n(3)),c=f(n(14));function f(t){return t&&t.__esModule?t:{default:t}}var h=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.id=l.default.guid(),s.style=Object.assign({},o.default),s.attr=Object.assign({},r.default),s.setStype(t,!1),s.setAttr(n,!1),l.default.mixin(s,c.default),s.children=[],s.needCheck=!1,s.parent=null,s.isPointInPath=!1,s.mouseStatus=[],s.offsetChangeAble=!0,s._checkCursor(),i.default.on("canvas/mousemove",function(t){var e=t.x,n=t.y;if(!0!==s.attr.ignore&&s.context){s._setMouseLocation(e,n);var i=s._checkPointInPath();if(!1===i&&(s.recoredMouseStatus(!1),s.fireMouseLeaveEvents()),i)return s}}).on("canvas/click",function(t){var e=t.x,n=t.y;if(!0!==s.attr.ignore&&s.context&&(s._setMouseLocation(e,n),s._checkPointInPath()))return s}).on("canvas/mousedown",function(t){var e=t.x,n=t.y;if(!0!==s.attr.ignore&&s.context&&(s._setMouseLocation(e,n),s._checkPointInPath()))return s}),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),s(e,[{key:"_setMouseLocation",value:function(t,e){this.mouseX=t,this.mouseY=e,this._setOffsetPosition()}},{key:"_setOffsetPosition",value:function(){this.offsetChangeAble&&(this.offsetX=this.mouseX-this.style.start.x,this.offsetY=this.mouseY-this.style.start.y)}},{key:"_setDraggingPos",value:function(){this.setStype({start:{x:this.mouseX-this.offsetX,y:this.mouseY-this.offsetY}})}},{key:"_checkPointInPath",value:function(){this._renderSelf(this.context2);var t;return t=this.context2.isPointInPath(this.mouseX*this.canvasScale,this.mouseY*this.canvasScale),this.context2.closePath(),t}},{key:"_renderSelf",value:function(){}},{key:"_renderChildren",value:function(){this.children.sort(function(t,e){return t.style["z-index"]>e.style["z-index"]}).forEach(function(t){t.render()})}},{key:"_setEnvo",value:function(t){this.envoParams=t,l.default.mixin(this,t)}},{key:"_checkCursor",value:function(){var t=this;"default"!==this.style.cursor&&!0!==this.usedCursor&&(this.usedCursor=!0,this.on("mouseenter",function(){t.canvas.style.cursor=t.style.cursor}),this.on("mouseleave",function(){t.canvas.style.cursor="default"}))}},{key:"render",value:function(){!0!==this.attr.ignore&&this.context&&(this.renderIndex=this.envoParams.renderIndex+1,this.envoParams.renderIndex=this.renderIndex,this._renderSelf(),this._renderChildren())}},{key:"lockOffset",value:function(){this.offsetChangeAble=!1}},{key:"unlockOffset",value:function(){this.offsetChangeAble=!0}},{key:"setStype",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.default.mixin(this.style,t),this.originStyle=l.default.clone(this.style),this._checkCursor(),e&&i.default.trigger("repaint")}},{key:"setAttr",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l.default.mixin(this.attr,t),this.attr.draggable&&u.default.init(this),e&&i.default.trigger("repaint")}},{key:"addChild",value:function(t){t._setEnvo(this.envoParams),t.setParent(this),this.children.push(t)}},{key:"delChild",value:function(){}},{key:"setParent",value:function(t){this.parent=t}}]),e}();e.default=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(5),r=(s=o)&&s.__esModule?s:{default:s};var a=(new Date).getTime();e.default={mixin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(function(n){t[n]=e[n]})},guid:function(){return a++},getArrayGroupByAttr:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s={};return e.forEach(function(e){var i=t.getValueByAttr(e,n);s[i]?s[i].push(e):s[i]=[e]}),s},getObjectKeys:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.keys(t).forEach(function(o){"object"===i(t[o])?e.getObjectKeys(t[o],o,s):"number"==typeof t[o]?n?s[n+"."+o]=t[o]:s[o]=t[o]:"string"==typeof t[o]&&r.default.checkColor(t[o]).isColor&&(s[o]=t[o])}),s},getValueByAttr:function(t,e){return e.split(".").forEach(function(e){t=t[e]}),t},setValueByAttr:function(t,e,n){var s=e.split(".");if(1===s.length)t[e]=n;else{var i=s.splice(-1)[0],o=t;s.forEach(function(e){t[e]||(t[e]={}),o=t[e]}),o[i]=n}},getTopNode:function(t){var e=0,n=null;return t.forEach(function(t){t.renderIndex>e&&(n=t,e=t.renderIndex)}),n},isHans:function(t){return/^[\u3220-\uFA29]+$/.test(t)},clone:function(t){if("object"!==(void 0===t?"undefined":i(t)))return t;var e={};for(var n in t)e[n]=this.clone(t[n]);return e}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=n(1),o=(s=i)&&s.__esModule?s:{default:s};var r={};e.default={trigger:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r[t];if(n){if("canvas/mousemove"===t){var s=[];n.forEach(function(t){var n=t(e);n&&s.push(n)});var i=o.default.getTopNode(s);return i&&i.fireMouseMoveEvents(),void s.forEach(function(t){t!==i&&t.fireMoveNotInPath()})}if("canvas/click"===t){var a=[];n.forEach(function(t){var n=t(e);n&&a.push(n)});var l=o.default.getTopNode(a);return void(l&&l.fireEvent("click"))}if("canvas/mousedown"===t){var u=[];n.forEach(function(t){var n=t(e);n&&u.push(n)});var c=o.default.getTopNode(u);return void(c&&c.fireEvent("mousedown"))}n.forEach(function(t){t(e)})}},on:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return r[t]?r[t].push(e):r[t]=[e],this}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=void 0;function i(t){t.attr.draggable&&((s=t).dragging=!0,s.lockOffset(),s.fireEvent("startDrag"))}function o(){s&&s.dragging&&(s.dragging=!1,s.unlockOffset(),s.fireEvent("stopDrag"))}e.default={init:function(t){t.attr.draggable?t.on("mousedown",i):t.off("mousedown",i)},setRender:function(t){!function(t){t.on("mousemove",function(){s&&s.dragging&&(s._setDraggingPos(),s.fireEvent("duringDrag"))}),t.on("mouseup",function(){o()}),t.on("mouseleave",function(){o()})}(t)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={}}return s(t,[{key:"on",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.events[t]?this.events[t].push(e):this.events[t]=[e]}},{key:"off",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];if(e){var n=this.events[t].indexOf(e);-1!==n&&(this.events[t]=this.events[t].splice(n,1))}else this.events[t]=[]}},{key:"getEventCallbacks",value:function(t){return this.events[t]?this.events[t]:[]}},{key:"fireEvent",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.getEventCallbacks(t).length&&this.events[t].forEach(function(t){t(e,n)})}},{key:"fireMouseMoveEvents",value:function(){this.recoredMouseStatus(!0);var t=this.mouseStatus.length,e=this.mouseStatus[t-1],n=this.mouseStatus[t-2];!0===e&&!1===n&&this.fireEvent("mouseenter"),this.fireEvent("mousemove")}},{key:"fireMouseLeaveEvents",value:function(){var t=this.mouseStatus.length,e=this.mouseStatus[t-1],n=this.mouseStatus[t-2];!1===e&&!0===n&&this.fireEvent("mouseleave")}},{key:"recoredMouseStatus",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.mouseStatus.push(t),this.mouseStatus=this.mouseStatus.slice(-2)}},{key:"fireClickEvents",value:function(){this.fireEvent("click")}},{key:"fireMoveNotInPath",value:function(){this.recoredMouseStatus(!1),this.fireMouseLeaveEvents()}}]),t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,i=/^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/,o={ALICEBLUE:"#F0F8FF",ANTIQUEWHITE:"#FAEBD7",AQUA:"#00FFFF",AQUAMARINE:"#7FFFD4",AZURE:"#F0FFFF",BEIGE:"#F5F5DC",BISQUE:"#FFE4C4",BLACK:"#000000",BLANCHEDALMOND:"#FFEBCD",BLUE:"#0000FF",BLUEVIOLET:"#8A2BE2",BROWN:"#A52A2A",BURLYWOOD:"#DEB887",CADETBLUE:"#5F9EA0",CHARTREUSE:"#7FFF00",CHOCOLATE:"#D2691E",CORAL:"#FF7F50",CORNFLOWERBLUE:"#6495ED",CORNSILK:"#FFF8DC",CRIMSON:"#DC143C",CYAN:"#00FFFF",DARKBLUE:"#00008B",DARKCYAN:"#008B8B",DARKGOLDENROD:"#B8860B",DARKGRAY:"#A9A9A9",DARKGREEN:"#006400",DARKKHAKI:"#BDB76B",DARKMAGENTA:"#8B008B",DARKOLIVEGREEN:"#556B2F",DARKORANGE:"#FF8C00",DARKORCHID:"#9932CC",DARKRED:"#8B0000",DARKSALMON:"#E9967A",DARKSEAGREEN:"#8FBC8F",DARKSLATEBLUE:"#483D8B",DARKSLATEGRAY:"#2F4F4F",DARKTURQUOISE:"#00CED1",DARKVIOLET:"#9400D3",DEEPPINK:"#FF1493",DEEPSKYBLUE:"#00BFFF",DIMGRAY:"#696969",DODGERBLUE:"#1E90FF",FELDSPAR:"#D19275",FIREBRICK:"#B22222",FLORALWHITE:"#FFFAF0",FORESTGREEN:"#228B22",FUCHSIA:"#FF00FF",GAINSBORO:"#DCDCDC",GHOSTWHITE:"#F8F8FF",GOLD:"#FFD700",GOLDENROD:"#DAA520",GRAY:"#808080",GREEN:"#008000",GREENYELLOW:"#ADFF2F",HONEYDEW:"#F0FFF0",HOTPINK:"#FF69B4",INDIANRED:"#CD5C5C",INDIGO:"#4B0082",IVORY:"#FFFFF0",KHAKI:"#F0E68C",LAVENDER:"#E6E6FA",LAVENDERBLUSH:"#FFF0F5",LAWNGREEN:"#7CFC00",LEMONCHIFFON:"#FFFACD",LIGHTBLUE:"#ADD8E6",LIGHTCORAL:"#F08080",LIGHTCYAN:"#E0FFFF",LIGHTGOLDENRODYELLOW:"#FAFAD2",LIGHTGREY:"#D3D3D3",LIGHTGREEN:"#90EE90",LIGHTPINK:"#FFB6C1",LIGHTSALMON:"#FFA07A",LIGHTSEAGREEN:"#20B2AA",LIGHTSKYBLUE:"#87CEFA",LIGHTSLATEBLUE:"#8470FF",LIGHTSLATEGRAY:"#778899",LIGHTSTEELBLUE:"#B0C4DE",LIGHTYELLOW:"#FFFFE0",LIME:"#00FF00",LIMEGREEN:"#32CD32",LINEN:"#FAF0E6",MAGENTA:"#FF00FF",MAROON:"#800000",MEDIUMAQUAMARINE:"#66CDAA",MEDIUMBLUE:"#0000CD",MEDIUMORCHID:"#BA55D3",MEDIUMPURPLE:"#9370D8",MEDIUMSEAGREEN:"#3CB371",MEDIUMSLATEBLUE:"#7B68EE",MEDIUMSPRINGGREEN:"#00FA9A",MEDIUMTURQUOISE:"#48D1CC",MEDIUMVIOLETRED:"#C71585",MIDNIGHTBLUE:"#191970",MINTCREAM:"#F5FFFA",MISTYROSE:"#FFE4E1",MOCCASIN:"#FFE4B5",NAVAJOWHITE:"#FFDEAD",NAVY:"#000080",OLDLACE:"#FDF5E6",OLIVE:"#808000",OLIVEDRAB:"#6B8E23",ORANGE:"#FFA500",ORANGERED:"#FF4500",ORCHID:"#DA70D6",PALEGOLDENROD:"#EEE8AA",PALEGREEN:"#98FB98",PALETURQUOISE:"#AFEEEE",PALEVIOLETRED:"#D87093",PAPAYAWHIP:"#FFEFD5",PEACHPUFF:"#FFDAB9",PERU:"#CD853F",PINK:"#FFC0CB",PLUM:"#DDA0DD",POWDERBLUE:"#B0E0E6",PURPLE:"#800080",RED:"#FF0000",ROSYBROWN:"#BC8F8F",ROYALBLUE:"#4169E1",SADDLEBROWN:"#8B4513",SALMON:"#FA8072",SANDYBROWN:"#F4A460",SEAGREEN:"#2E8B57",SEASHELL:"#FFF5EE",SIENNA:"#A0522D",SILVER:"#C0C0C0",SKYBLUE:"#87CEEB",SLATEBLUE:"#6A5ACD",SLATEGRAY:"#708090",SNOW:"#FFFAFA",SPRINGGREEN:"#00FF7F",STEELBLUE:"#4682B4",TAN:"#D2B48C",TEAL:"#008080",THISTLE:"#D8BFD8",TOMATO:"#FF6347",TURQUOISE:"#40E0D0",VIOLET:"#EE82EE",VIOLETRED:"#D02090",WHEAT:"#F5DEB3",WHITE:"#FFFFFF",WHITESMOKE:"#F5F5F5",YELLOW:"#FFFF00",YELLOWGREEN:"#9ACD32"};e.default={checkColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e={isColor:!1,str:t=t.toUpperCase()};return o[t]&&(t=o[t]),s.test(t)&&(e.isColor=!0,e.type="0X"),i.test(t)&&(e.isColor=!0,e.type="rgba"),e},parseColorDataFrom0X:function(t){t=t.toUpperCase(),o[t]&&(t=o[t]);var e=void 0;return(e=3===(t=t.slice(1)).length?t.split("").map(function(t){return parseInt("0x"+t+t)}):[0,2,4].map(function(e){return parseInt("0x"+t.substr(e,2))})).push(1),e},parseColorDataFromRGBA:function(t){return t.match(i).splice(1).map(function(t){return void 0!==t?parseFloat(t):1})},getComputedColor:function(t,e,n){if(t=this.checkColor(t),e=this.checkColor(e),t.isColor&&e.isColor)return t=this.getColorData(t.str,t.type),e=this.getColorData(e.str,e.type),"rgba("+t.map(function(s,i){var o=(t[i]-e[i])*n+e[i];return 3===i?Math.round(100*o)/100:Math.round(o)}).join(",")+")"},getColorData:function(t,e){return"0X"===e?this.parseColorDataFrom0X(t):"rgba"===e?this.parseColorDataFromRGBA(t):void 0}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),i=r(n(0)),o=r(n(1));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var s={stroke:!1};o.default.mixin(s,t);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,s,n));return i.on("startDrag",function(){i.children.forEach(function(t){t.originStyle=o.default.clone(t.style),t.originStyle.center.x=t.originStyle.center.x-i.style.start.x,t.originStyle.center.y=t.originStyle.center.y-i.style.start.y,t.originStyle.start.x=t.originStyle.start.x-i.style.start.x,t.originStyle.start.y=t.originStyle.start.y-i.style.start.y,t.originStyle.end.x=t.originStyle.end.x-i.style.start.x,t.originStyle.end.y=t.originStyle.end.y-i.style.start.y})}),i.on("duringDrag",function(){console.log(i.mouseX),i.children.forEach(function(t){t.style.center.x=t.originStyle.center.x+i.style.start.x,t.style.center.y=t.originStyle.center.y+i.style.start.y,t.style.start.x=t.originStyle.start.x+i.style.start.x,t.style.start.y=t.originStyle.start.y+i.style.start.y,t.style.end.x=t.originStyle.end.x+i.style.start.x,t.style.end.y=t.originStyle.end.y+i.style.start.y})}),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default),s(e,[{key:"_renderSelf",value:function(t){t||(t=this.context),this.style.stroke&&(t.beginPath(),t.lineWidth=this.style["border-width"],t.strokeStyle=this.style["border-color"],t.rect(this.style.start.x*this.canvasScale,this.style.start.y*this.canvasScale,this.style.width*this.canvasScale,this.style.height*this.canvasScale),t.stroke()),this.style.fill&&(t.beginPath(),t.fillStyle=this.style["background-color"],t.rect(this.style.start.x*this.canvasScale,this.style.start.y*this.canvasScale,this.style.width*this.canvasScale,this.style.height*this.canvasScale),t.fill()),this._initChildrenPos(),t.closePath()}},{key:"_initChildrenPos",value:function(){var t=this;this.childrenPosInited||(this.childrenPosInited=!0,this.children.forEach(function(e){e.style.center.x=t.style.center.x+t.style.start.x,e.style.center.y=e.style.center.y+t.style.start.y,e.style.start.x=e.style.start.x+t.style.start.x,e.style.start.y=e.style.start.y+t.style.start.y,e.style.end.x=e.style.end.x+t.style.start.x,e.style.end.y=e.style.end.y+t.style.start.y}))}},{key:"_checkPointInPath",value:function(){var t=this.mouseX-this.style.start.x,e=this.mouseY-this.style.start.y;return t>=0&&t<=this.style.width&&e>=0&&e<this.style.height}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=n(0),r=(s=o)&&s.__esModule?s:{default:s};var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),i(e,[{key:"_renderSelf",value:function(t){var e=this;if(t||(t=this.context),this.img)t.drawImage(this.img,this.style.start.x*this.canvasScale,this.style.start.y*this.canvasScale,this.style.width*this.canvasScale,this.style.height*this.canvasScale);else{var n=document.createElement("img");n.src=this.style["image-src"],n.style.display="none",n.onload=function(){e.img=n,0!==e.style.width&&"auto"!==e.style.width||(e.style.width=n.width),0!==e.style.height&&"auto"!==e.style.height||(e.style.height=n.height),t.drawImage(e.img,e.style.start.x*e.canvasScale,e.style.start.y*e.canvasScale,e.style.width*e.canvasScale,e.style.height*e.canvasScale)},document.body.appendChild(n)}}},{key:"_checkPointInPath",value:function(){var t=this.mouseX-this.style.start.x,e=this.mouseY-this.style.start.y;return t>=0&&t<=this.style.width&&e>=0&&e<this.style.height}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=n(0),r=(s=o)&&s.__esModule?s:{default:s};var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),i(e,[{key:"_renderSelf",value:function(t){var e=this;t||(t=this.context),this.font||(this.font={textWidthConfig:{}}),t.beginPath(),this._autoSplitText(),this.font.splitedText.forEach(function(n,s){t.font="normal \n                "+e.style["font-size"]*e.canvasScale+"px\n                "+e.style["font-family"],t.fillStyle=e.style.color,t.textBaseline="hanging",t.textAlign=e.style["text-align"],t.fillText(n,e.style.start.x*e.canvasScale,e.style.start.y*e.canvasScale+e.style["font-size"]*e.canvasScale*s+e.style["row-spacing"]*e.canvasScale*s)}),t.closePath()}},{key:"_getTextWidthConfig",value:function(t){var e=this;t||(t=this.context);var n="normal "+this.style["font-size"]*this.canvasScale+"px "+this.style["font-family"];if(!this.font.textWidthConfig[n]){t.font=n;var s={};" abcdefghijklmnopqretuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+`-=,./;[]<>?:{}|\\'\"".split("").forEach(function(n){s[n]=t.measureText(n).width/e.canvasScale}),s.hans=t.measureText("我").width/this.canvasScale,this.font.textWidthConfig[this.style["font-family"]]=s}return this.font.textWidthConfig[this.style["font-family"]]}},{key:"_measureTextWidth",value:function(t){t||(t=this.context);var e="normal "+this.style["font-size"]*this.canvasScale+"px "+this.style["font-family"];t.font=e;var n=0;this.font.splitedText.forEach(function(e){n=Math.max(t.measureText(e).width/2,n)}),this.style.width=n}},{key:"_measureTextHeight",value:function(){var t=this.font.splitedText.length;this.style.height=this.style["font-size"]*t+this.style["row-spacing"]*(t-1)}},{key:"_autoSplitText",value:function(){var t=[],e=this.style["font-text"];if("auto"===this.style["max-width"])t=e.split("\n");else{var n=this.style["max-width"],s=this._getTextWidthConfig(),i="",o=0;e.split("").forEach(function(e){var r=s[e];r||(r=s.hans),"\n"===e?(t.push(i),o=0,i=""):o+r<=n?(o+=r,i+=e):(t.push(i),o=r,i=e)})}return this.font.splitedText=t,this._measureTextWidth(),this._measureTextHeight(),t}},{key:"_checkPointInPath",value:function(){var t=this.mouseX-this.style.start.x,e=this.mouseY-this.style.start.y;return t>=0&&t<=this.style.width&&e>=0&&e<this.style.height}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=n(0),r=(s=o)&&s.__esModule?s:{default:s};var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),i(e,[{key:"_renderSelf",value:function(t){t||(t=this.context),t.beginPath(),t.moveTo(this.style.start.x*this.canvasScale,this.style.start.y*this.canvasScale),t.lineTo(this.style.end.x*this.canvasScale,this.style.end.y*this.canvasScale),t.lineWidth=this.style["border-width"],t.strokeStyle=this.style["border-color"],t.stroke(),t.closePath()}},{key:"_checkPointInPath",value:function(){var t=(this.style.end.y-this.style.start.y)/(this.style.end.x-this.style.start.x),e=void 0;return e=0===t?this.style.end.y:(this.mouseY-this.style.start.y)/t+this.style.start.x,this.mouseX<=Math.max(this.style.start.x,this.style.end.x)&&this.mouseX>=Math.min(this.style.start.x,this.style.end.x)&&(0===t?Math.abs(this.mouseY-this.style.end.y)<1:Math.abs(e-this.mouseX)<1)}},{key:"_setOffsetPosition",value:function(){this.offsetChangeAble&&(this.offsetX=this.mouseX-this.style.start.x,this.offsetY=this.mouseY-this.style.start.y)}},{key:"_setDraggingPos",value:function(){this.setStype({start:{x:this.mouseX-this.offsetX,y:this.mouseY-this.offsetY},end:{x:this.mouseX-this.offsetX+(this.style.end.x-this.style.start.x),y:this.mouseY-this.offsetY+(this.style.end.y-this.style.start.y)}})}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=n(0),r=(s=o)&&s.__esModule?s:{default:s};CanvasRenderingContext2D.prototype.sector=function(t,e,n,s,i){return this.save(),this.translate(t,e),this.beginPath(),this.arc(0,0,n,s,i),this.save(),this.rotate(i),this.moveTo(n,0),this.lineTo(0,0),this.restore(),this.rotate(s),this.lineTo(n,0),this.closePath(),this.restore(),this};var a=Math.PI/180,l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),i(e,[{key:"_renderSelf",value:function(t){t||(t=this.context),t.beginPath(),t.save(),t.translate(this.style.center.x*this.canvasScale,this.style.center.y*this.canvasScale),t.beginPath(),t.arc(0,0,this.style.radius*this.canvasScale,this.style.sdeg*a,this.style.edeg*a),t.save(),t.rotate(this.style.edeg*a),t.moveTo(this.style.radius*this.canvasScale,0),t.lineTo(0,0),t.restore(),t.rotate(this.style.sdeg*a),t.lineTo(this.style.radius*this.canvasScale,0),this.style.stroke&&(t.lineWidth=this.style["border-width"],t.strokeStyle=this.style["border-color"],t.stroke()),this.style.fill&&(t.fillStyle=this.style["background-color"],t.fill()),t.restore()}},{key:"_setOffsetPosition",value:function(){this.offsetChangeAble&&(this.offsetX=this.mouseX-(this.style.center.x-this.style.radius),this.offsetY=this.mouseY-(this.style.center.y-this.style.radius))}},{key:"_setDraggingPos",value:function(){this.setStype({center:{x:this.style.center.x+(this.mouseX-this.offsetX-(this.style.center.x-this.style.radius)),y:this.style.center.y+(this.mouseY-this.offsetY-(this.style.center.y-this.style.radius))}})}}]),e}();e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=n(0),r=(s=o)&&s.__esModule?s:{default:s};var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),i(e,[{key:"_renderSelf",value:function(t){t||(t=this.context),t.beginPath(),this.style.stroke&&(t.beginPath(),t.lineWidth=this.style["border-width"],t.strokeStyle=this.style["border-color"],t.rect(this.style.start.x*this.canvasScale,this.style.start.y*this.canvasScale,this.style.width*this.canvasScale,this.style.height*this.canvasScale),t.stroke()),this.style.fill&&(t.beginPath(),t.fillStyle=this.style["background-color"],t.rect(this.style.start.x*this.canvasScale,this.style.start.y*this.canvasScale,this.style.width*this.canvasScale,this.style.height*this.canvasScale),t.fill())}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=n(0),r=(s=o)&&s.__esModule?s:{default:s};var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),i(e,[{key:"_renderSelf",value:function(t){t||(t=this.context),t.beginPath(),this.style.stroke&&(t.arc(this.style.center.x*this.canvasScale,this.style.center.y*this.canvasScale,this.style.radius*this.canvasScale,0,360,!1),t.lineWidth=this.style["border-width"],t.strokeStyle=this.style["border-color"],t.stroke()),this.style.fill&&(t.arc(this.style.center.x*this.canvasScale,this.style.center.y*this.canvasScale,this.style.radius*this.canvasScale,0,360,!1),t.fillStyle=this.style["background-color"],t.fill())}},{key:"_setOffsetPosition",value:function(){this.offsetChangeAble&&(this.offsetX=this.mouseX-(this.style.center.x-this.style.radius),this.offsetY=this.mouseY-(this.style.center.y-this.style.radius))}},{key:"_setDraggingPos",value:function(){this.setStype({center:{x:this.style.center.x+(this.mouseX-this.offsetX-(this.style.center.x-this.style.radius)),y:this.style.center.y+(this.mouseY-this.offsetY-(this.style.center.y-this.style.radius))}})}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={linear:function(t){return t},swing:function(t){return-Math.cos(t*Math.PI)/2+.5}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(n(1)),i=r(n(13)),o=r(n(5));function r(t){return t&&t.__esModule?t:{default:t}}e.default={animate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",i=s.default.getObjectKeys(t);this.animateOptions=function(t,e,n){var i={start:(new Date).getTime(),changlist:{},allTime:n};return Object.keys(e).forEach(function(n){var r=s.default.getValueByAttr(t.style,n),a=e[n];if(r!==a){var l="number";"string"==typeof a&&o.default.checkColor(a).isColor&&(l="color"),i.changlist[n]={old:r,dest:a,type:l}}}),i}(this,i,e),this.animateOptions.dest=t,this.animateOptions.easying=n,console.log(this.animateOptions),this.fireEvent("beforeAnimate"),this._startAnimate()},_startAnimate:function(){var t=this;requestAnimationFrame(function(){var e=(new Date).getTime(),n=t.animateOptions;if(n){var r=(e-n.start)/n.allTime;if(r>=1)t.setStype(n.dest),t.fireEvent("afterAnimate"),delete t.animateOptions;else{if(0!==(r=i.default[n.easying](r))){t.fireEvent("duringAnimate",{rate:r});var a={},l=n.changlist;Object.keys(l).forEach(function(t){var e=l[t],n=void 0;n="color"===e.type?o.default.getComputedColor(e.dest,e.old,r):(e.dest-e.old)*r+e.old,s.default.setValueByAttr(a,t,n)}),t.setStype(a)}t._startAnimate()}}})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={draggable:!0,resizable:!1,ignore:!1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"border-width":1,"border-color":"#000","background-color":"#fff","background-image":"none","font-size":12,"font-family":"Verdana,微软雅黑","font-text":"","z-index":1,"max-width":"auto","text-align":"start","row-spacing":10,"image-src":"http://www.w3school.com.cn/i/eg_tulip.jpg",cursor:"default",color:"#333",stroke:!0,fill:!1,width:0,height:0,radius:0,center:{x:0,y:0},start:{x:0,y:0},end:{x:0,y:0},sdeg:0,edeg:0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),i=u(n(0)),o=u(n(1)),r=u(n(2)),a=u(n(4)),l=u(n(3));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.default.mixin(n,t),n.envoParams=t,n.envoParams.renderObj=n,n.root=new i.default,n.root._setEnvo(t),l.default.setRender(n),r.default.on("repaint",function(){n.render()}).on("canvas/mousemove",function(t){t.x,t.y;n.fireEvent("mousemove")}).on("canvas/mouseleave",function(t){n.fireEvent("mouseleave")}).on("canvas/mouseup",function(t){n.fireEvent("mouseup")}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),s(e,[{key:"render",value:function(){var t=this;requestAnimationFrame(function(){t.context.clearRect(0,0,t.envoParams.canvasWidth,t.envoParams.canvasHeight),t.envoParams.renderIndex=0,t.root.render()})}},{key:"addElement",value:function(t){this.root.addChild(t)}},{key:"delElement",value:function(t){this.root.delChild(t)}}]),e}();e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=h(n(17)),i=h(n(2)),o=h(n(12)),r=h(n(11)),a=h(n(10)),l=h(n(9)),u=h(n(8)),c=h(n(7)),f=h(n(6));function h(t){return t&&t.__esModule?t:{default:t}}function y(t,e){t.style.width=e.canvasPxWidth+"px",t.style.height=e.canvasPxHeight+"px",t.width=e.canvasPxWidth*e.canvasScale,t.height=e.canvasPxHeight*e.canvasScale,t.style.position="absolute",t.style.left=0,t.style.top=0,t.style.backgroundColor="#fff"}e.default={init:function(t){var e=2*window.devicePixelRatio,n=document.querySelector(t),o=document.createElement("canvas"),r=o.getContext("2d"),a=document.createElement("canvas"),l=a.getContext("2d");n.style.position="relative";var u={canvas:o,canvas2:a,context:r,context2:l,canvasWidth:n.clientWidth*e,canvasHeight:n.clientHeight*e,canvasScale:e,canvasPxWidth:n.clientWidth,canvasPxHeight:n.clientHeight,renderIndex:0};y(o,u),y(a,u),o.style.zIndex=2,a.style.zIndex=1,n.appendChild(o),n.appendChild(a);var c=new s.default(u);return n.addEventListener("click",function(t){i.default.trigger("canvas/click",{x:t.offsetX,y:t.offsetY})}),n.addEventListener("mouseup",function(t){i.default.trigger("canvas/mouseup")}),n.addEventListener("mousedown",function(t){i.default.trigger("canvas/mousedown",{x:t.offsetX,y:t.offsetY})}),n.addEventListener("mousemove",function(t){i.default.trigger("canvas/mousemove",{x:t.offsetX,y:t.offsetY})}),n.addEventListener("mouseleave",function(t){i.default.trigger("canvas/mouseleave")}),n.addEventListener("mouseenter",function(t){i.default.trigger("canvas/mouseenter")}),c},Circle:o.default,Rect:r.default,Sector:a.default,Line:l.default,Font:u.default,Image:c.default,Collection:f.default}}])});