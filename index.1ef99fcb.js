const e=[{id:1,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201910/2241c58878d8-6a11-4b0c-a999-410284db134a.png?1572008337000",model:"Scala",type:"Skoda",year:2019,price:25e3},{id:2,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201902/1835d3d537f7-e4f2-4d18-909e-bd888e35b447.png?1572008566000",model:"RAV4 Hybrid",type:"Toyota",year:2018,price:35e3},{id:3,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201902/183386a81d1d-678f-4768-924a-368fb06345a7.png?1572008531000",model:"Vitara",type:"Suzuki",year:2018,price:22e3},{id:4,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201808/598d2c6464f-4325-440b-a000-591f2fe1683e.png?1550505538000",model:"C3",type:"Citroen",year:2019,price:15e3},{id:5,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201910/2225a8013ece-b524-4329-ab14-548b58582d3c.png?1572008012000",model:"Taycan",type:"Porsche",year:2019,price:15e4},{id:6,img:"https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201808/635ff3df75b-81b2-4db8-8542-177d652c183a.png?1550515471000",model:"CX-5",type:"Mazda",year:2017,price:3e4}],t=document.querySelector(".js-search-form"),a=document.querySelector(".js-car-list");t.addEventListener("submit",(function(t){t.preventDefault();const{qwery:i,typeSelect:s}=t.currentTarget.elements,o=e.filter((e=>e[s.value].toLowerCase().includes(i.value.toLowerCase())));a.innerHTML=(r=o,r.map((({id:e,img:t,model:a,type:i,year:s,price:o})=>`\n      <li class="item" data-car-id=${e}>\n      <img src=${t} alt=${i}>\n      <h2>${i}</h2>\n      <h3>${a}</h3>\n      <h3>${s}</h3>\n      <p>Price: ${o}$</p>\n      </li>`)).join(""));var r})),function(){const t=e.map((({id:e,img:t,type:a})=>`<li class="js-item item" data-car-id=${e}>\n    <img src=${t} alt=${a} class="js-target img-car">\n    <h2>${a}</h2>\n    </li>`));a.insertAdjacentHTML("beforeend",t.join(""))}(),a.addEventListener("click",(function(t){if(!t.target.classList.contains("js-target"))return;const a=t.target.closest(".js-item"),i=Number(a.dataset.carId),s=e.find((({id:e})=>e===i));basicLightbox.create('\n  <div class="modal">\n      <p>\n          Your first lightbox with just a few lines of code.\n          Yes, it\'s really that simple.\n      </p>\n  </div>\n').show((()=>console.log("lightbox now visible"))),console.log(s)}));
//# sourceMappingURL=index.1ef99fcb.js.map
