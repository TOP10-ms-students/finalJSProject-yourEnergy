import{f as d,r as p,s as y,a as h,g as L,b as E}from"./assets/gallery-events-32496927.js";import{i}from"./assets/vendor-ad859c2f.js";i.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const a=function(e){const t=document.querySelector(".js-spinner");e?t.classList.remove("hidden"):setTimeout(()=>t.classList.add("hidden"),300)},b=document.querySelector(".js-gallery"),k=document.querySelector(".js-filter-block"),u=document.querySelectorAll(".js-filter"),w=u[0].textContent.trim(),c={page:1,limit:window.innerWidth<768?9:12,filter:w};l(c);function l(e){a(!0),d.getExercisesFilter(e).then(t=>{const{totalPages:n,results:g}=t,f=j(g);v(f),p(n,l,e)}).catch(t=>y(t.message)).finally(a(!1))}function v(e){b.innerHTML="",h(e)}k.addEventListener("click",S);function S(e){if(e.target!==e.currentTarget&&(u.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),l({...c,filter:t})}}function j(e){if(window.innerWidth>767){const t=c.limit-e.length;for(let n=0;n<t;n++)e.push({})}return e}const m=document.querySelector(".js-menu-backdrop"),T=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),q=document.querySelector(".js-close-menu"),M=document.querySelectorAll(".js-menu-link");function s(){const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),T.classList.toggle("is-open"),m.classList.toggle("is-hidden")}o.addEventListener("click",s);q.addEventListener("click",s);M.forEach(e=>{e.addEventListener("click",s)});m.addEventListener("click",({target:e,currentTarget:t})=>{t===e&&s()});const x=document.getElementById("subscribe-form");x.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await d.addSubscription({email:t}),i.success({title:"Congrats! You've been subscribed!"})}catch{i.info({title:"Subscription already exists"})}finally{e.target.reset()}});const r=document.getElementById("scroll-top"),B=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},I=()=>{window.scrollY>window.innerHeight?r.classList.add("scroll-show"):r.classList.remove("scroll-show")};window.addEventListener("scroll",I);r.addEventListener("click",B);L.init(E);
//# sourceMappingURL=commonHelpers2.js.map
