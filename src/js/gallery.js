import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';
import { galleryTemplate } from './services/gallery-service';
import { renderPagination } from './services/paginator-service';

const gallery = document.querySelector('.js-gallery');
const galleryFilterBlock = document.querySelector('.js-filter-block');
const galleryFilter = document.querySelectorAll('.js-filter');
const pagination = document.querySelector('.js-pagination');

const filter = galleryFilter[0].textContent.trim();
const params = {
  page: 1,
  limit: window.innerWidth < 768 ? 9 : 12,
  filter,
};
getExercisesGallery(params);

function getExercisesGallery(params) {
  fetchApi
    .getExercisesFilter(params)
    .then(resp => {
      const { page, totalPages, results } = resp;
      renderGalleryMarkup(results);
      renderPagination(totalPages, getExercisesGallery, params);
    })
    .catch(err => showIziToast(err.message));
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
