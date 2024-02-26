import icons from '/img/icons.svg';

const modalExercise = document.querySelector('.modal-exercise');
const modalRating = document.querySelector('.modal-rating');

export function openModalRating() {
    const buttonRating = document.querySelector('.js-rating__btn');

    modalRating.innerHTML = markUp();
    showModalRating();

    const closeModalRatingButton = document.querySelector('.modal-rating__btn-close'); 
    closeModalRatingButton.addEventListener('click', closeModalRating);
};

function showModalRating() {
    modalExercise.classList.add('hidden');
    modalRating.classList.remove('hidden');
};

function closeModalRating() {
    modalExercise.classList.remove('hidden');
    modalRating.classList.add('hidden');
};

function markUp() {
    return `
    <div class="modal-rating__container">
        <button aria-label="Close modal button" class="modal-rating__btn-close">
            <svg width="28" height="28">
                <use href="${icons}#icon-close"></use>
            </svg>
        </button>

        <div class="modal-rating__rating">
        0.0
            <svg width="110" height="20">
                <polygon data-value="1" transform="translate(0,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="2" transform="translate(22,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="3" transform="translate(44,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="4" transform="translate(66,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="5" transform="translate(88,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
            </svg>
        </div>
    
        <form class="modal-rating__form">
            <input class="modal-rating__email" type="email" name="email" placeholder="Email" required />
    
            <textarea class="modal-rating__comment" name="comment" placeholder="Your comment"></textarea>
    
            <button aria-label="Send" class="button button-white modal-rating__button">Send</button>
        </form>
    </div>`
};