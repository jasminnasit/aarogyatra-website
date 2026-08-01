import React from 'react';
import { 
  ArrowLeft, CheckCircle2, Clock, ShieldCheck, HeartHandshake, MessageCircle, 
  Stethoscope, FileText, ChevronRight, AlertCircle, Info, DollarSign
} from 'lucide-react';
import { treatmentsData } from '../data/treatmentsData';

export default function SpecialtyDetailPage({ specialtyId, setActivePage }) {
  const treatment = treatmentsData.find(t => t.id === specialtyId) || treatmentsData[0];

  const primaryWhatsapp = `https://wa.me/917433928339?text=Hello%20Aarogyatra,%20I%20have%20a%20question%20regarding%20${encodeURIComponent(treatment.title)}.`;

  return (
    <div className="space-y-12 pb-16">
      
      {/* Breadcrumb & Navigation Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => { setActivePage('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Treatments</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-800">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/30">
              Specialty Details
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
              {treatment.title}
            </h1>
            <p className="text-teal-200 text-base sm:text-lg font-medium">
              {treatment.tagline}
            </p>
            <p className="text-slate-200 text-sm leading-relaxed max-w-2xl font-normal">
              {treatment.shortDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <span className="bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                {treatment.hospitalStayDays}
              </span>
              <span className="bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                {treatment.indiaStayDays}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Get Doctor Opinion for {treatment.title}</span>
            </button>

            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Ask Doctor on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 1. CONDITIONS & SURGERIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Conditions Treated */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-outfit">
              Conditions & Concerns Treated
            </h3>
          </div>
          <ul className="space-y-3 pt-2">
            {treatment.conditionsTreated.map((cond, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>{cond}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Surgeries & Procedures */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-outfit">
              Surgeries & Procedures
            </h3>
          </div>
          <ul className="space-y-3 pt-2">
            {treatment.procedures.map((proc, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{proc}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* 2. INDICATIVE COST TABLE (USD) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Cost & Budget Transparency</span>
              <h3 className="text-2xl font-bold text-slate-900 font-outfit mt-1">
                Indicative Cost Comparison Table (USD)
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Indicative price range per procedure
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th className="p-4 rounded-tl-xl">Procedure / Treatment</th>
                  <th className="p-4 bg-teal-800 text-teal-100 font-bold">India Package Range</th>
                  <th className="p-4">USA Typical</th>
                  <th className="p-4">UK Private</th>
                  <th className="p-4 rounded-tr-xl">East Africa Private</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {treatment.costMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">{row.procedure}</td>
                    <td className="p-4 font-extrabold text-teal-700 bg-teal-50/60 font-outfit">{row.gujarat}</td>
                    <td className="p-4 text-slate-500 line-through">{row.usa}</td>
                    <td className="p-4 text-slate-500 line-through">{row.uk}</td>
                    <td className="p-4 text-slate-500 line-through">{row.eastAfrica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Note:</strong> We build packages tailored to your budget. Final written estimates are provided after our specialised medical team studies your medical reports.
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED & 4-WEEK AFTERCARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-4">
          <h3 className="text-xl font-bold text-slate-900 font-outfit">
            What Is Included in Your Package
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {treatment.whatsIncluded.map((inc, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-WEEK AFTERCARE */}
        <div className="lg:col-span-5 bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-4 flex flex-col justify-between border border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/30">
              <HeartHandshake className="w-3.5 h-3.5" />
              4 Weeks of Aftercare
            </div>
            <h3 className="text-2xl font-bold font-outfit text-white">
              We Stay With You for 4 Weeks
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed font-normal">
              {treatment.aftercareDetails}
            </p>
          </div>

          <div className="pt-4 border-t border-teal-800/80">
            <button
              onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Request Free Medical Opinion & Package Quote
            </button>
          </div>
        </div>

      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 text-center space-y-4 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 font-outfit">
            Ready to review your treatment plan with our medical team?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Send your reports for a free medical opinion within 48 hours. Zero obligation to travel.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Get Free Medical Opinion
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
