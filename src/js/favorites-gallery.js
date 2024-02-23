import { renderPagination } from "./services/paginator-service";

initFavGallery();

export function initFavGallery(pageNumber = 1) {
  const template = getTemplate();
  if (!template) return;

  const workouts = JSON.parse(localStorage.getItem('favWorkouts')),
    { favGalleryEl, emptyFavEl, fragment } = getRefs(),
    screenWidth = window.innerWidth,
    DESKTOP_WIDTH = 1440,
    TABLET_WIDTH = 768;

  if (!workouts?.length) {
    emptyFavEl.classList.remove('hidden');
    favGalleryEl.classList.add('hidden');
    return;
  }

  const PER_PAGE = screenWidth < TABLET_WIDTH ? 9 : 10,
    totalWorkouts = workouts.length,
    totalPages = Math.ceil(totalWorkouts / PER_PAGE),
    params = { page: pageNumber };

  let startIndex = (pageNumber - 1) * PER_PAGE,
    endIndex = Math.min(startIndex + PER_PAGE, totalWorkouts);

  if (screenWidth < DESKTOP_WIDTH) {
    renderPagination(totalPages, null, params, true);
  } else {
    startIndex = 0;
    endIndex = totalWorkouts;
  }

  favGalleryEl.innerHTML = '';

  for (let i = startIndex; i < endIndex; i++) {
    const itemEl = template.children[0].cloneNode(true),
      classNames = ['js-fav-target', 'js-fav-calories', 'js-fav-bodyPart', 'js-fav-title'],
      elements = classNames.map(className => itemEl.querySelector(`.${className}`)),
      { _id, name: title, bodyPart, target, burnedCalories: calories } = workouts[i];
  
    [title, bodyPart, target, calories].forEach((prop, idx) => {
      elements[idx].textContent = prop;
    });

    itemEl.setAttribute('id', _id);
    fragment.appendChild(itemEl);
  }

  favGalleryEl.appendChild(fragment);
}

function getRefs() {
  return {
    favGalleryEl: document.querySelector('.js-fav-gallery'),
    emptyFavEl: document.querySelector('.js-no-fav-workouts'),
    fragment: document.createDocumentFragment(),
  };
}

function getTemplate() {
  return document.querySelector('#exercise-fav');
  
}