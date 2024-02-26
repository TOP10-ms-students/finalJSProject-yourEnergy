import{i as O}from"./vendor-ab977035.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const u="https://your-energy.b.goit.study/api",m=async(e,t,o)=>{const a=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:o});if(!a.ok)throw new Error(`Error: status: ${a.status}, ${a.statusText}`);return a.json()},I={async getExercises(e){const t=new URLSearchParams(e),o=`${u}/exercises?${t}`;return await m(o)},async getExercisesId(e){const t=`${u}/exercises/${e}`;return await m(t)},async editExercisesIdRating(e,t){const o="PATCH",s=`${u}/exercises/${e}/rating`,n=JSON.stringify(t);return await m(s,o,n)},async getExercisesFilter(e){const t=new URLSearchParams(e),o=`${u}/filters?${t}`;return await m(o)},async getExercisesQuote(){const e=`${u}/quote`;return await m(e)},async addSubscription(e){const t="POST",o=`${u}/subscription`,s=JSON.stringify(e);return await m(o,t,s)}},R=(e,t,o)=>{O.show({message:e,drag:!0,close:!1,timeout:o??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},M={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function W(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:o,date:s}=JSON.parse(e),n=new Date(s),a=new Date;if(n.getDate()===a.getDate()){j(t,o);return}}H()}W();async function H(){try{c(!0);const e=await I.getExercisesQuote(),{quote:t,author:o}=e,s={quote:t,author:o,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),j(t,o)}catch(e){R(e.message)}finally{c(!1)}}function j(e,t){M.content.textContent=e,M.author.textContent=t}O.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function J(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function Q(e,t){return e+1<=t?100:e>t?0:t%1*100}const x=document.querySelector(".js-pagination");let y;x.addEventListener("click",Y);function K(e,t,o,s){if(e===1){x.innerHTML="";return}let n="";for(let a=1;a<=e;a++){const i=a===o.page;n+=`<button data-btn="${a}" class="${i?"active":""}">${a}</button>`}y={method:t,isLocal:s,params:o},x.innerHTML=n}function Y(e){var s;if(e.target===e.currentTarget)return;const t=e.target,o=Number(t.textContent);(s=[...x.children].find(n=>n.classList.contains("active")))==null||s.classList.remove("active"),t.classList.add("active"),y.isLocal?T(o):y.method({...y.params,page:o}),J()}const k=768,z=10,V=9,X=12,Z=9,ee=1440,te=window.innerWidth<k?V:z,oe=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],ke=window.innerWidth<k?Z:X,ne=31;T();function T(e=1){const t=ae();if(!t)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:s,emptyFavEl:n,paginationFavEl:a,fragment:i}=se(),r=window.innerWidth;if(ie({workouts:o,emptyFavEl:n,paginationFavEl:a,favGalleryEl:s}))return;const{startIndex:g,endIndex:p}=re({perPage:te,totalWorkouts:o.length,pageNumber:e,screenWidth:r});c(!0),ce({workouts:o,startIndex:g,endIndex:p,template:t,fragment:i,favGalleryEl:s}),c(!1)}function se(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function ae(){return document.querySelector("#exercise-fav")}function ie({workouts:e,emptyFavEl:t,paginationFavEl:o,favGalleryEl:s}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),s.classList.add("hidden"),o.classList.add("hidden"),c(!1),!0}function re({perPage:e,totalWorkouts:t,pageNumber:o,screenWidth:s}){const n=Math.ceil(t/e),a={page:o};let i=(o-1)*e,r=Math.min(i+e,t);return s<ee?K(n,null,a,!0):(i=0,r=t),{startIndex:i,endIndex:r}}function ce({workouts:e,startIndex:t,endIndex:o,template:s,fragment:n,favGalleryEl:a}){for(let i=t;i<o;i++){const r=s.children[0].cloneNode(!0),g=oe.map(d=>r.querySelector(`.${d}`)),{_id:p,name:h,bodyPart:S,target:F,burnedCalories:G}=e[i];if([F,G,S,h].forEach((d,U)=>{g[U].textContent=d}),r.setAttribute("id",p),h.length>ne){const d=r.querySelector(".js-tooltip");d.dataset.tooltip=h,d.classList.add("tooltip")}n.appendChild(r)}a.replaceChildren(n)}const le="/finalJSProject-yourEnergy/pr-preview/pr-95/assets/example-img-2998cc5c.jpg";function de(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(s=>s._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ue(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=t.findIndex(s=>s._id===e._id);o!==-1&&(t.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const _="/finalJSProject-yourEnergy/pr-preview/pr-95/assets/icons-a6fed07b.svg",A=document.querySelector(".modal-exercise"),$=document.querySelector(".modal-rating");function me(){document.querySelector(".js-rating__btn"),$.innerHTML=pe(),fe(),document.querySelector(".modal-rating__btn-close").addEventListener("click",ge)}function fe(){A.classList.add("hidden"),$.classList.remove("hidden")}function ge(){A.classList.remove("hidden"),$.classList.add("hidden")}function pe(){return`
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
    </div>`}const l=document.querySelector(".modal-exercise"),f=document.querySelector(".overlay"),b=document.querySelector(".modal-rating"),he="#eea10c",ve="#f4f4f433",_e=5;let v=!1,E;async function Ae(e){f.addEventListener("click",D),document.addEventListener("keydown",N);try{c(!0);const t=await I.getExercisesId(e);E=t;const o=Le(t);ye(o,t),Ee();const s=document.querySelector(".modal-exercise__btn-close"),n=document.querySelector(".js-favorite__btn"),a=document.querySelector(".js-rating__btn");s.addEventListener("click",q),n.addEventListener("click",Se),a.addEventListener("click",me)}catch(t){R(t.message)}finally{c(!1)}}function ye(e,t){l.innerHTML=e,xe(t)}function xe(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(n=>n._id===e._id)?(v=!0,t.innerHTML=C()):(v=!1,t.innerHTML=B())}function be(e){let t="";for(let o=0;o<_e;o+=1){const s=`gradient-id${o}`,n=Q(o,e),a=`
        <linearGradient id="${s}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${n}%" stop-color=${he}></stop>
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
    </svg>`}function Le({_id:e,name:t,rating:o,gifUrl:s,target:n,bodyPart:a,equipment:i,popularity:r,burnedCalories:g,time:p,description:h}){const S=be(o);return`
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
                    ${o.toFixed(1)}
                    ${S}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${n}</p>
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
        </div>`}function Se(){const e=document.querySelector(".js-favorite__btn");v=!v,v?(de(E),e.innerHTML=C()):(ue(E),e.innerHTML=B(),T())}function D(e){b.className==="modal-rating hidden"&&e.target===f&&q(),l.className==="modal-exercise hidden"&&e.target===f&&(b.classList.add("hidden"),l.classList.remove("hidden"))}function N({key:e}){b.className==="modal-rating hidden"&&e==="Escape"&&q(),l.className==="modal-exercise hidden"&&e==="Escape"&&(b.classList.add("hidden"),l.classList.remove("hidden"))}function Ee(){f.classList.remove("hidden"),l.classList.remove("hidden"),document.body.style.overflow="hidden"}function q(){f.classList.add("hidden"),l.classList.add("hidden"),document.body.style.overflow="scroll",f.removeEventListener("click",D),document.removeEventListener("keydown",N)}const P=document.querySelector(".js-menu-backdrop"),we=document.querySelector(".js-menu-container"),Te=document.querySelector(".js-open-menu"),$e=document.querySelector(".js-close-menu"),qe=document.querySelector(".js-menu-link");function L(){we.classList.toggle("is-open"),P.classList.toggle("is-hidden")}function Me(e){e.currentTarget!==e.target&&L()}function Oe({target:e}){e.closest("#mob-menu")||L()}Te.addEventListener("click",L);$e.addEventListener("click",L);qe.addEventListener("click",Me);P.addEventListener("click",Oe);const w=document.getElementById("scroll-top"),Ie=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},Re=()=>{window.scrollY>window.innerHeight?w.classList.add("scroll-show"):w.classList.remove("scroll-show")};window.addEventListener("scroll",Re);w.addEventListener("click",Ie);export{ke as G,ne as M,K as a,R as b,J as c,I as f,T as i,Ae as o,ue as r,c as s};
//# sourceMappingURL=scroll-top-29edc7f2.js.map
