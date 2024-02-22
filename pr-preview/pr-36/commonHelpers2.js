import{f as F}from"./assets/quote-of-the-day-e4a3be6d.js";import{i as g}from"./assets/vendor-ad859c2f.js";g.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const q=(e,t,n)=>{g.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})};function B(e){const t=document.querySelector(".js-gallery"),n=document.querySelector("#exercise-group"),l=document.createDocumentFragment();e.forEach(({name:c="",filter:o="",imgURL:a=""})=>{const d=a?`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${a})`:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./img/no-img.jpg")',i=n.content.cloneNode(!0),u=i.querySelector(".card-item");u.setAttribute("data-name",c),u.style.backgroundImage=d;const p=i.querySelector(".card-text-title");p.textContent=c;const y=i.querySelector(".card-text-subtitle");y.textContent=o,a||u.classList.add("noImg"),l.appendChild(i)}),t.appendChild(l)}const C=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)};function M(e,t,n){if(n.page>=e)return;const l=document.querySelector(".js-pagination");l.innerHTML="";for(let c=1;c<=e;c++){const o=document.createElement("button");o.textContent=c,o.setAttribute("data-btn",c),Number(o.dataset.btn)===n.page&&o.classList.add("active"),o.addEventListener("click",a=>{l.querySelectorAll("button").forEach(i=>{i.classList.remove("active")}),a.currentTarget.classList.add("active"),t({...n,page:c})}),l.appendChild(o)}}const A=document.querySelector(".js-gallery"),G=document.querySelector(".js-filter-block"),k=document.querySelectorAll(".js-filter"),P=k[0].textContent.trim(),b={page:1,limit:window.innerWidth<768?9:12,filter:P};S(b);function S(e){C(!0),F.getExercisesFilter(e).then(t=>{const{totalPages:n,results:l}=t,c=N(l);D(c),M(n,S,e)}).catch(t=>q(t.message)).finally(C(!1))}function D(e){A.innerHTML="",B(e)}G.addEventListener("click",H);function H(e){if(e.target!==e.currentTarget&&(k.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),S({...b,filter:t})}}function N(e){if(window.innerWidth>767){const t=b.limit-e.length;for(let n=0;n<t;n++)e.push({})}return e}const L=document.querySelector(".js-menu-backdrop"),O=document.querySelector(".js-menu-container"),h=document.querySelector(".js-open-menu"),$=document.querySelector(".js-close-menu"),z=document.querySelectorAll(".js-menu-link");function f(){const e=h.getAttribute("aria-expanded")==="true"||!1;h.setAttribute("aria-expanded",!e),O.classList.toggle("is-open"),L.classList.toggle("is-hidden")}h.addEventListener("click",f);$.addEventListener("click",f);z.forEach(e=>{e.addEventListener("click",f)});L.addEventListener("click",({target:e,currentTarget:t})=>{t===e&&f()});const R=document.getElementById("subscribe-form");R.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await F.addSubscription({email:t}),g.success({title:"Congrats! You've been subscribed!"})}catch{g.info({title:"Subscription already exists"})}finally{e.target.reset()}});const r={page:"",excerciseFilter:"",filter:"muscles",keyword:"",isPageExcercises(){return this.page===m},isPageFavorites(){return this.page===V},isFilledCroupExcercises(){return this.page===m&&!this.excerciseFilter},isFilledExcercises(){return!!(this.page===m&&this.excerciseFilter)},setFilter(e){this.filter=e,this.resetExcerciseFilter()},setExcerciseFilter(e){this.excerciseFilter=e},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},m="Excercises",V="Favorites",s={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise")},W={page:1,limit:10};function X(e){return e.charAt(0).toUpperCase()+e.slice(1)}function E(){s.elMainBreadCrumbsState.textContent=`${r.page} ${r.excerciseFilter?" /":""}`,s.elFilterBreadcrumb.textContent=r.excerciseFilter?X(r.excerciseFilter):"",r.isPageExcercises?r.isFilledExcercises?s.elSearchForm.hidden=!1:s.elSearchForm.hidden=!0:r.isPageFavorites&&(s.elSearchForm.hidden=!0,s.elFilters.hidden=!0)}function Y(e){if(e.target===e.currentTarget)return;const t=e.target;if(r.isFilledCroupExcercises()){const n=t.closest(".card-item");if(!n)return;r.setExcerciseFilter(n.dataset.name),j()}else r.isFilledExcercises()&&t.closest(".ex-item-start")&&t.closest(".ex-item").dataset.id;E()}function _(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(r.setFilter(e.target.dataset.filter),E())}function J(e){e.preventDefault(),r.keyword=e.target.elements.search.value,j()}function K(){r.resetExcerciseFilter(),E()}s.elGallery.addEventListener("click",Y);s.elFilters.addEventListener("click",_);s.elSearchForm.addEventListener("submit",J);s.elSearchForm.addEventListener("reset",K);function j(){const e={...W};r.filter=="Muscles"?e.muscles=r.excerciseFilter:r.filter=="Equipment"?e.equipment=r.excerciseFilter:r.filter=="Body parts"&&(e.bodypart=r.excerciseFilter),r.keyword&&(e.keyword=r.keyword),F.getExercises(e).then(t=>Q(t.results)).catch(t=>q(t.message))}function Q(e){s.elGallery.innerHTML="";const t=document.createDocumentFragment();for(let n=0;n<e.length;n++){const{name:l,_id:c,rating:o,burnedCalories:a,target:d}=e[n],i=s.template.content.cloneNode(!0),u=i.querySelector(".ex-item");u.dataset.id=c;const p=i.querySelector(".js-title");p.textContent=l;const y=i.querySelector(".js-rating");y.textContent=o;const v=i.querySelector(".js-burned-calories");v.textContent=a;const w=i.querySelector(".js-target");w.textContent=d;const I=i.querySelector(".js-filter");I.textContent=`${r.filter}:`;const T=i.querySelector(".js-filter-value");T.textContent=r.excerciseFilter,t.appendChild(i)}s.elGallery.appendChild(t)}const x=document.getElementById("scroll-top"),Z=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},U=()=>{window.scrollY>window.innerHeight?x.classList.add("scroll-show"):x.classList.remove("scroll-show")};window.addEventListener("scroll",U);x.addEventListener("click",Z);r.page=m;
//# sourceMappingURL=commonHelpers2.js.map