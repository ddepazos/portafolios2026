document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return;

  const EMAILJS_PUBLIC_KEY = 'MxxrOLdRiz3tV9i51';
  const EMAILJS_SERVICE_ID = 'service_rbw0qkx';
  const EMAILJS_TEMPLATE_ID = 'template_lfzhy7f';

  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : 'Enviar';

    if (!window.emailjs) {
      alert('EmailJS no está cargado. Revisa la conexión a la CDN.');
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
    }

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        form.reset();
        if (submitButton) {
          submitButton.textContent = 'Enviado';
        }
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        if (submitButton) {
          submitButton.textContent = 'Reintentar';
        }
        alert('No se pudo enviar el mensaje. Revisa tus claves de EmailJS.');
      })
      .finally(() => {
        if (submitButton) {
          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }, 1800);
        }
      });
  });
});
