(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,"body {\n}\n\nnav {\n    position: absolute;\n    top: 60px;\n    left: 0;\n    right: 0;\n    height: 50px;\n    border: 3px solid black;\n    background-color: darkgray;\n}\n.tabs_btns {\n    font-size: 0;\n    display: flex;\n    justify-content: center;\n}\n.tab_btn {\n    height: 50px;\n    margin-left: 0px;\n    border: none;\n}\n.tab_btn:hover {\n    background-color: burlywood;\n}\n#content {\n    position: absolute;\n    top: 110px;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    border: 3px dashed gray;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\nimg {\n    width: 50vw;\n}\n.home_page {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width:100vw;\n    align-content: center;\n    /* position: relative;\n    top: 20%;\n    left: 20%; */\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: large;\n    font-style: italic;\n}\n\n.menu_page {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    border: 3px solid black;\n    width:100vw;\n    align-content: center;\n}\n.dish {\n    position: relative;\n    left: 20%;\n}\n\n.dish_img {\n    width: 10rem;\n}\n\n",""]);const c=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=i(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=t(a[o]);n[c].references--}for(var s=r(e,i),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),a=t(569),o=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=t.p+"528d0f6103ad7ec13602.jpg";function v(){const e=document.createElement("div"),n=new Image;return e.classList.add("home_page"),n.src=m,console.log(e),e.innerText="Quality Guaranteed",e.appendChild(n),content.appendChild(e),e}const g=t.p+"d8dfa239c78e30835938.jpg",b=t.p+"0f5cb4764689ab7ee707.jpg",y=t.p+"ad7a48b588d9c0a4ca64.jpg",C=t.p+"e3b0bdf7c32bb158e931.jpg";document.querySelector("#content").appendChild(v());const w=document.querySelector("#content"),x=document.querySelector("#home"),L=document.querySelector("#menu");document.querySelector("#about"),document.querySelector("#contact"),L.addEventListener("click",(()=>{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=new Image;a.src=g,a.classList.add("dish_img");const o=new Image;o.src=b,o.classList.add("dish_img");const c=new Image;c.src=y,c.classList.add("dish_img");const s=new Image;return s.src=C,s.classList.add("dish_img"),e.classList.add("menu_page"),e.id="inactive",n.classList.add("dish"),n.id="biryani",n.innerHTML="Delicious Mutton Biryani <br><br>",n.appendChild(a),t.classList.add("dish"),t.id="karhai",t.innerHTML="Delicious Chicken Karhai <br><br>",t.appendChild(o),r.classList.add("dish"),r.id="tikka",r.innerHTML="Delicious Chicken Tikka <br><br>",r.appendChild(c),i.classList.add("dish"),i.id="kabab",i.innerHTML="Delicious Beef Kabab <br><br>",i.appendChild(s),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(i),content.appendChild(e),e}())})),x.addEventListener("click",(()=>{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(v())}))})()})();