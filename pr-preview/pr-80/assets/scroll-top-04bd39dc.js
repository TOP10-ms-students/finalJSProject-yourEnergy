import{i as T}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const c="https://your-energy.b.goit.study/api",l=async(t,e,s)=>{const r=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:s});if(!r.ok)throw new Error(`Error: status: ${r.status}, ${r.statusText}`);return r.json()},I={async getExercises(t){const e=new URLSearchParams(t),s=`${c}/exercises?${e}`;return await l(s)},async getExercisesId(t){const e=`${c}/exercises/${t}`;return await l(e)},async editExercisesIdRating(t,e){const s="PATCH",n=`${c}/exercises/${t}/rating`,o=JSON.stringify(e);return await l(n,s,o)},async getExercisesFilter(t){const e=new URLSearchParams(t),s=`${c}/filters?${e}`;return await l(s)},async getExercisesQuote(){const t=`${c}/quote`;return await l(t)},async addSubscription(t){const e="POST",s=`${c}/subscription`,n=JSON.stringify(t);return await l(s,e,n)}},M=(t,e,s)=>{T.show({message:t,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:e??"#fca664"})},v={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function R(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:s,date:n}=JSON.parse(t),o=new Date(n),r=new Date;if(o.getDate()===r.getDate()){v.content.textContent=e,v.author.textContent=s;return}}I.getExercisesQuote().then(e=>{const{quote:s,author:n}=e,o={quote:s,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(o)),v.content.textContent=s,v.author.textContent=n}).catch(e=>M(e.message))}R();T.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function F(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const x=document.querySelector(".js-pagination");let y;x.addEventListener("click",J);function H(t,e,s,n){if(t===1){x.innerHTML="";return}let o="";for(let r=1;r<=t;r++){const i=r===s.page;o+=`<button data-btn="${r}" class="${i?"active":""}">${r}</button>`}y={method:e,isLocal:n,params:s},x.innerHTML=o}function J(t){var n;if(t.target===t.currentTarget)return;const e=t.target,s=Number(e.textContent);(n=[...x.children].find(o=>o.classList.contains("active")))==null||n.classList.remove("active"),e.classList.add("active"),y.isLocal?q(s):y.method({...y.params,page:s}),F()}const p=function(t){const e=document.querySelector(".js-spinner");t?e.classList.remove("hidden"):setTimeout(()=>e.classList.add("hidden"),300)},W=1440,U=768,G=9,Q=10,K=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"];let b=!1;q();function q(t=1){const e=X();if(!e)return;const s=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:n,emptyFavEl:o,paginationFavEl:r,fragment:i}=z(),a=window.innerWidth;if(V({workouts:s,emptyFavEl:o,paginationFavEl:r,favGalleryEl:n}))return;const d=a<U?G:Q,{startIndex:u,endIndex:m}=Y({perPage:d,totalWorkouts:s.length,pageNumber:t,screenWidth:a});b?p(b):b=!0,Z({workouts:s,startIndex:u,endIndex:m,template:e,fragment:i,favGalleryEl:n}),p(!1)}function z(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function X(){return document.querySelector("#exercise-fav")}function V({workouts:t,emptyFavEl:e,paginationFavEl:s,favGalleryEl:n}){if(!(t!=null&&t.length))return e.classList.remove("hidden"),n.classList.add("hidden"),s.classList.add("hidden"),p(!1),!0}function Y({perPage:t,totalWorkouts:e,pageNumber:s,screenWidth:n}){const o=Math.ceil(e/t),r={page:s};let i=(s-1)*t,a=Math.min(i+t,e);return n<W?H(o,null,r,!0):(i=0,a=e),{startIndex:i,endIndex:a}}function Z({workouts:t,startIndex:e,endIndex:s,template:n,fragment:o,favGalleryEl:r}){for(let i=e;i<s;i++){const a=n.children[0].cloneNode(!0),d=K.map(E=>a.querySelector(`.${E}`)),{_id:u,name:m,bodyPart:w,target:A,burnedCalories:B}=t[i];[A,B,w,m].forEach((E,N)=>{d[N].textContent=E}),a.setAttribute("id",u),o.appendChild(a)}r.replaceChildren(o)}const ee="/finalJSProject-yourEnergy/pr-preview/pr-80/assets/example-img-2998cc5c.jpg";function te(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(n=>n._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function se(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],s=e.findIndex(n=>n._id===t._id);s!==-1&&(e.splice(s,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const g="/finalJSProject-yourEnergy/pr-preview/pr-80/assets/icons-7601a5dc.svg",_=document.querySelector(".modal-exercise"),h=document.querySelector(".overlay");let f=!1;async function pe(t){h.addEventListener("click",D),document.addEventListener("keydown",C);try{p(!0);const e=await I.getExercisesId(t),s=ie(e);oe(s,e),ae();const n=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".modal-exercise__btn");n.addEventListener("click",$),o.addEventListener("click",()=>{f=!f,f?(te(e),o.innerHTML=j()):(se(e),o.innerHTML=k(),q())})}catch(e){M(e.message)}finally{p(!1)}}function oe(t,e){_.innerHTML=t,ne(e)}function ne(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===t._id)?(f=!0,e.innerHTML=j()):(f=!1,e.innerHTML=k())}function re(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-full"
          ></use>
        </svg>`,s=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-empty"
          ></use>
        </svg>`,n=Math.round(t);let o="";for(let r=0;r<n;r+=1)o+=e;for(let r=0;r<5-n;r+=1)o+=s;return o}function k(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-heart"></use>
    </svg>`}function j(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-trash"></use>
    </svg>`}function ie({_id:t,name:e,rating:s,gifUrl:n,target:o,bodyPart:r,equipment:i,popularity:a,burnedCalories:d,time:u,description:m}){const w=re(s);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${g}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${n??ee}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(s)?`${s}.0`:s.toFixed(1)}
                    ${w}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${o}</p>
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
                            <p class="modal-exercise__text">${d}/${u} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${m}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn">Give a rating</button>
        </div>`}function D(t){t.target===h&&$()}function C({key:t}){t==="Escape"&&!_.classList.contains("hidden")&&$()}function ae(){h.classList.remove("hidden"),_.classList.remove("hidden"),document.body.style.overflow="hidden"}function $(){h.classList.add("hidden"),_.classList.add("hidden"),document.body.style.overflow="scroll"}h.removeEventListener("click",D);document.removeEventListener("keydown",C);const P=document.querySelector(".js-menu-backdrop"),ce=document.querySelector(".js-menu-container"),L=document.querySelector(".js-open-menu"),le=document.querySelector(".js-close-menu"),de=document.querySelectorAll(".js-menu-link, .js-close-menu");function S(){const t=L.getAttribute("aria-expanded")==="true";L.setAttribute("aria-expanded",!t),ce.classList.toggle("is-open"),P.classList.toggle("is-hidden")}L.addEventListener("click",S);le.addEventListener("click",S);de.forEach(t=>{t.addEventListener("click",S)});P.addEventListener("click",({target:t})=>{t.closest("#mob-menu")||S()});const O=document.getElementById("scroll-top"),ue=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},me=()=>{window.scrollY>window.innerHeight?O.classList.add("scroll-show"):O.classList.remove("scroll-show")};window.addEventListener("scroll",me);O.addEventListener("click",ue);export{H as a,M as b,I as f,q as i,pe as o,se as r,p as s};
//# sourceMappingURL=scroll-top-04bd39dc.js.map
