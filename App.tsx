import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { PageView } from './types';
import { Icons } from './components/Icons';
import { COMPANY_INFO, DATA, UI_CONTENT } from './constants';
import WhatsAppForm from './components/WhatsAppForm';
import { ToothComparison } from './components/ToothComparison';
import PatientLeadModal from './components/PatientLeadModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [showLeadModal, setShowLeadModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Lead Modal Trigger Logic (e.g., 10 seconds after load, once per session)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('cedars_lead_modal_seen');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowLeadModal(true);
        sessionStorage.setItem('cedars_lead_modal_seen', 'true');
      }, 10000); // 10 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  // Update HTML direction and font based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
  }, [lang]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} lang={lang} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} lang={lang} />;
      case 'doctors':
        return <DoctorsPage onNavigate={setCurrentPage} lang={lang} />;
      case 'appointment':
        return <AppointmentPage lang={lang} />;
      case 'contact':
        return <ContactPage lang={lang} />;
      case 'about':
        return <AboutPage lang={lang} />;
      case 'blog':
        return <BlogPage lang={lang} />;
      case 'insurance':
        return <InsurancePage lang={lang} />;
      default:
        return <Home onNavigate={setCurrentPage} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} lang={lang} setLang={setLang} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} lang={lang} />
      
      {/* Lead Generation Modal */}
      <PatientLeadModal 
        isOpen={showLeadModal} 
        onClose={() => setShowLeadModal(false)} 
        lang={lang} 
      />

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 end-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform cursor-pointer flex items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <Icons.Phone size={28} />
        <span className="font-bold hidden md:inline">{lang === 'ar' ? 'تحدث معنا' : 'Chat With Us'}</span>
      </a>
    </div>
  );
};

// --- Page Components ---

interface PageProps {
  onNavigate?: (p: PageView) => void;
  lang: 'en' | 'ar';
}

const Home: React.FC<PageProps> = ({ onNavigate, lang }) => {
  const [feed, setFeed] = useState<Array<{id: number, url: string, likes: number, comments: number}>>([]);
  const [loadingFeed, setLoadingFeed] = useState(true);
  
  const content = UI_CONTENT[lang].hero;
  const sections = UI_CONTENT[lang].sections;
  const services = DATA[lang].services;
  const testimonials = DATA[lang].testimonials;
  const partners = DATA[lang].partners;
  const doctors = DATA[lang].doctors;

  useEffect(() => {
    // Simulate API Fetch for Instagram Feed
    const fetchFeed = async () => {
      // Fake delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Using real images provided by the user
      const mockData = [
        { id: 1, url: 'https://8upload.com/image/fa1fe5491f0f293e/WhatsApp_Image_2026-01-20_at_7.31.36_PM.jpeg', likes: 142, comments: 8 },
        { id: 2, url: 'https://8upload.com/image/c60067f2170259ba/WhatsApp_Image_2026-01-20_at_7.31.37_PM__2_.jpeg', likes: 98, comments: 12 },
        { id: 3, url: 'https://8upload.com/image/abb8a345d65cc216/WhatsApp_Image_2026-01-20_at_7.31.38_PM__1_.jpeg', likes: 215, comments: 24 },
        { id: 4, url: 'https://8upload.com/image/8735369e1717f65a/WhatsApp_Image_2026-01-20_at_7.31.38_PM.jpeg', likes: 184, comments: 15 }
      ];
      setFeed(mockData);
      setLoadingFeed(false);
    };

    fetchFeed();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        {/* Decorative Circles */}
        <div className="absolute top-0 end-0 w-64 h-64 bg-primary-600 rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 start-0 w-40 h-40 bg-primary-800 rounded-tr-full opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white space-y-6">
            <div className="flex gap-2 animate-[fadeIn_1s_ease-out]">
               <div className="inline-block bg-white text-primary-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-sm">
                {content.yearsBadge}
              </div>
              <div className="inline-block bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-sm animate-pulse">
                {content.offerBadge}
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {content.titleLine1} <br/> <span className="text-secondary-500">{content.titleLine2}</span>
            </h1>
            <p className="text-lg text-primary-100 max-w-lg leading-relaxed">
              {content.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => onNavigate && onNavigate('appointment')}
                className="bg-white text-primary-700 hover:bg-slate-100 px-8 py-4 rounded-full font-bold shadow-lg transition-all flex justify-center items-center gap-2"
              >
                <Icons.Calendar size={20} />
                {content.bookBtn}
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('services')}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all"
              >
                {content.servicesBtn}
              </button>
            </div>
            
            <div className="pt-8 flex gap-8 border-t border-primary-600/50 mt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">10+</span>
                <span className="text-sm text-primary-200">{content.stats.years}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">24/7</span>
                <span className="text-sm text-primary-200">{content.stats.daily}</span>
              </div>
              <div className="flex flex-col">
                 <div className="flex items-center text-secondary-500">
                    <Icons.Star size={20} fill="currentColor"/>
                    <Icons.Star size={20} fill="currentColor"/>
                    <Icons.Star size={20} fill="currentColor"/>
                    <Icons.Star size={20} fill="currentColor"/>
                    <Icons.Star size={20} fill="currentColor"/>
                 </div>
                <span className="text-sm text-primary-200">{content.stats.satisfaction}</span>
              </div>
            </div>
          </div>
          
          {/* Interactive Tooth Comparison Element (UGC Style) */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
             <ToothComparison lang={lang} onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{sections.servicesTitle}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">{sections.servicesSub}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map(service => {
              const Icon = Icons[service.iconName as keyof typeof Icons];
              return (
                <div key={service.id} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary-100 hover:shadow-xl transition-all duration-300 text-start">
                  <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                        <Icons.ChevronRight size={14} className={`text-secondary-500 ${lang === 'ar' ? 'rotate-180' : ''}`} /> {b}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onNavigate && onNavigate('services')} className="text-primary-700 font-semibold flex items-center gap-1 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">
                    {sections.learnMore} <Icons.ChevronRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <button onClick={() => onNavigate && onNavigate('services')} className="bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors">{sections.viewAllServices}</button>
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">{sections.meetSpecialists}</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">{sections.specialistsSub}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100 group flex flex-col">
                <div className="h-72 overflow-hidden relative bg-slate-50 flex items-end justify-center">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                     <span className="text-white font-bold text-sm">{content.bookBtn}</span>
                  </div>
                </div>
                <div className="p-5 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1 leading-snug min-h-[3.5rem] flex items-center justify-center">{doctor.name}</h3>
                    <p className="text-primary-600 text-sm font-medium mb-3">{doctor.specialty}</p>
                  </div>
                  <button 
                    onClick={() => onNavigate && onNavigate('appointment')}
                    className="text-xs font-bold text-slate-400 hover:text-primary-600 transition-colors uppercase tracking-wider flex items-center justify-center gap-1 mx-auto mt-2"
                  >
                    <span>Book Appointment</span> <Icons.ChevronRight size={12} className={lang === 'ar' ? 'rotate-180' : ''} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* UGC / Social Media Wall Section - NEW DYNAMIC ENHANCEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
              <span className="text-secondary-500 font-bold tracking-widest text-sm uppercase">Community</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">{sections.communityTitle}</h2>
              <p className="text-slate-500 mt-2">{sections.communitySub} <span className="text-primary-600 font-bold">#CedarsSmiles</span></p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {loadingFeed ? (
                // Skeleton Loader
                [...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-slate-200 rounded-xl animate-pulse"></div>
                ))
              ) : (
                // Loaded Feed
                feed.map((post) => (
                  <div key={post.id} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer bg-slate-100">
                     <img 
                        src={post.url} 
                        alt="Patient Smile" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        loading="lazy"
                     />
                     {/* Instagram Overlay */}
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-3">
                        <div className="flex items-center gap-6">
                           <div className="flex items-center gap-1">
                              <Icons.Heart size={20} className="fill-white" />
                              <span className="font-bold text-sm">{post.likes}</span>
                           </div>
                           <div className="flex items-center gap-1">
                              <Icons.MessageCircle size={20} className="fill-white" />
                              <span className="font-bold text-sm">{post.comments}</span>
                           </div>
                        </div>
                        <span className="text-xs font-medium tracking-wide">@cedars.mc</span>
                     </div>
                     {/* Corner Icon */}
                     <div className="absolute top-2 end-2 text-white drop-shadow-md opacity-80 group-hover:opacity-0 transition-opacity">
                        <Icons.Instagram size={20} />
                     </div>
                  </div>
                ))
              )}
           </div>
           <div className="mt-8 text-center">
              <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-700 font-bold hover:underline transition-all hover:text-primary-800">
                 {sections.viewGallery} <Icons.ChevronRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
              </a>
           </div>
        </div>
      </section>

      {/* Insurance Partners Strip */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-slate-400 font-medium mb-8 text-sm uppercase tracking-widest">{sections.trustedBy}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
               {partners.map(p => (
                 <span key={p.id} className="text-xl md:text-2xl font-bold text-slate-400 hover:text-primary-600 transition-colors cursor-default">{p.logoText}</span>
               ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 end-0 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 start-0 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12">{sections.storiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-start relative hover:-translate-y-1 transition-transform border border-white/10">
                <div className="flex text-secondary-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icons.Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-primary-50 mb-6 italic font-light">"{t.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <span className="text-xs text-primary-300">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 bg-gradient-to-br from-primary-50 to-green-100 rounded-3xl p-12 text-center border border-primary-100 shadow-lg relative overflow-hidden">
           <div className="absolute top-0 end-0 p-4 opacity-10">
              <Icons.Trees size={120} className="text-primary-800" />
           </div>
          <h2 className="text-3xl font-bold text-primary-900 mb-4 relative z-10">{sections.finalCtaTitle}</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto relative z-10">{sections.finalCtaSub}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button onClick={() => onNavigate && onNavigate('appointment')} className="bg-primary-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-primary-800 transition-colors">{sections.bookNow}</button>
            <button onClick={() => onNavigate && onNavigate('contact')} className="bg-white text-primary-700 border border-primary-200 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors">{sections.contactUs}</button>
          </div>
        </div>
      </section>
    </>
  );
};

const ServicesPage: React.FC<PageProps> = ({ onNavigate, lang }) => (
  <div className="pt-8 pb-20">
    <div className="bg-primary-700 text-white py-16 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{UI_CONTENT[lang].nav.services}</h1>
        <p className="text-primary-100 max-w-2xl">{UI_CONTENT[lang].sections.servicesSub}</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 grid gap-8">
      {DATA[lang].services.map((service, idx) => {
        const Icon = Icons[service.iconName as keyof typeof Icons];
        return (
          <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
             <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shadow-inner">
                  <Icon size={64} />
                </div>
             </div>
             <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => onNavigate && onNavigate('appointment')} 
                  className="text-primary-700 font-bold border-b-2 border-primary-100 hover:border-primary-700 transition-colors"
                >
                  {UI_CONTENT[lang].sections.bookService}
                </button>
             </div>
          </div>
        );
      })}
    </div>
  </div>
);

const DoctorsPage: React.FC<PageProps> = ({ onNavigate, lang }) => (
  <div className="pt-8 pb-20">
    <div className="bg-primary-700 text-white py-16 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{UI_CONTENT[lang].sections.meetSpecialists}</h1>
        <p className="text-primary-100 max-w-2xl">{UI_CONTENT[lang].sections.specialistsSub}</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {DATA[lang].doctors.map(doctor => (
        <div key={doctor.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100 flex flex-col">
          <div className="h-80 overflow-hidden bg-slate-50 relative flex items-end justify-center">
             <img src={doctor.image} alt={doctor.name} className="w-full h-full object-contain object-bottom hover:scale-105 transition-transform duration-500" />
             <div className="absolute bottom-0 start-0 end-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white text-lg font-bold">{doctor.name}</h3>
                <p className="text-primary-200 text-sm">{doctor.specialty}</p>
             </div>
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <p className="text-xs text-slate-500 mb-4 font-semibold">{doctor.qualifications}</p>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{doctor.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {doctor.languages.map(lang => (
                  <span key={lang} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">{lang}</span>
                ))}
              </div>
            </div>
            <button 
              onClick={() => onNavigate && onNavigate('appointment')}
              className="w-full py-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-700 hover:text-white transition-colors font-bold text-sm"
            >
              {UI_CONTENT[lang].form.submit}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AppointmentPage: React.FC<PageProps> = ({ lang }) => {
  const content = UI_CONTENT[lang];
  
  const benefits = lang === 'en' ? [
    'Internationally Certified Doctors',
    'Latest Medical Technology',
    'Instant Appointment Confirmation',
    'Direct Insurance Billing'
  ] : [
    'أطباء معتمدون دولياً',
    'أحدث التقنيات الطبية',
    'تأكيد موعد فوري',
    'فوترة مباشرة للتأمين'
  ];

  return (
    <div className="py-12 lg:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary-500 font-bold tracking-widest text-sm uppercase mb-2 block animate-[fadeIn_1s]">
            {lang === 'en' ? 'Easy Scheduling' : 'حجز سهل وسريع'}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {content.sections.scheduleTitle}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {content.sections.scheduleSub}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Info & Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
             {/* Reasons Card */}
             <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center">
                    <Icons.Sparkles size={20} />
                  </div>
                  {lang === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
                </h3>
                <ul className="space-y-4">
                  {benefits.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                        <Icons.Check size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>

             {/* Quick Contact Card */}
             <div className="bg-gradient-to-br from-primary-800 to-primary-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-lg font-bold mb-4 relative z-10">
                  {lang === 'ar' ? 'هل تحتاج مساعدة؟' : 'Need Assistance?'}
                </h3>
                <p className="text-primary-100 mb-8 text-sm leading-relaxed relative z-10">
                   {lang === 'ar' ? 'فريقنا متاح للإجابة على استفساراتك مباشرة عبر الهاتف.' : 'Our dedicated support team is available to help you.'}
                </p>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/10 p-4 rounded-xl transition-all relative z-10 backdrop-blur-sm group">
                   <div className="w-12 h-12 bg-white text-primary-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icons.Phone size={24} />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xs text-primary-200 uppercase tracking-wider mb-1">{lang === 'ar' ? 'اتصل بنا' : 'Call Support'}</span>
                      <span className="font-bold text-xl tracking-wide font-sans" dir="ltr">{COMPANY_INFO.phone}</span>
                   </div>
                </a>
             </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
             <div className="relative">
               {/* Glow Effect */}
               <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-[2.5rem] opacity-20 blur-2xl"></div>
               <WhatsAppForm lang={lang} />
             </div>
             
             {/* Security Note */}
             <div className="mt-6 flex justify-center items-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                   <Icons.ShieldCheck size={16} className="text-green-500" />
                   <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                   <Icons.Lock size={16} className="text-green-500" />
                   <span>256-bit SSL Secure</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC<PageProps> = ({ lang }) => (
  <div className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-slate-800 mb-12 text-center">{UI_CONTENT[lang].sections.contactTitle}</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-6">{UI_CONTENT[lang].sections.getInTouch}</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center shrink-0">
                  <Icons.MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{UI_CONTENT[lang].sections.addressLabel}</h4>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address[lang])}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-600 hover:text-primary-600 hover:underline transition-colors block leading-relaxed"
                  >
                    {COMPANY_INFO.address[lang]}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center shrink-0">
                  <Icons.Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{UI_CONTENT[lang].sections.phoneLabel}</h4>
                  <a 
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                    className="text-slate-600 font-mono hover:text-primary-600 hover:underline transition-colors block" 
                    dir="ltr"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-slate-500 text-xs">{UI_CONTENT[lang].sections.whatsappAvailable}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center shrink-0">
                  <Icons.Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{UI_CONTENT[lang].sections.hoursLabel}</h4>
                  <p className="text-slate-600">{COMPANY_INFO.workingHours[lang]}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Real Map Iframe */}
        <div className="bg-slate-200 rounded-2xl h-96 w-full flex items-center justify-center relative overflow-hidden group shadow-lg border border-slate-300">
           <iframe 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             loading="lazy" 
             allowFullScreen
             referrerPolicy="no-referrer-when-downgrade"
             src={`https://maps.google.com/maps?q=${encodeURIComponent("Cedars Medical Center Abu Dhabi")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
             title="Cedars Medical Center Map"
           ></iframe>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage: React.FC<PageProps> = ({ lang }) => (
   <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">{UI_CONTENT[lang].sections.aboutTitle}</h1>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-12">
           <h2 className="text-2xl font-bold text-primary-700 mb-4">{UI_CONTENT[lang].sections.ourStory}</h2>
           <p className="text-slate-600 mb-6 leading-relaxed">
             {UI_CONTENT[lang].sections.ourStoryText}
           </p>
           <h2 className="text-2xl font-bold text-primary-700 mb-4">{UI_CONTENT[lang].sections.mission}</h2>
           <p className="text-slate-600 mb-6 leading-relaxed">
             {UI_CONTENT[lang].sections.missionText}
           </p>
           <h2 className="text-2xl font-bold text-primary-700 mb-4">{UI_CONTENT[lang].sections.values}</h2>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {['Integrity', 'Excellence', 'Compassion', 'Innovation'].map(v => (
               <li key={v} className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 font-medium text-slate-700 flex items-center gap-2">
                 <div className="w-2 h-2 bg-secondary-500 rounded-full"></div> {v}
               </li>
             ))}
           </ul>
        </div>
      </div>
   </div>
);

const BlogPage: React.FC<PageProps> = ({ lang }) => (
  <div className="py-20 bg-slate-50">
     <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-800 mb-12 text-center">{UI_CONTENT[lang].sections.blogTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {DATA[lang].blog.map(post => (
             <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                   <div>
                     <div className="flex justify-between items-center mb-3">
                       <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">{post.category}</span>
                       <span className="text-xs text-slate-400">{post.date}</span>
                     </div>
                     <h3 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h3>
                     <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                   </div>
                   <button className="text-primary-700 font-medium text-sm hover:underline text-start">{UI_CONTENT[lang].sections.readArticle}</button>
                </div>
             </article>
           ))}
        </div>
     </div>
  </div>
);

const InsurancePage: React.FC<PageProps> = ({ lang }) => (
  <div className="py-20">
    <div className="max-w-7xl mx-auto px-4">
       <h1 className="text-4xl font-bold text-slate-800 mb-6 text-center">{UI_CONTENT[lang].sections.insuranceTitle}</h1>
       <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
         {UI_CONTENT[lang].sections.insuranceSub}
       </p>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {DATA[lang].partners.map(partner => (
           <div key={partner.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center hover:border-primary-200 transition-colors">
              <span className="text-xl font-bold text-slate-700 mb-2">{partner.logoText}</span>
              <span className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded">{partner.tier}</span>
           </div>
         ))}
       </div>
    </div>
  </div>
);

export default App;