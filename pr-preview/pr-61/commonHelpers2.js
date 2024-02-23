import{s as o,f as S,a as C,o as G}from"./assets/mob-burger-menu-02d5c7f7.js";import{i as A}from"./assets/vendor-ad859c2f.js";const d=(e,t,l)=>{A.show({message:e,drag:!0,close:!1,timeout:l??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})},g=document.querySelector(".js-gallery"),D=document.querySelector("#exercise-group"),H=document.querySelector("#exercise"),$="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";function N(e){const t=document.createDocumentFragment();e.forEach(({name:l="",filter:i="",imgURL:c=""})=>{const n=D.children[0].cloneNode(!0);c?n.style.backgroundImage=`${$} url(${c})`:n.classList.add("noImg"),n.setAttribute("data-name",l);const f=n.querySelector(".card-text-title");f.textContent=l;const y=n.querySelector(".card-text-subtitle");y.textContent=i,t.appendChild(n)}),g.appendChild(t)}function P(e,t){g.innerHTML="";const l=document.createDocumentFragment();for(let i=0;i<e.length;i++){const{name:c,_id:n,rating:f,burnedCalories:y,target:k}=e[i],a=H.children[0].cloneNode(!0);a.dataset.id=n;const w=a.querySelector(".js-title");w.textContent=c;const j=a.querySelector(".js-rating");j.textContent=f;const B=a.querySelector(".js-burned-calories");B.textContent=y;const T=a.querySelector(".js-target");T.textContent=k;const M=a.querySelector(".js-filter");M.textContent=`${t.filter}:`;const I=a.querySelector(".js-filter-value");I.textContent=t.excerciseFilter,l.appendChild(a)}g.appendChild(l)}const z=document.querySelector(".js-gallery"),R=document.querySelector(".js-filter-block"),L=document.querySelectorAll(".js-filter"),V=L[0].textContent.trim(),x={page:1,limit:window.innerWidth<768?9:12,filter:V};u(x);function u(e){o(!0),S.getExercisesFilter(e).then(t=>{const{totalPages:l,results:i}=t,c=O(i);W(c),C(l,u,e)}).catch(t=>d(t.message)).finally(o(!1))}function W(e){z.innerHTML="",N(e)}R.addEventListener("click",Y);function Y(e){if(e.target!==e.currentTarget&&(L.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),u({...x,filter:t})}}function O(e){if(window.innerWidth>767){const t=x.limit-e.length;for(let l=0;l<t;l++)e.push({})}return e}const _=document.getElementById("subscribe-form");_.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{o(!0),await S.addSubscription({email:t}),d("Congrats! You've been subscribed!")}catch{d("Subscription already exists","#FF876C")}finally{e.target.reset(),o(!1)}});const r={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elInnerBreadCrumbsState:document.querySelector(".js-bradcrumbs-inner"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise"),elTrash:document.querySelector(".ex-item-trash-icon")},s={excerciseFilter:"",filter:"Muscles",keyword:"",isFilledCroupExcercises(){return!this.excerciseFilter},isFilledExcercises(){return!!this.excerciseFilter},setFilter(e){this.filter=e,this.resetExcerciseFilter(),r.elSearchForm.removeEventListener("submit",h),r.elSearchForm.removeEventListener("reset",F)},setExcerciseFilter(e){this.excerciseFilter=e,r.elSearchForm.addEventListener("submit",h),r.elSearchForm.addEventListener("reset",F)},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},q={page:1,limit:10};function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}const E=()=>{r.elGallery.innerHTML="",s.resetExcerciseFilter(),s.filter="Muscles",u({...q,limit:12,filter:"Muscles"}),m(),r.elFilters.querySelectorAll(".js-filter").forEach(t=>{t.classList.remove("active"),t.dataset.filter==="Muscles"&&t.classList.add("active")})};function m(){r.elFilterBreadcrumb.textContent=s.excerciseFilter?J(s.excerciseFilter):"",s.isFilledExcercises()?(r.elSearchForm.hidden=!1,r.elInnerBreadCrumbsState.hidden=!1,r.elMainBreadCrumbsState.classList.contains("bradcrumbs-active")||(r.elMainBreadCrumbsState.classList.add("bradcrumbs-active"),r.elMainBreadCrumbsState.addEventListener("click",E))):(r.elSearchForm.hidden=!0,r.elInnerBreadCrumbsState.hidden=!0,r.elMainBreadCrumbsState.classList.remove("bradcrumbs-active"),r.elMainBreadCrumbsState.removeEventListener("click",E))}function K(e){if(e.target===e.currentTarget)return;const t=e.target;if(s.isFilledCroupExcercises()){const l=t.closest(".card-item");if(!l)return;s.setExcerciseFilter(l.dataset.name),p()}else if(s.isFilledExcercises()&&t.closest(".ex-item-start")){const c=t.closest(".ex-item").dataset.id;G(c)}m()}function Q(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(s.setFilter(e.target.dataset.filter),m())}function h(e){e.preventDefault(),s.keyword=e.target.elements.search.value,p()}function F(){s.keyword="",p(),m()}r.elGallery.addEventListener("click",K);r.elFilters.addEventListener("click",Q);r.elSearchForm.addEventListener("submit",h);r.elSearchForm.addEventListener("reset",F);function p(){r.elGallery.innerHTML="";const e={...q};s.filter=="Muscles"?e.muscles=s.excerciseFilter:s.filter=="Equipment"?e.equipment=s.excerciseFilter:s.filter=="Body parts"&&(e.bodypart=s.excerciseFilter),s.keyword&&(e.keyword=s.keyword),v(e)}function v(e){o(!0),S.getExercises(e).then(t=>{const{totalPages:l,results:i}=t;P(i,s),C(l,v,e)}).catch(t=>d(t.message)).finally(o(!1))}const b=document.getElementById("scroll-top"),U=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},X=()=>{window.scrollY>window.innerHeight?b.classList.add("scroll-show"):b.classList.remove("scroll-show")};window.addEventListener("scroll",X);b.addEventListener("click",U);
//# sourceMappingURL=commonHelpers2.js.map
