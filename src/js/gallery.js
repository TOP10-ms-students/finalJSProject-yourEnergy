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
      `<li
      class="card-item"
      data-name="${name}"
      style="
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${imgURL});
      "
    >
      <div class="card-text">
        <div class="card-text-title">${name}</div>
        <div class="card-text-subtitle">${filter}</div>
      </div>
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
