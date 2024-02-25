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

export function calculatePercent(i, num) {
    if (i + 1 <= num) {
        return 100;
    } else {
        if (i > num) {
            return 0;
        };
        return (num % 1) * 100;
    };
};

export function roundOff(num) {
    if (Number.isInteger(num)) {
        return `${num}.0`;
    } else {
        return num.toFixed(1);
    };
};