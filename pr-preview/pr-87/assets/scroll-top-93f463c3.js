import{i as I}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const l="https://your-energy.b.goit.study/api",d=async(e,t,n)=>{const o=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:n});if(!o.ok)throw new Error(`Error: status: ${o.status}, ${o.statusText}`);return o.json()},j={async getExercises(e){const t=new URLSearchParams(e),n=`${l}/exercises?${t}`;return await d(n)},async getExercisesId(e){const t=`${l}/exercises/${e}`;return await d(t)},async editExercisesIdRating(e,t){const n="PATCH",r=`${l}/exercises/${e}/rating`,s=JSON.stringify(t);return await d(r,n,s)},async getExercisesFilter(e){const t=new URLSearchParams(e),n=`${l}/filters?${t}`;return await d(n)},async getExercisesQuote(){const e=`${l}/quote`;return await d(e)},async addSubscription(e){const t="POST",n=`${l}/subscription`,r=JSON.stringify(e);return await d(n,t,r)}},q=(e,t,n)=>{I.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},$={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function P(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:n,date:r}=JSON.parse(e),s=new Date(r),o=new Date;if(s.getDate()===o.getDate()){M(t,n);return}}W()}P();async function W(){try{c(!0);const e=await j.getExercisesQuote(),{quote:t,author:n}=e,r={quote:t,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),M(t,n)}catch(e){q(e.message)}finally{c(!1)}}function M(e,t){$.content.textContent=e,$.author.textContent=t}I.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function H(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function we(e){if(e)return!1;c(!e)}const h=document.querySelector(".js-pagination");let v;h.addEventListener("click",U);function J(e,t,n,r){if(e===1){h.innerHTML="";return}let s="";for(let o=1;o<=e;o++){const i=o===n.page;s+=`<button data-btn="${o}" class="${i?"active":""}">${o}</button>`}v={method:t,isLocal:r,params:n},h.innerHTML=s}function U(e){var r;if(e.target===e.currentTarget)return;const t=e.target,n=Number(t.textContent);(r=[...h.children].find(s=>s.classList.contains("active")))==null||r.classList.remove("active"),t.classList.add("active"),v.isLocal?T(n):v.method({...v.params,page:n}),H()}const G=768,Q=9,K=10,z=1440,V=window.innerWidth<G?Q:K,X=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"];let b=!1;T();function T(e=1){const t=Z();if(!t)return;const n=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,paginationFavEl:o,fragment:i}=Y(),a=window.innerWidth;if(ee({workouts:n,emptyFavEl:s,paginationFavEl:o,favGalleryEl:r}))return;const{startIndex:u,endIndex:m}=te({perPage:V,totalWorkouts:n.length,pageNumber:e,screenWidth:a});b?c(b):b=!0,ne({workouts:n,startIndex:u,endIndex:m,template:t,fragment:i,favGalleryEl:r}),c(!1)}function Y(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function Z(){return document.querySelector("#exercise-fav")}function ee({workouts:e,emptyFavEl:t,paginationFavEl:n,favGalleryEl:r}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden"),c(!1),!0}function te({perPage:e,totalWorkouts:t,pageNumber:n,screenWidth:r}){const s=Math.ceil(t/e),o={page:n};let i=(n-1)*e,a=Math.min(i+e,t);return r<z?J(s,null,o,!0):(i=0,a=t),{startIndex:i,endIndex:a}}function ne({workouts:e,startIndex:t,endIndex:n,template:r,fragment:s,favGalleryEl:o}){for(let i=t;i<n;i++){const a=r.children[0].cloneNode(!0),u=X.map(w=>a.querySelector(`.${w}`)),{_id:m,name:x,bodyPart:S,target:N,burnedCalories:A}=e[i];[N,A,S,x].forEach((w,F)=>{u[F].textContent=w}),a.setAttribute("id",m),s.appendChild(a)}o.replaceChildren(s)}const se="/finalJSProject-yourEnergy/pr-preview/pr-87/assets/example-img-2998cc5c.jpg";function oe(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(r=>r._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function re(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],n=t.findIndex(r=>r._id===e._id);n!==-1&&(t.splice(n,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const g="/finalJSProject-yourEnergy/pr-preview/pr-87/assets/icons-7601a5dc.svg",_=document.querySelector(".modal-exercise"),p=document.querySelector(".overlay");let f=!1,E;async function be(e){p.addEventListener("click",R),document.addEventListener("keydown",B);try{c(!0);const t=await j.getExercisesId(e);E=t;const n=le(t);ie(n,t),me();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".js-favorite__btn"),o=document.querySelector(".js-rating__btn");r.addEventListener("click",O),s.addEventListener("click",de),o.addEventListener("click",ue)}catch(t){q(t.message)}finally{c(!1)}}function ie(e,t){_.innerHTML=e,ae(t)}function ae(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===e._id)?(f=!0,t.innerHTML=D()):(f=!1,t.innerHTML=k())}function ce(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-full"
          ></use>
        </svg>`,n=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(e);let s="";for(let o=0;o<r;o+=1)s+=t;for(let o=0;o<5-r;o+=1)s+=n;return s}function k(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-heart"></use>
    </svg>`}function D(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-trash"></use>
    </svg>`}function le({_id:e,name:t,rating:n,gifUrl:r,target:s,bodyPart:o,equipment:i,popularity:a,burnedCalories:u,time:m,description:x}){const S=ce(n);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${g}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??se}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(n)?`${n}.0`:n.toFixed(1)}
                    ${S}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${s}</p>
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
                        ${x}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn">Give a rating</button>
        </div>`}function de(){const e=document.querySelector(".js-favorite__btn");f=!f,f?(oe(E),e.innerHTML=D()):(re(E),e.innerHTML=k(),T())}function R(e){e.target===p&&O()}function B({key:e}){e==="Escape"&&!_.classList.contains("hidden")&&O()}function ue(){q("Under development")}function me(){p.classList.remove("hidden"),_.classList.remove("hidden"),document.body.style.overflow="hidden"}function O(){p.classList.add("hidden"),_.classList.add("hidden"),document.body.style.overflow="scroll",p.removeEventListener("click",R),document.removeEventListener("keydown",B)}const C=document.querySelector(".js-menu-backdrop"),fe=document.querySelector(".js-menu-container"),ge=document.querySelector(".js-open-menu"),pe=document.querySelector(".js-close-menu"),ve=document.querySelector(".js-menu-link");function y(){fe.classList.toggle("is-open"),C.classList.toggle("is-hidden")}function he(e){e.currentTarget!==e.target&&y()}function _e({target:e}){e.closest("#mob-menu")||y()}ge.addEventListener("click",y);pe.addEventListener("click",y);ve.addEventListener("click",he);C.addEventListener("click",_e);const L=document.getElementById("scroll-top"),ye=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},xe=()=>{window.scrollY>window.innerHeight?L.classList.add("scroll-show"):L.classList.remove("scroll-show")};window.addEventListener("scroll",xe);L.addEventListener("click",ye);export{V as G,J as a,c as b,j as f,we as h,T as i,be as o,re as r,q as s};
//# sourceMappingURL=scroll-top-93f463c3.js.map
