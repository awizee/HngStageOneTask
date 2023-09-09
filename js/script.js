const setTime = new Date();

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = weekDay[setTime.getDay()];
const currentDay = document.getElementById("currentDay");
currentDay.innerHTML = day;

function updateTime() {
  const currentTime = document.getElementById("currentTime");
}

function updateUTCTime() {
  const currentUTCTime = new Date().getTime();

  currentTime.innerHTML = currentUTCTime;
}

updateUTCTime();
setInterval(updateUTCTime, 1);

updateTime();
