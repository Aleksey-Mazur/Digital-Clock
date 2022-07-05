setInterval(() => {
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");
  let ampm = document.querySelector(".ampm");

  let hh = document.querySelector("#hh");
  let mm = document.querySelector("#mm");
  let ss = document.querySelector("#ss");

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  // Add zero before single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;

  // 24 hrs clock
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  // 60 minutes
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  // 60 seconds
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // 360 / 24 = 15
  hr_dot.style.transform = `rotate(${h * 15}deg)`;
  // 360 / 60 = 6
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  // 360 / 60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
});
