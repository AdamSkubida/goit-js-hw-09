'use strict';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const promisesAmount = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
  }, delay);
}
