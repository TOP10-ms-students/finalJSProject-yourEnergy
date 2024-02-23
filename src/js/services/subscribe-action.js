import { setSpinner } from '../spinner';
import { showIziToast } from './iziToast';

import { fetchApi } from './api-service';

const form = document.getElementById('subscribe-form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const email = e.target.elements.email.value;

  try {
    setSpinner(true);
    await fetchApi.addSubscription({ email });
    showIziToast("Congrats! You've been subscribed!");
  } catch (err) {
    showIziToast('Subscription already exists', '#FF876C');
  } finally {
    e.target.reset();
    setSpinner(false);
  }
});
