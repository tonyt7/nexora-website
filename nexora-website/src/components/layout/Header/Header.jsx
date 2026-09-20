import { useState } from 'react';
import { Link } from 'react-router-dom';

import { navigation } from '../../../data/navigation';
import logo from '../../../assets/logo/nexora-logo.png';

import './Header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__top">
        <div className="site-header__container">
          <Link
  to="/"
  className="site-header__brand"
  aria-label="Nexora home"
>
  <img
    src={logo}
    alt="Nexora Communication and Networking Co."
    className="site-header__logo"
  />

  <div className="site-header__company-name">
    <span
      className="site-header__company-name-arabic"
      lang="ar"
      dir="rtl"
    >
      شركة نيكسورا للاتصالات والشبكات
    </span>

    <span className="site-header__company-name-english">
      Nexora Communication and Networking Co.
    </span>
  </div>
</Link>

          <div className="site-header__contact">
            <a
              href="mailto:siby@nexoracn.com"
              className="site-header__contact-link"
            >
              <span
                className="site-header__contact-icon"
                aria-hidden="true"
              >
                ✉
              </span>

              <span>siby@nexoracn.com</span>
            </a>

            <a
              href="tel:+96566836096"
              className="site-header__contact-link"
            >
              <span
                className="site-header__contact-icon"
                aria-hidden="true"
              >
                ☎
              </span>

              <span>+965 6683 6096</span>
            </a>
          </div>

          <button
            className={`site-header__menu-toggle ${
              menuOpen ? 'is-active' : ''
            }`}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="site-header__navigation">
        <div className="site-header__container">
          <nav
            id="primary-navigation"
            className={`site-header__nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Primary navigation"
          >
            <ul className="site-header__nav-list">
              {navigation.map((item) => (
                <li
                  key={item.label}
                  className="site-header__nav-item"
                >
                  {item.href.startsWith('/#') ? (
                    <a
                      href={item.href}
                      className="site-header__nav-link"
                      onClick={handleNavigation}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="site-header__nav-link"
                      onClick={handleNavigation}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="site-header__cta"
              onClick={handleNavigation}
            >
              <span>Request a Consultation</span>
              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;