// Logo
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
            <a href="./menu.html">Menu</a>
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


class MenuBundle extends HTMLElement {
  constructor() {
    super();
    this.wrapper = document.createElement("div");
    this.wrapper.innerHTML = `
      <section class="package-bundle flexbox-row">
        <img src="${this.getAttribute("thumbnail")}">
        <div class="flexbox-column">
          <h3>${this.getAttribute("title")}</h3>
          <p>${this.textContent}</p>
        </div>
        <button class="button-primary">
          Add to Cart
        </button>
      </section>
    `;

    console.log(this.attributes);
    this.textContent = "";
    this.appendChild(this.wrapper);
  }
}


if(!customElements.get("menu-bundle"))
  customElements.define("menu-bundle", MenuBundle);
if(!customElements.get("main-nav"))
  customElements.define("main-nav", HeaderNav);
if(!customElements.get("main-header"))
  customElements.define("main-header", Header);
if(!customElements.get("main-footer"))
  customElements.define("main-footer", Footer);