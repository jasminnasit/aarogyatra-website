import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/917433928339?text=Hello%20Aarogyatra,%20I%20would%20like%20a%20free%20medical%20opinion.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip hint */}
      <div className="hidden md:flex items-center bg-slate-900 text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 animate-in fade-in slide-in-from-right-4 duration-300">
        <span>Chat with Medical Team on WhatsApp</span>
        <div className="w-2 h-2 bg-slate-900 rotate-45 -mr-1.5 ml-1 border-r border-t border-slate-800"></div>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping group-hover:opacity-100"></span>
        <MessageCircle className="w-7 h-7 relative z-10 fill-white/20 stroke-[2.2]" />
      </a>
    </div>
  );
}
