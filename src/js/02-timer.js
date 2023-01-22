import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;
const daysGet = document.querySelector('span[data-days]');
const hoursGet = document.querySelector('span[data-hours]');
const minutesGet = document.querySelector('span[data-minutes]');
const secondsGet = document.querySelector('span[data-seconds]');

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

  const flatP = flatpickr('input#datetime-picker', options);

const countDown = () => {
    let timer = setInterval(()=>{
        btnStart.disabled = true;
        let timeValue = enteredDate - Date.now();
        const hours = Math.floor(timeValue / 3600000);
        let minutes = Math.floor((timeValue % 3600000) / 60000);
        const seconds = Math.floor(((timeValue % 360000) % 60000) / 1000);
        const timeValueToDays = Math.floor(timeValue / 86400000);
        secondsGet.textContent = seconds > 10 ? seconds : addLeadingZero(seconds);
        minutesGet.textContent = minutes > 10 ? minutes : addLeadingZero(minutes);
        hoursGet.textContent = hours > 10 ? hours : addLeadingZero(hours);
        daysGet.textContent = timeValueToDays > 10 ? timeValueToDays : addLeadingZero(timeValueToDays);
    if ( timeValue <=0){
        clearInterval(timer);
        secs.textContent = '00';
        mins.textContent = '00';
        hrs.textContent = '00';
        days.textContent = '00';
    }
    }, 1000);
};


btnStart.addEventListener('click', countDown);
function addLeadingZero(e){
    return String(e).padStart(2, '0');
}





