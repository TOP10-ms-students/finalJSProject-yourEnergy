import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';
import { renderGallery } from './services/gallery-service';
import { setSpinner } from './spinner';
import { renderPagination } from './services/paginator-service';
import { GALLERY_LIMIT } from './variables';

const galleryFilterBlock = document.querySelector('.js-filter-block');
const galleryFilter = document.querySelectorAll('.js-filter');

const filter = galleryFilter[0].textContent.trim();
const params = {
  page: 1,
  limit: GALLERY_LIMIT,
  filter,
};

getExercisesGallery(params);

export async function getExercisesGallery(params) {
  try {
    setSpinner(true);
    const resp = await fetchApi.getExercisesFilter(params);
    const { totalPages, results } = resp;
    renderGallery(results);
    renderPagination(totalPages, getExercisesGallery, params);
  } catch (err) {
    showIziToast(err.message);
  } finally {
    setSpinner(false);
  }
}

galleryFilterBlock.addEventListener('click', handlerClick);

function handlerClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }

  [...galleryFilter]
    .find(button => button.classList.contains('active'))
    ?.classList.remove('active');

  if (evt.target.classList.contains('js-filter')) {
    const filterValue = evt.target.dataset.filter;
    evt.target.classList.add('active');

    getExercisesGallery({ ...params, filter: filterValue });
  }
}
