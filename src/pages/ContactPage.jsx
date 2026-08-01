import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock, Phone, Send, CheckCircle2, ShieldCheck, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const primaryWhatsapp = "https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20have%20an%20inquiry.";

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 hero-radial-bg border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-500/30">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white leading-tight">
            Contact Aarogyatra Global Care LLP
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Have a question about treatments, budget packages, or travel logistics? We reply within 48 hours, usually much faster.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-8 flex flex-col justify-between border border-slate-800">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-outfit text-white">
              Direct Contact Details
            </h3>

            {/* WhatsApp Primary */}
            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all text-white group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">Primary WhatsApp (Click to Chat)</span>
                <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">+91 74339 28339</span>
                <p className="text-xs text-slate-400 mt-0.5">Secondary: +91 81693 87848</p>
              </div>
            </a>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block">Email Inquiry</span>
                <a href="mailto:connect@aarogyatraglobalcare.com" className="text-sm font-semibold text-white hover:underline">connect@aarogyatraglobalcare.com</a>
                <p className="text-xs text-slate-400 mt-0.5">Detailed medical reports & package requests</p>
              </div>
            </div>

            {/* Instagram */}
            <a
              href="https://instagram.com/aarogyatra_global_care"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800 border border-slate-700 hover:border-pink-500/50 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-pink-400 font-bold uppercase tracking-wider block">Instagram</span>
                <span className="text-sm font-semibold text-white">@aarogyatra_global_care</span>
                <p className="text-xs text-slate-400 mt-0.5">Follow our patient stories & updates</p>
              </div>
            </a>

            {/* Office */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block">Registered Office</span>
                <span className="text-sm font-semibold text-white">Modasa, Sabarkantha</span>
                <p className="text-xs text-slate-400 mt-0.5">Gujarat, India</p>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
            Aarogyatra Global Care LLP · LLPIN ACZ-7789 · Gujarat, India
          </div>
        </div>

        {/* Right Column: Quick Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/90">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-outfit">
                Message Sent Successfully!
              </h3>
              <p className="text-slate-700 text-sm max-w-md mx-auto">
                Thank you for contacting Aarogyatra. Our specialised medical team will reply to your message within 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 font-outfit mb-2">
                Send Us a Direct Message
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    placeholder="+254 700 000 000"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Message / Medical Inquiry *</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us what medical treatment or budget package you need..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden resize-none text-slate-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
