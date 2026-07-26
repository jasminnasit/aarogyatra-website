import React from 'react';
import { Stethoscope, Heart, ShieldCheck, Award, CheckCircle2, Building2, MapPin } from 'lucide-react';

export default function AboutUsPage({ setActivePage }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            About Aarogyatra Global Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit leading-tight text-white">
            Two Doctors. One Mission: <br />
            <span className="gradient-text-light">Trustworthy Healthcare Travel.</span>
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Founded by practising medical physicians to ensure international patients receive honest medical guidance, transparent costs, and continuous aftercare.
          </p>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100/80 text-teal-800 flex items-center justify-center">
              <Stethoscope className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Founding Narrative</span>
              <h2 className="text-2xl font-bold text-slate-900 font-outfit">
                Why We Started Aarogyatra
              </h2>
            </div>
          </div>

          <div className="text-slate-700 text-base leading-relaxed space-y-4 font-normal">
            <p>
              Aarogyatra Global Care was founded in 2026 by <strong className="text-slate-900 font-bold">Dr. Dhyani</strong> and <strong className="text-slate-900 font-bold">Dr. Nensi Savani</strong> — two physicians who saw the same problem again and again: patients travelling from abroad arriving in India confused, overcharged, and guided by commercial travel agents with zero medical training.
            </p>

            <p>
              We built Aarogyatra to be the healthcare facilitator we wished existed for our own families — where a qualified medical doctor reads your reports before you spend a single rupee, where all costs are written down before you travel, and where care continues for 8 weeks after discharge.
            </p>

            <blockquote className="p-5 bg-teal-50 border-l-4 border-teal-700 rounded-r-2xl font-outfit text-teal-950 font-bold italic text-lg my-4 shadow-xs">
              "Aarogya" means health. "Yatra" means journey. We are honored to walk yours with you.
            </blockquote>
          </div>
        </div>
      </section>

      {/* FOUNDER PROFILES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 font-outfit">
            Meet Our Founder Doctors
          </h2>
          <p className="text-slate-700 text-sm mt-1 font-medium">
            Dedicated medical directors guiding your healthcare journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Dr Dhyani */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-4 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-600 to-cyan-500 text-white font-extrabold text-2xl flex items-center justify-center mx-auto sm:mx-0 shadow-md">
              DD
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-outfit">
                Dr. Dhyani, MBBS
              </h3>
              <p className="text-xs font-semibold text-teal-700">
                Co-Founder & Designated Partner
              </p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Medical practitioner passionate about bridging global healthcare gaps. Oversees clinical review of international patient cases, specialist consultations, and surgical care protocols. Speaks English, Gujarati, and Hindi.
            </p>
          </div>

          {/* Dr Nensi Savani */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-4 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-slate-900 to-slate-700 text-white font-extrabold text-2xl flex items-center justify-center mx-auto sm:mx-0 shadow-md">
              NS
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-outfit">
                Dr. Nensi Savani, MBBS
              </h3>
              <p className="text-xs font-semibold text-teal-700">
                Co-Founder & Designated Partner
              </p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Physician dedicated to patient-centered post-operative recovery and international patient logistics. Head of the Aarogyatra Aftercare™ 8-week recovery program. Speaks English, Gujarati, and Hindi.
            </p>
          </div>

        </div>
      </section>

      {/* COMPANY CREDENTIALS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-teal-400" />
            <h3 className="text-xl font-bold font-outfit text-white">
              Official Registration & Compliance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-200">
            <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
              <span className="text-teal-400 font-bold uppercase tracking-wider block">Legal Structure</span>
              <p className="font-bold text-white">Registered LLP (India)</p>
              <p className="text-slate-300">Aarogyatra Global Care LLP</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
              <span className="text-teal-400 font-bold uppercase tracking-wider block">Registered Office</span>
              <p className="font-bold text-white">Modasa, Sabarkantha</p>
              <p className="text-slate-300">Gujarat, India</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
              <span className="text-teal-400 font-bold uppercase tracking-wider block">Quality Standard</span>
              <p className="font-bold text-white">NABH Hospital Empanelment</p>
              <p className="text-slate-300">Empanelment application in progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-2xl shadow-lg transition-all"
        >
          Consult Our Doctor-Founders Free
        </button>
      </section>

    </div>
  );
}
