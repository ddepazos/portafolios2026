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
    liveLink.href = project.live || '#';
    liveLink.target = project.live && project.live.startsWith('http') ? '_blank' : '_self';
    liveLink.rel = 'noreferrer';
    liveLink.className = 'link-button primary';
    liveLink.textContent = project.live && project.live.startsWith('http') ? 'Live' : 'Proyecto';

    actions.append(detailLink, liveLink);
    card.append(tag, title, summary, actions);
    grid.appendChild(card);
  });
});
