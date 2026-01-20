import React, { useState } from 'react';
import { Icons } from './Icons';
import { PageView } from '../types';
import { COMPANY_INFO, UI_CONTENT } from '../constants';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = UI_CONTENT[lang].nav;

  const navItems: { label: string; value: PageView }[] = [
    { label: t.home, value: 'home' },
    { label: t.services, value: 'services' },
    { label: t.doctors, value: 'doctors' },
    { label: t.insurance, value: 'insurance' },
    { label: t.about, value: 'about' },
    { label: t.blog, value: 'blog' },
    { label: t.contact, value: 'contact' },
  ];

  const handleNav = (page: PageView) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - Contact Info */}
      <div className="bg-primary-700 text-white py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4 space-x-reverse items-center gap-4">
            <span className="flex items-center gap-1 dir-ltr">
              <Icons.Phone size={14} /> 
              <span className="font-sans" dir="ltr">{COMPANY_INFO.phone}</span>
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Icons.Clock size={14} /> {COMPANY_INFO.workingHours[lang]}
            </span>
          </div>
          <div className="flex space-x-3 items-center gap-3">
            <button 
              onClick={toggleLang}
              className="cursor-pointer hover:text-secondary-500 font-bold transition-colors"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-300">
              <Icons.Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNav('home')}
        >
          <img 
            src={COMPANY_INFO.logo} 
            alt="Cedars Medical Center" 
            className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover shadow-sm border border-primary-50 transition-transform hover:scale-105"
          />
          <div className="flex flex-col">
             <span className="font-bold text-slate-800 text-sm md:text-base leading-tight">Cedars</span>
             <span className="text-[10px] md:text-xs text-slate-500 tracking-wider">Medical Center</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNav(item.value)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.value 
                  ? 'text-primary-700 border-b-2 border-primary-700' 
                  : 'text-slate-600 hover:text-primary-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button 
            onClick={() => handleNav('appointment')}
            className="bg-primary-700 hover:bg-primary-900 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Icons.Calendar size={16} />
            {t.bookBtn}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`text-start text-base font-medium py-2 border-b border-slate-100 ${
                  currentPage === item.value ? 'text-primary-700' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNav('appointment')}
              className="bg-primary-700 text-white py-3 rounded-lg font-bold w-full flex justify-center items-center gap-2 mt-4"
            >
              <Icons.Calendar size={18} />
              {t.bookBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
