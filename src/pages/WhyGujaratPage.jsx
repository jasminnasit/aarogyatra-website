import React from 'react';
import { 
  Building2, DollarSign, Clock, Plane, Heart, Stethoscope, 
  ShieldCheck, CheckCircle2, MessageCircle, Sparkles, Award
} from 'lucide-react';

export default function WhyGujaratPage({ setActivePage }) {
  const whyGujaratPoints = [
    {
      title: "NABH & JCI Accredited Hospitals",
      desc: "India's NABH and JCI accredited hospitals hold the highest recognized quality and safety standards, with internationally trained surgeons and cutting-edge operating theaters.",
      icon: Building2
    },
    {
      title: "Hospitals & Packages for Every Budget",
      desc: "We work with trusted multi-specialty hospitals across every category. Tell us your budget and we build a package around it: treatment, stay and travel.",
      icon: DollarSign
    },
    {
      title: "Zero Waiting Lists",
      desc: "Surgery and specialist procedures can be scheduled within days of your arrival in India, eliminating dangerous wait times.",
      icon: Clock
    },
    {
      title: "Convenient Flight Connections",
      desc: "Direct and single-stop flights connect Nairobi, Dar es Salaam, Kampala, London, and Toronto directly to major international airport hubs in India.",
      icon: Plane
    },
    {
      title: "Full Travel & Family Support",
      desc: "Medical visa assistance, attendant visas for up to 2 family members, airport pickup, vegetarian/halal meals, and hotel accommodation near the hospital handled.",
      icon: Heart
    }
  ];

  const whyUsPoints = [
    {
      title: "Specialised Medical Team.",
      desc: "Our specialised medical team studies your clinical reports and matches you with the right hospital and specialist in India. Clear answers within 48 hours.",
      icon: Stethoscope
    },
    {
      title: "Packages Built Around Your Budget.",
      desc: "We are not limited to one kind of hospital. Alongside India's NABH and JCI accredited hospitals, we work across all hospital categories so there is always a right option for your budget.",
      icon: ShieldCheck
    },
    {
      title: "4 Weeks of Aftercare Back Home.",
      desc: "Back home, we're still one message away — simple WhatsApp check-ins for four weeks until you're properly back on your feet.",
      icon: Award
    },
    {
      title: "Wellness & Recovery Included.",
      desc: "Yoga sessions, personalised nutrition guidance and counselling support during your stay in India.",
      icon: Sparkles
    }
  ];

  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra,%20I%20have%20a%20question%20about%20medical%20travel.";

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Hero Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            Medical Travel Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white leading-tight">
            Why Choose Medical Treatment in India? <br />
            <span className="gradient-text-light">Why Aarogyatra Global Care?</span>
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed">
            Discover why international patients trust India's accredited hospitals, and why our specialised team makes all the difference.
          </p>
        </div>
      </section>

      {/* SECTION 1: WHY INDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 font-outfit">
            World-Class Hospitals & Surgeons
          </h2>
          <p className="text-slate-700 text-sm mt-2 font-medium">
            Access India's NABH and JCI accredited hospitals with surgeons who have handled thousands of successful cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyGujaratPoints.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:border-teal-500 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-100/80 text-teal-800 flex items-center justify-center">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-outfit">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: WHY AAROGYATRA */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
              Our Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-white mt-3">
              Why Patients Trust Aarogyatra
            </h2>
            <p className="text-slate-300 text-sm mt-2 font-normal">
              Healthcare travel you can trust — simple, honest and human.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUsPoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={idx} className="bg-slate-800/90 rounded-3xl p-8 border border-slate-700/80 hover:border-teal-400 transition-all space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-outfit">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-50 border border-teal-200/90 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
          <h3 className="text-2xl font-bold text-slate-900 font-outfit">
            Have questions about medical travel to India?
          </h3>
          <p className="text-slate-700 text-sm max-w-xl mx-auto font-medium">
            Speak directly with our specialised medical team or request a free medical report assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Get Free Medical Opinion
            </button>
            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
