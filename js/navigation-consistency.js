/**
 * Portafolio 2026 — predictable routes.
 * Every in-page link to #proyectos reveals the project index before
 * the browser scrolls to it. Case studies and app links keep their real URLs.
 */
document.addEventListener('DOMContentLoaded', () => {
  const cases = document.querySelector('#proyectos .case-studies-disclosure');
  if (!cases) return;

  const revealCases = () => {
    cases.open = true;
  };

  document.querySelectorAll('a[href="#proyectos"]').forEach(link => {
    link.addEventListener('click', revealCases);
  });

  if (window.location.hash === '#proyectos') revealCases();
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#proyectos') revealCases();
  });
});
