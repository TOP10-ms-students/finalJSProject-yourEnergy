import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';

const gallery = document.querySelector('.js-gallery');
const galleryFilterBlock = document.querySelector('.js-filter-block');
const galleryFilter = document.querySelectorAll('.js-filter');

const filter = galleryFilter[0].textContent.trim();
const filterParams = {
  page: 1,
  limit: 9,
  filter,
};
getExercisesGallery(filterParams);

function getExercisesGallery(params) {
  fetchApi
    .getExercisesFilter(params)
    .then(resp => renderGalleryMarkup(resp.results))
    .catch(err => showIziToast('An error occurred while loading data'));
}

function renderGalleryMarkup(data) {
  gallery.innerHTML = '';
  const galleryMarkup = data.map(
    ({ name, filter, imgURL }) =>
      `<li class="gallery-item">
        <img src="${imgURL}" alt="${name}" class="card-image">
        <p>${name}</p>
        <span>${filter}</span>
       </li>`
  );
  gallery.innerHTML = galleryMarkup.join('');
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
    getExercisesGallery({ ...filterParams, filter: filterValue });
  }
}
