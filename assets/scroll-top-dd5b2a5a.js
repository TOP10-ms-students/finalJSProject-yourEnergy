import{i as I}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const l="https://your-energy.b.goit.study/api",d=async(e,t,s)=>{const o=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:s});if(!o.ok)throw new Error(`Error: status: ${o.status}, ${o.statusText}`);return o.json()},M={async getExercises(e){const t=new URLSearchParams(e),s=`${l}/exercises?${t}`;return await d(s)},async getExercisesId(e){const t=`${l}/exercises/${e}`;return await d(t)},async editExercisesIdRating(e,t){const s="PATCH",r=`${l}/exercises/${e}/rating`,n=JSON.stringify(t);return await d(r,s,n)},async getExercisesFilter(e){const t=new URLSearchParams(e),s=`${l}/filters?${t}`;return await d(s)},async getExercisesQuote(){const e=`${l}/quote`;return await d(e)},async addSubscription(e){const t="POST",s=`${l}/subscription`,r=JSON.stringify(e);return await d(s,t,r)}},O=(e,t,s)=>{I.show({message:e,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},j={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function H(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:s,date:r}=JSON.parse(e),n=new Date(r),o=new Date;if(n.getDate()===o.getDate()){k(t,s);return}}J()}H();async function J(){try{c(!0);const e=await M.getExercisesQuote(),{quote:t,author:s}=e,r={quote:t,author:s,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),k(t,s)}catch(e){O(e.message)}finally{c(!1)}}function k(e,t){j.content.textContent=e,j.author.textContent=t}I.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function W(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const y=document.querySelector(".js-pagination");let h;y.addEventListener("click",G);function U(e,t,s,r){if(e===1){y.innerHTML="";return}let n="";for(let o=1;o<=e;o++){const i=o===s.page;n+=`<button data-btn="${o}" class="${i?"active":""}">${o}</button>`}h={method:t,isLocal:r,params:s},y.innerHTML=n}function G(e){var r;if(e.target===e.currentTarget)return;const t=e.target,s=Number(t.textContent);(r=[...y.children].find(n=>n.classList.contains("active")))==null||r.classList.remove("active"),t.classList.add("active"),h.isLocal?T(s):h.method({...h.params,page:s}),W()}const Q=1440,K=768,z=9,X=10,V=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"];let E=!1;T();function T(e=1){const t=Z();if(!t)return;const s=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:n,paginationFavEl:o,fragment:i}=Y(),a=window.innerWidth;if(ee({workouts:s,emptyFavEl:n,paginationFavEl:o,favGalleryEl:r}))return;const u=a<K?z:X,{startIndex:m,endIndex:f}=te({perPage:u,totalWorkouts:s.length,pageNumber:e,screenWidth:a});E?c(E):E=!0,se({workouts:s,startIndex:m,endIndex:f,template:t,fragment:i,favGalleryEl:r}),c(!1)}function Y(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function Z(){return document.querySelector("#exercise-fav")}function ee({workouts:e,emptyFavEl:t,paginationFavEl:s,favGalleryEl:r}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),r.classList.add("hidden"),s.classList.add("hidden"),c(!1),!0}function te({perPage:e,totalWorkouts:t,pageNumber:s,screenWidth:r}){const n=Math.ceil(t/e),o={page:s};let i=(s-1)*e,a=Math.min(i+e,t);return r<Q?U(n,null,o,!0):(i=0,a=t),{startIndex:i,endIndex:a}}function se({workouts:e,startIndex:t,endIndex:s,template:r,fragment:n,favGalleryEl:o}){for(let i=t;i<s;i++){const a=r.children[0].cloneNode(!0),u=V.map(S=>a.querySelector(`.${S}`)),{_id:m,name:f,bodyPart:b,target:P,burnedCalories:C}=e[i];[P,C,b,f].forEach((S,F)=>{u[F].textContent=S}),a.setAttribute("id",m),n.appendChild(a)}o.replaceChildren(n)}const ne="/finalJSProject-yourEnergy/assets/example-img-2998cc5c.jpg";function oe(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(r=>r._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function re(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],s=t.findIndex(r=>r._id===e._id);s!==-1&&(t.splice(s,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const p="/finalJSProject-yourEnergy/assets/icons-7601a5dc.svg",_=document.querySelector(".modal-exercise"),v=document.querySelector(".overlay");let g=!1,w;async function _e(e){v.addEventListener("click",A),document.addEventListener("keydown",B);try{c(!0);const t=await M.getExercisesId(e);w=t;const s=le(t);ie(s,t),me();const r=document.querySelector(".modal-exercise__btn-close"),n=document.querySelector(".js-favorite__btn"),o=document.querySelector(".js-rating__btn");r.addEventListener("click",$),n.addEventListener("click",de),o.addEventListener("click",ue)}catch(t){O(t.message)}finally{c(!1)}}function ie(e,t){_.innerHTML=e,ae(t)}function ae(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(n=>n._id===e._id)?(g=!0,t.innerHTML=R()):(g=!1,t.innerHTML=D())}function ce(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-full"
          ></use>
        </svg>`,s=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(e);let n="";for(let o=0;o<r;o+=1)n+=t;for(let o=0;o<5-r;o+=1)n+=s;return n}function D(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-heart"></use>
    </svg>`}function R(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-trash"></use>
    </svg>`}function le({_id:e,name:t,rating:s,gifUrl:r,target:n,bodyPart:o,equipment:i,popularity:a,burnedCalories:u,time:m,description:f}){const b=ce(s);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${p}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??ne}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(s)?`${s}.0`:s.toFixed(1)}
                    ${b}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${n}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Body Part</h3>
                            <p class="modal-exercise__text">${o}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Equipment</h3>
                            <p class="modal-exercise__text">${i}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Popular</h3>
                            <p class="modal-exercise__text">${a}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${u}/${m} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${f}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn">Give a rating</button>
        </div>`}function de(){const e=document.querySelector(".js-favorite__btn");g=!g,g?(oe(w),e.innerHTML=R()):(re(w),e.innerHTML=D(),T())}function A(e){e.target===v&&$()}function B({key:e}){e==="Escape"&&!_.classList.contains("hidden")&&$()}function ue(){O("Under development")}function me(){v.classList.remove("hidden"),_.classList.remove("hidden"),document.body.style.overflow="hidden"}function $(){v.classList.add("hidden"),_.classList.add("hidden"),document.body.style.overflow="scroll",v.removeEventListener("click",A),document.removeEventListener("keydown",B)}const N=document.querySelector(".js-menu-backdrop"),fe=document.querySelector(".js-menu-container"),L=document.querySelector(".js-open-menu"),ge=document.querySelector(".js-close-menu"),pe=document.querySelectorAll(".js-menu-link, .js-close-menu");function x(){const e=L.getAttribute("aria-expanded")==="true";L.setAttribute("aria-expanded",!e),fe.classList.toggle("is-open"),N.classList.toggle("is-hidden")}L.addEventListener("click",x);ge.addEventListener("click",x);pe.forEach(e=>{e.addEventListener("click",x)});N.addEventListener("click",({target:e})=>{e.closest("#mob-menu")||x()});const q=document.getElementById("scroll-top"),ve=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},he=()=>{window.scrollY>window.innerHeight?q.classList.add("scroll-show"):q.classList.remove("scroll-show")};window.addEventListener("scroll",he);q.addEventListener("click",ve);export{U as a,O as b,M as f,T as i,_e as o,re as r,c as s};
//# sourceMappingURL=scroll-top-dd5b2a5a.js.map
