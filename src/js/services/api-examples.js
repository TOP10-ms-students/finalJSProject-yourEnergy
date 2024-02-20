import { fetchApi } from './api-service';

// getExercises
const exercisesParams = {
  page: 1,
  limit: 10,
  bodypart: 'cardio',
  // muscles: 'string',
  // equipment: 'string',
  // keyword: 'string',
};
fetchApi
  .getExercises(exercisesParams)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));

// exercisesId
const exercisesId = '64f389465ae26083f39b17a5';

fetchApi
  .getExercisesId(exercisesId)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));

// editExercisesIdRating
const ratingBody = {
  rate: 5,
  email: 'test02@gmail.com',
  review: 'My best exercise',
};
fetchApi
  .editExercisesIdRating(exercisesId, ratingBody)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));

// getExercisesFilter
const filterParams = {
  page: 1,
  limit: 10,
  filter: 'Muscles',
};

fetchApi
  .getExercisesFilter(filterParams)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));

// getExercisesQuote
fetchApi
  .getExercisesQuote()
  .then(resp => console.log(resp))
  .catch(err => console.log(err));

// getExercisesQuote
const subscriptionBody = {
  email: 'test02@gmail.com',
};
fetchApi
  .addSubscription(subscriptionBody)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
