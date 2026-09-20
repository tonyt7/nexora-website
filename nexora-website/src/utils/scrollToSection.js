export function scrollToSection(
  element,
  {
    duration = 1400,
    offset = 100,
  } = {},
) {
  if (!element) return;

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  const startPosition = window.scrollY;

  const targetPosition =
    element.getBoundingClientRect().top
    + window.scrollY
    - offset;

  const distance = targetPosition - startPosition;

  if (reducedMotion) {
    window.scrollTo(0, targetPosition);
    return;
  }

  // Slightly increase duration for longer journeys.
  const distanceFactor = Math.min(
    Math.abs(distance) / 2000,
    1,
  );

  const finalDuration =
    duration + (distanceFactor * 500);

  const startTime = performance.now();

  // Smoother acceleration/deceleration than cubic easing.
  const easeInOutQuint = (progress) => (
    progress < 0.5
      ? 16 * progress ** 5
      : 1 - ((-2 * progress + 2) ** 5) / 2
  );

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;

    const progress = Math.min(
      elapsed / finalDuration,
      1,
    );

    const easedProgress = easeInOutQuint(progress);

    window.scrollTo(
      0,
      startPosition + (distance * easedProgress),
    );

    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
}