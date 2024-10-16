import{b as k}from"./vendor-4b9aba64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const S="/food-boutique/assets/minus-7f58cb69.svg",q="/food-boutique/assets/plus-8292619f.svg",b="/food-boutique/assets/basket-a161fb4d.svg",$="/food-boutique/assets/discount-8db0687b.svg",L="/food-boutique/assets/popular-baskett-cb043ad6.svg",g="/food-boutique/assets/closed-bf66d401.svg";function d(s){return s.map(e=>{let a=e.category;return typeof a=="string"&&(a=a.split("_").join(" ")),{...e,category:a}})}function I(s){return d(s).map(({price:a,name:o,img:t,_id:i,category:n,size:r,popularity:c,is10PercentOff:u})=>`<li class="list-item animation-style" id="${i}">
            <div class="list-item-img">
               ${u?`<img class="products-discount-icon animations-rotate" src="${$}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${t}">
            </div>
            <p class="products-titel">${o}</p>
            <div class="list-item-info">
               <p>Category: <span>${n}</span></p>
               <p>Size: <span>${r}</span></p>
               <p>Popularity: <span>${c}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${a}</span>
               <button class="add-btn icon-styles">
               <img src="${b}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function T(s){return d(s).map(({price:a,name:o,img:t,_id:i,category:n,size:r,popularity:c})=>`
           <div class="product-popular-card animation-style" id="${i}">
           <div class="popular-image-item">
               <img src="${t}" alt="${o}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${o}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${n}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${r}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${c}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${o}')">
                   <img class="popular-basket-img" src="${L}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function D(s){return s.splice(2),s.map(({price:e,name:a,img:o,_id:t})=>`
         <li class="discount-list-item animation-style" id="${t}" >
            <div class="discount-card" >
               <img class="discount-icon animations-rotate" src="${$}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${o}"></div>
            <div class="discount-info">
               <p>${a}</p>
               <div class="discount-prise">
                <span>&#36;${e}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${b}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function Z(s){return d(s).map(({price:a,name:o,img:t,_id:i,category:n,size:r})=>`<li class="cart-list-item" id="${i}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${t}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${g}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${o}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${n}</span></p>
                <p>Size:  <span>${r}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${a}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${S}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${q}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function _(s){return d(s).map(({price:a,name:o,img:t,_id:i,category:n,size:r,popularity:c,desc:u})=>`
         <li class="popup-list-item" id="${i}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${g}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${t}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${o}</p>
               <p>Category: <span>${n}</span></p>
               <p>Size: <span>${r}</span></p>
               <p>Popularity: <span>${c}</span></p>
               <p class="modal-desc" >${u}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${a}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${b}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const x="products in cart",P=document.querySelector(".header-basket-counter");function w(){const s=JSON.parse(localStorage.getItem(x))||[];P.textContent=s.length.toString()}window.addEventListener("storage",()=>{w()});w();const E="/food-boutique/assets/frut-popap-x1-e219a22f.png",z="/food-boutique/assets/frut-popap-x2-cdad5963.png",C=document.querySelector("#formEmail"),f=document.querySelector("#formInput");C.addEventListener("submit",M);function M(s){s.preventDefault();const e=f.value.trim();if(!j(e)){alert("Please enter a valid email address");return}if(e===""){alert("Please enter an email address");return}O({email:e}).then(()=>{console.log("Data sent successfully"),f.value="",A()}).catch(a=>{console.error("There was a problem with the fetch operation:",a)})}function O(s){return new Promise((e,a)=>{setTimeout(()=>{console.log("Imitating sending data to server:",s),e()},2e3)})}function j(s){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)}function A(){const s=k.create(`
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${g}" alt="icon bascket" width="18" height="18">
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thanks for subscribing for <span>new</span> products</h2>
         <p>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      </div>
      <img
      class="sub-modal-pic"
         src="${E}"
         alt="Empty basket"
         srcset="${z}"
      />
   </div>
   `,{onClose:o=>e.removeEventListener("click",a)});s.show();const e=document.querySelector(".sub-modal");e.addEventListener("click",a);function a(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&s.close()}}let p=0;const h=60,m=document.querySelector(".header"),v=document.querySelector(".header-section"),l=()=>window.pageYOffset||document.documentElement.scrollTop,y=()=>m.classList.contains("hide");function F(){window.addEventListener("scroll",()=>{l()>p&&!y()&&l()>h?m.classList.add("hide"):l()<p&&y()&&m.classList.remove("hide"),l()>h?v.classList.add("scrolled"):v.classList.remove("scrolled"),p=l()})}export{w as a,I as b,Z as c,T as d,D as e,_ as f,F as h};
//# sourceMappingURL=scroll-ccaef62a.js.map
