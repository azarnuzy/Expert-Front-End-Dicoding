class HeaderHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title" tabindex="0">Welcome to Azar's Resto</h1>
          <button class="hero__button">Read More</button>
        </div>
      </div>
    `;
  }
}

customElements.define('header-hero', HeaderHero);
