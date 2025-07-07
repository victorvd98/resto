import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';


const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    home();
});

const aboutButton = document.querySelector('#menu');
aboutButton.addEventListener('click', () => {
    menu();
});

const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', () => {
    contact();
});

