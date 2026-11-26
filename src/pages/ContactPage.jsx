import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, MapPin, Phone, Send, CheckCircle2, Instagram, Loader2, AlertCircle, Lock } from 'lucide-react';
import { allCountries } from '../components/MedicalOpinionForm';
import { treatmentsData } from '../data/treatmentsData';
import { sendEmailNotification } from '../services/emailService';
import { trackEvent } from '../utils/analytics';

const treatmentCategories = [
  ...treatmentsData.map((t) => t.title),
  'Other / Not Sure'
];

const contactMethods = ['WhatsApp', 'Email', 'Phone Call'];

export default function ContactPage({ initialTreatment = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({ 
    name: '', 
    country: 'Kenya (+254)',
    email: '', 
    whatsapp: '', 
    treatmentCategory: initialTreatment && treatmentCategories.includes(initialTreatment) ? initialTreatment : treatmentCategories[0],
    preferredContactMethod: 'WhatsApp',
    message: '' 
  });

  useEffect(() => {
    if (initialTreatment && treatmentCategories.includes(initialTreatment)) {
      setFormData((prev) => ({ ...prev, treatmentCategory: initialTreatment }));
    }
  }, [initialTreatment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendEmailNotification({
        subject: `New Contact Enquiry (${formData.treatmentCategory}) from ${formData.name}`,
        name: formData.name,
        country: formData.country,
        email: formData.email,
        whatsapp: formData.whatsapp,
        treatmentCategory: formData.treatmentCategory,
        preferredContactMethod: formData.preferredContactMethod,
        message: formData.message,
        sourceForm: 'Contact Page'
      });

      trackEvent('generate_lead', {
        event_category: 'conversion',
        event_label: 'Contact Enquiry Form',
        form_name: 'Contact Enquiry Form',
        preferred_contact_method: formData.preferredContactMethod,
        country: formData.country
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError(err.message || 'Something went wrong while sending your enquiry. Please try again or WhatsApp us.');
    } finally {
      setIsSubmitting(false);
    }
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
            <h2 className="text-2xl font-bold font-outfit text-white">
              Direct Contact Details
            </h2>

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

            {/* Direct Phone */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block">Direct Phone Call</span>
                <a href="tel:+917433928339" className="text-sm font-semibold text-white hover:underline block">+91 74339 28339</a>
                <a href="tel:+918169387848" className="text-xs text-slate-300 hover:underline block mt-0.5">+91 81693 87848</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block">Email Inquiry</span>
                <a href="mailto:connect@aarogyatraglobalcare.com" className="text-sm font-semibold text-white hover:underline">connect@aarogyatraglobalcare.com</a>
                <p className="text-xs text-slate-400 mt-0.5">Enquiries & travel coordination</p>
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

        {/* Right Column: Enquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/90">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-outfit">
                Enquiry Received
              </h2>
              <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for contacting Aarogyatra Global Care. We have received your enquiry and our team will get in touch.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl cursor-pointer"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-outfit mb-2">
                Send Us an Enquiry
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="contact-country" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Country *</label>
                  <select
                    id="contact-country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                  >
                    {allCountries.map((c, idx) => (
                      <option key={idx} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">WhatsApp / Phone *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+254 700 000 000"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-treatment" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Treatment Category *</label>
                  <select
                    id="contact-treatment"
                    value={formData.treatmentCategory}
                    onChange={(e) => setFormData({ ...formData, treatmentCategory: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                  >
                    {treatmentCategories.map((cat, idx) => (
                      <option key={idx} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-method" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Preferred Contact Method *</label>
                  <select
                    id="contact-method"
                    value={formData.preferredContactMethod}
                    onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-900"
                  >
                    {contactMethods.map((method, idx) => (
                      <option key={idx} value={method}>{method}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Brief Message *</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly share the treatment you are exploring or your enquiry..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-hidden resize-none text-slate-900"
                ></textarea>
              </div>

              {submitError && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>

              <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-2 leading-relaxed">
                <Lock className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  Please do not upload or enter detailed medical records in this enquiry form. Our team will guide you on the appropriate way to share medical information if required.
                </span>
              </p>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
