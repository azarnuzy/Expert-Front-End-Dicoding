import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/normalize.css';
import '../styles/spinner.css';
import '../styles/detail.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
