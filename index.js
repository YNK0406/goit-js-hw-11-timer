import refs from "./refs.js";
const { days, hours, mins, secs } = refs;
class CountdownTimer {
  constructor(finishDate, markup) {
    this.finishDate = finishDate;
    this.intID = null;
    this.deltaTime = 0;
    this.markup = markup;
  }
  start() {
    this.intID = setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.finishDate - currentTime;
      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
      this.insertValues(days, hours, mins, secs);
    }, 1000);
  }
  stop() {
    clearInterval(this.intID); 
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  insertValues(d, h, m, s) {
    const { days, hours, mins, secs } = this.markup;
    days.textContent = d;
    hours.textContent = h;
    mins.textContent = m;
    secs.textContent = s;
  }
}
const myTimer = new CountdownTimer(new Date("Dec 31, 2021"), {
  days,
  hours,
  mins,
  secs,
});
myTimer.start();
