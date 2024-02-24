import{i as M}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const a="https://your-energy.b.goit.study/api",c=async(t,e,s)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:s});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},j={async getExercises(t){const e=new URLSearchParams(t),s=`${a}/exercises?${e}`;return await c(s)},async getExercisesId(t){const e=`${a}/exercises/${t}`;return await c(e)},async editExercisesIdRating(t,e){const s="PATCH",r=`${a}/exercises/${t}/rating`,o=JSON.stringify(e);return await c(r,s,o)},async getExercisesFilter(t){const e=new URLSearchParams(t),s=`${a}/filters?${e}`;return await c(s)},async getExercisesQuote(){const t=`${a}/quote`;return await c(t)},async addSubscription(t){const e="POST",s=`${a}/subscription`,r=JSON.stringify(t);return await c(s,e,r)}},D=(t,e,s)=>{M.show({message:t,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:e??"#fca664"})},g={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function X(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:s,date:r}=JSON.parse(t),o=new Date(r),n=new Date;if(o.getDate()===n.getDate()){g.content.textContent=e,g.author.textContent=s;return}}j.getExercisesQuote().then(e=>{const{quote:s,author:r}=e,o={quote:s,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(o)),g.content.textContent=s,g.author.textContent=r}).catch(e=>D(e.message))}X();M.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function V(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}const v=document.querySelector(".js-pagination");let h;v.addEventListener("click",Z);function Y(t,e,s,r){if(t===1){v.innerHTML="";return}let o="";for(let n=1;n<=t;n++){const i=n===s.page;o+=`<button data-btn="${n}" class="${i?"active":""}">${n}</button>`}h={method:e,isLocal:r,params:s},v.innerHTML=o}function Z(t){var r;if(t.target===t.currentTarget)return;const e=t.target,s=Number(e.textContent);(r=[...v.children].find(o=>o.classList.contains("active")))==null||r.classList.remove("active"),e.classList.add("active"),h.isLocal?O(s):h.method({...h.params,page:s}),V()}const y=function(t){const e=document.querySelector(".js-spinner");t?e.classList.remove("hidden"):setTimeout(()=>e.classList.add("hidden"),300)};O();function O(t=1){const e=te();if(!e)return;const s=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:o,paginationFavEl:n,fragment:i}=ee(),p=window.innerWidth,w=1440,b=768;if(!(s!=null&&s.length)){o.classList.remove("hidden"),r.classList.add("hidden"),n.classList.add("hidden");return}const l=p<b?9:10,d=s.length,N=Math.ceil(d/l),A={page:t};let S=(t-1)*l,I=Math.min(S+l,d);p<w?Y(N,null,A,!0):(S=0,I=d),y(!0),r.innerHTML="";for(let E=S;E<I;E++){const L=e.children[0].cloneNode(!0),H=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],J=H.map(q=>L.querySelector(`.${q}`)),{_id:W,name:G,bodyPart:Q,target:U,burnedCalories:z}=s[E];[U,z,Q,G].forEach((q,K)=>{J[K].textContent=q}),L.setAttribute("id",W),i.appendChild(L)}r.appendChild(i),y(!1)}function ee(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),paginationFavEl:document.querySelector(".js-pagination"),fragment:document.createDocumentFragment()}}function te(){return document.querySelector("#exercise-fav")}const se="/finalJSProject-yourEnergy/pr-preview/pr-78/assets/example-img-2998cc5c.jpg";function oe(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function ne(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],s=e.findIndex(r=>r._id===t._id);s!==-1&&(e.splice(s,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const m="/finalJSProject-yourEnergy/pr-preview/pr-78/assets/icons-7601a5dc.svg",x=document.querySelector(".modal-exercise"),f=document.querySelector(".overlay");let u=!1;async function he(t){f.addEventListener("click",B),document.addEventListener("keydown",R);try{y(!0);const e=await j.getExercisesId(t),s=ce(e);re(s,e),le();const r=document.querySelector(".modal-exercise__btn-close"),o=document.querySelector(".modal-exercise__btn");r.addEventListener("click",T),o.addEventListener("click",()=>{u=!u,u?(oe(e),o.innerHTML=C()):(ne(e),o.innerHTML=P(),O())})}catch(e){D(e.message)}finally{y(!1)}}function re(t,e){x.innerHTML=t,ie(e)}function ie(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(o=>o._id===t._id)?(u=!0,e.innerHTML=C()):(u=!1,e.innerHTML=P())}function ae(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${m}#icon-star-full"
          ></use>
        </svg>`,s=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${m}#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(t);let o="";for(let n=0;n<r;n+=1)o+=e;for(let n=0;n<5-r;n+=1)o+=s;return o}function P(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${m}#icon-heart"></use>
    </svg>`}function C(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${m}#icon-trash"></use>
    </svg>`}function ce({_id:t,name:e,rating:s,gifUrl:r,target:o,bodyPart:n,equipment:i,popularity:p,burnedCalories:w,time:b,description:l}){const d=ae(s);return`
    <div class="modal-exercise__container">
            <button aria-label="Close modal button" class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${m}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??se}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${Number.isInteger(s)?`${s}.0`:s.toFixed(1)}
                    ${d}
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
                            <p class="modal-exercise__text">${p}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${w}/${b} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${l}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn">Give a rating</button>
        </div>`}function B(t){t.target===f&&T()}function R({key:t}){t==="Escape"&&!x.classList.contains("hidden")&&T()}function le(){f.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.overflow="hidden"}function T(){f.classList.add("hidden"),x.classList.add("hidden"),document.body.style.overflow="scroll"}f.removeEventListener("click",B);document.removeEventListener("keydown",R);const F=document.querySelector(".js-menu-backdrop"),de=document.querySelector(".js-menu-container"),$=document.querySelector(".js-open-menu"),ue=document.querySelector(".js-close-menu"),me=document.querySelectorAll(".js-menu-link");document.querySelector("body");function _(){const t=$.getAttribute("aria-expanded")==="true"||!1;$.setAttribute("aria-expanded",!t),de.classList.toggle("is-open"),F.classList.toggle("is-hidden")}$.addEventListener("click",_);ue.addEventListener("click",_);me.forEach(t=>{t.addEventListener("click",_)});F.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&_()});const k=document.getElementById("scroll-top"),fe=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},pe=()=>{window.scrollY>window.innerHeight?k.classList.add("scroll-show"):k.classList.remove("scroll-show")};window.addEventListener("scroll",pe);k.addEventListener("click",fe);export{Y as a,D as b,j as f,O as i,he as o,ne as r,y as s};
//# sourceMappingURL=scroll-top-eee39609.js.map
