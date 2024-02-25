import { initFavGallery } from '../favorites-gallery';
import { scrollToTop } from '../helper';

const paginationContainer = document.querySelector('.js-pagination');
let navigationObject;

paginationContainer.addEventListener('click', onPaginationStep);

export function renderPagination(totalPages, fetchGallery, params, isLocal) {
  if (totalPages === 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let markup = '';

  for (let i = 1; i <= totalPages; i++) {
    const isCurrentPage = i === params.page;

    markup += `<button data-btn="${i}" class="${isCurrentPage ? 'active' : ''
      }">${i}</button>`;
  }

  navigationObject = {
    method: fetchGallery,
    isLocal,
    params,
  };

  paginationContainer.innerHTML = markup;
}

function onPaginationStep(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  const btn = evt.target;
  const page = Number(btn.textContent);

  [...paginationContainer.children]
    .find(button => button.classList.contains('active'))
    ?.classList.remove('active');

  btn.classList.add('active');

  navigationObject.isLocal
    ? initFavGallery(page)
    : navigationObject.method({ ...navigationObject.params, page: page });

  scrollToTop();
}