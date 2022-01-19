import 'regenerator-runtime';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/normalize.css';
import '../styles/spinner.css';
import '../styles/detail.css';

import App from './views/app';
import swRegister from './utils/sw-register';

import './views/components/navbar';
import './views/components/hero';
import './views/components/footer-custom';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
