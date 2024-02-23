import{s as o,f as x,a as C,b as u,o as G}from"./assets/mob-burger-menu-b76398fc.js";import"./assets/vendor-ad859c2f.js";const g=document.querySelector(".js-gallery"),A=document.querySelector("#exercise-group"),$=document.querySelector("#exercise"),D="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";function H(e){const t=document.createDocumentFragment();e.forEach(({name:l="",filter:i="",imgURL:c=""})=>{const n=A.children[0].cloneNode(!0);c?n.style.backgroundImage=`${D} url(${c})`:n.classList.add("noImg"),n.setAttribute("data-name",l);const d=n.querySelector(".card-text-title");d.textContent=l;const y=n.querySelector(".card-text-subtitle");y.textContent=i,t.appendChild(n)}),g.appendChild(t)}function N(e,t){g.innerHTML="";const l=document.createDocumentFragment();for(let i=0;i<e.length;i++){const{name:c,_id:n,rating:d,burnedCalories:y,target:k}=e[i],a=$.children[0].cloneNode(!0);a.dataset.id=n;const w=a.querySelector(".js-title");w.textContent=c;const j=a.querySelector(".js-rating");j.textContent=Number.isInteger(d)?`${d}.0`:d.toFixed(1);const B=a.querySelector(".js-burned-calories");B.textContent=y;const M=a.querySelector(".js-target");M.textContent=k;const T=a.querySelector(".js-filter");T.textContent=`${t.filter}:`;const I=a.querySelector(".js-filter-value");I.textContent=t.excerciseFilter,l.appendChild(a)}g.appendChild(l)}const P=document.querySelector(".js-gallery"),z=document.querySelector(".js-filter-block"),L=document.querySelectorAll(".js-filter"),R=L[0].textContent.trim(),S={page:1,limit:window.innerWidth<768?9:12,filter:R};m(S);function m(e){o(!0),x.getExercisesFilter(e).then(t=>{const{totalPages:l,results:i}=t,c=Y(i);V(c),C(l,m,e)}).catch(t=>u(t.message)).finally(o(!1))}function V(e){P.innerHTML="",H(e)}z.addEventListener("click",W);function W(e){if(e.target!==e.currentTarget&&(L.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),m({...S,filter:t})}}function Y(e){if(window.innerWidth>767){const t=S.limit-e.length;for(let l=0;l<t;l++)e.push({})}return e}const _=document.getElementById("subscribe-form");_.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{o(!0),await x.addSubscription({email:t}),u("Congrats! You've been subscribed!")}catch{u("Subscription already exists","#FF876C")}finally{e.target.reset(),o(!1)}});const r={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elInnerBreadCrumbsState:document.querySelector(".js-bradcrumbs-inner"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise"),elTrash:document.querySelector(".ex-item-trash-icon")},s={excerciseFilter:"",filter:"Muscles",keyword:"",isFilledCroupExcercises(){return!this.excerciseFilter},isFilledExcercises(){return!!this.excerciseFilter},setFilter(e){this.filter=e,this.resetExcerciseFilter(),r.elSearchForm.removeEventListener("submit",h),r.elSearchForm.removeEventListener("reset",F)},setExcerciseFilter(e){this.excerciseFilter=e,r.elSearchForm.addEventListener("submit",h),r.elSearchForm.addEventListener("reset",F)},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},q={page:1,limit:10};function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}const E=()=>{r.elGallery.innerHTML="",s.resetExcerciseFilter(),s.filter="Muscles",m({...q,limit:12,filter:"Muscles"}),f(),r.elFilters.querySelectorAll(".js-filter").forEach(t=>{t.classList.remove("active"),t.dataset.filter==="Muscles"&&t.classList.add("active")})};function f(){r.elFilterBreadcrumb.textContent=s.excerciseFilter?J(s.excerciseFilter):"",s.isFilledExcercises()?(r.elSearchForm.hidden=!1,r.elInnerBreadCrumbsState.hidden=!1,r.elMainBreadCrumbsState.classList.contains("bradcrumbs-active")||(r.elMainBreadCrumbsState.classList.add("bradcrumbs-active"),r.elMainBreadCrumbsState.addEventListener("click",E))):(r.elSearchForm.hidden=!0,r.elInnerBreadCrumbsState.hidden=!0,r.elMainBreadCrumbsState.classList.remove("bradcrumbs-active"),r.elMainBreadCrumbsState.removeEventListener("click",E))}function K(e){if(e.target===e.currentTarget)return;const t=e.target;if(s.isFilledCroupExcercises()){const l=t.closest(".card-item");if(!l)return;s.setExcerciseFilter(l.dataset.name),p()}else if(s.isFilledExcercises()&&t.closest(".ex-item-start")){const c=t.closest(".ex-item").dataset.id;G(c)}f()}function O(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(s.setFilter(e.target.dataset.filter),f())}function h(e){e.preventDefault(),s.keyword=e.target.elements.search.value,p()}function F(){s.keyword="",p(),f()}r.elGallery.addEventListener("click",K);r.elFilters.addEventListener("click",O);r.elSearchForm.addEventListener("submit",h);r.elSearchForm.addEventListener("reset",F);function p(){r.elGallery.innerHTML="";const e={...q};s.filter=="Muscles"?e.muscles=s.excerciseFilter:s.filter=="Equipment"?e.equipment=s.excerciseFilter:s.filter=="Body parts"&&(e.bodypart=s.excerciseFilter),s.keyword&&(e.keyword=s.keyword),v(e)}function v(e){o(!0),x.getExercises(e).then(t=>{const{totalPages:l,results:i}=t;N(i,s),C(l,v,e)}).catch(t=>u(t.message)).finally(o(!1))}const b=document.getElementById("scroll-top"),Q=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},U=()=>{window.scrollY>window.innerHeight?b.classList.add("scroll-show"):b.classList.remove("scroll-show")};window.addEventListener("scroll",U);b.addEventListener("click",Q);
//# sourceMappingURL=commonHelpers2.js.map
