import{b as y}from"./vendor-4b9aba64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const w="/food-boutique/assets/minus-7f58cb69.svg",k="/food-boutique/assets/plus-8292619f.svg",p="/food-boutique/assets/basket-a161fb4d.svg",v="/food-boutique/assets/discount-8db0687b.svg",S="/food-boutique/assets/popular-baskett-cb043ad6.svg",m="/food-boutique/assets/closed-bf66d401.svg";function A(s){return s.map(({price:e,name:i,img:o,_id:t,category:a,size:n,popularity:c,is10PercentOff:l})=>`<li class="list-item animation-style" id="${t}">
            <div class="list-item-img">
               ${l?`<img class="products-discount-icon animations-rotate" src="${v}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${o}">
            </div>
            <p class="products-titel">${i}</p>
            <div class="list-item-info">
               <p>Category: <span>${a}</span></p>
               <p>Size: <span>${n}</span></p>
               <p>Popularity: <span>${c}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
               <img src="${p}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function N(s){return s.map(({price:e,name:i,img:o,_id:t,category:a,size:n,popularity:c})=>`
           <div class="product-popular-card animation-style" id="${t}">
           <div class="popular-image-item">
               <img src="${o}" alt="${i}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${i}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${a}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${n}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${c}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${i}')">
                   <img class="popular-basket-img" src="${S}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function I(s){return s.splice(2),s.map(({price:e,name:i,img:o,_id:t})=>`
         <li class="discount-list-item animation-style" id="${t}" >
            <div class="discount-card" >
               <img class="discount-icon animations-rotate" src="${v}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${o}"></div>
            <div class="discount-info">
               <p>${i}</p>
               <div class="discount-prise">
                <span>&#36;${e}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${p}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function T(s){return s.map(({price:e,name:i,img:o,_id:t,category:a,size:n})=>`<li class="cart-list-item" id="${t}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${o}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${i}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${a}</span></p>
                <p>Size:  <span>${n}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${e}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${w}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${k}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function D(s){return s.map(({price:e,name:i,img:o,_id:t,category:a,size:n,popularity:c,desc:l})=>`
         <li class="popup-list-item" id="${t}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${o}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${i}</p>
               <p>Category: <span>${a}</span></p>
               <p>Size: <span>${n}</span></p>
               <p>Popularity: <span>${c}</span></p>
               <p class="modal-desc" >${l}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${p}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const q="products in cart",L=document.querySelector(".header-basket-counter");function $(){const s=JSON.parse(localStorage.getItem(q))||[];L.textContent=s.length.toString()}window.addEventListener("storage",()=>{$()});$();const x="/food-boutique/assets/frut-popap-x1-e219a22f.png",P="/food-boutique/assets/frut-popap-x2-cdad5963.png",E=document.querySelector("#formEmail"),b=document.querySelector("#formInput");E.addEventListener("submit",z);function z(s){s.preventDefault();const e=b.value.trim();if(!M(e)){alert("Please enter a valid email address");return}if(e===""){alert("Please enter an email address");return}C({email:e}).then(()=>{console.log("Data sent successfully"),b.value="",O()}).catch(i=>{console.error("There was a problem with the fetch operation:",i)})}function C(s){return new Promise((e,i)=>{setTimeout(()=>{console.log("Imitating sending data to server:",s),e()},2e3)})}function M(s){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)}function O(){const s=y.create(`
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thanks for subscribing for <span>new</span> products</h2>
         <p>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      </div>
      <img
      class="sub-modal-pic"
         src="${x}"
         alt="Empty basket"
         srcset="${P}"
      />
   </div>
   `,{onClose:o=>e.removeEventListener("click",i)});s.show();const e=document.querySelector(".sub-modal");e.addEventListener("click",i);function i(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&s.close()}}let d=0;const g=60,u=document.querySelector(".header"),f=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,h=()=>u.classList.contains("hide");function Z(){window.addEventListener("scroll",()=>{r()>d&&!h()&&r()>g?u.classList.add("hide"):r()<d&&h()&&u.classList.remove("hide"),r()>g?f.classList.add("scrolled"):f.classList.remove("scrolled"),d=r()})}export{$ as a,A as b,T as c,N as d,I as e,D as f,Z as h};
//# sourceMappingURL=scroll-b04a927b.js.map
