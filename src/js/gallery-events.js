import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';


// Constants

export const galaryState = {
    page: '',
    excerciseFilter: '',
    filter: 'muscles',
    keyword: '',
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
    if (galaryState.page === pageExcercises) {
        if (galaryState.excerciseFilter) {
            elems.elSearchForm.hidden = false;
        }
        else {
            elems.elSearchForm.hidden = true;
        }
    } else if (galaryState.page === pageFavorites) {
        elems.elSearchForm.hidden = true;
        elems.elFilters.hidden = true;
    }
}

// Events

function handlerGallaryClick(evt) {
    if (evt.target === evt.currentTarget) return;
    
    const galleryItem = evt.target.closest('.card-item');
    if (!galleryItem) return;
    const excerciseFilter = galleryItem.dataset.name;
    galaryState.excerciseFilter = excerciseFilter;
    renderNavigation();

    if (galaryState.page === pageExcercises) {
        getExercisesGallery()
    }
}

function handlerFilterClick(evt) {
    if (evt.target === evt.currentTarget) return;
    if (evt.target.classList.contains('js-filter')) {
        galaryState.filter = evt.target.dataset.filter;
        galaryState.excerciseFilter = '';
        renderNavigation();
    }
}

// Listeners

elems.elGallery.addEventListener('click', handlerGallaryClick);
elems.elFilters.addEventListener('click', handlerFilterClick);

// Render Excercises Gallery
function getExercisesGallery() {

    const params = { ...defaultParams };
    if (galaryState.page === pageExcercises) {
        if (galaryState.excerciseFilter) {
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
        else {
            // function for modal window open
        }
    }
}

function renderExcercises(data) {
    // TODO: 
    // dirty rander. develop next time TODO
    elems.elGallery.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const {name, _id, rating} = data[i];
        const clone = elems.template.content.cloneNode(true);
        
        const elName = clone.querySelector('.ex-item-title-ex');
        elName.textContent = name;

        const elRating = clone.querySelector('.ex-item-rating-text');
        elRating.textContent = rating;

        elems.elGallery.appendChild(clone);
    }
    
}
