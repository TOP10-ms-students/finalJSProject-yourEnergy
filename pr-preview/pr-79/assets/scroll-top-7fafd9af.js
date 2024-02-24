import{i as M}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const a="https://your-energy.b.goit.study/api",c=async(e,t,s)=>{const n=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:s});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},j={async getExercises(e){const t=new URLSearchParams(e),s=`${a}/exercises?${t}`;return await c(s)},async getExercisesId(e){const t=`${a}/exercises/${e}`;return await c(t)},async editExercisesIdRating(e,t){const s="PATCH",r=`${a}/exercises/${e}/rating`,o=JSON.stringify(t);return await c(r,s,o)},async getExercisesFilter(e){const t=new URLSearchParams(e),s=`${a}/filters?${t}`;return await c(s)},async getExercisesQuote(){const e=`${a}/quote`;return await c(e)},async addSubscription(e){const t="POST",s=`${a}/subscription`,r=JSON.stringify(e);return await c(s,t,r)}},D=(e,t,s)=>{M.show({message:e,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fca664"})},l=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},I={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function V(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:s,date:r}=JSON.parse(e),o=new Date(r),n=new Date;if(o.getDate()===n.getDate()){P(t,s);return}}Y()}V();async function Y(){try{l(!0);const e=await j.getExercisesQuote(),{quote:t,author:s}=e,r={quote:t,author:s,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),P(t,s)}catch(e){D(e.message)}finally{l(!1)}}function P(e,t){I.content.textContent=e,I.author.textContent=t}M.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function Z(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const v=document.querySelector(".js-pagination");let h;v.addEventListener("click",te);function ee(e,t,s,r){if(e===1){v.innerHTML="";return}let o="";for(let n=1;n<=e;n++){const i=n===s.page;o+=`<button data-btn="${n}" class="${i?"active":""}">${n}</button>`}h={method:t,isLocal:r,params:s},v.innerHTML=o}function te(e){var r;if(e.target===e.currentTarget)return;const t=e.target,s=Number(t.textContent);(r=[...v.children].find(o=>o.classList.contains("active")))==null||r.classList.remove("active"),t.classList.add("active"),h.isLocal?T(s):h.method({...h.params,page:s}),Z()}T();function T(e=1){const t=oe();if(!t)return;const s=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:o,paginationFavEl:n,fragment:i}=se(),g=window.innerWidth,_=1440,w=768;if(!(s!=null&&s.length)){o.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden");return}const d=g<w?9:10,u=s.length,A=Math.ceil(u/d),H={page:e};let b=(e-1)*d,O=Math.min(b+d,u);g<_?ee(A,null,H,!0):(b=0,O=u),l(!0),r.innerHTML="";for(let E=b;E<O;E++){const S=t.children[0].cloneNode(!0),J=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],W=J.map(L=>S.querySelector(`.${L}`)),{_id:G,name:Q,bodyPart:U,target:z,burnedCalories:K}=s[E];[z,K,U,Q].forEach((L,X)=>{W[X].textContent=L}),S.setAttribute("id",G),i.appendChild(S)}r.appendChild(i),l(!1)}function se(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function oe(){return document.querySelector("#exercise-fav")}const ne="/finalJSProject-yourEnergy/pr-preview/pr-79/assets/example-img-2998cc5c.jpg";function re(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(r=>r._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function ie(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],s=t.findIndex(r=>r._id===e._id);s!==-1&&(t.splice(s,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const f="/finalJSProject-yourEnergy/pr-preview/pr-79/assets/icons-7601a5dc.svg",y=document.querySelector(".modal-exercise"),p=document.querySelector(".overlay");let m=!1;async function ye(e){p.addEventListener("click",R),document.addEventListener("keydown",F);try{l(!0);const t=await j.getExercisesId(e),s=de(t);ae(s,t),ue();const r=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".modal-exercise__btn");r.addEventListener("click",k),o.addEventListener("click",()=>{m=!m,m?(re(t),o.innerHTML=B()):(ie(t),o.innerHTML=C(),T())})}catch(t){D(t.message)}finally{l(!1)}}function ae(e,t){y.innerHTML=e,ce(t)}function ce(e){const t=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===e._id)?(m=!0,t.innerHTML=B()):(m=!1,t.innerHTML=C())}function le(e){const t=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${f}#icon-star-full"
          ></use>
        </svg>`,s=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${f}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(e);let o="";for(let n=0;n<r;n+=1)o+=t;for(let n=0;n<5-r;n+=1)o+=s;return o}function C(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${f}#icon-heart"></use>
    </svg>`}function B(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${f}#icon-trash"></use>
    </svg>`}function de({_id:e,name:t,rating:s,gifUrl:r,target:o,bodyPart:n,equipment:i,popularity:g,burnedCalories:_,time:w,description:d}){const u=le(s);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${f}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??ne}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(s)?`${s}.0`:s.toFixed(1)}
                    ${u}
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
                            <p class="modal-exercise__text">${g}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${_}/${w} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${d}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn">Give a rating</button>
        </div>`}function R(e){e.target===p&&k()}function F({key:e}){e==="Escape"&&!y.classList.contains("hidden")&&k()}function ue(){p.classList.remove("hidden"),y.classList.remove("hidden"),document.body.style.overflow="hidden"}function k(){p.classList.add("hidden"),y.classList.add("hidden"),document.body.style.overflow="scroll"}p.removeEventListener("click",R);document.removeEventListener("keydown",F);const N=document.querySelector(".js-menu-backdrop"),me=document.querySelector(".js-menu-container"),q=document.querySelector(".js-open-menu"),fe=document.querySelector(".js-close-menu"),pe=document.querySelectorAll(".js-menu-link, .js-close-menu");function x(){const e=q.getAttribute("aria-expanded")==="true";q.setAttribute("aria-expanded",!e),me.classList.toggle("is-open"),N.classList.toggle("is-hidden")}q.addEventListener("click",x);fe.addEventListener("click",x);pe.forEach(e=>{e.addEventListener("click",x)});N.addEventListener("click",({target:e})=>{e.closest("#mob-menu")||x()});const $=document.getElementById("scroll-top"),ge=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},he=()=>{window.scrollY>window.innerHeight?$.classList.add("scroll-show"):$.classList.remove("scroll-show")};window.addEventListener("scroll",he);$.addEventListener("click",ge);export{ee as a,D as b,j as f,T as i,ye as o,ie as r,l as s};
//# sourceMappingURL=scroll-top-7fafd9af.js.map
