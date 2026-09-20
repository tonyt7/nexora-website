import './SolutionIcon.scss';

function SolutionIcon({ type }) {
  const icons = {
    network: (
      <>
        <rect x="5" y="5" width="14" height="10" rx="1.5" />
        <path d="M9 19h6" />
        <path d="M12 15v4" />
        <path d="M8 9h1" />
        <path d="M11.5 9h1" />
        <path d="M15 9h1" />
      </>
    ),

    fiber: (
      <>
        <path d="M5 6h5a4 4 0 0 1 4 4v8" />
        <path d="M5 10h4a2 2 0 0 1 2 2v6" />
        <path d="M5 14h2a1 1 0 0 1 1 1v3" />
        <circle cx="5" cy="6" r="1" />
        <circle cx="5" cy="10" r="1" />
        <circle cx="5" cy="14" r="1" />
        <path d="M11 18h6" />
        <path d="M14 15v6" />
      </>
    ),

    telecom: (
      <>
        <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="M8 7h8" />
        <path d="M8 11h2" />
        <path d="M14 11h2" />
        <path d="M8 15h2" />
        <path d="M14 15h2" />
      </>
    ),

    security: (
      <>
        <path d="M4 8h11l4 3-4 3H4Z" />
        <circle cx="10" cy="11" r="2" />
        <path d="M7 14v4" />
        <path d="M5 20h4" />
      </>
    ),

    elv: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="1.5" />
        <path d="M9 20h6" />
        <path d="M12 16v4" />
        <path d="m9 11 2 2 4-4" />
      </>
    ),

    maintenance: (
      <>
        <path d="M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-3 3-3-3Z" />
      </>
    ),
  };

  return (
    <div className="solution-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[type]}
      </svg>
    </div>
  );
}

export default SolutionIcon;