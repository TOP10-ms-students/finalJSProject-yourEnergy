export const setSpinner = function (status) {
  const spinnerEl = document.querySelector('.js-spinner');
  status
    ? spinnerEl.classList.remove('hidden')
    : setTimeout(() => spinnerEl.classList.add('hidden'), 300);
};
