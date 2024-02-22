import { fetchApi } from './services/api-service';


// Constants

export const galaryState = {
    page: '',
    excerciseFilter: '',
    filter: 'muscles',
    keyword: '',
}

const elems = {
    elGallery: document.querySelector('.js-gallery'),
    elMainBreadCrumbsState: document.querySelector('.js-bradcrumbs'),
    elFilterBreadcrumb: document.querySelector('.js-bradcrumbs-filter'),
    elFilters: document.querySelector('.js-filter-block'),
    elInput: document.querySelector('.js-search-input'),
    elSearchForm: document.querySelector('.js-search-form'),
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
    if (galaryState.page === 'Excercises') {
        if (galaryState.excerciseFilter) {
            elems.elSearchForm.hidden = false;
        }
        else {
            elems.elSearchForm.hidden = true;
        }
    } else if (galaryState.page === 'Favorites') {
        elems.elSearchForm.hidden = true;
        elems.elFilters.hidden = true;
    }
}

// Events

function handlerGallaryClick(evt) {
    if (evt.target === evt.currentTarget) return;
    
    const galleryItem = evt.target.closest('.gallery-item');
    const excerciseFilter = galleryItem.dataset.name;
    galaryState.excerciseFilter = excerciseFilter;
    renderNavigation();

    if (galaryState.page === 'Excercises') {
        getExercisesGallery()
    } else if (galaryState.page === 'Favorites') {

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
    if (galaryState.page === 'Excercises') {
        if (galaryState.excerciseFilter) {
            if (galaryState.filter == 'muscles') {
                params.muscles = galaryState.excerciseFilter;
            } else if (galaryState.filter == 'equipment') {
                params.equipment = galaryState.excerciseFilter;
            } else if (galaryState.filter == 'Body parts') {
                params.bodypart = galaryState.excerciseFilter;
            }

            if (galaryState.keyword) {
                params.keyword = galaryState.keyword;
            }
            fetchApi
            .getExercises(params)
            .then(resp => renderGalleryMarkup(resp.results))
            .catch(err => showIziToast('An error occurred while loading data'));
        }
        else {
            // function for modal window open
        }
    }
}

function renderGalleryMarkup(data) {
    // TODO: 
    // dirty rander. develop next time TODO
    elems.elGallery.innerHTML = '';
    const galleryMarkup = data.map(
        ({ _id, burnedCalories, bodyPart, target, rating, name }) =>
        `<li class="gallery-item" data-id="${_id}">
            <p>${name}</p>
            <span>${target}</span>
        </li>`
    );
    elems.elGallery.innerHTML = galleryMarkup.join('');
}
