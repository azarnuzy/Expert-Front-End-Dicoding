class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header__inner">
        <h1 class="header__title" tabindex="0">Azar's Resto</h1>
      </div>
      <div class="hamburger-menu">
        <a
          id="menu"
          class="hamburger-menu__icon"
          tabindex="0"
          aria-label="navigation-menu"
          >☰</a
        >
      </div>
      <nav id="drawer" class="nav open">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">HOME</a></li>
          <li class="nav__item"><a href="#/favorite">FAVORITE</a></li>
          <li class="nav__item">
            <a href="https://github.com/azarnuzy" target="_blank">ABOUT</a>
          </li>
        </ul>
      </nav>
      `;
  }
}

customElements.define('nav-bar', Navbar);
