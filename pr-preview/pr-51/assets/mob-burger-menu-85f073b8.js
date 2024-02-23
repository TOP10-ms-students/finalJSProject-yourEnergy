import{i as F}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const c="https://your-energy.b.goit.study/api",l=async(t,e,o)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:o});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},S={async getExercises(t){const e=new URLSearchParams(t),o=`${c}/exercises?${e}`;return await l(o)},async getExercisesId(t){const e=`${c}/exercises/${t}`;return await l(e)},async editExercisesIdRating(t,e){const o="PATCH",r=`${c}/exercises/${t}/rating`,s=JSON.stringify(e);return await l(r,o,s)},async getExercisesFilter(t){const e=new URLSearchParams(t),o=`${c}/filters?${e}`;return await l(o)},async getExercisesQuote(){const t=`${c}/quote`;return await l(t)},async addSubscription(t){const e="POST",o=`${c}/subscription`,r=JSON.stringify(t);return await l(o,e,r)}},p={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function N(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:o,date:r}=JSON.parse(t),s=new Date(r),n=new Date;if(s.getDate()===n.getDate()){p.content.textContent=e,p.author.textContent=o;return}}S.getExercisesQuote().then(e=>{const{quote:o,author:r}=e,s={quote:o,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),p.content.textContent=o,p.author.textContent=r}).catch(e=>console.log(e))}N();F.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function R(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function J(t,e,o,r){if(o.page>=t)return;const s=document.querySelector(".js-pagination");s.innerHTML="";for(let n=1;n<=t;n++){const i=document.createElement("button");i.textContent=n,i.setAttribute("data-btn",n),Number(i.dataset.btn)===o.page&&i.classList.add("active"),i.addEventListener("click",d=>{s.querySelectorAll("button").forEach(a=>{a.classList.remove("active")}),d.currentTarget.classList.add("active"),r?M(n):e({...o,page:n}),R()}),s.appendChild(i)}}M();function M(t=1){const e=V();if(!e)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,fragment:n}=W(),i=window.innerWidth,d=1440,g=768;if(!(o!=null&&o.length)){s.classList.remove("hidden"),r.classList.add("hidden");return}const a=i<g?9:10,u=o.length,H=Math.ceil(u/a),T={page:t};let C=(t-1)*a,b=Math.min(C+a,u);i<d?J(H,null,T,!0):(C=0,b=u),r.innerHTML="";for(let L=C;L<b;L++){const x=e.children[0].cloneNode(!0),$=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],j=$.map(w=>x.querySelector(`.${w}`)),{_id:O,name:A,bodyPart:D,target:I,burnedCalories:B}=o[L];[I,B,D,A].forEach((w,P)=>{j[P].textContent=w}),x.setAttribute("id",O),n.appendChild(x)}r.appendChild(n)}function W(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),fragment:document.createDocumentFragment()}}function V(){return document.querySelector("#exercise-fav")}const Z="/finalJSProject-yourEnergy/pr-preview/pr-51/assets/example-img-2998cc5c.jpg";function G(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function Q(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=e.findIndex(r=>r._id===t._id);o!==-1&&(e.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const{modalExercise:h,overlay:f}={modalExercise:document.querySelector(".modal-exercise"),overlay:document.querySelector(".overlay")};let m=!1;async function se(t){const e=await S.getExercisesId(t),o=K(e);U(o,e),X();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".modal-exercise__btn");r.addEventListener("click",E),s.addEventListener("click",()=>{m=!m,m?(G(e),s.innerHTML=k()):(Q(e),s.innerHTML=y())})}function U(t,e){h.innerHTML=t,z(e)}function z(t){const e=document.querySelector(".modal-exercise__btn");let o=JSON.parse(localStorage.getItem("favWorkouts"))||[];return o??(e.innerHTML=y()),o.some(s=>s._id===t._id)?(m=!0,e.innerHTML=k()):(m=!1,e.innerHTML=y())}function y(){return`<span>Add to favorite</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65907 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z"
        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`}function k(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996"
        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`}function K({_id:t,name:e,rating:o,gifUrl:r,target:s,bodyPart:n,equipment:i,popularity:d,burnedCalories:g,time:a,description:u}){return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <path d="M17 7L7 17M7 7L17 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??Z}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${o} 
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#EEA10C" />
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#EEA10C" />
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#EEA10C" />
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#EEA10C" />
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#F4F4F4" fill-opacity="0.2" />
                    </svg>
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
                            <p class="modal-exercise__text">${g}/${a} min</p>
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
                    <path
                        d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65907 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z"
                        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button class="button modal-exercise__btn">Give a rating</button>
        </div>`}function X(){f.classList.remove("hidden"),h.classList.remove("hidden"),document.body.style.overflow="hidden"}function E(){f.classList.add("hidden"),h.classList.add("hidden"),document.body.style.overflow="scroll"}f.addEventListener("click",t=>t.target===f&&E());document.addEventListener("keydown",({key:t})=>t==="Escape"&&!h.classList.contains("hidden")&&E());const q=document.querySelector(".js-menu-backdrop"),Y=document.querySelector(".js-menu-container"),_=document.querySelector(".js-open-menu"),ee=document.querySelector(".js-close-menu"),te=document.querySelectorAll(".js-menu-link");document.querySelector("body");function v(){const t=_.getAttribute("aria-expanded")==="true"||!1;_.setAttribute("aria-expanded",!t),Y.classList.toggle("is-open"),q.classList.toggle("is-hidden")}_.addEventListener("click",v);ee.addEventListener("click",v);te.forEach(t=>{t.addEventListener("click",v)});q.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&v()});export{J as a,S as f,M as i,se as o,Q as r};
//# sourceMappingURL=mob-burger-menu-85f073b8.js.map
