const timer = (deadline) => {
  const timerHours = document.querySelector("#timer-hours");
  const timerMinutes = document.querySelector("#timer-minutes");
  const timerSeconds = document.querySelector("#timer-seconds");
  let idInterval = 0;

  const getTimerRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 3600 / 24);
    const hours = Math.floor((timeRemaining / 3600) % 60) % 24;
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const addDayBlock = () => {
    let dayContainer = document.querySelector("#timer-days");
    if (!dayContainer) {
      dayContainer = document.createElement("span");
      dayContainer.id = "timer-days";
      timerHours.before(dayContainer);
      dayContainer.after((document.createElement("span").textContent = " : "));
    }
    return dayContainer;
  };

  const updateClock = () => {
    const getTime = getTimerRemaining(deadline);
    const timerDays = addDayBlock();
    timerDays.textContent =
      getTime.days.toString().length < 2 ? `0${getTime.days}` : getTime.days;
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
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };
  idInterval = setInterval(updateClock, 1000);
};

export default timer;
