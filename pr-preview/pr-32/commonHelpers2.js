import{f as p}from"./assets/quote-of-the-day-8d67ab96.js";import{i as o}from"./assets/vendor-ad859c2f.js";o.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const x=(e,t,n)=>{o.show({message:e,drag:!0,close:!1,timeout:n??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})};function L(e){const t=document.querySelector(".js-gallery"),n=document.querySelector("#exercise-group"),d=document.createDocumentFragment();e.forEach(({name:s,filter:i,imgURL:m})=>{const l=n.content.cloneNode(!0),y=l.querySelector(".card-item");y.setAttribute("data-name",s),y.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${m})`;const E=l.querySelector(".card-text-title");E.textContent=s;const k=l.querySelector(".card-text-subtitle");k.textContent=i,d.appendChild(l)}),t.appendChild(d)}const C=document.querySelector(".js-gallery"),j=document.querySelector(".js-filter-block"),h=document.querySelectorAll(".js-filter"),v=h[0].textContent.trim(),b={page:1,limit:9,filter:v};S(b);function S(e){p.getExercisesFilter(e).then(t=>w(t.results)).catch(t=>x(t.message))}function w(e){C.innerHTML="",L(e)}j.addEventListener("click",B);function B(e){if(e.target!==e.currentTarget&&(h.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),S({...b,filter:t})}}const F=document.querySelector(".js-menu-backdrop"),M=document.querySelector(".js-menu-container"),g=document.querySelector(".js-open-menu"),I=document.querySelector(".js-close-menu"),T=document.querySelectorAll(".js-menu-link");function a(){const e=g.getAttribute("aria-expanded")==="true"||!1;g.setAttribute("aria-expanded",!e),M.classList.toggle("is-open"),F.classList.toggle("is-hidden")}g.addEventListener("click",a);I.addEventListener("click",a);T.forEach(e=>{e.addEventListener("click",a)});F.addEventListener("click",({target:e,currentTarget:t})=>{t===e&&a()});const G=document.getElementById("subscribe-form");G.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await p.addSubscription({email:t}),o.success({title:"Congrats! You've been subscribed!"})}catch{o.info({title:"Subscription already exists"})}finally{e.target.reset()}});const r={page:"",excerciseFilter:"",filter:"muscles",keyword:""},u="Excercises",A="Favorites",c={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise")},O={page:1,limit:10};function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}function q(){c.elMainBreadCrumbsState.textContent=`${r.page} ${r.excerciseFilter?" /":""}`,c.elFilterBreadcrumb.textContent=r.excerciseFilter?H(r.excerciseFilter):"",r.page===u?r.excerciseFilter?c.elSearchForm.hidden=!1:c.elSearchForm.hidden=!0:r.page===A&&(c.elSearchForm.hidden=!0,c.elFilters.hidden=!0)}function N(e){if(e.target===e.currentTarget)return;const t=e.target.closest(".card-item");if(!t)return;const n=t.dataset.name;r.excerciseFilter=n,q(),r.page===u&&z()}function $(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(r.filter=e.target.dataset.filter,r.excerciseFilter="",q())}c.elGallery.addEventListener("click",N);c.elFilters.addEventListener("click",$);function z(){const e={...O};r.page===u&&r.excerciseFilter&&(r.filter=="Muscles"?e.muscles=r.excerciseFilter:r.filter=="Equipment"?e.equipment=r.excerciseFilter:r.filter=="Body parts"&&(e.bodypart=r.excerciseFilter),p.getExercises(e).then(t=>D(t.results)).catch(t=>x(t.message)))}function D(e){c.elGallery.innerHTML="";for(let t=0;t<e.length;t++){const{name:n,_id:d,rating:s}=e[t],i=c.template.content.cloneNode(!0),m=i.querySelector(".ex-item-title-ex");m.textContent=n;const l=i.querySelector(".ex-item-rating-text");l.textContent=s,c.elGallery.appendChild(i)}}const f=document.getElementById("scroll-top"),R=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},P=()=>{window.scrollY>window.innerHeight?f.classList.add("scroll-show"):f.classList.remove("scroll-show")};window.addEventListener("scroll",P);f.addEventListener("click",R);r.page=u;
//# sourceMappingURL=commonHelpers2.js.map
