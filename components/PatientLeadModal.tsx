import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { UI_CONTENT } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
}

const PatientLeadModal: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // FORM STATE
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  // Animation mounting
  useEffect(() => {
    if (isOpen) setMounted(true);
    else setTimeout(() => setMounted(false), 300);
  }, [isOpen]);

  if (!mounted) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // YOUR GOOGLE APPS SCRIPT WEB APP URL
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxiK8un0dtvf-BDa6T1ATvGbD8d2eIZwAx87Wo0nv2JDelfhkirBEuep0k_k9boeFNq/exec"; 

      // We use FormData for Google Apps Script compatibility
      const data = new FormData();
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('service', formData.service);
      data.append('message', formData.message);
      data.append('created_at', new Date().toLocaleString());

      // Note: Google Apps Script usually returns a redirect (302), so 'no-cors' is often needed
      // preventing us from reading the response JSON directly in simple setups.
      // For this demo, we assume success if no network error occurs.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        body: data
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false); // Reset for next time if needed
      }, 3000);

    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const t = UI_CONTENT[lang];

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className={`bg-white w-full max-w-lg rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-300 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        
        {/* Header Image / Design */}
        <div className="bg-primary-700 h-32 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-20"
            >
                <Icons.X size={20} />
            </button>
            <div className="text-center z-10 text-white px-6">
                <h3 className="text-2xl font-bold mb-1">
                    {lang === 'ar' ? 'طلب استشارة مجانية' : 'Request a Callback'}
                </h3>
                <p className="text-primary-100 text-sm">
                    {lang === 'ar' ? 'اترك بياناتك وسنقوم بالتواصل معك' : 'Leave your details and we will contact you shortly.'}
                </p>
            </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
            {success ? (
                <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icons.Check size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">
                        {lang === 'ar' ? 'تم الإرسال بنجاح!' : 'Sent Successfully!'}
                    </h4>
                    <p className="text-slate-500">
                        {lang === 'ar' ? 'سيقوم فريقنا بالاتصال بك قريباً.' : 'Our team will reach out to you soon.'}
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.form.name}</label>
                        <input 
                            required 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                            placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">{t.form.phone}</label>
                            <input 
                                required 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="tel" 
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-start"
                                placeholder="+971..."
                                dir="ltr"
                            />
                        </div>
                        <div>
                             <label className="block text-sm font-bold text-slate-700 mb-1">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                             <input 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email" 
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                placeholder="example@gmail.com"
                             />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.form.service}</label>
                        <select 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        >
                            <option value="General Inquiry">{lang === 'ar' ? 'استفسار عام' : 'General Inquiry'}</option>
                            <option value="Dental">{lang === 'ar' ? 'طب الأسنان' : 'Dental'}</option>
                            <option value="Medical">{lang === 'ar' ? 'الطب العام' : 'General Medicine'}</option>
                            <option value="Insurance">{lang === 'ar' ? 'التأمين' : 'Insurance'}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.form.notes}</label>
                        <textarea 
                            name="message"
                            rows={2}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-secondary-500/30 transition-all mt-2 flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <span>{t.form.processing}</span>
                        ) : (
                            <>
                                <span>{lang === 'ar' ? 'أرسل الطلب' : 'Submit Request'}</span>
                                <Icons.Send size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
                            </>
                        )}
                    </button>
                    
                    <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                        <Icons.Lock size={10} />
                        {lang === 'ar' ? 'بياناتك آمنة ومحمية' : 'Your information is secure'}
                    </p>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default PatientLeadModal;