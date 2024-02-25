const TABLET_WIDTH = 768;
const TABLET_WORKOUTS_AMOUNT = 9;
const MOBILE_WORKOUTS_AMOUNT = 10;
const TABLET_GROUP_AMOUNT = 12;
const MOBILE_GROUP_AMOUNT = 9;

export const DESKTOP_WIDTH = 1440;

export const EX_GALLERY_LIMIT =
  window.innerWidth < TABLET_WIDTH
    ? TABLET_WORKOUTS_AMOUNT
    : MOBILE_WORKOUTS_AMOUNT;

export const FAV_CARD_CLASS_NAMES = [
  'js-fav-target',
  'js-fav-calories',
  'js-fav-bodyPart',
  'js-fav-title',
];

export const GALLERY_LIMIT = window.innerWidth < TABLET_WIDTH
  ? MOBILE_GROUP_AMOUNT
  : TABLET_GROUP_AMOUNT;
export const MAX_SIZE_TITLE = 31;

