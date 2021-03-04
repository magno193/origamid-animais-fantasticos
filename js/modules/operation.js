export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operationData() {
    this.dayWeek = this.operation.dataset.week.split(',').map(Number);
    this.hourWeek = this.operation.dataset.hour.split(',').map(Number);
  }

  dataNow() {
    this.dataNow = new Date();
    this.dayNow = this.dataNow.getDay();
    this.hourNow = this.dataNow.getUTCHours() - 3;
  }

  isOpen() {
    const openWeek = (this.dayWeek.indexOf(this.dayNow) !== -1);
    const openHour = (this.hourNow >= this.hourWeek[0] && this.hourNow < this.hourWeek[1]);
    return openWeek && openHour;
  }

  activatesOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.activeClass);
    } else {
      this.operation.classList.remove('open');
    }
  }

  init() {
    if (this.operation) {
      this.operationData();
      this.dataNow();
      this.activatesOpen();
    }
    return this;
  }
}
