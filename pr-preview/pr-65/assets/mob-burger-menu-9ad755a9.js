import{i as T}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const d="https://your-energy.b.goit.study/api",u=async(t,e,o)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:o});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},M={async getExercises(t){const e=new URLSearchParams(t),o=`${d}/exercises?${e}`;return await u(o)},async getExercisesId(t){const e=`${d}/exercises/${t}`;return await u(e)},async editExercisesIdRating(t,e){const o="PATCH",r=`${d}/exercises/${t}/rating`,s=JSON.stringify(e);return await u(r,o,s)},async getExercisesFilter(t){const e=new URLSearchParams(t),o=`${d}/filters?${e}`;return await u(o)},async getExercisesQuote(){const t=`${d}/quote`;return await u(t)},async addSubscription(t){const e="POST",o=`${d}/subscription`,r=JSON.stringify(t);return await u(o,e,r)}},p={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function H(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:o,date:r}=JSON.parse(t),s=new Date(r),n=new Date;if(s.getDate()===n.getDate()){p.content.textContent=e,p.author.textContent=o;return}}M.getExercisesQuote().then(e=>{const{quote:o,author:r}=e,s={quote:o,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),p.content.textContent=o,p.author.textContent=r}).catch(e=>console.log(e))}H();T.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function W(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function G(t,e,o,r){const s=document.querySelector(".js-pagination");if(s.innerHTML="",t===1)return;const n=document.createDocumentFragment();for(let i=1;i<=t;i++){const a=document.createElement("button");a.textContent=i,a.setAttribute("data-btn",i),Number(a.dataset.btn)===o.page&&a.classList.add("active"),a.addEventListener("click",m=>{s.querySelectorAll("button").forEach(c=>{c.classList.remove("active")}),m.currentTarget.classList.add("active"),r?O(i):e({...o,page:i}),W()}),n.appendChild(a)}s.appendChild(n)}const h=function(t){const e=document.querySelector(".js-spinner");t?e.classList.remove("hidden"):setTimeout(()=>e.classList.add("hidden"),300)};O();function O(t=1){const e=U();if(!e)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,fragment:n}=Q(),i=window.innerWidth,a=1440,m=768;if(!(o!=null&&o.length)){s.classList.remove("hidden"),r.classList.add("hidden");return}const l=i<m?9:10,c=o.length,_=Math.ceil(c/l),j={page:t};let w=(t-1)*l,$=Math.min(w+l,c);i<a?G(_,null,j,!0):(w=0,$=c),h(!0),r.innerHTML="";for(let S=w;S<$;S++){const b=e.children[0].cloneNode(!0),C=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],P=C.map(E=>b.querySelector(`.${E}`)),{_id:A,name:B,bodyPart:R,target:N,burnedCalories:F}=o[S];[N,F,R,B].forEach((E,J)=>{P[J].textContent=E}),b.setAttribute("id",A),n.appendChild(b)}r.appendChild(n),h(!1)}function Q(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),fragment:document.createDocumentFragment()}}function U(){return document.querySelector("#exercise-fav")}const z="/finalJSProject-yourEnergy/pr-preview/pr-65/assets/example-img-2998cc5c.jpg";function K(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function X(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=e.findIndex(r=>r._id===t._id);o!==-1&&(e.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const g="/finalJSProject-yourEnergy/pr-preview/pr-65/assets/icons-7601a5dc.svg",V=(t,e,o)=>{T.show({message:t,drag:!0,close:!1,timeout:o??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:e??"#fa903e"})},x=document.querySelector(".modal-exercise"),v=document.querySelector(".overlay");let f=!1;async function ae(t){try{h(!0);const e=await M.getExercisesId(t),o=te(e);Y(o,e),se();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".modal-exercise__btn");r.addEventListener("click",q),s.addEventListener("click",()=>{f=!f,f?(K(e),s.innerHTML=k()):(X(e),s.innerHTML=I())})}catch(e){V(e.message)}finally{h(!1)}}function Y(t,e){x.innerHTML=t,Z(e)}function Z(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===t._id)?(f=!0,e.innerHTML=k()):(f=!1,e.innerHTML=I())}function ee(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-full"
          ></use>
        </svg>`,o=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(t);let s="";for(let n=0;n<r;n+=1)s+=e;for(let n=0;n<5-r;n+=1)s+=o;return s}function I(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-heart"></use>
    </svg>`}function k(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-trash"></use>
    </svg>`}function te({_id:t,name:e,rating:o,gifUrl:r,target:s,bodyPart:n,equipment:i,popularity:a,burnedCalories:m,time:l,description:c}){const _=ee(o);return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${g}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??z}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${o}
                    ${_}
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
                            <p class="modal-exercise__text">${m}/${l} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${c}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button class="button button-with-icon button-white modal-exercise__btn"><span>Add to favorite</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="./img/icons.svg#icon-trash"></use>
                </svg>
            </button>
            <button class="button modal-exercise__btn">Give a rating</button>
        </div>`}function se(){v.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function q(){v.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll"}v.addEventListener("click",t=>t.target===v&&q());document.addEventListener("keydown",({key:t})=>t==="Escape"&&!x.classList.contains("hidden")&&q());const D=document.querySelector(".js-menu-backdrop"),oe=document.querySelector(".js-menu-container"),L=document.querySelector(".js-open-menu"),ne=document.querySelector(".js-close-menu"),re=document.querySelectorAll(".js-menu-link");document.querySelector("body");function y(){const t=L.getAttribute("aria-expanded")==="true"||!1;L.setAttribute("aria-expanded",!t),oe.classList.toggle("is-open"),D.classList.toggle("is-hidden")}L.addEventListener("click",y);ne.addEventListener("click",y);re.forEach(t=>{t.addEventListener("click",y)});D.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&y()});export{G as a,V as b,M as f,O as i,ae as o,X as r,h as s};
//# sourceMappingURL=mob-burger-menu-9ad755a9.js.map
