document.addEventListener('DOMContentLoaded', () => {
  const triggers = [...document.querySelectorAll('[data-contact-trigger]')];
  const contactPanel = document.querySelector('[data-contact-panel]');
  const contactSection = document.getElementById('contacto');

  if (!contactPanel || triggers.length === 0) return;

  const setOpenState = (isOpen) => {
    contactPanel.classList.toggle('is-open', isOpen);
    contactPanel.setAttribute('aria-hidden', String(!isOpen));

    triggers.forEach((button) => {
      button.classList.toggle('is-open', isOpen);
      button.setAttribute('aria-expanded', String(isOpen));
      button.title = isOpen ? 'Cerrar formulario' : 'Abrir formulario';
    });
  };

  const isPanelOpen = () => contactPanel.classList.contains('is-open');

  const focusContactForm = () => {
    const firstField = contactPanel.querySelector('input, textarea, button');
    if (firstField) {
      window.setTimeout(() => firstField.focus(), 180);
    }
  };

  setOpenState(false);

  triggers.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const willOpen = !isPanelOpen();
      setOpenState(willOpen);

      if (willOpen && contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        focusContactForm();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!isPanelOpen()) return;

    const clickedInsidePanel = contactPanel.contains(event.target);
    const clickedTrigger = triggers.some((button) => button.contains(event.target));

    if (!clickedInsidePanel && !clickedTrigger) {
      setOpenState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isPanelOpen()) {
      setOpenState(false);
    }
  });
});
