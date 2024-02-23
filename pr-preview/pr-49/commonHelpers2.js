import{f as F,o as N}from"./assets/exercise-popup-c8fb0ffa.js";import{i as m}from"./assets/vendor-ad859c2f.js";m.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const q=(e,t,r)=>{m.show({message:e,drag:!0,close:!1,timeout:r??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})},p=document.querySelector(".js-gallery"),O=document.querySelector("#exercise-group"),$=document.querySelector("#exercise");function z(e){const t=document.createDocumentFragment();e.forEach(({name:r="",filter:c="",imgURL:i=""})=>{const l=i?`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${i})`:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./img/no-img.jpg")',a=O.children[0].cloneNode(!0);a.setAttribute("data-name",r),a.style.backgroundImage=l;const u=a.querySelector(".card-text-title");u.textContent=r;const d=a.querySelector(".card-text-subtitle");d.textContent=c,i||a.classList.add("noImg"),t.appendChild(a)}),p.appendChild(t)}function P(e,t){p.innerHTML="";const r=document.createDocumentFragment();for(let c=0;c<e.length;c++){const{name:i,_id:l,rating:a,burnedCalories:u,target:d}=e[c],o=$.children[0].cloneNode(!0);o.dataset.id=l;const I=o.querySelector(".js-title");I.textContent=i;const T=o.querySelector(".js-rating");T.textContent=a;const A=o.querySelector(".js-burned-calories");A.textContent=u;const G=o.querySelector(".js-target");G.textContent=d;const D=o.querySelector(".js-filter");D.textContent=`${t.filter}:`;const H=o.querySelector(".js-filter-value");H.textContent=t.excerciseFilter,r.appendChild(o)}p.appendChild(r)}const C=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)};function k(e,t,r){if(r.page>=e)return;const c=document.querySelector(".js-pagination");c.innerHTML="";for(let i=1;i<=e;i++){const l=document.createElement("button");l.textContent=i,l.setAttribute("data-btn",i),Number(l.dataset.btn)===r.page&&l.classList.add("active"),l.addEventListener("click",a=>{c.querySelectorAll("button").forEach(d=>{d.classList.remove("active")}),a.currentTarget.classList.add("active"),t({...r,page:i})}),c.appendChild(l)}}const R=document.querySelector(".js-gallery"),V=document.querySelector(".js-filter-block"),j=document.querySelectorAll(".js-filter"),W=j[0].textContent.trim(),E={page:1,limit:window.innerWidth<768?9:12,filter:W};f(E);function f(e){C(!0),F.getExercisesFilter(e).then(t=>{const{totalPages:r,results:c}=t,i=_(c);X(i),k(r,f,e)}).catch(t=>q(t.message)).finally(C(!1))}function X(e){R.innerHTML="",z(e)}V.addEventListener("click",Y);function Y(e){if(e.target!==e.currentTarget&&(j.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),f({...E,filter:t})}}function _(e){if(window.innerWidth>767){const t=E.limit-e.length;for(let r=0;r<t;r++)e.push({})}return e}const w=document.querySelector(".js-menu-backdrop"),J=document.querySelector(".js-menu-container"),b=document.querySelector(".js-open-menu"),K=document.querySelector(".js-close-menu"),Q=document.querySelectorAll(".js-menu-link");function g(){const e=b.getAttribute("aria-expanded")==="true"||!1;b.setAttribute("aria-expanded",!e),J.classList.toggle("is-open"),w.classList.toggle("is-hidden")}b.addEventListener("click",g);K.addEventListener("click",g);Q.forEach(e=>{e.addEventListener("click",g)});w.addEventListener("click",({target:e,currentTarget:t})=>{t===e&&g()});const Z=document.getElementById("subscribe-form");Z.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await F.addSubscription({email:t}),m.success({title:"Congrats! You've been subscribed!"})}catch{m.info({title:"Subscription already exists"})}finally{e.target.reset()}});const n={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elInnerBreadCrumbsState:document.querySelector(".js-bradcrumbs-inner"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise"),elTrash:document.querySelector(".ex-item-trash-icon")},s={excerciseFilter:"",filter:"Muscles",keyword:"",isFilledCroupExcercises(){return!this.excerciseFilter},isFilledExcercises(){return!!this.excerciseFilter},setFilter(e){this.filter=e,this.resetExcerciseFilter(),n.elSearchForm.removeEventListener("submit",h),n.elSearchForm.removeEventListener("reset",S)},setExcerciseFilter(e){this.excerciseFilter=e,n.elSearchForm.addEventListener("submit",h),n.elSearchForm.addEventListener("reset",S)},resetExcerciseFilter(){this.excerciseFilter="",this.keyword=""}},M={page:1,limit:10};function U(e){return e.charAt(0).toUpperCase()+e.slice(1)}const v=()=>{s.resetExcerciseFilter(),s.filter="Muscles",f({...M,filter:"Muscles"}),y(),n.elFilters.querySelectorAll(".js-filter").forEach(t=>{t.classList.remove("active"),t.dataset.filter==="Muscles"&&t.classList.add("active")})};function y(){n.elFilterBreadcrumb.textContent=s.excerciseFilter?U(s.excerciseFilter):"",s.isFilledExcercises()?(n.elSearchForm.hidden=!1,n.elInnerBreadCrumbsState.hidden=!1,n.elMainBreadCrumbsState.classList.contains("bradcrumbs-active")||(n.elMainBreadCrumbsState.classList.add("bradcrumbs-active"),n.elMainBreadCrumbsState.addEventListener("click",v))):(n.elSearchForm.hidden=!0,n.elInnerBreadCrumbsState.hidden=!0,n.elMainBreadCrumbsState.classList.remove("bradcrumbs-active"),n.elMainBreadCrumbsState.removeEventListener("click",v))}function ee(e){if(e.target===e.currentTarget)return;const t=e.target;if(s.isFilledCroupExcercises()){const r=t.closest(".card-item");if(!r)return;s.setExcerciseFilter(r.dataset.name),L()}else if(s.isFilledExcercises()&&t.closest(".ex-item-start")){const i=t.closest(".ex-item").dataset.id;N(i)}y()}function te(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(s.setFilter(e.target.dataset.filter),y())}function h(e){e.preventDefault(),s.keyword=e.target.elements.search.value,L()}function S(){s.keyword="",L(),y()}n.elGallery.addEventListener("click",ee);n.elFilters.addEventListener("click",te);n.elSearchForm.addEventListener("submit",h);n.elSearchForm.addEventListener("reset",S);function L(){const e={...M};s.filter=="Muscles"?e.muscles=s.excerciseFilter:s.filter=="Equipment"?e.equipment=s.excerciseFilter:s.filter=="Body parts"&&(e.bodypart=s.excerciseFilter),s.keyword&&(e.keyword=s.keyword),B(e)}function B(e){F.getExercises(e).then(t=>{const{totalPages:r,results:c}=t;P(c,s),k(r,B,e)}).catch(t=>q(t.message))}const x=document.getElementById("scroll-top"),re=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},se=()=>{window.scrollY>window.innerHeight?x.classList.add("scroll-show"):x.classList.remove("scroll-show")};window.addEventListener("scroll",se);x.addEventListener("click",re);
//# sourceMappingURL=commonHelpers2.js.map
