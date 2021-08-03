class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const targetTime = this.targetDate.getTime();
      const timeComponents = this.getTimeComponents(targetTime - currentTime);

      this.updateTimerFace(this.selector, timeComponents);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTimerFace(selector, { days, hours, mins, secs }) {
    if (!document.querySelector('.timer').hasAttribute('id')) {
      document.querySelector('.timer').setAttribute('id', selector);
    }

    document.querySelector('[data-value="days"]').textContent = days;
    document.querySelector('[data-value="hours"]').textContent = hours;
    document.querySelector('[data-value="mins"]').textContent = mins;
    document.querySelector('[data-value="secs"]').textContent = secs;
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 31, 2021'),
});
