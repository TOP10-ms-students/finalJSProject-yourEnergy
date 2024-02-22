import{i as H}from"./vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const m="https://your-energy.b.goit.study/api",g=async(e,t,r)=>{const o=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:r});if(!o.ok)throw new Error(`Error: status: ${o.status}, ${o.statusText}`);return o.json()},w={async getExercises(e){const t=new URLSearchParams(e),r=`${m}/exercises?${t}`;return await g(r)},async getExercisesId(e){const t=`${m}/exercises/${e}`;return await g(t)},async editExercisesIdRating(e,t){const r="PATCH",i=`${m}/exercises/${e}/rating`,s=JSON.stringify(t);return await g(i,r,s)},async getExercisesFilter(e){const t=new URLSearchParams(e),r=`${m}/filters?${t}`;return await g(r)},async getExercisesQuote(){const e=`${m}/quote`;return await g(e)},async addSubscription(e){const t="POST",r=`${m}/subscription`,i=JSON.stringify(e);return await g(r,t,i)}},p={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function P(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:r,date:i}=JSON.parse(e),s=new Date(i),o=new Date;if(s.getDate()===o.getDate()){p.content.textContent=t,p.author.textContent=r;return}}w.getExercisesQuote().then(t=>{const{quote:r,author:i}=t,s={quote:r,author:i,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),p.content.textContent=r,p.author.textContent=i}).catch(t=>console.log(t))}P();const T=(e,t,r)=>{H.show({message:e,drag:!0,close:!1,timeout:r??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})},b=document.querySelector(".js-gallery");document.querySelector("#exercise-group");const D=document.querySelector("#exercise");function re(e){const t=document.querySelector(".js-gallery"),r=document.querySelector("#exercise-group"),i=document.createDocumentFragment();e.forEach(({name:s="",filter:o="",imgURL:a=""})=>{const u=a?`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${a})`:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./img/no-img.jpg")',l=r.content.cloneNode(!0),c=l.querySelector(".card-item");c.setAttribute("data-name",s),c.style.backgroundImage=u;const f=l.querySelector(".card-text-title");f.textContent=s;const y=l.querySelector(".card-text-subtitle");y.textContent=o,a||c.classList.add("noImg"),i.appendChild(l)}),t.appendChild(i)}function A(e,t){b.innerHTML="";const r=document.createDocumentFragment();for(let i=0;i<e.length;i++){const{name:s,_id:o,rating:a,burnedCalories:u,target:l}=e[i],c=D.content.cloneNode(!0),f=c.querySelector(".ex-item");f.dataset.id=o;const y=c.querySelector(".js-title");y.textContent=s;const M=c.querySelector(".js-rating");M.textContent=a;const j=c.querySelector(".js-burned-calories");j.textContent=u;const $=c.querySelector(".js-target");$.textContent=l;const I=c.querySelector(".js-filter");I.textContent=`${t.filter}:`;const B=c.querySelector(".js-filter-value");B.textContent=t.excerciseFilter,r.appendChild(c)}b.appendChild(r)}function N(e,t,r){if(r.page>=e)return;const i=document.querySelector(".js-pagination");i.innerHTML="";for(let s=1;s<=e;s++){const o=document.createElement("button");o.textContent=s,o.setAttribute("data-btn",s),Number(o.dataset.btn)===r.page&&o.classList.add("active"),o.addEventListener("click",a=>{i.querySelectorAll("button").forEach(l=>{l.classList.remove("active")}),a.currentTarget.classList.add("active"),t({...r,page:s})}),i.appendChild(o)}}const O="/finalJSProject-yourEnergy/pr-preview/pr-43/assets/example-img-2998cc5c.jpg";function J(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[];t.some(i=>i._id===e._id)||(t.push(e),localStorage.setItem("favWorkouts",JSON.stringify(t)))}function R(e){let t=JSON.parse(localStorage.getItem("favWorkouts"))||[],r=t.findIndex(i=>i._id===e._id);r!==-1&&(t.splice(r,1),localStorage.setItem("favWorkouts",JSON.stringify(t)))}const{modalExercise:C,overlay:x}={modalExercise:document.querySelector(".modal-exercise"),overlay:document.querySelector(".overlay")};let h=!1;async function E(e){const t=await w.getExercisesId(e),r=G(t);V(r,t),Q();const i=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".modal-exercise__btn");i.addEventListener("click",_),s.addEventListener("click",()=>{h=!h,h?(J(t),s.innerHTML=F()):(R(t),s.innerHTML=L())})}function V(e,t){C.innerHTML=e,Z(t)}function Z(e){const t=document.querySelector(".modal-exercise__btn");let r=JSON.parse(localStorage.getItem("favWorkouts"))||[];return r??(t.innerHTML=L()),r.some(s=>s._id===e._id)?(h=!0,t.innerHTML=F()):(h=!1,t.innerHTML=L())}function L(){return`<span>Add to favorite</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65907 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z"
        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`}function F(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996"
        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`}function G({_id:e,name:t,rating:r,gifUrl:i,target:s,bodyPart:o,equipment:a,popularity:u,burnedCalories:l,time:c,description:f}){return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <path d="M17 7L7 17M7 7L17 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <img class="modal-exercise__img" src="${i??O}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${t}</h2>
                <div class="modal-exercise__rating">
                    ${r} 
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
                            <p class="modal-exercise__text">${o}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Equipment</h3>
                            <p class="modal-exercise__text">${a}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Popular</h3>
                            <p class="modal-exercise__text">${u}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${l}/${c} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${f}
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
        </div>`}function Q(){x.classList.remove("hidden"),C.classList.remove("hidden"),document.body.style.overflow="hidden"}function _(){x.classList.add("hidden"),C.classList.add("hidden"),document.body.style.overflow="scroll"}x.addEventListener("click",e=>e.target===x&&_());document.addEventListener("keydown",({key:e})=>e==="Escape"&&!C.classList.contains("hidden")&&_());const d={elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise")},n={page:"",excerciseFilter:"",filter:"muscles",keyword:"",init(e){this.page=e;const t=this.isPageExcercises()?".js-gallery":".js-fav-gallery";document.querySelector(t).addEventListener("click",K),this.isPageExcercises()&&(d.elFilters.addEventListener("click",X),d.elSearchForm.addEventListener("submit",Y),d.elSearchForm.addEventListener("reset",ee))},isPageExcercises(){return this.page===v},isPageFavorites(){return this.page===W},isFilledCroupExcercises(){return this.page===v&&!this.excerciseFilter},isFilledExcercises(){return!!(this.page===v&&this.excerciseFilter)},setFilter(e){this.filter=e,this.resetExcerciseFilter()},setExcerciseFilter(e){this.excerciseFilter=e},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},v="Excercises",W="Favorites",z={page:1,limit:10};function U(e){return e.charAt(0).toUpperCase()+e.slice(1)}function S(){d.elMainBreadCrumbsState.textContent=`${n.page} ${n.excerciseFilter?" /":""}`,d.elFilterBreadcrumb.textContent=n.excerciseFilter?U(n.excerciseFilter):"",n.isPageExcercises?n.isFilledExcercises?d.elSearchForm.hidden=!1:d.elSearchForm.hidden=!0:n.isPageFavorites&&(d.elSearchForm.hidden=!0,d.elFilters.hidden=!0)}function K(e){if(e.target===e.currentTarget)return;const t=e.target;if(n.isFilledCroupExcercises()){const r=t.closest(".card-item");if(!r)return;n.setExcerciseFilter(r.dataset.name),q()}else if(n.isFilledExcercises()&&t.closest(".ex-item-start")){const s=t.closest(".ex-item").dataset.id;E(s)}if(n.isPageExcercises())S();else if(n.isPageFavorites()&&t.closest(".ex-item-start")){const s=t.closest(".js-fav-item").id;E(s)}}function X(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(n.setFilter(e.target.dataset.filter),S())}function Y(e){e.preventDefault(),n.keyword=e.target.elements.search.value,q()}function ee(){n.resetExcerciseFilter(),S()}function q(){const e={...z};n.filter=="Muscles"?e.muscles=n.excerciseFilter:n.filter=="Equipment"?e.equipment=n.excerciseFilter:n.filter=="Body parts"&&(e.bodypart=n.excerciseFilter),n.keyword&&(e.keyword=n.keyword),k(e)}function k(e){w.getExercises(e).then(t=>{const{totalPages:r,results:i}=t;A(i,n),N(r,k,e)}).catch(t=>T(t.message))}export{re as a,v as b,w as f,n as g,W as p,N as r,T as s};
//# sourceMappingURL=gallery-events-32496927.js.map
