export function renderPagination(totalPages, fetchGallery, params) {
  if (params.page >= totalPages) return;
  const paginationContainer = document.querySelector('.js-pagination');
  paginationContainer.innerHTML = '';

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
      fetchGallery({ ...params, page: i });
    });
    paginationContainer.appendChild(pageButton);
  }
}
