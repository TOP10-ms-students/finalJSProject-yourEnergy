import{i as T}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const l="https://your-energy.b.goit.study/api",d=async(t,e,s)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:s});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},k={async getExercises(t){const e=new URLSearchParams(t),s=`${l}/exercises?${e}`;return await d(s)},async getExercisesId(t){const e=`${l}/exercises/${t}`;return await d(e)},async editExercisesIdRating(t,e){const s="PATCH",r=`${l}/exercises/${t}/rating`,o=JSON.stringify(e);return await d(r,s,o)},async getExercisesFilter(t){const e=new URLSearchParams(t),s=`${l}/filters?${e}`;return await d(s)},async getExercisesQuote(){const t=`${l}/quote`;return await d(t)},async addSubscription(t){const e="POST",s=`${l}/subscription`,r=JSON.stringify(t);return await d(s,e,r)}},I=(t,e,s)=>{T.show({message:t,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:e??"#fa903e"})},x={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function G(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:s,date:r}=JSON.parse(t),o=new Date(r),n=new Date;if(o.getDate()===n.getDate()){x.content.textContent=e,x.author.textContent=s;return}}k.getExercisesQuote().then(e=>{const{quote:s,author:r}=e,o={quote:s,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(o)),x.content.textContent=s,x.author.textContent=r}).catch(e=>I(e.message))}G();T.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function Q(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function U(t,e,s,r){const o=document.querySelector(".js-pagination");if(o.innerHTML="",t===1)return;const n=document.createDocumentFragment();for(let i=1;i<=t;i++){const a=document.createElement("button");a.textContent=i,a.setAttribute("data-btn",i),Number(a.dataset.btn)===s.page&&a.classList.add("active"),a.addEventListener("click",m=>{o.querySelectorAll("button").forEach(c=>{c.classList.remove("active")}),m.currentTarget.classList.add("active"),r?M(i):e({...s,page:i}),Q()}),n.appendChild(a)}o.appendChild(n)}const _=function(t){const e=document.querySelector(".js-spinner");t?e.classList.remove("hidden"):setTimeout(()=>e.classList.add("hidden"),300)};M();function M(t=1){const e=K();if(!e)return;const s=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:o,paginationFavEl:n,fragment:i}=z(),a=window.innerWidth,m=1440,y=768;if(!(s!=null&&s.length)){o.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden");return}const c=a<y?9:10,f=s.length,C=Math.ceil(f/c),P={page:t};let b=(t-1)*c,$=Math.min(b+c,f);a<m?U(C,null,P,!0):(b=0,$=f),_(!0),r.innerHTML="";for(let w=b;w<$;w++){const E=e.children[0].cloneNode(!0),A=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],F=A.map(L=>E.querySelector(`.${L}`)),{_id:N,name:R,bodyPart:B,target:J,burnedCalories:H}=s[w];[J,H,B,R].forEach((L,W)=>{F[W].textContent=L}),E.setAttribute("id",N),i.appendChild(E)}r.appendChild(i),_(!1)}function z(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function K(){return document.querySelector("#exercise-fav")}const X="/finalJSProject-yourEnergy/pr-preview/pr-69/assets/example-img-2998cc5c.jpg";function V(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function Y(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],s=e.findIndex(r=>r._id===t._id);s!==-1&&(e.splice(s,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const h="/finalJSProject-yourEnergy/pr-preview/pr-69/assets/icons-7601a5dc.svg",v=document.querySelector(".modal-exercise"),u=document.querySelector(".overlay");let p=!1;async function ce(t){u.addEventListener("click",e=>e.target===u&&g()),document.addEventListener("keydown",({key:e})=>e==="Escape"&&!v.classList.contains("hidden")&&g());try{_(!0);const e=await k.getExercisesId(t),s=se(e);Z(s,e),oe();const r=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".modal-exercise__btn");r.addEventListener("click",g),o.addEventListener("click",()=>{p=!p,p?(V(e),o.innerHTML=j()):(Y(e),o.innerHTML=O())})}catch(e){I(e.message)}finally{_(!1)}}function Z(t,e){v.innerHTML=t,ee(e)}function ee(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===t._id)?(p=!0,e.innerHTML=j()):(p=!1,e.innerHTML=O())}function te(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${h}#icon-star-full"
          ></use>
        </svg>`,s=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${h}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(t);let o="";for(let n=0;n<r;n+=1)o+=e;for(let n=0;n<5-r;n+=1)o+=s;return o}function O(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${h}#icon-heart"></use>
    </svg>`}function j(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${h}#icon-trash"></use>
    </svg>`}function se({_id:t,name:e,rating:s,gifUrl:r,target:o,bodyPart:n,equipment:i,popularity:a,burnedCalories:m,time:y,description:c}){const f=te(s);return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${h}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??X}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(s)?`${s}.0`:s.toFixed(1)}
                    ${f}
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
                            <p class="modal-exercise__text">${m}/${y} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${c}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button class="button button-with-icon button-white modal-exercise__btn"></button>
            <button class="button modal-exercise__btn">Give a rating</button>
        </div>`}function oe(){u.classList.remove("hidden"),v.classList.remove("hidden"),document.body.style.overflow="hidden"}function g(){u.classList.add("hidden"),v.classList.add("hidden"),document.body.style.overflow="scroll"}u.removeEventListener("click",t=>t.target===u&&g());document.removeEventListener("keydown",({key:t})=>t==="Escape"&&!v.classList.contains("hidden")&&g());const D=document.querySelector(".js-menu-backdrop"),ne=document.querySelector(".js-menu-container"),q=document.querySelector(".js-open-menu"),re=document.querySelector(".js-close-menu"),ie=document.querySelectorAll(".js-menu-link");document.querySelector("body");function S(){const t=q.getAttribute("aria-expanded")==="true"||!1;q.setAttribute("aria-expanded",!t),ne.classList.toggle("is-open"),D.classList.toggle("is-hidden")}q.addEventListener("click",S);re.addEventListener("click",S);ie.forEach(t=>{t.addEventListener("click",S)});D.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&S()});export{U as a,I as b,k as f,M as i,ce as o,Y as r,_ as s};
//# sourceMappingURL=mob-burger-menu-b76398fc.js.map
