let inputDelay = document.querySelector('input[name="delay"]');
let inputStep = document.querySelector('input[name="step"]');
let inputAmount = document.querySelector('input[name="amount"]');
let submit = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

let start = e => {
  e.preventDefault();

  let valueDelay = Number(inputDelay.value);
  let valueStep = Number(inputStep.value);
  let valueAmount = Number(inputAmount.value);

  for (let i = 0; i < valueAmount; i++) {
    createPromise(i + 1, valueDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    valueDelay += valueStep;
  }
};
submit.addEventListener('click', start);