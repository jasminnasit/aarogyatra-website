import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { faqsData } from '../data/faqsData';
import { getPathForRoute } from '../utils/routes';

export default function FAQsPage({ setActivePage }) {
  const [openFaq, setOpenFaq] = useState(0);
  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20have%20a%20question%20about%20medical%20treatment%20in%20India.";

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Patient Information</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Clear answers about exploring treatment in India, sharing medical records securely, treatment estimates, and travel coordination.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-4">
          {faqsData.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs"
            >
              <h2 className="text-base font-outfit">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-base font-outfit">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-teal-700 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
              </h2>

              {openFaq === idx && (
                <div className="p-5 pt-0 text-sm text-slate-700 border-t border-slate-100 bg-slate-50/60 leading-relaxed font-normal animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold font-outfit text-white">
            Still have questions about your treatment options?
          </h2>
          <p className="text-slate-200 text-sm max-w-xl mx-auto font-normal">
            Contact our patient support team for guidance on coordinating your enquiry with a relevant hospital in India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href={getPathForRoute('contact')}
              onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Send an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Talk to Our Patient Support Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
