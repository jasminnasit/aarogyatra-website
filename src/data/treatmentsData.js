export const treatmentsData = [
  {
    id: "cardiac-care",
    title: "Cardiac Care",
    slug: "cardiac-care",
    tagline: "Advanced Heart Surgery & Cardiology by Renowned Specialists",
    shortDesc: "Bypass surgery, valve replacement, angioplasty, and pediatric cardiac procedures at Gujarat's premier accredited heart hospitals.",
    iconName: "HeartPulse",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Coronary Artery Disease (CAD)",
      "Heart Valve Defects & Stenosis",
      "Heart Failure & Cardiomyopathy",
      "Arrhythmia & Pacemaker Needs",
      "Congenital Heart Defects in Adults & Children",
      "Aortic Aneurysms & Vascular Conditions"
    ],
    procedures: [
      "Coronary Artery Bypass Grafting (CABG)",
      "Heart Valve Repair & Replacement (TAVR / TAVI)",
      "Angioplasty & Stenting (DES)",
      "Pacemaker & ICD Implantation",
      "Pediatric Cardiac Surgery",
      "Electrophysiology Studies & Ablation"
    ],
    costMatrix: [
      { procedure: "CABG (Heart Bypass)", gujarat: "$4,500 – $6,800", usa: "$40,000 – $70,000", uk: "$18,000 – $25,000", eastAfrica: "$9,000 – $14,000" },
      { procedure: "Heart Valve Replacement", gujarat: "$5,000 – $7,500", usa: "$45,000 – $80,000", uk: "$20,000 – $28,000", eastAfrica: "$10,000 – $16,000" },
      { procedure: "Angioplasty with 1 Stent", gujarat: "$2,200 – $3,500", usa: "$18,000 – $30,000", uk: "$9,000 – $14,000", eastAfrica: "$5,000 – $8,000" }
    ],
    hospitalStayDays: "4–6 days in Hospital (ICU + Ward)",
    indiaStayDays: "12–16 days total in India",
    whatsIncluded: [
      "Pre-operative cardiac evaluation & diagnostic tests",
      "Surgeon fee, Anesthesiologist fee, & ICU charges",
      "FDA/CE-approved implants and stents",
      "Dedicated bilingual medical coordinator",
      "Airport pickup & drop-off",
      "8-Week Aarogyatra Aftercare™ post-return"
    ],
    aftercareDetails: "Comprehensive cardiac rehabilitation protocol, Remote ECG & blood pressure monitoring via WhatsApp, direct surgeon check-in at 2 & 6 weeks, medication adjustments, and dietary guidelines."
  },
  {
    id: "orthopedics-joint-replacement",
    title: "Orthopedics & Joint Replacement",
    slug: "orthopedics-joint-replacement",
    tagline: "Knee & Hip Replacement in India — Walk Again, Pain-Free",
    shortDesc: "Total knee replacement, total hip replacement, arthroscopy, spine surgery, and sports injury treatment at Gujarat's leading orthopedic centres.",
    iconName: "Activity",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Severe Osteoarthritis & Rheumatoid Arthritis",
      "Hip Avascular Necrosis (AVN)",
      "Degenerative Disc Disease & Herniated Discs",
      "Ligament Injuries (ACL/PCL Tears)",
      "Complex Fractures & Non-Union",
      "Spinal Stenosis & Scoliosis"
    ],
    procedures: [
      "Robotic & Minimally Invasive Total Knee Replacement",
      "Total & Partial Hip Replacement",
      "Spinal Fusion & Microdiscectomy",
      "Arthroscopic Knee & Shoulder Repair",
      "Revision Joint Replacement Surgery",
      "Deformity Correction & Complex Trauma"
    ],
    costMatrix: [
      { procedure: "Total Knee Replacement (Single)", gujarat: "$4,000 – $6,500", usa: "$35,000 – $50,000", uk: "$15,000 – $20,000", eastAfrica: "$8,000 – $12,000" },
      { procedure: "Total Hip Replacement", gujarat: "$4,500 – $7,000", usa: "$32,000 – $45,000", uk: "$14,000 – $18,000", eastAfrica: "$9,000 – $13,000" },
      { procedure: "ACL Reconstruction Arthroscopy", gujarat: "$2,000 – $3,200", usa: "$15,000 – $22,000", uk: "$7,000 – $10,000", eastAfrica: "$4,000 – $6,000" }
    ],
    hospitalStayDays: "4–5 days in Hospital",
    indiaStayDays: "10–14 days total in India",
    whatsIncluded: [
      "US-FDA approved implants (Stryker, DePuy, Zimmer)",
      "Physiotherapist sessions during hospital stay",
      "Private room, nursing care & all meals",
      "Medical coordinator & transport",
      "Customized home exercise program & mobility aids",
      "8-Week Aarogyatra Aftercare™ post-return"
    ],
    aftercareDetails: "Weekly WhatsApp video check-in with our physiotherapy specialist, incision healing review, mobility progress tracking, and medication guidance."
  },
  {
    id: "oncology",
    title: "Oncology (Cancer Care)",
    slug: "oncology",
    tagline: "Comprehensive, Compassionate & Advanced Cancer Management",
    shortDesc: "Surgical oncology, precision chemotherapy, radiation therapy, and immunotherapy guided by multidisciplinary tumor boards.",
    iconName: "ShieldAlert",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Breast, Ovarian & Cervical Cancers",
      "Gastrointestinal & Colorectal Cancers",
      "Head, Neck & Thyroid Cancers",
      "Prostate & Urological Cancers",
      "Lung & Thoracic Malignancies",
      "Lymphomas & Blood Disorders"
    ],
    procedures: [
      "Laparoscopic & Robotic Surgical Oncology",
      "Targeted Chemotherapy & Immunotherapy",
      "Linear Accelerator (LINAC) Radiation Therapy",
      "Surgical Tumor Resection & Reconstruction",
      "PET-CT & Molecular Tumor Profiling",
      "Palliative Care & Integrative Oncology Support"
    ],
    costMatrix: [
      { procedure: "Onco-Surgery (Tumor Resection)", gujarat: "$3,800 – $6,500", usa: "$35,000 – $60,000", uk: "$16,000 – $25,000", eastAfrica: "$8,000 – $13,000" },
      { procedure: "Chemotherapy (per cycle)", gujarat: "$400 – $900", usa: "$4,000 – $9,000", uk: "$2,000 – $3,500", eastAfrica: "$1,000 – $1,800" },
      { procedure: "Radiation Therapy (Full Course)", gujarat: "$3,000 – $4,800", usa: "$25,000 – $45,000", uk: "$12,000 – $18,000", eastAfrica: "$6,000 – $9,500" }
    ],
    hospitalStayDays: "3–7 days (Surgery) / Day Care (Chemo/Radiation)",
    indiaStayDays: "14–21 days depending on treatment protocol",
    whatsIncluded: [
      "Multidisciplinary Tumor Board opinion before arrival",
      "Biopsy, PET-CT scan & pathology verification",
      "Surgery or Chemo/Radiation administration",
      "Onco-nutrition consultation & psychological counselling",
      "8-Week Aarogyatra Aftercare™ post-return"
    ],
    aftercareDetails: "Post-chemotherapy symptom monitoring, blood count check reviews via WhatsApp, dietary support for immunity, and follow-up scan scheduling."
  },
  {
    id: "kidney-urology",
    title: "Kidney & Urology",
    slug: "kidney-urology",
    tagline: "State-of-the-Art Renal Care, Dialysis & Minimally Invasive Surgery",
    shortDesc: "Kidney stone removal (laser RIRC/PCNL), prostate surgery (TURP/HoLEP), kidney transplant evaluation, and urological oncology.",
    iconName: "Droplet",
    heroImage: "https://images.unsplash.com/photo-1581595220892-6a8ce56e493f?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Kidney Stones (Renal Calculi)",
      "Benign Prostatic Hyperplasia (BPH)",
      "Chronic Kidney Disease (CKD) & End-Stage Renal Failure",
      "Bladder & Kidney Tumors",
      "Urethral Strictures & Urinary Incontinence",
      "Congenital Urological Anomalies"
    ],
    procedures: [
      "Laser Kidney Stone Surgery (RIRP / PCNL / URSL)",
      "HoLEP & TURP Prostate Surgery",
      "Laparoscopic Nephrectomy (Kidney Removal)",
      "Hemodialysis & Vascular Access (AV Fistula)",
      "Kidney Transplant Workup & Facilitation",
      "Reconstructive Urology"
    ],
    costMatrix: [
      { procedure: "Laser Kidney Stone Surgery (PCNL/RIRP)", gujarat: "$1,800 – $2,800", usa: "$15,000 – $24,000", uk: "$6,500 – $9,500", eastAfrica: "$3,800 – $5,500" },
      { procedure: "HoLEP / TURP Prostate Surgery", gujarat: "$2,200 – $3,400", usa: "$18,000 – $28,000", uk: "$7,500 – $11,000", eastAfrica: "$4,200 – $6,200" },
      { procedure: "AV Fistula Surgery (Dialysis Access)", gujarat: "$700 – $1,200", usa: "$6,000 – $10,000", uk: "$3,000 – $4,500", eastAfrica: "$1,500 – $2,500" }
    ],
    hospitalStayDays: "1–3 days in Hospital",
    indiaStayDays: "7–10 days total in India",
    whatsIncluded: [
      "Advanced laser procedures with zero/minimal incision",
      "Urologist consultations & ultrasound/CT imaging",
      "Stent removal coordination",
      "Airport transfer & local stay coordination",
      "8-Week Aarogyatra Aftercare™ post-return"
    ],
    aftercareDetails: "Hydration protocol management, DJ stent removal reminders, urine routine review via WhatsApp, and renal function blood report tracking."
  },
  {
    id: "general-advanced-surgery",
    title: "General & Advanced Surgery",
    slug: "general-advanced-surgery",
    tagline: "Minimally Invasive & Laparoscopic Surgical Excellence",
    shortDesc: "Gallbladder removal, complex hernia repair, bariatric (weight loss) surgery, and gastrointestinal procedures with fast recovery.",
    iconName: "Scissors",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Gallstones & Cholecystitis",
      "Inguinal, Abdominal & Hiatal Hernias",
      "Morbid Obesity & Metabolic Disorders",
      "Appendicitis & GI Tract Conditions",
      "Colorectal Polyps & Hemorrhoids (Laser Treatment)",
      "Thyroid & Parathyroid Disorders"
    ],
    procedures: [
      "Laparoscopic Cholecystectomy (Gallbladder Removal)",
      "Laparoscopic Mesh Hernia Repair (TEP/TAPP)",
      "Bariatric Surgery (Sleeve Gastrectomy / Gastric Bypass)",
      "Laser Proctology (Hemorrhoids, Fistula, Fissure)",
      "Laparoscopic Colectomy & GI Surgeries",
      "Minimally Invasive Thyroidectomy"
    ],
    costMatrix: [
      { procedure: "Laparoscopic Gallbladder Surgery", gujarat: "$1,500 – $2,400", usa: "$14,000 – $20,000", uk: "$6,000 – $8,500", eastAfrica: "$3,200 – $4,800" },
      { procedure: "Laparoscopic Hernia Repair", gujarat: "$1,800 – $2,700", usa: "$15,000 – $22,000", uk: "$6,500 – $9,000", eastAfrica: "$3,500 – $5,200" },
      { procedure: "Sleeve Gastrectomy (Weight Loss)", gujarat: "$4,200 – $6,000", usa: "$22,000 – $35,000", uk: "$11,000 – $16,000", eastAfrica: "$7,500 – $10,500" }
    ],
    hospitalStayDays: "2–4 days in Hospital",
    indiaStayDays: "7–12 days total in India",
    whatsIncluded: [
      "High-definition 4K laparoscopic surgical setup",
      "Premium imported surgical meshes & staplers",
      "Nutritionist guidance & diet planning",
      "Airport & hospital transfers",
      "8-Week Aarogyatra Aftercare™ post-return"
    ],
    aftercareDetails: "Post-laparoscopy wound inspection, dietary progression monitoring, pain management protocol, and WhatsApp check-ins with doctor team."
  }
];
