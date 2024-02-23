import{s as a,f as b,a as p,b as d,o as w}from"./assets/scroll-top-bd1c1506.js";import"./assets/vendor-ad859c2f.js";const g=document.querySelector(".js-gallery"),G=document.querySelector("#exercise-group"),N=document.querySelector("#exercise"),$="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";function A(e){const t=document.createDocumentFragment();e.forEach(({name:l="",filter:i="",imgURL:o=""})=>{const n=G.children[0].cloneNode(!0);n.style.backgroundImage=`${$} url(${o})`,n.setAttribute("data-name",l);const u=n.querySelector(".card-text-title");u.textContent=l;const y=n.querySelector(".card-text-subtitle");y.textContent=i,t.appendChild(n)}),g.appendChild(t)}function D(e,t){g.innerHTML="";const l=document.createDocumentFragment();for(let i=0;i<e.length;i++){const{name:o,_id:n,rating:u,burnedCalories:y,target:v}=e[i],c=N.children[0].cloneNode(!0);c.dataset.id=n;const k=c.querySelector(".js-title");k.textContent=o;const j=c.querySelector(".js-rating");j.textContent=Number.isInteger(u)?`${u}.0`:u.toFixed(1);const M=c.querySelector(".js-burned-calories");M.textContent=y;const B=c.querySelector(".js-target");B.textContent=v;const I=c.querySelector(".js-filter");I.textContent=`${t.filter}:`;const T=c.querySelector(".js-filter-value");T.textContent=t.excerciseFilter,l.appendChild(c)}g.appendChild(l)}const H=document.querySelector(".js-gallery"),P=document.querySelector(".js-filter-block"),C=document.querySelectorAll(".js-filter"),z=C[0].textContent.trim(),E={page:1,limit:window.innerWidth<768?9:12,filter:z};m(E);function m(e){a(!0),b.getExercisesFilter(e).then(t=>{const{totalPages:l,results:i}=t;R(i),p(l,m,e)}).catch(t=>d(t.message)).finally(a(!1))}function R(e){H.innerHTML="",A(e)}P.addEventListener("click",V);function V(e){if(e.target!==e.currentTarget&&(C.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),m({...E,filter:t})}}const U=document.getElementById("subscribe-form");U.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{a(!0),await b.addSubscription({email:t}),d("Congrats! You've been subscribed!")}catch{d("Subscription already exists","#FF876C")}finally{e.target.reset(),a(!1)}});const r={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elInnerBreadCrumbsState:document.querySelector(".js-bradcrumbs-inner"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise"),elTrash:document.querySelector(".ex-item-trash-icon")},s={excerciseFilter:"",filter:"Muscles",keyword:"",isFilledCroupExcercises(){return!this.excerciseFilter},isFilledExcercises(){return!!this.excerciseFilter},setFilter(e){this.filter=e,this.resetExcerciseFilter(),r.elSearchForm.removeEventListener("submit",h),r.elSearchForm.removeEventListener("reset",F)},setExcerciseFilter(e){this.excerciseFilter=e,r.elSearchForm.addEventListener("submit",h),r.elSearchForm.addEventListener("reset",F)},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},q={page:1,limit:10};function W(e){return e.charAt(0).toUpperCase()+e.slice(1)}const S=()=>{r.elGallery.innerHTML="",s.resetExcerciseFilter(),s.filter="Muscles",m({...q,limit:12,filter:"Muscles"}),f(),r.elFilters.querySelectorAll(".js-filter").forEach(t=>{t.classList.remove("active"),t.dataset.filter==="Muscles"&&t.classList.add("active")})};function f(){r.elFilterBreadcrumb.textContent=s.excerciseFilter?W(s.excerciseFilter):"",s.isFilledExcercises()?(r.elSearchForm.hidden=!1,r.elInnerBreadCrumbsState.hidden=!1,r.elMainBreadCrumbsState.classList.contains("bradcrumbs-active")||(r.elMainBreadCrumbsState.classList.add("bradcrumbs-active"),r.elMainBreadCrumbsState.addEventListener("click",S))):(r.elSearchForm.hidden=!0,r.elInnerBreadCrumbsState.hidden=!0,r.elMainBreadCrumbsState.classList.remove("bradcrumbs-active"),r.elMainBreadCrumbsState.removeEventListener("click",S))}function Y(e){if(e.target===e.currentTarget)return;const t=e.target;if(s.isFilledCroupExcercises()){const l=t.closest(".card-item");if(!l)return;s.setExcerciseFilter(l.dataset.name),x()}else if(s.isFilledExcercises()&&t.closest(".ex-item-start")){const o=t.closest(".ex-item").dataset.id;w(o)}f()}function _(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(s.setFilter(e.target.dataset.filter),f())}function h(e){e.preventDefault(),r.elInput.value&&(s.keyword=e.target.elements.search.value,x(),r.elInput.value="")}function F(){s.keyword="",x(),f()}r.elGallery.addEventListener("click",Y);r.elFilters.addEventListener("click",_);r.elSearchForm.addEventListener("submit",h);r.elSearchForm.addEventListener("reset",F);function x(){r.elGallery.innerHTML="";const e={...q};s.filter=="Muscles"?e.muscles=s.excerciseFilter:s.filter=="Equipment"?e.equipment=s.excerciseFilter:s.filter=="Body parts"&&(e.bodypart=s.excerciseFilter),s.keyword&&(e.keyword=s.keyword),L(e)}function L(e){a(!0),b.getExercises(e).then(t=>{const{totalPages:l,results:i}=t;D(i,s),p(l,L,e),!l&&d("No matching workouts found. Try different keywords or filters.")}).catch(t=>d(t.message)).finally(a(!1))}
//# sourceMappingURL=commonHelpers2.js.map
