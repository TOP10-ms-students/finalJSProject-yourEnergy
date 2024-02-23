import{i as j}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const c="https://your-energy.b.goit.study/api",l=async(t,e,o)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:o});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},E={async getExercises(t){const e=new URLSearchParams(t),o=`${c}/exercises?${e}`;return await l(o)},async getExercisesId(t){const e=`${c}/exercises/${t}`;return await l(e)},async editExercisesIdRating(t,e){const o="PATCH",i=`${c}/exercises/${t}/rating`,s=JSON.stringify(e);return await l(i,o,s)},async getExercisesFilter(t){const e=new URLSearchParams(t),o=`${c}/filters?${e}`;return await l(o)},async getExercisesQuote(){const t=`${c}/quote`;return await l(t)},async addSubscription(t){const e="POST",o=`${c}/subscription`,i=JSON.stringify(t);return await l(o,e,i)}},g={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function B(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:o,date:i}=JSON.parse(t),s=new Date(i),n=new Date;if(s.getDate()===n.getDate()){g.content.textContent=e,g.author.textContent=o;return}}E.getExercisesQuote().then(e=>{const{quote:o,author:i}=e,s={quote:o,author:i,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),g.content.textContent=o,g.author.textContent=i}).catch(e=>console.log(e))}B();j.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function P(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function F(t,e,o,i){if(o.page>=t)return;const s=document.querySelector(".js-pagination");s.innerHTML="";for(let n=1;n<=t;n++){const r=document.createElement("button");r.textContent=n,r.setAttribute("data-btn",n),Number(r.dataset.btn)===o.page&&r.classList.add("active"),r.addEventListener("click",d=>{s.querySelectorAll("button").forEach(a=>{a.classList.remove("active")}),d.currentTarget.classList.add("active"),i?b(n):e({...o,page:n}),P()}),s.appendChild(r)}}b();function b(t=1){const e=R();if(!e)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:i,emptyFavEl:s,fragment:n}=N(),r=window.innerWidth,d=1440,f=768;if(!(o!=null&&o.length)){s.classList.remove("hidden"),i.classList.add("hidden");return}const a=r<f?9:10,u=o.length,M=Math.ceil(u/a),q={page:t};let C=(t-1)*a,y=Math.min(C+a,u);r<d?F(M,null,q,!0):(C=0,y=u),i.innerHTML="";for(let v=C;v<y;v++){const L=e.children[0].cloneNode(!0),k=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],H=k.map(x=>L.querySelector(`.${x}`)),{_id:T,name:$,bodyPart:O,target:D,burnedCalories:I}=o[v];[D,I,O,$].forEach((x,A)=>{H[A].textContent=x}),L.setAttribute("id",T),n.appendChild(L)}i.appendChild(n)}function N(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),fragment:document.createDocumentFragment()}}function R(){return document.querySelector("#exercise-fav")}const J="/finalJSProject-yourEnergy/pr-preview/pr-52/assets/example-img-2998cc5c.jpg";function W(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(i=>i._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function V(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=e.findIndex(i=>i._id===t._id);o!==-1&&(e.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const{modalExercise:p,overlay:h}={modalExercise:document.querySelector(".modal-exercise"),overlay:document.querySelector(".overlay")};let m=!1;async function K(t){const e=await E.getExercisesId(t),o=Q(e);Z(o,e),U();const i=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".modal-exercise__btn");i.addEventListener("click",_),s.addEventListener("click",()=>{m=!m,m?(W(e),s.innerHTML=S()):(V(e),s.innerHTML=w())})}function Z(t,e){p.innerHTML=t,G(e)}function G(t){const e=document.querySelector(".modal-exercise__btn");let o=JSON.parse(localStorage.getItem("favWorkouts"))||[];return o??(e.innerHTML=w()),o.some(s=>s._id===t._id)?(m=!0,e.innerHTML=S()):(m=!1,e.innerHTML=w())}function w(){return`<span>Add to favorite</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65907 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z"
        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`}function S(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996"
        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`}function Q({_id:t,name:e,rating:o,gifUrl:i,target:s,bodyPart:n,equipment:r,popularity:d,burnedCalories:f,time:a,description:u}){return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <path d="M17 7L7 17M7 7L17 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <img class="modal-exercise__img" src="${i??J}" alt="Example of exercise" loading="lazy" />

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
                            <p class="modal-exercise__text">${r}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Popular</h3>
                            <p class="modal-exercise__text">${d}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${f}/${a} min</p>
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
        </div>`}function U(){h.classList.remove("hidden"),p.classList.remove("hidden"),document.body.style.overflow="hidden"}function _(){h.classList.add("hidden"),p.classList.add("hidden"),document.body.style.overflow="scroll"}h.addEventListener("click",t=>t.target===h&&_());document.addEventListener("keydown",({key:t})=>t==="Escape"&&!p.classList.contains("hidden")&&_());export{F as a,E as f,b as i,K as o,V as r};
//# sourceMappingURL=exercise-popup-7d4133e6.js.map
