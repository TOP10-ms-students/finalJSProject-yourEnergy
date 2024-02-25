import { renderPagination } from './services/paginator-service';
import { setSpinner } from './spinner';
import {
  DESKTOP_WIDTH,
  GALLERY_LIMIT as perPage,
  FAV_CARD_CLASS_NAMES as classNames,
} from './variables';

let isNotFirstLoad = false;

initFavGallery();

export function initFavGallery(pageNumber = 1) {
  const template = getTemplate();
  if (!template) return;

  const workouts = JSON.parse(localStorage.getItem('favWorkouts'));
  const { favGalleryEl, emptyFavEl, paginationFavEl, fragment } = getRefs();
  const screenWidth = window.innerWidth;

  if (
    handleEmptyWorkouts({ workouts, emptyFavEl, paginationFavEl, favGalleryEl })
  ) {
    return;
  }

  const { startIndex, endIndex } = handlePagination({
    perPage,
    totalWorkouts: workouts.length,
    pageNumber,
    screenWidth,
  });

  if (!isNotFirstLoad) {
    isNotFirstLoad = true;
  } else {
    setSpinner(isNotFirstLoad);
  }

  renderGalleryItems({
    workouts,
    startIndex,
    endIndex,
    template,
    fragment,
    favGalleryEl,
  });

  setSpinner(false);
}

function getRefs() {
  return {
    favGalleryEl: document.querySelector('.js-fav-gallery'),
    emptyFavEl: document.querySelector('.js-no-fav-workouts'),
    paginationFavEl: document.querySelector('.js-pagination'),
    fragment: document.createDocumentFragment(),
  };
}

function getTemplate() {
  return document.querySelector('#exercise-fav');
}

function handleEmptyWorkouts({
  workouts,
  emptyFavEl,
  paginationFavEl,
  favGalleryEl,
}) {
  if (!workouts?.length) {
    emptyFavEl.classList.remove('hidden');
    favGalleryEl.classList.add('hidden');
    paginationFavEl.classList.add('hidden');
    setSpinner(false);
    return true;
  }
}

function handlePagination({ perPage, totalWorkouts, pageNumber, screenWidth }) {
  const totalPages = Math.ceil(totalWorkouts / perPage),
    params = { page: pageNumber };

  let startIndex = (pageNumber - 1) * perPage,
    endIndex = Math.min(startIndex + perPage, totalWorkouts);

  if (screenWidth < DESKTOP_WIDTH) {
    renderPagination(totalPages, null, params, true);
  } else {
    startIndex = 0;
    endIndex = totalWorkouts;
  }
  return { startIndex, endIndex };
}

function renderGalleryItems({
  workouts,
  startIndex,
  endIndex,
  template,
  fragment,
  favGalleryEl,
}) {
  for (let i = startIndex; i < endIndex; i++) {
    const itemEl = template.children[0].cloneNode(true);
    const elements = classNames.map(className =>
      itemEl.querySelector(`.${className}`)
    );
    const {
      _id,
      name: title,
      bodyPart,
      target,
      burnedCalories: calories,
    } = workouts[i];

    [target, calories, bodyPart, title].forEach((prop, idx) => {
      elements[idx].textContent = prop;
    });

    itemEl.setAttribute('id', _id);
    fragment.appendChild(itemEl);
  }

  favGalleryEl.replaceChildren(fragment);
}
