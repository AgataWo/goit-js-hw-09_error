!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");var a=null;e.disabled=!0;t.addEventListener("click",(function(){a=setInterval((function(){n.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7ab8446f.js.map
