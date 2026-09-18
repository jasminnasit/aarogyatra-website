import { useEffect } from 'react';
import { treatmentsData } from '../data/treatmentsData';

const PAGE_META = {
  home: {
    title: "Aarogyatra Global Care — Doctor-Guided Medical Travel in India",
    description: "Connect to India's leading NABH and JCI accredited hospitals in Gujarat with doctor-reviewed medical travel plans, 60-80% cost savings, and 4-week recovery aftercare.",
    canonical: "https://www.aarogyatraglobalcare.com/"
  },
  treatments: {
    title: "Treatments We Facilitate in India | Aarogyatra Global Care",
    description: "Explore advanced medical treatments in India: Cardiac care, Orthopedics, Cancer care, Urology, and Advanced Surgery at NABH-accredited hospitals.",
    canonical: "https://www.aarogyatraglobalcare.com/#treatments"
  },
  'hospitals-packages': {
    title: "Accredited Hospitals & Custom Budget Packages | Aarogyatra Global Care",
    description: "India's NABH and JCI accredited partner hospitals across Ahmedabad, Surat, and Vadodara. Transparent packages tailored to your budget.",
    canonical: "https://www.aarogyatraglobalcare.com/#hospitals-packages"
  },
  'your-journey': {
    title: "International Patient Journey & Care | Aarogyatra Global Care",
    description: "Step-by-step guidance for international patients: Medical visa, flights, private rooms, bilingual coordinators, and 4-week WhatsApp aftercare.",
    canonical: "https://www.aarogyatraglobalcare.com/#your-journey"
  },
  'about-us': {
    title: "About Aarogyatra Global Care | Doctor-Founded Medical Facilitator",
    description: "Founded by medical doctors prioritizing clinical integrity over commercial commissions. Learn our mission, values, and doctor-led approach.",
    canonical: "https://www.aarogyatraglobalcare.com/#about-us"
  },
  'free-opinion': {
    title: "Get a Free Doctor-Reviewed Medical Opinion | Aarogyatra Global Care",
    description: "Send your medical reports for a 100% free, confidential opinion from our doctor team and hospital specialists within 48 hours.",
    canonical: "https://www.aarogyatraglobalcare.com/#free-opinion"
  },
  contact: {
    title: "Contact Aarogyatra Global Care | 24/7 Patient Assistance",
    description: "Get in touch with our medical coordination team via WhatsApp, phone, or email. We assist patients globally 24 hours a day.",
    canonical: "https://www.aarogyatraglobalcare.com/#contact"
  }
};

export default function SEOHead({ page, specialtyId }) {
  useEffect(() => {
    let currentMeta = PAGE_META[page] || PAGE_META.home;

    if (page === 'specialty-detail' && specialtyId) {
      const specialty = treatmentsData.find(t => t.id === specialtyId || t.slug === specialtyId);
      if (specialty) {
        currentMeta = {
          title: `${specialty.title} in India — ${specialty.tagline} | Aarogyatra Global Care`,
          description: specialty.shortDesc,
          canonical: `https://www.aarogyatraglobalcare.com/#specialty-detail?id=${specialty.id}`
        };
      }
    }

    // Update Document Title
    document.title = currentMeta.title;

    // Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', currentMeta.description);
    }

    // Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
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

  }, [page, specialtyId]);

  return null;
}
