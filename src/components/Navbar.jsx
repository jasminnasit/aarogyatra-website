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
            <img 
              src="./logo.jpg" 
              alt="Aarogyatra Global Care Logo" 
              className="h-10 xl:h-12 w-auto object-contain rounded-lg shadow-xs group-hover:scale-105 transition-transform bg-white p-0.5" 
            />
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-base xl:text-lg tracking-tight text-slate-900 font-outfit leading-tight">
                AAROGYATRA
              </span>
              <span className="text-[10px] xl:text-[11px] text-teal-700 font-bold tracking-wider uppercase leading-none mt-0.5">
                GLOBAL CARE LLP
              </span>
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
