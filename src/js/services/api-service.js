const BASE_URL = 'https://your-energy.b.goit.study/api';

export const fetchData = async (path, method, body) => {
  const headers = { 'Content-type': 'application/json' };
  const init = { headers, method, body };
  return fetch(path, init).then(response => {
    if (!response.ok) throw new Error();
    return response.json();
  });
};

export const fetchApi = {
  async getExercises(exercisesParams) {
    const params = new URLSearchParams(exercisesParams);
    const url = `${BASE_URL}/exercises?${params}`;
    return await fetchData(url);
  },

  async getExercisesId(id) {
    const url = `${BASE_URL}/exercises/${id}`;
    return await fetchData(url);
  },

  async editExercisesIdRating(id, ratingBody) {
    const method = 'PATCH';
    const url = `${BASE_URL}/exercises/${id}/rating`;
    const body = JSON.stringify(ratingBody);
    return await fetchData(url, method, body);
  },

  async getExercisesFilter(filterParams) {
    const params = new URLSearchParams(filterParams);
    const url = `${BASE_URL}/filters?${params}`;
    return await fetchData(url);
  },

  async getExercisesQuote() {
    const url = `${BASE_URL}/quote`;
    return await fetchData(url);
  },

  async addSubscription(subscriptionBody) {
    const method = 'POST';
    const url = `${BASE_URL}/subscription`;
    const body = JSON.stringify(subscriptionBody);
    return await fetchData(url, method, body);
  },
};
