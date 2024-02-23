import{f as x,a as k,o as N}from"./assets/exercise-popup-7d4133e6.js";import{i as g}from"./assets/vendor-ad859c2f.js";const q=(e,t,s)=>{g.show({message:e,drag:!0,close:!1,timeout:s??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})},y=document.querySelector(".js-gallery"),P=document.querySelector("#exercise-group"),z=document.querySelector("#exercise"),H="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";function R(e){const t=document.createDocumentFragment();e.forEach(({name:s="",filter:n="",imgURL:i=""})=>{debugger;const l=P.children[0].cloneNode(!0);i?l.style.backgroundImage=`${H} url(${i})`:l.classList.add("noImg"),l.setAttribute("data-name",s);const m=l.querySelector(".card-text-title");m.textContent=s;const f=l.querySelector(".card-text-subtitle");f.textContent=n,t.appendChild(l)}),y.appendChild(t)}function O(e,t){y.innerHTML="";const s=document.createDocumentFragment();for(let n=0;n<e.length;n++){const{name:i,_id:l,rating:m,burnedCalories:f,target:B}=e[n],a=z.children[0].cloneNode(!0);a.dataset.id=l;const T=a.querySelector(".js-title");T.textContent=i;const I=a.querySelector(".js-rating");I.textContent=m;const A=a.querySelector(".js-burned-calories");A.textContent=f;const G=a.querySelector(".js-target");G.textContent=B;const D=a.querySelector(".js-filter");D.textContent=`${t.filter}:`;const $=a.querySelector(".js-filter-value");$.textContent=t.excerciseFilter,s.appendChild(a)}y.appendChild(s)}const C=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},V=document.querySelector(".js-gallery"),W=document.querySelector(".js-filter-block"),v=document.querySelectorAll(".js-filter"),Y=v[0].textContent.trim(),F={page:1,limit:window.innerWidth<768?9:12,filter:Y};o(F);function o(e){C(!0),x.getExercisesFilter(e).then(t=>{const{totalPages:s,results:n}=t,i=K(n);_(i),k(s,o,e)}).catch(t=>q(t.message)).finally(C(!1))}function _(e){V.innerHTML="",R(e)}W.addEventListener("click",J);function J(e){if(e.target!==e.currentTarget&&(v.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),o({...F,filter:t})}}function K(e){if(window.innerWidth>767){const t=F.limit-e.length;for(let s=0;s<t;s++)e.push({})}return e}const j=document.querySelector(".js-menu-backdrop"),Q=document.querySelector(".js-menu-container"),h=document.querySelector(".js-open-menu"),U=document.querySelector(".js-close-menu"),X=document.querySelectorAll(".js-menu-link");function d(){const e=h.getAttribute("aria-expanded")==="true"||!1;h.setAttribute("aria-expanded",!e),Q.classList.toggle("is-open"),j.classList.toggle("is-hidden")}h.addEventListener("click",d);U.addEventListener("click",d);X.forEach(e=>{e.addEventListener("click",d)});j.addEventListener("click",({target:e,currentTarget:t})=>{t===e&&d()});const Z=document.getElementById("subscribe-form");Z.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await x.addSubscription({email:t}),g.success({title:"Congrats! You've been subscribed!"})}catch{g.info({title:"Subscription already exists"})}finally{e.target.reset()}});const c={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elInnerBreadCrumbsState:document.querySelector(".js-bradcrumbs-inner"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise"),elTrash:document.querySelector(".ex-item-trash-icon")},r={excerciseFilter:"",filter:"Muscles",keyword:"",isFilledCroupExcercises(){return!this.excerciseFilter},isFilledExcercises(){return!!this.excerciseFilter},setFilter(e){this.filter=e,this.resetExcerciseFilter(),c.elSearchForm.removeEventListener("submit",b),c.elSearchForm.removeEventListener("reset",p)},setExcerciseFilter(e){this.excerciseFilter=e,c.elSearchForm.addEventListener("submit",b),c.elSearchForm.addEventListener("reset",p)},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},w={page:1,limit:10};function ee(e){return e.charAt(0).toUpperCase()+e.slice(1)}const L=()=>{r.resetExcerciseFilter(),r.filter="Muscles",o({...w,filter:"Muscles"}),u(),c.elFilters.querySelectorAll(".js-filter").forEach(t=>{t.classList.remove("active"),t.dataset.filter==="Muscles"&&t.classList.add("active")})};function u(){c.elFilterBreadcrumb.textContent=r.excerciseFilter?ee(r.excerciseFilter):"",r.isFilledExcercises()?(c.elSearchForm.hidden=!1,c.elInnerBreadCrumbsState.hidden=!1,c.elMainBreadCrumbsState.classList.contains("bradcrumbs-active")||(c.elMainBreadCrumbsState.classList.add("bradcrumbs-active"),c.elMainBreadCrumbsState.addEventListener("click",L))):(c.elSearchForm.hidden=!0,c.elInnerBreadCrumbsState.hidden=!0,c.elMainBreadCrumbsState.classList.remove("bradcrumbs-active"),c.elMainBreadCrumbsState.removeEventListener("click",L))}function te(e){if(e.target===e.currentTarget)return;const t=e.target;if(r.isFilledCroupExcercises()){const s=t.closest(".card-item");if(!s)return;r.setExcerciseFilter(s.dataset.name),E()}else if(r.isFilledExcercises()&&t.closest(".ex-item-start")){const i=t.closest(".ex-item").dataset.id;N(i)}u()}function re(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(r.setFilter(e.target.dataset.filter),u())}function b(e){e.preventDefault(),r.keyword=e.target.elements.search.value,E()}function p(){r.keyword="",E(),u()}c.elGallery.addEventListener("click",te);c.elFilters.addEventListener("click",re);c.elSearchForm.addEventListener("submit",b);c.elSearchForm.addEventListener("reset",p);function E(){const e={...w};r.filter=="Muscles"?e.muscles=r.excerciseFilter:r.filter=="Equipment"?e.equipment=r.excerciseFilter:r.filter=="Body parts"&&(e.bodypart=r.excerciseFilter),r.keyword&&(e.keyword=r.keyword),M(e)}function M(e){x.getExercises(e).then(t=>{const{totalPages:s,results:n}=t;O(n,r),k(s,M,e)}).catch(t=>q(t.message))}const S=document.getElementById("scroll-top"),se=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},ce=()=>{window.scrollY>window.innerHeight?S.classList.add("scroll-show"):S.classList.remove("scroll-show")};window.addEventListener("scroll",ce);S.addEventListener("click",se);
//# sourceMappingURL=commonHelpers2.js.map
