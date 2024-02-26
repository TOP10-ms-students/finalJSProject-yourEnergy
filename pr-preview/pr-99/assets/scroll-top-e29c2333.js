import{i as I}from"./vendor-ab977035.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const u="https://your-energy.b.goit.study/api",m=async(e,t,n)=>{const a=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:n});if(!a.ok)throw new Error(`Error: status: ${a.status}, ${a.statusText}`);return a.json()},M={async getExercises(e){const t=new URLSearchParams(e),n=`${u}/exercises?${t}`;return await m(n)},async getExercisesId(e){const t=`${u}/exercises/${e}`;return await m(t)},async editExercisesIdRating(e,t){const n="PATCH",o=`${u}/exercises/${e}/rating`,s=JSON.stringify(t);return await m(o,n,s)},async getExercisesFilter(e){const t=new URLSearchParams(e),n=`${u}/filters?${t}`;return await m(n)},async getExercisesQuote(){const e=`${u}/quote`;return await m(e)},async addSubscription(e){const t="POST",n=`${u}/subscription`,o=JSON.stringify(e);return await m(n,t,o)}},O=(e,t,n)=>{I.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},c=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},$={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function W(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:n,date:o}=JSON.parse(e),s=new Date(o),a=new Date;if(s.getDate()===a.getDate()){R(t,n);return}}H()}W();async function H(){try{c(!0);const e=await M.getExercisesQuote(),{quote:t,author:n}=e,o={quote:t,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(o)),R(t,n)}catch(e){O(e.message)}finally{c(!1)}}function R(e,t){$.content.textContent=e,$.author.textContent=t}I.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function J(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function Q(e,t){return e+1<=t?100:e>t?0:t%1*100}const x=document.querySelector(".js-pagination");let y;x.addEventListener("click",Y);function K(e,t,n,o){if(e===1){x.innerHTML="";return}let s="";for(let a=1;a<=e;a++){const r=a===n.page;s+=`<button data-btn="${a}" class="${r?"active":""}">${a}</button>`}y={method:t,isLocal:o,params:n},x.innerHTML=s}function Y(e){var o;if(e.target===e.currentTarget)return;const t=e.target,n=Number(t.textContent);(o=[...x.children].find(s=>s.classList.contains("active")))==null||o.classList.remove("active"),t.classList.add("active"),y.isLocal?q(n):y.method({...y.params,page:n}),J()}const k=768,z=10,V=9,X=12,Z=9,ee=1440,te=window.innerWidth<k?V:z,ne=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],De=window.innerWidth<k?Z:X,se=31;q();function q(e=1){const t=ae();if(!t)return;const n=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:o,emptyFavEl:s,paginationFavEl:a,fragment:r}=oe(),i=window.innerWidth;if(re({workouts:n,emptyFavEl:s,paginationFavEl:a,favGalleryEl:o}))return;const{startIndex:g,endIndex:p}=ie({perPage:te,totalWorkouts:n.length,pageNumber:e,screenWidth:i});c(!0),ce({workouts:n,startIndex:g,endIndex:p,template:t,fragment:r,favGalleryEl:o}),c(!1)}function oe(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function ae(){return document.querySelector("#exercise-fav")}function re({workouts:e,emptyFavEl:t,paginationFavEl:n,favGalleryEl:o}){if(!(e!=null&&e.length))return t.classList.remove("hidden"),o.classList.add("hidden"),n.classList.add("hidden"),c(!1),!0}function ie({perPage:e,totalWorkouts:t,pageNumber:n,screenWidth:o}){const s=Math.ceil(t/e),a={page:n};let r=(n-1)*e,i=Math.min(r+e,t);return o<ee?K(s,null,a,!0):(r=0,i=t),{startIndex:r,endIndex:i}}function ce({workouts:e,startIndex:t,endIndex:n,template:o,fragment:s,favGalleryEl:a}){for(let r=t;r<n;r++){const i=o.children[0].cloneNode(!0),g=ne.map(d=>i.querySelector(`.${d}`)),{_id:p,name:v,bodyPart:S,target:F,burnedCalories:G}=e[r];if([F,G,S,v].forEach((d,U)=>{g[U].textContent=d}),i.setAttribute("id",p),v.length>se){const d=i.querySelector(".js-tooltip");d.dataset.tooltip=v,d.classList.add("tooltip")}s.appendChild(i)}a.replaceChildren(s)}const le="/finalJSProject-yourEnergy/pr-preview/pr-99/assets/example-img-2998cc5c.jpg";function de(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(o=>o._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ue(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],n=t.findIndex(o=>o._id===e._id);n!==-1&&(t.splice(n,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const _="/finalJSProject-yourEnergy/pr-preview/pr-99/assets/icons-a6fed07b.svg",A=document.querySelector(".js-modal-exercise"),j=document.querySelector(".js-modal-rating");document.querySelector(".js-stars-svg");function me(){document.querySelector(".js-rating__btn"),j.innerHTML=_e(),pe();const e=document.querySelector(".js-modal-rating__btn-close"),t=document.querySelector(".js-stars-svg");e.addEventListener("click",ve),t.addEventListener("click",he),ge()}function fe(){document.querySelector(".js-rating-form").addEventListener("submit",e=>{e.preventDefault()})}function ge(){const e=document.querySelectorAll(".js-stars-svg polygon");e.forEach(t=>{t.addEventListener("mouseenter",function(){const n=parseInt(this.getAttribute("data-value"));e.forEach((o,s)=>{s<n?(o.classList.add("active"),document.querySelector(".js-rating-value").textContent=n):o.classList.remove("active")})})})}function pe(){A.classList.add("hidden"),j.classList.remove("hidden")}function ve(){A.classList.remove("hidden"),j.classList.add("hidden")}function he(e){const t=document.querySelector(".js-stars-svg");let n=e.target.dataset.value;n&&(t.parentNode.dataset.value=n),t.querySelectorAll("polygon").forEach(o=>{let s=t.parentNode.dataset.value>=o.dataset.value;o.classList.toggle("active",s)}),document.querySelector(".js-rating-value").textContent=n,fe()}function _e(){return`
    <div class="modal-rating__container">
        <button aria-label="Close modal button" class="modal-rating__btn-close js-modal-rating__btn-close">
            <svg width="28" height="28">
                <use href="${_}#icon-close"></use>
            </svg>
        </button>

        <div class="modal-rating__rating">
            <span class="js-rating-value">0</span>
            <svg width="110" height="20" class="js-stars-svg">
                <polygon data-value="1" transform="translate(0,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="2" transform="translate(22,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="3" transform="translate(44,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="4" transform="translate(66,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="5" transform="translate(88,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
            </svg>
        </div>
    
        <form class="modal-rating__form js-rating-form">
            <input class="modal-rating__email" type="email" name="email" placeholder="Email" required />
    
            <textarea class="modal-rating__comment" name="comment" placeholder="Your comment"></textarea>
    
            <button aria-label="Send" class="button button-white modal-rating__button">Send</button>
        </form>
    </div>`}const l=document.querySelector(".js-modal-exercise"),f=document.querySelector(".overlay"),L=document.querySelector(".js-modal-rating"),ye="#eea10c",xe="#f4f4f433",Le=5;let h=!1,E;async function Be(e){f.addEventListener("click",B),document.addEventListener("keydown",P);try{c(!0);const t=await M.getExercisesId(e);E=t;const n=we(t);be(n,t),je();const o=document.querySelector(".js-modal-exercise__btn-close"),s=document.querySelector(".js-favorite__btn"),a=document.querySelector(".js-rating__btn");o.addEventListener("click",T),s.addEventListener("click",qe),a.addEventListener("click",me)}catch(t){O(t.message)}finally{c(!1)}}function be(e,t){l.innerHTML=e,Se(t)}function Se(e){const t=document.querySelector(".js-favorite__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===e._id)?(h=!0,t.innerHTML=D()):(h=!1,t.innerHTML=C())}function Ee(e){let t="";for(let n=0;n<Le;n+=1){const o=`gradient-id${n}`,s=Q(n,e),a=`
        <linearGradient id="${o}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${s}%" stop-color=${ye}></stop>
            <stop offset="0%" stop-color=${xe}></stop>
        </linearGradient>`;t+=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            ${a}
            <use href="${_}#icon-star" fill="url(#${o})"></use>
        </svg>`}return t}function C(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${_}#icon-heart"></use>
    </svg>`}function D(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${_}#icon-trash"></use>
    </svg>`}function we({_id:e,name:t,rating:n,gifUrl:o,target:s,bodyPart:a,equipment:r,popularity:i,burnedCalories:g,time:p,description:v}){const S=Ee(n);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close js-modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${_}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${o??le}" width="260" height="260" alt="Example of exercise" loading="lazy" />

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
                            <p class="modal-exercise__text">${s}</p>
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
        </div>`}function qe(){const e=document.querySelector(".js-favorite__btn");h=!h,h?(de(E),e.innerHTML=D()):(ue(E),e.innerHTML=C(),q())}function B(e){L.classList.contains("hidden")&&e.target===f&&T(),l.classList.contains("hidden")&&e.target===f&&(L.classList.add("hidden"),l.classList.remove("hidden"))}function P({key:e}){L.classList.contains("hidden")&&e==="Escape"&&T(),l.classList.contains("hidden")&&e==="Escape"&&(L.classList.add("hidden"),l.classList.remove("hidden"))}function je(){f.classList.remove("hidden"),l.classList.remove("hidden"),document.body.style.overflow="hidden"}function T(){f.classList.add("hidden"),l.classList.add("hidden"),document.body.style.overflow="auto",f.removeEventListener("click",B),document.removeEventListener("keydown",P)}const N=document.querySelector(".js-menu-backdrop"),Te=document.querySelector(".js-menu-container"),$e=document.querySelector(".js-open-menu"),Ie=document.querySelector(".js-close-menu"),Me=document.querySelector(".js-menu-link");function b(){Te.classList.toggle("is-open"),N.classList.toggle("is-hidden")}function Oe(e){e.currentTarget!==e.target&&b()}function Re({target:e}){e.closest("#mob-menu")||b()}$e.addEventListener("click",b);Ie.addEventListener("click",b);Me.addEventListener("click",Oe);N.addEventListener("click",Re);const w=document.getElementById("scroll-top"),ke=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},Ae=()=>{window.scrollY>window.innerHeight?w.classList.add("scroll-show"):w.classList.remove("scroll-show")};window.addEventListener("scroll",Ae);w.addEventListener("click",ke);export{De as G,se as M,K as a,O as b,J as c,M as f,q as i,Be as o,ue as r,c as s};
//# sourceMappingURL=scroll-top-e29c2333.js.map
