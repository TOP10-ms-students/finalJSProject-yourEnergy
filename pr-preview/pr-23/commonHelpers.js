import"./assets/quote-of-the-day-c02ddff5.js";S();function S(){const a=document.querySelector("#exercise-fav"),l=document.querySelector(".js-fav-gallery"),n=document.querySelector(".js-no-fav-workouts"),t=JSON.parse(localStorage.getItem("favWorkouts")),o=document.createDocumentFragment();if(!(t!=null&&t.length)){n.classList.remove("hidden"),l.classList.add("hidden");return}for(let r=0;r<t.length;r++){const e=a.content.cloneNode(!0),c=e.querySelector(".js-fav-item"),i=e.querySelector(".js-fav-target"),s=e.querySelector(".js-fav-calories"),d=e.querySelector(".js-fav-bodyPart"),u=e.querySelector(".js-fav-title"),{_id:m,name:y,bodyPart:f,target:v,burnedCalories:g}=t[r];i.textContent=v,d.textContent=f,s.textContent=g,u.textContent=y,c.setAttribute("id",m),o.appendChild(e)}l.appendChild(o)}
//# sourceMappingURL=commonHelpers.js.map
