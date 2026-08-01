export const treatmentsData = [
  {
    id: "cardiac-care",
    title: "Cardiac Care",
    slug: "cardiac-care",
    tagline: "Advanced Heart Surgery & Cardiology by Renowned Specialists",
    shortDesc: "Bypass surgery (CABG), angioplasty & stenting, valve replacement, pacemaker implantation, and paediatric cardiac procedures at India's accredited heart hospitals.",
    iconName: "HeartPulse",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Coronary Artery Disease (CAD)",
      "Heart Attack & Ischemic Heart Disease",
      "Heart Valve Disease & Stenosis",
      "Heart Failure",
      "Irregular Heartbeat (Arrhythmia)",
      "Holes in the Heart (Congenital Defects)"
    ],
    procedures: [
      "Coronary Artery Bypass Grafting (CABG)",
      "Angioplasty & Stenting",
      "Valve Replacement and Repair",
      "Pacemaker Implantation",
      "Paediatric and Congenital Heart Surgery"
    ],
    costMatrix: [
      { procedure: "CABG (Heart Bypass)", gujarat: "$4,500 – $6,800", usa: "$40,000 – $70,000", uk: "$18,000 – $25,000", eastAfrica: "$9,000 – $14,000" },
      { procedure: "Heart Valve Replacement", gujarat: "$5,000 – $7,500", usa: "$45,000 – $80,000", uk: "$20,000 – $28,000", eastAfrica: "$10,000 – $16,000" },
      { procedure: "Angioplasty with Stent", gujarat: "$2,200 – $3,500", usa: "$18,000 – $30,000", uk: "$9,000 – $14,000", eastAfrica: "$5,000 – $8,000" }
    ],
    hospitalStayDays: "4–6 days in Hospital (ICU + Ward)",
    indiaStayDays: "12–16 days total in India",
    whatsIncluded: [
      "Pre-operative cardiac evaluation & diagnostic tests",
      "Surgeon fee, Anesthesiologist fee, & ICU charges",
      "FDA/CE-approved implants and stents",
      "Dedicated bilingual medical coordinator",
      "Airport pickup & drop-off",
      "4-Week Aarogyatra Aftercare post-return"
    ],
    aftercareDetails: "Continuous 4-week WhatsApp check-ins with our specialized medical team, medication reminders, recovery check-ins, and direct answers until you're properly back on your feet."
  },
  {
    id: "orthopedics-joint-replacement",
    title: "Orthopedics & Joint Replacement",
    slug: "orthopedics-joint-replacement",
    tagline: "Knee & Hip Replacement in India — Walk Again, Pain-Free",
    shortDesc: "Total knee replacement, total hip replacement, revision joint surgery, spinal fusion, arthroscopy, and fracture fixation at India's leading orthopedic centres.",
    iconName: "Activity",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Osteoarthritis & Rheumatoid Arthritis",
      "Avascular Necrosis (AVN)",
      "Slipped Disc & Sciatica",
      "Sports Injuries & Ligament Tears",
      "Complex Fractures",
      "Spine & Spinal Cord Conditions"
    ],
    procedures: [
      "Total Knee Replacement",
      "Total Hip Replacement",
      "Revision Joint Surgery",
      "Spinal Fusion and Disc Surgery",
      "Arthroscopy (ACL, Meniscus, Rotator Cuff)",
      "Fracture Fixation"
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
      "4-Week Aarogyatra Aftercare post-return"
    ],
    aftercareDetails: "Weekly WhatsApp check-ins with our physiotherapy & orthopedic medical team, incision healing review, mobility progress tracking, and medication guidance."
  },
  {
    id: "oncology",
    title: "Cancer Care (Oncology)",
    slug: "oncology",
    tagline: "Comprehensive, Compassionate & Advanced Cancer Management",
    shortDesc: "Cancer surgery, chemotherapy, radiotherapy (IMRT), immunotherapy, and bone marrow transplant guided by expert oncology teams.",
    iconName: "ShieldAlert",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Breast, Cervical & Ovarian Cancers",
      "Prostate, Lung & Colorectal Cancers",
      "Oral and Head & Neck Cancers",
      "Leukaemia & Lymphoma",
      "Gastrointestinal Malignancies",
      "Bone & Soft Tissue Sarcomas"
    ],
    procedures: [
      "Cancer Surgery (Onco-Surgery)",
      "Chemotherapy",
      "Radiotherapy and IMRT",
      "Immunotherapy",
      "Bone Marrow Transplant"
    ],
    costMatrix: [
      { procedure: "Onco-Surgery (Tumor Resection)", gujarat: "$3,800 – $6,500", usa: "$35,000 – $60,000", uk: "$16,000 – $25,000", eastAfrica: "$8,000 – $13,000" },
      { procedure: "Chemotherapy (per cycle)", gujarat: "$400 – $900", usa: "$4,000 – $9,000", uk: "$2,000 – $3,500", eastAfrica: "$1,000 – $1,800" },
      { procedure: "Radiation Therapy (Full Course)", gujarat: "$3,000 – $4,800", usa: "$25,000 – $45,000", uk: "$12,000 – $18,000", eastAfrica: "$6,000 – $9,500" }
    ],
    hospitalStayDays: "3–7 days (Surgery) / Day Care (Chemo/Radiation)",
    indiaStayDays: "14–21 days depending on treatment protocol",
    whatsIncluded: [
      "Multidisciplinary tumor evaluation before arrival",
      "Biopsy, PET-CT scan & pathology verification",
      "Surgery or Chemo/Radiation administration",
      "Onco-nutrition consultation & psychological counselling",
      "4-Week Aarogyatra Aftercare post-return"
    ],
    aftercareDetails: "Post-chemotherapy symptom monitoring, blood count check reviews via WhatsApp, dietary support for immunity, and follow-up scan scheduling."
  },
  {
    id: "kidney-urology",
    title: "Kidney & Urology",
    slug: "kidney-urology",
    tagline: "State-of-the-Art Renal Care, Dialysis & Laser Urology Surgery",
    shortDesc: "Kidney transplant, stone removal (RIRS, PCNL, ESWL), prostate surgery (TURP), bladder surgery, and dialysis.",
    iconName: "Droplet",
    heroImage: "https://images.unsplash.com/photo-1581595220892-6a8ce56e493f?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Kidney Failure (CKD / ESRD)",
      "Kidney & Ureter Stones",
      "Enlarged Prostate (BPH)",
      "Recurrent Urinary Infections",
      "Bladder Disorders",
      "Urological Malignancies"
    ],
    procedures: [
      "Kidney Transplant",
      "Stone Removal (RIRS, PCNL, ESWL)",
      "Prostate Surgery (TURP)",
      "Bladder and Ureter Surgery",
      "Dialysis & Vascular Access"
    ],
    costMatrix: [
      { procedure: "Laser Stone Surgery (PCNL/RIRS)", gujarat: "$1,800 – $2,800", usa: "$15,000 – $24,000", uk: "$6,500 – $9,500", eastAfrica: "$3,800 – $5,500" },
      { procedure: "TURP Prostate Surgery", gujarat: "$2,200 – $3,400", usa: "$18,000 – $28,000", uk: "$7,500 – $11,000", eastAfrica: "$4,200 – $6,200" },
      { procedure: "Kidney Transplant Facilitation", gujarat: "$11,000 – $15,000", usa: "$120,000 – $200,000", uk: "$45,000 – $70,000", eastAfrica: "$25,000 – $35,000" }
    ],
    hospitalStayDays: "1–3 days in Hospital",
    indiaStayDays: "7–10 days total in India",
    whatsIncluded: [
      "Advanced laser procedures with minimal incision",
      "Urologist consultations & ultrasound/CT imaging",
      "Stent removal coordination",
      "Airport transfer & local stay coordination",
      "4-Week Aarogyatra Aftercare post-return"
    ],
    aftercareDetails: "Hydration protocol management, stent removal reminders, urine routine review via WhatsApp, and renal function blood report tracking."
  },
  {
    id: "general-advanced-surgery",
    title: "General & Advanced Surgery",
    slug: "general-advanced-surgery",
    tagline: "Minimally Invasive & Laparoscopic Surgical Excellence",
    shortDesc: "Laparoscopic gallbladder surgery, hernia repair, appendix surgery, weight-loss (bariatric) surgery, hysterectomy, IVF and fertility treatments.",
    iconName: "Scissors",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Gallstones & Cholecystitis",
      "Hernia (Inguinal, Abdominal)",
      "Appendicitis",
      "Obesity & Metabolic Disorders",
      "Fibroids & Gynecological Issues",
      "Infertility, Liver & Digestive Disorders"
    ],
    procedures: [
      "Laparoscopic Gallbladder Surgery",
      "Hernia Repair",
      "Appendix Surgery",
      "Weight-Loss (Bariatric) Surgery",
      "Hysterectomy",
      "IVF and Fertility Treatment"
    ],
    costMatrix: [
      { procedure: "Laparoscopic Gallbladder Surgery", gujarat: "$1,500 – $2,400", usa: "$14,000 – $20,000", uk: "$6,000 – $8,500", eastAfrica: "$3,200 – $4,800" },
      { procedure: "Laparoscopic Hernia Repair", gujarat: "$1,800 – $2,700", usa: "$15,000 – $22,000", uk: "$6,500 – $9,000", eastAfrica: "$3,500 – $5,200" },
      { procedure: "Bariatric Weight-Loss Surgery", gujarat: "$4,200 – $6,000", usa: "$22,000 – $35,000", uk: "$11,000 – $16,000", eastAfrica: "$7,500 – $10,500" }
    ],
    hospitalStayDays: "2–4 days in Hospital",
    indiaStayDays: "7–12 days total in India",
    whatsIncluded: [
      "High-definition 4K laparoscopic surgical setup",
      "Premium imported surgical meshes & staplers",
      "Nutritionist guidance & diet planning",
      "Airport & hospital transfers",
      "4-Week Aarogyatra Aftercare post-return"
    ],
    aftercareDetails: "Post-surgery wound inspection, dietary progression monitoring, pain management protocol, and WhatsApp check-ins with medical team."
  },
  {
    id: "dentistry",
    title: "Dentistry & Oral Rehabilitation",
    slug: "dentistry",
    tagline: "World-Class Dental Care, Implants & Smile Transformations",
    shortDesc: "Dental implants, full-mouth rehabilitation, root canal treatment, crowns & bridges, clear aligners, wisdom tooth removal, and teeth whitening.",
    iconName: "Smile",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Missing or Broken Teeth",
      "Severe Tooth Decay & Infections",
      "Gum Disease & Periodontal Issues",
      "Crooked, Misaligned or Crowded Teeth",
      "Jaw Pain & TMJ Disorders",
      "Stained or Discolored Teeth"
    ],
    procedures: [
      "Dental Implants & All-on-4 / All-on-6",
      "Full-Mouth Rehabilitation",
      "Root Canal Treatment (RCT)",
      "Crowns and Bridges (Zirconia)",
      "Braces and Clear Aligners",
      "Wisdom Tooth Removal & Gum Surgery",
      "Laser Teeth Whitening"
    ],
    costMatrix: [
      { procedure: "Single Dental Implant (Zirconia)", gujarat: "$450 – $750", usa: "$3,000 – $5,000", uk: "$2,000 – $3,500", eastAfrica: "$1,200 – $2,000" },
      { procedure: "Full-Mouth Rehabilitation", gujarat: "$4,500 – $7,500", usa: "$30,000 – $50,000", uk: "$18,000 – $28,000", eastAfrica: "$9,000 – $14,000" },
      { procedure: "Root Canal + Zirconia Crown", gujarat: "$150 – $300", usa: "$1,500 – $2,500", uk: "$800 – $1,400", eastAfrica: "$400 – $700" }
    ],
    hospitalStayDays: "Outpatient / Day Care Clinic",
    indiaStayDays: "5–10 days total in India",
    whatsIncluded: [
      "3D CBCT Imaging & Digital Smile Design",
      "US-FDA certified dental implants & Zirconia crowns",
      "Pain-free laser dental procedures",
      "Coordinator & local travel support",
      "4-Week Aarogyatra Aftercare post-return"
    ],
    aftercareDetails: "Post-treatment oral hygiene guidelines, implant integration check-in via WhatsApp, and direct dental specialist contact."
  },
  {
    id: "cosmetology-aesthetics",
    title: "Cosmetology & Aesthetics",
    slug: "cosmetology-aesthetics",
    tagline: "Advanced Hair Transplant, Cosmetic Surgery & Dermatology",
    shortDesc: "Hair transplant (FUE/DHI), rhinoplasty, liposuction, tummy tuck, cosmetic breast surgery, laser skin treatments, chemical peels, and scar treatments.",
    iconName: "Sparkles",
    heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    conditionsTreated: [
      "Hair Loss & Pattern Baldness",
      "Stubborn Localized Fat Deposits",
      "Sagging or Ageing Skin & Wrinkles",
      "Acne Scars & Facial Imperfections",
      "Skin Pigmentation & Uneven Tone",
      "Body & Facial Contouring Needs"
    ],
    procedures: [
      "Hair Transplant (FUE / DHI)",
      "Rhinoplasty (Nose Reshaping)",
      "Liposuction & Body Contouring",
      "Tummy Tuck (Abdominoplasty)",
      "Cosmetic Breast Surgery",
      "Laser Skin & Anti-Ageing Treatments",
      "Chemical Peels & Scar Revision"
    ],
    costMatrix: [
      { procedure: "FUE Hair Transplant (3,500+ grafts)", gujarat: "$1,200 – $2,200", usa: "$10,000 – $18,000", uk: "$6,000 – $12,000", eastAfrica: "$3,500 – $6,000" },
      { procedure: "Rhinoplasty (Nose Job)", gujarat: "$1,800 – $3,200", usa: "$8,000 – $15,000", uk: "$5,000 – $9,000", eastAfrica: "$3,200 – $5,500" },
      { procedure: "Liposuction (High-Definition)", gujarat: "$2,000 – $3,500", usa: "$12,000 – $20,000", uk: "$6,500 – $11,000", eastAfrica: "$4,000 – $7,000" }
    ],
    hospitalStayDays: "Day Care / 1 day Hospital",
    indiaStayDays: "7–10 days total in India",
    whatsIncluded: [
      "Board-certified plastic surgeons & dermatologists",
      "Advanced robotic / Sapphire FUE hair transplant tools",
      "Post-procedure healing creams & compression garments",
      "Coordinator & local travel support",
      "4-Week Aarogyatra Aftercare post-return"
    ],
    aftercareDetails: "Weekly hair growth & graft check-ins, scar healing monitoring, specialized skin regimen advice, and direct physician follow-up on WhatsApp."
  }
];
