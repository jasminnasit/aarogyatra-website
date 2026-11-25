import React from 'react';
import { MessageCircle, Mail, MapPin, Shield, Instagram, Phone } from 'lucide-react';
import { getPathForRoute } from '../utils/routes';
import { treatmentsData } from '../data/treatmentsData';

export default function Footer({ setActivePage, setSelectedSpecialtyId }) {
  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    setActivePage(pageId);
  };

  const handleSpecialtyClick = (e, id) => {
    e.preventDefault();
    if (setSelectedSpecialtyId) {
      setSelectedSpecialtyId(id);
    } else {
      setActivePage('treatments');
    }
  };

  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20would%20like%20a%20free%20medical%20opinion.";

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="Aarogyatra Global Care Logo" 
                className="h-14 w-auto object-contain rounded-xl bg-white p-1 shadow-md" 
              />
              <div>
                <span className="font-outfit font-bold text-2xl text-white tracking-tight block">
                  AAROGYATRA <span className="text-teal-400 font-light">GLOBAL CARE</span>
                </span>
                <span className="text-xs text-slate-400 tracking-wide block">
                  Your journey to better health
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Aarogyatra Global Care LLP connects international patients to India's NABH and JCI accredited hospitals - from your first message to your full recovery. Healthcare travel you can trust.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a 
                href={primaryWhatsapp} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </a>

              <a 
                href="https://instagram.com/aarogyatra_global_care" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@aarogyatra_global_care</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-outfit font-semibold mb-4 tracking-wide uppercase text-xs text-teal-400">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href={getPathForRoute('home')} onClick={(e) => handleNavClick(e, 'home')} className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href={getPathForRoute('treatments')} onClick={(e) => handleNavClick(e, 'treatments')} className="hover:text-teal-400 transition-colors">Treatments</a></li>
              <li><a href={getPathForRoute('hospitals-packages')} onClick={(e) => handleNavClick(e, 'hospitals-packages')} className="hover:text-teal-400 transition-colors">Hospitals & Packages</a></li>
              <li><a href={getPathForRoute('patient-journey')} onClick={(e) => handleNavClick(e, 'patient-journey')} className="hover:text-teal-400 transition-colors">Patient Journey</a></li>
              <li><a href={getPathForRoute('faqs')} onClick={(e) => handleNavClick(e, 'faqs')} className="hover:text-teal-400 transition-colors">FAQs</a></li>
              <li><a href={getPathForRoute('about-us')} onClick={(e) => handleNavClick(e, 'about-us')} className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href={getPathForRoute('free-opinion')} onClick={(e) => handleNavClick(e, 'free-opinion')} className="hover:text-teal-400 transition-colors text-teal-300 font-medium">Free Medical Opinion</a></li>
              <li><a href={getPathForRoute('contact')} onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div>
            <h3 className="font-outfit font-semibold mb-4 tracking-wide uppercase text-xs text-teal-400">
              Specialties
            </h3>
            <ul className="space-y-2.5 text-sm">
              {treatmentsData.map((treatment) => (
                <li key={treatment.id}>
                  <a
                    href={getPathForRoute('specialty-detail', treatment.id)}
                    onClick={(e) => handleSpecialtyClick(e, treatment.id)}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {treatment.pageTitle || treatment.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & LLP Info */}
          <div>
            <h3 className="font-outfit font-semibold mb-4 tracking-wide uppercase text-xs text-teal-400">
              Contact & Entity
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Registered Office: Modasa, Sabarkantha, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:connect@aarogyatraglobalcare.com" className="hover:text-teal-400 transition-colors">connect@aarogyatraglobalcare.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div>
                    <a href="tel:+917433928339" className="hover:text-teal-400 transition-colors">+91 74339 28339</a>
                  </div>
                  <div className="text-xs text-slate-400">
                    <a href="tel:+918169387848" className="hover:text-teal-400 transition-colors">+91 81693 87848</a>
                  </div>
                </div>
              </li>
              <li className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                Aarogyatra Global Care LLP<br />
                LLPIN: ACZ-7789<br />
                Co-Founders & Managing Directors:<br />
                Dr. Dhyani Rathi - BHMS, MHA, FMC<br />
                Dr. Nensi Savani - BDS, MHA
              </li>
            </ul>
          </div>

        </div>

        {/* Medical Disclaimer Banner */}
        <div className="py-6 border-b border-slate-800/80 bg-slate-900/60 rounded-xl px-6 my-8">
          <div className="flex items-start gap-3 text-xs text-slate-400 leading-relaxed">
            <Shield className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-200 font-semibold">Medical Disclaimer:</strong> Aarogyatra Global Care LLP is a medical travel facilitator. All medical treatment is provided by partner hospitals and their licensed physicians. Information on this website is not medical advice. No guaranteed medical outcomes are implied. Consultations are purely advisory prior to hospital admission and treatment evaluation.
            </p>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Aarogyatra Global Care LLP · LLPIN ACZ-7789 · Modasa, Gujarat, India</p>
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
