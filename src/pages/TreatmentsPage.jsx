import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Info, HeartPulse, Activity, ShieldAlert, Droplet, Scissors, Clock, Smile, Sparkles, HelpCircle, MessageCircle, Heart, Stethoscope } from 'lucide-react';
import { treatmentsData } from '../data/treatmentsData';

export default function TreatmentsPage({ setActivePage, setSelectedSpecialtyId }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTreatments = treatmentsData.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.procedures.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
    t.conditionsTreated.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
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
      case 'dentistry': return Smile;
      case 'cosmetology-aesthetics': return Sparkles;
      default: return Scissors;
    }
  };

  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20have%20a%20treatment%20query.";

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            Specialised Medical Care & Surgeries
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Treatments We Facilitate in India
          </h1>
          <p className="text-slate-200 text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Treatment at India's NABH and JCI accredited hospitals, and at trusted multi-specialty hospitals across every category — with surgeons who have handled thousands of cases.
          </p>

          {/* Search bar with centered icon */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-teal-400 absolute left-4 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatment, condition, or procedure (e.g. Knee, Hair Transplant, CABG, Dental)..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-800/90 border border-slate-700 rounded-2xl text-sm font-medium text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-400 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Specialty Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-12 text-slate-600 bg-white rounded-3xl p-8 border border-slate-200">
            No treatments found matching "{searchQuery}". Tell us what you need below and our medical team will match you with the right specialist!
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
                  <div className="lg:col-span-8 space-y-4">
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

                    {/* Surgeries & Procedures */}
                    <div>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Surgeries & Procedures:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {treatment.procedures.map((proc, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-800 border border-slate-200 text-xs px-3 py-1 rounded-lg font-medium">
                            {proc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Conditions / Concerns */}
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Conditions & Concerns Treated:</span>
                      <p className="text-xs text-slate-600">
                        {treatment.conditionsTreated.join(" • ")}
                      </p>
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

                  {/* Right Column - Action Card */}
                  <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">Specialist Care</span>
                      <h4 className="text-lg font-bold font-outfit text-white">
                        {treatment.title} Package
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Pre-op evaluation, hospital admission, US-FDA implants, bilingual coordinator, & 4-week aftercare.
                      </p>
                    </div>

                    <button
                      onClick={() => handleSelectSpecialty(treatment.id)}
                      className="w-full py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Stethoscope className="w-4 h-4" />
                      <span>View Full Specialty Details</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* WELLNESS & RECOVERY (INCLUDED) CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-8 border border-teal-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full">
              <Heart className="w-3.5 h-3.5 text-teal-600 fill-teal-600/20" />
              Included With Every Medical Package
            </div>
            <h3 className="text-2xl font-bold font-outfit text-slate-900">
              Wellness & Recovery (Included)
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Yoga sessions, personalised nutrition guidance and counselling support during your stay in India — because true healing encompasses physical, mental, and emotional care.
            </p>
          </div>

          <button
            onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full md:w-auto px-6 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0"
          >
            Inquire About Wellness Support
          </button>
        </div>
      </section>

      {/* DON'T SEE YOUR TREATMENT? SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/30">
              <HelpCircle className="w-3.5 h-3.5" />
              Custom Medical Requests
            </div>
            <h3 className="text-2xl font-bold font-outfit text-white">
              Don't see your treatment?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tell us what you need. Whatever the treatment, our specialised medical team will find the right hospital and specialist for you in India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Tell us what you need
            </button>
            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
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
