'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, GraduationCap, BarChart3, 
  Globe2, Lightbulb, Eye, Volume2, Wind, Hand, Utensils,
  BookOpen, ShieldCheck, Target, Zap, Play, X
} from 'lucide-react';
import { slides, SlideData } from '../data/slides';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    if (currentSlide + newDirection >= 0 && currentSlide + newDirection < slides.length) {
      setIsFocused(false);
      setDirection(newDirection);
      setCurrentSlide(prev => prev + newDirection);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'Escape') setIsFocused(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const getThemeForSlide = (s: SlideData) => {
    const title = s.title.toUpperCase();
    const category = s.category?.toUpperCase() || '';
    if (title.includes('VISÃO') || category.includes('VISÃO')) return { primary: '#00D2FF', glow: 'rgba(0, 210, 255, 0.15)', bg: 'bg-[#000d12]' };
    if (title.includes('AUDIÇÃO') || category.includes('AUDIÇÃO')) return { primary: '#FFB300', glow: 'rgba(255, 179, 0, 0.15)', bg: 'bg-[#0d0a00]' };
    if (title.includes('OLFACTO') || category.includes('OLFACTO')) return { primary: '#4CAF50', glow: 'rgba(76, 175, 80, 0.15)', bg: 'bg-[#050d06]' };
    if (title.includes('TACTO') || category.includes('TACTO')) return { primary: '#E0E0E0', glow: 'rgba(224, 224, 224, 0.15)', bg: 'bg-[#121212]' };
    if (title.includes('PALADAR') || category.includes('PALADAR')) return { primary: '#FF1744', glow: 'rgba(255, 23, 68, 0.15)', bg: 'bg-[#120002]' };
    return { primary: '#C5A059', glow: 'rgba(197, 160, 89, 0.15)', bg: 'bg-zinc-950' };
  };

  const currentTheme = getThemeForSlide(slides[currentSlide]);

  return (
    <main className={`h-screen w-full ${currentTheme.bg} transition-colors duration-1000 overflow-hidden flex flex-col relative text-white selection:bg-brand-gold selection:text-black`}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <motion.div animate={{ backgroundColor: currentTheme.glow, opacity: isFocused ? 0 : 1 }} className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] md:blur-[150px] transition-all duration-1000" />
      <motion.div animate={{ backgroundColor: currentTheme.glow, opacity: isFocused ? 0 : 0.5 }} className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] md:blur-[150px] transition-all duration-1000" />

      <motion.div animate={{ opacity: isFocused ? 0 : 1 }} className="absolute top-0 left-0 w-full h-1 bg-white/5 z-[60]">
        <motion.div className="h-full shadow-[0_0_20px_rgba(255,255,255,0.3)]" initial={{ width: 0 }} animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%`, backgroundColor: currentTheme.primary }} transition={{ duration: 0.5 }} />
      </motion.div>

      {/* Navigation Controls */}
      <motion.div 
        animate={{ opacity: isFocused ? 0 : 1, y: isFocused ? 50 : 0 }} 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-3 z-[100] bg-black/80 backdrop-blur-2xl px-4 py-2 rounded-2xl border border-white/20 shadow-2xl"
      >
        <button onClick={() => paginate(-1)} className={`p-2 rounded-xl hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 active:scale-90'}`} disabled={currentSlide === 0}>
          <ChevronLeft className="w-6 h-6" style={{ color: currentTheme.primary }} />
        </button>
        <div className="flex items-center gap-1 px-3 border-x border-white/10 mx-1 min-w-[60px] justify-center text-sm font-black tracking-tighter" style={{ color: currentTheme.primary }}>
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        <button onClick={() => paginate(1)} className={`p-2 rounded-xl hover:bg-white/10 transition-all ${currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 active:scale-90'}`} disabled={currentSlide === slides.length - 1}>
          <ChevronRight className="w-6 h-6" style={{ color: currentTheme.primary }} />
        </button>
      </motion.div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={currentSlide} custom={direction} initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }} transition={{ duration: 0.3 }}
          drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(e, { offset }) => { if (offset.x < -50) paginate(1); else if (offset.x > 50) paginate(-1); }}
          className="flex-1 w-full flex items-center justify-center p-4 md:p-8 lg:p-12 min-h-0 z-10"
        >
          <div className="w-full h-full max-h-full flex items-center justify-center overflow-hidden">
            <InteractiveSlide slide={slides[currentSlide]} theme={currentTheme} isFocused={isFocused} setIsFocused={setIsFocused} />
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div animate={{ opacity: isFocused ? 0 : 1 }} className="absolute bottom-6 left-10 text-[10px] uppercase tracking-[0.3em] text-white/10 font-bold hidden md:block">
        Marketing Sensorial <span className="mx-2" style={{ color: currentTheme.primary }}>|</span> Mozambique 2026
      </motion.div>
    </main>
  );
}

function InteractiveSlide({ slide, theme, isFocused, setIsFocused }: any) {
  const Icon = getIcon(slide.title);
  const isVideo = slide.mediaUrl?.toLowerCase().endsWith('.mp4');

  switch (slide.type) {
    case 'media':
      return (
        <div className={`w-full h-full relative flex items-center justify-center p-0 overflow-hidden rounded-2xl md:rounded-[40px] border shadow-2xl bg-black transition-all duration-700 ${isFocused ? 'border-transparent rounded-none scale-100' : ''}`} style={{ borderColor: isFocused ? 'transparent' : `${theme.primary}20` }}>
          <motion.div animate={{ opacity: isFocused ? 0 : 1 }} className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-20 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <motion.div animate={{ scale: isFocused ? 1 : 1.05, opacity: isFocused ? 1 : 0.6 }} className="absolute inset-0">
               {slide.mediaUrl ? (isVideo ? <video src={slide.mediaUrl} autoPlay muted={!isFocused} loop={!isFocused} playsInline className="w-full h-full object-contain pointer-events-none" /> : <img src={slide.mediaUrl} className="w-full h-full object-contain pointer-events-none" alt="" />) : <div className="w-full h-full bg-zinc-900" />}
            </motion.div>
            {isVideo && !isFocused && (
              <button onClick={(e) => { e.stopPropagation(); setIsFocused(true); }} className="absolute inset-0 w-full h-full z-40 flex items-center justify-center group/btn">
                <motion.div whileHover={{ scale: 1.1 }} className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl group-hover/btn:bg-white/20 transition-all"><Play className="w-10 h-10 text-white fill-white ml-1" /></motion.div>
              </button>
            )}
            {isFocused && (
              <button onClick={(e) => { e.stopPropagation(); setIsFocused(false); }} className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-4 rounded-full bg-black/60 border border-white/10 text-white"><X className="w-6 h-6 md:w-8 md:h-8" /></button>
            )}
            <motion.div animate={{ y: isFocused ? 100 : 0, opacity: isFocused ? 0 : 1 }} className="relative z-30 space-y-4 px-6 md:px-12 pointer-events-none">
              <div className="inline-block px-4 py-1.5 rounded-full text-black text-[10px] font-black uppercase tracking-[0.4em] mb-2 shadow-2xl" style={{ backgroundColor: theme.primary }}>Ilustração Real</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight shadow-black drop-shadow-2xl">{slide.title}</h2>
              <p className="text-base md:text-xl lg:text-2xl font-light italic max-w-4xl mx-auto drop-shadow-lg" style={{ color: theme.primary }}>{slide.imageAlt}</p>
            </motion.div>
          </div>
        </div>
      );
    case 'cover':
      return (
        <div className="text-center max-w-4xl space-y-6 md:space-y-8 py-8 px-6 overflow-y-auto max-h-full">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <div className="inline-block p-3 md:p-4 rounded-2xl mb-6 shadow-2xl" style={{ background: `linear-gradient(to bottom right, ${theme.primary}, #fff)` }}><GraduationCap className="w-10 h-10 md:w-16 md:h-16 text-black" /></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1] mb-6 uppercase">
              {slide.title.split(':').map((part: string, i: number) => (<span key={i} style={{ color: i === 1 ? theme.primary : 'white' }} className={i === 1 ? "block mt-1" : ""}>{part}</span>))}
            </h1>
            <div className="h-1 w-20 md:w-24 mx-auto mb-8 rounded-full" style={{ backgroundColor: theme.primary }} />
            <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light max-w-2xl mx-auto italic leading-relaxed">{slide.subtitle}</p>
          </motion.div>
        </div>
      );
    case 'section':
      return (
        <div className="text-center space-y-6 max-w-4xl">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 border rounded-full mx-auto flex items-center justify-center mb-4" style={{ borderColor: `${theme.primary}20` }}><Icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: theme.primary }} /></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter italic leading-tight">{slide.title}</h2>
          <p className="text-base md:text-xl lg:text-2xl font-light max-w-3xl mx-auto" style={{ color: theme.primary }}>{slide.subtitle}</p>
        </div>
      );
    default:
      return (
        <div className="w-full max-w-4xl lg:max-w-5xl flex flex-col items-center justify-center max-h-full overflow-hidden">
          <div className="w-full space-y-4 md:space-y-6 bg-white/5 backdrop-blur-3xl p-6 md:p-10 lg:p-12 rounded-3xl md:rounded-[40px] border shadow-2xl relative flex flex-col overflow-hidden" style={{ borderColor: `${theme.primary}20` }}>
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none"><Icon className="w-32 h-32 md:w-40 md:h-40 text-white" /></div>
            <div className="shrink-0 md:text-left text-center">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="h-px w-8 md:w-10" style={{ backgroundColor: theme.primary }} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]" style={{ color: theme.primary }}>{slide.category}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter uppercase mb-4 md:mb-6">{slide.title}</h2>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 md:pr-4 custom-scrollbar space-y-6 md:space-y-8 min-h-0">
              {slide.theory && <div className="p-5 md:p-6 border-l-4 rounded-r-2xl shrink-0" style={{ backgroundColor: `${theme.primary}10`, borderColor: theme.primary }}><p className="text-base md:text-xl lg:text-2xl font-medium leading-relaxed italic" style={{ color: theme.primary }}>{slide.theory}</p></div>}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
                <ul className="space-y-4 md:space-y-5">
                  {slide.content?.map((item: string, i: number) => (
                    <li key={i} className="flex gap-4 md:gap-6 text-sm md:text-lg lg:text-xl text-gray-300 items-start">
                      <div className="mt-2 md:mt-2.5 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full shrink-0 shadow-lg" style={{ backgroundColor: theme.primary }} />
                      <span className="leading-snug" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
                {slide.mediaUrl && (
                  <div className="hidden lg:block w-48 h-48 xl:w-56 xl:h-56 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group shrink-0">
                    {isVideo ? <video src={slide.mediaUrl} autoPlay muted loop className="w-full h-full object-cover" /> : <img src={slide.mediaUrl} className="w-full h-full object-cover" alt="" />}
                  </div>
                )}
              </div>
              {slide.justification && (
                <div className="p-6 md:p-8 bg-black/40 border rounded-[32px] shrink-0 mt-4 md:mt-8 shadow-2xl" style={{ borderColor: `${theme.primary}20` }}>
                  <div className="flex items-center gap-4 mb-4"><Lightbulb className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.primary }} /><span className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs" style={{ color: theme.primary }}>Justificação</span></div>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg lg:text-xl font-light italic">"{slide.justification}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );

    case 'matrix':
      return (
        <div className="w-full max-w-5xl space-y-8 md:space-y-12 py-4 overflow-y-auto max-h-full px-4">
          <div className="text-center space-y-2">
             <span className="font-black uppercase tracking-[0.5em] text-[10px]" style={{ color: theme.primary }}>Síntese de Investigação</span>
             <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">{slide.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[
              { title: 'Âmbito Internacional', content: slide.content?.[0], icon: Globe2, themeColor: '#00D2FF' },
              { title: 'Âmbito Nacional', content: slide.content?.[1], icon: BarChart3, themeColor: '#D32F2F' }
            ].map((box, i) => (
              <motion.div 
                key={i}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[40px] border border-white/10 hover:border-opacity-50 transition-all group"
                style={{ borderColor: `${box.themeColor}40` }}
              >
                <box.icon className="w-10 h-10 mb-6" style={{ color: box.themeColor }} />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{box.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed italic">{box.content?.split(':')[1]}</p>
                <div className="mt-8 h-1 w-16" style={{ backgroundColor: box.themeColor }} />
              </motion.div>
            ))}
          </div>
        </div>
      );

    case 'closing':
      return (
        <div className="text-center space-y-12 relative py-8 overflow-hidden px-6">
          <motion.h2 
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-6xl md:text-[12rem] font-black text-white/5 uppercase leading-none absolute inset-0 flex items-center justify-center pointer-events-none tracking-tighter"
          >
            SENSORIAL
          </motion.h2>
          <div className="relative z-10 space-y-8">
            <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none" style={{ color: theme.primary }}>Obrigado!</h2>
            <h3 className="text-2xl md:text-4xl font-light text-white max-w-4xl mx-auto leading-tight italic">
              {slide.subtitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              {slide.content?.map((item: any, i: number) => (
                <span key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primary }} /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
  }
}

function getIcon(title: string) {
  const t = title.toUpperCase();
  if (t.includes('VISÃO')) return Eye;
  if (t.includes('AUDIÇÃO')) return Volume2;
  if (t.includes('OLFACTO')) return Wind;
  if (t.includes('TACTO')) return Hand;
  if (t.includes('PALADAR')) return Utensils;
  if (t.includes('Metodologia')) return BookOpen;
  if (t.includes('Objectivos')) return Target;
  if (t.includes('Ética')) return ShieldCheck;
  if (t.includes('Processo')) return Zap;
  return Lightbulb;
}