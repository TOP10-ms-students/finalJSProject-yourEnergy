import{o as h,r as j}from"./assets/exercise-popup-2503795f.js";s();function s(){const a=document.querySelector("#exercise-fav"),e=document.querySelector(".js-fav-gallery"),n=document.querySelector(".js-no-fav-workouts"),t=JSON.parse(localStorage.getItem("favWorkouts")),o=document.createDocumentFragment();if(!(t!=null&&t.length)){n.classList.remove("hidden"),e.classList.add("hidden");return}for(let l=0;l<t.length;l++){const r=a.content.cloneNode(!0),c=r.querySelector(".js-fav-item"),i=r.querySelector(".js-fav-target"),d=r.querySelector(".js-fav-calories"),m=r.querySelector(".js-fav-bodyPart"),u=r.querySelector(".js-fav-title"),{_id:f,name:y,bodyPart:g,target:v,burnedCalories:S}=t[l];i.textContent=v,m.textContent=g,d.textContent=S,u.textContent=y,c.setAttribute("id",f),o.appendChild(r)}e.appendChild(o)}const p=document.querySelector(".js-fav-gallery");function q(a){if(a.target===a.currentTarget)return;const e=a.target;if(e.closest(".ex-item-start")){const l=e.closest(".js-fav-item").id;h(l)}if(e.closest(".ex-item-trash-icon")){const o=e.closest(".js-fav-item");j({_id:o.id}),s()}}p.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
