import { Link } from 'react-router-dom';

import heroDesktop from '../../assets/images/hero/nexora-hero-desktop.webp';
import heroMobile from '../../assets/images/hero/nexora-hero-mobile.webp';
import './Hero.scss';

function Hero() {
  return (
    <section className="hero" id="hero">
        <picture className="hero__media" aria-hidden="true">
    <source
      media="(max-width: 768px)"
      srcSet={heroMobile}
    />

    <img
      src={heroDesktop}
      alt=""
      className="hero__image"
    />
  </picture>

  <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Networking
            <span>•</span>
            Fiber
            <span>•</span>
            Telecom
            <span>•</span>
            Security
            <span>•</span>
            ELV
          </p>

          <h1 className="hero__title">
            Reliable Technology
            <span>Infrastructure.</span>
            <span className="hero__title-accent">
              Built for Business.
            </span>
          </h1>

          <p className="hero__description">
            Kuwait-based networking, fiber optic, telecom, security
            and ELV solutions that improve reliability, visibility
            and control.
          </p>

          <div className="hero__actions">
            <a
              className="hero__button hero__button--primary"
              href="#solutions"
            >
              <span>Explore Our Solutions</span>
            </a>

            <Link
              className="hero__secondary-link"
              to="/contact"
            >
              <span>Talk to Nexora</span>
              <span
                className="hero__secondary-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;