!function(){"use strict";var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function o(){return t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}e.addEventListener("click",(function(){o(),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.ece6a78b.js.map