import home from './home';
import reset from './reset';
import './style.css';
//import Icon from './icon.png';

console.log(`It's working!`);

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

home();

homeButton.addEventListener('click', () => {
    reset();
    home();
});
