import{g as p,p as S}from"./assets/gallery-events-32496927.js";import"./assets/vendor-ad859c2f.js";q();function q(){const l=document.querySelector("#exercise-fav"),a=document.querySelector(".js-fav-gallery"),n=document.querySelector(".js-no-fav-workouts"),t=JSON.parse(localStorage.getItem("favWorkouts")),o=document.createDocumentFragment();if(!(t!=null&&t.length)){n.classList.remove("hidden"),a.classList.add("hidden");return}for(let r=0;r<t.length;r++){const e=l.content.cloneNode(!0),i=e.querySelector(".js-fav-item"),c=e.querySelector(".js-fav-target"),s=e.querySelector(".js-fav-calories"),d=e.querySelector(".js-fav-bodyPart"),u=e.querySelector(".js-fav-title"),{_id:m,name:y,bodyPart:f,target:v,burnedCalories:g}=t[r];c.textContent=v,d.textContent=f,s.textContent=g,u.textContent=y,i.setAttribute("id",m),o.appendChild(e)}a.appendChild(o)}p.init(S);
//# sourceMappingURL=commonHelpers.js.map
