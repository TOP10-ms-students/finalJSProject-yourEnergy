import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';
import { renderExcercises } from './services/gallery-service';
import { renderPagination } from './services/paginator-service';
import { openModalExercise } from './exercise-popup';


// Constants

const elems = {
    elMainBreadCrumbsState: document.querySelector('.js-bradcrumbs'),
    elFilterBreadcrumb: document.querySelector('.js-bradcrumbs-filter'),
    elFilters: document.querySelector('.js-filter-block'),
    elInput: document.querySelector('.js-search-input'),
    elSearchForm: document.querySelector('.js-search-form'),
    template: document.querySelector('#exercise')
}

export const galaryState = {
    page: '',
    excerciseFilter: '',
    filter: 'muscles',
    keyword: '',

    init(page) {
        this.page = page;
        const galleryClass = this.isPageExcercises() ? '.js-gallery' : '.js-fav-gallery';
        const elGallery = document.querySelector(galleryClass);
        elGallery.addEventListener('click', handlerGallaryClick);
        if (this.isPageExcercises()) {
            
            elems.elFilters.addEventListener('click', handlerFilterClick);
            elems.elSearchForm.addEventListener('submit', handlerSearchFormSubmit);
            elems.elSearchForm.addEventListener('reset', handlerResetFilterClick);
        }
    },

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
            openModalExercise(id);
        }
    }

    if (galaryState.isPageExcercises()) {
        renderNavigation();
    }
    else if (galaryState.isPageFavorites()) {
        const buttonStart = target.closest('.ex-item-start');
        if (buttonStart) {
            const galleryItem = target.closest('.js-fav-item');
            const id = galleryItem.id;
            openModalExercise(id);
        }
    }
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

    fetchGallaryExcercises(params) 
    
}

function fetchGallaryExcercises(params) {
    fetchApi
    .getExercises(params)
        .then(resp =>
        {
            const { totalPages, results } = resp;
            renderExcercises(results, galaryState);
            renderPagination(totalPages, fetchGallaryExcercises, params);
        })
    .catch(err => showIziToast(err.message));
}
