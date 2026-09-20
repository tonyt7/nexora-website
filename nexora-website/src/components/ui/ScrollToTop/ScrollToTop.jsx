import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './ScrollToTop.scss';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const targetId = location.pathname === '/'
      ? 'home'
      : 'contact-top';

    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    // Remove the current hash first.
    // This allows the same anchor to be triggered repeatedly.
    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search,
    );

    // Trigger native anchor navigation.
    window.location.hash = targetId;
  };

  return (
    <button
      className={`scroll-to-top${
        isVisible ? ' scroll-to-top--visible' : ''
      }`}
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <span
        className="scroll-to-top__arrow"
        aria-hidden="true"
      >
        ↑
      </span>
    </button>
  );
}

export default ScrollToTop;