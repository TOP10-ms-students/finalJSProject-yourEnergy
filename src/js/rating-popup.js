import icons from '/img/icons.svg';

const modalExercise = document.querySelector('.js-modal-exercise');
const modalRating = document.querySelector('.js-modal-rating');
const starsIcons = document.querySelector('.js-stars-svg');

export function openModalRating() {
    const buttonRating = document.querySelector('.js-rating__btn');

    modalRating.innerHTML = markUp();
    showModalRating();

    const closeModalRatingButton = document.querySelector('.js-modal-rating__btn-close');
    const starsIcons = document.querySelector('.js-stars-svg');
    closeModalRatingButton.addEventListener('click', closeModalRating);
    starsIcons.addEventListener('click', changeStarsRating);
    // starsIcons.addEventListener('mouseover', handleHoverEvent);
    listenPolygons();
};

function submitRating() {
    document.querySelector('.js-rating-form').addEventListener('submit', e => {
        e.preventDefault();
    })
}

function listenPolygons () {
    const polygons = document.querySelectorAll('.js-stars-svg polygon');

    polygons.forEach(polygon => {
        polygon.addEventListener('mouseenter', function() {
            const value = parseInt(this.getAttribute('data-value'));

            polygons.forEach((p, index) => {
                if (index < value) {
                    p.classList.add('active');
                    document.querySelector('.js-rating-value').textContent = value;
                } else {
                    p.classList.remove('active');
                }
            });
        });
    });
}

function showModalRating() {
    modalExercise.classList.add('hidden');
    modalRating.classList.remove('hidden');
};

function closeModalRating() {
    modalExercise.classList.remove('hidden');
    modalRating.classList.add('hidden');
};

function changeStarsRating(e) {
    const starsIcons = document.querySelector('.js-stars-svg');
    let value = e.target.dataset.value;
    value && (starsIcons.parentNode.dataset.value = value);
    starsIcons.querySelectorAll('polygon').forEach(star => {
    let on = starsIcons.parentNode.dataset.value >= star.dataset.value;
    star.classList.toggle('active', on);
    });
    document.querySelector('.js-rating-value').textContent = value;
    submitRating()
};

function markUp() {
    return `
    <div class="modal-rating__container">
        <button aria-label="Close modal button" class="modal-rating__btn-close js-modal-rating__btn-close">
            <svg width="28" height="28">
                <use href="${icons}#icon-close"></use>
            </svg>
        </button>

        <div class="modal-rating__rating">
            <span class="js-rating-value">0</span>
            <svg width="110" height="20" class="js-stars-svg">
                <polygon data-value="1" transform="translate(0,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="2" transform="translate(22,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="3" transform="translate(44,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="4" transform="translate(66,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
                <polygon data-value="5" transform="translate(88,0)" points="10,1 4,19.8 19,7.8 1,7.8 16,19.8"></polygon>
            </svg>
        </div>
    
        <form class="modal-rating__form js-rating-form">
            <input class="modal-rating__email" type="email" name="email" placeholder="Email" required />
    
            <textarea class="modal-rating__comment" name="comment" placeholder="Your comment"></textarea>
    
            <button aria-label="Send" class="button button-white modal-rating__button">Send</button>
        </form>
    </div>`
};