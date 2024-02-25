import{i as q}from"./vendor-ab977035.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const u="https://your-energy.b.goit.study/api",m=async(e,t,o)=>{const s=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:o});if(!s.ok)throw new Error(`Error: status: ${s.status}, ${s.statusText}`);return s.json()},I={async getExercises(e){const t=new URLSearchParams(e),o=`${u}/exercises?${t}`;return await m(o)},async getExercisesId(e){const t=`${u}/exercises/${e}`;return await m(t)},async editExercisesIdRating(e,t){const o="PATCH",r=`${u}/exercises/${e}/rating`,n=JSON.stringify(t);return await m(r,o,n)},async getExercisesFilter(e){const t=new URLSearchParams(e),o=`${u}/filters?${t}`;return await m(o)},async getExercisesQuote(){const e=`${u}/quote`;return await m(e)},async addSubscription(e){const t="POST",o=`${u}/subscription`,r=JSON.stringify(e);return await m(o,t,r)}},b=(e,t,o)=>{q.show({message:e,drag:!0,close:!1,timeout:o??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},l=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},O={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function F(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:o,date:r}=JSON.parse(e),n=new Date(r),s=new Date;if(n.getDate()===s.getDate()){M(t,o);return}}G()}F();async function G(){try{l(!0);const e=await I.getExercisesQuote(),{quote:t,author:o}=e,r={quote:t,author:o,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),M(t,o)}catch(e){b(e.message)}finally{l(!1)}}function M(e,t){O.content.textContent=e,O.author.textContent=t}q.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function U(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const _=document.querySelector(".js-pagination");let v;_.addEventListener("click",H);function W(e,t,o,r){if(e===1){_.innerHTML="";return}let n="";for(let s=1;s<=e;s++){const i=s===o.page;n+=`<button data-btn="${s}" class="${i?"active":""}">${s}</button>`}v={method:t,isLocal:r,params:o},_.innerHTML=n}function H(e){var r;if(e.target===e.currentTarget)return;const t=e.target,o=Number(t.textContent);(r=[..._.children].find(n=>n.classList.contains("active")))==null||r.classList.remove("active"),t.classList.add("active"),v.isLocal?T(o):v.method({...v.params,page:o}),U()}const j=768,J=10,Q=9,K=12,z=9,V=1440,X=window.innerWidth<j?Q:J,Y=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],Ee=window.innerWidth<j?z:K,Z=31;T();function T(e=1){const t=te();if(!t)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:n,paginationFavEl:s,fragment:i}=ee(),a=window.innerWidth;if(oe({workouts:o,emptyFavEl:n,paginationFavEl:s,favGalleryEl:r}))return;const{startIndex:c,endIndex:f}=ne({perPage:X,totalWorkouts:o.length,pageNumber:e,screenWidth:a});l(!0),se({workouts:o,startIndex:c,endIndex:f,template:t,fragment:i,favGalleryEl:r}),l(!1)}function ee(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function te(){return document.querySelector("#exercise-fav")}function oe({workouts:e,emptyFavEl:t,paginationFavEl:o,favGalleryEl:r}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),r.classList.add("hidden"),o.classList.add("hidden"),l(!1),!0}function ne({perPage:e,totalWorkouts:t,pageNumber:o,screenWidth:r}){const n=Math.ceil(t/e),s={page:o};let i=(o-1)*e,a=Math.min(i+e,t);return r<V?W(n,null,s,!0):(i=0,a=t),{startIndex:i,endIndex:a}}function se({workouts:e,startIndex:t,endIndex:o,template:r,fragment:n,favGalleryEl:s}){for(let i=t;i<o;i++){const a=r.children[0].cloneNode(!0),c=Y.map(d=>a.querySelector(`.${d}`)),{_id:f,name:p,bodyPart:L,target:B,burnedCalories:N}=e[i];if([B,N,L,p].forEach((d,P)=>{c[P].textContent=d}),a.setAttribute("id",f),p.length>Z){const d=a.querySelector(".js-tooltip");d.dataset.tooltip=p,d.classList.add("tooltip")}n.appendChild(a)}s.replaceChildren(n)}const re="/finalJSProject-yourEnergy/pr-preview/pr-91/assets/example-img-2998cc5c.jpg";function ie(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(r=>r._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ae(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=t.findIndex(r=>r._id===e._id);o!==-1&&(t.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const y="/finalJSProject-yourEnergy/pr-preview/pr-91/assets/icons-a6fed07b.svg",x=document.querySelector(".modal-exercise"),h=document.querySelector(".overlay");let g=!1,w;async function be(e){h.addEventListener("click",R),document.addEventListener("keydown",C);try{l(!0);const t=await I.getExercisesId(e);w=t;const o=ue(t);ce(o,t),pe();const r=document.querySelector(".modal-exercise__btn-close"),n=document.querySelector(".js-favorite__btn"),s=document.querySelector(".js-rating__btn");r.addEventListener("click",$),n.addEventListener("click",me),s.addEventListener("click",fe)}catch(t){b(t.message)}finally{l(!1)}}function ce(e,t){x.innerHTML=e,le(t)}function le(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(n=>n._id===e._id)?(g=!0,t.innerHTML=A()):(g=!1,t.innerHTML=k())}function de(e){const t="#eea10c",o="#f4f4f433";let n="";for(let s=0;s<5;s+=1){const i=`gradient-id${s}`,a=s+1<=e?100:s>e?0:e%1*100,c=`
        <linearGradient id="${i}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${a}%" stop-color=${t}></stop>
            <stop offset="0%" stop-color=${o}></stop>
        </linearGradient>`;n+=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            ${c}
            <use href="${y}#icon-star" fill="url(#${i})"></use>
        </svg>`}return n}function k(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${y}#icon-heart"></use>
    </svg>`}function A(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${y}#icon-trash"></use>
    </svg>`}function ue({_id:e,name:t,rating:o,gifUrl:r,target:n,bodyPart:s,equipment:i,popularity:a,burnedCalories:c,time:f,description:p}){const L=de(o);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${y}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??re}" width="260" height="260" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(o)?`${o}.0`:o.toFixed(1)}
                    ${L}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${n}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Body Part</h3>
                            <p class="modal-exercise__text">${s}</p>
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
                            <p class="modal-exercise__text">${c}/${f} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${p}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn">Give a rating</button>
        </div>`}function me(){const e=document.querySelector(".js-favorite__btn");g=!g,g?(ie(w),e.innerHTML=A()):(ae(w),e.innerHTML=k(),T())}function R(e){e.target===h&&$()}function C({key:e}){e==="Escape"&&!x.classList.contains("hidden")&&$()}function fe(){b("Under development")}function pe(){h.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function $(){h.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll",h.removeEventListener("click",R),document.removeEventListener("keydown",C)}const D=document.querySelector(".js-menu-backdrop"),ge=document.querySelector(".js-menu-container"),he=document.querySelector(".js-open-menu"),ve=document.querySelector(".js-close-menu"),_e=document.querySelector(".js-menu-link");function S(){ge.classList.toggle("is-open"),D.classList.toggle("is-hidden")}function ye(e){e.currentTarget!==e.target&&S()}function xe({target:e}){e.closest("#mob-menu")||S()}he.addEventListener("click",S);ve.addEventListener("click",S);_e.addEventListener("click",ye);D.addEventListener("click",xe);const E=document.getElementById("scroll-top"),Se=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},Le=()=>{window.scrollY>window.innerHeight?E.classList.add("scroll-show"):E.classList.remove("scroll-show")};window.addEventListener("scroll",Le);E.addEventListener("click",Se);export{Ee as G,Z as M,W as a,b,U as c,I as f,T as i,be as o,ae as r,l as s};
//# sourceMappingURL=scroll-top-debb89af.js.map
