(() => {
  const config = window.PORTFOLIO_ANALYTICS || {};
  const measurementId = String(config.measurementId || '').trim();
  const valid = /^G-[A-Z0-9]+$/i.test(measurementId);

  window.trackPortfolioEvent = (eventName, params = {}) => {
    if (!valid || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, params);
  };

  if (['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) return;

  if (!valid) {
    console.info('Google Analytics: pendiente ID de medición GA4 (G-...).');
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
    anonymize_ip: true
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  document.addEventListener('click', (event) => {
    const designItem = event.target.closest('[data-design-index]');
    if (designItem) {
      const card = designItem.closest('.design-card');
      window.trackPortfolioEvent('design_view', {
        event_category: 'portfolio',
        item_name: card?.querySelector('h3')?.textContent?.trim() || 'Diseño'
      });
      return;
    }

    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href') || '';

    const contactMethod = /^mailto:/i.test(href) ? 'email' : /^tel:/i.test(href) ? 'phone' : /^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href) ? 'whatsapp' : '';
    if (contactMethod) {
      window.trackPortfolioEvent(`contact_${contactMethod}_click`, {event_category: 'contact', contact_method: contactMethod});
      return;
    }

    if (/proyectos\//i.test(href)) {
      window.trackPortfolioEvent('project_open', {
        event_category: 'portfolio',
        link_url: new URL(href, window.location.href).origin + new URL(href, window.location.href).pathname,
        link_text: link.textContent.trim()
      });
    }

    const external = /^https?:\/\//i.test(href) && new URL(href, window.location.href).hostname !== window.location.hostname;
    if (external) {
      window.trackPortfolioEvent('outbound_click', {
        event_category: 'navigation',
        link_url: new URL(href, window.location.href).origin + new URL(href, window.location.href).pathname,
        link_text: link.textContent.trim()
      });
    }
  });
})();
