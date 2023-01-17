let btnStart = document.querySelector('button[data-start]');
let btnStop = document.querySelector('button[data-stop]');
let body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);