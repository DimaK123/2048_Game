parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){return i(n)||t(n)||r(n)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(n,e){if(n){if("string"==typeof n)return a(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,e):void 0}}function t(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function i(n){if(Array.isArray(n))return a(n)}function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var o=document.querySelector("button"),s=document.querySelector(".message-start"),c=document.querySelector(".message-lose"),f=document.querySelector(".message-lose2"),l=document.querySelector(".message-win"),d=document.getElementsByClassName("field-cell"),T=document.querySelector("html"),L=document.getElementsByClassName("game-score")[0];function M(){switch(!0){case Math.floor(100*Math.random())+1<11:return 4;default:return 2}}function u(n,e){var r,t;return r=Math.ceil(n),t=Math.floor(e),Math.floor(Math.random()*(t-r+1))+n}function H(n,e){var r=u(n,e),t=u(n,e);if(r===t)return H(n,e);var i=[r,t],a=i[1];d[i[0]].innerText="".concat(M()),d[a].innerText="".concat(M())}function m(){n(d).forEach(function(n){""!==n.innerText?n.className="field-cell field-cell--".concat(n.innerText):n.className="field-cell"})}function h(){var e=n(d),r=[];return e.forEach(function(n,e){""!==n.innerHTML&&r.push(e)}),r}function v(){for(var e=h(),r=0;;r++){var t=u(0,15);if(-1===e.indexOf(t)){d[t].innerText="".concat(M());break}}if(n(d).forEach(function(n){"2048"===n.innerText&&l.classList.remove("hidden")}),16===h().length){for(var i=0;i<12;i++)if(d[i].innerText===d[i+4].innerText)return;for(var a=0;a<15;a++){var o=d[a].parentElement;if(d[a].innerText===d[a+1].innerText&&o.lastElementChild!==d[a])return}l.classList.contains("hidden")?c.classList.remove("hidden"):f.classList.remove("hidden")}}o.addEventListener("click",function(){"restart"===o.dataset.condition?(o.dataset.condition="start",o.classList.remove("restart"),o.innerText="Start",s.classList.remove("hidden"),L.innerText=0,c.classList.contains("hidden")||c.classList.add("hidden"),f.classList.contains("hidden")||f.classList.add("hidden"),l.classList.contains("hidden")||l.classList.add("hidden"),n(d).forEach(function(n){n.innerText="",n.className="field-cell"})):(o.dataset.condition="restart",o.classList.add("restart"),o.innerText="Restart",s.classList.add("hidden"),H(0,15)),m(d)}),T.addEventListener("keydown",function(e){var r;if("ArrowRight"===e.key&&"restart"===o.dataset.condition)for(var t=n(d),i=15;i>=0;i--)""!==t[i].innerHTML&&function(){for(var e=t[i],a=n(e.parentElement.children),o=a.find(function(n){return n===e}).cellIndex,s=o+1;s<4;s++)if(""!==a[s].innerHTML||3===s){if(a[s].innerHTML===e.innerHTML)a[s].innerHTML=+a[s].innerHTML+ +e.innerHTML,L.innerText=+L.innerText+ +a[s].innerText;else if(""!==a[s].innerHTML&&s!==o+1)a[s-1].innerHTML=e.innerHTML;else{if(""!==a[s].innerHTML)break;a[s].innerHTML=e.innerHTML}r=!0,a[o].innerHTML="";break}}();if("ArrowLeft"===e.key&&"restart"===o.dataset.condition)for(var a=n(d),s=0;s<16;s++)""!==a[s].innerHTML&&function(){for(var e=a[s],t=n(e.parentElement.children),i=t.find(function(n){return n===e}).cellIndex,o=i-1;o>=0;o--)if(""!==t[o].innerHTML||0===o){if(t[o].innerHTML===e.innerHTML)t[o].innerHTML=+"".concat(t[o].innerHTML)+ +"".concat(e.innerHTML),L.innerText=+L.innerText+ +t[o].innerText;else if(""!==t[o].innerHTML&&o!==i-1)t[o+1].innerHTML=e.innerHTML;else{if(""!==t[o].innerHTML)break;t[o].innerHTML=e.innerHTML}r=!0,t[i].innerHTML="";break}}();if("ArrowDown"===e.key&&"restart"===o.dataset.condition)for(var c=n(d),f=15;f>=0;f--)if(""!==c[f].innerHTML)for(var l=f+4;l<=15;l+=4)if(!(""===c[l].innerHTML&&l<12)){if(c[l].innerHTML===c[f].innerHTML)c[l].innerHTML=+c[l].innerHTML+ +c[f].innerHTML,L.innerText=+L.innerText+ +c[l].innerText;else if(""!==c[l].innerHTML&&l!==f+4)c[l-4].innerHTML=c[f].innerHTML;else{if(""!==c[l].innerHTML)break;c[l].innerHTML=c[f].innerHTML}r=!0,c[f].innerHTML="";break}if("ArrowUp"===e.key&&"restart"===o.dataset.condition)for(var T=n(d),M=0;M<16;M++)if(""!==T[M].innerHTML)for(var u=M-4;u>=0;u-=4)if(!(""===T[u].innerHTML&&u>3)){if(T[u].innerHTML===T[M].innerHTML)T[u].innerHTML=+T[u].innerHTML+ +T[M].innerHTML,L.innerText=+L.innerText+ +T[u].innerText;else if(""!==T[u].innerHTML&&u!==M-4)T[u+4].innerHTML=T[M].innerHTML;else{if(""!==T[u].innerHTML)break;T[u].innerHTML=T[M].innerHTML}r=!0,T[M].innerHTML="";break}r&&(v(),m())});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8353144d.js.map