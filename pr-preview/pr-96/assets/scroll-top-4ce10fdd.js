import{i as M}from"./vendor-ab977035.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const u="https://your-energy.b.goit.study/api",m=async(e,t,n)=>{const a=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:n});if(!a.ok)throw new Error(`Error: status: ${a.status}, ${a.statusText}`);return a.json()},O={async getExercises(e){const t=new URLSearchParams(e),n=`${u}/exercises?${t}`;return await m(n)},async getExercisesId(e){const t=`${u}/exercises/${e}`;return await m(t)},async editExercisesIdRating(e,t){const n="PATCH",s=`${u}/exercises/${e}/rating`,o=JSON.stringify(t);return await m(s,n,o)},async getExercisesFilter(e){const t=new URLSearchParams(e),n=`${u}/filters?${t}`;return await m(n)},async getExercisesQuote(){const e=`${u}/quote`;return await m(e)},async addSubscription(e){const t="POST",n=`${u}/subscription`,s=JSON.stringify(e);return await m(n,t,s)}},I=(e,t,n)=>{M.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},j={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function W(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:n,date:s}=JSON.parse(e),o=new Date(s),a=new Date;if(o.getDate()===a.getDate()){R(t,n);return}}H()}W();async function H(){try{c(!0);const e=await O.getExercisesQuote(),{quote:t,author:n}=e,s={quote:t,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),R(t,n)}catch(e){I(e.message)}finally{c(!1)}}function R(e,t){j.content.textContent=e,j.author.textContent=t}M.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function J(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function Q(e,t){return e+1<=t?100:e>t?0:t%1*100}const x=document.querySelector(".js-pagination");let y;x.addEventListener("click",Y);function K(e,t,n,s){if(e===1){x.innerHTML="";return}let o="";for(let a=1;a<=e;a++){const r=a===n.page;o+=`<button data-btn="${a}" class="${r?"active":""}">${a}</button>`}y={method:t,isLocal:s,params:n},x.innerHTML=o}function Y(e){var s;if(e.target===e.currentTarget)return;const t=e.target,n=Number(t.textContent);(s=[...x.children].find(o=>o.classList.contains("active")))==null||s.classList.remove("active"),t.classList.add("active"),y.isLocal?q(n):y.method({...y.params,page:n}),J()}const k=768,z=10,V=9,X=12,Z=9,ee=1440,te=window.innerWidth<k?V:z,ne=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],Ae=window.innerWidth<k?Z:X,oe=31;q();function q(e=1){const t=ae();if(!t)return;const n=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:s,emptyFavEl:o,paginationFavEl:a,fragment:r}=se(),i=window.innerWidth;if(re({workouts:n,emptyFavEl:o,paginationFavEl:a,favGalleryEl:s}))return;const{startIndex:g,endIndex:p}=ie({perPage:te,totalWorkouts:n.length,pageNumber:e,screenWidth:i});c(!0),ce({workouts:n,startIndex:g,endIndex:p,template:t,fragment:r,favGalleryEl:s}),c(!1)}function se(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function ae(){return document.querySelector("#exercise-fav")}function re({workouts:e,emptyFavEl:t,paginationFavEl:n,favGalleryEl:s}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),s.classList.add("hidden"),n.classList.add("hidden"),c(!1),!0}function ie({perPage:e,totalWorkouts:t,pageNumber:n,screenWidth:s}){const o=Math.ceil(t/e),a={page:n};let r=(n-1)*e,i=Math.min(r+e,t);return s<ee?K(o,null,a,!0):(r=0,i=t),{startIndex:r,endIndex:i}}function ce({workouts:e,startIndex:t,endIndex:n,template:s,fragment:o,favGalleryEl:a}){for(let r=t;r<n;r++){const i=s.children[0].cloneNode(!0),g=ne.map(d=>i.querySelector(`.${d}`)),{_id:p,name:v,bodyPart:S,target:F,burnedCalories:G}=e[r];if([F,G,S,v].forEach((d,U)=>{g[U].textContent=d}),i.setAttribute("id",p),v.length>oe){const d=i.querySelector(".js-tooltip");d.dataset.tooltip=v,d.classList.add("tooltip")}o.appendChild(i)}a.replaceChildren(o)}const le="/finalJSProject-yourEnergy/pr-preview/pr-96/assets/example-img-2998cc5c.jpg";function de(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(s=>s._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ue(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],n=t.findIndex(s=>s._id===e._id);n!==-1&&(t.splice(n,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const _="/finalJSProject-yourEnergy/pr-preview/pr-96/assets/icons-a6fed07b.svg",A=document.querySelector(".js-modal-exercise"),T=document.querySelector(".js-modal-rating");function me(){document.querySelector(".js-rating__btn"),T.innerHTML=ve(),fe();const e=document.querySelector(".js-modal-rating__btn-close"),t=document.querySelector(".js-stars-svg");e.addEventListener("click",ge),t.addEventListener("click",pe)}function fe(){A.classList.add("hidden"),T.classList.remove("hidden")}function ge(){A.classList.remove("hidden"),T.classList.add("hidden")}function pe(e){const t=document.querySelector(".js-stars-svg");let n=e.target.dataset.value;n&&(t.parentNode.dataset.value=n),t.querySelectorAll("polygon").forEach(s=>{let o=t.parentNode.dataset.value>=s.dataset.value;s.classList.toggle("active",o)})}function ve(){return`
    <div class="modal-rating__container">
        <button aria-label="Close modal button" class="modal-rating__btn-close js-modal-rating__btn-close">
            <svg width="28" height="28">
                <use href="${_}#icon-close"></use>
            </svg>
        </button>

        <div class="modal-rating__rating">
        0.0
            <svg width="110" height="20" class="js-stars-svg">
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
    </div>`}const l=document.querySelector(".js-modal-exercise"),f=document.querySelector(".overlay"),L=document.querySelector(".js-modal-rating"),he="#eea10c",_e="#f4f4f433",ye=5;let h=!1,E;async function Ce(e){f.addEventListener("click",D),document.addEventListener("keydown",N);try{c(!0);const t=await O.getExercisesId(e);E=t;const n=Se(t);xe(n,t),we();const s=document.querySelector(".js-modal-exercise__btn-close"),o=document.querySelector(".js-favorite__btn"),a=document.querySelector(".js-rating__btn");s.addEventListener("click",$),o.addEventListener("click",Ee),a.addEventListener("click",me)}catch(t){I(t.message)}finally{c(!1)}}function xe(e,t){l.innerHTML=e,Le(t)}function Le(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===e._id)?(h=!0,t.innerHTML=B()):(h=!1,t.innerHTML=C())}function be(e){let t="";for(let n=0;n<ye;n+=1){const s=`gradient-id${n}`,o=Q(n,e),a=`
        <linearGradient id="${s}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${o}%" stop-color=${he}></stop>
            <stop offset="0%" stop-color=${_e}></stop>
        </linearGradient>`;t+=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            ${a}
            <use href="${_}#icon-star" fill="url(#${s})"></use>
        </svg>`}return t}function C(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${_}#icon-heart"></use>
    </svg>`}function B(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${_}#icon-trash"></use>
    </svg>`}function Se({_id:e,name:t,rating:n,gifUrl:s,target:o,bodyPart:a,equipment:r,popularity:i,burnedCalories:g,time:p,description:v}){const S=be(n);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close js-modal-exercise__btn-close">
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
                            <p class="modal-exercise__text">${r}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Popular</h3>
                            <p class="modal-exercise__text">${i}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${g}/${p} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${v}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn" data-id="${e}">Give a rating</button>
        </div>`}function Ee(){const e=document.querySelector(".js-favorite__btn");h=!h,h?(de(E),e.innerHTML=B()):(ue(E),e.innerHTML=C(),q())}function D(e){L.classList.contains("hidden")&&e.target===f&&$(),l.classList.contains("hidden")&&e.target===f&&(L.classList.add("hidden"),l.classList.remove("hidden"))}function N({key:e}){L.classList.contains("hidden")&&e==="Escape"&&$(),l.classList.contains("hidden")&&e==="Escape"&&(L.classList.add("hidden"),l.classList.remove("hidden"))}function we(){f.classList.remove("hidden"),l.classList.remove("hidden"),document.body.style.overflow="hidden"}function $(){f.classList.add("hidden"),l.classList.add("hidden"),document.body.style.overflow="scroll",f.removeEventListener("click",D),document.removeEventListener("keydown",N)}const P=document.querySelector(".js-menu-backdrop"),qe=document.querySelector(".js-menu-container"),Te=document.querySelector(".js-open-menu"),$e=document.querySelector(".js-close-menu"),je=document.querySelector(".js-menu-link");function b(){qe.classList.toggle("is-open"),P.classList.toggle("is-hidden")}function Me(e){e.currentTarget!==e.target&&b()}function Oe({target:e}){e.closest("#mob-menu")||b()}Te.addEventListener("click",b);$e.addEventListener("click",b);je.addEventListener("click",Me);P.addEventListener("click",Oe);const w=document.getElementById("scroll-top"),Ie=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},Re=()=>{window.scrollY>window.innerHeight?w.classList.add("scroll-show"):w.classList.remove("scroll-show")};window.addEventListener("scroll",Re);w.addEventListener("click",Ie);export{Ae as G,oe as M,K as a,I as b,J as c,O as f,q as i,Ce as o,ue as r,c as s};
//# sourceMappingURL=scroll-top-4ce10fdd.js.map
