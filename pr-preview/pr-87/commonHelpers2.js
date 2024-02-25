import{s as o,f as b,a as x,b as u,G as p,o as P,c as A}from"./assets/scroll-top-23818dad.js";import"./assets/vendor-ad859c2f.js";const C=document.querySelector(".js-gallery"),N=document.querySelector("#exercise-group"),$=document.querySelector("#exercise"),D="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";function R(e){const t=document.createDocumentFragment();e.forEach(({name:i,filter:l,imgURL:d})=>{const a=N.children[0].cloneNode(!0);a.style.backgroundImage=`${D} url(${d})`,a.setAttribute("data-name",i),a.querySelector(".card-text-title").textContent=i,a.querySelector(".card-text-subtitle").textContent=l,t.appendChild(a)}),C.replaceChildren(t)}function z(e,t){const i=document.createDocumentFragment();for(let l=0;l<e.length;l++){const{name:d,_id:a,rating:y,burnedCalories:k,target:j}=e[l],c=$.children[0].cloneNode(!0);c.dataset.id=a;const I=c.querySelector(".js-title");I.textContent=d;const B=c.querySelector(".js-rating");B.textContent=Number.isInteger(y)?`${y}.0`:y.toFixed(1);const w=c.querySelector(".js-burned-calories");w.textContent=k;const T=c.querySelector(".js-target");T.textContent=j;const G=c.querySelector(".js-filter");G.textContent=`${t.filter}:`;const M=c.querySelector(".js-filter-value");M.textContent=t.excerciseFilter,i.appendChild(c)}C.replaceChildren(i)}const V=document.querySelector(".js-filter-block"),E=document.querySelectorAll(".js-filter"),Y=E[0].textContent.trim(),q={page:1,limit:p,filter:Y};m(q);async function m(e){try{o(!0);const t=await b.getExercisesFilter(e),{totalPages:i,results:l}=t;R(l),x(i,m,e)}catch(t){u(t.message)}finally{o(!1)}}V.addEventListener("click",_);function _(e){if(e.target===e.currentTarget)return;const t=[...E].find(i=>i.classList.contains("active"));if(t!==e.target.closest(".js-filter")&&(t.classList.remove("active"),e.target.classList.contains("js-filter"))){const i=e.target.dataset.filter;e.target.classList.add("active"),m({...q,filter:i})}}const U=document.getElementById("subscribe-form");U.addEventListener("submit",H);async function H(e){e.preventDefault();const t=e.target.elements.email.value;try{o(!0),await b.addSubscription({email:t}),u("Congrats! You've been subscribed!","#53e276")}catch{u("Subscription already exists","#FF876C")}finally{e.target.reset(),o(!1)}}const r={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elInnerBreadCrumbsState:document.querySelector(".js-bradcrumbs-inner"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise"),elTrash:document.querySelector(".ex-item-trash-icon")},n={muscles:"Muscles",equipment:"Equipment",bodyParts:"Body parts"},s={excerciseFilter:"",filter:n.muscles,keyword:"",isFilledCroupExcercises(){return!this.excerciseFilter},isFilledExcercises(){return!!this.excerciseFilter},setFilter(e){this.filter=e,this.resetExcerciseFilter(),r.elSearchForm.removeEventListener("submit",g),r.elSearchForm.removeEventListener("reset",h)},setExcerciseFilter(e){this.excerciseFilter=e,r.elSearchForm.addEventListener("submit",g),r.elSearchForm.addEventListener("reset",h)},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},v={page:1,limit:10};function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}const S=()=>{s.resetExcerciseFilter(),s.filter=n.muscles,m({...v,limit:12,filter:n.muscles}),f(),r.elFilters.querySelectorAll(".js-filter").forEach(t=>{t.classList.remove("active"),t.dataset.filter===n.muscles&&t.classList.add("active")})};function f(){r.elFilterBreadcrumb.textContent=s.excerciseFilter?J(s.excerciseFilter):"",s.isFilledExcercises()?(r.elSearchForm.hidden=!1,r.elInnerBreadCrumbsState.hidden=!1,r.elMainBreadCrumbsState.classList.contains("bradcrumbs-active")||(r.elMainBreadCrumbsState.classList.add("bradcrumbs-active"),r.elMainBreadCrumbsState.addEventListener("click",S))):(r.elSearchForm.hidden=!0,r.elInnerBreadCrumbsState.hidden=!0,r.elMainBreadCrumbsState.classList.remove("bradcrumbs-active"),r.elMainBreadCrumbsState.removeEventListener("click",S))}function K(e){if(e.target===e.currentTarget)return;const t=e.target;if(s.isFilledCroupExcercises()){const i=t.closest(".card-item");if(!i)return;s.setExcerciseFilter(i.dataset.name),F()}else if(s.isFilledExcercises()&&t.closest(".ex-item-start")){const d=t.closest(".ex-item").dataset.id;P(d)}f()}function O(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(s.setFilter(e.target.dataset.filter),A(),f())}function g(e){if(e.preventDefault(),!r.elInput.value.trim()){u("Please, enter a valid search key",null,3e3),r.elInput.value="";return}s.keyword=e.target.elements.search.value,F(),r.elInput.value=""}function h(){s.keyword="",F(),f()}r.elGallery.addEventListener("click",K);r.elFilters.addEventListener("click",O);r.elSearchForm.addEventListener("submit",g);r.elSearchForm.addEventListener("reset",h);function F(){const e={...v};s.filter==n.muscles?e.muscles=s.excerciseFilter:s.filter==n.equipment?e.equipment=s.excerciseFilter:s.filter==n.bodyParts&&(e.bodypart=s.excerciseFilter),s.keyword&&(e.keyword=s.keyword),L(e)}async function L(e){o(!0);try{const t=await b.getExercises(e),{totalPages:i,results:l}=t;l.length<p&&r.elGallery.classList.add("reset-min-height"),z(l,s),x(i,L,e),!i&&u("No matching workouts found. Try different keywords or filters.")}catch(t){u(t.message)}finally{o(!1)}}
//# sourceMappingURL=commonHelpers2.js.map
