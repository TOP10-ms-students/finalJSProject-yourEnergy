import{i as q}from"./vendor-ab977035.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const d="https://your-energy.b.goit.study/api",u=async(e,t,o)=>{const r=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:o});if(!r.ok)throw new Error(`Error: status: ${r.status}, ${r.statusText}`);return r.json()},I={async getExercises(e){const t=new URLSearchParams(e),o=`${d}/exercises?${t}`;return await u(o)},async getExercisesId(e){const t=`${d}/exercises/${e}`;return await u(t)},async editExercisesIdRating(e,t){const o="PATCH",s=`${d}/exercises/${e}/rating`,n=JSON.stringify(t);return await u(s,o,n)},async getExercisesFilter(e){const t=new URLSearchParams(e),o=`${d}/filters?${t}`;return await u(o)},async getExercisesQuote(){const e=`${d}/quote`;return await u(e)},async addSubscription(e){const t="POST",o=`${d}/subscription`,s=JSON.stringify(e);return await u(o,t,s)}},b=(e,t,o)=>{q.show({message:e,drag:!0,close:!1,timeout:o??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},$={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function N(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:o,date:s}=JSON.parse(e),n=new Date(s),r=new Date;if(n.getDate()===r.getDate()){M(t,o);return}}G()}N();async function G(){try{c(!0);const e=await I.getExercisesQuote(),{quote:t,author:o}=e,s={quote:t,author:o,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),M(t,o)}catch(e){b(e.message)}finally{c(!1)}}function M(e,t){$.content.textContent=e,$.author.textContent=t}q.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function U(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function W(e,t){return e+1<=t?100:e>t?0:t%1*100}const _=document.querySelector(".js-pagination");let v;_.addEventListener("click",J);function H(e,t,o,s){if(e===1){_.innerHTML="";return}let n="";for(let r=1;r<=e;r++){const i=r===o.page;n+=`<button data-btn="${r}" class="${i?"active":""}">${r}</button>`}v={method:t,isLocal:s,params:o},_.innerHTML=n}function J(e){var s;if(e.target===e.currentTarget)return;const t=e.target,o=Number(t.textContent);(s=[..._.children].find(n=>n.classList.contains("active")))==null||s.classList.remove("active"),t.classList.add("active"),v.isLocal?T(o):v.method({...v.params,page:o}),U()}const j=768,Q=10,K=9,z=12,V=9,X=1440,Y=window.innerWidth<j?K:Q,Z=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],$e=window.innerWidth<j?V:z,ee=31;T();function T(e=1){const t=oe();if(!t)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:s,emptyFavEl:n,paginationFavEl:r,fragment:i}=te(),a=window.innerWidth;if(ne({workouts:o,emptyFavEl:n,paginationFavEl:r,favGalleryEl:s}))return;const{startIndex:m,endIndex:f}=se({perPage:Y,totalWorkouts:o.length,pageNumber:e,screenWidth:a});c(!0),re({workouts:o,startIndex:m,endIndex:f,template:t,fragment:i,favGalleryEl:s}),c(!1)}function te(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function oe(){return document.querySelector("#exercise-fav")}function ne({workouts:e,emptyFavEl:t,paginationFavEl:o,favGalleryEl:s}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),s.classList.add("hidden"),o.classList.add("hidden"),c(!1),!0}function se({perPage:e,totalWorkouts:t,pageNumber:o,screenWidth:s}){const n=Math.ceil(t/e),r={page:o};let i=(o-1)*e,a=Math.min(i+e,t);return s<X?H(n,null,r,!0):(i=0,a=t),{startIndex:i,endIndex:a}}function re({workouts:e,startIndex:t,endIndex:o,template:s,fragment:n,favGalleryEl:r}){for(let i=t;i<o;i++){const a=s.children[0].cloneNode(!0),m=Z.map(l=>a.querySelector(`.${l}`)),{_id:f,name:p,bodyPart:w,target:B,burnedCalories:P}=e[i];if([B,P,w,p].forEach((l,F)=>{m[F].textContent=l}),a.setAttribute("id",f),p.length>ee){const l=a.querySelector(".js-tooltip");l.dataset.tooltip=p,l.classList.add("tooltip")}n.appendChild(a)}r.replaceChildren(n)}const ie="/finalJSProject-yourEnergy/pr-preview/pr-93/assets/example-img-2998cc5c.jpg";function ae(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(s=>s._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ce(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=t.findIndex(s=>s._id===e._id);o!==-1&&(t.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const y="/finalJSProject-yourEnergy/pr-preview/pr-93/assets/icons-a6fed07b.svg",x=document.querySelector(".modal-exercise"),h=document.querySelector(".overlay"),le="#eea10c",de="#f4f4f433",ue=5;let g=!1,E;async function qe(e){h.addEventListener("click",R),document.addEventListener("keydown",C);try{c(!0);const t=await I.getExercisesId(e);E=t;const o=ge(t);me(o,t),_e();const s=document.querySelector(".modal-exercise__btn-close"),n=document.querySelector(".js-favorite__btn"),r=document.querySelector(".js-rating__btn");s.addEventListener("click",O),n.addEventListener("click",he),r.addEventListener("click",ve)}catch(t){b(t.message)}finally{c(!1)}}function me(e,t){x.innerHTML=e,fe(t)}function fe(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(n=>n._id===e._id)?(g=!0,t.innerHTML=A()):(g=!1,t.innerHTML=k())}function pe(e){let t="";for(let o=0;o<ue;o+=1){const s=`gradient-id${o}`,n=W(o,e),r=`
        <linearGradient id="${s}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${n}%" stop-color=${le}></stop>
            <stop offset="0%" stop-color=${de}></stop>
        </linearGradient>`;t+=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            ${r}
            <use href="${y}#icon-star" fill="url(#${s})"></use>
        </svg>`}return t}function k(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${y}#icon-heart"></use>
    </svg>`}function A(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${y}#icon-trash"></use>
    </svg>`}function ge({_id:e,name:t,rating:o,gifUrl:s,target:n,bodyPart:r,equipment:i,popularity:a,burnedCalories:m,time:f,description:p}){const w=pe(o);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${y}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${s??ie}" width="260" height="260" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${o.toFixed(1)}
                    ${w}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${n}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Body Part</h3>
                            <p class="modal-exercise__text">${r}</p>
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
                            <p class="modal-exercise__text">${m}/${f} min</p>
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
        </div>`}function he(){const e=document.querySelector(".js-favorite__btn");g=!g,g?(ae(E),e.innerHTML=A()):(ce(E),e.innerHTML=k(),T())}function R(e){e.target===h&&O()}function C({key:e}){e==="Escape"&&!x.classList.contains("hidden")&&O()}function ve(){b("Under development")}function _e(){h.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function O(){h.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll",h.removeEventListener("click",R),document.removeEventListener("keydown",C)}const D=document.querySelector(".js-menu-backdrop"),ye=document.querySelector(".js-menu-container"),xe=document.querySelector(".js-open-menu"),Le=document.querySelector(".js-close-menu"),we=document.querySelector(".js-menu-link");function L(){ye.classList.toggle("is-open"),D.classList.toggle("is-hidden")}function Ee(e){e.currentTarget!==e.target&&L()}function Se({target:e}){e.closest("#mob-menu")||L()}xe.addEventListener("click",L);Le.addEventListener("click",L);we.addEventListener("click",Ee);D.addEventListener("click",Se);const S=document.getElementById("scroll-top"),be=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},Te=()=>{window.scrollY>window.innerHeight?S.classList.add("scroll-show"):S.classList.remove("scroll-show")};window.addEventListener("scroll",Te);S.addEventListener("click",be);export{$e as G,ee as M,H as a,b,U as c,I as f,T as i,qe as o,ce as r,c as s};
//# sourceMappingURL=scroll-top-b9b6092f.js.map
