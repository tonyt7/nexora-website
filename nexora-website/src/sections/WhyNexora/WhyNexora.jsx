import './WhyNexora.scss';

const reasons = [
  {
    number: '01',
    title: 'Business-Driven Solutions',
    description:
      'We design around operational needs, business continuity, security and future growth—not simply equipment lists.',
  },
  {
    number: '02',
    title: 'Kuwait-Based Expertise',
    description:
      "Local knowledge and responsive support, with solutions suited to Kuwait's facilities, environments and project requirements.",
  },
  {
    number: '03',
    title: 'Reliable Project Delivery',
    description:
      'From site survey to commissioning, we manage the details that determine installation quality, performance and long-term reliability.',
  },
  {
    number: '04',
    title: 'Integrated Capabilities',
    description:
      'Networking, fiber, telecom, security and ELV delivered through one team, reducing complexity and improving system compatibility.',
  },
  {
    number: '05',
    title: 'Tested & Documented Work',
    description:
      'Proper installation, testing, labeling and documentation make systems easier to operate, maintain and expand.',
  },
  {
    number: '06',
    title: 'Support That Protects Uptime',
    description:
      'Maintenance and troubleshooting help identify issues early, restore performance and extend the working life of your infrastructure.',
  },
];

function WhyNexora() {
  return (
    <section className="why-nexora" id="why-nexora">
      <div className="why-nexora__decoration" aria-hidden="true">
        <svg viewBox="0 0 500 500">
          <path d="M55 95L175 55L265 145L405 85" />
          <path d="M175 55L155 235L285 315L405 245" />
          <path d="M55 95L90 300L155 235" />
          <path d="M155 235L310 170L405 245" />
          <path d="M285 315L365 420L455 350" />

          <circle cx="55" cy="95" r="5" />
          <circle cx="175" cy="55" r="5" />
          <circle cx="265" cy="145" r="5" />
          <circle cx="405" cy="85" r="5" />
          <circle cx="155" cy="235" r="5" />
          <circle cx="90" cy="300" r="5" />
          <circle cx="310" cy="170" r="5" />
          <circle cx="405" cy="245" r="5" />
          <circle cx="285" cy="315" r="5" />
          <circle cx="365" cy="420" r="5" />
          <circle cx="455" cy="350" r="5" />
        </svg>
      </div>

      <div className="why-nexora__container">
        <div className="why-nexora__intro">
          <p className="why-nexora__eyebrow">
            Why Nexora
          </p>

          <h2 className="why-nexora__title">
            One Accountable Partner
            <span>for Critical Systems.</span>
          </h2>

          <p className="why-nexora__lead">
            Technology infrastructure performs best when every system works
            together. Nexora brings networking, fiber, communications,
            security and ELV expertise under one accountable team—from
            initial planning through installation and ongoing support.
          </p>

          <div className="why-nexora__statement">
            <span className="why-nexora__statement-line" />

            <p>
              One team. Integrated systems.
              <strong>Reliable infrastructure.</strong>
            </p>
          </div>
        </div>

        <div className="why-nexora__reasons">
          {reasons.map((reason) => (
            <article
              className="why-nexora__reason"
              key={reason.number}
            >
              <div className="why-nexora__reason-heading">
                <span className="why-nexora__number">
                  {reason.number}
                </span>

                <h3>{reason.title}</h3>
              </div>

              <div
                className="why-nexora__reason-line"
                aria-hidden="true"
              />

              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyNexora;