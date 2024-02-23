const gallery = document.querySelector('.js-gallery');
const excerciseGroupTemplate = document.querySelector('#exercise-group');
const excerciseTemplate = document.querySelector('#exercise');

export function galleryTemplate(data) {
  const fragment = document.createDocumentFragment();
  data.forEach(({ name = '', filter = '', imgURL = '' }) => {
    const bgImg = imgURL
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgURL})`
      : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./img/no-img.jpg")`;
    const cardItem = excerciseGroupTemplate.children[0].cloneNode(true);
    cardItem.setAttribute('data-name', name);
    cardItem.style.backgroundImage = bgImg;
    const title = cardItem.querySelector('.card-text-title');
    title.textContent = name;
    const subtitle = cardItem.querySelector('.card-text-subtitle');
    subtitle.textContent = filter;
    if (!imgURL) cardItem.classList.add('noImg');
    fragment.appendChild(cardItem);
  });

  gallery.appendChild(fragment);
}

export function renderExcercises(data, galaryState) {
  gallery.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    const { name, _id, rating, burnedCalories, target } = data[i];
    const mainCard = excerciseTemplate.children[0].cloneNode(true);
    mainCard.dataset.id = _id;

    const elName = mainCard.querySelector('.js-title');
    elName.textContent = name;

    const elRating = mainCard.querySelector('.js-rating');
    elRating.textContent = rating;

    const elBurnedCalories = mainCard.querySelector('.js-burned-calories');
    elBurnedCalories.textContent = burnedCalories;

    const elTarget = mainCard.querySelector('.js-target');
    elTarget.textContent = target;

    const elFilter = mainCard.querySelector('.js-filter');
    elFilter.textContent = `${galaryState.filter}:`;

    const elFilterValue = mainCard.querySelector('.js-filter-value');
    elFilterValue.textContent = galaryState.excerciseFilter;

    fragment.appendChild(mainCard);
  }

  gallery.appendChild(fragment);

}
