import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Menu, X, Heart, ShieldCheck, Stethoscope } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'hospitals-packages', label: 'Hospitals & Packages' },
    { id: 'your-journey', label: 'Your Journey' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    if (pageId === 'how-it-works') {
      setActivePage('home');
      setMobileMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById('how-it-works-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20would%20like%20a%20free%20medical%20opinion.";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              Specialised Medical Team
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">India's NABH & JCI Accredited Hospitals • 4 Weeks Aftercare</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={primaryWhatsapp}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp: +91 74339 28339</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1 text-[11px] font-medium text-teal-300 bg-slate-800 px-2 py-0.5 rounded">
              🌐 EN / GU / HI
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Strictly Single Line Height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 xl:h-20 flex-nowrap gap-2">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group shrink-0"
          >
            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <Stethoscope className="w-5 h-5 xl:w-6 xl:h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-lg xl:text-xl tracking-tight text-slate-900 font-outfit">
                  AAROGYATRA
                </span>
                <span className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 px-1 py-0.5 rounded">
                  CARE
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide hidden sm:block">
                GLOBAL CARE LLP
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links - Single Line, No Wrap */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-nowrap">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-all ${
                  activePage === link.id
                    ? 'text-teal-700 bg-teal-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right CTA Buttons - Single Line */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('free-opinion')}
              className="relative inline-flex items-center justify-center px-4 xl:px-5 py-2 text-xs xl:text-sm font-semibold text-white whitespace-nowrap transition-all bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl shadow-md hover:from-teal-700 hover:to-teal-800 hover:shadow-lg hover:shadow-teal-600/25 active:scale-95"
            >
              Get Free Medical Opinion
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2 shrink-0">
            <button
              onClick={() => handleNavClick('free-opinion')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 rounded-lg shadow-xs whitespace-nowrap"
            >
              Free Opinion
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                activePage === link.id
                  ? 'text-teal-700 bg-teal-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('free-opinion')}
              className="w-full text-center py-3 text-base font-semibold text-white bg-teal-600 rounded-xl shadow-md"
            >
              Get a Free Medical Opinion
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
