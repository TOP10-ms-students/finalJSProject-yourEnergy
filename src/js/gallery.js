import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';
import { galleryTemplate } from './services/gallery-service';
import { setSpinner } from './spinner';
import { renderPagination } from './services/paginator-service';

const gallery = document.querySelector('.js-gallery');
const galleryFilterBlock = document.querySelector('.js-filter-block');
const galleryFilter = document.querySelectorAll('.js-filter');

const filter = galleryFilter[0].textContent.trim();
const limit = window.innerWidth < 768 ? 9 : 12;
const params = {
  page: 1,
  limit,
  filter,
};
getExercisesGallery(params);

export async function getExercisesGallery(params) {
  try {
    setSpinner(true);
    const resp = await fetchApi.getExercisesFilter(params);
    const { totalPages, results } = resp;
    renderGalleryMarkup(results);
    renderPagination(totalPages, getExercisesGallery, params);
  } catch (err) {
    showIziToast(err.message);
  } finally {
    setSpinner(false);
  }
}

function renderGalleryMarkup(data) {
  gallery.innerHTML = '';
  galleryTemplate(data);
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
