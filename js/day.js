const day = () => {
  let d = new Date();
  return (date.innerHTML = `${"<span> Date: </span>"} ${
    d.getUTCDay() + ":" + d.getMonth() + ":" + d.getFullYear()
  }`);
};
