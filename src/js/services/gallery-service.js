export function galleryTemplate(data) {
  const gallery = document.querySelector('.js-gallery');
  const template = document.querySelector('#exercise-group');
  const fragment = document.createDocumentFragment();

  data.forEach(({ name, filter, imgURL }) => {
    const bgImg = imgURL
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgURL})`
      : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./../../img/no-img.jpg")`;
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
