import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';


// Constants

export const galaryState = {
    page: '',
    excerciseFilter: '',
    filter: 'muscles',
    keyword: '',
    inputSubmintEvent: undefined,
    inputResetEvent: undefined,

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
        console.log(this);
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
        if (!galleryItem) return;
        galaryState.setExcerciseFilter(galleryItem.dataset.name)
        getExercisesGallery();
    }

    else if (galaryState.isFilledExcercises()) {
        const buttonStart = target.closest('.ex-item-start');
        if (buttonStart) {
            const galleryItem = target.closest('.ex-item');
            const id = galleryItem.dataset.id;
            console.log(id);
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
    console.log(evt.target.elements.search.value);
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
        const {name, _id, rating, burnedCalories, target} = data[i];
        const clone = elems.template.content.cloneNode(true);

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

    elems.elGallery.appendChild(fragment);
    
}
