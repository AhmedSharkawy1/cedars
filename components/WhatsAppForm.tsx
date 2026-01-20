import React, { useState } from 'react';
import { COMPANY_INFO, DATA, UI_CONTENT } from '../constants';
import { Icons } from './Icons';

interface FormProps {
    lang: 'en' | 'ar';
}

const WhatsAppForm: React.FC<FormProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    doctor: '',
    date: '',
    time: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const t = UI_CONTENT[lang].form;
  const services = DATA[lang].services;
  const doctors = DATA[lang].doctors;

  // Generate Time Slots (10 AM to 9 PM) - Hours Only
  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour24 = i + 10; // Starts at 10:00
    const isPM = hour24 >= 12;
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24;
    
    return {
      value: `${hour24}:00`,
      label: lang === 'ar' 
        ? `${hour12}:00 ${isPM ? 'مساءً' : 'صباحاً'}`
        : `${hour12}:00 ${isPM ? 'PM' : 'AM'}`
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Format Date
    const dateObj = formData.date ? new Date(formData.date) : null;
    const formattedDate = dateObj 
      ? dateObj.toLocaleDateString(lang === 'ar' ? 'ar-AE' : 'en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) 
      : 'Flexible';

    // Format Time (Get label from slots if possible for better reading)
    const selectedSlot = timeSlots.find(s => s.value === formData.time);
    const formattedTime = selectedSlot ? selectedSlot.label : (formData.time || 'Flexible');

    // Construct Message
    const text = `
*New Appointment Request* 🏥
────────────────
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Doctor:* ${formData.doctor || 'Any Available'}
*Preferred Date:* ${formattedDate}
*Preferred Time:* ${formattedTime}
*Notes:* ${formData.notes}
    `.trim();

    // Encode for URL
    const encodedText = encodeURIComponent(text);
    const waLink = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedText}`;

    // Simulate slight delay for UX then open WhatsApp
    setTimeout(() => {
      window.open(waLink, '_blank');
      setLoading(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-10 border border-slate-100 relative overflow-hidden text-start h-full">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
        <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-2xl text-green-600 shadow-sm shrink-0">
          <Icons.Send size={24} className={lang === 'ar' ? 'rotate-180' : ''} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800 leading-none mb-2">{t.title}</h2>
          <p className="text-sm text-slate-500 font-medium">{t.sub}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">{t.name}</label>
          <input 
            required 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">{t.phone}</label>
          <input 
            required 
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="+971 50 000 0000"
            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 text-start"
            dir="ltr"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">{t.service}</label>
            <div className="relative">
              <select 
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all appearance-none cursor-pointer text-slate-700 font-medium"
              >
                <option value="">{t.selectService}</option>
                {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
              <Icons.ChevronRight className={`absolute top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5 ${lang === 'ar' ? 'left-4 rotate-90' : 'right-4 rotate-90'}`} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">{t.doctor}</label>
            <div className="relative">
              <select 
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all appearance-none cursor-pointer text-slate-700 font-medium"
              >
                <option value="">{t.anyDoctor}</option>
                {doctors.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
              </select>
              <Icons.ChevronRight className={`absolute top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5 ${lang === 'ar' ? 'left-4 rotate-90' : 'right-4 rotate-90'}`} />
            </div>
          </div>
        </div>

        <div>
            <div className="grid grid-cols-2 gap-4">
                {/* Date Selection */}
                <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">{lang === 'ar' ? 'التاريخ' : 'Date'}</label>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl relative focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-500 transition-all">
                        <div className={`absolute top-1/2 -translate-y-1/2 text-primary-500 pointer-events-none ${lang === 'ar' ? 'right-4' : 'left-4'}`}>
                            <Icons.Calendar size={20} />
                        </div>
                        <input 
                            type="date" 
                            name="date"
                            min={today}
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className={`w-full py-3.5 bg-transparent outline-none text-slate-700 font-bold appearance-none ${lang === 'ar' ? 'pr-12 pl-2 text-right' : 'pl-12 pr-2 text-left'}`}
                        />
                    </div>
                </div>

                {/* Time Selection */}
                <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">{lang === 'ar' ? 'الوقت' : 'Time'}</label>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl relative focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-500 transition-all">
                        <div className={`absolute top-1/2 -translate-y-1/2 text-primary-500 pointer-events-none ${lang === 'ar' ? 'right-4' : 'left-4'}`}>
                            <Icons.Clock size={20} />
                        </div>
                        <select 
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className={`w-full py-3.5 bg-transparent outline-none text-slate-700 font-bold appearance-none cursor-pointer ${lang === 'ar' ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'}`}
                        >
                            <option value="">{lang === 'ar' ? 'اختر' : 'Select'}</option>
                            {timeSlots.map(slot => (
                            <option key={slot.value} value={slot.value}>{slot.label}</option>
                            ))}
                        </select>
                        <Icons.ChevronRight 
                            size={16} 
                            className={`absolute top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none ${lang === 'ar' ? 'left-4 rotate-90' : 'right-4 rotate-90'}`} 
                        />
                    </div>
                </div>
            </div>
           
           <p className="text-xs text-slate-400 mt-3 px-1 flex items-center gap-1.5 opacity-80">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
              {lang === 'ar' ? 'أوقات العمل من 10 صباحاً إلى 9 مساءً' : 'Operating Hours: 10:00 AM - 09:00 PM'}
           </p>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">{t.notes}</label>
          <textarea 
            name="notes" 
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder={t.notesPlaceholder}
            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all resize-none font-medium text-slate-800 placeholder:text-slate-400"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/40 hover:-translate-y-1 transition-all flex justify-center items-center gap-3 group mt-2"
        >
          {loading ? t.processing : (
            <>
              <Icons.Send size={22} className={`group-hover:-translate-y-1 ${lang === 'ar' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'} transition-transform`} />
              <span className="text-lg">{t.submit}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default WhatsAppForm;