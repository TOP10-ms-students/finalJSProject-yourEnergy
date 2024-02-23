import { initFavGallery } from '../favorites-gallery';
import { scrollToTop } from '../helper';

export function renderPagination(totalPages, fetchGallery, params, isLocal) {
  if (params.page >= totalPages) return;
  const paginationContainer = document.querySelector('.js-pagination');
  paginationContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.setAttribute('data-btn', i);
    if (Number(pageButton.dataset.btn) === params.page)
      pageButton.classList.add('active');

    pageButton.addEventListener('click', evt => {
      paginationContainer.querySelectorAll('button').forEach(button => {
        button.classList.remove('active');
      });
      const btn = evt.currentTarget;
      btn.classList.add('active');

      isLocal
        ? initFavGallery(i)
        : fetchGallery({ ...params, page: i });

      scrollToTop();
    });
    fragment.appendChild(pageButton);
  }
  paginationContainer.appendChild(fragment);

}
