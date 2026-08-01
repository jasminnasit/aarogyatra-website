import React from 'react';
import { UserCheck, Building2, TrendingDown, Clock, ShieldCheck, Plane } from 'lucide-react';

export default function TrustStrip() {
  const trustPoints = [
    {
      icon: Building2,
      title: "NABH & JCI Accredited",
      subtitle: "Highest hospital standards in India"
    },
    {
      icon: UserCheck,
      title: "Specialised Medical Team",
      subtitle: "Cases reviewed by doctor directors"
    },
    {
      icon: Plane,
      title: "Visa & Travel Support",
      subtitle: "e-Visa guidance & attendant visas"
    },
    {
      icon: Clock,
      title: "4 Weeks of Aftercare",
      subtitle: "Continuous WhatsApp check-ins back home"
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-6 border-y border-slate-800 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex items-center gap-3.5 ${idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-sm text-slate-100 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
