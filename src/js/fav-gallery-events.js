import { openModalExercise } from './exercise-popup';
import { removeFromFavorites } from './services/storage-fav-cards';
import { initFavGallery } from './favorites-gallery';

// Events

const elGallery = document.querySelector('.js-fav-gallery');

function handlerGallaryClick(evt) {
    if (evt.target === evt.currentTarget) return;

    const target = evt.target;
    
    const buttonStart = target.closest('.ex-item-start');
    if (buttonStart) {
        const galleryItem = target.closest('.js-fav-item');
        const id = galleryItem.id;
        openModalExercise(id);
    }

    const trash = target.closest('.ex-item-trash-icon');
    if (trash) {
        const galleryItem = target.closest('.js-fav-item');
        removeFromFavorites({ "_id": galleryItem.id });
        initFavGallery();
    }
}

elGallery.addEventListener('click', handlerGallaryClick);
