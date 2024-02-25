import{i as j}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const l="https://your-energy.b.goit.study/api",d=async(e,t,n)=>{const o=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:n});if(!o.ok)throw new Error(`Error: status: ${o.status}, ${o.statusText}`);return o.json()},I={async getExercises(e){const t=new URLSearchParams(e),n=`${l}/exercises?${t}`;return await d(n)},async getExercisesId(e){const t=`${l}/exercises/${e}`;return await d(t)},async editExercisesIdRating(e,t){const n="PATCH",r=`${l}/exercises/${e}/rating`,s=JSON.stringify(t);return await d(r,n,s)},async getExercisesFilter(e){const t=new URLSearchParams(e),n=`${l}/filters?${t}`;return await d(n)},async getExercisesQuote(){const e=`${l}/quote`;return await d(e)},async addSubscription(e){const t="POST",n=`${l}/subscription`,r=JSON.stringify(e);return await d(n,t,r)}},q=(e,t,n)=>{j.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},$={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function A(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:n,date:r}=JSON.parse(e),s=new Date(r),o=new Date;if(s.getDate()===o.getDate()){k(t,n);return}}H()}A();async function H(){try{c(!0);const e=await I.getExercisesQuote(),{quote:t,author:n}=e,r={quote:t,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),k(t,n)}catch(e){q(e.message)}finally{c(!1)}}function k(e,t){$.content.textContent=e,$.author.textContent=t}j.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function J(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const y=document.querySelector(".js-pagination");let h;y.addEventListener("click",U);function W(e,t,n,r){if(e===1){y.innerHTML="";return}let s="";for(let o=1;o<=e;o++){const i=o===n.page;s+=`<button data-btn="${o}" class="${i?"active":""}">${o}</button>`}h={method:t,isLocal:r,params:n},y.innerHTML=s}function U(e){var r;if(e.target===e.currentTarget)return;const t=e.target,n=Number(t.textContent);(r=[...y.children].find(s=>s.classList.contains("active")))==null||r.classList.remove("active"),t.classList.add("active"),h.isLocal?T(n):h.method({...h.params,page:n}),J()}const G=1440,Q=768,K=9,z=10,X=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"];let w=!1;T();function T(e=1){const t=Y();if(!t)return;const n=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,paginationFavEl:o,fragment:i}=V(),a=window.innerWidth;if(Z({workouts:n,emptyFavEl:s,paginationFavEl:o,favGalleryEl:r}))return;const u=a<Q?K:z,{startIndex:m,endIndex:f}=ee({perPage:u,totalWorkouts:n.length,pageNumber:e,screenWidth:a});w?c(w):w=!0,te({workouts:n,startIndex:m,endIndex:f,template:t,fragment:i,favGalleryEl:r}),c(!1)}function V(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function Y(){return document.querySelector("#exercise-fav")}function Z({workouts:e,emptyFavEl:t,paginationFavEl:n,favGalleryEl:r}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden"),c(!1),!0}function ee({perPage:e,totalWorkouts:t,pageNumber:n,screenWidth:r}){const s=Math.ceil(t/e),o={page:n};let i=(n-1)*e,a=Math.min(i+e,t);return r<G?W(s,null,o,!0):(i=0,a=t),{startIndex:i,endIndex:a}}function te({workouts:e,startIndex:t,endIndex:n,template:r,fragment:s,favGalleryEl:o}){for(let i=t;i<n;i++){const a=r.children[0].cloneNode(!0),u=X.map(b=>a.querySelector(`.${b}`)),{_id:m,name:f,bodyPart:S,target:N,burnedCalories:P}=e[i];[N,P,S,f].forEach((b,F)=>{u[F].textContent=b}),a.setAttribute("id",m),s.appendChild(a)}o.replaceChildren(s)}const ne="/finalJSProject-yourEnergy/pr-preview/pr-86/assets/example-img-2998cc5c.jpg";function se(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(r=>r._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function oe(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],n=t.findIndex(r=>r._id===e._id);n!==-1&&(t.splice(n,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const p="/finalJSProject-yourEnergy/pr-preview/pr-86/assets/icons-7601a5dc.svg",_=document.querySelector(".modal-exercise"),v=document.querySelector(".overlay");let g=!1,E;async function Se(e){v.addEventListener("click",B),document.addEventListener("keydown",R);try{c(!0);const t=await I.getExercisesId(e);E=t;const n=ce(t);re(n,t),ue();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".js-favorite__btn"),o=document.querySelector(".js-rating__btn");r.addEventListener("click",O),s.addEventListener("click",le),o.addEventListener("click",de)}catch(t){q(t.message)}finally{c(!1)}}function re(e,t){_.innerHTML=e,ie(t)}function ie(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===e._id)?(g=!0,t.innerHTML=D()):(g=!1,t.innerHTML=M())}function ae(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-full"
          ></use>
        </svg>`,n=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(e);let s="";for(let o=0;o<r;o+=1)s+=t;for(let o=0;o<5-r;o+=1)s+=n;return s}function M(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-heart"></use>
    </svg>`}function D(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-trash"></use>
    </svg>`}function ce({_id:e,name:t,rating:n,gifUrl:r,target:s,bodyPart:o,equipment:i,popularity:a,burnedCalories:u,time:m,description:f}){const S=ae(n);return`
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
                        ${f}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn">Give a rating</button>
        </div>`}function le(){const e=document.querySelector(".js-favorite__btn");g=!g,g?(se(E),e.innerHTML=D()):(oe(E),e.innerHTML=M(),T())}function B(e){e.target===v&&O()}function R({key:e}){e==="Escape"&&!_.classList.contains("hidden")&&O()}function de(){q("Under development")}function ue(){v.classList.remove("hidden"),_.classList.remove("hidden"),document.body.style.overflow="hidden"}function O(){v.classList.add("hidden"),_.classList.add("hidden"),document.body.style.overflow="scroll",v.removeEventListener("click",B),document.removeEventListener("keydown",R)}const C=document.querySelector(".js-menu-backdrop"),me=document.querySelector(".js-menu-container"),fe=document.querySelector(".js-open-menu"),ge=document.querySelector(".js-close-menu"),pe=document.querySelector(".js-menu-link");function x(){me.classList.toggle("is-open"),C.classList.toggle("is-hidden")}function ve(e){e.currentTarget!==e.target&&x()}function he({target:e}){e.closest("#mob-menu")||x()}fe.addEventListener("click",x);ge.addEventListener("click",x);pe.addEventListener("click",ve);C.addEventListener("click",he);const L=document.getElementById("scroll-top"),ye=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},_e=()=>{window.scrollY>window.innerHeight?L.classList.add("scroll-show"):L.classList.remove("scroll-show")};window.addEventListener("scroll",_e);L.addEventListener("click",ye);export{W as a,q as b,I as f,T as i,Se as o,oe as r,c as s};
//# sourceMappingURL=scroll-top-820a6abf.js.map
