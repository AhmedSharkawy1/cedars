import React from 'react';
import { COMPANY_INFO, UI_CONTENT } from '../constants';
import { Icons } from './Icons';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  lang: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = UI_CONTENT[lang].footer;
  const nav = UI_CONTENT[lang].nav;

  return (
    <footer className="bg-neutral-850 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="mb-6 cursor-pointer flex items-center gap-3" onClick={() => onNavigate('home')}>
             <img 
               src={COMPANY_INFO.logo} 
               alt="Cedars Medical Center" 
               className="h-14 w-14 rounded-full object-cover border-2 border-white/20 bg-white"
             />
             <div className="flex flex-col text-white">
                <span className="font-bold text-lg leading-tight">Cedars</span>
                <span className="text-xs text-slate-400">Medical Center</span>
             </div>
          </div>
          <p className="text-sm leading-relaxed mb-6 text-slate-400">
            {t.desc}
          </p>
          <div className="flex gap-4">
            <a href={COMPANY_INFO.instagram} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
              <Icons.Instagram size={18} />
            </a>
            <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
              <Icons.Globe size={18} />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6">{t.quickLinks}</h3>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => onNavigate('about')} className="hover:text-primary-500 transition-colors">{nav.about}</button></li>
            <li><button onClick={() => onNavigate('doctors')} className="hover:text-primary-500 transition-colors">{nav.doctors}</button></li>
            <li><button onClick={() => onNavigate('services')} className="hover:text-primary-500 transition-colors">{nav.services}</button></li>
            <li><button onClick={() => onNavigate('insurance')} className="hover:text-primary-500 transition-colors">{nav.insurance}</button></li>
            <li><button onClick={() => onNavigate('blog')} className="hover:text-primary-500 transition-colors">{nav.blog}</button></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-6">{t.departments}</h3>
          <ul className="space-y-3 text-sm">
            {lang === 'en' ? (
              <>
                <li>Family Medicine</li>
                <li>Pediatrics</li>
                <li>Dermatology</li>
                <li>Dental Care</li>
                <li>Physiotherapy</li>
                <li>Laboratory</li>
              </>
            ) : (
              <>
                <li>طب الأسرة</li>
                <li>طب الأطفال</li>
                <li>الجلدية</li>
                <li>طب الأسنان</li>
                <li>العلاج الطبيعي</li>
                <li>المختبر</li>
              </>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-6">{UI_CONTENT[lang].sections.contactTitle}</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Icons.MapPin className="text-primary-500 shrink-0 mt-0.5" size={16} />
              <span>{COMPANY_INFO.address[lang]}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icons.Phone className="text-primary-500 shrink-0" size={16} />
              <span className="font-sans" dir="ltr">{COMPANY_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icons.Clock className="text-primary-500 shrink-0" size={16} />
              <span>{COMPANY_INFO.workingHours[lang]}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Cedars Medical Center. {t.rights}</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <p>{t.privacy}</p>
          <div className="flex items-center gap-1 border border-slate-600 rounded px-2 py-1">
             <Icons.ShieldCheck size={12} className="text-green-500"/>
             <span>SSL Secure Site</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;