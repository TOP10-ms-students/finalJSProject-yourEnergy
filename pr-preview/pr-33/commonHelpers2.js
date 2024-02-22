import{f as p}from"./assets/quote-of-the-day-0b8f4f4d.js";import{i as d}from"./assets/vendor-ad859c2f.js";d.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const b=(e,t,i)=>{d.show({message:e,drag:!0,close:!1,timeout:i??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})};function E(e){const t=document.querySelector(".js-gallery"),i=document.querySelector("#exercise-group"),l=document.createDocumentFragment();e.forEach(({name:c,filter:n,imgURL:a})=>{const u=a?`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${a})`:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../img/no-img.jpeg")',o=i.content.cloneNode(!0),g=o.querySelector(".card-item");g.setAttribute("data-name",c),g.style.backgroundImage=u;const S=o.querySelector(".card-text-title");S.textContent=c;const C=o.querySelector(".card-text-subtitle");C.textContent=n,a||g.classList.add("noImg"),l.appendChild(o)}),t.appendChild(l)}function q(e,t,i){if(i.page>=e)return;const l=document.querySelector(".js-pagination");l.innerHTML="";for(let c=1;c<=e;c++){const n=document.createElement("button");n.textContent=c,n.setAttribute("data-btn",c),Number(n.dataset.btn)===i.page&&n.classList.add("active"),n.addEventListener("click",a=>{l.querySelectorAll("button").forEach(o=>{o.classList.remove("active")}),a.currentTarget.classList.add("active"),t({...i,page:c})}),l.appendChild(n)}}const L=document.querySelector(".js-gallery"),k=document.querySelector(".js-filter-block"),h=document.querySelectorAll(".js-filter"),j=h[0].textContent.trim(),x={page:1,limit:window.innerWidth<768?9:12,filter:j};y(x);function y(e){p.getExercisesFilter(e).then(t=>{const{totalPages:i,results:l}=t,c=e.limit-l.length;for(let n=0;n<c;n++)l.push({});w(l),q(i,y,e)}).catch(t=>b(t.message))}function w(e){L.innerHTML="",E(e)}k.addEventListener("click",v);function v(e){if(e.target!==e.currentTarget&&(h.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),y({...x,filter:t})}}const I=document.getElementById("subscribe-form");I.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await p.addSubscription({email:t}),d.success({title:"Congrats! You've been subscribed!"})}catch{d.info({title:"Subscription already exists"})}finally{e.target.reset()}});const r={page:"",excerciseFilter:"",filter:"muscles",keyword:""},m="Excercises",T="Favorites",s={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form"),template:document.querySelector("#exercise")},B={page:1,limit:10};function G(e){return e.charAt(0).toUpperCase()+e.slice(1)}function F(){s.elMainBreadCrumbsState.textContent=`${r.page} ${r.excerciseFilter?" /":""}`,s.elFilterBreadcrumb.textContent=r.excerciseFilter?G(r.excerciseFilter):"",r.page===m?r.excerciseFilter?s.elSearchForm.hidden=!1:s.elSearchForm.hidden=!0:r.page===T&&(s.elSearchForm.hidden=!0,s.elFilters.hidden=!0)}function A(e){if(e.target===e.currentTarget)return;const t=e.target.closest(".card-item");if(!t)return;const i=t.dataset.name;r.excerciseFilter=i,F(),r.page===m&&H()}function M(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(r.filter=e.target.dataset.filter,r.excerciseFilter="",F())}s.elGallery.addEventListener("click",A);s.elFilters.addEventListener("click",M);function H(){const e={...B};r.page===m&&r.excerciseFilter&&(r.filter=="Muscles"?e.muscles=r.excerciseFilter:r.filter=="Equipment"?e.equipment=r.excerciseFilter:r.filter=="Body parts"&&(e.bodypart=r.excerciseFilter),p.getExercises(e).then(t=>N(t.results)).catch(t=>b(t.message)))}function N(e){s.elGallery.innerHTML="";for(let t=0;t<e.length;t++){const{name:i,_id:l,rating:c}=e[t],n=s.template.content.cloneNode(!0),a=n.querySelector(".ex-item-title-ex");a.textContent=i;const u=n.querySelector(".ex-item-rating-text");u.textContent=c,s.elGallery.appendChild(n)}}const f=document.getElementById("scroll-top"),O=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},$=()=>{window.scrollY>window.innerHeight?f.classList.add("scroll-show"):f.classList.remove("scroll-show")};window.addEventListener("scroll",$);f.addEventListener("click",O);r.page=m;
//# sourceMappingURL=commonHelpers2.js.map
