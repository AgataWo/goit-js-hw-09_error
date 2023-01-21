let btnStart = document.querySelector('button[data-start]');
let btnStop = document.querySelector('button[data-stop]');
let body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let timer = null;
btnStop.disabled = true;

let start = () => {
  let body = () => {
    background.style.backgroundColor = `${getRandomHexColor()}`;
  };
  timer = setInterval(body, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
};

let stop = () => {
  clearInterval(timer);
  btnStart.disabled = false;
  btnStop.disabled = true;
};

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);