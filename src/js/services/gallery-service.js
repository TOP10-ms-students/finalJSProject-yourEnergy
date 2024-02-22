export function galleryTemplate(data) {
  const gallery = document.querySelector('.js-gallery');
  const template = document.querySelector('#exercise-group');

  data.forEach(({ name, filter, imgURL }) => {
    const clone = template.content.cloneNode(true);
    const cardItem = clone.querySelector('.card-item');
    cardItem.setAttribute('data-name', name);
    cardItem.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgURL})`;
    const title = clone.querySelector('.card-text-title');
    title.textContent = name;
    const subtitle = clone.querySelector('.card-text-subtitle');
    subtitle.textContent = filter;
    gallery.appendChild(clone);
  });
}
