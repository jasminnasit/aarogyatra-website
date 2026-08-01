import React from 'react';
import { Building2, Award, DollarSign, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

export default function HospitalsPackagesPage({ setActivePage }) {
  const hospitalCategories = [
    {
      title: "Accredited Hospitals",
      desc: "India's NABH and JCI accredited hospitals, for patients who want the highest recognised clinical, surgical, and safety standards.",
      icon: Award,
      badge: "NABH & JCI Accredited"
    },
    {
      title: "Hospitals of Every Category",
      desc: "Trusted multi-specialty and specialty hospitals across India, carefully selected by our medical team for high quality of care and successful surgical outcomes.",
      icon: Building2,
      badge: "Trusted Multi-Specialty"
    },
    {
      title: "Packages for Your Budget",
      desc: "Tell us your budget and we will build a package around it: treatment, stay, and travel, planned to fit your financial comfort.",
      icon: DollarSign,
      badge: "Custom Package Fit"
    }
  ];

  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra,%20I%20would%20like%20to%20inquire%20about%20a%20hospital%20and%20budget%20package.";

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            India's Accredited & Trusted Hospitals
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white leading-tight">
            A hospital and a package for every budget
          </h1>
          <p className="text-slate-200 text-base max-w-3xl mx-auto leading-relaxed font-normal">
            We are not limited to one kind of hospital. Alongside India's NABH and JCI accredited hospitals, we work with trusted multi-specialty hospitals across every category — so there is always a right option for your budget.
          </p>
        </div>
      </section>

      {/* 3 CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hospitalCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:border-teal-500 transition-all space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 px-3 py-1 rounded-full border border-teal-200">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-outfit">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Custom Package Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-50 border border-teal-200 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 font-outfit">
            Tell us your target budget — we will build a package to fit
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Treatment, hospital stay, local travel, and family accommodation — all planned around your budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Get Free Budget Package
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
