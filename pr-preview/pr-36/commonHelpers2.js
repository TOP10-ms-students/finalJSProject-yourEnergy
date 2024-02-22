import{f}from"./assets/quote-of-the-day-cc7cae55.js";import{i as a}from"./assets/vendor-ad859c2f.js";a.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const y=(e,t,c)=>{a.show({message:e,drag:!0,close:!1,timeout:c??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})};function C(e){const t=document.querySelector(".js-gallery"),c=document.querySelector("#exercise-group"),u=document.createDocumentFragment();e.forEach(({name:n,filter:s,imgURL:d})=>{const i=c.content.cloneNode(!0),g=i.querySelector(".card-item");g.setAttribute("data-name",n),g.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${d})`;const b=i.querySelector(".card-text-title");b.textContent=n;const q=i.querySelector(".card-text-subtitle");q.textContent=s,u.appendChild(i)}),t.appendChild(u)}const p=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):t.classList.add("hidden")},E=document.querySelector(".js-gallery"),L=document.querySelector(".js-filter-block"),h=document.querySelectorAll(".js-filter"),k=h[0].textContent.trim(),x={page:1,limit:9,filter:k};F(x);function F(e){p(!0),f.getExercisesFilter(e).then(t=>j(t.results)).catch(t=>y(t.message)).finally(()=>p(!1))}function j(e){E.innerHTML="",C(e)}L.addEventListener("click",w);function w(e){if(e.target!==e.currentTarget&&(h.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),F({...x,filter:t})}}const B=document.getElementById("subscribe-form");B.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await f.addSubscription({email:t}),a.success({title:"Congrats! You've been subscribed!"})}catch{a.info({title:"Subscription already exists"})}finally{e.target.reset()}});const r={page:"",excerciseFilter:"",filter:"muscles",keyword:""},o="Excercises",I="Favorites",l={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise")},T={page:1,limit:10};function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}function S(){l.elMainBreadCrumbsState.textContent=`${r.page} ${r.excerciseFilter?" /":""}`,l.elFilterBreadcrumb.textContent=r.excerciseFilter?v(r.excerciseFilter):"",r.page===o?r.excerciseFilter?l.elSearchForm.hidden=!1:l.elSearchForm.hidden=!0:r.page===I&&(l.elSearchForm.hidden=!0,l.elFilters.hidden=!0)}function G(e){if(e.target===e.currentTarget)return;const t=e.target.closest(".card-item");if(!t)return;const c=t.dataset.name;r.excerciseFilter=c,S(),r.page===o&&A()}function M(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(r.filter=e.target.dataset.filter,r.excerciseFilter="",S())}l.elGallery.addEventListener("click",G);l.elFilters.addEventListener("click",M);function A(){const e={...T};r.page===o&&r.excerciseFilter&&(r.filter=="Muscles"?e.muscles=r.excerciseFilter:r.filter=="Equipment"?e.equipment=r.excerciseFilter:r.filter=="Body parts"&&(e.bodypart=r.excerciseFilter),f.getExercises(e).then(t=>H(t.results)).catch(t=>y(t.message)))}function H(e){l.elGallery.innerHTML="";for(let t=0;t<e.length;t++){const{name:c,_id:u,rating:n}=e[t],s=l.template.content.cloneNode(!0),d=s.querySelector(".ex-item-title-ex");d.textContent=c;const i=s.querySelector(".ex-item-rating-text");i.textContent=n,l.elGallery.appendChild(s)}}const m=document.getElementById("scroll-top"),N=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},O=()=>{window.scrollY>window.innerHeight?m.classList.add("scroll-show"):m.classList.remove("scroll-show")};window.addEventListener("scroll",O);m.addEventListener("click",N);r.page=o;
//# sourceMappingURL=commonHelpers2.js.map
