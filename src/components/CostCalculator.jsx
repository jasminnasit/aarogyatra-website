import React, { useState } from 'react';
import { Calculator, CheckCircle2, AlertCircle, ArrowUpRight, DollarSign, Info } from 'lucide-react';
import { treatmentsData } from '../data/treatmentsData';

export default function CostCalculator({ onGetOpinionClick }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(treatmentsData[0].id);

  const currentSpecialty = treatmentsData.find(t => t.id === selectedSpecialty) || treatmentsData[0];
  const [selectedProcedureIdx, setSelectedProcedureIdx] = useState(0);

  const currentMatrix = currentSpecialty.costMatrix[selectedProcedureIdx] || currentSpecialty.costMatrix[0];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-0 opacity-60"></div>

      <div className="relative z-10 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Transparent Pricing Matrix
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-outfit">
              Compare Treatment Costs & Savings
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Save 60% to 80% on high-complexity surgeries with FDA-approved implants & NABH hospitals.
            </p>
          </div>

          {/* Specialty Selector */}
          <div className="flex shrink-0">
            <select
              value={selectedSpecialty}
              onChange={(e) => {
                setSelectedSpecialty(e.target.value);
                setSelectedProcedureIdx(0);
              }}
              className="bg-slate-100 border border-slate-300 text-slate-800 text-sm rounded-xl px-4 py-2.5 font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
            >
              {treatmentsData.map((t) => (
                <option key={t.id} value={t.id}>{t.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Procedure Buttons */}
        <div className="flex flex-wrap gap-2">
          {currentSpecialty.costMatrix.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProcedureIdx(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedProcedureIdx === idx
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.procedure}
            </button>
          ))}
        </div>

        {/* Comparison Cards / Table */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          
          {/* Gujarat Cost (Highlighted) */}
          <div className="md:col-span-1 bg-gradient-to-br from-teal-900 to-slate-900 text-white p-6 rounded-2xl shadow-lg border border-teal-500/30 relative">
            <div className="absolute top-3 right-3 bg-teal-500/20 text-teal-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-teal-400/30">
              Gujarat Cost
            </div>
            <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">
              Gujarat (India)
            </p>
            <div className="text-3xl font-extrabold text-white font-outfit my-2">
              {currentMatrix.gujarat}
            </div>
            <p className="text-[11px] text-teal-200/80 leading-snug">
              All-inclusive (Surgeon, Hospital, Implants, Nursing & 8-Wk Aftercare)
            </p>
          </div>

          {/* USA Cost */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              USA Typical Cost
            </p>
            <div className="text-2xl font-bold text-slate-900 font-outfit my-1 line-through text-slate-400">
              {currentMatrix.usa}
            </div>
            <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              Save up to 85%
            </span>
          </div>

          {/* UK Private */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              UK Private Hospital
            </p>
            <div className="text-2xl font-bold text-slate-900 font-outfit my-1 line-through text-slate-400">
              {currentMatrix.uk}
            </div>
            <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              Save up to 70%
            </span>
          </div>

          {/* East Africa Private */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              East Africa Private
            </p>
            <div className="text-2xl font-bold text-slate-900 font-outfit my-1 line-through text-slate-400">
              {currentMatrix.eastAfrica}
            </div>
            <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              Save up to 50%
            </span>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="flex items-start gap-2.5 bg-amber-50/80 border border-amber-200/80 p-4 rounded-xl text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Indicative Estimate:</span> Final written cost is provided after our doctor-founders inspect your recent medical reports and scans. Zero hidden charges.
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            Includes medical visa invitation, airport pickup, family stay assistance & aftercare.
          </div>
          <button
            onClick={onGetOpinionClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Get Exact Written Quote For My Case</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
