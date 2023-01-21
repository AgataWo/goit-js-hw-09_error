import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let enteredDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
       btnStart.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
        btnStart.disabled = false;
        enteredDate = selectedDates[0].getTime();
    }
    },
  };


btnStart.addEventListener('click', countDown);