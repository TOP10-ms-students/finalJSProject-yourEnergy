import { fetchApi } from './api-service';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('subscribe-form');

iziToast.settings({
  timeout: 3000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
});

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
