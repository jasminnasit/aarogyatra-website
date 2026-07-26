import React from 'react';
import { 
  Stethoscope, MessageCircle, FileText, CalendarCheck, Plane, HeartHandshake, 
  ShieldCheck, Award, Heart, CheckCircle2, ArrowRight, UserCheck, DollarSign,
  Sparkles, Building2, ChevronRight
} from 'lucide-react';
import TrustStrip from '../components/TrustStrip';
import CostCalculator from '../components/CostCalculator';
import { treatmentsData } from '../data/treatmentsData';

export default function HomePage({ setActivePage, setSelectedSpecialtyId }) {
  const steps = [
    {
      num: "01",
      title: "Share Your Medical Reports",
      desc: "Send us your medical reports on WhatsApp or upload them here. It's 100% free, confidential, and reviewed by physicians.",
      icon: FileText
    },
    {
      num: "02",
      title: "Receive Doctor-Reviewed Plan",
      desc: "Within 48 hours, our doctor-founders review your case with partner hospital specialists and send a transparent cost estimate with no hidden fees.",
      icon: CalendarCheck
    },
    {
      num: "03",
      title: "We Arrange Everything",
      desc: "Medical visa invitation, airport pickup, hospital admission, hotel/guesthouse accommodation, and dedicated bilingual coordinator.",
      icon: Plane
    },
    {
      num: "04",
      title: "Recover With Us — 8-Week Aftercare",
      desc: "Our signature 8-week WhatsApp aftercare program keeps you connected to our doctors: medication reminders, recovery check-ins, and direct answers.",
      icon: HeartHandshake
    }
  ];

  const trustReasons = [
    {
      title: "We are doctors first.",
      desc: "Founded by two practising medical doctors. Every treatment plan, hospital recommendation, and cost estimate is evaluated by a physician — not a travel agent. We recommend what we would choose for our own families.",
      icon: Stethoscope,
      accent: "from-teal-500 to-emerald-600"
    },
    {
      title: "Complete cost transparency.",
      desc: "Receive a written, itemized estimate before you travel. Treatment in Gujarat typically costs 60–80% less than in the USA, UK, or private hospitals in East Africa — with zero compromise on quality.",
      icon: Award,
      accent: "from-blue-500 to-cyan-600"
    },
    {
      title: "Care for the whole person.",
      desc: "Alongside your surgical care, we offer optional yoga sessions, nutritionist consultations, and emotional counselling support — because true healing encompasses body and mind.",
      icon: Heart,
      accent: "from-rose-500 to-pink-600"
    },
    {
      title: "We speak your language.",
      desc: "English, Hindi, and Gujarati — with deep experience catering to patients travelling from Kenya, Uganda, Tanzania, the UK, and Canada.",
      icon: UserCheck,
      accent: "from-amber-500 to-orange-600"
    }
  ];

  const handleSelectSpecialty = (id) => {
    setSelectedSpecialtyId(id);
    setActivePage('specialty-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 lg:pt-20 pb-16 lg:pb-24 hero-radial-bg">
        {/* Decorative Blurred Shapes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-200/40 to-cyan-200/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-teal-300 text-xs font-semibold tracking-wide shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Doctor-Founded • Gujarat's Leading NABH Hospitals</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-outfit">
                World-Class Treatment in India.{' '}
                <span className="gradient-text">Guided by Doctors Who Care Like Family.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aarogyatra connects international patients to Gujarat's leading NABH-accredited multi-specialty hospitals — with every case personally reviewed by our doctor-founders, and support that continues for <span className="font-semibold text-slate-900 underline decoration-teal-500 decoration-2">8 weeks after you return home</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-base rounded-2xl shadow-lg shadow-teal-600/30 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-5 h-5" />
                  <span>Get a Free Medical Opinion</span>
                </button>

                <a
                  href="https://wa.me/919900000000?text=Hello%20Aarogyatra,%20I%20would%20like%20a%20free%20medical%20opinion."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-emerald-500/25 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Doctor Founder Badge */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center ring-2 ring-white text-[10px]">
                    DD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center ring-2 ring-white text-[10px]">
                    NS
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-slate-800">Dr. Dhyani & Dr. Nensi Savani, MBBS</span>
                  <p>Co-Founders & Medical Directors</p>
                </div>
              </div>

            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-40"></div>
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Aarogyatra Advantage</span>
                      <h3 className="text-xl font-bold text-slate-900 font-outfit">Doctor-Led Medical Care</h3>
                    </div>
                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </span>
                  </div>

                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Doctor Case Review:</strong> Clinical reports analyzed before you spend a single rupee.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Save 60-80%:</strong> Top NABH hospital quality at transparent India prices.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Dedicated Coordinator:</strong> English, Hindi & Gujarati assistance by your side.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Aarogyatra Aftercare™:</strong> 8 weeks of continuous remote check-ins after you fly home.</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Upload Reports For Free Opinion</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* HOW IT WORKS (4 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Seamless Patient Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit mt-3">
            How Aarogyatra Works in 4 Simple Steps
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            From your first inquiry to your full recovery back home, our medical team handles every detail with complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200/80 hover:shadow-xl hover:border-teal-300 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-200 font-outfit group-hover:text-teal-600 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-outfit mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY PATIENTS TRUST AAROGYATRA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
              The Doctor-Founded Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit mt-3">
              Why Patients & Families Trust Aarogyatra
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              We are medical practitioners first. We recommend what we would choose for our own loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div key={idx} className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 hover:border-teal-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${reason.accent} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-outfit mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TREATMENTS WE FACILITATE (CARDS GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
              Specialized Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit mt-2">
              Treatments We Facilitate
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Delivered at NABH-accredited partner hospitals by internationally trained surgical teams.
            </p>
          </div>

          <button
            onClick={() => { setActivePage('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
          >
            <span>View All Specialties & Indicative Costs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {treatmentsData.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => handleSelectSpecialty(treatment.id)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:border-teal-400 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={treatment.heroImage}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white font-bold text-base font-outfit leading-tight">
                  {treatment.title}
                </span>
              </div>

              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {treatment.shortDesc}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  <span>View Details & Costs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COST CALCULATOR INTERACTIVE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostCalculator onGetOpinionClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      </section>

      {/* OUR PARTNER HOSPITALS (COMPLIANCE BANNER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-10 border border-slate-200 text-center space-y-4">
          <div className="w-12 h-12 bg-white text-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-outfit">
            Our Hospital Partnerships in Gujarat
          </h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            We partner exclusively with <span className="font-semibold text-slate-900">NABH-accredited multi-specialty hospitals</span> in Ahmedabad, Surat, and Vadodara — Gujarat's premier healthcare destinations equipped with state-of-the-art operation theaters, ICUs, and international patient suites.
          </p>
          <div className="pt-2 text-xs font-medium text-slate-500 italic">
            *Hospital partner names & MOUs showcased upon final agreement execution.
          </div>
        </div>
      </section>

      {/* CLOSING CTA BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center sm:text-left">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-500/30">
                Zero Cost • Zero Obligation
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-outfit text-white tracking-tight">
                Not sure where to start? Send us your reports.
              </h3>
              <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
                A medical doctor will personally review your history and reply within 48 hours — completely free of charge.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
              <button
                onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-2xl shadow-xl transition-all active:scale-95"
              >
                Get Free Medical Opinion
              </button>

              <a
                href="https://wa.me/919900000000?text=Hello%20Aarogyatra,%20I%20would%20like%20a%20free%20medical%20opinion."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Us Direct</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
