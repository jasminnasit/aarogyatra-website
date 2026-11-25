import { useEffect } from 'react';
import { treatmentsData } from '../data/treatmentsData';
import { getCanonicalUrl } from '../utils/routes';

export const PAGE_META = {
  home: {
    title: "Medical Treatment in India for International Patients | Aarogyatra Global Care",
    description: "Aarogyatra Global Care helps international patients explore treatment options in India, coordinate hospital communication, treatment estimates, and travel arrangements.",
    canonical: getCanonicalUrl('home')
  },
  treatments: {
    title: "Treatments We Facilitate in India | Aarogyatra Global Care",
    description: "Explore advanced medical treatments in India: Cardiac care, Orthopaedics, Cancer care, Kidney & Urology, and General Surgery at NABH and JCI accredited hospitals.",
    canonical: getCanonicalUrl('treatments')
  },
  'hospitals-packages': {
    title: "Accredited Hospitals & Custom Budget Packages | Aarogyatra Global Care",
    description: "India's NABH and JCI accredited partner hospitals across Ahmedabad, Surat, and Vadodara. Transparent packages tailored to your budget.",
    canonical: getCanonicalUrl('hospitals-packages')
  },
  'patient-journey': {
    title: "Medical Travel to India | Patient Journey & Support - Aarogyatra Global Care",
    description: "Understand the steps involved in exploring treatment in India, from your first enquiry and hospital review to appointments and travel coordination.",
    canonical: getCanonicalUrl('patient-journey')
  },
  'about-us': {
    title: "About Aarogyatra Global Care | Doctor-Founded Medical Travel Facilitator",
    description: "Founded by doctors, driven by care, and committed to making international healthcare journeys simpler and more accessible in India.",
    canonical: getCanonicalUrl('about-us')
  },
  faqs: {
    title: "Frequently Asked Questions | Medical Travel in India - Aarogyatra Global Care",
    description: "Find answers to common questions about exploring medical treatment in India, required documents, sharing medical records securely, treatment estimates, and travel.",
    canonical: getCanonicalUrl('faqs')
  },
  'free-opinion': {
    title: "Get a Free Doctor-Reviewed Medical Opinion | Aarogyatra Global Care",
    description: "Send your medical reports for a 100% free, confidential opinion from our doctor team and hospital specialists within 48 hours.",
    canonical: getCanonicalUrl('free-opinion')
  },
  contact: {
    title: "Contact Aarogyatra Global Care | International Patient Support & Enquiry",
    description: "Send an enquiry to Aarogyatra Global Care for treatment options, hospital coordination, and medical travel guidance in India via WhatsApp, phone, or email.",
    canonical: getCanonicalUrl('contact')
  }
};

export function getMetaForRoute(page, specialtyId) {
  if (page === 'specialty-detail' && specialtyId) {
    const specialty = treatmentsData.find(t => t.id === specialtyId || t.slug === specialtyId);
    if (specialty) {
      return {
        title: specialty.seoTitle || `${specialty.pageTitle || specialty.title} | Aarogyatra Global Care`,
        description: specialty.seoDescription || specialty.shortDesc,
        canonical: getCanonicalUrl('specialty-detail', specialty.id)
      };
    }
  }
  const normalizedPage = page === 'your-journey' ? 'patient-journey' : page;
  return PAGE_META[normalizedPage] || PAGE_META.home;
}

export default function SEOHead({ page, specialtyId }) {
  useEffect(() => {
    const currentMeta = getMetaForRoute(page, specialtyId);

    // Update Document Title
    document.title = currentMeta.title;

    // Update Meta Description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', currentMeta.description);
    }

    const titleMeta = document.querySelector('meta[name="title"]');
    if (titleMeta) {
      titleMeta.setAttribute('content', currentMeta.title);
    }

    // Update Canonical Link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', currentMeta.canonical);
    }

    // Update Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentMeta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentMeta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentMeta.canonical);

    // Update Twitter Card Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', currentMeta.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', currentMeta.description);

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', currentMeta.canonical);

    // Trigger GA4 page_view for Single Page Application navigation
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: currentMeta.title,
        page_location: currentMeta.canonical || window.location.href,
        page_path: window.location.pathname + window.location.search
      });
    }
  }, [page, specialtyId]);

  return null;
}
