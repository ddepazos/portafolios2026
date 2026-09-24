document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('portfolio-grid');
  if (!grid || !window.PORTFOLIO_PROJECTS) return;

  window.PORTFOLIO_PROJECTS.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = project.category;

    const title = document.createElement('h4');
    title.textContent = project.title;

    const summary = document.createElement('p');
    summary.textContent = project.summary;

    const actions = document.createElement('div');
    actions.className = 'project-actions';

    const detailLink = document.createElement('a');
    detailLink.href = project.detail;
    detailLink.className = 'link-button';
    detailLink.textContent = 'Detalle';

    const liveLink = document.createElement('a');
    const hasExternalLive = Boolean(project.live && project.live !== '#' && project.live.startsWith('http'));
    liveLink.href = hasExternalLive ? project.live : project.detail;
    liveLink.target = hasExternalLive ? '_blank' : '_self';
    liveLink.rel = hasExternalLive ? 'noreferrer' : '';
    liveLink.className = 'link-button primary';
    liveLink.textContent = hasExternalLive ? 'Live' : 'Ver caso';

    actions.append(detailLink, liveLink);
    card.append(tag, title, summary, actions);
    grid.appendChild(card);
  });
});
