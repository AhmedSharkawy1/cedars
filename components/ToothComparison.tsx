import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { COMPANY_INFO, UI_CONTENT } from '../constants';
import { PageView } from '../types';

interface ToothComparisonProps {
  lang: 'en' | 'ar';
  onNavigate?: (page: PageView) => void;
}

export const ToothComparison: React.FC<ToothComparisonProps> = ({ lang, onNavigate }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = UI_CONTENT[lang].toothComparison;

  // Real Provided Images
  const imgAfter = "https://8upload.com/image/b3c590ed0d931b89/teeth-whitening-after-1.jpg";
  const imgBefore = "https://8upload.com/image/b0377cea07a867b2/WhatsApp_Image_2026-01-20_at_6.12.26_PM.jpeg";

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleDrag = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(100, ((clientX - left) / width) * 100));
    setSliderPos(pos);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleDrag(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDrag(e.touches[0].clientX);
  };

  const startDrag = (clientX: number) => {
     setIsDragging(true);
     handleDrag(clientX);
  };

  useEffect(() => {
    const stopDrag = () => setIsDragging(false);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);
    return () => {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center w-full">
       {/* Comparison Container */}
       <div 
        className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white select-none group touch-none bg-slate-100 cursor-ew-resize"
        ref={containerRef}
        onMouseDown={(e) => startDrag(e.clientX)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
       >
          {/* 1. Background Layer -> RIGHT Side -> BEFORE (Real Image) */}
          <img 
            src={imgBefore} 
            alt="Teeth Before" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Badge: Before (Hides when slider moves towards right/After side) */}
          <div 
            className={`absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border border-white/20 transition-opacity duration-300 ${sliderPos > 90 ? 'opacity-0' : 'opacity-100'}`}
          >
             {t.before}
          </div>

          {/* 2. Foreground Layer -> LEFT Side -> AFTER (Real Image) */}
          <div 
            className="absolute top-0 bottom-0 left-0 overflow-hidden border-r-4 border-white shadow-lg pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
             <img 
                src={imgAfter} 
                alt="Teeth After" 
                className="absolute top-0 left-0 h-full object-cover max-w-none"
                style={{ 
                    width: containerWidth > 0 ? `${containerWidth}px` : '100%',
                }}
             />
             {/* Badge: After (Hides when slider moves towards left/Before side) */}
             <div 
                className={`absolute top-4 left-4 z-10 bg-white/80 text-primary-800 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm transition-opacity duration-300 ${sliderPos < 10 ? 'opacity-0' : 'opacity-100'}`}
             >
                {t.after}
             </div>
          </div>

          {/* 3. Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-0 z-20 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
             <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-primary-600 border-2 border-primary-50">
                <Icons.Activity size={20} className="rotate-90" />
             </div>
          </div>
          
          {/* Hint Overlay */}
          <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-500 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold ${isDragging || sliderPos !== 50 ? 'opacity-0' : 'opacity-100 animate-pulse'}`}>
            DRAG TO COMPARE
          </div>
       </div>

       {/* Caption & CTAs */}
       <div className="text-center md:text-start bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white shadow-sm w-full max-w-2xl">
          <p className="font-bold text-slate-800 mb-4 flex items-center justify-center md:justify-start gap-2">
             <Icons.Sparkles className="text-secondary-500" size={20} />
             {t.caption}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
             <button 
                onClick={() => onNavigate && onNavigate('appointment')}
                className="flex-1 bg-primary-700 hover:bg-primary-800 text-white py-3 px-4 rounded-xl font-bold shadow-lg transition-all text-sm flex items-center justify-center gap-2"
             >
                <Icons.Calendar size={18} />
                {t.ctaPrimary}
             </button>
             <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold shadow-lg transition-all text-sm flex items-center justify-center gap-2"
             >
                <Icons.Phone size={18} />
                {t.ctaSecondary}
             </a>
          </div>
       </div>
    </div>
  );
};
