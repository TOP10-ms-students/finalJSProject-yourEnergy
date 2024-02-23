import{i as O}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const l="https://your-energy.b.goit.study/api",d=async(t,e,s)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:s});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},T={async getExercises(t){const e=new URLSearchParams(t),s=`${l}/exercises?${e}`;return await d(s)},async getExercisesId(t){const e=`${l}/exercises/${t}`;return await d(e)},async editExercisesIdRating(t,e){const s="PATCH",r=`${l}/exercises/${t}/rating`,o=JSON.stringify(e);return await d(r,s,o)},async getExercisesFilter(t){const e=new URLSearchParams(t),s=`${l}/filters?${e}`;return await d(s)},async getExercisesQuote(){const t=`${l}/quote`;return await d(t)},async addSubscription(t){const e="POST",s=`${l}/subscription`,r=JSON.stringify(t);return await d(s,e,r)}},I=(t,e,s)=>{O.show({message:t,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:e??"#fca664"})},v={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function z(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:s,date:r}=JSON.parse(t),o=new Date(r),n=new Date;if(o.getDate()===n.getDate()){v.content.textContent=e,v.author.textContent=s;return}}T.getExercisesQuote().then(e=>{const{quote:s,author:r}=e,o={quote:s,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(o)),v.content.textContent=s,v.author.textContent=r}).catch(e=>I(e.message))}z();O.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function K(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function X(t,e,s,r){const o=document.querySelector(".js-pagination");if(o.innerHTML="",t===1)return;const n=document.createDocumentFragment();for(let i=1;i<=t;i++){const a=document.createElement("button");a.textContent=i,a.setAttribute("data-btn",i),Number(a.dataset.btn)===s.page&&a.classList.add("active"),a.addEventListener("click",u=>{o.querySelectorAll("button").forEach(c=>{c.classList.remove("active")}),u.currentTarget.classList.add("active"),r?M(i):e({...s,page:i}),K()}),n.appendChild(a)}o.appendChild(n)}const y=function(t){const e=document.querySelector(".js-spinner");t?e.classList.remove("hidden"):setTimeout(()=>e.classList.add("hidden"),300)};M();function M(t=1){const e=Y();if(!e)return;const s=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:o,paginationFavEl:n,fragment:i}=V(),a=window.innerWidth,u=1440,h=768;if(!(s!=null&&s.length)){o.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden");return}const c=a<h?9:10,m=s.length,F=Math.ceil(m/c),R={page:t};let w=(t-1)*c,k=Math.min(w+c,m);a<u?X(F,null,R,!0):(w=0,k=m),y(!0),r.innerHTML="";for(let b=w;b<k;b++){const E=e.children[0].cloneNode(!0),A=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],N=A.map(S=>E.querySelector(`.${S}`)),{_id:H,name:J,bodyPart:W,target:G,burnedCalories:Q}=s[b];[G,Q,W,J].forEach((S,U)=>{N[U].textContent=S}),E.setAttribute("id",H),i.appendChild(E)}r.appendChild(i),y(!1)}function V(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function Y(){return document.querySelector("#exercise-fav")}const Z="/finalJSProject-yourEnergy/pr-preview/pr-72/assets/example-img-2998cc5c.jpg";function ee(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function te(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],s=e.findIndex(r=>r._id===t._id);s!==-1&&(e.splice(s,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const p="/finalJSProject-yourEnergy/pr-preview/pr-72/assets/icons-7601a5dc.svg",x=document.querySelector(".modal-exercise"),g=document.querySelector(".overlay");let f=!1;async function fe(t){g.addEventListener("click",C),document.addEventListener("keydown",B);try{y(!0);const e=await T.getExercisesId(t),s=re(e);se(s,e),ie();const r=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".modal-exercise__btn");r.addEventListener("click",$),o.addEventListener("click",()=>{f=!f,f?(ee(e),o.innerHTML=j()):(te(e),o.innerHTML=D())})}catch(e){I(e.message)}finally{y(!1)}}function se(t,e){x.innerHTML=t,oe(e)}function oe(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===t._id)?(f=!0,e.innerHTML=j()):(f=!1,e.innerHTML=D())}function ne(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-full"
          ></use>
        </svg>`,s=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${p}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(t);let o="";for(let n=0;n<r;n+=1)o+=e;for(let n=0;n<5-r;n+=1)o+=s;return o}function D(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-heart"></use>
    </svg>`}function j(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${p}#icon-trash"></use>
    </svg>`}function re({_id:t,name:e,rating:s,gifUrl:r,target:o,bodyPart:n,equipment:i,popularity:a,burnedCalories:u,time:h,description:c}){const m=ne(s);return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${p}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??Z}" alt="Example of exercise" loading="lazy" />

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
        </div>`}function C(t){t.target===g&&$()}function B({key:t}){t==="Escape"&&!x.classList.contains("hidden")&&$()}function ie(){g.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function $(){g.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll"}g.removeEventListener("click",C);document.removeEventListener("keydown",B);const P=document.querySelector(".js-menu-backdrop"),ae=document.querySelector(".js-menu-container"),L=document.querySelector(".js-open-menu"),ce=document.querySelector(".js-close-menu"),le=document.querySelectorAll(".js-menu-link");document.querySelector("body");function _(){const t=L.getAttribute("aria-expanded")==="true"||!1;L.setAttribute("aria-expanded",!t),ae.classList.toggle("is-open"),P.classList.toggle("is-hidden")}L.addEventListener("click",_);ce.addEventListener("click",_);le.forEach(t=>{t.addEventListener("click",_)});P.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&_()});const q=document.getElementById("scroll-top"),de=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},ue=()=>{window.scrollY>window.innerHeight?q.classList.add("scroll-show"):q.classList.remove("scroll-show")};window.addEventListener("scroll",ue);q.addEventListener("click",de);export{X as a,I as b,T as f,M as i,fe as o,te as r,y as s};
//# sourceMappingURL=scroll-top-bda07753.js.map
