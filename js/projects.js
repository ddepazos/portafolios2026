document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('portfolio-grid');
  if (!grid || !window.PORTFOLIO_PROJECTS || grid.children.length) return;

  window.PORTFOLIO_PROJECTS.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = project.category;

    const title = document.createElement('h3');
    title.textContent = project.title;

    const summary = document.createElement('p');
    summary.textContent = project.summary;

    const actions = document.createElement('div');
    actions.className = 'project-actions';

    const detailLink = document.createElement('a');
    detailLink.href = project.detail;
    detailLink.className = 'link-button';
    detailLink.textContent = `Ver caso ${project.title}`;

    const liveLink = document.createElement('a');
    const hasExternalLive = Boolean(project.live && project.live !== '#' && project.live.startsWith('http'));
    liveLink.href = hasExternalLive ? project.live : project.detail;
    liveLink.target = hasExternalLive ? '_blank' : '_self';
    liveLink.rel = hasExternalLive ? 'noopener noreferrer' : '';
    liveLink.className = 'link-button primary';
    liveLink.textContent = `${project.slug === 'proletarian-coin' ? 'Ver demo de' : 'Visitar'} ${project.title}`;

    actions.append(detailLink);
    if (hasExternalLive) actions.append(liveLink);
    card.append(tag, title, summary, actions);
    grid.appendChild(card);
  });
});
