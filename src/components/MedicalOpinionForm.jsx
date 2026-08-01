import React, { useState } from 'react';
import { Send, Upload, CheckCircle2, MessageCircle, FileText, Lock, ShieldCheck } from 'lucide-react';

export default function MedicalOpinionForm({ compact = false }) {
  const [formData, setFormData] = useState({
    fullName: '',
    country: 'Kenya (+254)',
    whatsappNumber: '',
    medicalCondition: '',
    language: 'English',
    files: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const countries = [
    'Kenya (+254)',
    'Uganda (+256)',
    'Tanzania (+255)',
    'United Kingdom (+44)',
    'Canada (+1)',
    'Ethiopia (+251)',
    'Nigeria (+234)',
    'Other International'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files).map(f => f.name);
      setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      const newFiles = Array.from(e.target.files).map(f => f.name);
      setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.whatsappNumber) {
      alert("Please fill in your name and WhatsApp number.");
      return;
    }
    setIsSubmitted(true);
  };

  const primaryWhatsappUrl = `https://wa.me/917433928339?text=Hello%20Aarogyatra%20Global%20Care,%20I%20would%20like%20a%20free%20doctor%20opinion.%20My%20name%20is%20${encodeURIComponent(formData.fullName || 'Patient')}`;

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-teal-200 text-center space-y-6 animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-outfit">
            Medical Opinion Request Received!
          </h3>
          <p className="text-slate-600 mt-2 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our specialised medical team will study your reports and send a clear doctor-reviewed response to <span className="font-semibold text-teal-700">{formData.whatsappNumber}</span> within <span className="font-bold text-slate-900">48 hours</span>.
          </p>
        </div>

        <div className="bg-teal-50/80 border border-teal-200/80 rounded-2xl p-4 text-xs text-teal-900 text-left max-w-md mx-auto space-y-2">
          <div className="font-semibold flex items-center gap-1.5 text-teal-950">
            <ShieldCheck className="w-4 h-4 text-teal-700" />
            What you will receive:
          </div>
          <p>✓ A medical opinion on your case</p>
          <p>✓ Recommended hospital & specialist options in India</p>
          <p>✓ Clear next steps & package built around your budget</p>
          <p>✓ 4 weeks of aftercare follow-up when you return</p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl ${compact ? 'p-6' : 'p-8 sm:p-10'} shadow-2xl border border-slate-200/80 relative overflow-hidden`}>
      {/* Top Banner */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full mb-2">
          <Lock className="w-3.5 h-3.5" />
          No Charge • No Obligation • 100% Confidential
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit tracking-tight">
          Send Your Reports. We'll Reply Within 48 Hours.
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Your information is confidential and reviewed only by our specialised medical team.
        </p>

        {/* Benefits checklist */}
        <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-medium text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-200/60">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Medical opinion on your case</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Hospital & specialist options</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Package built around your budget</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Clear next steps & visa support</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. John Okoth / Mary Wanjiku"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden transition-all"
          />
        </div>

        {/* Country & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Country *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden transition-all"
            >
              {countries.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              name="whatsappNumber"
              required
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              placeholder="+254 700 000 000"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden transition-all"
            />
          </div>
        </div>

        {/* Medical Condition */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Medical Condition or Treatment Needed (Include budget / custom requests)
          </label>
          <textarea
            name="medicalCondition"
            rows="3"
            value={formData.medicalCondition}
            onChange={handleInputChange}
            placeholder="Describe your medical condition, treatment needed, or target budget... (Unlisted treatments & custom budget packages welcomed!)"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden transition-all resize-none"
          ></textarea>
        </div>

        {/* File Drag and Drop */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Upload Medical Reports / Scans (Optional)
          </label>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleFileDrop}
            className={`border-2 border-dashed rounded-2xl p-4 text-center transition-all cursor-pointer ${
              dragActive ? 'border-teal-500 bg-teal-50' : 'border-slate-300 bg-slate-50/60 hover:bg-slate-100/60'
            }`}
          >
            <input
              type="file"
              multiple
              onChange={handleFileInput}
              className="hidden"
              id="report-file-input"
            />
            <label htmlFor="report-file-input" className="cursor-pointer">
              <Upload className="w-6 h-6 text-teal-600 mx-auto mb-1.5" />
              <p className="text-xs font-medium text-slate-700">
                Drag & drop your PDF, JPG, or DICOM files here, or <span className="text-teal-600 underline">browse</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                (You can also send reports directly via WhatsApp later)
              </p>
            </label>
          </div>

          {formData.files.length > 0 && (
            <div className="mt-2 space-y-1">
              {formData.files.map((file, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200">
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{file}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preferred Language */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Preferred Communication Language
          </label>
          <div className="grid grid-cols-3 gap-2">
            {['English', 'Gujarati', 'Hindi'].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, language: lang }))}
                className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                  formData.language === lang
                    ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-base rounded-2xl shadow-lg shadow-teal-600/25 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit for Free Doctor Opinion & Package Quote</span>
          </button>
        </div>

        {/* Alternative WhatsApp Direct CTA */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-3 text-slate-400 font-semibold">Or</span></div>
        </div>

        <a
          href={primaryWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-sm rounded-2xl transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
          <span>Prefer WhatsApp? Chat Directly (+91 74339 28339)</span>
        </a>

        {/* Reassurance text */}
        <p className="text-[11px] text-slate-400 text-center leading-snug pt-2">
          🔒 Your medical information is confidential and evaluated exclusively by our specialised medical team. Zero obligation.
        </p>

      </form>
    </div>
  );
}
