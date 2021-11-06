import WebLogo from './logo.svg'

class Header extends HTMLElement {
  constructor() {
    super();
    this.wrapper = document.createElement('div');
    this.wrapper.innerHTML = `
        <header id="banner">
          <nav class="flexbox-space-between flexbox-vcenter">
            <object type="image/svg+xml" data="${WebLogo}" id="logo-banner">
              Wuenak Tenan
            </object>
            <div class="nav-links flexbox-space-between">
              <a>About Us</a>
              <a>Menu</a>
              <a>Order Status</a>
              <a>Contact Us</a>
            </div>
          </nav>
          <h1 id="WOTD" class="flexbox-center font-light">Perut Kenyang,<br/>Dompet Aman</h1>
        </header>
    `;

    this.appendChild(this.wrapper);
    console.log(this);
  }
}

customElements.define('main-header', Header);
