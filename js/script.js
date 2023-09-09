let time = document.getElementById("currentUTCTime");
let date = document.getElementById("currentDayOfTheWeek");
let d = new Date();

let newDate = (date.innerHTML = `${"<span> Date: </span>"} ${
  d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()
}`);

setInterval(() => {
  let d = new Date();
  return (time.innerHTML = `${"<span> Time: </span>"} ${
    d.getHours() + ":" + d.getMinutes() + ":" + d.getMilliseconds()
  }`);
}, 1000);
