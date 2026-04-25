import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 bg-orange-500/10 border border-orange-500/50 text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Industrial Excellence Since 1998
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 italic uppercase tracking-tighter">
              Power <br />
              <span className="text-orange-500">Transmission</span> <br />
              Redefined.
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl">
              Precision mechanical solutions and IoT-driven reliability engineering for the next generation of industrial performance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold rounded-none hover:bg-orange-600 transition-all transform skew-x-[-12deg]">
                <span className="block skew-x-[12deg] flex items-center gap-2">
                  EXPLORE SOLUTIONS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold rounded-none hover:bg-white/10 transition-all transform skew-x-[-12deg]">
                <span className="block skew-x-[12deg]">
                  VIEW DASHBOARD
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex flex-col items-end gap-2 opacity-30">
          <div className="w-40 h-[1px] bg-white" />
          <span className="text-[10px] tracking-[0.5em] uppercase">Prima Transmission Systems</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
