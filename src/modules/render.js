import logoSrc from '../imgs/sun.png';

const header = document.querySelector('header');
const renderLogo = () => {
  const img = new Image();
  img.src = logoSrc;
  img.classList.add('logo');
  header.appendChild(img);
};

export default renderLogo;
