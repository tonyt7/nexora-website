import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ContactForm from './ContactForm';
import './Contact.scss';

function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });

      return;
    }

    const element = document.querySelector(location.hash);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [location.hash]);

  return (
    <div className="contact-page" id="contact-top">
      {/* Hero */}
      <section className="contact-page__hero">
        <div
          className="contact-page__hero-grid"
          aria-hidden="true"
        />

        <div className="contact-page__container">
          <div className="contact-page__hero-content">
            <p className="contact-page__eyebrow">
              Contact Nexora
            </p>

            <h1 className="contact-page__title">
              Let&apos;s Build Infrastructure
              <span>That Works for Your Business.</span>
            </h1>

            <p className="contact-page__lead">
              Planning a new installation, upgrading existing
              systems, or looking for dependable technical
              support? Tell us what you need and our team will
              get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-page__main">
        <div className="contact-page__container">
          <div className="contact-page__layout">
            {/* Contact information */}
            <aside className="contact-page__info">
              <div
                className="contact-page__info-pattern"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30 80H110L145 115H235" />
                  <path d="M70 145H155L195 185H270" />
                  <path d="M25 220H105L145 180" />

                  <circle cx="30" cy="80" r="5" />
                  <circle cx="235" cy="115" r="5" />
                  <circle cx="70" cy="145" r="5" />
                  <circle cx="270" cy="185" r="5" />
                  <circle cx="25" cy="220" r="5" />
                </svg>
              </div>

              <div className="contact-page__info-content">
                <p className="contact-page__info-eyebrow">
                  Start a Conversation
                </p>

                <h2>
                  Tell us what you&apos;re
                  <span>working on.</span>
                </h2>

                <p className="contact-page__info-intro">
                  Whether you have a defined project or are still
                  exploring your options, speak to Nexora about
                  the infrastructure your business needs.
                </p>

                <div className="contact-page__details">
                  {/* Email */}
                  <a
                    className="contact-page__detail"
                    href="mailto:siby@nexoracn.com"
                  >
                    <span className="contact-page__detail-number">
                      01
                    </span>

                    <span className="contact-page__detail-content">
                      <span className="contact-page__detail-label">
                        Email
                      </span>

                      <strong>
                        siby@nexoracn.com
                      </strong>
                    </span>

                    <span
                      className="contact-page__detail-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>

                  {/* Phone */}
                  <a
                    className="contact-page__detail"
                    href="tel:+96566836096"
                  >
                    <span className="contact-page__detail-number">
                      02
                    </span>

                    <span className="contact-page__detail-content">
                      <span className="contact-page__detail-label">
                        Phone
                      </span>

                      <strong>
                        +965 6683 6096
                      </strong>
                    </span>

                    <span
                      className="contact-page__detail-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>

                  {/* Office */}
                  <a
                    className="contact-page__detail"
                    href="https://www.google.com/maps/search/?api=1&query=Qais+Al+Ghanem+Complex+Fahaheel+Kuwait"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-page__detail-number">
                      03
                    </span>

                    <span className="contact-page__detail-content">
                      <span className="contact-page__detail-label">
                        Office
                      </span>

                      <strong>
                        Fahaheel, Kuwait
                      </strong>

                      <span className="contact-page__detail-address">
                        Qais Al Ghanem Complex
                        <br />
                        Office 401, 4th Floor
                      </span>
                    </span>

                    <span
                      className="contact-page__detail-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </div>

                <div className="contact-page__info-footer">
                  <span
                    className="contact-page__status-dot"
                    aria-hidden="true"
                  />

                  <span>
                    Kuwait-based technology infrastructure
                  </span>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div
              className="contact-page__form-panel"
              id="contact-form"
            >
              <div className="contact-page__form-heading">
                <p className="contact-page__form-eyebrow">
                  Request a Consultation
                </p>

                <h2>
                  How can we help?
                </h2>

                <p>
                  Share a few details about your requirements and
                  we&apos;ll get in touch to discuss the next steps.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;