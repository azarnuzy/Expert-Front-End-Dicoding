!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],u=n.base?i[0]+n.base:i[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:m(p,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function d(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=v||(v=s(n)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=s(n),r=d.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(e,n),s=0;s<t.length;s++){var l=c(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n){var t="\\sw.js";Object.defineProperty(n,"__esModule",{value:!0}),n.default={register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!navigator.serviceWorker&&navigator.serviceWorker.register(t,e)}},e.exports=n.default},function(e,n,t){(function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var t=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{u({},"")}catch(e){u=function(e,n,t){return e[n]=t}}function s(e,n,t,r){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(e,n,t){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return R()}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var c=_(a,t);if(c){if(c===f)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var u=l(e,n,t);if("normal"===u.type){if(r=t.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(r="completed",t.method="throw",t.arg=u.arg)}}}(e,t,a),i}function l(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function p(){}function d(){}function v(){}var h={};u(h,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(L([])));g&&g!==t&&r.call(g,i)&&(h=g);var y=v.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(n){u(e,n,(function(e){return this._invoke(n,e)}))}))}function w(e,t){var o;this._invoke=function(i,a){function c(){return new t((function(o,c){!function o(i,a,c,u){var s=l(e[i],e,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===n(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){o("next",e,c,u)}),(function(e){o("throw",e,c,u)})):t.resolve(p).then((function(e){f.value=e,c(f)}),(function(e){return o("throw",e,c,u)}))}u(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function _(e,n){var t=e.iterator[n.method];if(void 0===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=void 0,_(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(t,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function x(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function k(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,o=function n(){for(;++t<e.length;)if(r.call(e,t))return n.value=e[t],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=v,u(y,"constructor",v),u(v,"constructor",d),d.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),u(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(n,t,r,o,i){void 0===i&&(i=Promise);var a=new w(s(n,t,r,o),i);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(y),u(y,c,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return a.type="throw",a.arg=e,n.next=t,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),f},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),k(t),f}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;k(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:L(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),f}},e}("object"===n(e)?e.exports:{});try{regeneratorRuntime=t}catch(e){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}).call(this,t(4)(e))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){var r=t(0),o=t(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"* {\n    padding: 0;\n    margin: 0;\n  }\n   \n  body {\n    font-family: 'Poppins', sans-serif;\n    background-color: white;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n   \n   \n  /*\n    AppBar\n  */\n   \n  .app-bar {\n    padding: 8px 16px;\n    background-color: white;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 10px;\n    position: sticky;\n    top: 0;\n    z-index: 99;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n  }\n   \n  .app-bar .app-bar__menu {\n    display: flex;\n    align-items: center;\n  }\n   \n  .app-bar .app-bar__menu button {\n    background-color: transparent;\n    border: none;\n    font-size: 18px;\n    padding: 8px;\n    cursor: pointer;\n  }\n   \n  .app-bar .app-bar__brand {\n    display: flex;\n    align-items: center;\n  }\n   \n  .app-bar .app-bar__brand h1 {\n    color: #db0000;\n    text-transform: uppercase;\n    font-size: 22px;\n    user-select: none;\n  }\n   \n  .app-bar .app-bar__navigation {\n    position: absolute;\n    top: 50px;\n    left: -180px;\n    width: 150px;\n    transition: all 0.3s;\n    padding: 8px;\n    background-color: white;\n    overflow: hidden;\n  }\n   \n  .app-bar .app-bar__navigation.open {\n    left: 0;\n  }\n   \n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    text-decoration: none;\n    color: black;\n    padding: 8px;\n    margin-bottom: 5px;\n    width: 100%;\n  }\n   \n  /*\n    Main Content\n  */\n   \n  main {\n    padding: 32px;\n    flex: 1;\n  }\n   \n  .content {\n    margin: 0 auto;\n    min-height: 100%;\n  }\n   \n  .content .content__heading {\n    font-weight: normal;\n  }\n   \n   \n  /*\n    Movies\n  */\n   \n  .movies {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    margin: 32px 0;\n  }\n   \n   \n  /*\n    Movie Item\n  */\n   \n  .movie-item {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    overflow: hidden;\n  }\n   \n  .movie-item__header {\n    position: relative;\n  }\n   \n  .movie-item .movie-item__header .movie-item__header__poster {\n    width: 100%;\n  }\n   \n  .movie-item .movie-item__header .movie-item__header__rating {\n    position: absolute;\n    padding: 8px;\n    bottom: 20px;\n    left: 0;\n    display: inline-block;\n    background-color: black;\n    color: white;\n  }\n   \n  .movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\n    margin-left: 10px;\n  }\n   \n  .movie-item .movie-item__content {\n    padding: 16px;\n  }\n   \n  .movie-item .movie-item__content h3 {\n    margin: 0 0 10px 0;\n  }\n   \n  .movie-item .movie-item__content h3 a {\n    color: #db0000;\n    text-decoration: none;\n  }\n   \n  .movie-item .movie-item__content p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 4; /* number of lines to show */\n    -webkit-box-orient: vertical;\n  }\n   \n   \n  /*\n    Movie\n  */\n   \n  .movie {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 800px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n  }\n   \n  .movie .movie__poster {\n    width: 100%;\n    max-width: 400px;\n  }\n   \n  .movie .movie__info h4 {\n    margin: 8px 0;\n  }\n   \n   \n   \n  /*\n    Footer\n  */\n   \n  footer {\n    padding: 16px;\n  }\n   \n  footer p {\n    text-align: center;\n    color: #aaaaaa;\n  }\n   \n  footer p a {\n    color: #db0000;\n    text-decoration: none;\n  }\n\n/*\n  Like\n*/\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: white;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",""]),e.exports=n},function(e,n,t){var r=t(0),o=t(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"@media screen and (min-width: 650px) {\n    .app-bar {\n        grid-template-columns: 1fr auto;\n        padding: 8px 32px;\n    }\n   \n    .app-bar .app-bar__brand h1 {\n        font-size: 1.5em;\n    }\n   \n    .app-bar .app-bar__menu {\n        display: none;\n    }\n   \n    .app-bar .app-bar__navigation {\n        position: static;\n        width: 100%;\n    }\n   \n    .app-bar .app-bar__navigation ul li {\n        display: inline-block;\n    }\n   \n    .app-bar .app-bar__navigation ul li a {\n        display: inline-block;\n        width: 120px;\n        text-align: center;\n        margin: 0;\n    }\n   \n    .movies {\n        grid-template-columns: 1fr 1fr;\n    }\n   \n    .movie {\n        grid-template-columns: auto 1fr;\n    }\n   \n    .movie .movie__title {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n   \n    .movie .movie__overview {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n  }\n   \n  @media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n        font-size: 2em;\n    }\n  }\n   \n  @media screen and (min-width: 850px) {\n    .movies {\n        grid-template-columns: repeat(3, 1fr);\n    }\n  }\n   \n  @media screen and (min-width: 1200px) {\n    .movies {\n        grid-template-columns: repeat(4, 1fr);\n    }\n  }\n   \n  @media screen and (min-width: 1600px) {\n    .movies {\n        grid-template-columns: repeat(5, 1fr);\n    }\n  }",""]),e.exports=n},function(e,n,t){"use strict";t.r(n);t(3),t(5),t(7);var r={init:function(e){var n=this,t=e.button,r=e.drawer,o=e.content;t.addEventListener("click",(function(e){n._toggleDrawer(e,r)})),o.addEventListener("click",(function(e){n._closeDrawer(e,r)}))},_toggleDrawer:function(e,n){e.stopPropagation(),n.classList.toggle("open")},_closeDrawer:function(e,n){e.stopPropagation(),n.classList.remove("open")}},o={KEY:"723efb5ac2ef3c9278d3e18eb6184aa3",BASE_URL:"https://api.themoviedb.org/3/",BASE_IMAGE_URL:"https://image.tmdb.org/t/p/w500/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"movie-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"movies",WEB_SOCKET_SERVER:"wss://movies-feed.dicoding.dev"},i={NOW_PLAYING:"".concat(o.BASE_URL,"movie/now_playing?api_key=").concat(o.KEY,"&language=").concat(o.DEFAULT_LANGUAGE,"&page=1"),UPCOMING:"".concat(o.BASE_URL,"movie/upcoming?api_key=").concat(o.KEY,"&language=").concat(o.DEFAULT_LANGUAGE,"&page=1"),DETAIL:function(e){return"".concat(o.BASE_URL,"movie/").concat(e,"?api_key=").concat(o.KEY)}};function a(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r,o,a,s;return n=e,t=null,r=[{key:"nowPlayingMovies",value:(s=c(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.NOW_PLAYING);case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t.results);case 7:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})},{key:"upcomingMovies",value:(a=c(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.UPCOMING);case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t.results);case 7:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"detailMovie",value:(o=c(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.DETAIL(n));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}],t&&u(n.prototype,t),r&&u(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),l=function(e){return'\n  <h2 class="movie__title">'.concat(e.title,'</h2>\n  <img class="movie__poster" src="').concat(o.BASE_IMAGE_URL+e.poster_path,'" alt="').concat(e.title,'" />\n  <div class="movie__info">\n  <h3>Information</h3>\n    <h4>Tagline</h4>\n    <p>').concat(e.tagline,"</p>\n    <h4>Release Date</h4>\n    <p>").concat(e.release_date,"</p>\n    <h4>Duration</h4>\n    <p>").concat(e.runtime," minutes</p>\n    <h4>Rating</h4>\n    <p>").concat(e.vote_average,'</p>\n  </div>\n  <div class="movie__overview">\n    <h3>Overview</h3>\n    <p>').concat(e.overview,"</p>\n  </div>\n</div>\n")},f=function(e){return'\n  <div class="movie-item">\n    <div class="movie-item__header">\n        <img class="movie-item__header__poster" alt="'.concat(e.title,'"\n            src="').concat(e.backdrop_path?o.BASE_IMAGE_URL+e.backdrop_path:"https://picsum.photos/id/666/800/450?grayscale",'">\n        <div class="movie-item__header__rating">\n            <p>⭐️<span class="movie-item__header__rating__score">').concat(e.vote_average,'</span></p>\n        </div>\n    </div>\n    <div class="movie-item__content">\n        <h3><a href="',"/#/detail/".concat(e.id),'">').concat(e.title,"</a></h3>\n        <p>").concat(e.overview,"</p>\n    </div>\n  </div>\n  ")};function p(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){p(i,r,o,a,c,"next",e)}function c(e){p(i,r,o,a,c,"throw",e)}a(void 0)}))}}var v={render:function(){return d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Now Playing in Cinema</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return d(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.nowPlayingMovies();case 2:n=e.sent,t=document.querySelector("#movies"),n.forEach((function(e){t.innerHTML+=f(e)}));case 5:case"end":return e.stop()}}),e)})))()}};function h(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){h(i,r,o,a,c,"next",e)}function c(e){h(i,r,o,a,c,"throw",e)}a(void 0)}))}}var g,y,b={render:function(){return m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Upcoming in Cinema</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return m(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.upcomingMovies();case 2:n=e.sent,t=document.querySelector("#movies"),n.forEach((function(e){t.innerHTML+=f(e)}));case 5:case"end":return e.stop()}}),e)})))()}},w={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(e);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var n=e.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}};var _=new WeakMap,x=new WeakMap,k=new WeakMap,E=new WeakMap,L=new WeakMap;var R={get:function(e,n,t){if(e instanceof IDBTransaction){if("done"===n)return x.get(e);if("objectStoreNames"===n)return e.objectStoreNames||k.get(e);if("store"===n)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return A(e[n])},set:function(e,n,t){return e[n]=t,!0},has:function(e,n){return e instanceof IDBTransaction&&("done"===n||"store"===n)||n in e}};function S(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(y||(y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e.apply(O(this),t),A(_.get(this))}:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return A(e.apply(O(this),t))}:function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var i=e.call.apply(e,[O(this),n].concat(r));return k.set(i,n.sort?n.sort():[n]),A(i)}}function P(e){return"function"==typeof e?S(e):(e instanceof IDBTransaction&&function(e){if(!x.has(e)){var n=new Promise((function(n,t){var r=function(){e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=function(){n(),r()},i=function(){t(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));x.set(e,n)}}(e),n=e,(g||(g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return n instanceof e}))?new Proxy(e,R):e);var n}function A(e){if(e instanceof IDBRequest)return n=e,(t=new Promise((function(e,t){var r=function(){n.removeEventListener("success",o),n.removeEventListener("error",i)},o=function(){e(A(n.result)),r()},i=function(){t(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&_.set(e,n)})).catch((function(){})),L.set(t,n),t;var n,t;if(E.has(e))return E.get(e);var r=P(e);return r!==e&&(E.set(e,r),L.set(r,e)),r}var O=function(e){return L.get(e)};function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){B(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}var T=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],C=new Map;function I(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(C.get(n))return C.get(n);var t=n.replace(/FromIndex$/,""),r=n!==t,o=D.includes(t);if(t in(r?IDBIndex:IDBObjectStore).prototype&&(o||T.includes(t))){var i=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var i,a,c,u,s,l,f=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=this.transaction(n,o?"readwrite":"readonly"),c=a.store,u=f.length,s=new Array(u>1?u-1:0),l=1;l<u;l++)s[l-1]=f[l];return r&&(c=c.index(s.shift())),e.next=6,Promise.all([(i=c)[t].apply(i,s),o&&a.done]);case 6:return e.abrupt("return",e.sent[0]);case 7:case"end":return e.stop()}}),e,this)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){N(i,r,o,a,c,"next",e)}function c(e){N(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return C.set(n,i),i}}}function U(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function G(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){U(i,r,o,a,c,"next",e)}function c(e){U(i,r,o,a,c,"throw",e)}a(void 0)}))}}R=function(e){return j(j({},e),{},{get:function(n,t,r){return I(n,t)||e.get(n,t,r)},has:function(n,t){return!!I(n,t)||e.has(n,t)}})}(R);var W=o.OBJECT_STORE_NAME,q=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.blocked,o=t.upgrade,i=t.blocking,a=t.terminated,c=indexedDB.open(e,n),u=A(c);return o&&c.addEventListener("upgradeneeded",(function(e){o(A(c.result),e.oldVersion,e.newVersion,A(c.transaction))})),r&&c.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}(o.DATABASE_NAME,o.DATABASE_VERSION,{upgrade:function(e){e.createObjectStore(W,{keyPath:"id"})}}),F={getMovie:function(e){return G(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q;case 2:return n.abrupt("return",n.sent.get(W,e));case 3:case"end":return n.stop()}}),n)})))()},getAllMovies:function(){return G(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q;case 2:return e.abrupt("return",e.sent.getAll(W));case 3:case"end":return e.stop()}}),e)})))()},putMovie:function(e){return G(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q;case 2:return n.abrupt("return",n.sent.put(W,e));case 3:case"end":return n.stop()}}),n)})))()},deleteMovie:function(e){return G(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q;case 2:return n.abrupt("return",n.sent.delete(W,e));case 3:case"end":return n.stop()}}),n)})))()}};function H(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function K(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){H(i,r,o,a,c,"next",e)}function c(e){H(i,r,o,a,c,"throw",e)}a(void 0)}))}}var Y={init:function(e){var n=this;return K(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.likeButtonContainer,o=e.movie,n._likeButtonContainer=r,n._movie=o,t.next=5,n._renderButton();case 5:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var e=this;return K(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e._movie.id,n.next=3,e._isMovieExist(t);case 3:if(!n.sent){n.next=7;break}e._renderLiked(),n.next=8;break;case 7:e._renderLike();case 8:case"end":return n.stop()}}),n)})))()},_isMovieExist:function(e){return K(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.getMovie(e);case 2:return t=n.sent,n.abrupt("return",!!t);case 4:case"end":return n.stop()}}),n)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this movie" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",K(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.putMovie(e._movie);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this movie" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",K(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.deleteMovie(e._movie.id);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))}};function z(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function V(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){z(i,r,o,a,c,"next",e)}function c(e){z(i,r,o,a,c,"throw",e)}a(void 0)}))}}function J(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function $(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){J(i,r,o,a,c,"next",e)}function c(e){J(i,r,o,a,c,"throw",e)}a(void 0)}))}}var Q={"/":v,"/now-playing":v,"/upcoming":b,"/detail/:id":{render:function(){return V(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div id="movie" class="movie"></div>\n      <div id="likeButtonContainer"></div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return V(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.parseActiveUrlWithoutCombiner(),e.next=3,s.detailMovie(n.id);case 3:t=e.sent,document.querySelector("#movie").innerHTML=l(t),Y.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),movie:{id:t.id,title:t.title,overview:t.overview,backdrop_path:t.backdrop_path,vote_average:t.vote_average}});case 7:case"end":return e.stop()}}),e)})))()}},"/like":{render:function(){return $(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Your Liked Movie</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return $(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getAllMovies();case 2:n=e.sent,t=document.querySelector("#movies"),n.forEach((function(e){t.innerHTML+=f(e)}));case 5:case"end":return e.stop()}}),e)})))()}}};function X(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function Z(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ee=function(){function e(n){var t=n.button,r=n.drawer,o=n.content;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._button=t,this._drawer=r,this._content=o,this._initialAppShell()}var n,t,o,i,a;return n=e,(t=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(i=regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.parseActiveUrlWithCombiner(),t=Q[n],e.next=4,t.render();case 4:return this._content.innerHTML=e.sent,e.next=7,t.afterRender();case 7:case"end":return e.stop()}}),e,this)})),a=function(){var e=this,n=arguments;return new Promise((function(t,r){var o=i.apply(e,n);function a(e){X(o,t,r,a,c,"next",e)}function c(e){X(o,t,r,a,c,"throw",e)}a(void 0)}))},function(){return a.apply(this,arguments)})}])&&Z(n.prototype,t),o&&Z(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}(),ne=t(2),te=t.n(ne);function re(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}var oe=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,te.a.register();case 3:return e.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){re(i,r,o,a,c,"next",e)}function c(e){re(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();function ie(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function ae(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){ie(i,r,o,a,c,"next",e)}function c(e){ie(i,r,o,a,c,"throw",e)}a(void 0)}))}}var ce={sendNotification:function(e){var n=e.title,t=e.options;if(this._checkAvailability())return this._checkPermission()?void this._showNotification({title:n,options:t}):(console.log("User did not yet granted permission"),void this._requestPermission());console.log("Notification not supported in this browser")},_checkAvailability:function(){return!!("Notification"in window)},_checkPermission:function(){return"granted"===Notification.permission},_requestPermission:function(){return ae(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:"denied"===(n=e.sent)&&console.log("Notification Denied"),"default"===n&&console.log("Permission closed");case 5:case"end":return e.stop()}}),e)})))()},_showNotification:function(e){return ae(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.title,r=e.options,n.next=3,navigator.serviceWorker.ready;case 3:n.sent.showNotification(t,r);case 5:case"end":return n.stop()}}),n)})))()}},ue={init:function(e){new WebSocket(e).onmessage=this._onMessageHandler},_onMessageHandler:function(e){var n=JSON.parse(e.data);ce.sendNotification({title:"".concat(n.title," is on cinema!"),options:{body:n.overview,image:"".concat(o.BASE_IMAGE_URL+n.poster_path)}})}},se=new ee({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){se.renderPage()})),window.addEventListener("load",(function(){se.renderPage(),oe(),ue.init(o.WEB_SOCKET_SERVER)}))}]);