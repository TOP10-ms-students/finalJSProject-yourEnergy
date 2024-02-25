import{i as I}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const u="https://your-energy.b.goit.study/api",m=async(e,t,o)=>{const n=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:o});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},M={async getExercises(e){const t=new URLSearchParams(e),o=`${u}/exercises?${t}`;return await m(o)},async getExercisesId(e){const t=`${u}/exercises/${e}`;return await m(t)},async editExercisesIdRating(e,t){const o="PATCH",i=`${u}/exercises/${e}/rating`,s=JSON.stringify(t);return await m(i,o,s)},async getExercisesFilter(e){const t=new URLSearchParams(e),o=`${u}/filters?${t}`;return await m(o)},async getExercisesQuote(){const e=`${u}/quote`;return await m(e)},async addSubscription(e){const t="POST",o=`${u}/subscription`,i=JSON.stringify(e);return await m(o,t,i)}},T=(e,t,o)=>{I.show({message:e,drag:!0,close:!1,timeout:o??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},l=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},$={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function F(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:o,date:i}=JSON.parse(e),s=new Date(i),n=new Date;if(s.getDate()===n.getDate()){j(t,o);return}}W()}F();async function W(){try{l(!0);const e=await M.getExercisesQuote(),{quote:t,author:o}=e,i={quote:t,author:o,date:new Date};localStorage.setItem("quoteData",JSON.stringify(i)),j(t,o)}catch(e){T(e.message)}finally{l(!1)}}function j(e,t){$.content.textContent=e,$.author.textContent=t}I.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function H(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const y=document.querySelector(".js-pagination");let _;y.addEventListener("click",G);function J(e,t,o,i){if(e===1){y.innerHTML="";return}let s="";for(let n=1;n<=e;n++){const r=n===o.page;s+=`<button data-btn="${n}" class="${r?"active":""}">${n}</button>`}_={method:t,isLocal:i,params:o},y.innerHTML=s}function G(e){var i;if(e.target===e.currentTarget)return;const t=e.target,o=Number(t.textContent);(i=[...y.children].find(s=>s.classList.contains("active")))==null||i.classList.remove("active"),t.classList.add("active"),_.isLocal?q(o):_.method({..._.params,page:o}),H()}const Ee=window.innerWidth<768?9:12,U=31,Q=1440,K=768,z=9,X=10,Y=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"];let b=!1;q();function q(e=1){const t=Z();if(!t)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:i,emptyFavEl:s,paginationFavEl:n,fragment:r}=V(),a=window.innerWidth;if(ee({workouts:o,emptyFavEl:s,paginationFavEl:n,favGalleryEl:i}))return;const f=a<K?z:X,{startIndex:g,endIndex:c}=te({perPage:f,totalWorkouts:o.length,pageNumber:e,screenWidth:a});b?l(b):b=!0,oe({workouts:o,startIndex:g,endIndex:c,template:t,fragment:r,favGalleryEl:i}),l(!1)}function V(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function Z(){return document.querySelector("#exercise-fav")}function ee({workouts:e,emptyFavEl:t,paginationFavEl:o,favGalleryEl:i}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),i.classList.add("hidden"),o.classList.add("hidden"),l(!1),!0}function te({perPage:e,totalWorkouts:t,pageNumber:o,screenWidth:i}){const s=Math.ceil(t/e),n={page:o};let r=(o-1)*e,a=Math.min(r+e,t);return i<Q?J(s,null,n,!0):(r=0,a=t),{startIndex:r,endIndex:a}}function oe({workouts:e,startIndex:t,endIndex:o,template:i,fragment:s,favGalleryEl:n}){for(let r=t;r<o;r++){const a=i.children[0].cloneNode(!0),f=Y.map(d=>a.querySelector(`.${d}`)),{_id:g,name:c,bodyPart:E,target:N,burnedCalories:P}=e[r];if([N,P,E,c].forEach((d,A)=>{f[A].textContent=d}),a.setAttribute("id",g),c.length>U){const d=a.querySelector(".js-tooltip");d.dataset.tooltip=c,d.classList.add("tooltip")}s.appendChild(a)}n.replaceChildren(s)}const se="/finalJSProject-yourEnergy/assets/example-img-2998cc5c.jpg";function ne(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(i=>i._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ie(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=t.findIndex(i=>i._id===e._id);o!==-1&&(t.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const h="/finalJSProject-yourEnergy/assets/icons-7601a5dc.svg",x=document.querySelector(".modal-exercise"),v=document.querySelector(".overlay");let p=!1,L;async function be(e){v.addEventListener("click",R),document.addEventListener("keydown",B);try{l(!0);const t=await M.getExercisesId(e);L=t;const o=le(t);re(o,t),me();const i=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".js-favorite__btn"),n=document.querySelector(".js-rating__btn");i.addEventListener("click",O),s.addEventListener("click",de),n.addEventListener("click",ue)}catch(t){T(t.message)}finally{l(!1)}}function re(e,t){x.innerHTML=e,ae(t)}function ae(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===e._id)?(p=!0,t.innerHTML=D()):(p=!1,t.innerHTML=k())}function ce(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${h}#icon-star-full"
          ></use>
        </svg>`,o=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${h}#icon-star-empty"
          ></use>
        </svg>`,i=Math.round(e);let s="";for(let n=0;n<i;n+=1)s+=t;for(let n=0;n<5-i;n+=1)s+=o;return s}function k(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${h}#icon-heart"></use>
    </svg>`}function D(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${h}#icon-trash"></use>
    </svg>`}function le({_id:e,name:t,rating:o,gifUrl:i,target:s,bodyPart:n,equipment:r,popularity:a,burnedCalories:f,time:g,description:c}){const E=ce(o);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${h}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${i??se}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(o)?`${o}.0`:o.toFixed(1)}
                    ${E}
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
                            <p class="modal-exercise__text">${r}</p>
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
        </div>`}function de(){const e=document.querySelector(".js-favorite__btn");p=!p,p?(ne(L),e.innerHTML=D()):(ie(L),e.innerHTML=k(),q())}function R(e){e.target===v&&O()}function B({key:e}){e==="Escape"&&!x.classList.contains("hidden")&&O()}function ue(){T("Under development")}function me(){v.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function O(){v.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll",v.removeEventListener("click",R),document.removeEventListener("keydown",B)}const C=document.querySelector(".js-menu-backdrop"),fe=document.querySelector(".js-menu-container"),ge=document.querySelector(".js-open-menu"),pe=document.querySelector(".js-close-menu"),he=document.querySelector(".js-menu-link");function S(){fe.classList.toggle("is-open"),C.classList.toggle("is-hidden")}function ve(e){e.currentTarget!==e.target&&S()}function _e({target:e}){e.closest("#mob-menu")||S()}ge.addEventListener("click",S);pe.addEventListener("click",S);he.addEventListener("click",ve);C.addEventListener("click",_e);const w=document.getElementById("scroll-top"),ye=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},xe=()=>{window.scrollY>window.innerHeight?w.classList.add("scroll-show"):w.classList.remove("scroll-show")};window.addEventListener("scroll",xe);w.addEventListener("click",ye);export{Ee as G,U as M,J as a,T as b,M as f,q as i,be as o,ie as r,l as s};
//# sourceMappingURL=scroll-top-9d4355ac.js.map
