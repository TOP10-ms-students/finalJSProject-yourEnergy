import{f as g}from"./assets/quote-of-the-day-23a5931a.js";import{i as a}from"./assets/vendor-ad859c2f.js";a.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const p=(e,t,c)=>{a.show({message:e,drag:!0,close:!1,timeout:c??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})};function C(e){const t=document.querySelector(".js-gallery"),c=document.querySelector("#exercise-group"),u=document.createDocumentFragment();e.forEach(({name:n,filter:s,imgURL:d})=>{const i=c.content.cloneNode(!0),f=i.querySelector(".card-item");f.setAttribute("data-name",n),f.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${d})`;const b=i.querySelector(".card-text-title");b.textContent=n;const S=i.querySelector(".card-text-subtitle");S.textContent=s,u.appendChild(i)}),t.appendChild(u)}const q=document.querySelector(".js-gallery"),E=document.querySelector(".js-filter-block"),y=document.querySelectorAll(".js-filter"),k=y[0].textContent.trim(),x={page:1,limit:9,filter:k};h(x);function h(e){g.getExercisesFilter(e).then(t=>L(t.results)).catch(t=>p(t.message))}function L(e){q.innerHTML="",C(e)}E.addEventListener("click",j);function j(e){if(e.target!==e.currentTarget&&(y.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),h({...x,filter:t})}}const w=document.getElementById("subscribe-form");w.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await g.addSubscription({email:t}),a.success({title:"Congrats! You've been subscribed!"})}catch{a.info({title:"Subscription already exists"})}finally{e.target.reset()}});const r={page:"",excerciseFilter:"",filter:"muscles",keyword:""},o="Excercises",B="Favorites",l={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise")},I={page:1,limit:10};function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}function F(){l.elMainBreadCrumbsState.textContent=`${r.page} ${r.excerciseFilter?" /":""}`,l.elFilterBreadcrumb.textContent=r.excerciseFilter?T(r.excerciseFilter):"",r.page===o?r.excerciseFilter?l.elSearchForm.hidden=!1:l.elSearchForm.hidden=!0:r.page===B&&(l.elSearchForm.hidden=!0,l.elFilters.hidden=!0)}function v(e){if(e.target===e.currentTarget)return;const t=e.target.closest(".card-item");if(!t)return;const c=t.dataset.name;r.excerciseFilter=c,F(),r.page===o&&M()}function G(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(r.filter=e.target.dataset.filter,r.excerciseFilter="",F())}l.elGallery.addEventListener("click",v);l.elFilters.addEventListener("click",G);function M(){const e={...I};r.page===o&&r.excerciseFilter&&(r.filter=="Muscles"?e.muscles=r.excerciseFilter:r.filter=="Equipment"?e.equipment=r.excerciseFilter:r.filter=="Body parts"&&(e.bodypart=r.excerciseFilter),g.getExercises(e).then(t=>A(t.results)).catch(t=>p(t.message)))}function A(e){l.elGallery.innerHTML="";for(let t=0;t<e.length;t++){const{name:c,_id:u,rating:n}=e[t],s=l.template.content.cloneNode(!0),d=s.querySelector(".ex-item-title-ex");d.textContent=c;const i=s.querySelector(".ex-item-rating-text");i.textContent=n,l.elGallery.appendChild(s)}}const m=document.getElementById("scroll-top"),H=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},N=()=>{window.scrollY>window.innerHeight?m.classList.add("scroll-show"):m.classList.remove("scroll-show")};window.addEventListener("scroll",N);m.addEventListener("click",H);r.page=o;
//# sourceMappingURL=commonHelpers2.js.map
