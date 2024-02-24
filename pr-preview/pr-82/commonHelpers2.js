import{s as n,f as F,a as x,b as u,o as T}from"./assets/scroll-top-687b8424.js";import"./assets/vendor-ad859c2f.js";const S=document.querySelector(".js-gallery"),G=document.querySelector("#exercise-group"),A=document.querySelector("#exercise"),N="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";function $(e){const t=document.createDocumentFragment();e.forEach(({name:i,filter:l,imgURL:o})=>{const a=G.children[0].cloneNode(!0);a.style.backgroundImage=`${N} url(${o})`,a.setAttribute("data-name",i),a.querySelector(".card-text-title").textContent=i,a.querySelector(".card-text-subtitle").textContent=l,t.appendChild(a)}),S.replaceChildren(t)}function D(e,t){const i=document.createDocumentFragment();for(let l=0;l<e.length;l++){const{name:o,_id:a,rating:f,burnedCalories:q,target:v}=e[l],c=A.children[0].cloneNode(!0);c.dataset.id=a;const k=c.querySelector(".js-title");k.textContent=o;const j=c.querySelector(".js-rating");j.textContent=Number.isInteger(f)?`${f}.0`:f.toFixed(1);const I=c.querySelector(".js-burned-calories");I.textContent=q;const w=c.querySelector(".js-target");w.textContent=v;const B=c.querySelector(".js-filter");B.textContent=`${t.filter}:`;const M=c.querySelector(".js-filter-value");M.textContent=t.excerciseFilter,i.appendChild(c)}S.replaceChildren(i)}const P=window.innerWidth<768?9:12,R=document.querySelector(".js-filter-block"),p=document.querySelectorAll(".js-filter"),z=p[0].textContent.trim(),C={page:1,limit:P,filter:z};d(C);async function d(e){try{n(!0);const t=await F.getExercisesFilter(e),{totalPages:i,results:l}=t;$(l),x(i,d,e)}catch(t){u(t.message)}finally{n(!1)}}R.addEventListener("click",V);function V(e){var t;if(e.target!==e.currentTarget&&((t=[...p].find(i=>i.classList.contains("active")))==null||t.classList.remove("active"),e.target.classList.contains("js-filter"))){const i=e.target.dataset.filter;e.target.classList.add("active"),d({...C,filter:i})}}const Y=document.getElementById("subscribe-form");Y.addEventListener("submit",_);async function _(e){e.preventDefault();const t=e.target.elements.email.value;try{n(!0),await F.addSubscription({email:t}),u("Congrats! You've been subscribed!","#53e276")}catch{u("Subscription already exists","#FF876C")}finally{e.target.reset(),n(!1)}}const r={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elInnerBreadCrumbsState:document.querySelector(".js-bradcrumbs-inner"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise"),elTrash:document.querySelector(".ex-item-trash-icon")},s={excerciseFilter:"",filter:"Muscles",keyword:"",isFilledCroupExcercises(){return!this.excerciseFilter},isFilledExcercises(){return!!this.excerciseFilter},setFilter(e){this.filter=e,this.resetExcerciseFilter(),r.elSearchForm.removeEventListener("submit",y),r.elSearchForm.removeEventListener("reset",g)},setExcerciseFilter(e){this.excerciseFilter=e,r.elSearchForm.addEventListener("submit",y),r.elSearchForm.addEventListener("reset",g)},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},E={page:1,limit:10};function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}const h=()=>{s.resetExcerciseFilter(),s.filter="Muscles",d({...E,limit:12,filter:"Muscles"}),m(),r.elFilters.querySelectorAll(".js-filter").forEach(t=>{t.classList.remove("active"),t.dataset.filter==="Muscles"&&t.classList.add("active")})};function m(){r.elFilterBreadcrumb.textContent=s.excerciseFilter?H(s.excerciseFilter):"",s.isFilledExcercises()?(r.elSearchForm.hidden=!1,r.elInnerBreadCrumbsState.hidden=!1,r.elMainBreadCrumbsState.classList.contains("bradcrumbs-active")||(r.elMainBreadCrumbsState.classList.add("bradcrumbs-active"),r.elMainBreadCrumbsState.addEventListener("click",h))):(r.elSearchForm.hidden=!0,r.elInnerBreadCrumbsState.hidden=!0,r.elMainBreadCrumbsState.classList.remove("bradcrumbs-active"),r.elMainBreadCrumbsState.removeEventListener("click",h))}function U(e){if(e.target===e.currentTarget)return;const t=e.target;if(s.isFilledCroupExcercises()){const i=t.closest(".card-item");if(!i)return;s.setExcerciseFilter(i.dataset.name),b()}else if(s.isFilledExcercises()&&t.closest(".ex-item-start")){const o=t.closest(".ex-item").dataset.id;T(o)}m()}function W(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(s.setFilter(e.target.dataset.filter),m())}function y(e){e.preventDefault(),r.elInput.value&&(s.keyword=e.target.elements.search.value,b(),r.elInput.value="")}function g(){s.keyword="",b(),m()}r.elGallery.addEventListener("click",U);r.elFilters.addEventListener("click",W);r.elSearchForm.addEventListener("submit",y);r.elSearchForm.addEventListener("reset",g);function b(){r.elGallery.innerHTML="";const e={...E};s.filter=="Muscles"?e.muscles=s.excerciseFilter:s.filter=="Equipment"?e.equipment=s.excerciseFilter:s.filter=="Body parts"&&(e.bodypart=s.excerciseFilter),s.keyword&&(e.keyword=s.keyword),L(e)}async function L(e){n(!0);try{const t=await F.getExercises(e),{totalPages:i,results:l}=t;D(l,s),x(i,L,e),!i&&u("No matching workouts found. Try different keywords or filters.")}catch(t){u(t.message)}finally{n(!1)}}
//# sourceMappingURL=commonHelpers2.js.map
