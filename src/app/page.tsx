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

  const slide = slides[currentSlide];

  const getTheme = () => {
    const title = slide.title.toUpperCase();
    const category = slide.category?.toUpperCase() || '';
    if (title.includes('VISÃO') || category.includes('VISÃO')) return { primary: '#00D2FF', glow: 'rgba(0, 210, 255, 0.15)', bg: 'bg-[#000d12]' };
    if (title.includes('AUDIÇÃO') || category.includes('AUDIÇÃO')) return { primary: '#FFB300', glow: 'rgba(255, 179, 0, 0.15)', bg: 'bg-[#0d0a00]' };
    if (title.includes('OLFACTO') || category.includes('OLFACTO')) return { primary: '#4CAF50', glow: 'rgba(76, 175, 80, 0.15)', bg: 'bg-[#050d06]' };
    if (title.includes('TACTO') || category.includes('TACTO')) return { primary: '#E0E0E0', glow: 'rgba(224, 224, 224, 0.15)', bg: 'bg-[#121212]' };
    if (title.includes('PALADAR') || category.includes('PALADAR')) return { primary: '#FF1744', glow: 'rgba(255, 23, 68, 0.15)', bg: 'bg-[#120002]' };
    return { primary: '#C5A059', glow: 'rgba(197, 160, 89, 0.15)', bg: 'bg-zinc-950' };
  };

  const theme = getTheme();

  return (
    <main className={`h-screen w-full ${theme.bg} transition-colors duration-1000 overflow-hidden flex flex-col relative text-white selection:bg-brand-gold selection:text-black`}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <motion.div animate={{ backgroundColor: theme.glow, opacity: isFocused ? 0 : 1 }} className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] md:blur-[150px] transition-all duration-1000" />
      <motion.div animate={{ backgroundColor: theme.glow, opacity: isFocused ? 0 : 0.5 }} className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] md:blur-[150px] transition-all duration-1000" />

      <motion.div animate={{ opacity: isFocused ? 0 : 1 }} className="absolute top-0 left-0 w-full h-1 bg-white/5 z-[60]">
        <motion.div className="h-full shadow-[0_0_20px_rgba(255,255,255,0.3)]" initial={{ width: 0 }} animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%`, backgroundColor: theme.primary }} transition={{ duration: 0.5 }} />
      </motion.div>

      {/* Navigation Controls - Fixed Z-index and Safe Area */}
      <motion.div 
        animate={{ opacity: isFocused ? 0 : 1, y: isFocused ? 50 : 0 }} 
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-3 z-[100] bg-black/80 backdrop-blur-2xl px-4 py-2 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      >
        <button onClick={() => paginate(-1)} className={`p-2 rounded-xl hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 active:scale-90'}`} disabled={currentSlide === 0}>
          <ChevronLeft className="w-6 h-6" style={{ color: theme.primary }} />
        </button>
        <div className="flex items-center gap-1 px-3 border-x border-white/10 mx-1 min-w-[60px] justify-center">
          <span className="text-[12px] font-black tracking-tighter" style={{ color: theme.primary }}>{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-[10px] text-white/20">/</span>
          <span className="text-[12px] font-bold text-white/40 tracking-tighter">{String(slides.length).padStart(2, '0')}</span>
        </div>
        <button onClick={() => paginate(1)} className={`p-2 rounded-xl hover:bg-white/10 transition-all ${currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 active:scale-90'}`} disabled={currentSlide === slides.length - 1}>
          <ChevronRight className="w-6 h-6" style={{ color: theme.primary }} />
        </button>
      </motion.div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div 
          key={currentSlide} 
          custom={direction} 
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            if (swipe < -50) paginate(1);
            else if (swipe > 50) paginate(-1);
          }}
          className="flex-1 w-full flex items-center justify-center p-4 md:p-12 min-h-0 z-10"
        >
          <div className="w-full h-full max-h-full flex items-center justify-center overflow-hidden">
            {renderSlide(slide, theme, isFocused, setIsFocused)}
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div animate={{ opacity: isFocused ? 0 : 1 }} className="absolute bottom-6 left-10 text-[10px] uppercase tracking-[0.3em] text-white/10 font-bold hidden md:block">
        Marketing Sensorial <span className="mx-2" style={{ color: theme.primary }}>|</span> Mozambique 2026
      </motion.div>
    </main>
  );
}

function renderSlide(slide: SlideData, theme: any, isFocused: boolean, setIsFocused: (v: boolean) => void) {
  const Icon = getIcon(slide.title);
  const isVideo = slide.mediaUrl?.toLowerCase().endsWith('.mp4');

  switch (slide.type) {
    case 'media':
      return (
        <div className={`w-full h-full relative flex items-center justify-center p-0 overflow-hidden rounded-2xl md:rounded-[40px] border shadow-2xl bg-black group transition-all duration-700 ${isFocused ? 'border-transparent rounded-none' : ''}`} style={{ borderColor: isFocused ? 'transparent' : `${theme.primary}20` }}>
          <motion.div animate={{ opacity: isFocused ? 0 : 1 }} className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-20 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <motion.div animate={{ scale: isFocused ? 1 : 1.05, opacity: isFocused ? 1 : 0.6 }} transition={{ duration: 0.8 }} className="absolute inset-0">
               {slide.mediaUrl ? (
                 isVideo ? (
                   <video src={slide.mediaUrl} autoPlay muted={!isFocused} loop={!isFocused} playsInline className="w-full h-full object-cover md:object-contain pointer-events-none" />
                 ) : (
                   <img src={slide.mediaUrl} alt={slide.imageAlt} className="w-full h-full object-cover md:object-contain pointer-events-none" />
                 )
               ) : (
                 <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${theme.primary}20, transparent)` }}>
                    <Icon className="w-32 h-32 md:w-64 md:h-64 text-white opacity-5" />
                 </div>
               )}
            </motion.div>
            
            {isVideo && !isFocused && (
              <button onClick={(e) => { e.stopPropagation(); setIsFocused(true); }} className="absolute inset-0 w-full h-full z-40 flex items-center justify-center group/btn">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                   <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                </motion.div>
              </button>
            )}

            {isFocused && (
              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={(e) => { e.stopPropagation(); setIsFocused(false); }} className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white shadow-2xl">
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </motion.button>
            )}
            
            <motion.div animate={{ y: isFocused ? 100 : 0, opacity: isFocused ? 0 : 1 }} className="relative z-30 space-y-4 md:space-y-6 px-6 md:px-12 pointer-events-none">
              <div className="inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-full text-black text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-2 shadow-2xl" style={{ backgroundColor: theme.primary }}>Ilustração</div>
              <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight shadow-black drop-shadow-2xl">{slide.title}</h2>
              <p className="text-lg md:text-3xl font-light italic max-w-4xl mx-auto drop-shadow-lg" style={{ color: theme.primary }}>{slide.imageAlt}</p>
            </motion.div>
          </div>
        </div>
      );

    case 'cover':
      return (
        <div className="text-center max-w-6xl space-y-6 md:space-y-8 relative overflow-y-auto max-h-full py-8 px-6">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <div className="inline-block p-3 md:p-4 rounded-2xl mb-6 shadow-2xl" style={{ background: `linear-gradient(to bottom right, ${theme.primary}, #fff)` }}>
              <GraduationCap className="w-10 h-10 md:w-16 md:h-16 text-black" />
            </div>
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.95] mb-6 uppercase">
              {slide.title.split(':').map((part, i) => (
                <span key={i} style={{ color: i === 1 ? theme.primary : 'white' }} className={i === 1 ? "block mt-2" : ""}>{part}</span>
              ))}
            </h1>
            <div className="h-1 w-20 md:w-32 mx-auto mb-8 rounded-full" style={{ backgroundColor: theme.primary }} />
            <p className="text-lg md:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed italic">{slide.subtitle}</p>
          </motion.div>
        </div>
      );

    case 'section':
      return (
        <div className="text-center space-y-6 py-8 px-6">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-20 h-20 md:w-32 md:h-32 bg-white/5 backdrop-blur-xl border rounded-full mx-auto flex items-center justify-center mb-4" style={{ borderColor: `${theme.primary}20` }}>
            <Icon className="w-10 h-10 md:w-16 md:h-16" style={{ color: theme.primary }} />
          </motion.div>
          <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-tight">{slide.title}</h2>
          <p className="text-lg md:text-4xl font-light max-w-4xl mx-auto" style={{ color: theme.primary }}>{slide.subtitle}</p>
        </div>
      );

    case 'content':
      return (
        <div className="w-full max-w-6xl flex flex-col items-center justify-center max-h-full overflow-hidden px-4 md:px-6">
          <div className="w-full space-y-6 bg-white/5 backdrop-blur-3xl p-6 md:p-14 rounded-3xl md:rounded-[40px] border shadow-2xl relative flex flex-col overflow-hidden" style={{ borderColor: `${theme.primary}20` }}>
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
              <Icon className="w-48 h-48 md:w-64 md:h-64 text-white" />
            </div>
            <div className="shrink-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: theme.primary }} />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em]" style={{ color: theme.primary }}>{slide.category}</span>
              </div>
              <h2 className="text-3xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase mb-6 md:mb-10">{slide.title}</h2>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 md:pr-4 custom-scrollbar space-y-6 md:space-y-10 min-h-0">
              {slide.theory && (
                <div className="p-6 md:p-10 border-l-4 rounded-r-3xl shrink-0" style={{ backgroundColor: `${theme.primary}10`, borderColor: theme.primary }}>
                  <p className="text-xl md:text-3xl font-medium leading-relaxed italic" style={{ color: theme.primary }}>{slide.theory}</p>
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
                <ul className="space-y-6 md:space-y-8">
                  {slide.content?.map((item, i) => (
                    <motion.li key={i} initial={{ x: -20, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + (i * 0.05) }} className="flex gap-4 md:gap-8 text-lg md:text-3xl text-gray-300 items-start group">
                      <div className="mt-2 md:mt-4 w-2 h-2 md:w-3 md:h-3 rounded-full shrink-0 shadow-lg" style={{ backgroundColor: theme.primary }} />
                      <span className="leading-tight md:leading-snug" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }} />
                    </motion.li>
                  ))}
                </ul>
                {slide.mediaUrl && (
                  <div className="hidden lg:block w-80 h-80 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative group shrink-0">
                    {isVideo ? <video src={slide.mediaUrl} autoPlay muted loop className="w-full h-full object-cover" /> : <img src={slide.mediaUrl} className="w-full h-full object-cover" alt="" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
              </div>
              {slide.justification && (
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ opacity: 1, y: 0 }} className="p-8 md:p-12 bg-black/60 border rounded-3xl md:rounded-[50px] shrink-0 mt-8 md:mt-16 shadow-2xl" style={{ borderColor: `${theme.primary}20` }}>
                  <div className="flex items-center gap-4 mb-4 md:mb-8">
                    <Lightbulb className="w-6 h-6 md:w-12 md:h-12" style={{ color: theme.primary }} />
                    <span className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs" style={{ color: theme.primary }}>Justificação Estratégica</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl md:text-4xl font-light italic">"{slide.justification}"</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      );

    case 'matrix':
      return (
        <div className="w-full max-w-7xl space-y-6 md:space-y-16 py-8 overflow-y-auto max-h-full px-6">
          <div className="text-center space-y-2 md:space-y-4">
             <span className="font-black uppercase tracking-[0.5em] text-[10px] md:text-xs" style={{ color: theme.primary }}>Síntese de Investigação</span>
             <h2 className="text-4xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none">{slide.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {[
              { title: 'Internacional', content: slide.content?.[0], icon: Globe2, themeColor: '#00D2FF' },
              { title: 'Nacional', content: slide.content?.[1], icon: BarChart3, themeColor: '#D32F2F' }
            ].map((box, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-3xl p-8 md:p-16 rounded-[40px] md:rounded-[80px] border border-white/10" style={{ borderColor: `${box.themeColor}30` }}>
                <box.icon className="w-10 h-10 md:w-20 md:h-20 mb-6 md:mb-10" style={{ color: box.themeColor }} />
                <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-8 uppercase tracking-tighter">{box.title}</h3>
                <p className="text-lg md:text-3xl text-gray-400 leading-relaxed italic">{box.content?.split(':')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'closing':
      return (
        <div className="text-center space-y-8 md:space-y-20 relative py-8 overflow-hidden px-6">
          <motion.h2 animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ repeat: Infinity, duration: 4 }} className="text-6xl md:text-[20rem] font-black text-white/5 uppercase leading-none absolute inset-0 flex items-center justify-center pointer-events-none tracking-tighter">SENSORIAL</motion.h2>
          <div className="relative z-10 space-y-6 md:space-y-12">
            <h2 className="text-5xl md:text-[12rem] font-black italic tracking-tighter uppercase leading-none" style={{ color: theme.primary }}>Obrigado!</h2>
            <h3 className="text-xl md:text-6xl font-light text-white max-w-5xl mx-auto leading-tight italic">{slide.subtitle}</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-20 text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              {slide.content?.map((item, i) => (
                <span key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: theme.primary }} /> {item}
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