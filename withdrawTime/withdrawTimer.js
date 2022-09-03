const goodAfternoon = document.getElementById("timer-hours");
const today = document.getElementById("timer-minutes");
const currentTime = document.getElementById("timer-seconds");
const timerDays = document.getElementById("timer-days");
const date = new Date();
const dateNow = new Date().getTime();
const dateStop = new Date('31 December 2022').getTime();

const hours = date.getHours();
if (hours < 12) {
    goodAfternoon.textContent = "Добрый день (утро)";
} else if (hours > 17 && hours < 19) {
    goodAfternoon.textContent = "Добрый день (вечер)";
} else {
    goodAfternoon.textContent = "Добрый день (ночь)"
}

const day = date.getDay();
if (day == 1) {
    today.textContent = "Сегодня: Понедельник";
} else if (day == 2) {
    today.textContent = "Сегодня: Вторник";
} else if (day == 3) {
    today.textContent = "Сегодня: Среда";
} else if (day == 4) {
    today.textContent = "Сегодня: Четверг";
} else if (day == 5) {
    today.textContent = "Сегодня: Пятница";
} else if (day == 6) {
    today.textContent = "Сегодня: Суббота";
} else {
    today.textContent = "Сегодня: Воскресенье";
}

const timeCurrent = date.toLocaleTimeString('en');
currentTime.textContent = "Текущее время: " + timeCurrent;

const seconds = Math.floor((dateStop - dateNow) / 1000);
const days = Math.floor(seconds / 60 / 60 / 24);
timerDays.textContent = "До нового года осталось " + days + " дней";

