import logoSrc from '../imgs/sun.png';

const header = document.querySelector('header');
const dailyWeather = document.querySelector('#daily-weather');
const hourlyWeather = document.querySelector('#hourly-weather');

const renderLogo = () => {
  const img = new Image();
  img.src = logoSrc;
  img.classList.add('logo');
  header.appendChild(img);
};

const renderDaily = (daily) => {
  console.log(daily);
  const date = new Date();
  const today = date.getDay();

  daily.forEach((day) => {
    const card = document.createElement('div');
    card.classList.add('daily-card');

    const weekday = document.createElement('p');
    weekday.classList.add('weekday');
    weekday.textContent = 'Monday';

    const icon = new Image();
    icon.src = logoSrc;
    icon.classList.add('weather-icon');

    const temperature = document.createElement('h3');
    temperature.classList.add('temperature');
    temperature.textContent = day.temp.day;

    const forecast = document.createElement('p');
    forecast.classList.add('forecast');
    forecast.textContent = day.weather[0].main;

    dailyWeather.appendChild(card);
    card.appendChild(weekday);
    card.appendChild(icon);
    card.appendChild(temperature);
    card.appendChild(forecast);
  });
};

const renderHourly = (hourly) => {
  console.log(hourly);
};

export { renderLogo, renderDaily, renderHourly };
