import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';
import { renderExcercises } from './services/gallery-service';
import { renderPagination } from './services/paginator-service';
import { openModalExercise } from './exercise-popup';
import { getExercisesGallery as getGroupsGallery } from './gallery';
import { setSpinner } from './spinner';
import { GALLERY_LIMIT } from './variables';


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

const navigationSections = {
    muscles: "Muscles",
    equipment: "Equipment",
    bodyParts: "Body parts"
}

export const galaryState = {
    excerciseFilter: '',
    filter: navigationSections.muscles,
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
    galaryState.resetExcerciseFilter();
    galaryState.filter = navigationSections.muscles;
    getGroupsGallery({ ...defaultParams, limit: 12, filter: navigationSections.muscles });
    renderNavigation();

    const filters = elems.elFilters.querySelectorAll('.js-filter');
    filters.forEach(filter => {
        filter.classList.remove('active');
        if (filter.dataset.filter === navigationSections.muscles) {
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
    if (!elems.elInput.value) return;
    galaryState.keyword = evt.target.elements.search.value;
    getExercisesGallery();
    elems.elInput.value = '';
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

    const params = { ...defaultParams };
    if (galaryState.filter == navigationSections.muscles) {
        params.muscles = galaryState.excerciseFilter;
    } else if (galaryState.filter == navigationSections.equipment) {
        params.equipment = galaryState.excerciseFilter;
    } else if (galaryState.filter == navigationSections.bodyParts) {
        params.bodypart = galaryState.excerciseFilter;
    }

    if (galaryState.keyword) {
        params.keyword = galaryState.keyword;
    }

    fetchGallaryExcercises(params)

}

async function fetchGallaryExcercises(params) {
    setSpinner(true);
    try {
        const resp = await fetchApi.getExercises(params);
        const { totalPages, results } = resp;
        if (results.length < GALLERY_LIMIT) {
            elems.elGallery.classList.add('reset-min-height');
        }
        renderExcercises(results, galaryState);
        renderPagination(totalPages, fetchGallaryExcercises, params);

        !totalPages && showIziToast('No matching workouts found. Try different keywords or filters.')
    } catch (err) {
        showIziToast(err.message);
    } finally {
        setSpinner(false);
    }
}
