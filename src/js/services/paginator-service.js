import { initFavGallery } from '../favorites-gallery';
import { scrollToTop } from '../helper';

export function renderPagination(totalPages, fetchGallery, params, isLocal) {
  const paginationContainer = document.querySelector('.js-pagination');
  paginationContainer.innerHTML = '';
  if (totalPages === 1) return;

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
    paginationContainer.appendChild(pageButton);
  }
}
