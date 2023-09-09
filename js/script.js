let time = document.getElementById("currentUTCTime");
let date = document.getElementById("currentDayOfTheWeek");
let d = new Date();

const newDate = date.innerHTML = `${'<span> Date: </span>'} ${d.toLocaleDateString()}`;//d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();

setInterval(() => {
  let d = new Date();
  return time.innerHTML= `${'<span> Time: </span>'} ${d.toLocaleTimeString()}`;
}, 1000);
