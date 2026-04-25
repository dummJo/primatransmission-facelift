import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center bg-crimson overflow-hidden pt-20">
      {/* Diagonal Pattern Overlay */}
      <div className="absolute inset-0 diagonal-pattern opacity-20" />
      
      {/* Decorative Large Text Background */}
      <div className="absolute -bottom-10 -right-20 text-[20rem] font-black text-black/5 select-none pointer-events-none">
        PRIMA
      </div>

      <div className="container relative z-10 py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-white" />
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/80">
                Engineering Excellence Since 1998
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10 text-white tracking-tight">
              INDUSTRIAL <br />
              RELIABILITY <br />
              <span className="text-black/30">REDEFINED.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed">
              Leading the Indonesian market in mechanical power transmission solutions and AI-driven predictive maintenance.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="bg-black text-white px-10 py-5 font-black text-[13px] tracking-[0.2em] flex items-center gap-3 hover:bg-neutral-900 transition-all group">
                EXPLORE SOLUTIONS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-crimson" />
              </button>
              <button className="border-2 border-white text-white px-10 py-5 font-black text-[13px] tracking-[0.2em] flex items-center gap-3 hover:bg-white hover:text-crimson transition-all">
                VIEW CASE STUDIES <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Metadata */}
      <div className="absolute right-12 bottom-12 hidden xl:flex flex-col gap-8 text-white/40">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black uppercase tracking-widest">Global Standards</span>
          <span className="text-xs font-mono">ISO 1940 / GRADE G1.0</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black uppercase tracking-widest">Active Monitoring</span>
          <span className="text-xs font-mono">5,000+ SENSORS LIVE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
