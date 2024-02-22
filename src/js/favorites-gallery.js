initFavGallery();

function initFavGallery() {
  const template = document.querySelector('#exercise-fav'),
    favGalleryEl = document.querySelector('.js-fav-gallery'),
    emptyFavEl = document.querySelector('.js-no-fav-workouts'),
    workouts = JSON.parse(localStorage.getItem('favWorkouts')),
    fragment = document.createDocumentFragment();

  if (!workouts?.length) {
    emptyFavEl.classList.remove('hidden');
    favGalleryEl.classList.add('hidden');
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

    fragment.appendChild(clone);
  }

  favGalleryEl.appendChild(fragment);
}
