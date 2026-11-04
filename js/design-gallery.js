(() => {
  const dialog = document.querySelector('.design-dialog');
  const triggers = [...document.querySelectorAll('[data-design-index]')];
  if (!dialog || !triggers.length) return;
  let current = 0;
  let opener;
  function show(index) {
    current = (index + triggers.length) % triggers.length;
    const card = triggers[current].closest('.design-card');
    const original = card.querySelector('img');
    const image = dialog.querySelector('.design-dialog-image');
    image.src = original.src;
    image.alt = original.alt;
    dialog.querySelector('#design-dialog-title').textContent = card.querySelector('h3').textContent;
    dialog.querySelector('.design-counter').textContent = (current + 1) + ' / ' + triggers.length;
  }
  triggers.forEach((button, index) => button.addEventListener('click', () => {
    opener = button;
    show(index);
    dialog.showModal();
    document.body.classList.add('design-viewing');
    dialog.querySelector('.design-close').focus();
  }));
  dialog.querySelector('.design-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.design-previous').addEventListener('click', () => show(current - 1));
  dialog.querySelector('.design-next').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('design-viewing');
    opener?.focus();
  });
})();

(() => {
  const dialog = document.querySelector('.jabones-dialog');
  const opener = document.querySelector('[data-jabones-open]');
  if (!dialog || !opener) return;
  const close = dialog.querySelector('.jabones-close');

  opener.addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('jabones-viewing');
    close?.focus();
  });

  close?.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outside) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('jabones-viewing');
    opener.focus();
  });
})();


/* ARTIFACT PANELS · 2026 — accessible single-expanded project detail */
(() => {
  const gallery = document.getElementById('artefactos');
  if (!gallery) return;
  const grid = gallery.querySelector('.artifact-grid');
  const cards = [...grid.querySelectorAll('[data-artifact-card]')];
  const triggers = [...grid.querySelectorAll('[data-artifact-toggle]')];
  const panels = [...grid.querySelectorAll('[data-artifact-panel]')];
  if (!cards.length || !triggers.length || !panels.length) return;

  let activeKey = null;
  const hideAll = () => {
    panels.forEach(panel => { panel.hidden = true; });
    triggers.forEach(button => { button.setAttribute('aria-expanded', 'false'); });
    gallery.querySelectorAll('.artifact-links button[data-artifact-toggle]').forEach(button => { button.textContent = 'Ver ficha +'; });
    cards.forEach(card => card.classList.remove('is-expanded'));
    activeKey = null;
  };

  const rowEnd = (source) => {
    const sourceTop = source.offsetTop;
    const sameRow = cards.filter(card => Math.abs(card.offsetTop - sourceTop) < 8);
    return sameRow.at(-1) || source;
  };

  const placePanel = (key, panel) => {
    const source = cards.find(card => card.dataset.artifactCard === key);
    if (!source) return;
    rowEnd(source).insertAdjacentElement('afterend', panel);
  };

  triggers.forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.artifactToggle;
    const panel = panels.find(item => item.dataset.artifactPanel === key);
    const closing = activeKey === key;
    hideAll();
    if (!panel || closing) return;

    placePanel(key, panel);
    panel.hidden = false;
    activeKey = key;
    triggers.filter(item => item.dataset.artifactToggle === key)
      .forEach(item => item.setAttribute('aria-expanded', 'true'));
    gallery.querySelectorAll('.artifact-links button[data-artifact-toggle]').forEach(button => {
      if (button.dataset.artifactToggle === key) button.textContent = 'Ocultar ficha −';
    });
    cards.find(card => card.dataset.artifactCard === key)?.classList.add('is-expanded');

    requestAnimationFrame(() => {
      const rect = panel.getBoundingClientRect();
      if (rect.top > window.innerHeight * .82 || rect.top < 78) {
        panel.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    });
  }));

  panels.forEach(panel => {
    panel.querySelector('[data-artifact-close]')?.addEventListener('click', () => {
      const key = panel.dataset.artifactPanel;
      hideAll();
      triggers.find(button => button.dataset.artifactToggle === key)?.focus();
    });
  });

  window.addEventListener('resize', () => {
    if (!activeKey) return;
    const panel = panels.find(item => item.dataset.artifactPanel === activeKey);
    if (!panel) return;
    panel.hidden = true;
    placePanel(activeKey, panel);
    panel.hidden = false;
  });
})();
