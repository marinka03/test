const e=[{id:1,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201910/2241c58878d8-6a11-4b0c-a999-410284db134a.png?1572008337000",model:"Scala",type:"Skoda",year:2019,price:25e3},{id:2,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201902/1835d3d537f7-e4f2-4d18-909e-bd888e35b447.png?1572008566000",model:"RAV4 Hybrid",type:"Toyota",year:2018,price:35e3},{id:3,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201902/183386a81d1d-678f-4768-924a-368fb06345a7.png?1572008531000",model:"Vitara",type:"Suzuki",year:2018,price:22e3},{id:4,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201808/598d2c6464f-4325-440b-a000-591f2fe1683e.png?1550505538000",model:"C3",type:"Citroen",year:2019,price:15e3},{id:5,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201910/2225a8013ece-b524-4329-ab14-548b58582d3c.png?1572008012000",model:"Taycan",type:"Porsche",year:2019,price:15e4},{id:6,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201808/635ff3df75b-81b2-4db8-8542-177d652c183a.png?1550515471000",model:"CX-5",type:"Mazda",year:2017,price:3e4},{id:7,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201910/218592567a66-bcd6-4e85-b3c9-1d268a8861a6.png?1572006874000",model:"Mazda3 Hatchback",type:"Mazda",year:2019,price:25200},{id:8,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201910/218631ac3b4a-80de-481b-ba64-0dee8ed7d82b.png?1572006840000",model:"Mazda3 Sedan",type:"Mazda",year:2019,price:24800}],t={arrFavourite:"array-favourite",arrCheckOut:"array-check-out"};function n(e,t){const n=t.map((({id:e,img:t,model:n,type:r})=>`\n        <li class="js-item item" data-car-id=${e}>\n        <img src=${t} alt=${r} class="js-target img-car" loading="lazy" width="700" height="372">\n        <h2 class="js-car-name car-name">${r}</h2>\n      <h3 class="js-car-model car-model" >${n}</h3>\n      \n      <div class="all-btns-item">\n        <a class="js-more-info more-info">More information...</a>\n  \n        <div class="add-btns">\n          <button class="js-favourite-btn favourite-btn btn">Add to favourite</button>\n          <button class="js-check-out-btn check-out-btn btn">Add to check out</button>\n        </div>\n      </div>\n  \n        </li>`)).join("");e.innerHTML=n}var r={};function o(e){"Escape"===e.code&&this.close()}function a({id:e,img:t,model:n,type:a,year:i,price:s}){r.create(`\n    <div class="js-item modal" data-car-id=${e}>\n      <img src=${t} alt=${a} class="js-target img-car" loading="lazy" width="700" height="372">\n      <h2 class="js-car-name car-name">${a}</h2>\n      <h3 class="js-car-model car-model" >${n}</h3>\n\n      <div class="js-wrapper-more-description wrapper-more-description">\n        <p class="js-year year">Year: ${i}</p>\n        <p class="js-price price">Price: ${s}$</p>\n      </div>\n      \n    </div>\n  `,{handler:null,onShow(e){this.handler=o.bind(e),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}}).show()}function i(t){const n=t.closest(".js-item"),r=Number(n.dataset.carId);return e.find((({id:e})=>e===r))}r=function e(t,n,r){function o(i,s){if(!n[i]){if(!t[i]){var c=void 0;if(!s&&c)return c(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[i]={exports:{}};t[i][0].call(d.exports,(function(e){return o(t[i][1][e]||e)}),d,d.exports,e,t,n,r)}return n[i].exports}for(var a=void 0,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),s=o(a,"VIDEO"),c=o(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var s={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(s)}))},close:i};return s}},{}]},{},[1])(1);const s=document.querySelector(".js-search-form"),c=document.querySelector(".js-car-list");var l;s.addEventListener("submit",(function(t){t.preventDefault();const{qwery:r,typeSelect:o}=t.currentTarget.elements,a=e.filter((e=>e[o.value].toLowerCase().includes(r.value.toLowerCase())));a.length<=1?m.classList.add("background-height"):m.classList.remove("background-height"),n(c,a)})),c.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-more-info")){a(i(e.target))}else if(e.target.classList.contains("js-favourite-btn")){const n=i(e.target);if(d.some((({id:e})=>e===n.id)))return;d.push(n),localStorage.setItem(t.arrFavourite,JSON.stringify(d))}})),n(c,e);const d=null!==(l=JSON.parse(localStorage.getItem(t.arrFavourite)))&&void 0!==l?l:[];var u;u=JSON.parse(localStorage.getItem(t.arrCheckOut));const m=document.querySelector("main");
//# sourceMappingURL=index.ae208c63.js.map
