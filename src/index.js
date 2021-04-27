import './main.scss';
import logo from './imgs/sun.png';

const header = document.querySelector('header');

const logoSrc = new Image();
logoSrc.src = logo;
logoSrc.classList.add('logo');
header.appendChild(logoSrc);
