const digitalClock = document.getElementById('digital-clock');
const dateDisplay = document.getElementById('date');
const analogClock = document.getElementById('analog-clock');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    digitalClock.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    dateDisplay.textContent = now.toDateString();

    const hoursDeg = (hours % 12) * 30 + minutes * 0.5;
    const minutesDeg = minutes * 6;
    const secondsDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
}

function switchModel(model) {
    if (model === 'digital') {
        digitalClock.classList.remove('hidden');
        analogClock.classList.add('hidden');
    } else {
        digitalClock.classList.add('hidden');
        analogClock.classList.remove('hidden');
    }
}

function applyStyle(styleClass) {
    document.body.className = styleClass;
}

setInterval(updateClock, 1000);
updateClock();