const timer = (deadline) => {
  const timerHours = document.querySelector("#timer-hours");
  const timerMinutes = document.querySelector("#timer-minutes");
  const timerSeconds = document.querySelector("#timer-seconds");
  let idInterval = 0;

  const getTimerRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const hours = Math.floor((timeRemaining / 3600) % 60) % 24;
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    console.log("lol");
    const getTime = getTimerRemaining(deadline);
    timerHours.textContent =
      getTime.hours.toString().length < 2 ? `0${getTime.hours}` : getTime.hours;
    timerMinutes.textContent =
      getTime.minutes.toString().length < 2
        ? `0${getTime.minutes}`
        : getTime.minutes;
    timerSeconds.textContent =
      getTime.seconds.toString().length < 2
        ? `0${getTime.seconds}`
        : getTime.seconds;

    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };
  idInterval = setInterval(updateClock, 1000);
};

export default timer;
