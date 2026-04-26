"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Zap, 
  Clock, 
  TrendingUp, 
  CheckCircle2,
  Hammer,
  ShoppingBasket,
  Gem,
  ExternalLink,
  MapPin,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * VN BRIGADE - THE GOD TIER FINAL RELEASE (PROFILE ID UPDATE)
 * Target: quel.ly.775790
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UPDATED: Precise Messenger Routing via Profile ID
  const MESSENGER_URL = "https://m.me/quel.ly.775790";

  const handleMessenger = () => {
    window.open(MESSENGER_URL, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#FF9F59]/30 selection:text-[#FF9F59] overflow-x-hidden scroll-smooth">
      
      {/* 1. KINETIC PROGRESS TRACKER */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#FF9F59] origin-left z-[70]" style={{ scaleX }} />

      {/* 2. RESPONSIVE FLOATING NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-4 md:px-6 ${isScrolled ? 'py-3' : 'py-6 md:py-10'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 py-3 md:py-4 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-2xl rounded-full shadow-lg border border-slate-100' : 'bg-transparent'}`}>
          <div 
            className="flex items-center gap-3 md:gap-5 group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <img 
              src="/vnblogo.png" 
              alt="VN BRIGADE" 
              className={`transition-all duration-500 object-contain ${isScrolled ? 'h-8 md:h-12' : 'h-16 md:h-28'}`} 
            />
            <div className={`font-black tracking-tighter text-[#FF9F59] transition-all duration-500 ${isScrolled ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl uppercase'}`}>
              VN BRIGADE
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-10 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
            <a href="#construction" className="hover:text-[#FF9F59] transition-all">Construction</a>
            <a href="#grocery" className="hover:text-[#FF9F59] transition-all">Grocery</a>
            <a href="#retail" className="hover:text-[#FF9F59] transition-all">Retail</a>
          </div>
          
          <button 
            onClick={handleMessenger}
            className="text-[9px] md:text-[10px] font-black bg-slate-900 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-[#FF9F59] transition-all shadow-xl uppercase tracking-widest"
          >
            Quote
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative px-6 md:px-20 pt-40 md:pt-64 pb-20 md:pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] aspect-square bg-[#FF9F59]/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="flex-1 space-y-8 md:space-y-10 text-center lg:text-left z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white text-[#FF9F59] text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] border border-slate-100 shadow-sm"
          >
            <MapPin size={12} /> Nationwide PH Deployment
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black leading-[0.9] lg:leading-[0.85] tracking-[-0.05em] text-slate-900">
            Build. <br className="hidden lg:block"/>
            <span className="text-[#FF9F59]">Nation.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            The elite standard in <span className="text-slate-900 font-bold underline decoration-[#FF9F59] decoration-4 underline-offset-4">Build Now Pay Later</span> construction.
          </p>

          <div className="flex flex-col items-center lg:items-start gap-6">
            <motion.button 
              onClick={handleMessenger}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden bg-[#FF9F59] text-white px-10 md:px-14 py-6 md:py-8 rounded-[2rem] font-black text-lg md:text-2xl flex items-center justify-center gap-4 shadow-2xl transition-all group w-full sm:w-auto"
            >
              <motion.div 
                animate={{ x: ["-150%", "150%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 0.5 }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-30deg]"
              />
              <span className="relative z-10 uppercase">Start Your Build</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
              <MessageCircle size={14} className="text-[#FF9F59]" /> Message to Begin
            </p>
          </div>
        </div>

        {/* IMAGE CANVAS */}
        <div className="flex-1 w-full max-w-[550px] relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <img 
              src="/dashboard photo.png" 
              alt="VN BRIGADE Projects" 
              className="w-full h-auto rounded-[3rem] md:rounded-[5rem] shadow-2xl border-[8px] md:border-[14px] border-white" 
            />
            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-slate-900 p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl flex items-center gap-3 md:gap-4 text-white border border-white/5"
            >
              <div className="bg-[#FF9F59] p-2 md:p-3 rounded-xl md:rounded-2xl text-white shadow-lg">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-black text-base md:text-xl tracking-tighter leading-none italic">Latest Projects</p>
                <p className="text-[7px] md:text-[8px] text-white/40 font-bold uppercase tracking-[0.3em] mt-1">Nationwide PH</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. BENTO GRID */}
      <section className="bg-white py-24 md:py-40 px-6 md:px-20 relative border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-28">
            <h2 className="text-4xl md:text-7xl lg:text-[8rem] font-black tracking-tighter uppercase leading-none text-slate-900">
              One Brand. <br/>
              <span className="text-[#FF9F59]">Unlimited Solutions.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            {/* Construction */}
            <motion.div id="construction" className="md:col-span-12 lg:col-span-8 bg-[#F8F9FB] p-8 md:p-16 rounded-[3rem] md:rounded-[5rem] flex flex-col justify-between border border-slate-50 group scroll-mt-32">
              <div className="space-y-8 md:space-y-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#FF9F59] group-hover:bg-[#FF9F59] group-hover:text-white transition-all duration-300">
                  <Hammer className="w-7 h-7 md:w-9 md:h-9" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">Construction</h3>
                <p className="text-base md:text-xl text-slate-500 max-w-md font-medium leading-relaxed">
                  Vietnam architectural precision with PH local expertise. Specialized nationwide development.
                </p>
              </div>
              <div onClick={handleMessenger} className="pt-10 flex items-center gap-3 text-[#FF9F59] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] cursor-pointer group/link">
                Inquire Project <ChevronRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Grocery */}
            <motion.div id="grocery" className="md:col-span-6 lg:col-span-4 bg-slate-900 p-8 md:p-16 rounded-[3rem] md:rounded-[5rem] flex flex-col justify-between text-white group scroll-mt-32 overflow-hidden relative shadow-2xl">
              <div className="space-y-8">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-[#FF9F59] backdrop-blur-md">
                  <ShoppingBasket className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">VNB Grocery</h3>
                <p className="text-slate-400 text-sm md:text-base font-medium">Daily essentials at your doorstep. High-speed nationwide logistics.</p>
              </div>
              <a href="https://vnb-grocery.web.app" target="_blank" className="pt-10 text-[#FF9F59] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group/link">
                Launch App <ExternalLink size={14} className="group-hover/link:rotate-12 transition-transform" />
              </a>
            </motion.div>

            {/* Retail */}
            <motion.div id="retail" className="md:col-span-6 lg:col-span-12 bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[5rem] flex flex-col lg:flex-row items-center justify-between border border-slate-100 group scroll-mt-32 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 text-center lg:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF9F59]/5 rounded-2xl flex items-center justify-center text-[#FF9F59]">
                  <Gem className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none">Retail Selling</h3>
                  <p className="text-slate-500 max-w-lg font-medium text-sm md:text-base">Vietnam branded jewelry, luxury watches, and furniture delivered nationwide.</p>
                </div>
              </div>
              <a href="https://www.facebook.com/profile.php?id=61557997408908" target="_blank" className="mt-8 lg:mt-0 bg-slate-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#FF9F59] transition-all text-center shadow-xl">
                Shop Facebook
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-white py-20 px-8 text-center border-t border-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
           <img src="/vnblogo.png" alt="VN BRIGADE" className="h-12 md:h-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
           <div className="flex flex-wrap justify-center gap-8 text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
             <span>Nationwide PH</span>
             <span>© 2026 VN BRIGADE</span>
           </div>
        </div>
      </footer>
    </main>
  );
}