import{o as S,r as h}from"./assets/exercise-popup-9f930f41.js";s();function s(){const a=document.querySelector("#exercise-fav"),e=document.querySelector(".js-fav-gallery"),n=document.querySelector(".js-no-fav-workouts"),t=JSON.parse(localStorage.getItem("favWorkouts")),l=document.createDocumentFragment();if(!(t!=null&&t.length)){n.classList.remove("hidden"),e.classList.add("hidden");return}for(let o=0;o<t.length;o++){const r=a.children[0].cloneNode(!0),c=r.querySelector(".js-fav-target"),i=r.querySelector(".js-fav-calories"),d=r.querySelector(".js-fav-bodyPart"),m=r.querySelector(".js-fav-title"),{_id:u,name:f,bodyPart:y,target:g,burnedCalories:v}=t[o];c.textContent=g,d.textContent=y,i.textContent=v,m.textContent=f,r.setAttribute("id",u),l.appendChild(r)}e.appendChild(l)}const j=document.querySelector(".js-fav-gallery");function p(a){if(a.target===a.currentTarget)return;const e=a.target;if(e.closest(".ex-item-start")){const o=e.closest(".js-fav-item").id;S(o)}if(e.closest(".ex-item-trash-icon")){const l=e.closest(".js-fav-item");h({_id:l.id}),s()}}j.addEventListener("click",p);
//# sourceMappingURL=commonHelpers.js.map
