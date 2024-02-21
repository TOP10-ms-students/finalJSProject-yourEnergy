import"./assets/styles-ae3368e7.js";import{i as u}from"./assets/vendor-14123e35.js";const s="https://your-energy.b.goit.study/api",a=async(t,e,n)=>fetch(t,{headers:{"Content-type":"application/json"},method:e,body:n}).then(c=>{if(!c.ok)throw new Error;return c.json()}),l={async getExercises(t){const e=new URLSearchParams(t),n=`${s}/exercises?${e}`;return await a(n)},async getExercisesId(t){const e=`${s}/exercises/${t}`;return await a(e)},async editExercisesIdRating(t,e){const n="PATCH",o=`${s}/exercises/${t}/rating`,r=JSON.stringify(e);return await a(o,n,r)},async getExercisesFilter(t){const e=new URLSearchParams(t),n=`${s}/filters?${e}`;return await a(n)},async getExercisesQuote(){const t=`${s}/quote`;return await a(t)},async addSubscription(t){const e="POST",n=`${s}/subscription`,o=JSON.stringify(t);return await a(n,e,o)}};function d(){const t=document.querySelector("#exercise-group"),e=document.querySelector("#gallery > .content");for(let n=0;n<10;n++){const o=t.content.cloneNode(!0),r=o.querySelector("p");r.textContent="other "+n,e.appendChild(o)}}u.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const i={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function g(){const t=localStorage.getItem("quoteData");if(t){const{quote:e,author:n,date:o}=JSON.parse(t),r=new Date(o),c=new Date;if(r.getDate()===c.getDate()){i.content.textContent=e,i.author.textContent=n;return}}l.getExercisesQuote().then(e=>{const{quote:n,author:o}=e,r={quote:n,author:o,date:new Date};localStorage.setItem("quoteData",JSON.stringify(r)),i.content.textContent=n,i.author.textContent=o}).catch(e=>console.log(e))}g();const y=document.getElementById("subscribe-form");y.addEventListener("submit",async t=>{t.preventDefault();const e=t.target.elements.email.value;try{await l.addSubscription({email:e}),u.success({title:"Congrats! You've been subscribed!"})}catch{u.info({title:"Subscription already exists"})}finally{t.target.reset()}});d();
//# sourceMappingURL=commonHelpers2.js.map
