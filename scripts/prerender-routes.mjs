import fs from 'node:fs';
import path from 'node:path';
import { treatmentsData } from '../src/data/treatmentsData.js';
import { BASE_URL } from '../src/utils/routes.js';

const distDir = path.resolve(process.cwd(), 'dist');
const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const routeEntries = [
  {
    urlPath: '/treatments/',
    title: 'Treatments We Facilitate in India | Aarogyatra Global Care',
    description: 'Explore advanced medical treatments in India: Cardiac care, Orthopaedics, Cancer care, Kidney & Urology, and General Surgery at NABH and JCI accredited hospitals.',
    h1: 'Treatments We Facilitate in India',
    intro: "Treatment at India's NABH and JCI accredited hospitals, and at trusted multi-specialty hospitals across every category - with surgeons who have handled thousands of cases."
  },
  {
    urlPath: '/hospitals-packages/',
    title: 'Accredited Hospitals & Custom Budget Packages | Aarogyatra Global Care',
    description: "India's NABH and JCI accredited partner hospitals across Ahmedabad, Surat, and Vadodara. Transparent packages tailored to your budget.",
    h1: 'A hospital and a package for every budget',
    intro: "We work with India's NABH and JCI accredited hospitals as well as trusted multi-specialty hospitals across every category."
  },
  {
    urlPath: '/patient-journey/',
    title: 'Medical Travel to India | Patient Journey & Support - Aarogyatra Global Care',
    description: 'Understand the steps involved in exploring treatment in India, from your first enquiry and hospital review to appointments and travel coordination.',
    h1: 'Your Treatment Journey',
    intro: 'We help make the process of exploring treatment in India easier to understand and coordinate. Here is how we support you at each stage.'
  },
  {
    urlPath: '/about-us/',
    title: 'About Aarogyatra Global Care | Doctor-Founded Medical Travel Facilitator',
    description: 'Founded by doctors, driven by care, and committed to making international healthcare journeys simpler and more accessible in India.',
    h1: 'About Aarogyatra Global Care',
    intro: 'Founded by doctors, driven by care, and committed to making international healthcare journeys simpler and more accessible. Our role is to facilitate communication and coordination.'
  },
  {
    urlPath: '/faqs/',
    title: 'Frequently Asked Questions | Medical Travel in India - Aarogyatra Global Care',
    description: 'Find answers to common questions about exploring medical treatment in India, required documents, sharing medical records securely, treatment estimates, and travel.',
    h1: 'Frequently Asked Questions',
    intro: 'Clear answers about exploring treatment in India, required documents, sharing medical records securely, treatment estimates, and travel coordination.'
  },
  {
    urlPath: '/free-opinion/',
    title: 'Get a Free Doctor-Reviewed Medical Opinion | Aarogyatra Global Care',
    description: 'Send your medical reports for a 100% free, confidential opinion from our doctor team and hospital specialists within 48 hours.',
    h1: 'Send Your Reports. A Doctor Will Reply Within 48 Hours. Free.',
    intro: 'Get a clear treatment recommendation and transparent cost estimate from our physician-founders with zero obligation.'
  },
  {
    urlPath: '/contact/',
    title: 'Contact Aarogyatra Global Care | International Patient Support & Enquiry',
    description: 'Send an enquiry to Aarogyatra Global Care for treatment options, hospital coordination, and medical travel guidance in India via WhatsApp, phone, or email.',
    h1: 'Contact Aarogyatra Global Care LLP',
    intro: 'Send us an enquiry or connect via WhatsApp, phone, or email. Please do not upload or enter detailed medical records in the enquiry form.'
  },
  {
    urlPath: '/privacy-policy/',
    title: 'Privacy Policy | Aarogyatra Global Care',
    description: "Read Aarogyatra Global Care LLP's Privacy Policy explaining how we collect, protect, and use contact enquiry details and website analytics.",
    h1: 'Privacy Policy',
    intro: 'Aarogyatra Global Care LLP respects your privacy and is committed to protecting personal information shared with us when exploring medical travel in India.'
  },
  {
    urlPath: '/terms-of-service/',
    title: 'Terms of Service | Aarogyatra Global Care',
    description: "Terms of Service governing the use of Aarogyatra Global Care LLP's medical travel facilitation website and coordination services.",
    h1: 'Terms of Service',
    intro: 'Terms governing your use of the Aarogyatra Global Care LLP website and medical travel coordination services.'
  },
  {
    urlPath: '/medical-disclaimer/',
    title: 'Medical Disclaimer | Aarogyatra Global Care',
    description: "Important Medical Disclaimer clarifying Aarogyatra Global Care LLP's role as a medical travel facilitator and independent care by partner hospitals.",
    h1: 'Medical Disclaimer',
    intro: 'Aarogyatra Global Care LLP is a medical travel facilitator. All clinical care is provided independently by partner hospitals and their licensed physicians.'
  },
  ...treatmentsData.map((t) => ({
    urlPath: t.urlPath,
    title: t.seoTitle,
    description: t.seoDescription,
    h1: t.pageTitle || t.title,
    intro: t.introCopy || t.shortDesc
  }))
];

function applyRouteMeta(html, entry) {
  const canonical = `${BASE_URL}${entry.urlPath}`;
  const safeTitle = escapeHtml(entry.title);
  const safeDesc = escapeHtml(entry.description);
  const safeCanonical = escapeHtml(canonical);
  const safeH1 = escapeHtml(entry.h1);
  const safeIntro = escapeHtml(entry.intro);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta name="title" content="[^"]*"\s*\/>/, `<meta name="title" content="${safeTitle}" />`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${safeDesc}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${safeCanonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${safeCanonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${safeDesc}" />`)
    .replace(/<meta name="twitter:url" content="[^"]*"\s*\/>/, `<meta name="twitter:url" content="${safeCanonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${safeDesc}" />`)
    .replace(
      /<h1>[\s\S]*?<\/h1>/,
      `<h1>${safeH1}</h1>\n        <p>${safeIntro}</p>`
    );
}

for (const entry of routeEntries) {
  const cleanDir = entry.urlPath.replace(/^\/|\/$/g, '');
  const targetDir = path.join(distDir, cleanDir);
  fs.mkdirSync(targetDir, { recursive: true });
  const pageHtml = applyRouteMeta(templateHtml, entry);
  fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml, 'utf-8');
}

// Write 404.html fallback for any unmatched GitHub Pages route
fs.writeFileSync(path.join(distDir, '404.html'), templateHtml, 'utf-8');

console.log(`Prerendered ${routeEntries.length} clean-URL route entry points + 404.html`);
