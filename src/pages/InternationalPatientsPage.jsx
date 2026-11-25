import React from 'react';
import { 
  Plane, FileText, Building2, HeartHandshake, CheckCircle2, 
  HelpCircle, MessageCircle, ArrowRight
} from 'lucide-react';
import { getPathForRoute } from '../utils/routes';

export default function InternationalPatientsPage({ setActivePage }) {
  const processSteps = [
    {
      num: "01",
      title: "Initial Enquiry",
      desc: "Tell us about the treatment you are exploring and share your contact details."
    },
    {
      num: "02",
      title: "Share Medical Records",
      desc: "We guide you on how to share relevant medical reports for review by the hospital or treating team."
    },
    {
      num: "03",
      title: "Hospital Review",
      desc: "The relevant hospital or treating specialists review the information and advise on the next medical steps."
    },
    {
      num: "04",
      title: "Treatment Estimate",
      desc: "We help coordinate communication of the estimate and details provided by the hospital."
    },
    {
      num: "05",
      title: "Travel Planning",
      desc: "We assist with appointment coordination and practical arrangements such as medical visa documentation guidance, travel and accommodation, as applicable."
    },
    {
      num: "06",
      title: "Hospital Visit & Follow-up",
      desc: "The hospital provides medical care. We can assist with coordination and communication for follow-up arrangements, as agreed."
    }
  ];

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
            Your Treatment Journey
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed font-normal">
            We help make the process of exploring treatment in India easier to understand and coordinate. Here is how we support you at each stage.
          </p>
        </div>
      </section>

      {/* 6-STEP TREATMENT JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 font-outfit">
            How We Support You at Each Stage
          </h2>
          <p className="text-slate-700 text-sm mt-1">
            Six clear steps from your initial enquiry to coordinated follow-up care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div key={step.num} className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:border-teal-400 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm font-outfit shrink-0">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-outfit">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY TIMELINE (RETAINED STAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 font-outfit">
            Practical Travel & Hospital Support
          </h2>
          <p className="text-slate-700 text-sm mt-1">
            Medical visa, flights, hospital admission, your stay, your food, your family - all handled.
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

      {/* LINK TO FAQs PAGE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-50 border border-teal-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800">
              <HelpCircle className="w-4 h-4" />
              <span>Patient Information</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-outfit">
              Have Questions About Your Journey?
            </h2>
            <p className="text-sm text-slate-700">
              Read answers on required documents, sharing medical records securely, and treatment estimates.
            </p>
          </div>
          <a
            href={getPathForRoute('faqs')}
            onClick={(e) => { e.preventDefault(); setActivePage('faqs'); }}
            className="px-6 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2 shrink-0"
          >
            <span>View FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold font-outfit text-white">
            Ready to plan your medical travel to India?
          </h2>
          <p className="text-slate-200 text-sm max-w-xl mx-auto font-normal">
            Our specialised medical team will guide you through reports review, visa invitation, and cost estimates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href={getPathForRoute('contact')}
              onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Send an Enquiry
            </a>
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
