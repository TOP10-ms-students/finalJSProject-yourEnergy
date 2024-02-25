import{i as j}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const u="https://your-energy.b.goit.study/api",m=async(e,t,o)=>{const n=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:o});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},I={async getExercises(e){const t=new URLSearchParams(e),o=`${u}/exercises?${t}`;return await m(o)},async getExercisesId(e){const t=`${u}/exercises/${e}`;return await m(t)},async editExercisesIdRating(e,t){const o="PATCH",r=`${u}/exercises/${e}/rating`,s=JSON.stringify(t);return await m(r,o,s)},async getExercisesFilter(e){const t=new URLSearchParams(e),o=`${u}/filters?${t}`;return await m(o)},async getExercisesQuote(){const e=`${u}/quote`;return await m(e)},async addSubscription(e){const t="POST",o=`${u}/subscription`,r=JSON.stringify(e);return await m(o,t,r)}},q=(e,t,o)=>{j.show({message:e,drag:!0,close:!1,timeout:o??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},l=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},$={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function A(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:o,date:r}=JSON.parse(e),s=new Date(r),n=new Date;if(s.getDate()===n.getDate()){k(t,o);return}}H()}A();async function H(){try{l(!0);const e=await I.getExercisesQuote(),{quote:t,author:o}=e,r={quote:t,author:o,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),k(t,o)}catch(e){q(e.message)}finally{l(!1)}}function k(e,t){$.content.textContent=e,$.author.textContent=t}j.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function J(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const _=document.querySelector(".js-pagination");let y;_.addEventListener("click",U);function W(e,t,o,r){if(e===1){_.innerHTML="";return}let s="";for(let n=1;n<=e;n++){const i=n===o.page;s+=`<button data-btn="${n}" class="${i?"active":""}">${n}</button>`}y={method:t,isLocal:r,params:o},_.innerHTML=s}function U(e){var r;if(e.target===e.currentTarget)return;const t=e.target,o=Number(t.textContent);(r=[..._.children].find(s=>s.classList.contains("active")))==null||r.classList.remove("active"),t.classList.add("active"),y.isLocal?T(o):y.method({...y.params,page:o}),J()}const G=1440,Q=768,K=9,z=10,X=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"];let w=!1;T();function T(e=1){const t=Y();if(!t)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,paginationFavEl:n,fragment:i}=V(),a=window.innerWidth;if(Z({workouts:o,emptyFavEl:s,paginationFavEl:n,favGalleryEl:r}))return;const f=a<Q?K:z,{startIndex:g,endIndex:c}=ee({perPage:f,totalWorkouts:o.length,pageNumber:e,screenWidth:a});w?l(w):w=!0,te({workouts:o,startIndex:g,endIndex:c,template:t,fragment:i,favGalleryEl:r}),l(!1)}function V(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function Y(){return document.querySelector("#exercise-fav")}function Z({workouts:e,emptyFavEl:t,paginationFavEl:o,favGalleryEl:r}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),r.classList.add("hidden"),o.classList.add("hidden"),l(!1),!0}function ee({perPage:e,totalWorkouts:t,pageNumber:o,screenWidth:r}){const s=Math.ceil(t/e),n={page:o};let i=(o-1)*e,a=Math.min(i+e,t);return r<G?W(s,null,n,!0):(i=0,a=t),{startIndex:i,endIndex:a}}function te({workouts:e,startIndex:t,endIndex:o,template:r,fragment:s,favGalleryEl:n}){for(let i=t;i<o;i++){const a=r.children[0].cloneNode(!0),f=X.map(d=>a.querySelector(`.${d}`)),{_id:g,name:c,bodyPart:b,target:N,burnedCalories:P}=e[i];if([N,P,b,c].forEach((d,F)=>{f[F].textContent=d}),a.setAttribute("id",g),c.length>31){const d=a.querySelector(".js-tooltip");d.dataset.tooltip=c,d.classList.add("tooltip")}s.appendChild(a)}n.replaceChildren(s)}const oe="/finalJSProject-yourEnergy/pr-preview/pr-88/assets/example-img-2998cc5c.jpg";function se(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(r=>r._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ne(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=t.findIndex(r=>r._id===e._id);o!==-1&&(t.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const v="/finalJSProject-yourEnergy/pr-preview/pr-88/assets/icons-7601a5dc.svg",x=document.querySelector(".modal-exercise"),h=document.querySelector(".overlay");let p=!1,E;async function Se(e){h.addEventListener("click",B),document.addEventListener("keydown",R);try{l(!0);const t=await I.getExercisesId(e);E=t;const o=ce(t);re(o,t),ue();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".js-favorite__btn"),n=document.querySelector(".js-rating__btn");r.addEventListener("click",O),s.addEventListener("click",le),n.addEventListener("click",de)}catch(t){q(t.message)}finally{l(!1)}}function re(e,t){x.innerHTML=e,ie(t)}function ie(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===e._id)?(p=!0,t.innerHTML=D()):(p=!1,t.innerHTML=M())}function ae(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${v}#icon-star-full"
          ></use>
        </svg>`,o=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${v}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(e);let s="";for(let n=0;n<r;n+=1)s+=t;for(let n=0;n<5-r;n+=1)s+=o;return s}function M(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${v}#icon-heart"></use>
    </svg>`}function D(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${v}#icon-trash"></use>
    </svg>`}function ce({_id:e,name:t,rating:o,gifUrl:r,target:s,bodyPart:n,equipment:i,popularity:a,burnedCalories:f,time:g,description:c}){const b=ae(o);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${v}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??oe}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(o)?`${o}.0`:o.toFixed(1)}
                    ${b}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${s}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Body Part</h3>
                            <p class="modal-exercise__text">${n}</p>
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
                            <p class="modal-exercise__text">${f}/${g} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${c}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn">Give a rating</button>
        </div>`}function le(){const e=document.querySelector(".js-favorite__btn");p=!p,p?(se(E),e.innerHTML=D()):(ne(E),e.innerHTML=M(),T())}function B(e){e.target===h&&O()}function R({key:e}){e==="Escape"&&!x.classList.contains("hidden")&&O()}function de(){q("Under development")}function ue(){h.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function O(){h.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll",h.removeEventListener("click",B),document.removeEventListener("keydown",R)}const C=document.querySelector(".js-menu-backdrop"),me=document.querySelector(".js-menu-container"),fe=document.querySelector(".js-open-menu"),ge=document.querySelector(".js-close-menu"),pe=document.querySelector(".js-menu-link");function S(){me.classList.toggle("is-open"),C.classList.toggle("is-hidden")}function ve(e){e.currentTarget!==e.target&&S()}function he({target:e}){e.closest("#mob-menu")||S()}fe.addEventListener("click",S);ge.addEventListener("click",S);pe.addEventListener("click",ve);C.addEventListener("click",he);const L=document.getElementById("scroll-top"),ye=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},_e=()=>{window.scrollY>window.innerHeight?L.classList.add("scroll-show"):L.classList.remove("scroll-show")};window.addEventListener("scroll",_e);L.addEventListener("click",ye);export{W as a,q as b,I as f,T as i,Se as o,ne as r,l as s};
//# sourceMappingURL=scroll-top-525d12c3.js.map
