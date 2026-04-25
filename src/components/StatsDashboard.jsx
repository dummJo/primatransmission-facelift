import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Gauge, Thermometer, Wind, Plus } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, unit, color }) => (
  <div className="bg-white border border-gray-200 p-8 hover:border-crimson transition-all group">
    <div className="flex items-center justify-between mb-6">
      <div className="bg-gray-50 p-3 group-hover:bg-crimson/5 transition-colors">
        <Icon size={24} className="text-crimson" />
      </div>
      <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Live Sensor</span>
    </div>
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black tracking-tight">{value}</span>
        <span className="text-xs font-bold text-gray-400 uppercase">{unit}</span>
      </div>
      <span className="text-[11px] font-bold text-gray-500 mt-2 uppercase tracking-wider">{label}</span>
    </div>
    <div className="mt-8 h-[2px] w-full bg-gray-100 overflow-hidden">
      <motion.div 
        className="h-full bg-crimson" 
        initial={{ width: '0%' }}
        whileInView={{ width: '70%' }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </div>
  </div>
);

const StatsDashboard = () => {
  return (
    <section id="dashboard" className="py-24 bg-[#F3F4F6] diagonal-pattern-dark">
      <div className="container">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-8 h-[2px] bg-crimson" />
               <span className="text-[11px] font-black tracking-[0.3em] uppercase text-crimson">Operations Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight">
              Real-time <span className="text-gray-400">Telemetry</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our IoT ecosystem tracks over 50 parameters across your transmission chain, providing the data needed for sub-micron precision adjustments.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest border-b-2 border-crimson pb-1 hover:text-crimson transition-all">
            OPEN COMMAND CENTER <Plus size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          <StatCard icon={Activity} label="Vibration Level" value="2.14" unit="mm/s" color="#B91C1C" />
          <StatCard icon={Gauge} label="Rotational Speed" value="1,440" unit="RPM" color="#B91C1C" />
          <StatCard icon={Thermometer} label="Bearing Temp" value="64.2" unit="°C" color="#B91C1C" />
          <StatCard icon={Wind} label="Lubrication Flow" value="12.8" unit="L/m" color="#B91C1C" />
        </div>

        {/* Dashboard Visualization Mockup */}
        <div className="mt-12 bg-white border border-gray-200 p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-black mb-4">Predictive Analytics <span className="text-crimson">AI</span></h3>
                    <p className="text-gray-600 mb-8 max-w-md">Our neural network identifies frequency harmonics that precede bearing failure, giving you up to 60 days of lead time for maintenance planning.</p>
                    <div className="flex gap-4">
                        <div className="bg-gray-50 border border-gray-100 p-4 flex-1">
                            <span className="block text-[10px] font-black text-gray-400 uppercase mb-1">Confidence Score</span>
                            <span className="text-xl font-black">98.4%</span>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 p-4 flex-1">
                            <span className="block text-[10px] font-black text-gray-400 uppercase mb-1">Lead Time</span>
                            <span className="text-xl font-black">14 Days</span>
                        </div>
                    </div>
                </div>
                <div className="h-64 bg-gray-50 border border-gray-100 flex items-center justify-center relative diagonal-pattern-dark">
                    <div className="w-48 h-48 rounded-full border-8 border-crimson/10 border-t-crimson animate-spin-slow flex items-center justify-center">
                         <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center">
                            <Activity className="text-crimson" size={40} />
                         </div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-1">
                        {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-${2+i} bg-crimson/${10+i*10}`} />)}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
