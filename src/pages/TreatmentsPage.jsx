import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Info, HeartPulse, Activity, ShieldAlert, Droplet, Scissors, Clock } from 'lucide-react';
import { treatmentsData } from '../data/treatmentsData';

export default function TreatmentsPage({ setActivePage, setSelectedSpecialtyId }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTreatments = treatmentsData.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.procedures.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSelectSpecialty = (id) => {
    setSelectedSpecialtyId(id);
    setActivePage('specialty-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (id) => {
    switch (id) {
      case 'cardiac-care': return HeartPulse;
      case 'orthopedics-joint-replacement': return Activity;
      case 'oncology': return ShieldAlert;
      case 'kidney-urology': return Droplet;
      default: return Scissors;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner - High Contrast Slate 900 Background */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            Medical Specialties & Procedures
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Treatments We Facilitate in India
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Every specialty below is delivered at NABH-accredited partner hospitals in Gujarat by surgeons with international training and thousands of successful procedures.
          </p>

          {/* Search bar with perfectly centered icon */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-teal-400 absolute left-4 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatment, condition, or procedure (e.g. Knee Replacement, CABG, Laser)..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-800/90 border border-slate-700 rounded-2xl text-sm font-medium text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-400 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Disclaimer Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-50 border border-teal-200/90 rounded-2xl p-5 flex items-start gap-3 text-xs text-teal-950 leading-relaxed shadow-xs">
          <Info className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-teal-950">Indicative Cost Disclaimer:</span> Costs shown below are indicative ranges (in USD). You will receive an exact written estimate after our doctor-founders review your clinical reports and consult with treating hospital specialists.
          </div>
        </div>
      </section>

      {/* Grid of Specialty Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-12 text-slate-600 bg-white rounded-3xl p-8 border border-slate-200">
            No treatments found matching "{searchQuery}". Please try another search term or contact our doctor team directly.
          </div>
        ) : (
          <div className="space-y-8">
            {filteredTreatments.map((treatment) => {
              const IconComp = getIcon(treatment.id);
              return (
                <div
                  key={treatment.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:border-teal-500 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  
                  {/* Left Column - Meta & Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-teal-100/80 text-teal-800 flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 font-outfit">
                          {treatment.title}
                        </h2>
                        <p className="text-xs font-semibold text-teal-700">
                          {treatment.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {treatment.shortDesc}
                    </p>

                    {/* Procedure Badges */}
                    <div>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Key Procedures:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {treatment.procedures.map((proc, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-800 border border-slate-200 text-xs px-3 py-1 rounded-lg font-medium">
                            {proc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 pt-2">
                      <span className="flex items-center gap-1.5 text-teal-800">
                        <Clock className="w-4 h-4 text-teal-600" />
                        {treatment.hospitalStayDays}
                      </span>
                      <span>•</span>
                      <span className="text-slate-700">{treatment.indiaStayDays}</span>
                    </div>
                  </div>

                  {/* Right Column - Cost Preview & Button */}
                  <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Indicative Cost Range (USD)
                    </h4>

                    <div className="space-y-2">
                      {treatment.costMatrix.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
                          <span className="font-semibold text-slate-800">{item.procedure}</span>
                          <span className="font-extrabold text-slate-900 font-outfit text-sm">{item.gujarat}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleSelectSpecialty(treatment.id)}
                      className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>Explore {treatment.title} & Costs</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 font-outfit">
            Don't see your specific procedure listed?
          </h3>
          <p className="text-slate-700 text-sm">
            We cover a comprehensive array of medical sub-specialties. Share your report with our doctor-founders for a personalized evaluation.
          </p>
          <button
            onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all"
          >
            Request Custom Doctor Evaluation
          </button>
        </div>
      </section>

    </div>
  );
}
