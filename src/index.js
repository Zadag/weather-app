import './main.scss';
import { renderLogo, renderDaily, clearDaily } from './modules/render';
import getWeather from './modules/openWeather';

renderLogo();

const cityInput = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', () => {
  getWeather(cityInput.value);
});

cityInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    getWeather(cityInput.value).then((value) => {
      console.log(value);
      clearDaily();
      renderDaily(value.daily);
    });
  }
});
