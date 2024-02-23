import{i as J}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const c="https://your-energy.b.goit.study/api",l=async(t,e,o)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:o});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},M={async getExercises(t){const e=new URLSearchParams(t),o=`${c}/exercises?${e}`;return await l(o)},async getExercisesId(t){const e=`${c}/exercises/${t}`;return await l(e)},async editExercisesIdRating(t,e){const o="PATCH",r=`${c}/exercises/${t}/rating`,s=JSON.stringify(e);return await l(r,o,s)},async getExercisesFilter(t){const e=new URLSearchParams(t),o=`${c}/filters?${e}`;return await l(o)},async getExercisesQuote(){const t=`${c}/quote`;return await l(t)},async addSubscription(t){const e="POST",o=`${c}/subscription`,r=JSON.stringify(t);return await l(o,e,r)}},g={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function H(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:o,date:r}=JSON.parse(t),s=new Date(r),n=new Date;if(s.getDate()===n.getDate()){g.content.textContent=e,g.author.textContent=o;return}}M.getExercisesQuote().then(e=>{const{quote:o,author:r}=e,s={quote:o,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),g.content.textContent=o,g.author.textContent=r}).catch(e=>console.log(e))}H();J.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function W(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function G(t,e,o,r){const s=document.querySelector(".js-pagination");if(s.innerHTML="",t!==1)for(let n=1;n<=t;n++){const i=document.createElement("button");i.textContent=n,i.setAttribute("data-btn",n),Number(i.dataset.btn)===o.page&&i.classList.add("active"),i.addEventListener("click",d=>{s.querySelectorAll("button").forEach(a=>{a.classList.remove("active")}),d.currentTarget.classList.add("active"),r?T(n):e({...o,page:n}),W()}),s.appendChild(i)}}const $=function(t){const e=document.querySelector(".js-spinner");t?e.classList.remove("hidden"):setTimeout(()=>e.classList.add("hidden"),300)};T();function T(t=1){const e=U();if(!e)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,fragment:n}=Q(),i=window.innerWidth,d=1440,p=768;if(!(o!=null&&o.length)){s.classList.remove("hidden"),r.classList.add("hidden");return}const a=i<p?9:10,u=o.length,y=Math.ceil(u/a),I={page:t};let _=(t-1)*a,q=Math.min(_+a,u);i<d?G(y,null,I,!0):(_=0,q=u),$(!0),r.innerHTML="";for(let w=_;w<q;w++){const S=e.children[0].cloneNode(!0),k=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],P=k.map(b=>S.querySelector(`.${b}`)),{_id:A,name:B,bodyPart:C,target:N,burnedCalories:R}=o[w];[N,R,C,B].forEach((b,F)=>{P[F].textContent=b}),S.setAttribute("id",A),n.appendChild(S)}r.appendChild(n),$(!1)}function Q(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),fragment:document.createDocumentFragment()}}function U(){return document.querySelector("#exercise-fav")}const z="/finalJSProject-yourEnergy/pr-preview/pr-60/assets/example-img-2998cc5c.jpg";function K(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function X(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=e.findIndex(r=>r._id===t._id);o!==-1&&(e.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const f="/finalJSProject-yourEnergy/pr-preview/pr-60/assets/icons-7601a5dc.svg",v=document.querySelector(".modal-exercise"),h=document.querySelector(".overlay");let m=!1;async function ie(t){const e=await M.getExercisesId(t),o=ee(e);V(o,e),te();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".modal-exercise__btn");r.addEventListener("click",L),s.addEventListener("click",()=>{m=!m,m?(K(e),s.innerHTML=j()):(X(e),s.innerHTML=O())})}function V(t,e){v.innerHTML=t,Y(e)}function Y(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===t._id)?(m=!0,e.innerHTML=j()):(m=!1,e.innerHTML=O())}function Z(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${f}#icon-star-full"
          ></use>
        </svg>`,o=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${f}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(t);let s="";for(let n=0;n<r;n+=1)s+=e;for(let n=0;n<5-r;n+=1)s+=o;return s}function O(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${f}#icon-heart"></use>
    </svg>`}function j(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${f}#icon-trash"></use>
    </svg>`}function ee({_id:t,name:e,rating:o,gifUrl:r,target:s,bodyPart:n,equipment:i,popularity:d,burnedCalories:p,time:a,description:u}){const y=Z(o);return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${f}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??z}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${o}
                    ${y}
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
                            <p class="modal-exercise__text">${d}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${p}/${a} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${u}
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
        </div>`}function te(){h.classList.remove("hidden"),v.classList.remove("hidden"),document.body.style.overflow="hidden"}function L(){h.classList.add("hidden"),v.classList.add("hidden"),document.body.style.overflow="scroll"}h.addEventListener("click",t=>t.target===h&&L());document.addEventListener("keydown",({key:t})=>t==="Escape"&&!v.classList.contains("hidden")&&L());const D=document.querySelector(".js-menu-backdrop"),se=document.querySelector(".js-menu-container"),E=document.querySelector(".js-open-menu"),oe=document.querySelector(".js-close-menu"),ne=document.querySelectorAll(".js-menu-link");document.querySelector("body");function x(){const t=E.getAttribute("aria-expanded")==="true"||!1;E.setAttribute("aria-expanded",!t),se.classList.toggle("is-open"),D.classList.toggle("is-hidden")}E.addEventListener("click",x);oe.addEventListener("click",x);ne.forEach(t=>{t.addEventListener("click",x)});D.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&x()});export{G as a,M as f,T as i,ie as o,X as r,$ as s};
//# sourceMappingURL=mob-burger-menu-539b4b7b.js.map
