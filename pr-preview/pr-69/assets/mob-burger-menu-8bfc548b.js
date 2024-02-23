import{i as O}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const l="https://your-energy.b.goit.study/api",d=async(t,e,s)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:s});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},k={async getExercises(t){const e=new URLSearchParams(t),s=`${l}/exercises?${e}`;return await d(s)},async getExercisesId(t){const e=`${l}/exercises/${t}`;return await d(e)},async editExercisesIdRating(t,e){const s="PATCH",r=`${l}/exercises/${t}/rating`,o=JSON.stringify(e);return await d(r,s,o)},async getExercisesFilter(t){const e=new URLSearchParams(t),s=`${l}/filters?${e}`;return await d(s)},async getExercisesQuote(){const t=`${l}/quote`;return await d(t)},async addSubscription(t){const e="POST",s=`${l}/subscription`,r=JSON.stringify(t);return await d(s,e,r)}},T=(t,e,s)=>{O.show({message:t,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:e??"#fa903e"})},v={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function U(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:s,date:r}=JSON.parse(t),o=new Date(r),n=new Date;if(o.getDate()===n.getDate()){v.content.textContent=e,v.author.textContent=s;return}}k.getExercisesQuote().then(e=>{const{quote:s,author:r}=e,o={quote:s,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(o)),v.content.textContent=s,v.author.textContent=r}).catch(e=>T(e.message))}U();O.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function z(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function K(t,e,s,r){const o=document.querySelector(".js-pagination");if(o.innerHTML="",t===1)return;const n=document.createDocumentFragment();for(let i=1;i<=t;i++){const a=document.createElement("button");a.textContent=i,a.setAttribute("data-btn",i),Number(a.dataset.btn)===s.page&&a.classList.add("active"),a.addEventListener("click",u=>{o.querySelectorAll("button").forEach(c=>{c.classList.remove("active")}),u.currentTarget.classList.add("active"),r?I(i):e({...s,page:i}),z()}),n.appendChild(a)}o.appendChild(n)}const y=function(t){const e=document.querySelector(".js-spinner");t?e.classList.remove("hidden"):setTimeout(()=>e.classList.add("hidden"),300)};I();function I(t=1){const e=V();if(!e)return;const s=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:o,paginationFavEl:n,fragment:i}=X(),a=window.innerWidth,u=1440,h=768;if(!(s!=null&&s.length)){o.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden");return}const c=a<h?9:10,m=s.length,R=Math.ceil(m/c),A={page:t};let b=(t-1)*c,$=Math.min(b+c,m);a<u?K(R,null,A,!0):(b=0,$=m),y(!0),r.innerHTML="";for(let S=b;S<$;S++){const w=e.children[0].cloneNode(!0),F=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],N=F.map(E=>w.querySelector(`.${E}`)),{_id:B,name:J,bodyPart:H,target:W,burnedCalories:G}=s[S];[W,G,H,J].forEach((E,Q)=>{N[Q].textContent=E}),w.setAttribute("id",B),i.appendChild(w)}r.appendChild(i),y(!1)}function X(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function V(){return document.querySelector("#exercise-fav")}const Y="/finalJSProject-yourEnergy/pr-preview/pr-69/assets/example-img-2998cc5c.jpg";function Z(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function ee(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],s=e.findIndex(r=>r._id===t._id);s!==-1&&(e.splice(s,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const p="/finalJSProject-yourEnergy/pr-preview/pr-69/assets/icons-7601a5dc.svg",x=document.querySelector(".modal-exercise"),g=document.querySelector(".overlay");let f=!1;async function de(t){g.addEventListener("click",D),document.addEventListener("keydown",C);try{y(!0);const e=await k.getExercisesId(t),s=ne(e);te(s,e),re();const r=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".modal-exercise__btn");r.addEventListener("click",q),o.addEventListener("click",()=>{f=!f,f?(Z(e),o.innerHTML=j()):(ee(e),o.innerHTML=M())})}catch(e){T(e.message)}finally{y(!1)}}function te(t,e){x.innerHTML=t,se(e)}function se(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===t._id)?(f=!0,e.innerHTML=j()):(f=!1,e.innerHTML=M())}function oe(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-full"
          ></use>
        </svg>`,s=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(t);let o="";for(let n=0;n<r;n+=1)o+=e;for(let n=0;n<5-r;n+=1)o+=s;return o}function M(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-heart"></use>
    </svg>`}function j(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-trash"></use>
    </svg>`}function ne({_id:t,name:e,rating:s,gifUrl:r,target:o,bodyPart:n,equipment:i,popularity:a,burnedCalories:u,time:h,description:c}){const m=oe(s);return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${p}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??Y}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(s)?`${s}.0`:s.toFixed(1)}
                    ${m}
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
                            <p class="modal-exercise__text">${u}/${h} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${c}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn">Give a rating</button>
        </div>`}function D(t){t.target===g&&q()}function C({key:t}){t==="Escape"&&!x.classList.contains("hidden")&&q()}function re(){g.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function q(){g.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll"}g.removeEventListener("click",D);document.removeEventListener("keydown",C);const P=document.querySelector(".js-menu-backdrop"),ie=document.querySelector(".js-menu-container"),L=document.querySelector(".js-open-menu"),ae=document.querySelector(".js-close-menu"),ce=document.querySelectorAll(".js-menu-link");document.querySelector("body");function _(){const t=L.getAttribute("aria-expanded")==="true"||!1;L.setAttribute("aria-expanded",!t),ie.classList.toggle("is-open"),P.classList.toggle("is-hidden")}L.addEventListener("click",_);ae.addEventListener("click",_);ce.forEach(t=>{t.addEventListener("click",_)});P.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&_()});export{K as a,T as b,k as f,I as i,de as o,ee as r,y as s};
//# sourceMappingURL=mob-burger-menu-8bfc548b.js.map
