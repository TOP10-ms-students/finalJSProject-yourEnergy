import{M as P,s as u,f as h,a as x,b as d,G as p,o as N,c as D}from"./assets/scroll-top-119faa28.js";import{t as _}from"./assets/vendor-ab977035.js";const E=document.querySelector(".js-gallery"),$=document.querySelector("#exercise-group"),R=document.querySelector("#exercise"),z="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";function V(e){const t=document.createDocumentFragment();e.forEach(({name:l,filter:i,imgURL:a})=>{const n=$.children[0].cloneNode(!0);n.style.backgroundImage=`${z} url(${a})`,n.setAttribute("data-name",l),n.querySelector(".card-text-title").textContent=l,n.querySelector(".card-text-subtitle").textContent=i,t.appendChild(n)}),E.replaceChildren(t)}function Y(e,t){const l=document.createDocumentFragment();for(let i=0;i<e.length;i++){const{name:a,_id:n,rating:k,burnedCalories:j,target:I}=e[i],c=R.children[0].cloneNode(!0);c.dataset.id=n;const T=c.querySelector(".js-title");if(T.textContent=a,a.length>P){const b=c.querySelector(".js-tooltip");b.dataset.tooltip=a,b.classList.add("tooltip")}const B=c.querySelector(".js-rating");B.textContent=k.toFixed(1);const w=c.querySelector(".js-burned-calories");w.textContent=j;const G=c.querySelector(".js-target");G.textContent=I;const M=c.querySelector(".js-filter");M.textContent=`${t.filter}:`;const A=c.querySelector(".js-filter-value");A.textContent=t.excerciseFilter,l.appendChild(c)}E.replaceChildren(l)}const H=document.querySelector(".js-filter-block"),C=document.querySelectorAll(".js-filter"),U=C[0].textContent.trim(),L={page:1,limit:p,filter:U};m(L);async function m(e){try{u(!0);const t=await h.getExercisesFilter(e),{totalPages:l,results:i}=t;V(i),x(l,m,e)}catch(t){d(t.message)}finally{u(!1)}}H.addEventListener("click",X);function X(e){if(e.target===e.currentTarget)return;const t=[...C].find(l=>l.classList.contains("active"));if(t!==e.target.closest(".js-filter")&&(t.classList.remove("active"),e.target.classList.contains("js-filter"))){const l=e.target.dataset.filter;e.target.classList.add("active"),m({...L,filter:l})}}const Z=document.getElementById("subscribe-form");Z.addEventListener("submit",J);async function J(e){e.preventDefault();const t=e.target.elements.email.value;try{u(!0),await h.addSubscription({email:t}),d("Congrats! You've been subscribed!","#53e276")}catch{d("Subscription already exists","#FF876C")}finally{e.target.reset(),u(!1)}}const r={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elInnerBreadCrumbsState:document.querySelector(".js-bradcrumbs-inner"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise"),elTrash:document.querySelector(".ex-item-trash-icon")},o={muscles:"Muscles",equipment:"Equipment",bodyParts:"Body parts"},K=_(e=>{ee(e)},1e3);function y(e){e.preventDefault(),K(e)}const s={excerciseFilter:"",filter:o.muscles,keyword:"",isFilledCroupExcercises(){return!this.excerciseFilter},isFilledExcercises(){return!!this.excerciseFilter},setFilter(e){this.filter=e,this.resetExcerciseFilter(),r.elSearchForm.removeEventListener("submit",y),r.elSearchForm.removeEventListener("reset",g)},setExcerciseFilter(e){this.excerciseFilter=e,r.elSearchForm.addEventListener("submit",y),r.elSearchForm.addEventListener("reset",g)},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},q={page:1,limit:10};function O(e){return e.charAt(0).toUpperCase()+e.slice(1)}const F=()=>{s.resetExcerciseFilter(),s.filter=o.muscles,m({...q,limit:12,filter:o.muscles}),f(),r.elFilters.querySelectorAll(".js-filter").forEach(t=>{t.classList.remove("active"),t.dataset.filter===o.muscles&&t.classList.add("active")})};function f(){r.elFilterBreadcrumb.textContent=s.excerciseFilter?O(s.excerciseFilter):"",s.isFilledExcercises()?(r.elSearchForm.hidden=!1,r.elInnerBreadCrumbsState.hidden=!1,r.elMainBreadCrumbsState.classList.contains("bradcrumbs-active")||(r.elMainBreadCrumbsState.classList.add("bradcrumbs-active"),r.elMainBreadCrumbsState.addEventListener("click",F))):(r.elSearchForm.hidden=!0,r.elInnerBreadCrumbsState.hidden=!0,r.elMainBreadCrumbsState.classList.remove("bradcrumbs-active"),r.elMainBreadCrumbsState.removeEventListener("click",F))}function Q(e){if(e.target===e.currentTarget)return;const t=e.target;if(s.isFilledCroupExcercises()){const l=t.closest(".card-item");if(!l)return;s.setExcerciseFilter(l.dataset.name),S()}else if(s.isFilledExcercises()&&t.closest(".ex-item-start")){const a=t.closest(".ex-item").dataset.id;N(a)}f()}function W(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(s.setFilter(e.target.dataset.filter),D(),f())}function ee(e){if(!r.elInput.value.trim()){d("Please, enter a valid search key",null,3e3),r.elInput.value="";return}s.keyword=e.target.elements.search.value,S(),r.elInput.value=""}function g(){s.keyword="",S(),f()}r.elGallery.addEventListener("click",Q);r.elFilters.addEventListener("click",W);r.elSearchForm.addEventListener("submit",y);r.elSearchForm.addEventListener("reset",g);function S(){const e={...q};s.filter==o.muscles?e.muscles=s.excerciseFilter:s.filter==o.equipment?e.equipment=s.excerciseFilter:s.filter==o.bodyParts&&(e.bodypart=s.excerciseFilter),s.keyword&&(e.keyword=s.keyword),v(e)}async function v(e){u(!0);try{const t=await h.getExercises(e),{totalPages:l,results:i}=t;i.length<p&&r.elGallery.classList.add("reset-min-height"),Y(i,s),x(l,v,e),!l&&d("No matching workouts found. Try different keywords or filters.")}catch(t){d(t.message)}finally{u(!1)}}
//# sourceMappingURL=commonHelpers2.js.map
