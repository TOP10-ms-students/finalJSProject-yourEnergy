import { fetchApi } from './services/api-service';
import image from '/img/example-img.jpg';
import { addToFavorites, removeFromFavorites } from './services/storage-fav-cards';
import icons from '/img/icons.svg';
import { setSpinner } from './spinner';
import { showIziToast } from './services/iziToast';

const modalExercise = document.querySelector('.modal-exercise');
const overlay = document.querySelector('.overlay');

let isFavorite = false;

export async function openModalExercise(id) {
    try {
        setSpinner(true);
        const dataExercise = await fetchApi.getExercisesId(id);
    
        const markup = markUp(dataExercise);
        createMarkUpModal(markup, dataExercise);
        showModalExercise();
    
        const closeModalButton = document.querySelector('.modal-exercise__btn-close');
        const buttonAddRemoveFavorites = document.querySelector('.modal-exercise__btn');
        closeModalButton.addEventListener('click', closeModalExercise);
        buttonAddRemoveFavorites.addEventListener('click', () => {
            isFavorite = !isFavorite;   
            
                if (isFavorite) {
                    addToFavorites(dataExercise);
                    buttonAddRemoveFavorites.innerHTML = createRemoveButton();
                } else {
                    removeFromFavorites(dataExercise);
                    buttonAddRemoveFavorites.innerHTML = createAddButton();
                }
        });
    } catch (err) {
        showIziToast(err.message);
    } finally {
        setSpinner(false);
    };
};

function createMarkUpModal(markup, data) {
    modalExercise.innerHTML = markup;
    showRightButtons(data);
};

function showRightButtons(obj) {
    const buttonAddRemoveFavorites = document.querySelector('.modal-exercise__btn');
    let favorites = JSON.parse(localStorage.getItem('favWorkouts')) || [];
    const isDuplicate = favorites.some(item => item._id === obj._id);
    if (isDuplicate) {
        isFavorite = true;
        return buttonAddRemoveFavorites.innerHTML = createRemoveButton();
    };
    isFavorite = false;
    return buttonAddRemoveFavorites.innerHTML = createAddButton();
};

function createStarRating(rating) {
    const fillStar = `
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${icons}#icon-star-full"
          ></use>
        </svg>`;
    const emptyStar = `
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
          <use
            href="${icons}#icon-star-empty"
          ></use>
        </svg>`;
    const roundedRating = Math.round(rating);
    let stars = '';
    
    for (let i = 0; i < roundedRating; i += 1) {
        stars += fillStar;
    };
    for (let i = 0; i < 5 - roundedRating; i += 1) {
            stars += emptyStar;
    };
    return stars;
};

function createAddButton() {
    return `<span>Add to favorite</span>
    <svg class="modal-exercise__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <use href="${icons}#icon-heart"></use>
    </svg>`
};

function createRemoveButton() {
    return `<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="${icons}#icon-trash"></use>
    </svg>`
};

function markUp({
    _id,
    name,
    rating,
    gifUrl,
    target,
    bodyPart,
    equipment,
    popularity,
    burnedCalories,
    time,
    description
}) {
    const starsRating = createStarRating(rating);

    return `
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${icons}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${gifUrl ?? image}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${name}</h2>
                <div class="modal-exercise__rating">
                    ${rating}
                    ${starsRating}
                </div>

                <div class="modal-exercise__attributes">
                    <ul class="modal-exercise__list">
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Target</h3>
                            <p class="modal-exercise__text">${target}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Body Part</h3>
                            <p class="modal-exercise__text">${bodyPart}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Equipment</h3>
                            <p class="modal-exercise__text">${equipment}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Popular</h3>
                            <p class="modal-exercise__text">${popularity}</p>
                        </li>
                        
                        <li class="modal-exercise__item">
                            <h3 class="modal-exercise__title">Burned Calories</h3>
                            <p class="modal-exercise__text">${burnedCalories}/${time} min</p>
                        </li>
                    </ul>
                    <p class="modal-exercise__description">
                        ${description}
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-exercise__btn-container">
            <button class="button button-with-icon button-white modal-exercise__btn"><span>Add to favorite</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="./img/icons.svg#icon-trash"></use>
                </svg>
            </button>
            <button class="button modal-exercise__btn">Give a rating</button>
        </div>`
};

function showModalExercise() {
    overlay.classList.remove('hidden');
    modalExercise.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

function closeModalExercise() {
    overlay.classList.add('hidden');
    modalExercise.classList.add('hidden');
    document.body.style.overflow = 'scroll';
};

overlay.addEventListener('click', e => e.target === overlay && closeModalExercise());
document.addEventListener('keydown',
    ({ key }) => (key === "Escape" && !modalExercise.classList.contains('hidden')) && closeModalExercise()
);