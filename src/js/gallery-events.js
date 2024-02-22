import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';


// Constants

export const galaryState = {
    page: '',
    excerciseFilter: '',
    filter: 'muscles',
    keyword: '',

    isPageExcercises() {
        return this.page === pageExcercises;
    },

    isPageFavorites() {
        return this.page === pageFavorites;
    },

    isFilledCroupExcercises() {
        return !!(this.page === pageExcercises && !this.excerciseFilter);
    },

    isFilledExcercises() {
        return !!(this.page === pageExcercises && this.excerciseFilter);
    },

    setFilter(value) {
        this.filter = value;
        this.resetExcerciseFilter();
    },

    setExcerciseFilter(value) {
        this.excerciseFilter = value;
    },

    resetExcerciseFilter() {
        this.excerciseFilter = '';
        this.keyword = '';
    }
}

export const pageExcercises = 'Excercises';
export const pageFavorites = 'Favorites';

const elems = {
    elGallery: document.querySelector('.js-gallery'),
    elMainBreadCrumbsState: document.querySelector('.js-bradcrumbs'),
    elFilterBreadcrumb: document.querySelector('.js-bradcrumbs-filter'),
    elFilters: document.querySelector('.js-filter-block'),
    elInput: document.querySelector('.js-search-input'),
    elSearchForm: document.querySelector('.js-search-form'),
    template: document.querySelector('#exercise')
}

const defaultParams = {
    page: 1,
    limit: 10
};


// Functions

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderNavigation() {
    elems.elMainBreadCrumbsState.textContent = `${galaryState.page} ${galaryState.excerciseFilter ? ' /' : ''}`;
    elems.elFilterBreadcrumb.textContent = galaryState.excerciseFilter ? capitalizeFirstLetter(galaryState.excerciseFilter) : '';
    if (galaryState.isPageExcercises) {
        if (galaryState.isFilledExcercises) {
            elems.elSearchForm.hidden = false;
        }
        else {
            elems.elSearchForm.hidden = true;
        }
    } else if (galaryState.isPageFavorites) {
        elems.elSearchForm.hidden = true;
        elems.elFilters.hidden = true;
    }
}

// Events

function handlerGallaryClick(evt) {
    if (evt.target === evt.currentTarget) return;

    const target = evt.target;

    if (galaryState.isFilledCroupExcercises()) {
        const galleryItem = target.closest('.card-item');
        if (!galleryItem) {
            return;
        };
        galaryState.setExcerciseFilter(galleryItem.dataset.name)
        getExercisesGallery();
    }

    else if (galaryState.isFilledExcercises()) {
        const buttonStart = target.closest('.ex-item-start');
        if (buttonStart) {
            const galleryItem = target.closest('.ex-item');
            const id = galleryItem.dataset.id;
            // function for modal window open
        }
    }
    renderNavigation();
}

function handlerFilterClick(evt) {
    if (evt.target === evt.currentTarget) return;
    if (evt.target.classList.contains('js-filter')) {
        galaryState.setFilter(evt.target.dataset.filter);
        renderNavigation();
    }
}

function handlerSearchFormSubmit(evt) {
    evt.preventDefault();
    galaryState.keyword = evt.target.elements.search.value;
    getExercisesGallery();
}

function handlerResetFilterClick() {
    galaryState.resetExcerciseFilter();
    renderNavigation();
}

// Listeners

elems.elGallery.addEventListener('click', handlerGallaryClick);
elems.elFilters.addEventListener('click', handlerFilterClick);
elems.elSearchForm.addEventListener('submit', handlerSearchFormSubmit);
elems.elSearchForm.addEventListener('reset', handlerResetFilterClick);

// Render Excercises Gallery
function getExercisesGallery() {

    const params = { ...defaultParams };
    if (galaryState.filter == 'Muscles') {
        params.muscles = galaryState.excerciseFilter;
    } else if (galaryState.filter == 'Equipment') {
        params.equipment = galaryState.excerciseFilter;
    } else if (galaryState.filter == 'Body parts') {
        params.bodypart = galaryState.excerciseFilter;
    }

    if (galaryState.keyword) {
        params.keyword = galaryState.keyword;
    }
    fetchApi
        .getExercises(params)
        .then(resp => renderExcercises(resp.results))
        .catch(err => showIziToast(err.message));
}

function renderExcercises(data) {
    elems.elGallery.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
        const { name, _id, rating, burnedCalories, target } = data[i];
        const mainCard = elems.template.children[0].cloneNode(true);
        mainCard.dataset.id = _id;

        const elName = mainCard.querySelector('.js-title');
        elName.textContent = name;

        const elRating = mainCard.querySelector('.js-rating');
        elRating.textContent = rating;

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

    elems.elGallery.appendChild(fragment);

}
