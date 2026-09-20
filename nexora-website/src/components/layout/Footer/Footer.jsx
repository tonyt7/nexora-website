import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const companyLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Our Approach', href: '/#approach' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Contact Us', href: '/contact' },
];

const solutionLinks = [
  'Networking & Structured Cabling',
  'Fiber Optic Solutions',
  'Telecom & IP Communication',
  'CCTV & Security',
  'ELV Systems',
  'Maintenance & Support',
];

function NexoraMark() {
  return (
    <svg
      className="footer__mark-svg"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="footer__mark-hex"
        d="
          M60 6
          L106 33
          L106 87
          L60 114
          L14 87
          L14 33
          Z
        "
      />

      <path
        className="footer__mark-circuit"
        d="M35 35 L35 78"
      />

      <path
        className="footer__mark-circuit"
        d="M35 35 L79 65"
      />

      <path
        className="footer__mark-circuit"
        d="M62 30 L79 41 L79 65"
      />

      <path
        className="footer__mark-circuit"
        d="M48 61 L48 82 L62 91"
      />

      <path
        className="footer__mark-circuit"
        d="M48 61 L81 83 L92 76 L92 46"
      />

      <circle
        className="footer__mark-node"
        cx="35"
        cy="35"
        r="4.5"
      />

      <circle
        className="footer__mark-node"
        cx="35"
        cy="78"
        r="4.5"
      />

      <circle
        className="footer__mark-node"
        cx="62"
        cy="30"
        r="4.5"
      />

      <circle
        className="footer__mark-node"
        cx="79"
        cy="65"
        r="4.5"
      />

      <circle
        className="footer__mark-node"
        cx="62"
        cy="91"
        r="4.5"
      />

      <circle
        className="footer__mark-node"
        cx="92"
        cy="46"
        r="4.5"
      />
    </svg>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((current) => (
      current === section ? null : section
    ));
  };

  const handleAnchorClick = () => {
    window.setTimeout(() => {
      const hash = window.location.hash;

      if (!hash) {
        return;
      }

      const section = document.querySelector(hash);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 0);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <Link
              className="footer__mark"
              to="/"
              aria-label="Nexora home"
            >
              <NexoraMark />
            </Link>

            <p className="footer__company-name">
              Nexora Communication and Networking Co.
            </p>

            <p
              className="footer__company-name footer__company-name--arabic"
              lang="ar"
              dir="rtl"
            >
              شركة نيكسورا للاتصالات والشبكات
            </p>

            <p className="footer__description">
              Reliable networking, fiber, telecom, security and ELV
              infrastructure for businesses and facilities across Kuwait.
            </p>

            <div className="footer__status">
              <span
                className="footer__status-dot"
                aria-hidden="true"
              />

              <span>
                Kuwait-based technology infrastructure
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="footer__column">
            <div
              className={`footer__accordion${
                openSection === 'company'
                  ? ' footer__accordion--open'
                  : ''
              }`}
            >
              <button
                className="footer__heading"
                type="button"
                onClick={() => toggleSection('company')}
                aria-expanded={openSection === 'company'}
                aria-controls="footer-company"
              >
                <span>Company</span>

                <span
                  className="footer__accordion-icon"
                  aria-hidden="true"
                />
              </button>

              <div
                className="footer__accordion-content"
                id="footer-company"
              >
                <nav aria-label="Footer navigation">
                  <ul className="footer__links">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          onClick={handleAnchorClick}
                        >
                          <span aria-hidden="true">
                            →
                          </span>

                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="footer__column">
            <div
              className={`footer__accordion${
                openSection === 'solutions'
                  ? ' footer__accordion--open'
                  : ''
              }`}
            >
              <button
                className="footer__heading"
                type="button"
                onClick={() => toggleSection('solutions')}
                aria-expanded={openSection === 'solutions'}
                aria-controls="footer-solutions"
              >
                <span>Solutions</span>

                <span
                  className="footer__accordion-icon"
                  aria-hidden="true"
                />
              </button>

              <div
                className="footer__accordion-content"
                id="footer-solutions"
              >
                <ul className="footer__links footer__links--solutions">
                  {solutionLinks.map((solution) => (
                    <li key={solution}>
                      <Link
                        to="/#solutions"
                        onClick={handleAnchorClick}
                      >
                        {solution}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="footer__column footer__column--contact">
            <div
              className={`footer__accordion${
                openSection === 'contact'
                  ? ' footer__accordion--open'
                  : ''
              }`}
            >
              <button
                className="footer__heading"
                type="button"
                onClick={() => toggleSection('contact')}
                aria-expanded={openSection === 'contact'}
                aria-controls="footer-contact"
              >
                <span>Get in Touch</span>

                <span
                  className="footer__accordion-icon"
                  aria-hidden="true"
                />
              </button>

              <div
                className="footer__accordion-content"
                id="footer-contact"
              >
                <div className="footer__contact">
                  <div className="footer__contact-item">
                    <span className="footer__contact-label">
                      Email
                    </span>

                    <a href="mailto:siby@nexoracn.com">
                      siby@nexoracn.com
                    </a>
                  </div>

                  <div className="footer__contact-item">
                    <span className="footer__contact-label">
                      Phone
                    </span>

                    <a href="tel:+96566836096">
                      +965 6683 6096
                    </a>
                  </div>

                  <div className="footer__contact-item">
                    <span className="footer__contact-label">
                      Office
                    </span>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Qais+Al+Ghanem+Complex+Fahaheel+Kuwait"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Qais Al Ghanem Complex

                      <span>
                        Office 401, 4th Floor
                        <br />
                        Fahaheel, Kuwait
                      </span>
                    </a>
                  </div>
                </div>

                <Link
                  className="footer__contact-link"
                  to="/contact"
                >
                  Contact Nexora

                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>
            © {currentYear} Nexora Communication and Networking Co.
            All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;