(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const c="https://your-energy.b.goit.study/api",a=async(r,e,n)=>fetch(r,{headers:{"Content-type":"application/json"},method:e,body:n}).then(o=>{if(!o.ok)throw new Error(`Error: status: ${o.status}, ${o.statusText}`);return o.json()}),l={async getExercises(r){const e=new URLSearchParams(r),n=`${c}/exercises?${e}`;return await a(n)},async getExercisesId(r){const e=`${c}/exercises/${r}`;return await a(e)},async editExercisesIdRating(r,e){const n="PATCH",s=`${c}/exercises/${r}/rating`,t=JSON.stringify(e);return await a(s,n,t)},async getExercisesFilter(r){const e=new URLSearchParams(r),n=`${c}/filters?${e}`;return await a(n)},async getExercisesQuote(){const r=`${c}/quote`;return await a(r)},async addSubscription(r){const e="POST",n=`${c}/subscription`,s=JSON.stringify(r);return await a(n,e,s)}},i={content:document.querySelector(".js-quote-content"),author:document.querySelector(".js-quote-author")};function d(){const r=localStorage.getItem("quoteData");if(r){const{quote:e,author:n,date:s}=JSON.parse(r),t=new Date(s),o=new Date;if(t.getDate()===o.getDate()){i.content.textContent=e,i.author.textContent=n;return}}l.getExercisesQuote().then(e=>{const{quote:n,author:s}=e,t={quote:n,author:s,date:new Date};localStorage.setItem("quoteData",JSON.stringify(t)),i.content.textContent=n,i.author.textContent=s}).catch(e=>console.log(e))}d();export{l as f};
//# sourceMappingURL=quote-of-the-day-30ba7bec.js.map
