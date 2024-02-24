const gallery = document.querySelector('.js-gallery');
const excerciseGroupTemplate = document.querySelector('#exercise-group');
const excerciseTemplate = document.querySelector('#exercise');
const gradient = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),';

export function renderGallery(data) {
  const fragment = document.createDocumentFragment();

  data.forEach(({ name, filter, imgURL }) => {
    const cardItem = excerciseGroupTemplate.children[0].cloneNode(true);
    cardItem.style.backgroundImage = `${gradient} url(${imgURL})`;
    cardItem.setAttribute('data-name', name);
    cardItem.querySelector('.card-text-title').textContent = name;
    cardItem.querySelector('.card-text-subtitle').textContent = filter;
    fragment.appendChild(cardItem);
  });

  gallery.replaceChildren(fragment);
}

export function renderExcercises(data, galaryState) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    const { name, _id, rating, burnedCalories, target } = data[i];
    const mainCard = excerciseTemplate.children[0].cloneNode(true);
    mainCard.dataset.id = _id;

    const elName = mainCard.querySelector('.js-title');
    elName.textContent = name;

    const elRating = mainCard.querySelector('.js-rating');
    elRating.textContent = Number.isInteger(rating) ? `${rating}.0` : rating.toFixed(1);

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

  gallery.replaceChildren(fragment);
}
