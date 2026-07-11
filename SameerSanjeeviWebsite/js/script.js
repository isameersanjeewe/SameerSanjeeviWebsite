// Intentionally minimal — this is a static, fast-loading page.
// Smooth-scroll is handled via CSS (scroll-behavior). No blocking JS on load.

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.pulse span').forEach((el) => {
      el.style.animation = 'none';
      el.style.height = '50%';
      el.style.opacity = '0.6';
    });
  }
});
