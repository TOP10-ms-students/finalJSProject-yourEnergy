import{i as R}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const c="https://your-energy.b.goit.study/api",l=async(t,e,o)=>{const n=await fetch(t,{headers:{"Content-type":"application/json"},method:e,body:o});if(!n.ok)throw new Error(`Error: status: ${n.status}, ${n.statusText}`);return n.json()},L={async getExercises(t){const e=new URLSearchParams(t),o=`${c}/exercises?${e}`;return await l(o)},async getExercisesId(t){const e=`${c}/exercises/${t}`;return await l(e)},async editExercisesIdRating(t,e){const o="PATCH",r=`${c}/exercises/${t}/rating`,s=JSON.stringify(e);return await l(r,o,s)},async getExercisesFilter(t){const e=new URLSearchParams(t),o=`${c}/filters?${e}`;return await l(o)},async getExercisesQuote(){const t=`${c}/quote`;return await l(t)},async addSubscription(t){const e="POST",o=`${c}/subscription`,r=JSON.stringify(t);return await l(o,e,r)}},g={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function F(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:o,date:r}=JSON.parse(t),s=new Date(r),n=new Date;if(s.getDate()===n.getDate()){g.content.textContent=e,g.author.textContent=o;return}}L.getExercisesQuote().then(e=>{const{quote:o,author:r}=e,s={quote:o,author:r,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),g.content.textContent=o,g.author.textContent=r}).catch(e=>console.log(e))}F();R.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});function H(){document.querySelector(".js-gallery-scroll").scrollIntoView({behavior:"smooth"})}function J(t,e,o,r){if(o.page>=t)return;const s=document.querySelector(".js-pagination");s.innerHTML="";for(let n=1;n<=t;n++){const i=document.createElement("button");i.textContent=n,i.setAttribute("data-btn",n),Number(i.dataset.btn)===o.page&&i.classList.add("active"),i.addEventListener("click",d=>{s.querySelectorAll("button").forEach(a=>{a.classList.remove("active")}),d.currentTarget.classList.add("active"),r?q(n):e({...o,page:n}),H()}),s.appendChild(i)}}q();function q(t=1){const e=G();if(!e)return;const o=JSON.parse(localStorage.getItem("favWorkouts")),{favGalleryEl:r,emptyFavEl:s,fragment:n}=W(),i=window.innerWidth,d=1440,f=768;if(!(o!=null&&o.length)){s.classList.remove("hidden"),r.classList.add("hidden");return}const a=i<f?9:10,u=o.length,T=Math.ceil(u/a),D={page:t};let x=(t-1)*a,E=Math.min(x+a,u);i<d?J(T,null,D,!0):(x=0,E=u),r.innerHTML="";for(let _=x;_<E;_++){const y=e.children[0].cloneNode(!0),I=["js-fav-target","js-fav-calories","js-fav-bodyPart","js-fav-title"],k=I.map(w=>y.querySelector(`.${w}`)),{_id:j,name:A,bodyPart:P,target:B,burnedCalories:C}=o[_];[B,C,P,A].forEach((w,N)=>{k[N].textContent=w}),y.setAttribute("id",j),n.appendChild(y)}r.appendChild(n)}function W(){return{favGalleryEl:document.querySelector(".js-fav-gallery"),emptyFavEl:document.querySelector(".js-no-fav-workouts"),fragment:document.createDocumentFragment()}}function G(){return document.querySelector("#exercise-fav")}const Q="/finalJSProject-yourEnergy/pr-preview/pr-53/assets/example-img-2998cc5c.jpg";function U(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[];e.some(r=>r._id===t._id)||(e.push(t),localStorage.setItem("favWorkouts",JSON.stringify(e)))}function z(t){let e=JSON.parse(localStorage.getItem("favWorkouts"))||[],o=e.findIndex(r=>r._id===t._id);o!==-1&&(e.splice(o,1),localStorage.setItem("favWorkouts",JSON.stringify(e)))}const h=document.querySelector(".modal-exercise"),p=document.querySelector(".overlay");let m=!1;async function ne(t){const e=await L.getExercisesId(t),o=Y(e);K(o,e),Z();const r=document.querySelector(".modal-exercise__btn-close"),s=document.querySelector(".modal-exercise__btn");r.addEventListener("click",b),s.addEventListener("click",()=>{m=!m,m?(U(e),s.innerHTML=M()):(z(e),s.innerHTML=$())})}function K(t,e){h.innerHTML=t,X(e)}function X(t){const e=document.querySelector(".modal-exercise__btn");return(JSON.parse(localStorage.getItem("favWorkouts"))||[]).some(s=>s._id===t._id)?(m=!0,e.innerHTML=M()):(m=!1,e.innerHTML=$())}function V(t){const e=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="./img/icons.svg#icon-star-full"
          ></use>
        </svg>`,o=`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="./img/icons.svg#icon-star-empty"
          ></use>
        </svg>`,r=Math.round(t);let s="";for(let n=0;n<r;n+=1)s+=e;for(let n=0;n<5-r;n+=1)s+=o;return s}function $(){return`<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="./img/icons.svg#icon-heart"></use>
    </svg>`}function M(){return`<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="./img/icons.svg#icon-trash"></use>
    </svg>`}function Y({_id:t,name:e,rating:o,gifUrl:r,target:s,bodyPart:n,equipment:i,popularity:d,burnedCalories:f,time:a,description:u}){return`
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="./img/icons.svg#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${r??Q}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${e}</h2>
                <div class="modal-exercise__rating">
                    ${o}
                    ${V(o)}
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
                    <use href="./img/icons.svg#icon-trash"></use>
                </svg>
            </button>
            <button class="button modal-exercise__btn">Give a rating</button>
        </div>`}function Z(){p.classList.remove("hidden"),h.classList.remove("hidden"),document.body.style.overflow="hidden"}function b(){p.classList.add("hidden"),h.classList.add("hidden"),document.body.style.overflow="scroll"}p.addEventListener("click",t=>t.target===p&&b());document.addEventListener("keydown",({key:t})=>t==="Escape"&&!h.classList.contains("hidden")&&b());const O=document.querySelector(".js-menu-backdrop"),ee=document.querySelector(".js-menu-container"),S=document.querySelector(".js-open-menu"),te=document.querySelector(".js-close-menu"),se=document.querySelectorAll(".js-menu-link");document.querySelector("body");function v(){const t=S.getAttribute("aria-expanded")==="true"||!1;S.setAttribute("aria-expanded",!t),ee.classList.toggle("is-open"),O.classList.toggle("is-hidden")}S.addEventListener("click",v);te.addEventListener("click",v);se.forEach(t=>{t.addEventListener("click",v)});O.addEventListener("click",({target:t,currentTarget:e})=>{e===t&&v()});export{J as a,L as f,q as i,ne as o,z as r};
//# sourceMappingURL=mob-burger-menu-cbfbf5f6.js.map
