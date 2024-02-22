export const setSpinner = function (status) {
  const spinnerEl = document.querySelector('.js-spinner');
  status
    ? spinnerEl.classList.remove('hidden')
    : spinnerEl.classList.add('hidden');
};
