import './Industries.scss';

import commercialImage from '../../assets/images/industries/nexora-industry-commercial.webp';
import industrialImage from '../../assets/images/industries/nexora-industry-industrial.webp';
import corporateImage from '../../assets/images/industries/nexora-industry-corporate.webp';
import residentialImage from '../../assets/images/industries/nexora-industry-residential.webp';

const industries = [
  {
    id: 'commercial',
    number: '01',
    title: 'Commercial',
    image: commercialImage,
    sectors: ['Offices', 'Retail', 'Shopping Centers', 'Business Facilities'],
    description:
      'Reliable connectivity, communications and security infrastructure for productive customer and employee environments.',
  },
  {
    id: 'industrial',
    number: '02',
    title: 'Industrial',
    image: industrialImage,
    sectors: ['Factories', 'Workshops', 'Oil & Gas', 'Industrial Sites'],
    description:
      'Robust infrastructure designed for demanding operations, site visibility and dependable communication.',
  },
  {
    id: 'corporate',
    number: '03',
    title: 'Corporate',
    image: corporateImage,
    sectors: ['Corporate Offices', 'IT Infrastructure', 'Meeting Spaces'],
    description:
      'Integrated systems that support collaboration, control and business continuity across modern workplaces.',
  },
  {
    id: 'residential',
    number: '04',
    title: 'Residential & Multi-Building',
    image: residentialImage,
    sectors: ['Residential Buildings', 'Villas', 'Apartments', 'Developments'],
    description:
      'Scalable networking, surveillance, access and communication infrastructure for connected properties.',
  },
];

function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries__container">
        <header className="industries__header">
          <div className="industries__heading">
            <p className="industries__eyebrow">
              Industries We Support
            </p>

            <h2 className="industries__title">
              Infrastructure Designed for
              <span>the Environments You Operate In.</span>
            </h2>
          </div>

          <p className="industries__intro">
            From offices and commercial facilities to industrial sites and
            multi-building developments, Nexora delivers infrastructure
            designed around the demands of each environment.
          </p>
        </header>

        <div className="industries__grid">
          {industries.map((industry) => (
            <article
              className={`industries__item industries__item--${industry.id}`}
              key={industry.id}
            >
              <img
                className="industries__image"
                src={industry.image}
                alt=""
                loading="lazy"
              />

              <div
                className="industries__overlay"
                aria-hidden="true"
              />

              <div className="industries__content">
                <div className="industries__top">
                  <span className="industries__number">
                    {industry.number}
                  </span>

                  <span
                    className="industries__indicator"
                    aria-hidden="true"
                  >
                    <span />
                  </span>
                </div>

                <div className="industries__body">
                  <h3>{industry.title}</h3>

                  <div className="industries__sectors">
                    {industry.sectors.map((sector) => (
                      <span key={sector}>{sector}</span>
                    ))}
                  </div>

                  <span
                    className="industries__line"
                    aria-hidden="true"
                  />

                  <p>{industry.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;