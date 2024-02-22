const gallery = document.querySelector('.js-gallery');
const excerciseGroupTemplate = document.querySelector('#exercise-group');
const excerciseTemplate = document.querySelector('#exercise');

export function galleryTemplate(data) {
  const gallery = document.querySelector('.js-gallery');
  const template = document.querySelector('#exercise-group');
  const fragment = document.createDocumentFragment();

  data.forEach(({ name = '', filter = '', imgURL = '' }) => {
    const bgImg = imgURL
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgURL})`
      : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./img/no-img.jpg")`;
    const clone = template.content.cloneNode(true);
    const cardItem = clone.querySelector('.card-item');
    cardItem.setAttribute('data-name', name);
    cardItem.style.backgroundImage = bgImg;
    const title = clone.querySelector('.card-text-title');
    title.textContent = name;
    const subtitle = clone.querySelector('.card-text-subtitle');
    subtitle.textContent = filter;
    if (!imgURL) cardItem.classList.add('noImg');
    fragment.appendChild(clone);
  });

  gallery.appendChild(fragment);
}

export function renderExcercises(data, galaryState) {
    gallery.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
        const {name, _id, rating, burnedCalories, target} = data[i];
        const clone = excerciseTemplate.content.cloneNode(true);

        const mainCard = clone.querySelector('.ex-item');
        mainCard.dataset.id = _id;
        
        const elName = clone.querySelector('.js-title');
        elName.textContent = name;

        const elRating = clone.querySelector('.js-rating');
        elRating.textContent = rating;

        const elBurnedCalories = clone.querySelector('.js-burned-calories');
        elBurnedCalories.textContent = burnedCalories;

        const elTarget = clone.querySelector('.js-target');
        elTarget.textContent = target;

        const elFilter = clone.querySelector('.js-filter');
        elFilter.textContent = `${galaryState.filter}:`;

        const elFilterValue = clone.querySelector('.js-filter-value');
        elFilterValue.textContent = galaryState.excerciseFilter;

        fragment.appendChild(clone);
    }

    gallery.appendChild(fragment);
    
}
