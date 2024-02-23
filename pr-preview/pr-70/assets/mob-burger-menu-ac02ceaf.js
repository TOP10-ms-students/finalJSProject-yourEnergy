import{i as T}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const l="https://your-energy.b.goit.study/api",d=async(t,e,o)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:o});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},M={async getExercises(t){const e=new URLSearchParams(t),o=`${l}/exercises?${e}`;return await d(o)},async getExercisesId(t){const e=`${l}/exercises/${t}`;return await d(e)},async editExercisesIdRating(t,e){const o="PATCH",r=`${l}/exercises/${t}/rating`,s=JSON.stringify(e);return await d(r,o,s)},async getExercisesFilter(t){const e=new URLSearchParams(t),o=`${l}/filters?${e}`;return await d(o)},async getExercisesQuote(){const t=`${l}/quote`;return await d(t)},async addSubscription(t){const e="POST",o=`${l}/subscription`,r=JSON.stringify(t);return await d(o,e,r)}},O=(t,e,o)=>{T.show({message:t,drag:!0,close:!1,timeout:o??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:e??"#fa903e"})},h={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function G(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:o,date:r}=JSON.parse(t),s=new Date(r),n=new Date;if(s.getDate()===n.getDate()){h.content.textContent=e,h.author.textContent=o;return}}M.getExercisesQuote().then(e=>{const{quote:o,author:r}=e,s={quote:o,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),h.content.textContent=o,h.author.textContent=r}).catch(e=>O(e.message))}G();T.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function Q(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function U(t,e,o,r){const s=document.querySelector(".js-pagination");if(s.innerHTML="",t===1)return;const n=document.createDocumentFragment();for(let i=1;i<=t;i++){const a=document.createElement("button");a.textContent=i,a.setAttribute("data-btn",i),Number(a.dataset.btn)===o.page&&a.classList.add("active"),a.addEventListener("click",u=>{s.querySelectorAll("button").forEach(c=>{c.classList.remove("active")}),u.currentTarget.classList.add("active"),r?I(i):e({...o,page:i}),Q()}),n.appendChild(a)}s.appendChild(n)}const v=function(t){const e=document.querySelector(".js-spinner");t?e.classList.remove("hidden"):setTimeout(()=>e.classList.add("hidden"),300)};I();function I(t=1){const e=K();if(!e)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,paginationFavEl:n,fragment:i}=z(),a=window.innerWidth,u=1440,p=768;if(!(o!=null&&o.length)){s.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden");return}const c=a<p?9:10,m=o.length,C=Math.ceil(m/c),P={page:t};let w=(t-1)*c,$=Math.min(w+c,m);a<u?U(C,null,P,!0):(w=0,$=m),v(!0),r.innerHTML="";for(let S=w;S<$;S++){const b=e.children[0].cloneNode(!0),A=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],B=A.map(E=>b.querySelector(`.${E}`)),{_id:R,name:F,bodyPart:N,target:J,burnedCalories:H}=o[S];[J,H,N,F].forEach((E,W)=>{B[W].textContent=E}),b.setAttribute("id",R),i.appendChild(b)}r.appendChild(i),v(!1)}function z(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function K(){return document.querySelector("#exercise-fav")}const X="/finalJSProject-yourEnergy/pr-preview/pr-70/assets/example-img-2998cc5c.jpg";function V(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function Y(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=e.findIndex(r=>r._id===t._id);o!==-1&&(e.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const g="/finalJSProject-yourEnergy/pr-preview/pr-70/assets/icons-7601a5dc.svg",x=document.querySelector(".modal-exercise"),y=document.querySelector(".overlay");let f=!1;async function ce(t){try{v(!0);const e=await M.getExercisesId(t),o=se(e);Z(o,e),oe();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".modal-exercise__btn");r.addEventListener("click",q),s.addEventListener("click",()=>{f=!f,f?(V(e),s.innerHTML=k()):(Y(e),s.innerHTML=j())})}catch(e){O(e.message)}finally{v(!1)}}function Z(t,e){x.innerHTML=t,ee(e)}function ee(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===t._id)?(f=!0,e.innerHTML=k()):(f=!1,e.innerHTML=j())}function te(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-full"
          ></use>
        </svg>`,o=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${g}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(t);let s="";for(let n=0;n<r;n+=1)s+=e;for(let n=0;n<5-r;n+=1)s+=o;return s}function j(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-heart"></use>
    </svg>`}function k(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${g}#icon-trash"></use>
    </svg>`}function se({_id:t,name:e,rating:o,gifUrl:r,target:s,bodyPart:n,equipment:i,popularity:a,burnedCalories:u,time:p,description:c}){const m=te(o);return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${g}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??X}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${o}
                    ${m}
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
                            <p class="modal-exercise__text">${u}/${p} min</p>
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
        </div>`}function oe(){y.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function q(){y.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll"}y.addEventListener("click",t=>t.target===y&&q());document.addEventListener("keydown",({key:t})=>t==="Escape"&&!x.classList.contains("hidden")&&q());const D=document.querySelector(".js-menu-backdrop"),ne=document.querySelector(".js-menu-container"),L=document.querySelector(".js-open-menu"),re=document.querySelector(".js-close-menu"),ie=document.querySelectorAll(".js-menu-link");document.querySelector("body");function _(){const t=L.getAttribute("aria-expanded")==="true"||!1;L.setAttribute("aria-expanded",!t),ne.classList.toggle("is-open"),D.classList.toggle("is-hidden")}L.addEventListener("click",_);re.addEventListener("click",_);ie.forEach(t=>{t.addEventListener("click",_)});D.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&_()});export{U as a,O as b,M as f,I as i,ce as o,Y as r,v as s};
//# sourceMappingURL=mob-burger-menu-ac02ceaf.js.map
