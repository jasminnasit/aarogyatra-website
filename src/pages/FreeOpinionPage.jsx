import React from 'react';
import MedicalOpinionForm from '../components/MedicalOpinionForm';
import { ShieldCheck, CheckCircle2, Stethoscope, Lock, MessageCircle } from 'lucide-react';

export default function FreeOpinionPage() {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            100% Confidential • Reviewed by Physicians
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white leading-tight">
            Send Your Reports. <br className="hidden sm:inline" />
            <span className="gradient-text-light">A Doctor Will Reply Within 48 Hours. Free.</span>
          </h1>
          <p className="text-slate-200 text-base max-w-xl mx-auto font-normal">
            Get a clear treatment recommendation and transparent cost estimate from our physician-founders with zero obligation.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Embedded Form Component */}
        <MedicalOpinionForm />

        {/* Reassurance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 text-slate-800">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-slate-900 block mb-0.5">Doctor Reviewed</span>
              Reviewed by Dr. Dhyani & Dr. Nensi Savani, MBBS before any recommendations.
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-slate-900 block mb-0.5">Written Cost Quote</span>
              Receive an all-inclusive estimate covering surgery, hospital stay & aftercare.
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-slate-900 block mb-0.5">Zero Obligation</span>
              It is 100% free with no commitment to travel unless you choose to proceed.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
