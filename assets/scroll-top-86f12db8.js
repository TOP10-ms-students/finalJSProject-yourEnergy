import{i as I}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const d="https://your-energy.b.goit.study/api",u=async(e,t,n)=>{const s=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:n});if(!s.ok)throw new Error(`Error: status: ${s.status}, ${s.statusText}`);return s.json()},M={async getExercises(e){const t=new URLSearchParams(e),n=`${d}/exercises?${t}`;return await u(n)},async getExercisesId(e){const t=`${d}/exercises/${e}`;return await u(t)},async editExercisesIdRating(e,t){const n="PATCH",i=`${d}/exercises/${e}/rating`,o=JSON.stringify(t);return await u(i,n,o)},async getExercisesFilter(e){const t=new URLSearchParams(e),n=`${d}/filters?${t}`;return await u(n)},async getExercisesQuote(){const e=`${d}/quote`;return await u(e)},async addSubscription(e){const t="POST",n=`${d}/subscription`,i=JSON.stringify(e);return await u(n,t,i)}},b=(e,t,n)=>{I.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},q={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function F(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:n,date:i}=JSON.parse(e),o=new Date(i),s=new Date;if(o.getDate()===s.getDate()){$(t,n);return}}U()}F();async function U(){try{c(!0);const e=await M.getExercisesQuote(),{quote:t,author:n}=e,i={quote:t,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(i)),$(t,n)}catch(e){b(e.message)}finally{c(!1)}}function $(e,t){q.content.textContent=e,q.author.textContent=t}I.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function W(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const y=document.querySelector(".js-pagination");let _;y.addEventListener("click",H);function G(e,t,n,i){if(e===1){y.innerHTML="";return}let o="";for(let s=1;s<=e;s++){const r=s===n.page;o+=`<button data-btn="${s}" class="${r?"active":""}">${s}</button>`}_={method:t,isLocal:i,params:n},y.innerHTML=o}function H(e){var i;if(e.target===e.currentTarget)return;const t=e.target,n=Number(t.textContent);(i=[...y.children].find(o=>o.classList.contains("active")))==null||i.classList.remove("active"),t.classList.add("active"),_.isLocal?T(n):_.method({..._.params,page:n}),W()}const j=768,J=9,Q=10,K=12,X=9,z=1440,Y=window.innerWidth<j?J:Q,V=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],we=window.innerWidth<j?X:K,Z=31;T();function T(e=1){const t=te();if(!t)return;const n=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:i,emptyFavEl:o,paginationFavEl:s,fragment:r}=ee(),a=window.innerWidth;if(ne({workouts:n,emptyFavEl:o,paginationFavEl:s,favGalleryEl:i}))return;const{startIndex:m,endIndex:f}=oe({perPage:Y,totalWorkouts:n.length,pageNumber:e,screenWidth:a});c(!0),se({workouts:n,startIndex:m,endIndex:f,template:t,fragment:r,favGalleryEl:i}),c(!1)}function ee(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function te(){return document.querySelector("#exercise-fav")}function ne({workouts:e,emptyFavEl:t,paginationFavEl:n,favGalleryEl:i}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),i.classList.add("hidden"),n.classList.add("hidden"),c(!1),!0}function oe({perPage:e,totalWorkouts:t,pageNumber:n,screenWidth:i}){const o=Math.ceil(t/e),s={page:n};let r=(n-1)*e,a=Math.min(r+e,t);return i<z?G(o,null,s,!0):(r=0,a=t),{startIndex:r,endIndex:a}}function se({workouts:e,startIndex:t,endIndex:n,template:i,fragment:o,favGalleryEl:s}){for(let r=t;r<n;r++){const a=i.children[0].cloneNode(!0),m=V.map(l=>a.querySelector(`.${l}`)),{_id:f,name:g,bodyPart:E,target:C,burnedCalories:N}=e[r];if([C,N,E,g].forEach((l,P)=>{m[P].textContent=l}),a.setAttribute("id",f),g.length>Z){const l=a.querySelector(".js-tooltip");l.dataset.tooltip=g,l.classList.add("tooltip")}o.appendChild(a)}s.replaceChildren(o)}const ie="/finalJSProject-yourEnergy/assets/example-img-2998cc5c.jpg";function re(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(i=>i._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ae(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],n=t.findIndex(i=>i._id===e._id);n!==-1&&(t.splice(n,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const h="/finalJSProject-yourEnergy/assets/icons-7601a5dc.svg",x=document.querySelector(".modal-exercise"),v=document.querySelector(".overlay");let p=!1,S;async function be(e){v.addEventListener("click",A),document.addEventListener("keydown",B);try{c(!0);const t=await M.getExercisesId(e);S=t;const n=ue(t);ce(n,t),ge();const i=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".js-favorite__btn"),s=document.querySelector(".js-rating__btn");i.addEventListener("click",O),o.addEventListener("click",me),s.addEventListener("click",fe)}catch(t){b(t.message)}finally{c(!1)}}function ce(e,t){x.innerHTML=e,le(t)}function le(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===e._id)?(p=!0,t.innerHTML=R()):(p=!1,t.innerHTML=k())}function de(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${h}#icon-star-full"
          ></use>
        </svg>`,n=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${h}#icon-star-empty"
          ></use>
        </svg>`,i=Math.round(e);let o="";for(let s=0;s<i;s+=1)o+=t;for(let s=0;s<5-i;s+=1)o+=n;return o}function k(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${h}#icon-heart"></use>
    </svg>`}function R(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${h}#icon-trash"></use>
    </svg>`}function ue({_id:e,name:t,rating:n,gifUrl:i,target:o,bodyPart:s,equipment:r,popularity:a,burnedCalories:m,time:f,description:g}){const E=de(n);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${h}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${i??ie}" width="260" height="260" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(n)?`${n}.0`:n.toFixed(1)}
                    ${E}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${o}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Body Part</h3>
                            <p class="modal-exercise__text">${s}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Equipment</h3>
                            <p class="modal-exercise__text">${r}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Popular</h3>
                            <p class="modal-exercise__text">${a}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${m}/${f} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${g}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn">Give a rating</button>
        </div>`}function me(){const e=document.querySelector(".js-favorite__btn");p=!p,p?(re(S),e.innerHTML=R()):(ae(S),e.innerHTML=k(),T())}function A(e){e.target===v&&O()}function B({key:e}){e==="Escape"&&!x.classList.contains("hidden")&&O()}function fe(){b("Under development")}function ge(){v.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function O(){v.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll",v.removeEventListener("click",A),document.removeEventListener("keydown",B)}const D=document.querySelector(".js-menu-backdrop"),pe=document.querySelector(".js-menu-container"),he=document.querySelector(".js-open-menu"),ve=document.querySelector(".js-close-menu"),_e=document.querySelector(".js-menu-link");function L(){pe.classList.toggle("is-open"),D.classList.toggle("is-hidden")}function ye(e){e.currentTarget!==e.target&&L()}function xe({target:e}){e.closest("#mob-menu")||L()}he.addEventListener("click",L);ve.addEventListener("click",L);_e.addEventListener("click",ye);D.addEventListener("click",xe);const w=document.getElementById("scroll-top"),Le=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},Ee=()=>{window.scrollY>window.innerHeight?w.classList.add("scroll-show"):w.classList.remove("scroll-show")};window.addEventListener("scroll",Ee);w.addEventListener("click",Le);export{we as G,Z as M,G as a,b,W as c,M as f,T as i,be as o,ae as r,c as s};
//# sourceMappingURL=scroll-top-86f12db8.js.map
