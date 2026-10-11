(() => {
  const config = window.PORTFOLIO_ANALYTICS || {};
  const measurementId = String(config.measurementId || '').trim();
  const valid = /^G-[A-Z0-9]+$/i.test(measurementId);

  window.trackPortfolioEvent = (eventName, params = {}) => {
    if (!valid || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, params);
  };

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
    const contactTrigger = event.target.closest('[data-contact-trigger]');
    if (contactTrigger) {
      window.trackPortfolioEvent('contact_open', {
        event_category: 'engagement',
        event_label: contactTrigger.textContent.trim()
      });
      return;
    }

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

    if (/proyectos\//i.test(href)) {
      window.trackPortfolioEvent('project_open', {
        event_category: 'portfolio',
        link_url: href,
        link_text: link.textContent.trim()
      });
    }

    const external = /^https?:\/\//i.test(href) && !href.includes(window.location.hostname);
    if (external) {
      window.trackPortfolioEvent('outbound_click', {
        event_category: 'navigation',
        link_url: href,
        link_text: link.textContent.trim()
      });
    }
  });
})();
