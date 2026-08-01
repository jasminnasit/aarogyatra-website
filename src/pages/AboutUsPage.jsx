import React from 'react';
import { Stethoscope, Heart, ShieldCheck, Award, CheckCircle2, Building2, MapPin, Mail, MessageCircle, Instagram } from 'lucide-react';

export default function AboutUsPage({ setActivePage }) {
  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20would%20like%20to%20connect%20with%20your%20founders.";

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            About Aarogyatra Global Care LLP
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit leading-tight text-white">
            Two founders. One mission: <br />
            <span className="gradient-text-light">Healthcare travel you can trust.</span>
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed font-normal">
            "Aarogya" means health. "Yatra" means journey. Aarogyatra Global Care LLP was founded to make medical travel to India simple, honest and human.
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
                Simple, Honest & Human Healthcare Travel
              </h2>
            </div>
          </div>

          <div className="text-slate-700 text-base leading-relaxed space-y-4 font-normal">
            <p>
              Aarogyatra Global Care LLP was founded to solve a critical gap in medical travel: ensuring international patients receive doctor-guided evaluation, transparent budget packages, and continuous aftercare support.
            </p>

            <p>
              We connect patients to India's NABH and JCI accredited hospitals, as well as trusted multi-specialty hospitals across every category — with surgeons who have handled thousands of cases.
            </p>

            <blockquote className="p-5 bg-teal-50 border-l-4 border-teal-700 rounded-r-2xl font-outfit text-teal-950 font-bold italic text-lg my-4 shadow-xs">
              "Aarogya" means health. "Yatra" means journey. Aarogyatra Global Care LLP was founded to make medical travel to India simple, honest and human.
            </blockquote>
          </div>
        </div>
      </section>

      {/* FOUNDER PROFILES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 font-outfit">
            Meet Our Founders
          </h2>
          <p className="text-slate-700 text-sm mt-1 font-medium">
            Managing Directors leading clinical review & patient logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Dr Dhyani Rathi */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-4 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-600 to-cyan-500 text-white font-extrabold text-2xl flex items-center justify-center mx-auto sm:mx-0 shadow-md">
              DR
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-outfit">
                Dr. Dhyani Rathi
              </h3>
              <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                BHMS, MHA, FMC
              </p>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Co-Founder & Managing Director
              </p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Oversees clinical case evaluation, hospital and specialist matching, surgical quality standards, and medical team operations.
            </p>
          </div>

          {/* Dr Nensi Savani */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-4 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-slate-900 to-slate-700 text-white font-extrabold text-2xl flex items-center justify-center mx-auto sm:mx-0 shadow-md">
              NS
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-outfit">
                Dr. Nensi Savani
              </h3>
              <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                BDS, MHA
              </p>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Co-Founder & Managing Director
              </p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Leads international patient experience, budget package curation, dental & surgical coordination, and the 4-week post-return aftercare program.
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
              Official LLP Entity Details
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-200">
            <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
              <span className="text-teal-400 font-bold uppercase tracking-wider block">LLPIN</span>
              <p className="font-bold text-white text-sm">ACZ-7789</p>
              <p className="text-slate-300">Registered LLP in India</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
              <span className="text-teal-400 font-bold uppercase tracking-wider block">Registered Office</span>
              <p className="font-bold text-white text-sm">Modasa, Sabarkantha</p>
              <p className="text-slate-300">Gujarat, India</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
              <span className="text-teal-400 font-bold uppercase tracking-wider block">Contact Channels</span>
              <p className="font-bold text-white text-sm">+91 74339 28339</p>
              <p className="text-slate-300">connect@aarogyatraglobalcare.com</p>
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
          Consult Our Specialised Medical Team Free
        </button>
      </section>

    </div>
  );
}
