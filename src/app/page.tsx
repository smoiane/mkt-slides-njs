'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, GraduationCap, BarChart3, 
  Globe2, Lightbulb, Eye, Volume2, Wind, Hand, Utensils,
  BookOpen, ShieldCheck, Target, Zap
} from 'lucide-react';
import { slides, SlideData } from '../data/slides';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    if (currentSlide + newDirection >= 0 && currentSlide + newDirection < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(prev => prev + newDirection);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const slide = slides[currentSlide];

  // System for dynamic colors based on the sense or category
  const getTheme = () => {
    const title = slide.title.toUpperCase();
    const category = slide.category?.toUpperCase() || '';
    
    if (title.includes('VISÃO') || category.includes('VISÃO')) return {
      primary: '#00D2FF', // Azul Tiffany/Tecnológico
      glow: 'rgba(0, 210, 255, 0.15)',
      bg: 'bg-[#000d12]'
    };
    if (title.includes('AUDIÇÃO') || category.includes('AUDIÇÃO')) return {
      primary: '#FFB300', // Dourado Quente/Som
      glow: 'rgba(255, 179, 0, 0.15)',
      bg: 'bg-[#0d0a00]'
    };
    if (title.includes('OLFACTO') || category.includes('OLFACTO')) return {
      primary: '#4CAF50', // Verde Esmeralda/Orgânico
      glow: 'rgba(76, 175, 80, 0.15)',
      bg: 'bg-[#050d06]'
    };
    if (title.includes('TACTO') || category.includes('TACTO')) return {
      primary: '#E0E0E0', // Prata/Frio
      glow: 'rgba(224, 224, 224, 0.15)',
      bg: 'bg-[#121212]'
    };
    if (title.includes('PALADAR') || category.includes('PALADAR')) return {
      primary: '#FF1744', // Vermelho Paixão/Fome
      glow: 'rgba(255, 23, 68, 0.15)',
      bg: 'bg-[#120002]'
    };
    
    return {
      primary: '#C5A059', // Dourado Padrão
      glow: 'rgba(197, 160, 89, 0.15)',
      bg: 'bg-zinc-950'
    };
  };

  const theme = getTheme();

  return (
    <main className={`h-screen w-full ${theme.bg} transition-colors duration-1000 overflow-hidden flex flex-col relative text-white selection:bg-brand-gold selection:text-black`}>
      {/* Cinematic Background Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Dynamic Decorative Orbs */}
      <motion.div 
        animate={{ backgroundColor: theme.glow }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] transition-colors duration-1000" 
      />
      <motion.div 
        animate={{ backgroundColor: theme.glow }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] transition-colors duration-1000 opacity-50" 
      />

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 z-50">
        <motion.div 
          className="h-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%`, backgroundColor: theme.primary }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Navigation Controls - Compact Bottom Right */}
      <div className="absolute bottom-6 right-10 flex items-center gap-3 z-50 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10 shadow-2xl">
        <button 
          onClick={() => paginate(-1)}
          className={`p-1.5 rounded-lg hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: theme.primary }} />
        </button>
        
        <div className="flex items-center gap-2 px-3 border-x border-white/10 mx-1">
          <span className="text-[11px] font-black tracking-tighter" style={{ color: theme.primary }}>
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-white/20">/</span>
          <span className="text-[11px] font-bold text-white/40 tracking-tighter">
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        <button 
          onClick={() => paginate(1)}
          className={`p-1.5 rounded-lg hover:bg-white/10 transition-all ${currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-5 h-5" style={{ color: theme.primary }} />
        </button>
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full flex items-center justify-center p-4 md:p-12 min-h-0"
        >
          <div className="w-full h-full max-h-full flex items-center justify-center overflow-hidden">
            {renderSlide(slide, theme)}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Branding */}
      <div className="absolute bottom-6 left-10 text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold hidden md:block">
        Marketing Sensorial <span className="mx-2" style={{ color: theme.primary }}>|</span> Mozambique 2026
      </div>
    </main>
  );
}

function renderSlide(slide: SlideData, theme: any) {
  const Icon = getIcon(slide.title);

  switch (slide.type) {
    case 'media':
      return (
        <div className="w-full h-full relative flex items-center justify-center p-0 overflow-hidden rounded-[40px] border shadow-2xl bg-zinc-900 group" style={{ borderColor: `${theme.primary}20` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-10">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 opacity-40"
            >
               <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${theme.primary}20, transparent)` }}>
                  <Icon className="w-64 h-64 text-white opacity-5" />
               </div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-30 space-y-6"
            >
              <div className="inline-block px-6 py-2 rounded-full text-black text-xs font-black uppercase tracking-[0.4em] mb-4 shadow-2xl" style={{ backgroundColor: theme.primary }}>
                Ilustração Imersiva
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none shadow-black drop-shadow-2xl">
                {slide.title}
              </h2>
              <div className="h-1 w-20 mx-auto my-8 rounded-full" style={{ backgroundColor: `${theme.primary}40` }} />
              <p className="text-2xl md:text-3xl font-light italic max-w-4xl mx-auto drop-shadow-lg" style={{ color: theme.primary }}>
                {slide.imageAlt}
              </p>
            </motion.div>
          </div>
          <div className="absolute top-10 left-10 z-30 flex items-center gap-4 opacity-50">
             <div className="h-px w-10 bg-white" />
             <span className="text-[10px] font-bold text-white uppercase tracking-widest">{slide.category}</span>
          </div>
        </div>
      );

    case 'cover':
      return (
        <div className="text-center max-w-6xl space-y-8 relative overflow-y-auto max-h-full py-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block p-3 rounded-2xl mb-6 shadow-2xl" style={{ background: `linear-gradient(to bottom right, ${theme.primary}, #fff)` }}>
              <GraduationCap className="w-12 h-12 text-black" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-6 uppercase">
              {slide.title.split(':').map((part, i) => (
                <span key={i} style={{ color: i === 1 ? theme.primary : 'white' }} className={i === 1 ? "block mt-2" : ""}>{part}</span>
              ))}
            </h1>
            <div className="h-1 w-24 mx-auto mb-8 rounded-full" style={{ backgroundColor: theme.primary }} />
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed italic">
              {slide.subtitle}
            </p>
          </motion.div>
        </div>
      );

    case 'section':
      return (
        <div className="text-center space-y-6 py-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-white/5 backdrop-blur-xl border rounded-full mx-auto flex items-center justify-center mb-4"
            style={{ borderColor: `${theme.primary}20` }}
          >
            <Icon className="w-10 h-10" style={{ color: theme.primary }} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">
            {slide.title}
          </h2>
          <p className="text-xl md:text-3xl font-light max-w-4xl mx-auto" style={{ color: theme.primary }}>
            {slide.subtitle}
          </p>
        </div>
      );

    case 'content':
      return (
        <div className="w-full max-w-5xl flex flex-col items-center justify-center max-h-full overflow-hidden">
          <div className="w-full space-y-6 bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[40px] border shadow-2xl relative flex flex-col overflow-hidden" style={{ borderColor: `${theme.primary}20` }}>
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <Icon className="w-48 h-48 text-white" />
            </div>
            <div className="shrink-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: theme.primary }} />
                <span className="text-xs font-black uppercase tracking-[0.5em]" style={{ color: theme.primary }}>
                  {slide.category}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-8">{slide.title}</h2>
            </div>
            <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-8">
              {slide.theory && (
                <div className="p-8 border-l-4 rounded-r-2xl shrink-0" style={{ backgroundColor: `${theme.primary}10`, borderColor: theme.primary }}>
                  <p className="text-2xl font-medium leading-relaxed italic" style={{ color: theme.primary }}>
                    {slide.theory}
                  </p>
                </div>
              )}
              <ul className="space-y-6 max-w-4xl">
                {slide.content?.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex gap-6 text-xl md:text-2xl text-gray-300 items-start group"
                  >
                    <div className="mt-3 w-2 h-2 rounded-full group-hover:scale-150 transition-transform shrink-0" style={{ backgroundColor: theme.primary, boxShadow: `0 0 15px ${theme.primary}CC` }} />
                    <span className="leading-snug" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }} />
                  </motion.li>
                ))}
              </ul>
              {slide.justification && (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="p-10 bg-white/5 border rounded-[32px] shrink-0 mt-12"
                  style={{ borderColor: `${theme.primary}20` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Lightbulb className="w-8 h-8" style={{ color: theme.primary }} />
                    <span className="font-black uppercase tracking-[0.3em] text-xs" style={{ color: theme.primary }}>Análise Estratégica / Justificação</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl md:text-2xl font-light italic">"{slide.justification}"</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      );

    case 'matrix':
      return (
        <div className="w-full max-w-7xl space-y-8 md:space-y-12 py-4 overflow-y-auto max-h-full">
          <div className="text-center space-y-2">
             <span className="font-black uppercase tracking-[0.5em] text-[10px]" style={{ color: theme.primary }}>Síntese de Investigação</span>
             <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter italic">{slide.title}</h2>
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
        <div className="text-center space-y-12 relative py-8 overflow-hidden">
          <motion.h2 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-[10rem] md:text-[15rem] font-black text-white/5 uppercase leading-none absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            SENSORIAL
          </motion.h2>
          <div className="relative z-10 space-y-8">
            <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase" style={{ color: theme.primary }}>Obrigado!</h2>
            <h3 className="text-2xl md:text-4xl font-light text-white max-w-4xl mx-auto leading-tight italic">
              {slide.subtitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
              {slide.content?.map((item, i) => (
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