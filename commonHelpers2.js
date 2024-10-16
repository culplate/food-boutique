import{a as b,b as C,d as T,e as M,f as A,h as _}from"./assets/scroll-b04a927b.js";import{P as O,a as E,S as I,b as D}from"./assets/vendor-4b9aba64.js";const L=document.getElementById("pagination");let y=0;const J=window.innerWidth;J<768?y=2:y=4;function H(t,e,o){const s={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:y,page:o,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new O(L,s).on("afterMove",n=>{const a=n.page;var c=JSON.parse(localStorage.getItem("filters"))||{};c.page=a,localStorage.setItem("filters",JSON.stringify(c)),u()})}function F(){L.innerHTML=""}async function $(t,e,o,s,r){try{const n={keyword:e||"",category:t||"",page:o||1,limit:s||6};r&&(n.sort=r);const a=await E({method:"get",url:"https://food-boutique.b.goit.study/api/products",params:n});return a.data.totalPages>1?H(a.data,s,o):F(),a.data.results}catch(n){return console.error("Error fetching products:",n),[]}}async function d(t){return(await E(`https://food-boutique.b.goit.study/api/products/${t}`)).data}const S="/food-boutique/assets/check-267a6277.svg",z=document.querySelector(".products-container"),N=document.querySelector(".popular-container"),v=document.querySelector(".discount-container"),l="products in cart";function k(t){const e=document.querySelector(".products-container");!t||t.length===0?e.innerHTML=`<div class="cart-empty empty-filter">
           <h3 class="products-titel">Nothing was found for the selected <span>filters...</span></h3>
           <p class="filters-text-not-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
       </div>`:e.innerHTML=C(t)}function U(t){for(let e=t.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[t[e],t[o]]=[t[o],t[e]]}}async function W(){try{const t=await d("popular"),e=G(t),o=x(e,5);N.innerHTML=T(o)}catch(t){console.log(t.message)}}W();function x(t,e){return U(t),t.slice(0,e)}async function j(){try{const t=await d("discount"),e=x(t,2);v.innerHTML=M(e)}catch(t){console.log(t.message)}}v.addEventListener("click",R);async function R(t){if(t.target.className==="discount-link-basket"||t.target.className==="discount-basket-icon"||t.target.className==="discount-basket-icon"){const e=t.target.closest(".discount-list-item"),o=e.id;try{const s=await d(o),r=JSON.parse(localStorage.getItem(l))??[],n=r.findIndex(a=>a._id===o);if(n!==-1)r[n].quantity+=0;else{s.quantity=1,r.push(s);const a=e.querySelector("button");a.disabled=!0,a.innerHTML=`<span class="icon-styles">
                     <img class="discount-basket-icon" src="${S}" alt="icon bascket" width="18" height="18">

                  </span>`,a.classList.add("disabled")}localStorage.setItem(l,JSON.stringify(r)),b()}catch(s){console.log(s.message)}}}j();z.addEventListener("click",h);async function h(t){if(t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.nodeName==="IMG"){const e=t.target.closest(".list-item-body-price");if(e&&e.parentElement){const o=e.parentElement.id;try{const s=await d(o),r=JSON.parse(localStorage.getItem(l))??[],n=r.findIndex(a=>a._id===o);if(n!==-1)r[n].quantity+=0;else{s.quantity=1,r.push(s);const a=e.querySelector("button");a.disabled=!0,a.innerHTML=`<img src="${S}" alt="icon check" width="18" height="18">`,a.classList.add("disabled")}localStorage.setItem(l,JSON.stringify(r)),b()}catch(s){console.error(s.message)}}}}N.addEventListener("click",Z);async function Z(t){if(t.target.nodeName==="BUTTON"||t.target.className==="popular-basket-img"){const e=t.target.closest(".product-popular-card"),o=e.id,s=e.querySelector("button");s.disabled=!0;try{const r=await d(o),n=JSON.parse(localStorage.getItem(l))??[],a=n.findIndex(c=>c._id===o);a!==-1?n[a].quantity+=0:(r.quantity=1,n.push(r),s.innerHTML=`<img class="popular-disadbled-img" src="${S}" alt="icon bascket" width="20" height="20">`,s.classList.add("popular-disadbled-btn")),localStorage.setItem(l,JSON.stringify(n)),b()}catch(r){console.log(r.message),s.disabled=!1}}}function G(t){return t.map(e=>{let o=e.category;return typeof o=="string"&&(o=o.split("_").join(" ")),{...e,category:o}})}let m=!1;function K(t,e,o){let s;return function(){const r=this,n=arguments,a=function(){s=null,o||t.apply(r,n)},c=o&&!s;clearTimeout(s),s=setTimeout(a,e),c&&t.apply(r,n)}}document.addEventListener("DOMContentLoaded",function(){ot(),et(),st(),tt(),V();const t=document.getElementById("search-box"),e=document.getElementById("categories"),o=document.getElementById("sort-options"),s=p();t.value=s.keyword||"",e.value=s.category||"",o.value=s.sort||"",u()});const Y=document.querySelector(".search-form");Y.addEventListener("submit",function(t){t.preventDefault();const e=document.getElementById("search-box").value.trim();g("keyword",e),u(),q()});function Q(){const t=window.innerWidth,e=t>=768&&t<1150;let o=6;e?o=8:t>=1150&&(o=9);const s=p();s.limit=o,localStorage.setItem("filters",JSON.stringify(s)),u()}window.addEventListener("resize",K(Q,300));async function V(){try{const t=await fetch("https://food-boutique.b.goit.study/api/products/categories");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();e&&e.length>0?X(e):console.error("No categories found")}catch(t){console.error("Error fetching categories:",t)}}function X(t){const e=document.getElementById("categories");e.innerHTML="";const o=[{text:"Show all",value:""},...t.map(s=>({text:s.replace(/_/g," "),value:s}))];new I({select:"#categories",placeholder:"Categories",showSearch:!1,data:o})}function tt(){new I({select:"#sort-options",data:[{text:"A to Z",value:"byABC_Asc"},{text:"Z to A",value:"byABC_Desc"},{text:"Cheap",value:"byPrice_Asc"},{text:"Expensive",value:"byPrice_Desc"},{text:"Popular",value:"byPopularity_Asc"},{text:"Not popular",value:"byPopularity_Desc"},{text:"Show all",value:"showAll"}]})}function et(){const t=document.getElementById("categories"),e=document.getElementById("sort-options");t.addEventListener("change",w),e.addEventListener("change",w)}function w(){const t=document.getElementById("categories").value,e=document.getElementById("sort-options").value;g("category",t),g("sort",e),u(),q()}function q(){g("page",1)}async function u(){if(m)return;m=!0;const t=p(),{category:e,keyword:o,page:s,limit:r,sort:n}=t;try{const a=await $(e,o,s,r,n);if(!Array.isArray(a))throw new Error("Response is not an array of products");switch(n){case"byABC_Asc":a.sort((c,i)=>c.name.localeCompare(i.name));break;case"byABC_Desc":a.sort((c,i)=>i.name.localeCompare(c.name));break;case"byPrice_Asc":a.sort((c,i)=>c.price-i.price);break;case"byPrice_Desc":a.sort((c,i)=>i.price-c.price);break;case"byPopularity_Asc":a.sort((c,i)=>c.popularity-i.popularity);break;case"byPopularity_Desc":a.sort((c,i)=>i.popularity-c.popularity);break}k(a)}catch(a){console.error("Error fetching products:",a),k([])}finally{m=!1}}function ot(){localStorage.getItem("filters")||B()}function g(t,e){const o=p();o[t]=e,localStorage.setItem("filters",JSON.stringify(o))}function B(){localStorage.setItem("filters",JSON.stringify({keyword:null,category:null,page:1,limit:6}))}function p(){return JSON.parse(localStorage.getItem("filters"))||B()}function st(){u()}const at=document.querySelector(".products-container"),rt=document.querySelector(".popular-container"),nt=document.querySelector(".discount-container");at.addEventListener("click",P);rt.addEventListener("click",P);nt.addEventListener("click",P);function P(t){if(!(t.target===t.currentTarget||t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.className==="popular-basket-img"||t.target.className==="icon-styles"||t.target.className==="discount-basket-icon"||t.target.alt==="icon bascket")){if(t.target.closest(".discount-list-item")!==null){const o=t.target.closest(".discount-list-item").id;f(o)}if(t.target.closest(".list-item")!==null){const o=t.target.closest(".list-item").id;f(o)}if(t.target.closest(".product-popular-card")!==null){const o=t.target.closest(".product-popular-card").id;f(o)}}}async function f(t,e){try{let a=function(c){(c.target.className==="remove-btn"||c.target.className==="remove-btn-img")&&r.close()};const o=[await d(t)],s=c=>{r.visible()&&c.key==="Escape"&&r.close()},r=D.create(A(o),{onClose:c=>document.removeEventListener("keydown",s),onClose:c=>n.querySelector(".add-btn").removeEventListener("click",h),onClose:c=>n.removeEventListener("click",a)});r.show(),document.addEventListener("keydown",s);const n=document.querySelector(".basicLightbox__placeholder");n.querySelector(".add-btn").addEventListener("click",h),n.addEventListener("click",a)}catch(o){console.log(o.message)}}_();
//# sourceMappingURL=commonHelpers2.js.map
