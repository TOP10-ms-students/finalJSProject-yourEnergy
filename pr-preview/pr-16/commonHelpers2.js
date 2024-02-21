import"./assets/styles-4f918de4.js";import{i as l}from"./assets/vendor-ad859c2f.js";const o="https://your-energy.b.goit.study/api",a=async(t,e,r)=>fetch(t,{headers:{"Content-type":"application/json"},method:e,body:r}).then(i=>{if(!i.ok)throw new Error;return i.json()}),u={async getExercises(t){const e=new URLSearchParams(t),r=`${o}/exercises?${e}`;return await a(r)},async getExercisesId(t){const e=`${o}/exercises/${t}`;return await a(e)},async editExercisesIdRating(t,e){const r="PATCH",n=`${o}/exercises/${t}/rating`,s=JSON.stringify(e);return await a(n,r,s)},async getExercisesFilter(t){const e=new URLSearchParams(t),r=`${o}/filters?${e}`;return await a(r)},async getExercisesQuote(){const t=`${o}/quote`;return await a(t)},async addSubscription(t){const e="POST",r=`${o}/subscription`,n=JSON.stringify(t);return await a(r,e,n)}};l.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const c={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function y(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:r,date:n}=JSON.parse(t),s=new Date(n),i=new Date;if(s.getDate()===i.getDate()){c.content.textContent=e,c.author.textContent=r;return}}u.getExercisesQuote().then(e=>{const{quote:r,author:n}=e,s={quote:r,author:n,date:new Date};localStorage.setItem("quoteData",JSON.stringify(s)),c.content.textContent=r,c.author.textContent=n}).catch(e=>console.log(e))}y();const h=(t,e,r)=>{l.show({message:t,drag:!0,close:!1,timeout:r??5e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:e??"#fa903e"})},g=document.querySelector(".js-gallery"),p=document.querySelector(".js-filter-block"),d=document.querySelectorAll(".js-filter"),w=d[0].textContent.trim(),m={page:1,limit:9,filter:w};f(m);function f(t){u.getExercisesFilter(t).then(e=>S(e.results)).catch(e=>h("An error occurred while loading data"))}function S(t){g.innerHTML="";const e=t.map(({name:r,filter:n,imgURL:s})=>`<li class="gallery-item">
        <img src="${s}" alt="${r}" class="card-image">
        <p>${r}</p>
        <span>${n}</span>
       </li>`);g.innerHTML=e.join("")}p.addEventListener("click",x);function x(t){if(t.target!==t.currentTarget&&(d.forEach(e=>{e.classList.remove("active")}),t.target.classList.contains("js-filter"))){const e=t.target.dataset.filter;t.target.classList.add("active"),f({...m,filter:e})}}const q=document.getElementById("subscribe-form");q.addEventListener("submit",async t=>{t.preventDefault();const e=t.target.elements.email.value;try{await u.addSubscription({email:e}),l.success({title:"Congrats! You've been subscribed!"})}catch{l.info({title:"Subscription already exists"})}finally{t.target.reset()}});
//# sourceMappingURL=commonHelpers2.js.map
