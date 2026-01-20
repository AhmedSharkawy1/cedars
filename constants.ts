import { Doctor, Service, Testimonial, BlogPost, InsurancePartner } from './types';

export const COMPANY_INFO = {
  name: "Cedars Medical Center",
  phone: "050 1919 354",
  whatsapp: "971501919354",
  email: "info@cedars-mc.ae",
  address: {
    en: "Al Murabbaa Crossing, Sheikh Zayed Bin Sultan St, Central District, Al Hisn, Abu Dhabi, UAE",
    ar: "تقاطع المربعة - شارع الشيخ زايد بن سلطان - وسط المدينة - حي الحصن - أبو ظبي - الإمارات العربية المتحدة"
  },
  googleMapsLink: "https://goo.gl/maps/placeholder",
  workingHours: {
    en: "Sat - Thu: 10:00 AM - 9:00 PM, Fri: Closed",
    ar: "السبت - الخميس: 10:00 ص - 9:00 م، الجمعة: مغلق"
  },
  instagram: "https://www.instagram.com/cedars.mc/",
  logo: "https://8upload.com/image/be369507abf33768/ChatGPT_Image_Jan_20__2026__06_21_41_PM.png"
};

export const UI_CONTENT = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      doctors: 'Doctors',
      insurance: 'Insurance',
      about: 'About Us',
      blog: 'Blog',
      contact: 'Contact',
      bookBtn: 'Book Appointment'
    },
    hero: {
      yearsBadge: '10 YEARS AT YOUR SERVICE',
      offerBadge: '50% OFF ZOOM WHITENING',
      titleLine1: 'Your Smile is a',
      titleLine2: 'Masterpiece',
      subtitle: 'Welcome to Cedars Medical Center. From advanced dental implants to pediatric care, we use the latest technology to ensure your health and beauty.',
      bookBtn: 'Book Appointment',
      servicesBtn: 'Our Services',
      stats: {
        years: 'Years Serving You',
        daily: 'Daily Availability',
        satisfaction: 'Patient Satisfaction'
      },
      floatCard: {
        title: 'Painless Treatment',
        sub: 'Latest Dental Tech'
      }
    },
    toothComparison: {
      label: 'Real Patient Result',
      caption: 'Professional Teeth Whitening at Cedars Medical Center',
      before: 'Before',
      after: 'After',
      ctaPrimary: 'Book Whitening Consultation',
      ctaSecondary: 'WhatsApp Us Now',
      scrollHint: 'Scroll down to see the transformation'
    },
    sections: {
      servicesTitle: 'Specialized Medical Services',
      servicesSub: 'Whether you need a full mouth rehabilitation or a routine checkup for your child, our experts are here.',
      learnMore: 'Learn more',
      viewAllServices: 'View All Departments',
      bookService: 'Book this Service',
      meetExperts: 'Meet Our Experts',
      bookWith: 'Book with',
      specialties: 'Specialties',
      communityTitle: 'Real Patients, Real Smiles',
      communitySub: 'Join our community on Instagram using',
      viewGallery: 'View Full Gallery',
      trustedBy: 'Trusted By Major Insurance Providers',
      storiesTitle: 'Patient Stories',
      finalCtaTitle: '10 Years of Excellence',
      finalCtaSub: 'Join thousands of happy patients who trust Cedars Medical Center with their smiles and health. Book your consultation today.',
      bookNow: 'Book Now',
      contactUs: 'Contact Us',
      meetSpecialists: 'Meet Our Specialists',
      specialistsSub: 'A team of internationally qualified and experienced medical professionals.',
      insuranceTitle: 'Insurance Partners',
      insuranceSub: 'We offer direct billing with most major insurance providers in the UAE including Thiqa, Daman, and more. Please contact our reception to confirm your specific network coverage.',
      blogTitle: 'Health & Wellness Blog',
      readArticle: 'Read Article',
      aboutTitle: 'About Cedars Medical Center',
      ourStory: 'Our Story',
      ourStoryText: 'For over 10 years, Cedars Medical Center has been a beacon of healthcare excellence in the UAE. Situated in Al Sarouj, we have dedicated ourselves to providing the community with premium dental and medical care. Our name reflects our roots—strong, enduring, and committed to growth.',
      mission: 'Mission',
      missionText: 'To provide comprehensive, high-quality medical care in a safe and welcoming environment. We strive to make every smile a masterpiece through advanced technology and compassionate care.',
      values: 'Values',
      contactTitle: 'Contact Us',
      getInTouch: 'Get in Touch',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      hoursLabel: 'Working Hours',
      whatsappAvailable: 'Available for WhatsApp',
      openMaps: 'Open in Google Maps',
      scheduleTitle: 'Schedule Your Visit',
      scheduleSub: 'Fill the form below to initiate your booking via WhatsApp.',
      orCall: 'If you prefer to call, reach us at'
    },
    form: {
      title: 'Book Appointment',
      sub: 'Instant confirmation via WhatsApp',
      name: 'Full Name *',
      phone: 'Phone Number (UAE) *',
      service: 'Service *',
      selectService: 'Select Service',
      doctor: 'Doctor (Optional)',
      anyDoctor: 'Any Available',
      date: 'Preferred Date',
      notes: 'Notes / Symptoms',
      notesPlaceholder: 'Briefly describe your symptoms or request...',
      submit: 'Book via WhatsApp',
      processing: 'Processing...',
      secure: 'SSL Secure',
      privacy: 'Privacy Protected'
    },
    footer: {
      desc: 'Providing world-class healthcare services in the heart of UAE. Our mission is to deliver patient-centric care with integrity and excellence.',
      quickLinks: 'Quick Links',
      departments: 'Departments',
      rights: 'All Rights Reserved. MOH License No: 12345-2023.',
      privacy: 'Privacy Policy | Terms of Service'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      doctors: 'الأطباء',
      insurance: 'التأمين',
      about: 'من نحن',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      bookBtn: 'احجز موعد'
    },
    hero: {
      yearsBadge: '10 سنوات في خدمتكم',
      offerBadge: '50% خصم على تبييض زووم',
      titleLine1: 'ابتسامتك هي',
      titleLine2: 'تحفة فنية',
      subtitle: 'مرحباً بكم في مركز سدار الطبي. من زراعة الأسنان المتقدمة إلى طب الأطفال، نستخدم أحدث التقنيات لضمان صحتكم وجمالكم.',
      bookBtn: 'احجز موعد',
      servicesBtn: 'خدماتنا',
      stats: {
        years: 'سنوات من الخبرة',
        daily: 'توفير يومي',
        satisfaction: 'رضا المرضى'
      },
      floatCard: {
        title: 'علاج بدون ألم',
        sub: 'أحدث تقنيات الأسنان'
      }
    },
    toothComparison: {
      label: 'نتيجة مريض حقيقية',
      caption: 'تبييض أسنان احترافي في مركز سدار الطبي',
      before: 'قبل',
      after: 'بعد',
      ctaPrimary: 'احجز استشارة التبييض',
      ctaSecondary: 'واتساب مباشر',
      scrollHint: 'مرر للأسفل لرؤية التحول'
    },
    sections: {
      servicesTitle: 'خدمات طبية متخصصة',
      servicesSub: 'سواء كنت بحاجة إلى إعادة تأهيل كامل للفم أو فحص روتيني لطفلك، خبراؤنا هنا لمساعدتك.',
      learnMore: 'اقرأ المزيد',
      viewAllServices: 'عرض جميع الأقسام',
      bookService: 'احجز هذه الخدمة',
      meetExperts: 'تعرف على خبرائنا',
      bookWith: 'احجز مع',
      specialties: 'التخصصات',
      communityTitle: 'مرضى حقيقيون، ابتسامات حقيقية',
      communitySub: 'انضم إلى مجتمعنا على انستغرام باستخدام',
      viewGallery: 'عرض المعرض الكامل',
      trustedBy: 'نحن فخورون بثقة شركات التأمين',
      storiesTitle: 'قصص المرضى',
      finalCtaTitle: '10 سنوات من التميز',
      finalCtaSub: 'انضم إلى آلاف المرضى السعداء الذين يثقون بمركز سدار الطبي لابتساماتهم وصحتهم. احجز استشارتك اليوم.',
      bookNow: 'احجز الآن',
      contactUs: 'اتصل بنا',
      meetSpecialists: 'تعرف على أطبائنا',
      specialistsSub: 'فريق من المتخصصين الطبيين المؤهلين وذوي الخبرة الدولية.',
      insuranceTitle: 'شركاء التأمين',
      insuranceSub: 'نقدم خدمة الفوترة المباشرة مع معظم شركات التأمين الكبرى في الإمارات بما في ذلك ثقة، ضمان، والمزيد. يرجى الاتصال بالاستقبال لتأكيد تغطية شبكتك المحددة.',
      blogTitle: 'مدونة الصحة والعافية',
      readArticle: 'اقرأ المقال',
      aboutTitle: 'عن مركز سدار الطبي',
      ourStory: 'قصتنا',
      ourStoryText: 'منذ أكثر من 10 سنوات، كان مركز سدار الطبي منارة للتميز في الرعاية الصحية في الإمارات. يقع المركز في الصاروج، وقد كرسنا أنفسنا لتزويد المجتمع برعاية طبية وأسنان متميزة. يعكس اسمنا جذورنا القوية والدائمة والملتزمة بالنمو.',
      mission: 'رؤيتنا',
      missionText: 'توفير رعاية طبية شاملة وعالية الجودة في بيئة آمنة ومرحبة. نسعى لجعل كل ابتسامة تحفة فنية من خلال التكنولوجيا المتقدمة والرعاية الرحيمة.',
      values: 'قيمنا',
      contactTitle: 'تواصل معنا',
      getInTouch: 'ابقى على تواصل',
      addressLabel: 'العنوان',
      phoneLabel: 'الهاتف',
      hoursLabel: 'ساعات العمل',
      whatsappAvailable: 'متاح عبر واتساب',
      openMaps: 'افتح في خرائط جوجل',
      scheduleTitle: 'جدول زيارتك',
      scheduleSub: 'املأ النموذج أدناه لبدء الحجز عبر واتساب.',
      orCall: 'إذا كنت تفضل الاتصال، تواصل معنا على'
    },
    form: {
      title: 'احجز موعد',
      sub: 'تأكيد فوري عبر واتساب',
      name: 'الاسم الكامل *',
      phone: 'رقم الهاتف *',
      service: 'الخدمة *',
      selectService: 'اختر الخدمة',
      doctor: 'الطبيب (اختياري)',
      anyDoctor: 'أي طبيب متاح',
      date: 'التاريخ المفضل',
      notes: 'ملاحظات / أعراض',
      notesPlaceholder: 'صف باختصار أعراضك أو طلبك...',
      submit: 'احجز عبر واتساب',
      processing: 'جاري المعالجة...',
      secure: 'آمن بـ SSL',
      privacy: 'محمي الخصوصية'
    },
    footer: {
      desc: 'تقديم خدمات رعاية صحية عالمية المستوى في قلب الإمارات. مهمتنا هي تقديم رعاية تركز على المريض بنزاهة وتميز.',
      quickLinks: 'روابط سريعة',
      departments: 'الأقسام',
      rights: 'جميع الحقوق محفوظة. ترخيص وزارة الصحة: 12345-2023.',
      privacy: 'سياسة الخصوصية | شروط الخدمة'
    }
  }
};

// --- DATA DEFINITIONS ---

// DOCTORS
function getDoctors(lang: 'en' | 'ar') {
    // This is a placeholder for the structure. We define separate arrays below.
}

const DOCTORS_DATA_EN: Doctor[] = [
  {
    id: 'dr-abdullah',
    name: "Dr. Abdullah Atef Al-Atiya",
    specialty: "Dental Implantologist",
    qualifications: "BDS, MSc Oral Surgery",
    image: "https://8upload.com/image/6587813366cd3158/WhatsApp_Image_2026-01-20_at_6.47.40_PM__1_.jpeg",
    languages: ["Arabic", "English"],
    availability: "Mon - Sat",
    bio: "Expert in complex surgical extractions and dental implants, restoring function and aesthetics with precision."
  },
  {
    id: 'dr-rand',
    name: "Dr. Rand Khader Elias",
    specialty: "Cosmetic Dentist",
    qualifications: "BDS, Cosmetic Dentistry Fellow",
    image: "https://8upload.com/image/8d4f912d11817f20/WhatsApp_Image_2026-01-20_at_6.47.40_PM__2_.jpeg",
    languages: ["Arabic", "English"],
    availability: "Daily",
    bio: "Specializing in Hollywood smiles, veneers, and full mouth rehabilitation to create your perfect masterpiece."
  },
  {
    id: 'dr-lamis',
    name: "Dr. Lamis Al-Shadidi",
    specialty: "General Practitioner",
    qualifications: "MBBS, Family Medicine",
    image: "https://8upload.com/image/1d2dbb7be3df1136/WhatsApp_Image_2026-01-20_at_6.47.40_PM__3_.jpeg",
    languages: ["Arabic", "English"],
    availability: "Sun - Thu",
    bio: "Providing comprehensive primary care and family medicine services with a focus on preventative health."
  },
  {
    id: 'dr-hawraa',
    name: "Dr. Hawraa Mohamed",
    specialty: "General Dentist",
    qualifications: "BDS",
    image: "https://8upload.com/image/6522a4c857ce1103/WhatsApp_Image_2026-01-20_at_6.47.40_PM.jpeg",
    languages: ["Arabic", "English"],
    availability: "Sat - Thu",
    bio: "Dedicated to general dental care, root canal treatments, and ensuring patient comfort during procedures."
  }
];

const DOCTORS_DATA_AR: Doctor[] = [
  {
    id: 'dr-abdullah',
    name: "د. عبدالله عاطف العطية",
    specialty: "أخصائي زراعة وجراحة الأسنان",
    qualifications: "بكالوريوس طب الأسنان، ماجستير جراحة الفم",
    image: "https://8upload.com/image/6587813366cd3158/WhatsApp_Image_2026-01-20_at_6.47.40_PM__1_.jpeg",
    languages: ["العربية", "الإنجليزية"],
    availability: "الإثنين - السبت",
    bio: "خبير في الجراحات المعقدة وزراعة الأسنان، يعيد الوظيفة والجمال بدقة متناهية."
  },
  {
    id: 'dr-rand',
    name: "د. رند خضر الياس",
    specialty: "طبيبة أسنان تجميلية",
    qualifications: "بكالوريوس طب الأسنان، زمالة تجميل الأسنان",
    image: "https://8upload.com/image/8d4f912d11817f20/WhatsApp_Image_2026-01-20_at_6.47.40_PM__2_.jpeg",
    languages: ["العربية", "الإنجليزية"],
    availability: "يومياً",
    bio: "متخصصة في ابتسامة هوليوود، الفينير، وإعادة تأهيل الفم بالكامل لصنع تحفتك الفنية."
  },
  {
    id: 'dr-lamis',
    name: "د. لميس الشديدي",
    specialty: "طبيبة عامة",
    qualifications: "بكالوريوس طب وجراحة، طب الأسرة",
    image: "https://8upload.com/image/1d2dbb7be3df1136/WhatsApp_Image_2026-01-20_at_6.47.40_PM__3_.jpeg",
    languages: ["العربية", "الإنجليزية"],
    availability: "الأحد - الخميس",
    bio: "تقديم الرعاية الأولية الشاملة وخدمات طب الأسرة مع التركيز على الصحة الوقائية."
  },
  {
    id: 'dr-hawraa',
    name: "د. حوراء محمد",
    specialty: "طبيبة أسنان عامة",
    qualifications: "بكالوريوس طب الأسنان",
    image: "https://8upload.com/image/6522a4c857ce1103/WhatsApp_Image_2026-01-20_at_6.47.40_PM.jpeg",
    languages: ["العربية", "الإنجليزية"],
    availability: "السبت - الخميس",
    bio: "مكرسة لعلاج الأسنان العام، علاجات العصب، وضمان راحة المريض أثناء الإجراءات."
  }
];

// SERVICES
const SERVICES_DATA_EN: Service[] = [
  {
    id: 'cosmetic-dental',
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our 'Masterpiece' approach. We offer veneers, Zoom whitening (50% Off), and smile design.",
    iconName: "Sparkles",
    benefits: ["Hollywood Smile (Veneers)", "Zoom Laser Whitening", "Gummy Smile Correction"]
  },
  {
    id: 'dental-implants',
    title: "Dental Implants & Rehab",
    description: "Restore function and aesthetics with pain-free dental implants and full mouth rehabilitation.",
    iconName: "Smile",
    benefits: ["Single Tooth Implants", "Full Mouth Rehabilitation", "Crowns & Bridges"]
  },
  {
    id: 'pediatric-dental',
    title: "Pediatric Dentistry",
    description: "Protecting your child's milk teeth is vital for their future smile. Specialized care for little ones.",
    iconName: "Baby",
    benefits: ["Cavity Prevention", "Milk Teeth Preservation", "Gentle Checkups"]
  },
  {
    id: 'gen-med',
    title: "General Medicine",
    description: "Comprehensive primary care for individuals and families, focusing on prevention and wellness.",
    iconName: "Stethoscope",
    benefits: ["Routine Checkups", "Chronic Disease Management", "Vaccinations"]
  },
  {
    id: 'lab',
    title: "Laboratory & Diagnostics",
    description: "State-of-the-art diagnostic testing ensuring accurate and timely medical results.",
    iconName: "Microscope",
    benefits: ["Blood Tests", "Allergy Testing", "Health Screening Packages"]
  }
];

const SERVICES_DATA_AR: Service[] = [
  {
    id: 'cosmetic-dental',
    title: "طب الأسنان التجميلي",
    description: "حول ابتسامتك مع نهج 'التحفة الفنية'. نقدم الفينير، تبييض زووم (خصم 50%)، وتصميم الابتسامة.",
    iconName: "Sparkles",
    benefits: ["ابتسامة هوليوود (فينير)", "تبييض بالليزر (زووم)", "تصحيح الابتسامة اللثوية"]
  },
  {
    id: 'dental-implants',
    title: "زراعة الأسنان وإعادة التأهيل",
    description: "استعد الوظيفة والجمال مع زراعة الأسنان بدون ألم وإعادة تأهيل الفم بالكامل.",
    iconName: "Smile",
    benefits: ["زراعة الأسنان الفردية", "إعادة تأهيل الفم بالكامل", "التيجان والجسور"]
  },
  {
    id: 'pediatric-dental',
    title: "طب أسنان الأطفال",
    description: "حماية الأسنان اللبنية لطفلك أمر حيوي لابتسامته المستقبلية. رعاية متخصصة للصغار.",
    iconName: "Baby",
    benefits: ["الوقاية من التسوس", "الحفاظ على الأسنان اللبنية", "فحوصات لطيفة"]
  },
  {
    id: 'gen-med',
    title: "الطب العام",
    description: "رعاية أولية شاملة للأفراد والعائلات، مع التركيز على الوقاية والعافية.",
    iconName: "Stethoscope",
    benefits: ["فحوصات روتينية", "إدارة الأمراض المزمنة", "تطعيمات"]
  },
  {
    id: 'lab',
    title: "المختبر والتشخيص",
    description: "فحوصات تشخيصية حديثة تضمن نتائج طبية دقيقة وفي الوقت المناسب.",
    iconName: "Microscope",
    benefits: ["فحوصات الدم", "اختبار الحساسية", "باقات الفحص الصحي"]
  }
];

// TESTIMONIALS
const TESTIMONIALS_DATA_EN: Testimonial[] = [
  {
    id: 't1',
    name: "Hadi Alassafin",
    comment: "Dr. Rand is truly skilled and professional! My experience was very comfortable. She explains everything calmly and makes you feel safe. I felt no pain, and she pays attention to every detail. The clinic is clean and the staff is classy. Highly recommended.",
    rating: 5,
    date: "7 months ago"
  },
  {
    id: 't2',
    name: "Happy Patient",
    comment: "The center is excellent. I got the free whitening offer with cleaning covered by Thiqa exactly as promised. Great treatment, the doctor has a light hand—didn't feel the anesthesia or anything. I recommended my family to visit.",
    rating: 5,
    date: "7 months ago"
  },
  {
    id: 't3',
    name: "Fathima Abdulla K K",
    comment: "Great work! The reception staff are very helpful, and the doctor is excellent. I'm planning to return for my smile makeover.",
    rating: 5,
    date: "7 months ago"
  }
];

const TESTIMONIALS_DATA_AR: Testimonial[] = [
  {
    id: 't1',
    name: "Hadi Alassafin",
    comment: "الدكتورة رند فعلاً شاطرة ومحترفة! عنجد كانت تجربتي معها مريحة كتير، بتشرح كل شي بهدوء وبتفهم المريض، وبتخلي الواحد يحس بالأمان. ما حسّيت بأي ألم، وكانت مهتمة بكل التفاصيل. العيادة نظيفة ومرتبة، والطاقم كله ذوق. إذا بدك دكتورة أسنان بتعرف شغلها وبتعامل الناس بأخلاق عالية، أنصحك تروح عند د. رند بدون تردد",
    rating: 5,
    date: "قبل 7 أشهر"
  },
  {
    id: 't2',
    name: "زائر سعيد",
    comment: "والله المركز زين خبروني على العرض التبيض فري و سويت معاه تنظيف على الثقة نفس ما قالو لي على التلفون و معاملتهم وايد زينة و دكتورة شاطرة و ايدها خفيفة ما حسيت لا بتخذير ولا بشي و خليت الأهل يزوروهم",
    rating: 5,
    date: "قبل 7 أشهر"
  },
  {
    id: 't3',
    name: "Fathima Abdulla K K",
    comment: "شغلهم زين و حتى البنات مال رسيبشن وايد خدومين وعندهم دكتورة وايد زينة و شاطرة و ان شاء الله برد اسوي ابتسامة عندها",
    rating: 5,
    date: "قبل 7 أشهر"
  }
];

// BLOG
const BLOG_DATA_EN: BlogPost[] = [
  {
    id: 'b1',
    title: "Save Your Child's Milk Teeth",
    excerpt: "Why are baby teeth so important? They hold space for permanent teeth and affect speech development.",
    category: "Pediatric Dental",
    date: "Oct 05, 2023",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'b2',
    title: "Dental Implants: A Painless Solution",
    excerpt: "Missing teeth? Our modern implant technology ensures a beautiful smile returns easily and without pain.",
    category: "Restorative",
    date: "Feb 08, 2024",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'b3',
    title: "Zoom Whitening: Get Rid of Yellowing",
    excerpt: "Coffee and tea staining your smile? Restore your brightness with our laser whitening treatment.",
    category: "Cosmetic",
    date: "Jan 29, 2024",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop"
  }
];

const BLOG_DATA_AR: BlogPost[] = [
  {
    id: 'b1',
    title: "حافظ على أسنان طفلك اللبنية",
    excerpt: "لماذا الأسنان اللبنية مهمة جداً؟ إنها تحفظ المكان للأسنان الدائمة وتؤثر على تطور النطق.",
    category: "طب أسنان الأطفال",
    date: "5 أكتوبر 2023",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'b2',
    title: "زراعة الأسنان: حل بدون ألم",
    excerpt: "هل فقدت أسنانك؟ تضمن تقنية الزراعة الحديثة لدينا عودة ابتسامة جميلة بسهولة وبدون ألم.",
    category: "تجميلي",
    date: "8 فبراير 2024",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'b3',
    title: "تبييض زووم: تخلص من الاصفرار",
    excerpt: "هل تلطخ القهوة والشاي ابتسامتك؟ استعد بريقك مع علاج التبييض بالليزر لدينا.",
    category: "تجميلي",
    date: "29 يناير 2024",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop"
  }
];

const PARTNERS_DATA_EN: InsurancePartner[] = [
  { id: 'i1', name: "Thiqa", tier: "Network", logoText: "THIQA" },
  { id: 'i2', name: "Daman", tier: "All Networks", logoText: "DAMAN" },
  { id: 'i3', name: "AXA", tier: "Network A", logoText: "AXA" },
  { id: 'i4', name: "NextCare", tier: "General Plus", logoText: "NextCare" },
  { id: 'i5', name: "Mednet", tier: "Gold", logoText: "MedNet" },
  { id: 'i6', name: "Nas", tier: "Network", logoText: "NAS" },
];

export const DATA = {
  en: {
    doctors: DOCTORS_DATA_EN,
    services: SERVICES_DATA_EN,
    testimonials: TESTIMONIALS_DATA_EN,
    blog: BLOG_DATA_EN,
    partners: PARTNERS_DATA_EN
  },
  ar: {
    doctors: DOCTORS_DATA_AR,
    services: SERVICES_DATA_AR,
    testimonials: TESTIMONIALS_DATA_AR,
    blog: BLOG_DATA_AR,
    partners: PARTNERS_DATA_EN // Partners usually share logos/names
  }
};

// BACKWARD COMPATIBILITY EXPORTS (Default to EN)
export const DOCTORS = DOCTORS_DATA_EN;
export const SERVICES = SERVICES_DATA_EN;
export const TESTIMONIALS = TESTIMONIALS_DATA_EN;
export const BLOG_POSTS = BLOG_DATA_EN;
export const PARTNERS = PARTNERS_DATA_EN;
