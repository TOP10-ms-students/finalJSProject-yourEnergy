import{i as $}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const l="https://your-energy.b.goit.study/api",d=async(e,t,s)=>{const n=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:s});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},I={async getExercises(e){const t=new URLSearchParams(e),s=`${l}/exercises?${t}`;return await d(s)},async getExercisesId(e){const t=`${l}/exercises/${e}`;return await d(t)},async editExercisesIdRating(e,t){const s="PATCH",r=`${l}/exercises/${e}/rating`,o=JSON.stringify(t);return await d(r,s,o)},async getExercisesFilter(e){const t=new URLSearchParams(e),s=`${l}/filters?${t}`;return await d(s)},async getExercisesQuote(){const e=`${l}/quote`;return await d(e)},async addSubscription(e){const t="POST",s=`${l}/subscription`,r=JSON.stringify(e);return await d(s,t,r)}},M=(e,t,s)=>{$.show({message:e,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},T={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function F(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:s,date:r}=JSON.parse(e),o=new Date(r),n=new Date;if(o.getDate()===n.getDate()){k(t,s);return}}H()}F();async function H(){try{c(!0);const e=await I.getExercisesQuote(),{quote:t,author:s}=e,r={quote:t,author:s,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),k(t,s)}catch(e){M(e.message)}finally{c(!1)}}function k(e,t){T.content.textContent=e,T.author.textContent=t}$.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function J(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const y=document.querySelector(".js-pagination");let v;y.addEventListener("click",U);function W(e,t,s,r){if(e===1){y.innerHTML="";return}let o="";for(let n=1;n<=e;n++){const i=n===s.page;o+=`<button data-btn="${n}" class="${i?"active":""}">${n}</button>`}v={method:t,isLocal:r,params:s},y.innerHTML=o}function U(e){var r;if(e.target===e.currentTarget)return;const t=e.target,s=Number(t.textContent);(r=[...y.children].find(o=>o.classList.contains("active")))==null||r.classList.remove("active"),t.classList.add("active"),v.isLocal?O(s):v.method({...v.params,page:s}),J()}const G=1440,Q=768,K=9,z=10,X=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"];let b=!1;O();function O(e=1){const t=Y();if(!t)return;const s=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:o,paginationFavEl:n,fragment:i}=V(),a=window.innerWidth;if(Z({workouts:s,emptyFavEl:o,paginationFavEl:n,favGalleryEl:r}))return;const u=a<Q?K:z,{startIndex:m,endIndex:f}=ee({perPage:u,totalWorkouts:s.length,pageNumber:e,screenWidth:a});b?c(b):b=!0,te({workouts:s,startIndex:m,endIndex:f,template:t,fragment:i,favGalleryEl:r}),c(!1)}function V(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function Y(){return document.querySelector("#exercise-fav")}function Z({workouts:e,emptyFavEl:t,paginationFavEl:s,favGalleryEl:r}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),r.classList.add("hidden"),s.classList.add("hidden"),c(!1),!0}function ee({perPage:e,totalWorkouts:t,pageNumber:s,screenWidth:r}){const o=Math.ceil(t/e),n={page:s};let i=(s-1)*e,a=Math.min(i+e,t);return r<G?W(o,null,n,!0):(i=0,a=t),{startIndex:i,endIndex:a}}function te({workouts:e,startIndex:t,endIndex:s,template:r,fragment:o,favGalleryEl:n}){for(let i=t;i<s;i++){const a=r.children[0].cloneNode(!0),u=X.map(E=>a.querySelector(`.${E}`)),{_id:m,name:f,bodyPart:S,target:C,burnedCalories:N}=e[i];[C,N,S,f].forEach((E,R)=>{u[R].textContent=E}),a.setAttribute("id",m),o.appendChild(a)}n.replaceChildren(o)}const se="/finalJSProject-yourEnergy/assets/example-img-2998cc5c.jpg";function oe(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(r=>r._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ne(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],s=t.findIndex(r=>r._id===e._id);s!==-1&&(t.splice(s,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const p="/finalJSProject-yourEnergy/assets/icons-7601a5dc.svg",x=document.querySelector(".modal-exercise"),h=document.querySelector(".overlay");let g=!1;async function he(e){h.addEventListener("click",P),document.addEventListener("keydown",A);try{c(!0);const t=await I.getExercisesId(e),s=ce(t);re(s,t),le();const r=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".modal-exercise__btn");r.addEventListener("click",q),o.addEventListener("click",()=>{g=!g,g?(oe(t),o.innerHTML=D()):(ne(t),o.innerHTML=j(),O())})}catch(t){M(t.message)}finally{c(!1)}}function re(e,t){x.innerHTML=e,ie(t)}function ie(e){const t=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===e._id)?(g=!0,t.innerHTML=D()):(g=!1,t.innerHTML=j())}function ae(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-full"
          ></use>
        </svg>`,s=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(e);let o="";for(let n=0;n<r;n+=1)o+=t;for(let n=0;n<5-r;n+=1)o+=s;return o}function j(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-heart"></use>
    </svg>`}function D(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-trash"></use>
    </svg>`}function ce({_id:e,name:t,rating:s,gifUrl:r,target:o,bodyPart:n,equipment:i,popularity:a,burnedCalories:u,time:m,description:f}){const S=ae(s);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${p}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??se}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(s)?`${s}.0`:s.toFixed(1)}
                    ${S}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${o}</p>
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
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn">Give a rating</button>
        </div>`}function P(e){e.target===h&&q()}function A({key:e}){e==="Escape"&&!x.classList.contains("hidden")&&q()}function le(){h.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function q(){h.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll"}h.removeEventListener("click",P);document.removeEventListener("keydown",A);const B=document.querySelector(".js-menu-backdrop"),de=document.querySelector(".js-menu-container"),w=document.querySelector(".js-open-menu"),ue=document.querySelector(".js-close-menu"),me=document.querySelectorAll(".js-menu-link, .js-close-menu");function _(){const e=w.getAttribute("aria-expanded")==="true";w.setAttribute("aria-expanded",!e),de.classList.toggle("is-open"),B.classList.toggle("is-hidden")}w.addEventListener("click",_);ue.addEventListener("click",_);me.forEach(e=>{e.addEventListener("click",_)});B.addEventListener("click",({target:e})=>{e.closest("#mob-menu")||_()});const L=document.getElementById("scroll-top"),fe=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},ge=()=>{window.scrollY>window.innerHeight?L.classList.add("scroll-show"):L.classList.remove("scroll-show")};window.addEventListener("scroll",ge);L.addEventListener("click",fe);export{W as a,M as b,I as f,O as i,he as o,ne as r,c as s};
//# sourceMappingURL=scroll-top-6d3b795b.js.map
