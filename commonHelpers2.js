import{f as F}from"./assets/quote-of-the-day-32f443ec.js";import{i as g}from"./assets/vendor-ad859c2f.js";g.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const C=(e,t,n)=>{g.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})};function T(e){const t=document.querySelector(".js-gallery"),n=document.querySelector("#exercise-group"),l=document.createDocumentFragment();e.forEach(({name:c="",filter:o="",imgURL:a=""})=>{const d=a?`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${a})`:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./img/no-img.jpg")',i=n.content.cloneNode(!0),u=i.querySelector(".card-item");u.setAttribute("data-name",c),u.style.backgroundImage=d;const p=i.querySelector(".card-text-title");p.textContent=c;const y=i.querySelector(".card-text-subtitle");y.textContent=o,a||u.classList.add("noImg"),l.appendChild(i)}),t.appendChild(l)}function B(e,t,n){if(n.page>=e)return;const l=document.querySelector(".js-pagination");l.innerHTML="";for(let c=1;c<=e;c++){const o=document.createElement("button");o.textContent=c,o.setAttribute("data-btn",c),Number(o.dataset.btn)===n.page&&o.classList.add("active"),o.addEventListener("click",a=>{l.querySelectorAll("button").forEach(i=>{i.classList.remove("active")}),a.currentTarget.classList.add("active"),t({...n,page:c})}),l.appendChild(o)}}const M=document.querySelector(".js-gallery"),A=document.querySelector(".js-filter-block"),q=document.querySelectorAll(".js-filter"),G=q[0].textContent.trim(),b={page:1,limit:window.innerWidth<768?9:12,filter:G};S(b);function S(e){F.getExercisesFilter(e).then(t=>{const{totalPages:n,results:l}=t,c=H(l);P(c),B(n,S,e)}).catch(t=>C(t.message))}function P(e){M.innerHTML="",T(e)}A.addEventListener("click",D);function D(e){if(e.target!==e.currentTarget&&(q.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),S({...b,filter:t})}}function H(e){if(window.innerWidth>767){const t=b.limit-e.length;for(let n=0;n<t;n++)e.push({})}return e}const k=document.querySelector(".js-menu-backdrop"),N=document.querySelector(".js-menu-container"),h=document.querySelector(".js-open-menu"),O=document.querySelector(".js-close-menu"),$=document.querySelectorAll(".js-menu-link");function f(){const e=h.getAttribute("aria-expanded")==="true"||!1;h.setAttribute("aria-expanded",!e),N.classList.toggle("is-open"),k.classList.toggle("is-hidden")}h.addEventListener("click",f);O.addEventListener("click",f);$.forEach(e=>{e.addEventListener("click",f)});k.addEventListener("click",({target:e,currentTarget:t})=>{t===e&&f()});const z=document.getElementById("subscribe-form");z.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await F.addSubscription({email:t}),g.success({title:"Congrats! You've been subscribed!"})}catch{g.info({title:"Subscription already exists"})}finally{e.target.reset()}});const r={page:"",excerciseFilter:"",filter:"muscles",keyword:"",isPageExcercises(){return this.page===m},isPageFavorites(){return this.page===R},isFilledCroupExcercises(){return this.page===m&&!this.excerciseFilter},isFilledExcercises(){return!!(this.page===m&&this.excerciseFilter)},setFilter(e){this.filter=e,this.resetExcerciseFilter()},setExcerciseFilter(e){this.excerciseFilter=e},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},m="Excercises",R="Favorites",s={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise")},V={page:1,limit:10};function W(e){return e.charAt(0).toUpperCase()+e.slice(1)}function E(){s.elMainBreadCrumbsState.textContent=`${r.page} ${r.excerciseFilter?" /":""}`,s.elFilterBreadcrumb.textContent=r.excerciseFilter?W(r.excerciseFilter):"",r.isPageExcercises?r.isFilledExcercises?s.elSearchForm.hidden=!1:s.elSearchForm.hidden=!0:r.isPageFavorites&&(s.elSearchForm.hidden=!0,s.elFilters.hidden=!0)}function X(e){if(e.target===e.currentTarget)return;const t=e.target;if(r.isFilledCroupExcercises()){const n=t.closest(".card-item");if(!n)return;r.setExcerciseFilter(n.dataset.name),L()}else r.isFilledExcercises()&&t.closest(".ex-item-start")&&t.closest(".ex-item").dataset.id;E()}function Y(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(r.setFilter(e.target.dataset.filter),E())}function _(e){e.preventDefault(),r.keyword=e.target.elements.search.value,L()}function J(){r.resetExcerciseFilter(),E()}s.elGallery.addEventListener("click",X);s.elFilters.addEventListener("click",Y);s.elSearchForm.addEventListener("submit",_);s.elSearchForm.addEventListener("reset",J);function L(){const e={...V};r.filter=="Muscles"?e.muscles=r.excerciseFilter:r.filter=="Equipment"?e.equipment=r.excerciseFilter:r.filter=="Body parts"&&(e.bodypart=r.excerciseFilter),r.keyword&&(e.keyword=r.keyword),F.getExercises(e).then(t=>K(t.results)).catch(t=>C(t.message))}function K(e){s.elGallery.innerHTML="";const t=document.createDocumentFragment();for(let n=0;n<e.length;n++){const{name:l,_id:c,rating:o,burnedCalories:a,target:d}=e[n],i=s.template.content.cloneNode(!0),u=i.querySelector(".ex-item");u.dataset.id=c;const p=i.querySelector(".js-title");p.textContent=l;const y=i.querySelector(".js-rating");y.textContent=o;const j=i.querySelector(".js-burned-calories");j.textContent=a;const v=i.querySelector(".js-target");v.textContent=d;const w=i.querySelector(".js-filter");w.textContent=`${r.filter}:`;const I=i.querySelector(".js-filter-value");I.textContent=r.excerciseFilter,t.appendChild(i)}s.elGallery.appendChild(t)}const x=document.getElementById("scroll-top"),Q=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},Z=()=>{window.scrollY>window.innerHeight?x.classList.add("scroll-show"):x.classList.remove("scroll-show")};window.addEventListener("scroll",Z);x.addEventListener("click",Q);r.page=m;
//# sourceMappingURL=commonHelpers2.js.map
