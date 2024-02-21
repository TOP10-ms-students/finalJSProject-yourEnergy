import { fetchApi } from './services/api-service';

const gallery = document.querySelector('.js-gallery');
const galleryFilter = document.querySelectorAll('.filter-item');

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
    .then(resp => {
      gallery.innerHTML = '';
      const galleryMarkup = resp.results.map(
        ({ name, filter, imgURL }) =>
          `<li class="gallery-item">
            <img src="${imgURL}" alt="${name}" class="card-image">
            <p>${name}</p>
            <span>${filter}</span>
           </li>`
      );
      gallery.innerHTML = galleryMarkup.join('');
    })
    .catch(err => console.error(err));
}

galleryFilter.forEach(filterButton => {
  filterButton.addEventListener('click', () => {
    galleryFilter.forEach(button => {
      button.classList.remove('active');
    });
    filterButton.classList.add('active');
    const filterValue = filterButton.textContent.trim();
    getExercisesGallery({ ...filterParams, filter: filterValue });
  });
});
