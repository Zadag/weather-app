import logoSrc from '../imgs/sun.png';

const header = document.querySelector('header');

const renderLogo = () => {
  const img = new Image();
  img.src = logoSrc;
  img.classList.add('logo');
  header.appendChild(img);
};

const renderDaily = (daily) => {
  console.log(daily);
};

const renderHourly = (hourly) => {
  console.log(hourly);
};

export { renderLogo, renderDaily, renderHourly };
