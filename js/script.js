// Intentionally minimal: this is a static, fast-loading page.
// Smooth-scroll is handled via CSS (scroll-behavior). No blocking JS on load.

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.pulse span').forEach((el) => {
      el.style.animation = 'none';
      el.style.height = '50%';
      el.style.opacity = '0.6';
    });
  }

  // Theme toggle: dark is the default; a light choice is remembered per visitor.
  const toggle = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const apply = (theme) => {
    const light = theme === 'light';
    if (light) root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(light));
      toggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    }
    if (themeMeta) themeMeta.setAttribute('content', light ? '#F7F4EE' : '#0F1417');
  };
  apply(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable: theme still applies for this visit */ }
    });
  }
});
