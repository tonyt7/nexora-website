import { solutions } from '../../data/solutions';
import SolutionIcon from '../../components/ui/SolutionIcon/SolutionIcon';

import './Solutions.scss';

function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__container">
        <header className="solutions__header">
          <p className="solutions__eyebrow">Our Solutions</p>

          <h2 className="solutions__title">
            Technology Infrastructure,
            <span>Delivered End to End.</span>
          </h2>

          <p className="solutions__intro">
            From network foundations to integrated security and
            communications, Nexora delivers practical technology solutions
            designed around the way your business operates.
          </p>
        </header>

        <div className="solutions__grid">
          {solutions.map((solution) => (
            <article
  className="solutions__card"
  key={solution.id}
>
  <div className="solutions__card-line" aria-hidden="true" />

  <div className="solutions__image-wrapper">
    <img
      className="solutions__image"
      src={solution.image}
      alt=""
      loading="lazy"
    />

    <div className="solutions__image-overlay" aria-hidden="true" />
  </div>

  <div className="solutions__card-body">
    <div className="solutions__card-top">
      <SolutionIcon type={solution.icon} />

      <span className="solutions__number">
        {solution.number}
      </span>
    </div>

    <h3 className="solutions__card-title">
      {solution.title}
    </h3>

    <p className="solutions__description">
      {solution.description}
    </p>

    <ul className="solutions__highlights">
      {solution.highlights.map((highlight) => (
        <li key={highlight}>
          {highlight}
        </li>
      ))}
    </ul>

    <a
      className="solutions__link"
      href={`/contact?solution=${solution.id}`}
    >
      <span>Discuss this solution</span>

      <span
        className="solutions__link-arrow"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  </div>
</article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;