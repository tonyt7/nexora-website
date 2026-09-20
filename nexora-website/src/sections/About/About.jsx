import networkingImage from '../../assets/images/about/nexora-about-networking.webp';
import securityImage from '../../assets/images/about/nexora-about-security.webp';
import telecomImage from '../../assets/images/about/nexora-about-telecom.webp';

import './About.scss';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <p className="about__eyebrow">About Nexora</p>

          <h2 className="about__title">
            Infrastructure That Keeps
            <span>Your Business Moving.</span>
          </h2>

          <div className="about__copy">
            <p>
              Nexora Communication and Networking Co. delivers reliable
              technology infrastructure for businesses, commercial
              facilities, industrial sites and multi-building developments
              across Kuwait.
            </p>

            <p>
              We design, install, integrate and maintain the systems your
              organization relies on—from structured cabling and fiber
              backbones to IP communications, CCTV, access control and ELV
              solutions.
            </p>

            <p>
              Our goal is simple: reduce disruptions, improve performance
              and build infrastructure that scales. With Kuwait-based
              expertise and hands-on project management, we deliver
              practical solutions suited to local conditions and long-term
              business needs.
            </p>
          </div>
        </div>

        <div className="about__visual">
          <div className="about__collage">
            <figure className="about__photo about__photo--networking">
              <img
                src={networkingImage}
                alt="Professional networking and structured cabling infrastructure"
              />
            </figure>

            <figure className="about__photo about__photo--security">
              <img
                src={securityImage}
                alt="Commercial CCTV and security infrastructure"
              />

            </figure>

            <figure className="about__photo about__photo--telecom">
              <img
                src={telecomImage}
                alt="Business telecom and IP communication systems"
              />

            </figure>

            <div
              className="about__collage-line about__collage-line--top"
              aria-hidden="true"
            />

            <div
              className="about__collage-line about__collage-line--bottom"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;