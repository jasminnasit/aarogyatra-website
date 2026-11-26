import React from 'react';
import { ShieldCheck, FileText, AlertTriangle, Mail, ArrowRight } from 'lucide-react';
import { getPathForRoute } from '../utils/routes';

const LEGAL_CONTENT = {
  'privacy-policy': {
    badge: 'Privacy & Data Protection',
    title: 'Privacy Policy',
    updated: 'Last Updated: November 26, 2026',
    icon: ShieldCheck,
    intro:
      'Aarogyatra Global Care LLP ("Aarogyatra", "we", "our") respects your privacy and is committed to protecting personal information shared with us when exploring medical travel and hospital coordination in India.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'When you submit an enquiry form or contact us, we may collect your name, country, email address, phone or WhatsApp number, preferred contact method, treatment category, and brief enquiry notes.',
          'Please do not upload or enter detailed medical records, diagnostic scans, or sensitive clinical history into the standard website contact enquiry form. If clinical documents are needed for hospital review, our team will guide you on the appropriate secure sharing method.'
        ]
      },
      {
        heading: '2. How We Use Your Information',
        body: [
          'We use your contact details solely to respond to your enquiry, coordinate communication with relevant accredited partner hospitals and specialists in India, assist with treatment estimates, and guide practical travel and visa logistics at your request.',
          'We do not sell, rent, or trade your personal information to third-party marketers.'
        ]
      },
      {
        heading: '3. Sharing With Partner Hospitals',
        body: [
          'Medical opinions, diagnoses, treatment plans, and cost estimates are provided by treating doctors and hospitals. Relevant enquiry details or medical reports are shared only with suitable partner hospitals and healthcare professionals as required to evaluate your request and coordinate your care.'
        ]
      },
      {
        heading: '4. Analytics, Cookies & Advertising Measurement',
        body: [
          'Our website uses Google Analytics 4 (G-4CG38X4QY1), Google Tag Manager (GTM-KQX8J9LV), and Google Ads conversion measurement to understand website traffic and measure enquiries generated from our site (such as form submissions, WhatsApp clicks, and phone clicks).',
          'We do not transmit sensitive medical diagnoses or uploaded clinical records to advertising platforms.'
        ]
      },
      {
        heading: '5. Data Security, Retention & Your Rights',
        body: [
          'We take reasonable technical and administrative safeguards to protect submitted enquiry details. We retain information only as long as necessary to coordinate your enquiry or meet applicable legal requirements.',
          'You may request access to, correction of, or deletion of your personal contact details at any time by emailing connect@aarogyatraglobalcare.com.'
        ]
      }
    ]
  },
  'terms-of-service': {
    badge: 'Terms & Conditions',
    title: 'Terms of Service',
    updated: 'Last Updated: November 26, 2026',
    icon: FileText,
    intro:
      'By accessing or using https://www.aarogyatraglobalcare.com/, you agree to these Terms of Service governing your use of the website and facilitation services offered by Aarogyatra Global Care LLP.',
    sections: [
      {
        heading: '1. Nature of Services',
        body: [
          'Aarogyatra Global Care LLP (LLPIN: ACZ-7789) is a medical travel facilitation and patient coordination service based in Gujarat, India. Our role is to facilitate communication between international patients and partner hospitals, assist with appointment scheduling, coordinate treatment estimates, and support practical travel logistics.'
        ]
      },
      {
        heading: '2. Independent Clinical Care',
        body: [
          'All medical opinions, diagnoses, treatment recommendations, procedures, surgeries, and clinical aftercare are provided independently by the treating doctors and partner hospitals. Aarogyatra does not practice medicine or direct clinical decisions.'
        ]
      },
      {
        heading: '3. Treatment Estimates & Payments',
        body: [
          'Initial treatment estimates communicated through our coordination are indicative and provided based on information supplied by partner hospitals. Final clinical plans and billing are determined by the treating hospital after in-person evaluation. Hospital treatment fees are paid directly to the treating hospital.'
        ]
      },
      {
        heading: '4. User Responsibilities',
        body: [
          'You agree to provide accurate contact details and lawful information when submitting enquiries. Do not submit sensitive medical files through unverified public comment fields; follow our team’s guidance when sharing clinical documents.'
        ]
      },
      {
        heading: '5. Governing Law',
        body: [
          'These terms are governed by the laws of India, with jurisdiction in Gujarat, India.'
        ]
      }
    ]
  },
  'medical-disclaimer': {
    badge: 'Important Notice',
    title: 'Medical Disclaimer',
    updated: 'Last Updated: November 26, 2026',
    icon: AlertTriangle,
    intro:
      'Please read this Medical Disclaimer carefully before relying on any information presented on https://www.aarogyatraglobalcare.com/.',
    sections: [
      {
        heading: '1. Not Medical Advice',
        body: [
          'All content on this website—including treatment descriptions, specialty overviews, FAQs, and journey guides—is provided for general informational and coordination purposes only and does not constitute medical advice, diagnosis, or treatment.'
        ]
      },
      {
        heading: '2. Role as Facilitator',
        body: [
          'Aarogyatra Global Care LLP is a medical travel facilitator. All clinical consultations, medical opinions, surgeries, and hospital care are delivered solely by partner hospitals and their licensed physicians.'
        ]
      },
      {
        heading: '3. No Guaranteed Outcomes',
        body: [
          'Medical outcomes depend on each patient’s individual health status, clinical history, and treating specialist’s judgment. No guaranteed medical results or outcomes are stated or implied.'
        ]
      },
      {
        heading: '4. Medical Emergencies',
        body: [
          'Do not use this website, WhatsApp, or online enquiry forms for urgent or life-threatening medical emergencies. In an emergency, contact your local emergency medical services immediately.'
        ]
      }
    ]
  }
};

export default function LegalPage({ pageKey, setActivePage }) {
  const doc = LEGAL_CONTENT[pageKey] || LEGAL_CONTENT['privacy-policy'];
  const Icon = doc.icon;

  return (
    <div className="space-y-12 pb-16">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            <Icon className="w-3.5 h-3.5" />
            <span>{doc.badge}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white leading-tight">
            {doc.title}
          </h1>
          <p className="text-slate-300 text-sm">{doc.updated}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg space-y-8">
          <p className="text-slate-700 text-base leading-relaxed font-normal border-b border-slate-100 pb-6">
            {doc.intro}
          </p>

          <div className="space-y-6">
            {doc.sections.map((section) => (
              <div key={section.heading} className="space-y-2">
                <h2 className="text-xl font-bold text-slate-900 font-outfit">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 rounded-2xl p-5">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <Mail className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Questions about this policy?</strong>
                <span>
                  Aarogyatra Global Care LLP (LLPIN: ACZ-7789) · Modasa, Gujarat, India ·{' '}
                  <a href="mailto:connect@aarogyatraglobalcare.com" className="text-teal-700 font-semibold hover:underline">
                    connect@aarogyatraglobalcare.com
                  </a>
                </span>
              </div>
            </div>
            <a
              href={getPathForRoute('contact')}
              onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}
              className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
