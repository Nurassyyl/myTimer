const timer = (deadline) => {
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        // if (dateStop == dateNow) {
        //     console.log("равен");
        // } else {
        //     console.log("No");
        // }
        return {
            dateStop,
            dateNow,
            timeRemaining,
            hours,
            minutes,
            seconds
        }
    }

    const updateClock = () => {
        const getTime = getTimeRemaining();
        if (getTime.dateStop === getTime.dateNow) {
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
        timerHours.textContent = getTime.hours;
        if (getTime.hours < 10) {
            timerHours.textContent = "0" + getTime.hours;
        }
        timerMinutes.textContent = getTime.minutes;
        if (getTime.minutes < 10) {
            timerMinutes.textContent = "0" + getTime.minutes;
        }
        timerSeconds.textContent = getTime.seconds;
        if (getTime.seconds < 10) {
            timerSeconds.textContent = "0" + getTime.seconds;
        }

    }
    setInterval(updateClock, 1000);
};

export default timer;