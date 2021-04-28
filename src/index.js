import './main.scss';
import renderLogo from './modules/render';
import getDailyWeather from './modules/openWeather';

renderLogo();

const cityInput = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', () => {
  getDailyWeather(cityInput.value);
});

cityInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    getDailyWeather(cityInput.value);
  }
});
