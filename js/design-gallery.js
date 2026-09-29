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
