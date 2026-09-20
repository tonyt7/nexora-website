import { Link } from 'react-router-dom';

import './ContactCTA.scss';

function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div
        className="contact-cta__decoration"
        aria-hidden="true"
      >
        <svg
      className="footer__mark-svg"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer hexagon */}
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

      {/* Main N - left vertical and diagonal */}
      <path
        className="footer__mark-circuit"
        d="
          M35 35
          L35 78
        "
      />

      <path
        className="footer__mark-circuit"
        d="
          M35 35
          L79 65
        "
      />

      {/* Upper right circuit */}
      <path
        className="footer__mark-circuit"
        d="
          M62 30
          L79 41
          L79 65
        "
      />

      {/* Lower N */}
      <path
        className="footer__mark-circuit"
        d="
          M48 61
          L48 82
          L62 91
        "
      />

      <path
        className="footer__mark-circuit"
        d="
          M48 61
          L81 83
          L92 76
          L92 46
        "
      />

      {/* Nodes */}
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
      </div>

      <div className="contact-cta__container">
        <div className="contact-cta__content">
          <p className="contact-cta__eyebrow">
            Let's Work Together
          </p>

          <h2 className="contact-cta__title">
            Make Your Infrastructure
            <span>More Reliable.</span>
          </h2>

          <p className="contact-cta__description">
            Whether you are developing a new facility, upgrading an
            existing network, improving site security or looking for
            dependable ongoing support, Nexora can help you plan and
            deliver the right solution.
          </p>

          <Link
            className="contact-cta__button"
            to="/contact"
          >
            <span>Request a Consultation</span>

            <span
              className="contact-cta__button-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        <div className="contact-cta__details">
          <a
            className="contact-cta__detail"
            href="mailto:siby@nexoracn.com"
          >
            <span className="contact-cta__detail-number">
              01
            </span>

            <span className="contact-cta__detail-content">
              <span className="contact-cta__detail-label">
                Email Nexora
              </span>

              <strong>siby@nexoracn.com</strong>
            </span>

            <span
              className="contact-cta__detail-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <a
            className="contact-cta__detail"
            href="tel:+96566836096"
          >
            <span className="contact-cta__detail-number">
              02
            </span>

            <span className="contact-cta__detail-content">
              <span className="contact-cta__detail-label">
                Call Nexora
              </span>

              <strong>+965 6683 6096</strong>
            </span>

            <span
              className="contact-cta__detail-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

<a
  className="contact-cta__detail contact-cta__detail--location"
  href="https://www.google.com/maps/search/?api=1&query=Qais+Al+Ghanem+Complex+Fahaheel+Kuwait"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="contact-cta__detail-number">
    03
  </span>

  <span className="contact-cta__detail-content">
    <span className="contact-cta__detail-label">
      Visit Nexora
    </span>

    <strong>Fahaheel, Kuwait</strong>

    <span className="contact-cta__address">
      Qais Al Ghanem Complex, Office 401,
      4th Floor
    </span>
  </span>

  <span
    className="contact-cta__detail-arrow"
    aria-hidden="true"
  >
    ↗
  </span>
</a>
        </div>
      </div>

    </section>
  );
}

export default ContactCTA;