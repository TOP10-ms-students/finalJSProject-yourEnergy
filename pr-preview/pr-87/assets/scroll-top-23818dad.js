import{i as $}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const l="https://your-energy.b.goit.study/api",d=async(e,t,n)=>{const o=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:n});if(!o.ok)throw new Error(`Error: status: ${o.status}, ${o.statusText}`);return o.json()},I={async getExercises(e){const t=new URLSearchParams(e),n=`${l}/exercises?${t}`;return await d(n)},async getExercisesId(e){const t=`${l}/exercises/${e}`;return await d(t)},async editExercisesIdRating(e,t){const n="PATCH",r=`${l}/exercises/${e}/rating`,s=JSON.stringify(t);return await d(r,n,s)},async getExercisesFilter(e){const t=new URLSearchParams(e),n=`${l}/filters?${t}`;return await d(n)},async getExercisesQuote(){const e=`${l}/quote`;return await d(e)},async addSubscription(e){const t="POST",n=`${l}/subscription`,r=JSON.stringify(e);return await d(n,t,r)}},L=(e,t,n)=>{$.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},O={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function F(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:n,date:r}=JSON.parse(e),s=new Date(r),o=new Date;if(s.getDate()===o.getDate()){j(t,n);return}}P()}F();async function P(){try{c(!0);const e=await I.getExercisesQuote(),{quote:t,author:n}=e,r={quote:t,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),j(t,n)}catch(e){L(e.message)}finally{c(!1)}}function j(e,t){O.content.textContent=e,O.author.textContent=t}$.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function W(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const v=document.querySelector(".js-pagination");let h;v.addEventListener("click",J);function H(e,t,n,r){if(e===1){v.innerHTML="";return}let s="";for(let o=1;o<=e;o++){const i=o===n.page;s+=`<button data-btn="${o}" class="${i?"active":""}">${o}</button>`}h={method:t,isLocal:r,params:n},v.innerHTML=s}function J(e){var r;if(e.target===e.currentTarget)return;const t=e.target,n=Number(t.textContent);(r=[...v.children].find(s=>s.classList.contains("active")))==null||r.classList.remove("active"),t.classList.add("active"),h.isLocal?q(n):h.method({...h.params,page:n}),W()}const U=768,G=9,Q=10,K=1440,z=window.innerWidth<U?G:Q,V=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"];q();function q(e=1){const t=Y();if(!t)return;const n=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,paginationFavEl:o,fragment:i}=X(),a=window.innerWidth;if(Z({workouts:n,emptyFavEl:s,paginationFavEl:o,favGalleryEl:r}))return;const{startIndex:u,endIndex:m}=ee({perPage:z,totalWorkouts:n.length,pageNumber:e,screenWidth:a});c(!0),te({workouts:n,startIndex:u,endIndex:m,template:t,fragment:i,favGalleryEl:r}),c(!1)}function X(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function Y(){return document.querySelector("#exercise-fav")}function Z({workouts:e,emptyFavEl:t,paginationFavEl:n,favGalleryEl:r}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden"),c(!1),!0}function ee({perPage:e,totalWorkouts:t,pageNumber:n,screenWidth:r}){const s=Math.ceil(t/e),o={page:n};let i=(n-1)*e,a=Math.min(i+e,t);return r<K?H(s,null,o,!0):(i=0,a=t),{startIndex:i,endIndex:a}}function te({workouts:e,startIndex:t,endIndex:n,template:r,fragment:s,favGalleryEl:o}){for(let i=t;i<n;i++){const a=r.children[0].cloneNode(!0),u=V.map(S=>a.querySelector(`.${S}`)),{_id:m,name:x,bodyPart:w,target:C,burnedCalories:A}=e[i];[C,A,w,x].forEach((S,N)=>{u[N].textContent=S}),a.setAttribute("id",m),s.appendChild(a)}o.replaceChildren(s)}const ne="/finalJSProject-yourEnergy/pr-preview/pr-87/assets/example-img-2998cc5c.jpg";function se(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(r=>r._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function oe(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],n=t.findIndex(r=>r._id===e._id);n!==-1&&(t.splice(n,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const g="/finalJSProject-yourEnergy/pr-preview/pr-87/assets/icons-7601a5dc.svg",_=document.querySelector(".modal-exercise"),p=document.querySelector(".overlay");let f=!1,b;async function we(e){p.addEventListener("click",D),document.addEventListener("keydown",R);try{c(!0);const t=await I.getExercisesId(e);b=t;const n=ce(t);re(n,t),ue();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".js-favorite__btn"),o=document.querySelector(".js-rating__btn");r.addEventListener("click",T),s.addEventListener("click",le),o.addEventListener("click",de)}catch(t){L(t.message)}finally{c(!1)}}function re(e,t){_.innerHTML=e,ie(t)}function ie(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===e._id)?(f=!0,t.innerHTML=k()):(f=!1,t.innerHTML=M())}function ae(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-full"
          ></use>
        </svg>`,n=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(e);let s="";for(let o=0;o<r;o+=1)s+=t;for(let o=0;o<5-r;o+=1)s+=n;return s}function M(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-heart"></use>
    </svg>`}function k(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-trash"></use>
    </svg>`}function ce({_id:e,name:t,rating:n,gifUrl:r,target:s,bodyPart:o,equipment:i,popularity:a,burnedCalories:u,time:m,description:x}){const w=ae(n);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${g}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??ne}" width="260" height="260" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(n)?`${n}.0`:n.toFixed(1)}
                    ${w}
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
        </div>`}function le(){const e=document.querySelector(".js-favorite__btn");f=!f,f?(se(b),e.innerHTML=k()):(oe(b),e.innerHTML=M(),q())}function D(e){e.target===p&&T()}function R({key:e}){e==="Escape"&&!_.classList.contains("hidden")&&T()}function de(){L("Under development")}function ue(){p.classList.remove("hidden"),_.classList.remove("hidden"),document.body.style.overflow="hidden"}function T(){p.classList.add("hidden"),_.classList.add("hidden"),document.body.style.overflow="scroll",p.removeEventListener("click",D),document.removeEventListener("keydown",R)}const B=document.querySelector(".js-menu-backdrop"),me=document.querySelector(".js-menu-container"),fe=document.querySelector(".js-open-menu"),ge=document.querySelector(".js-close-menu"),pe=document.querySelector(".js-menu-link");function y(){me.classList.toggle("is-open"),B.classList.toggle("is-hidden")}function he(e){e.currentTarget!==e.target&&y()}function ve({target:e}){e.closest("#mob-menu")||y()}fe.addEventListener("click",y);ge.addEventListener("click",y);pe.addEventListener("click",he);B.addEventListener("click",ve);const E=document.getElementById("scroll-top"),_e=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},ye=()=>{window.scrollY>window.innerHeight?E.classList.add("scroll-show"):E.classList.remove("scroll-show")};window.addEventListener("scroll",ye);E.addEventListener("click",_e);export{z as G,H as a,L as b,W as c,I as f,q as i,we as o,oe as r,c as s};
//# sourceMappingURL=scroll-top-23818dad.js.map
