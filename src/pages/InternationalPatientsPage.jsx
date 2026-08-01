import React, { useState } from 'react';
import { 
  Plane, FileText, Building2, HeartHandshake, CheckCircle2, ChevronDown, 
  HelpCircle, ShieldCheck, UserCheck, PhoneCall, MessageCircle, MapPin
} from 'lucide-react';
import { faqsData } from '../data/faqsData';

export default function InternationalPatientsPage({ setActivePage }) {
  const [openFaq, setOpenFaq] = useState(0);

  const journeySteps = [
    {
      stage: "Before You Travel",
      icon: FileText,
      points: [
        "Free medical opinion within 48 hours",
        "e-Medical Visa guidance and hospital invitation letter",
        "Attendant visas for up to 2 family members",
        "Flight guidance to India"
      ]
    },
    {
      stage: "During Your Stay",
      icon: Building2,
      points: [
        "Airport pickup on arrival",
        "Hotel accommodation near the hospital, for every budget",
        "Vegetarian, halal and home-style meals arranged",
        "SIM card, currency exchange and local transport on day one",
        "Daily updates to your family, with your consent"
      ]
    },
    {
      stage: "After You Return",
      icon: HeartHandshake,
      points: [
        "4 weeks of WhatsApp follow-up with our team until properly back on your feet",
        "Digital copies of all records and discharge summaries"
      ]
    }
  ];

  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20have%20a%20question%20about%20my%20medical%20travel%20journey.";

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            Complete Patient Logistics & Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white leading-tight">
            Your Journey — All Handled
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Medical visa, flights, hospital admission, your stay, your food, your family — all handled.
          </p>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 font-outfit">
            Your Step-by-Step Healthcare Journey
          </h2>
          <p className="text-slate-700 text-sm mt-1">
            Simple, transparent coordination from your first message to 4 weeks after you return.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Stage 0{idx + 1}</span>
                      <h3 className="text-xl font-bold text-slate-900 font-outfit">
                        {step.stage}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {step.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-normal">
                        <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Patient Information
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-outfit mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 pt-4">
          {faqsData.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-base font-outfit">
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-teal-700 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>

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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 border border-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold font-outfit text-white">
            Ready to plan your medical travel to India?
          </h3>
          <p className="text-slate-200 text-sm max-w-xl mx-auto font-normal">
            Our specialised medical team will guide you through reports review, visa invitation, and cost estimates.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Start Free Medical Review
            </button>
            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
