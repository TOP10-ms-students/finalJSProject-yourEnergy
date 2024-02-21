import * as api from './api-service';

//пример как можно использовать темплейты
export function testTemplate() {
  const template = document.querySelector('#exercise-group');
  const galerry = document.querySelector('#gallery > .content');

  for (let i = 0; i < 10; i++) {
    const clone = template.content.cloneNode(true);
    const p = clone.querySelector('p');
    p.textContent = 'other ' + i;
    galerry.appendChild(clone);
  }
}
