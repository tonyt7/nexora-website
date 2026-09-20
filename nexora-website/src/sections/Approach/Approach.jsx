import './Approach.scss';

const steps = [
  {
    id: 'assess',
    title: 'Assess',
    description:
      'We review your site, requirements, existing infrastructure, risks and operational priorities.',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We develop a practical solution balancing performance, scalability, budget and maintainability.',
  },
  {
    id: 'install',
    title: 'Install',
    description:
      'Our team delivers organised, quality-focused installation with attention to safety and site conditions.',
  },
  {
    id: 'integrate',
    title: 'Integrate',
    description:
      'We coordinate networking, communications, security and ELV systems so the infrastructure works together.',
  },
  {
    id: 'test',
    title: 'Test',
    description:
      'Systems are tested, verified and documented before handover, with issues resolved before completion.',
  },
  {
    id: 'support',
    title: 'Support',
    description:
      'We provide ongoing maintenance, troubleshooting, upgrades and support as your requirements evolve.',
  },
];

function ApproachIcon({ type }) {
  const icons = {
    assess: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5" />
      </>
    ),

    design: (
      <>
        <path d="M5 3h10l4 4v6" />
        <path d="M15 3v4h4" />
        <path d="M8 10h5" />
        <path d="M8 14h3" />
        <path d="m13 18 5.5-5.5 2 2L15 20h-2v-2Z" />
      </>
    ),

    install: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="m4.93 4.93 2.12 2.12" />
        <path d="m16.95 16.95 2.12 2.12" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.93 19.07 2.12-2.12" />
        <path d="m16.95 7.05 2.12-2.12" />
      </>
    ),

    integrate: (
      <>
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5" cy="18" r="2.5" />
        <circle cx="19" cy="18" r="2.5" />
        <path d="M12 7.5v4" />
        <path d="m10.5 11.5-4 4" />
        <path d="m13.5 11.5 4 4" />
      </>
    ),

    test: (
      <>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),

    support: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14v3a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2Z" />
        <path d="M20 14v3a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2Z" />
        <path d="M16 19c0 1.1-.9 2-2 2h-2" />
      </>
    ),
  };

  return (
    <svg
      className="approach__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="approach__container">
        <header className="approach__header">
          <p className="approach__eyebrow">
            Our Approach
          </p>

          <h2 className="approach__title">
            From First Survey to
            <span>Long-Term Support.</span>
          </h2>

          <p className="approach__intro">
            A structured delivery process keeps projects clear, coordinated
            and focused on long-term reliability.
          </p>
        </header>

        <div className="approach__process">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <article
                className="approach__step"
                key={step.id}
              >
                <div className="approach__network">
                  {/* Fibre arriving from the previous step */}
                  <div
                    className="approach__incoming"
                    aria-hidden="true"
                  >
                    <span className="approach__incoming-line" />
                    <span className="approach__incoming-signal" />
                  </div>

                  {/* Device / router style box */}
                  <div className="approach__device">
                    {/* Fibre port on LEFT only */}
                    <div
                      className="approach__port"
                      aria-hidden="true"
                    >
                      <span className="approach__port-ring" />
                      <span className="approach__port-core" />
                    </div>

                    <div className="approach__device-content">
                      <ApproachIcon type={step.id} />

                      <h3>{step.title}</h3>
                    </div>

                    {/* Small router status lights */}
                    <div
                      className="approach__status"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  {/* Connection generated towards next device */}
                  {!isLast && (
                    <div
                      className="approach__connection"
                      aria-hidden="true"
                    >
                      <span className="approach__fiber">
                        <span className="approach__fiber-signal" />
                      </span>

                      <span className="approach__connector">
                        <span className="approach__connector-core" />
                      </span>
                    </div>
                  )}
                </div>

                <div className="approach__content">
                  <span
                    className="approach__content-line"
                    aria-hidden="true"
                  />

                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Approach;