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

const getWeekday = (dayNum) => {
  if (dayNum === 0) return 'Sunday';
  if (dayNum === 1) return 'Monday';
  if (dayNum === 2) return 'Tuesday';
  if (dayNum === 3) return 'Wedensday';
  if (dayNum === 4) return 'Thursday';
  if (dayNum === 5) return 'Friday';
  if (dayNum === 6) return 'Saturday';
};

const getFromattedTime = () => {
  const date = new Date();
  const hour = date.getHours();
  let minute = date.getMinutes().toString();
  if (minute < 10) minute = `0${minute}`;
  if (date.getHours() > 12) {
    return `${hour - 12}:${minute} pm`;
  }
  return `${hour}:${minute} am`;
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

  for (let i = 0; i < 7; i += 1) {
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

    const tempeartureContainer = document.createElement('div');
    tempeartureContainer.classList.add('temperature-container');
    const degreeImg = new Image();
    degreeImg.classList.add('degree-img');

    const temperature = document.createElement('h3');
    temperature.classList.add('temperature');
    temperature.textContent = `${daily[i].temp.day}`;

    const forecast = document.createElement('p');
    forecast.classList.add('forecast');
    forecast.textContent = daily[i].weather[0].description;

    dailyWeather.appendChild(card);
    card.appendChild(weekday);
    card.appendChild(icon);
    card.appendChild(tempeartureContainer);
    tempeartureContainer.appendChild(temperature);
    tempeartureContainer.appendChild(degreeImg);
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

const renderSummary = (current) => {
  const currentDate = new Date();

  const dateAndTimeContainer = document.createElement('div');
  dateAndTimeContainer.classList.add('date-and-time-container');

  const day = document.createElement('p');
  day.classList.add('summary-day');
  const today = getWeekday(currentDate.getDay()); // weekday as a string
  day.textContent = today;

  const time = document.createElement('p');
  time.classList.add('summary-time');
  time.textContent = getFromattedTime();

  const weatherImg = new Image();
  weatherImg.classList.add('weather-summary-image');
  if (current.weather[0].main === 'Clouds') weatherImg.src = cloudy;
  if (current.weather[0].main === 'Clear') weatherImg.src = sunny;
  if (current.weather[0].main === 'Rain') weatherImg.src = rain;
  if (current.weather[0].main === 'Snow') weatherImg.src = snow;
  if (current.weather[0].main === 'Wind') weatherImg.src = windy;
  if (current.weather[0].main === 'Lightning') weatherImg.src = lightning;

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('weather-desc-container');

  const weatherDescription = document.createElement('p');
  weatherDescription.classList.add('summary-weather-description');
  const weatherDescString = current.weather[0].description.replace(
    current.weather[0].description[0],
    current.weather[0].description[0].toUpperCase(),
  );
  weatherDescription.textContent = weatherDescString;

  const temperature = document.createElement('p');
  temperature.classList.add('summary-temperature');
  temperature.textContent = `${current.temp}`;

  const feelsLike = document.createElement('p');
  feelsLike.textContent = `Feels like: ${current.feels_like}`;

  const humidity = document.createElement('p');
  humidity.classList.add('summary-humidity');
  humidity.textContent = `Humitidy: ${current.humidity}%`;

  const conatiner = document.getElementById('weather-summary');
  conatiner.appendChild(dateAndTimeContainer);
  dateAndTimeContainer.appendChild(day);
  dateAndTimeContainer.appendChild(time);
  conatiner.appendChild(weatherImg);
  conatiner.appendChild(descriptionContainer);
  descriptionContainer.appendChild(weatherDescription);
  descriptionContainer.appendChild(temperature);
  descriptionContainer.appendChild(feelsLike);
  descriptionContainer.appendChild(humidity);
};

export { renderLogo, renderDaily, clearDaily, renderSummary };
