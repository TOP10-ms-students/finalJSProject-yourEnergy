import{i as O}from"./vendor-ab977035.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const u="https://your-energy.b.goit.study/api",m=async(e,t,n)=>{const a=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:n});if(!a.ok)throw new Error(`Error: status: ${a.status}, ${a.statusText}`);return a.json()},I={async getExercises(e){const t=new URLSearchParams(e),n=`${u}/exercises?${t}`;return await m(n)},async getExercisesId(e){const t=`${u}/exercises/${e}`;return await m(t)},async editExercisesIdRating(e,t){const n="PATCH",s=`${u}/exercises/${e}/rating`,o=JSON.stringify(t);return await m(s,n,o)},async getExercisesFilter(e){const t=new URLSearchParams(e),n=`${u}/filters?${t}`;return await m(n)},async getExercisesQuote(){const e=`${u}/quote`;return await m(e)},async addSubscription(e){const t="POST",n=`${u}/subscription`,s=JSON.stringify(e);return await m(n,t,s)}},j=(e,t,n)=>{O.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},M={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function W(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:n,date:s}=JSON.parse(e),o=new Date(s),a=new Date;if(o.getDate()===a.getDate()){R(t,n);return}}H()}W();async function H(){try{c(!0);const e=await I.getExercisesQuote(),{quote:t,author:n}=e,s={quote:t,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),R(t,n)}catch(e){j(e.message)}finally{c(!1)}}function R(e,t){M.content.textContent=e,M.author.textContent=t}O.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function J(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function Q(e,t){return e+1<=t?100:e>t?0:t%1*100}const x=document.querySelector(".js-pagination");let y;x.addEventListener("click",Y);function K(e,t,n,s){if(e===1){x.innerHTML="";return}let o="";for(let a=1;a<=e;a++){const i=a===n.page;o+=`<button data-btn="${a}" class="${i?"active":""}">${a}</button>`}y={method:t,isLocal:s,params:n},x.innerHTML=o}function Y(e){var s;if(e.target===e.currentTarget)return;const t=e.target,n=Number(t.textContent);(s=[...x.children].find(o=>o.classList.contains("active")))==null||s.classList.remove("active"),t.classList.add("active"),y.isLocal?T(n):y.method({...y.params,page:n}),J()}const k=768,z=10,V=9,X=12,Z=9,ee=1440,te=window.innerWidth<k?V:z,ne=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],ke=window.innerWidth<k?Z:X,oe=31;T();function T(e=1){const t=ae();if(!t)return;const n=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:s,emptyFavEl:o,paginationFavEl:a,fragment:i}=se(),r=window.innerWidth;if(ie({workouts:n,emptyFavEl:o,paginationFavEl:a,favGalleryEl:s}))return;const{startIndex:g,endIndex:p}=re({perPage:te,totalWorkouts:n.length,pageNumber:e,screenWidth:r});c(!0),ce({workouts:n,startIndex:g,endIndex:p,template:t,fragment:i,favGalleryEl:s}),c(!1)}function se(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function ae(){return document.querySelector("#exercise-fav")}function ie({workouts:e,emptyFavEl:t,paginationFavEl:n,favGalleryEl:s}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),s.classList.add("hidden"),n.classList.add("hidden"),c(!1),!0}function re({perPage:e,totalWorkouts:t,pageNumber:n,screenWidth:s}){const o=Math.ceil(t/e),a={page:n};let i=(n-1)*e,r=Math.min(i+e,t);return s<ee?K(o,null,a,!0):(i=0,r=t),{startIndex:i,endIndex:r}}function ce({workouts:e,startIndex:t,endIndex:n,template:s,fragment:o,favGalleryEl:a}){for(let i=t;i<n;i++){const r=s.children[0].cloneNode(!0),g=ne.map(d=>r.querySelector(`.${d}`)),{_id:p,name:h,bodyPart:S,target:N,burnedCalories:G}=e[i];if([N,G,S,h].forEach((d,U)=>{g[U].textContent=d}),r.setAttribute("id",p),h.length>oe){const d=r.querySelector(".js-tooltip");d.dataset.tooltip=h,d.classList.add("tooltip")}o.appendChild(r)}a.replaceChildren(o)}const le="/finalJSProject-yourEnergy/pr-preview/pr-95/assets/example-img-2998cc5c.jpg";function de(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(s=>s._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ue(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],n=t.findIndex(s=>s._id===e._id);n!==-1&&(t.splice(n,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const _="/finalJSProject-yourEnergy/pr-preview/pr-95/assets/icons-a6fed07b.svg",A=document.querySelector(".js-modal-exercise"),$=document.querySelector(".js-modal-rating");function me(){document.querySelector(".js-rating__btn"),$.innerHTML=pe(),fe(),document.querySelector(".modal-rating__btn-close").addEventListener("click",ge)}function fe(){A.classList.add("hidden"),$.classList.remove("hidden")}function ge(){A.classList.remove("hidden"),$.classList.add("hidden")}function pe(){return`
    <div class="modal-rating__container">
        <button aria-label="Close modal button" class="modal-rating__btn-close">
            <svg width="28" height="28">
                <use href="${_}#icon-close"></use>
            </svg>
        </button>

        <div class="modal-rating__rating">
        0.0
            <svg width="110" height="20">
                <polygon data-value="1" transform="translate(0,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="2" transform="translate(22,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="3" transform="translate(44,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="4" transform="translate(66,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="5" transform="translate(88,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
            </svg>
        </div>
    
        <form class="modal-rating__form">
            <input class="modal-rating__email" type="email" name="email" placeholder="Email" required />
    
            <textarea class="modal-rating__comment" name="comment" placeholder="Your comment"></textarea>
    
            <button aria-label="Send" class="button button-white modal-rating__button">Send</button>
        </form>
    </div>`}const l=document.querySelector(".js-modal-exercise"),f=document.querySelector(".overlay"),L=document.querySelector(".js-modal-rating"),he="#eea10c",ve="#f4f4f433",_e=5;let v=!1,E;async function Ae(e){f.addEventListener("click",D),document.addEventListener("keydown",P);try{c(!0);const t=await I.getExercisesId(e);E=t;const n=be(t);ye(n,t),Ee();const s=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".js-favorite__btn"),a=document.querySelector(".js-rating__btn");s.addEventListener("click",q),o.addEventListener("click",Se),a.addEventListener("click",me)}catch(t){j(t.message)}finally{c(!1)}}function ye(e,t){l.innerHTML=e,xe(t)}function xe(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===e._id)?(v=!0,t.innerHTML=C()):(v=!1,t.innerHTML=B())}function Le(e){let t="";for(let n=0;n<_e;n+=1){const s=`gradient-id${n}`,o=Q(n,e),a=`
        <linearGradient id="${s}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${o}%" stop-color=${he}></stop>
            <stop offset="0%" stop-color=${ve}></stop>
        </linearGradient>`;t+=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            ${a}
            <use href="${_}#icon-star" fill="url(#${s})"></use>
        </svg>`}return t}function B(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${_}#icon-heart"></use>
    </svg>`}function C(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${_}#icon-trash"></use>
    </svg>`}function be({_id:e,name:t,rating:n,gifUrl:s,target:o,bodyPart:a,equipment:i,popularity:r,burnedCalories:g,time:p,description:h}){const S=Le(n);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${_}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${s??le}" width="260" height="260" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${n.toFixed(1)}
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
                            <p class="modal-exercise__text">${a}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Equipment</h3>
                            <p class="modal-exercise__text">${i}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Popular</h3>
                            <p class="modal-exercise__text">${r}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${g}/${p} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${h}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn" data-id="${e}">Give a rating</button>
        </div>`}function Se(){const e=document.querySelector(".js-favorite__btn");v=!v,v?(de(E),e.innerHTML=C()):(ue(E),e.innerHTML=B(),T())}function D(e){L.classList.contains("hidden")&&e.target===f&&q(),l.classList.contains("hidden")&&e.target===f&&(L.classList.add("hidden"),l.classList.remove("hidden"))}function P({key:e}){L.classList.contains("hidden")&&e==="Escape"&&q(),l.classList.contains("hidden")&&e==="Escape"&&(L.classList.add("hidden"),l.classList.remove("hidden"))}function Ee(){f.classList.remove("hidden"),l.classList.remove("hidden"),document.body.style.overflow="hidden"}function q(){f.classList.add("hidden"),l.classList.add("hidden"),document.body.style.overflow="scroll",f.removeEventListener("click",D),document.removeEventListener("keydown",P)}const F=document.querySelector(".js-menu-backdrop"),we=document.querySelector(".js-menu-container"),Te=document.querySelector(".js-open-menu"),$e=document.querySelector(".js-close-menu"),qe=document.querySelector(".js-menu-link");function b(){we.classList.toggle("is-open"),F.classList.toggle("is-hidden")}function Me(e){e.currentTarget!==e.target&&b()}function Oe({target:e}){e.closest("#mob-menu")||b()}Te.addEventListener("click",b);$e.addEventListener("click",b);qe.addEventListener("click",Me);F.addEventListener("click",Oe);const w=document.getElementById("scroll-top"),Ie=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},je=()=>{window.scrollY>window.innerHeight?w.classList.add("scroll-show"):w.classList.remove("scroll-show")};window.addEventListener("scroll",je);w.addEventListener("click",Ie);export{ke as G,oe as M,K as a,j as b,J as c,I as f,T as i,Ae as o,ue as r,c as s};
//# sourceMappingURL=scroll-top-28693d15.js.map
