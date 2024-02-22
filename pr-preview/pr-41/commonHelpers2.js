import{f as F}from"./assets/quote-of-the-day-f3636ac7.js";import{i as g}from"./assets/vendor-ad859c2f.js";g.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const k=(e,t,n)=>{g.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})},L=document.querySelector(".js-gallery");document.querySelector("#exercise-group");const H=document.querySelector("#exercise");function N(e){const t=document.querySelector(".js-gallery"),n=document.querySelector("#exercise-group"),s=document.createDocumentFragment();e.forEach(({name:i="",filter:l="",imgURL:d=""})=>{const u=d?`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${d})`:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./img/no-img.jpg")',a=n.content.cloneNode(!0),c=a.querySelector(".card-item");c.setAttribute("data-name",i),c.style.backgroundImage=u;const y=a.querySelector(".card-text-title");y.textContent=i;const p=a.querySelector(".card-text-subtitle");p.textContent=l,d||c.classList.add("noImg"),s.appendChild(a)}),t.appendChild(s)}function O(e,t){L.innerHTML="";const n=document.createDocumentFragment();for(let s=0;s<e.length;s++){const{name:i,_id:l,rating:d,burnedCalories:u,target:a}=e[s],c=H.content.cloneNode(!0),y=c.querySelector(".ex-item");y.dataset.id=l;const p=c.querySelector(".js-title");p.textContent=i;const A=c.querySelector(".js-rating");A.textContent=d;const G=c.querySelector(".js-burned-calories");G.textContent=u;const P=c.querySelector(".js-target");P.textContent=a;const $=c.querySelector(".js-filter");$.textContent=`${t.filter}:`;const D=c.querySelector(".js-filter-value");D.textContent=t.excerciseFilter,n.appendChild(c)}L.appendChild(n)}const C=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)};function v(e,t,n){if(n.page>=e)return;const s=document.querySelector(".js-pagination");s.innerHTML="";for(let i=1;i<=e;i++){const l=document.createElement("button");l.textContent=i,l.setAttribute("data-btn",i),Number(l.dataset.btn)===n.page&&l.classList.add("active"),l.addEventListener("click",d=>{s.querySelectorAll("button").forEach(a=>{a.classList.remove("active")}),d.currentTarget.classList.add("active"),t({...n,page:i})}),s.appendChild(l)}}const z=document.querySelector(".js-gallery"),R=document.querySelector(".js-filter-block"),j=document.querySelectorAll(".js-filter"),V=j[0].textContent.trim(),E={page:1,limit:window.innerWidth<768?9:12,filter:V};S(E);function S(e){C(!0),F.getExercisesFilter(e).then(t=>{const{totalPages:n,results:s}=t,i=Y(s);W(i),v(n,S,e)}).catch(t=>k(t.message)).finally(C(!1))}function W(e){z.innerHTML="",N(e)}R.addEventListener("click",X);function X(e){if(e.target!==e.currentTarget&&(j.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),S({...E,filter:t})}}function Y(e){if(window.innerWidth>767){const t=E.limit-e.length;for(let n=0;n<t;n++)e.push({})}return e}const w=document.querySelector(".js-menu-backdrop"),_=document.querySelector(".js-menu-container"),h=document.querySelector(".js-open-menu"),J=document.querySelector(".js-close-menu"),K=document.querySelectorAll(".js-menu-link");function f(){const e=h.getAttribute("aria-expanded")==="true"||!1;h.setAttribute("aria-expanded",!e),_.classList.toggle("is-open"),w.classList.toggle("is-hidden")}h.addEventListener("click",f);J.addEventListener("click",f);K.forEach(e=>{e.addEventListener("click",f)});w.addEventListener("click",({target:e,currentTarget:t})=>{t===e&&f()});const Q=document.getElementById("subscribe-form");Q.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await F.addSubscription({email:t}),g.success({title:"Congrats! You've been subscribed!"})}catch{g.info({title:"Subscription already exists"})}finally{e.target.reset()}});const r={page:"",excerciseFilter:"",filter:"muscles",keyword:"",isPageExcercises(){return this.page===m},isPageFavorites(){return this.page===Z},isFilledCroupExcercises(){return this.page===m&&!this.excerciseFilter},isFilledExcercises(){return!!(this.page===m&&this.excerciseFilter)},setFilter(e){this.filter=e,this.resetExcerciseFilter()},setExcerciseFilter(e){this.excerciseFilter=e},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},m="Excercises",Z="Favorites",o={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise")},U={page:1,limit:10};function ee(e){return e.charAt(0).toUpperCase()+e.slice(1)}function q(){o.elMainBreadCrumbsState.textContent=`${r.page} ${r.excerciseFilter?" /":""}`,o.elFilterBreadcrumb.textContent=r.excerciseFilter?ee(r.excerciseFilter):"",r.isPageExcercises?r.isFilledExcercises?o.elSearchForm.hidden=!1:o.elSearchForm.hidden=!0:r.isPageFavorites&&(o.elSearchForm.hidden=!0,o.elFilters.hidden=!0)}function te(e){if(e.target===e.currentTarget)return;const t=e.target;if(r.isFilledCroupExcercises()){const n=t.closest(".card-item");if(!n)return;r.setExcerciseFilter(n.dataset.name),T()}else r.isFilledExcercises()&&t.closest(".ex-item-start")&&t.closest(".ex-item").dataset.id;q()}function re(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(r.setFilter(e.target.dataset.filter),q())}function ne(e){e.preventDefault(),r.keyword=e.target.elements.search.value,T()}function se(){r.resetExcerciseFilter(),q()}o.elGallery.addEventListener("click",te);o.elFilters.addEventListener("click",re);o.elSearchForm.addEventListener("submit",ne);o.elSearchForm.addEventListener("reset",se);function T(){const e={...U};r.filter=="Muscles"?e.muscles=r.excerciseFilter:r.filter=="Equipment"?e.equipment=r.excerciseFilter:r.filter=="Body parts"&&(e.bodypart=r.excerciseFilter),r.keyword&&(e.keyword=r.keyword),I(e)}function I(e){F.getExercises(e).then(t=>{const{totalPages:n,results:s}=t;O(s,r),v(n,I,e)}).catch(t=>k(t.message))}const x=document.getElementById("scroll-top"),ie=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},ce=()=>{window.scrollY>window.innerHeight?x.classList.add("scroll-show"):x.classList.remove("scroll-show")};window.addEventListener("scroll",ce);x.addEventListener("click",ie);const{modalExercise:B,overlay:b}={modalExercise:document.querySelector(".modal-exercise"),overlay:document.querySelector(".overlay")};function M(){b.classList.add("hidden"),B.classList.add("hidden"),document.body.style.overflow="scroll"}b.addEventListener("click",e=>e.target===b&&M());document.addEventListener("keydown",({key:e})=>e==="Escape"&&!B.classList.contains("hidden")&&M());r.page=m;
//# sourceMappingURL=commonHelpers2.js.map
