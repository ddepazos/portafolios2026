document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return;

  const statusMessage = form.querySelector('.form-status');
  const EMAILJS_PUBLIC_KEY = 'MxxrOLdRiz3tV9i51';
  const EMAILJS_SERVICE_ID = 'service_v1mpuv5';
  const EMAILJS_TEMPLATE_ID = 'template_60b7sol';

  const setStatus = (type, text) => {
    if (!statusMessage) return;
    statusMessage.textContent = text;
    statusMessage.classList.remove('is-success', 'is-error');

    if (type) {
      statusMessage.classList.add(type === 'success' ? 'is-success' : 'is-error');
    }
  };

  const getFieldValue = (name) => {
    const field = form.elements.namedItem(name);
    return field && typeof field.value === 'string' ? field.value.trim() : '';
  };

  const buildTemplateParams = () => {
    const name = getFieldValue('name');
    const email = getFieldValue('email');
    const subject = getFieldValue('subject');
    const message = getFieldValue('message');

    // Se envían alias en español, inglés y los nombres más comunes de EmailJS.
    // Así el formulario sigue funcionando aunque la plantilla haya sido creada
    // con los nombres antiguos (nombre/proyecto/mensaje) o con los actuales.
    return {
      name,
      nombre: name,
      from_name: name,
      user_name: name,

      email,
      from_email: email,
      reply_to: email,
      user_email: email,

      subject,
      proyecto: subject,
      title: subject,

      message,
      mensaje: message
    };
  };

  const getReadableError = (error) => {
    const status = Number(error?.status || 0);
    const rawText = String(error?.text || error?.message || '').trim();
    const detail = [status ? 'Error ' + status : '', rawText].filter(Boolean).join(' · ');

    if (status === 401 || status === 403) {
      return 'El formulario no pudo validar la conexión de correo.' + (detail ? ' ' + detail : '');
    }

    if (status === 412) {
      return 'La conexión del correo necesita ser renovada.' + (detail ? ' ' + detail : '');
    }

    if (status === 400 || status === 404 || status === 422) {
      return 'EmailJS rechazó la configuración del envío.' + (detail ? ' ' + detail : '');
    }

    return 'No se pudo enviar el mensaje.' + (detail ? ' ' + detail : ' Intenta nuevamente en unos segundos.');
  };

  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  form.addEventListener('submit', async (event) => {
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

    try {
      const templateParams = buildTemplateParams();

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      window.trackPortfolioEvent?.('generate_lead', {
        event_category: 'contact',
        form_name: 'portfolio_contact',
        project_type: templateParams.subject || 'Sin especificar'
      });

      form.reset();
      setStatus('success', 'Mensaje enviado. Te responderé pronto.');

      if (submitButton) {
        submitButton.textContent = 'Enviado';
      }
    } catch (error) {
      console.error('EmailJS error:', {
        status: error?.status,
        text: error?.text,
        origin: window.location.origin
      });

      setStatus('error', getReadableError(error));

      if (submitButton) {
        submitButton.textContent = 'Reintentar';
      }
    } finally {
      if (submitButton) {
        window.setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }, 2200);
      }
    }
  });
});
