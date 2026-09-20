import { useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import logo from '../../../assets/logo/nexora-logo.png';
import { navigation } from '../../../data/navigation';
import { scrollToSection } from '../../../utils/scrollToSection';

import './Header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (event, href) => {
    setMenuOpen(false);

    // Normal page link, e.g. /contact.
    if (!href.includes('#')) {
      return;
    }

    event.preventDefault();

    const [path, hash] = href.split('#');

    const scrollToTarget = () => {
      const element = document.getElementById(hash);

      if (!element) {
        return;
      }

      scrollToSection(element, {
        duration: 1400,
        offset: 100,
      });
    };

    // Already on the page containing the section.
    if (location.pathname === path) {
      scrollToTarget();

      window.history.replaceState(
        null,
        '',
        `${path}#${hash}`,
      );

      return;
    }

    // Navigate back to the homepage first.
    navigate(`${path}#${hash}`);

    // Wait for the homepage sections to render.
    window.setTimeout(() => {
      scrollToTarget();
    }, 50);
  };

  return (
    <header className="site-header" id="home">
      {/* Top header */}
      <div className="site-header__top">
        <div className="site-header__container">
          <Link
            to="/"
            className="site-header__brand"
            aria-label="Nexora home"
            onClick={() => setMenuOpen(false)}
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

          {/* Contact information */}
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

              <span>
                siby@nexoracn.com
              </span>
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

              <span>
                +965 6683 6096
              </span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`site-header__menu-toggle ${
              menuOpen ? 'is-active' : ''
            }`}
            type="button"
            aria-label={
              menuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => {
              setMenuOpen((current) => !current);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="site-header__navigation">
        <div className="site-header__container">
          <nav
            id="primary-navigation"
            className={`site-header__nav ${
              menuOpen ? 'is-open' : ''
            }`}
            aria-label="Primary navigation"
          >
            <ul className="site-header__nav-list">
              {navigation.map((item) => {
                const isSectionLink = item.href.includes('#');

                return (
                  <li
                    key={item.label}
                    className="site-header__nav-item"
                  >
                    {isSectionLink ? (
                      <a
                        href={item.href}
                        className="site-header__nav-link"
                        onClick={(event) => {
                          handleNavigation(
                            event,
                            item.href,
                          );
                        }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="site-header__nav-link"
                        onClick={() => {
                          setMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <Link
              to="/contact"
              className="site-header__cta"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <span>
                Request a Consultation
              </span>

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;