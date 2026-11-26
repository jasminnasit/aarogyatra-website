/**
 * Central analytics helper that dispatches events to both:
 * 1. Google Tag Manager via window.dataLayer (plain object with `event`)
 * 2. Google Analytics 4 via window.gtag('event', ...)
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Tracks SPA route changes without double-counting the initial page load.
 */
export function trackPageView({ title, location, path }) {
  if (typeof window === 'undefined') return;

  const payload = {
    page_title: title,
    page_location: location,
    page_path: path
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'virtual_page_view',
    ...payload
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', payload);
  }
}
