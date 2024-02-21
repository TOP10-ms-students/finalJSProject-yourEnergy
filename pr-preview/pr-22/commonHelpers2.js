import"./assets/styles-d321afb0.js";import{i as d}from"./assets/vendor-ad859c2f.js";const o="https://your-energy.b.goit.study/api",l=async(e,t,r)=>fetch(e,{headers:{"Content-type":"application/json"},method:t,body:r}).then(c=>{if(!c.ok)throw new Error(c.statusText);return c.json()}),g={async getExercises(e){const t=new URLSearchParams(e),r=`${o}/exercises?${t}`;return await l(r)},async getExercisesId(e){const t=`${o}/exercises/${e}`;return await l(t)},async editExercisesIdRating(e,t){const r="PATCH",s=`${o}/exercises/${e}/rating`,n=JSON.stringify(t);return await l(s,r,n)},async getExercisesFilter(e){const t=new URLSearchParams(e),r=`${o}/filters?${t}`;return await l(r)},async getExercisesQuote(){const e=`${o}/quote`;return await l(e)},async addSubscription(e){const t="POST",r=`${o}/subscription`,s=JSON.stringify(e);return await l(r,t,s)}};d.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const u={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function S(){const e=localStorage.getItem("quoteData");if(e){const{quote:t,author:r,date:s}=JSON.parse(e),n=new Date(s),c=new Date;if(n.getDate()===c.getDate()){u.content.textContent=t,u.author.textContent=r;return}}g.getExercisesQuote().then(t=>{const{quote:r,author:s}=t,n={quote:r,author:s,date:new Date};localStorage.setItem("quoteData",JSON.stringify(n)),u.content.textContent=r,u.author.textContent=s}).catch(t=>console.log(t))}S();const F=(e,t,r)=>{d.show({message:e,drag:!0,close:!1,timeout:r??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t??"#fa903e"})},m=document.querySelector(".js-gallery"),b=document.querySelector(".js-filter-block"),f=document.querySelectorAll(".js-filter"),q=f[0].textContent.trim(),y={page:1,limit:9,filter:q};p(y);function p(e){g.getExercisesFilter(e).then(t=>E(t.results)).catch(t=>F("An error occurred while loading data"))}function E(e){m.innerHTML="";const t=e.map(({name:r,filter:s,imgURL:n})=>`<li class="gallery-item">
        <img src="${n}" alt="${r}" class="card-image">
        <p>${r}</p>
        <span>${s}</span>
       </li>`);m.innerHTML=t.join("")}b.addEventListener("click",$);function $(e){if(e.target!==e.currentTarget&&(f.forEach(t=>{t.classList.remove("active")}),e.target.classList.contains("js-filter"))){const t=e.target.dataset.filter;e.target.classList.add("active"),p({...y,filter:t})}}const w=document.getElementById("subscribe-form");w.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.email.value;try{await g.addSubscription({email:t}),d.success({title:"Congrats! You've been subscribed!"})}catch{d.info({title:"Subscription already exists"})}finally{e.target.reset()}});const a={page:"",excerciseFilter:"",filter:"muscles",keyword:""},i={elGallery:document.querySelector(".js-gallery"),elMainBreadCrumbsState:document.querySelector(".js-bradcrumbs"),elFilterBreadcrumb:document.querySelector(".js-bradcrumbs-filter"),elFilters:document.querySelector(".js-filter-block"),elInput:document.querySelector(".js-search-input"),elSearchForm:document.querySelector(".js-search-form")},C={page:1,limit:10};function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function h(){i.elMainBreadCrumbsState.textContent=`${a.page} ${a.excerciseFilter?" /":""}`,i.elFilterBreadcrumb.textContent=a.excerciseFilter?j(a.excerciseFilter):"",a.page==="Excercises"?a.excerciseFilter?i.elSearchForm.hidden=!1:i.elSearchForm.hidden=!0:a.page==="Favorites"&&(i.elSearchForm.hidden=!0,i.elFilters.hidden=!0)}function k(e){if(e.target===e.currentTarget)return;const r=e.target.closest(".gallery-item").dataset.name;a.excerciseFilter=r,h(),a.page==="Excercises"&&D()}function L(e){e.target!==e.currentTarget&&e.target.classList.contains("js-filter")&&(a.filter=e.target.dataset.filter,a.excerciseFilter="",h())}i.elGallery.addEventListener("click",k);i.elFilters.addEventListener("click",L);function D(){const e={...C};a.page==="Excercises"&&a.excerciseFilter&&(a.filter=="muscles"?e.muscles=a.excerciseFilter:a.filter=="equipment"?e.equipment=a.excerciseFilter:a.filter=="Body parts"&&(e.bodypart=a.excerciseFilter),g.getExercises(e).then(t=>I(t.results)).catch(t=>showIziToast("An error occurred while loading data")))}function I(e){i.elGallery.innerHTML="";const t=e.map(({_id:r,burnedCalories:s,bodyPart:n,target:c,rating:T,name:x})=>`<li class="gallery-item" data-id="${r}">
            <p>${x}</p>
            <span>${c}</span>
        </li>`);i.elGallery.innerHTML=t.join("")}a.page="Excercises";
//# sourceMappingURL=commonHelpers2.js.map