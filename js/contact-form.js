document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return;

  const statusMessage = form.querySelector('.form-status');
  const EMAILJS_PUBLIC_KEY = 'MxxrOLdRiz3tV9i51';
  const EMAILJS_SERVICE_ID = 'service_rbw0qkx';
  const EMAILJS_TEMPLATE_ID = 'template_lfzhy7f';

  const setStatus = (type, text) => {
    if (!statusMessage) return;
    statusMessage.textContent = text;
    statusMessage.classList.remove('is-success', 'is-error');
    if (type) {
      statusMessage.classList.add(type === 'success' ? 'is-success' : 'is-error');
    }
  };

  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : 'Enviar';

    if (!window.emailjs) {
      setStatus('error', 'El servicio de correo no está disponible ahora.');
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
    }

    setStatus('', '');

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        form.reset();
        setStatus('success', 'Mensaje enviado. Te responderé pronto.');
        if (submitButton) {
          submitButton.textContent = 'Enviado';
        }
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error', 'No se pudo enviar el mensaje. Probá de nuevo en unos segundos.');
        if (submitButton) {
          submitButton.textContent = 'Reintentar';
        }
      })
      .finally(() => {
        if (submitButton) {
          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }, 2200);
        }
      });
  });
});
