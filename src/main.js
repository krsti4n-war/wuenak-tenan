import WebLogo from './logo.svg';
import LineLogo from './logo-ln.png';
import FacebookLogo from './logo-fb.png';
import InstagramLogo from './logo-ig.png';

class HeaderNav extends HTMLElement {
  constructor() {
    super();
    this.wrapper = document.createElement('div');
    this.wrapper.innerHTML = `
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
    `;

    this.appendChild(this.wrapper);
  }
};


class Header extends HTMLElement {
  constructor() {
    super();
    this.wrapper = document.createElement('div');
    this.wrapper.innerHTML = `
        <header id="banner">
          <main-nav></main-nav>
          <h1 id="WOTD" class="flexbox-center font-light">Perut Kenyang,<br/>Dompet Aman</h1>
        </header>
    `;

    this.appendChild(this.wrapper);
  }
}


class Footer extends HTMLElement {
  constructor() {
    super();
    this.wrapper = document.createElement('div');
    this.wrapper.innerHTML = `
        <footer id="footer">
          <hr/>
          <div class="flexbox-space-between">
            <section id="contact-us" class="flexbox-column flexbox-align-between">
              <h4>Contact Us</h4>
              <p>081234567890</p>
              <p>wuenak.tenan@gmail.com</p>
              <p>Jl. Kebon Jeruk Raya No. 27 Kebon Jeruk, Jakarta Barat 11530</p>
            </section>
            <object type="image/svg+xml" data="${WebLogo}" id="logo-banner">
              Wuenak Tenan
            </object>
            <section id="social-media-container" class="flexbox-column">
              <h4>Social Media</h4>
              <div class="social-media flexbox-row flexbox-vcenter">
                <img src="${LineLogo}">
                <p>@wuenak.tenan</p>
              </div>
              <div class="social-media flexbox-row flexbox-vcenter">
                <img src="${FacebookLogo}">
                <p>Wuenak Tenan</p>
              </div>
              <div class="social-media flexbox-row flexbox-vcenter">
                <img src="${InstagramLogo}">
                <p>wuenaktenan</p>
              </div>
            </section>
          </div>
          <hr/>
        </footer>
      `;
    this.appendChild(this.wrapper);
  }
}

customElements.define("main-nav", HeaderNav);
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
