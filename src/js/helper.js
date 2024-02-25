import iziToast from 'izitoast';
import { setSpinner } from './spinner';

// iziToast settings
iziToast.settings({
  timeout: 3000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
});

export function scrollToTop() {
  document
    .querySelector('.js-gallery-scroll')
    .scrollIntoView({ behavior: 'smooth' });
};

export function calculateFillStar(numStar, valueStars) {
    if (numStar + 1 <= valueStars) {
        return 100;
    } 
    if (numStar > valueStars) {
          return 0;
      };
    return (valueStars % 1) * 100;
};
