import React from 'react';
import { 
  Stethoscope, MessageCircle, FileText, CalendarCheck, Plane, HeartHandshake, 
  ShieldCheck, Award, Heart, CheckCircle2, ArrowRight, UserCheck, DollarSign,
  Sparkles, Building2, ChevronRight, Smile, Scissors, HelpCircle
} from 'lucide-react';
import TrustStrip from '../components/TrustStrip';
import { treatmentsData } from '../data/treatmentsData';

export default function HomePage({ setActivePage, setSelectedSpecialtyId }) {
  const steps = [
    {
      num: "01",
      title: "Send us your reports",
      desc: "On WhatsApp or through the form below. Free, and completely confidential.",
      icon: FileText
    },
    {
      num: "02",
      title: "We find the right hospital for you",
      desc: "Our specialised medical team studies your reports and matches you with the right hospital and specialist in India. Clear answers within 48 hours.",
      icon: CalendarCheck
    },
    {
      num: "03",
      title: "We arrange everything",
      desc: "Medical visa, flights, hospital admission, your stay, your food, your family — all handled.",
      icon: Plane
    },
    {
      num: "04",
      title: "We stay with you for 4 weeks",
      desc: "Back home, we're still one message away — simple WhatsApp check-ins for four weeks until you're properly back on your feet.",
      icon: HeartHandshake
    }
  ];

  const hospitalCategoryCards = [
    {
      title: "Accredited Hospitals",
      desc: "India's NABH and JCI accredited hospitals, for patients who want the highest recognised clinical and safety standards.",
      icon: Award,
      badge: "NABH & JCI Standard"
    },
    {
      title: "Hospitals of Every Category",
      desc: "Trusted multi-specialty and specialty hospitals across India, carefully selected by our doctors for quality of care and successful outcomes.",
      icon: Building2,
      badge: "Wide Hospital Network"
    },
    {
      title: "Packages for Your Budget",
      desc: "Tell us your budget and we will build a package around it: treatment, stay and travel, planned to fit your financial comfort.",
      icon: DollarSign,
      badge: "Custom Budget Fit"
    }
  ];

  const handleSelectSpecialty = (id) => {
    setSelectedSpecialtyId(id);
  };

  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20would%20like%20a%20free%20medical%20opinion.";

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
                <span>Specialised Medical Team • India's NABH & JCI Accredited Hospitals</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-outfit">
                World-class treatment in India,{' '}
                <span className="gradient-text">with one team beside you.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aarogyatra Global Care connects international patients to India's NABH and JCI accredited hospitals — <span className="font-semibold text-slate-900 underline decoration-teal-500 decoration-2">from your first message to your full recovery</span>.
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
                  href={primaryWhatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-emerald-500/25 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Founder Doctors Badge */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-600">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center ring-2 ring-white text-[10px]">
                    DR
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center ring-2 ring-white text-[10px]">
                    NS
                  </div>
                </div>
                <div>
                  <span className="font-bold text-slate-900">Dr. Dhyani Rathi (BHMS, MHA, FMC) & Dr. Nensi Savani (BDS, MHA)</span>
                  <p className="text-slate-500">Co-Founders & Managing Directors</p>
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
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Aarogyatra Promise</span>
                      <h3 className="text-xl font-bold text-slate-900 font-outfit">Healthcare Travel You Can Trust</h3>
                    </div>
                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </span>
                  </div>

                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Specialised Doctor Review:</strong> Clinical reports studied & matched with top specialists.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Budget & Hospital Options:</strong> NABH/JCI accredited & trusted hospitals for every budget.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>All-Inclusive Support:</strong> Visa, flights, hotel, food & attendant family support handled.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>4 Weeks of Aftercare:</strong> Simple WhatsApp check-ins until properly back on your feet.</span>
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
      <section id="how-it-works-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Seamless Patient Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit mt-3">
            How It Works
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            From your first message to your full recovery back home, our specialized team takes care of everything.
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

      {/* TREATMENTS WE FACILITATE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
              Specialised Medical Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit mt-2">
              Treatments & Specialties
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Treatment at India's NABH and JCI accredited hospitals, and at trusted multi-specialty hospitals across every category — with surgeons who have handled thousands of cases.
            </p>
          </div>

          <button
            onClick={() => { setActivePage('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors shrink-0"
          >
            <span>View All Specialties & Procedures</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                <span className="absolute bottom-3 left-3 text-white font-bold text-lg font-outfit leading-tight">
                  {treatment.title}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {treatment.shortDesc}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  <span>Explore Procedures</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DON'T SEE YOUR TREATMENT? BOX */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl p-8 border border-teal-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/30">
              <HelpCircle className="w-3.5 h-3.5" />
              Unlisted Medical Procedures
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

      {/* HOSPITALS & PACKAGES SECTION */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3.5 py-1.5 rounded-full border border-teal-500/20">
              Complete Budget Flexibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-white">
              A hospital and a package for every budget
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We are not limited to one kind of hospital. Alongside India's NABH and JCI accredited hospitals, we work with trusted multi-specialty hospitals across every category — so there is always a right option for your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hospitalCategoryCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-slate-800/90 rounded-3xl p-8 border border-slate-700/80 hover:border-teal-400 transition-all space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-700 text-teal-300 px-2.5 py-1 rounded-full border border-slate-600">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-outfit">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60">
                    <button
                      onClick={() => { setActivePage('free-opinion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5"
                    >
                      <span>Request Custom Package Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ABOUT US PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
              Leadership & Values
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-outfit">
              Two founders. One mission: healthcare travel you can trust.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              "Aarogya" means health. "Yatra" means journey. Aarogyatra Global Care LLP was founded to make medical travel to India simple, honest and human.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block text-base font-outfit">Dr. Dhyani Rathi</span>
                <span className="text-xs font-semibold text-teal-700 block">BHMS, MHA, FMC</span>
                <p className="text-xs text-slate-600">Co-Founder & Managing Director</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block text-base font-outfit">Dr. Nensi Savani</span>
                <span className="text-xs font-semibold text-teal-700 block">BDS, MHA</span>
                <p className="text-xs text-slate-600">Co-Founder & Managing Director</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center gap-3 bg-teal-50 p-6 rounded-2xl border border-teal-200 text-center">
            <h4 className="text-sm font-bold text-slate-900 font-outfit">Official Registration</h4>
            <p className="text-xs text-slate-600">Aarogyatra Global Care LLP<br />LLPIN: ACZ-7789<br />Modasa, Sabarkantha, Gujarat, India</p>
            <button
              onClick={() => { setActivePage('about-us'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-2 w-full py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl shadow-xs"
            >
              Read Full Founder Story
            </button>
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
                Send your reports. We'll reply within 48 hours.
              </h3>
              <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
                Our specialised medical team will study your reports and send recommended hospital options and a package built around your budget.
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
                href={primaryWhatsapp}
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
