import logoSrc from '../imgs/sun.png';
import cloudy from '../imgs/svgs/wi-cloud.svg';
import sunny from '../imgs/svgs/wi-day-sunny.svg';
import windy from '../imgs/svgs/wi-cloudy-gusts.svg';
import lightning from '../imgs/svgs/wi-day-lightning.svg';
import rain from '../imgs/svgs/wi-day-sprinkle.svg';
import snow from '../imgs/svgs/wi-snow.svg';

const header = document.querySelector('header');
const dailyWeather = document.querySelector('#daily-weather');

const renderLogo = () => {
  const img = new Image();
  img.src = logoSrc;
  img.classList.add('logo');
  header.appendChild(img);
};

const renderDaily = (daily) => {
  console.log(daily);
  const date = new Date();
  let today = date.getDay();
  const daysArr = [];
  daysArr.push(today);
  while (daysArr.length < 8) {
    if (today === 6) {
      today = 0;
    } else {
      today += 1;
    }
    daysArr.push(today);
  }
  console.log(daysArr);

  for (let i = 0; i < 8; i += 1) {
    const card = document.createElement('div');
    card.classList.add('daily-card');

    const weekday = document.createElement('p');
    weekday.classList.add('weekday');
    let day = '';
    if (daysArr[i] === 0) day = 'Sunday';
    if (daysArr[i] === 1) day = 'Monday';
    if (daysArr[i] === 2) day = 'Tuesday';
    if (daysArr[i] === 3) day = 'Wedensday';
    if (daysArr[i] === 4) day = 'Thursday';
    if (daysArr[i] === 5) day = 'Friday';
    if (daysArr[i] === 6) day = 'Saturday';
    weekday.textContent = day;

    const icon = new Image();
    if (daily[i].weather[0].main === 'Clouds') icon.src = cloudy;
    if (daily[i].weather[0].main === 'Clear') icon.src = sunny;
    if (daily[i].weather[0].main === 'Rain') icon.src = rain;
    if (daily[i].weather[0].main === 'Snow') icon.src = snow;
    if (daily[i].weather[0].main === 'Wind') icon.src = windy;
    if (daily[i].weather[0].main === 'Lightning') icon.src = lightning;
    icon.classList.add('weather-icon');

    const temperature = document.createElement('h3');
    temperature.classList.add('temperature');
    temperature.textContent = daily[i].temp.day;

    const forecast = document.createElement('p');
    forecast.classList.add('forecast');
    forecast.textContent = daily[i].weather[0].description;

    dailyWeather.appendChild(card);
    card.appendChild(weekday);
    card.appendChild(icon);
    card.appendChild(temperature);
    card.appendChild(forecast);
  }
};

const clearDaily = () => {
  if (dailyWeather.hasChildNodes) {
    while (dailyWeather.firstChild) {
      dailyWeather.removeChild(dailyWeather.lastChild);
    }
  }
};

export { renderLogo, renderDaily, clearDaily };
