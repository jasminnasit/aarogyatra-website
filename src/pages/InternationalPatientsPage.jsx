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
        "Free Medical Opinion: Send reports via WhatsApp or web form; receive doctor-reviewed plan & written estimate within 48 hours.",
        "e-Medical Visa Assistance: Official hospital invitation letter provided; step-by-step guidance for India e-Medical Visa for you & up to 2 attendant family members.",
        "Travel Planning: Guidance on direct & 1-stop flight options (Nairobi, Dar es Salaam, London, Toronto to Ahmedabad), packing, and medical insurance."
      ]
    },
    {
      stage: "When You Arrive in Gujarat",
      icon: Plane,
      points: [
        "Airport Pickup: Dedicated Aarogyatra coordinator meets you at Ahmedabad (AMD), Surat, or Vadodara airport.",
        "Verified Accommodation: Handpicked hotels & guesthouses near the hospital suited for every budget, including kitchen facilities for family attendants.",
        "Dietary & Food Support: Vegetarian, Halal, and East African–friendly food arrangements upon request.",
        "Day 1 Essentials: Local Indian SIM card, currency exchange, and local transport arranged immediately."
      ]
    },
    {
      stage: "During Your Treatment",
      icon: Building2,
      points: [
        "Personal Coordinator: A dedicated coordinator attends key hospital appointments & translation needs.",
        "Daily Family Updates: With your consent, we send daily status updates to your family back home.",
        "Integrative Wellness: Optional yoga therapy, clinical nutritionist consultation, and psychological counselling."
      ]
    },
    {
      stage: "After You Return Home",
      icon: HeartHandshake,
      points: [
        "Aarogyatra Aftercare™: 8 weeks of structured WhatsApp follow-up with our medical team — medication check-ins, recovery milestones, and direct doctor line.",
        "Complete Digital Records: Digital copies of discharge summaries, operative notes, laboratory reports, and invoices.",
        "Local Doctor Handover: Coordination with your local physician in Kenya, Uganda, Tanzania, UK, or Canada."
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            Complete Patient Logistics
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white leading-tight">
            Your Journey, Step by Step — We Handle Everything
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed font-normal">
            From visa assistance and airport pickup to hospital care and 8 weeks of post-return follow-up.
          </p>
        </div>
      </section>

      {/* 4 STAGE JOURNEY TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 font-outfit">
            The 4-Phase Care Journey
          </h2>
          <p className="text-slate-700 text-sm mt-1">
            Structured step-by-step coordination so you can focus entirely on healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Phase 0{idx + 1}</span>
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
            Our doctor team will guide you through reports review, visa invitation, and cost estimates.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Start Free Medical Review
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
