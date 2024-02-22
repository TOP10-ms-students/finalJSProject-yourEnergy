export function galleryTemplate(data) {
  const gallery = document.querySelector('.js-gallery');
  const template = document.querySelector('#exercise-group');
  const fragment = document.createDocumentFragment();

  data.forEach(({ name = '', filter = '', imgURL = '' }) => {
    const bgImg = imgURL
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgURL})`
      : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./img/no-img.jpg")`;
    const cardItem = template.children[0].cloneNode(true);
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
