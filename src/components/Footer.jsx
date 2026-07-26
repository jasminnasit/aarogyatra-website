import React from 'react';
import { Heart, MessageCircle, Mail, MapPin, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-bold shadow-md">
                AY
              </div>
              <span className="font-outfit font-bold text-2xl text-white tracking-tight">
                AAROGYATRA <span className="text-teal-400 font-light">CARE</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Aarogyatra Global Care LLP is a doctor-founded medical travel facilitator connecting international patients from Kenya, Uganda, Tanzania, UK, and Canada to Gujarat's leading NABH-accredited hospitals with transparent costs and an 8-week aftercare guarantee.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://wa.me/919900000000?text=Hello%20Aarogyatra,%20I%20would%20like%20a%20free%20medical%20opinion." 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-outfit text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-teal-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-teal-400 transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('treatments')} className="hover:text-teal-400 transition-colors">Treatments We Facilitate</button></li>
              <li><button onClick={() => handleNavClick('why-us')} className="hover:text-teal-400 transition-colors">Why Gujarat & Why Us</button></li>
              <li><button onClick={() => handleNavClick('international-patients')} className="hover:text-teal-400 transition-colors">For International Patients</button></li>
              <li><button onClick={() => handleNavClick('about-us')} className="hover:text-teal-400 transition-colors">About Us (Founders)</button></li>
              <li><button onClick={() => handleNavClick('free-opinion')} className="hover:text-teal-400 transition-colors text-teal-300 font-medium">Get Free Medical Opinion</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-teal-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div>
            <h4 className="font-outfit text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-teal-400">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => handleNavClick('treatments')} className="hover:text-teal-400 transition-colors">Cardiac Care & CABG</button></li>
              <li><button onClick={() => handleNavClick('treatments')} className="hover:text-teal-400 transition-colors">Joint Replacement & Orthopedics</button></li>
              <li><button onClick={() => handleNavClick('treatments')} className="hover:text-teal-400 transition-colors">Oncology & Cancer Treatment</button></li>
              <li><button onClick={() => handleNavClick('treatments')} className="hover:text-teal-400 transition-colors">Kidney, Urology & Stones</button></li>
              <li><button onClick={() => handleNavClick('treatments')} className="hover:text-teal-400 transition-colors">General & Advanced Surgery</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & LLP Info */}
          <div>
            <h4 className="font-outfit text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-teal-400">
              Contact & Entity
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Registered Office: Modasa, Sabarkantha, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:care@aarogyatra.com" className="hover:text-teal-400 transition-colors">care@aarogyatra.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: +91-9900000000</span>
              </li>
              <li className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                Registered LLP (India)<br />
                Co-Founders: Dr. Dhyani & Dr. Nensi Savani, MBBS
              </li>
            </ul>
          </div>

        </div>

        {/* Medical Disclaimer Banner */}
        <div className="py-6 border-b border-slate-800/80 bg-slate-900/60 rounded-xl px-6 my-8">
          <div className="flex items-start gap-3 text-xs text-slate-400 leading-relaxed">
            <Shield className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-200 uppercase tracking-wide">Medical Disclaimer:</span> Aarogyatra Global Care LLP is a medical travel facilitator connecting patients with accredited healthcare institutions and licensed specialists. All medical evaluation, diagnosis, surgery, and clinical care are performed strictly by qualified medical personnel at partner NABH-accredited hospitals in Gujarat, India. Cost estimates provided are indicative and finalized after detailed physician assessment of official medical records.
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Aarogyatra Global Care LLP. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="#disclaimer" className="hover:text-slate-200 transition-colors">Medical Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
