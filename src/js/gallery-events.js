import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';
import { renderExcercises } from './services/gallery-service';
import { renderPagination } from './services/paginator-service';
import { openModalExercise } from './exercise-popup';
import { getExercisesGallery as getGroupsGallery } from './gallery';
import { setSpinner } from './spinner';


// Constants

const elems = {
    elGallery: document.querySelector('.js-gallery'),
    elMainBreadCrumbsState: document.querySelector('.js-bradcrumbs'),
    elInnerBreadCrumbsState: document.querySelector('.js-bradcrumbs-inner'),
    elFilterBreadcrumb: document.querySelector('.js-bradcrumbs-filter'),
    elFilters: document.querySelector('.js-filter-block'),
    elInput: document.querySelector('.js-search-input'),
    elSearchForm: document.querySelector('.js-search-form'),
    template: document.querySelector('#exercise'),
    elTrash: document.querySelector('.ex-item-trash-icon'),
}

export const galaryState = {
    excerciseFilter: '',
    filter: 'Muscles',
    keyword: '',

    isFilledCroupExcercises() {
        return !(this.excerciseFilter);
    },

    isFilledExcercises() {
        return !!(this.excerciseFilter);
    },

    setFilter(value) {
        this.filter = value;
        this.resetExcerciseFilter();
        elems.elSearchForm.removeEventListener('submit', handlerSearchFormSubmit);
        elems.elSearchForm.removeEventListener('reset', handlerResetFilterClick);
    },

    setExcerciseFilter(value) {
        this.excerciseFilter = value;
        elems.elSearchForm.addEventListener('submit', handlerSearchFormSubmit);
        elems.elSearchForm.addEventListener('reset', handlerResetFilterClick);
    },

    resetExcerciseFilter() {
        this.excerciseFilter = '';
        this.keyword = '';
    }
}

const defaultParams = {
  page: 1,
  limit: 10
};


// Functions

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const resetState = () => {
    elems.elGallery.innerHTML = '';
    galaryState.resetExcerciseFilter();
    galaryState.filter = 'Muscles';
    getGroupsGallery({ ...defaultParams, filter: 'Muscles'});
    renderNavigation();

    const filters = elems.elFilters.querySelectorAll('.js-filter');
    filters.forEach(filter => {
        filter.classList.remove('active');
        if (filter.dataset.filter === 'Muscles') {
            filter.classList.add('active');
        }
    });

}

function renderNavigation() {
    elems.elFilterBreadcrumb.textContent = galaryState.excerciseFilter ? capitalizeFirstLetter(galaryState.excerciseFilter) : '';
    if (galaryState.isFilledExcercises()) {
        elems.elSearchForm.hidden = false;
        elems.elInnerBreadCrumbsState.hidden = false;
        if (!elems.elMainBreadCrumbsState.classList.contains('bradcrumbs-active')) {
            elems.elMainBreadCrumbsState.classList.add('bradcrumbs-active')
            elems.elMainBreadCrumbsState.addEventListener('click', resetState);
        }
    }
    else {
        elems.elSearchForm.hidden = true;
        elems.elInnerBreadCrumbsState.hidden = true;
        elems.elMainBreadCrumbsState.classList.remove('bradcrumbs-active')
        elems.elMainBreadCrumbsState.removeEventListener('click', resetState);
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
    galaryState.keyword = '';
    getExercisesGallery();
    renderNavigation();
}

// Listeners

elems.elGallery.addEventListener('click', handlerGallaryClick);
elems.elFilters.addEventListener('click', handlerFilterClick);
elems.elSearchForm.addEventListener('submit', handlerSearchFormSubmit);
elems.elSearchForm.addEventListener('reset', handlerResetFilterClick);


// Render Excercises Gallery
function getExercisesGallery() {
    elems.elGallery.innerHTML = '';

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
    setSpinner(true);
    fetchApi
    .getExercises(params)
        .then(resp =>
        {
            const { totalPages, results } = resp;
            renderExcercises(results, galaryState);
            renderPagination(totalPages, fetchGallaryExcercises, params);
        })
        .catch(err => showIziToast(err.message))
        .finally(setSpinner(false));
}
