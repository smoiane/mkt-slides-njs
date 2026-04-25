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

  // Dynamic Background Colors based on category or sense
  const getBgClass = () => {
    if (slide.type === 'section' || slide.type === 'cover') return 'bg-zinc-950';
    if (slide.title.includes('VISÃO')) return 'bg-[#00151a]';
    if (slide.title.includes('AUDIÇÃO')) return 'bg-[#1a0f00]';
    if (slide.title.includes('OLFACTO')) return 'bg-[#0f1a00]';
    if (slide.title.includes('TACTO')) return 'bg-[#1a1a1a]';
    if (slide.title.includes('PALADAR')) return 'bg-[#1a0000]';
    return 'bg-zinc-900';
  };

  return (
    <main className={`h-screen w-full ${getBgClass()} transition-colors duration-1000 overflow-hidden flex flex-col relative text-white selection:bg-brand-gold selection:text-black`}>
      {/* Cinematic Background Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-red/5 rounded-full blur-[120px] animate-pulse" />

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-brand-gold to-yellow-200 shadow-[0_0_15px_rgba(197,160,89,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Navigation Controls - Compact Bottom Right */}
      <div className="absolute bottom-6 right-10 flex items-center gap-3 z-50 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10 shadow-2xl">
        <button 
          onClick={() => paginate(-1)}
          className={`p-1.5 rounded-lg hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5 text-brand-gold" />
        </button>
        
        <div className="flex items-center gap-2 px-3 border-x border-white/10 mx-1">
          <span className="text-[11px] font-black text-brand-gold tracking-tighter">
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
          <ChevronRight className="w-5 h-5 text-brand-gold" />
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
            {renderSlide(slide)}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Branding */}
      <div className="absolute bottom-6 left-10 text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold hidden md:block">
        Marketing Sensorial <span className="text-brand-gold mx-2">|</span> Mozambique 2026
      </div>
    </main>
  );
}

function renderSlide(slide: SlideData) {
  const Icon = getIcon(slide.title);

  switch (slide.type) {
    case 'media':
      return (
        <div className="w-full h-full relative flex items-center justify-center p-0 overflow-hidden rounded-[40px] border border-white/10 shadow-2xl bg-zinc-900 group">
          {/* Immersive Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-20" />
          
          {/* Media Content Placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-10">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 opacity-40"
            >
               <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-red/20 flex items-center justify-center">
                  <Icon className="w-64 h-64 text-white opacity-5" />
               </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-30 space-y-6"
            >
              <div className="inline-block px-6 py-2 rounded-full bg-brand-gold text-black text-xs font-black uppercase tracking-[0.4em] mb-4 shadow-[0_0_20px_rgba(197,160,89,0.5)]">
                Ilustração Imersiva
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none shadow-black drop-shadow-2xl">
                {slide.title}
              </h2>
              <div className="h-1 w-20 bg-white/20 mx-auto my-8 rounded-full" />
              <p className="text-2xl md:text-3xl text-brand-gold font-light italic max-w-4xl mx-auto drop-shadow-lg">
                {slide.imageAlt}
              </p>
            </motion.div>
          </div>

          {/* Corner Decorations */}
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
            <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-brand-gold to-yellow-600 mb-6 shadow-2xl">
              <GraduationCap className="w-12 h-12 text-black" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-6 uppercase">
              {slide.title.split(':').map((part, i) => (
                <span key={i} className={i === 1 ? "text-brand-gold block mt-2" : ""}>{part}</span>
              ))}
            </h1>
            <div className="h-1 w-24 bg-brand-gold mx-auto mb-8 rounded-full" />
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
            className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mx-auto flex items-center justify-center mb-4"
          >
            <Icon className="w-10 h-10 text-brand-gold" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">
            {slide.title}
          </h2>
          <p className="text-xl md:text-3xl text-brand-gold font-light max-w-4xl mx-auto">
            {slide.subtitle}
          </p>
        </div>
      );

    case 'content':
      return (
        <div className="w-full max-w-5xl flex flex-col items-center justify-center max-h-full overflow-hidden">
          <div className="w-full space-y-6 bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[40px] border border-white/10 shadow-2xl relative flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <Icon className="w-48 h-48 text-white" />
            </div>
            
            <div className="shrink-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="h-px w-12 bg-brand-gold" />
                <span className="text-brand-gold text-xs font-black uppercase tracking-[0.5em]">
                  {slide.category}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-8">{slide.title}</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-8">
              {slide.theory && (
                <div className="p-8 bg-brand-gold/10 border-l-4 border-brand-gold rounded-r-2xl shrink-0">
                  <p className="text-2xl text-brand-gold font-medium leading-relaxed italic">
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
                    <div className="mt-3 w-2 h-2 rounded-full bg-brand-gold group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(197,160,89,0.8)] shrink-0" />
                    <span className="leading-snug" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }} />
                  </motion.li>
                ))}
              </ul>

              {slide.justification && (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="p-10 bg-white/5 border border-white/10 rounded-[32px] shrink-0 mt-12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Lightbulb className="w-8 h-8 text-brand-gold" />
                    <span className="font-black text-brand-gold uppercase tracking-[0.3em] text-xs">Análise Estratégica / Justificação</span>
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
             <span className="text-brand-gold font-black uppercase tracking-[0.5em] text-[10px]">Síntese de Investigação</span>
             <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter italic">{slide.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[
              { title: 'Âmbito Internacional', content: slide.content?.[0], icon: Globe2, theme: 'gold' },
              { title: 'Âmbito Nacional', content: slide.content?.[1], icon: BarChart3, theme: 'red' }
            ].map((box, i) => (
              <motion.div 
                key={i}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[40px] border border-white/10 hover:border-brand-gold/50 transition-all group"
              >
                <box.icon className={`w-10 h-10 mb-6 ${i === 0 ? 'text-brand-gold' : 'text-brand-red'}`} />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{box.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed italic">{box.content?.split(':')[1]}</p>
                <div className={`mt-8 h-1 w-16 ${i === 0 ? 'bg-brand-gold' : 'bg-brand-red'}`} />
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
            <h2 className="text-7xl md:text-9xl font-black text-brand-gold italic tracking-tighter uppercase">Obrigado!</h2>
            <h3 className="text-2xl md:text-4xl font-light text-white max-w-4xl mx-auto leading-tight italic">
              {slide.subtitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
              {slide.content?.map((item, i) => (
                <span key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
  }
}

function getIcon(title: string) {
  if (title.includes('VISÃO')) return Eye;
  if (title.includes('AUDIÇÃO')) return Volume2;
  if (title.includes('OLFACTO')) return Wind;
  if (title.includes('TACTO')) return Hand;
  if (title.includes('PALADAR')) return Utensils;
  if (title.includes('Metodologia')) return BookOpen;
  if (title.includes('Objectivos')) return Target;
  if (title.includes('Ética')) return ShieldCheck;
  if (title.includes('Processo')) return Zap;
  return Lightbulb;
}