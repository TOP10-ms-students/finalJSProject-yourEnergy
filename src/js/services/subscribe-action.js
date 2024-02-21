import iziToast from 'izitoast';

import { fetchApi } from './api-service';


const form = document.getElementById('subscribe-form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const email = e.target.elements.email.value;

  try {
    await fetchApi.addSubscription({ email });
    iziToast.success({
      title: "Congrats! You've been subscribed!",
    });
  } catch (err) {
    iziToast.info({
      title: 'Subscription already exists',
    });
  } finally {
    e.target.reset();
  }
});
