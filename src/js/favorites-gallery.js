// import { fetchApi } from './services/api-service';
// // getExercises
// const exercisesParams = {
//   page: 1,
//   limit: 10,
//   bodypart: 'cardio',
//   // muscles: 'string',
//   // equipment: 'string',
//   // keyword: 'string',
// };
// fetchApi
//   .getExercises(exercisesParams)
//   .then(resp => {
//     const workouts = JSON.stringify(resp.results);
//     localStorage.setItem('favWorkouts', workouts);
//   })
//   .catch(err => console.log(err));


initFavGallery();

function initFavGallery() {
  const template = document.querySelector('#exercise-fav');
  const favGalleryEl = document.querySelector('.js-fav-gallery');
  const emptyFavEl = document.querySelector('.js-no-fav-workouts');
  const workouts = JSON.parse(localStorage.getItem('favWorkouts'));
  // const workouts = null

  if (!workouts?.length) {
    emptyFavEl.classList.remove('hidden');
    return;
  }

  for (let i = 0; i < workouts.length; i++) {
    const clone = template.content.cloneNode(true),
      itemEl = clone.querySelector('.js-fav-item'),
      targetEl = clone.querySelector('.js-fav-target'),
      caloriesEl = clone.querySelector('.js-fav-calories'),
      bodyPartEl = clone.querySelector('.js-fav-bodyPart'),
      titleEl = clone.querySelector('.js-fav-title'),
      { _id, name: title, bodyPart, target, burnedCalories } = workouts[i];

    targetEl.textContent = target;
    bodyPartEl.textContent = bodyPart;
    caloriesEl.textContent = burnedCalories;
    titleEl.textContent = title;

    itemEl.setAttribute('id', _id);

    favGalleryEl.appendChild(clone);
  }
}
