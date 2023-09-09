let time = document.getElementById("currentUTCTime");
let date = document.getElementById("currentDayOfTheWeek");
let d = new Date();

const newDate = (date.innerText = d.toLocaleDateString()); //d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();

setInterval(() => {
  let d = new Date();
  return (currentTime = time.innerText = d.toLocaleTimeString());
}, 1000);
