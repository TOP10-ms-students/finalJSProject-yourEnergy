import { fetchApi } from './services/api-service';
import image from '../img/example-img.jpg';
import { addToFavorites, removeFromFavorites } from './services/storage-fav-cards';

const {
    modalExercise,
    overlay
} = {
    modalExercise: document.querySelector('.modal-exercise'),
    overlay: document.querySelector('.overlay'),
};

let isFavorite = false;

export async function openModalExercise(id) {
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
};

function createMarkUpModal(markup, data) {
    modalExercise.innerHTML = markup;
    showRightButtons(data);
};

function showRightButtons(obj) {
    const buttonAddRemoveFavorites = document.querySelector('.modal-exercise__btn');
    let favorites = JSON.parse(localStorage.getItem('favWorkouts')) || [];
    favorites ?? (buttonAddRemoveFavorites.innerHTML = createAddButton());
    const isDuplicate = favorites.some(item => item._id === obj._id);
    if (isDuplicate) {
        isFavorite = true;
        return buttonAddRemoveFavorites.innerHTML = createRemoveButton();
    };
    isFavorite = false;
    return buttonAddRemoveFavorites.innerHTML = createAddButton();
};

function createAddButton() {
    return `<span>Add to favorite</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65907 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z"
        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
};

function createRemoveButton() {
    return `<span>Remove from favorites</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996"
        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
    return `
    <div class="modal-exercise__container">
            <button class="modal-exercise__btn-close">
                <svg width="24" height="24" >
                    <path d="M17 7L7 17M7 7L17 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <img class="modal-exercise__img" src="${gifUrl ?? image}" alt="Example of exercise" loading="lazy" />

            <div class="modal-exercise__card">
                <h2 class="modal-exercise__name">${name}</h2>
                <div class="modal-exercise__rating">
                    ${rating} 
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#EEA10C" />
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#EEA10C" />
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#EEA10C" />
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#EEA10C" />
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                            fill="#F4F4F4" fill-opacity="0.2" />
                    </svg>
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
                    <path
                        d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65907 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z"
                        stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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