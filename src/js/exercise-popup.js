import { fetchApi } from './services/api-service';
import image from '/img/example-img.jpg';
import { addToFavorites, removeFromFavorites } from './services/storage-fav-cards';
import icons from '/img/icons.svg';
import { setSpinner } from './spinner';
import { showIziToast } from './services/iziToast';
import { initFavGallery } from './favorites-gallery';
import { calculateFillStar } from './helper';
import { openModalRating } from './rating-popup';

const modalExercise = document.querySelector('.js-modal-exercise');
const overlay = document.querySelector('.overlay');
const modalRating = document.querySelector('.js-modal-rating');
const fullStarColor = '#eea10c';
const emptyStarColor = '#f4f4f433';
const totalStars = 5;

let isFavorite = false;
let currentData;

export async function openModalExercise(id) {
    overlay.addEventListener('click', clickOnOverlay);
    document.addEventListener('keydown', clickOnEscape);

    try {
        setSpinner(true);
        const dataExercise = await fetchApi.getExercisesId(id);
        currentData = dataExercise;
        const markup = markUp(dataExercise);
        createMarkUpModal(markup, dataExercise);
        showModalExercise();
    
        const closeModalButton = document.querySelector('.js-modal-exercise__btn-close');
        const buttonAddRemoveFavorites = document.querySelector('.js-favorite__btn');
        const buttonRating = document.querySelector('.js-rating__btn');
        closeModalButton.addEventListener('click', closeModalExercise);
        buttonAddRemoveFavorites.addEventListener('click', toggleButton);
        buttonRating.addEventListener('click', openModalRating);
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
    const buttonAddRemoveFavorites = document.querySelector('.js-favorite__btn');
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
    let starsRating = '';

    for (let i = 0; i < totalStars; i += 1) {
        const gradientId = `gradient-id${i}`;
        const offsetPercent = calculateFillStar(i, rating);
        
        const linearGradient = `
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${offsetPercent}%" stop-color=${fullStarColor}></stop>
            <stop offset="0%" stop-color=${emptyStarColor}></stop>
        </linearGradient>`;
        
        starsRating += `
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            ${linearGradient}
            <use href="${icons}#icon-star" fill="url(#${gradientId})"></use>
        </svg>`;
    };
    return starsRating;
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
            <button aria-label="Close modal button" class="modal-exercise__btn-close js-modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <use href="${icons}#icon-close"></use>
                </svg>
            </button>

            <img class="modal-exercise__img" src="${gifUrl ?? image}" width="260" height="260" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${name}</h2>
                <div class="modal-exercise__rating">
                    ${rating.toFixed(1)}
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
            <button aria-label="Remove or add favorite exercise" class="button button-with-icon button-white modal-exercise__btn js-favorite__btn"></button>
            <button aria-label="Give a rating" class="button modal-exercise__btn js-rating__btn" data-id="${_id}">Give a rating</button>
        </div>`
};

function toggleButton() {
    const buttonAddRemoveFavorites = document.querySelector('.js-favorite__btn');
    isFavorite = !isFavorite;   
            
    if (isFavorite) {
        addToFavorites(currentData);
        buttonAddRemoveFavorites.innerHTML = createRemoveButton();
    } else {
        removeFromFavorites(currentData);
        buttonAddRemoveFavorites.innerHTML = createAddButton();
        initFavGallery();
    };
};

function clickOnOverlay(e) {
    if (modalRating.classList.contains('hidden')
        && e.target === overlay) {
        closeModalExercise();
    } 
    if (modalExercise.classList.contains('hidden')
        && e.target === overlay) {
        modalRating.classList.add('hidden');
        modalExercise.classList.remove('hidden');
    }
};

function clickOnEscape({ key }) {
    if (modalRating.classList.contains('hidden')
        && key === "Escape") {
        closeModalExercise();
    }
    if (modalExercise.classList.contains('hidden')
        && key === "Escape") {
        modalRating.classList.add('hidden');
        modalExercise.classList.remove('hidden');
    }
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
    overlay.removeEventListener('click', clickOnOverlay);
    document.removeEventListener('keydown', clickOnEscape);
};