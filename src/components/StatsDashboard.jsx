import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Gauge, Thermometer, Wind } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, unit, color }) => (
  <div className="glass p-6 border-l-4" style={{ borderColor: color }}>
    <div className="flex items-center justify-between mb-4">
      <Icon size={24} style={{ color }} />
      <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Live Telemetry</span>
    </div>
    <div className="flex flex-col">
      <span className="text-3xl font-black">{value}<span className="text-sm font-normal text-slate-500 ml-1">{unit}</span></span>
      <span className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">{label}</span>
    </div>
    <div className="mt-4 h-1 w-full bg-white/5 overflow-hidden">
      <motion.div 
        className="h-full" 
        style={{ backgroundColor: color }}
        initial={{ width: '0%' }}
        whileInView={{ width: '70%' }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </div>
  </div>
);

const StatsDashboard = () => {
  return (
    <section id="dashboard" className="py-24 bg-[#080808]">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl font-black uppercase italic mb-4 tracking-tight">
            PTTS <span className="text-orange-500">Live Insights</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500" />
          <p className="text-slate-400 mt-6 max-w-2xl">
            Real-time monitoring of critical transmission components. Our IoT suite provides proactive alerts to prevent downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Activity} label="Vibration Level" value="2.4" unit="mm/s" color="#F97316" />
          <StatCard icon={Gauge} label="Rotational Speed" value="1440" unit="RPM" color="#00D4FF" />
          <StatCard icon={Thermometer} label="Bearing Temp" value="64.2" unit="°C" color="#EF4444" />
          <StatCard icon={Wind} label="Lubrication Flow" value="12.8" unit="L/min" color="#10B981" />
        </div>

        {/* Dashboard Visualization Mockup */}
        <div className="mt-12 glass p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent pointer-events-none" />
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4 group-hover:scale-110 transition-transform">
                    <Activity className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics Engine</h3>
                <p className="text-slate-400 text-sm max-w-md">Our predictive maintenance AI analyzes spectral data patterns to identify bearing failures before they occur.</p>
                <button className="mt-8 text-xs font-bold tracking-[0.2em] uppercase text-orange-500 border-b border-orange-500/30 pb-1 hover:border-orange-500 transition-all">
                    Launch Enterprise Dashboard
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
