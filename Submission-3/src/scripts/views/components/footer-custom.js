class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <ul>
          <li>Copyrigth © 2021 - Azar's Resto</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-custom', FooterCustom);
