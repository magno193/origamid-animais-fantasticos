export default function initOperation() {
  const operation = document.querySelector('[data-week]');
  const dayWeek = operation.dataset.week.split(',').map(Number);
  const hourWeek = operation.dataset.hour.split(',').map(Number);
  console.log(dayWeek, hourWeek);

  const dataNow = new Date();
  const dayNow = dataNow.getDay();
  const hourNow = dataNow.getHours();

  const openWeek = (dayWeek.indexOf(dayNow) !== -1);
  const openHour = (hourNow >= hourWeek[0] && hourNow < hourWeek[1]);

  if (openWeek && openHour) {
    operation.classList.add('open');
  } else {
    operation.classList.remove('open');
  }
};
