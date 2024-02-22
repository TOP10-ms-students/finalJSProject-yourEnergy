import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';
import { galleryTemplate } from './services/gallery-service';
import { setSpinner } from './spinner';
import { renderPagination } from './services/paginator-service';


const gallery = document.querySelector('.js-gallery');
const galleryFilterBlock = document.querySelector('.js-filter-block');
const galleryFilter = document.querySelectorAll('.js-filter');

const filter = galleryFilter[0].textContent.trim();
const params = {
  page: 1,
  limit: window.innerWidth < 768 ? 9 : 12,
  filter,
};
getExercisesGallery(params);

export function getExercisesGallery(params) {
  setSpinner(true);
  fetchApi
    .getExercisesFilter(params)
    .then(resp => {
      const { totalPages, results } = resp;
      const data = addEmptyItemsToResult(results);
      renderGalleryMarkup(data);
      renderPagination(totalPages, getExercisesGallery, params);
    })
    .catch(err => showIziToast(err.message))
    .finally(setSpinner(false));
}

function renderGalleryMarkup(data) {
  gallery.innerHTML = '';
  galleryTemplate(data);
}

galleryFilterBlock.addEventListener('click', handlerClick);

function handlerClick(evt) {
  if (evt.target === evt.currentTarget) return;
  galleryFilter.forEach(button => {
    button.classList.remove('active');
  });
  if (evt.target.classList.contains('js-filter')) {
    const filterValue = evt.target.dataset.filter;
    evt.target.classList.add('active');
    getExercisesGallery({ ...params, filter: filterValue });
  }
}

function addEmptyItemsToResult(results) {
  if (window.innerWidth > 767) {
    const emptyItemsToAdd = params.limit - results.length;
    for (let i = 0; i < emptyItemsToAdd; i++) {
      results.push({});
    }
  }
  return results;
}
