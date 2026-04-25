import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsDashboard from './components/StatsDashboard';
import { Settings, Shield, Zap, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white border border-gray-200 p-10 group hover:border-crimson transition-all relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 -mr-12 -mt-12 rotate-45 group-hover:bg-crimson/5 transition-colors" />
    <div className="relative z-10">
      <div className="w-14 h-14 bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-crimson transition-all">
        <Icon className="text-crimson group-hover:text-white" size={28} />
      </div>
      <h3 className="text-xl font-black mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        {description}
      </p>
      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-crimson group-hover:gap-4 transition-all">
        LEARN MORE <ArrowRight size={14} />
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-black text-white pt-24 pb-12">
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-crimson p-2">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">
            Prima<span className="text-crimson">Transmission</span>
          </span>
        </div>
        <p className="text-gray-400 max-w-sm mb-10 leading-relaxed">
          The industry leader in mechanical power transmission and industrial reliability solutions. Engineering excellence since 1998, serving Indonesia's largest industrial sectors.
        </p>
        <div className="flex gap-4">
          {['IN', 'TW', 'FB'].map(social => (
            <div key={social} className="w-12 h-12 border border-white/10 flex items-center justify-center text-xs font-black hover:bg-crimson hover:border-crimson transition-all cursor-pointer">
              {social}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-xs font-black mb-8 uppercase tracking-[0.2em] text-crimson">Core Expertise</h4>
        <ul className="flex flex-col gap-5 text-gray-400 text-sm font-bold">
          <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">Vibration Analysis</li>
          <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">IoT Integration</li>
          <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">Precision Alignment</li>
          <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">Mechanical Balancing</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-black mb-8 uppercase tracking-[0.2em] text-crimson">Headquarters</h4>
        <ul className="flex flex-col gap-5 text-gray-400 text-sm leading-relaxed font-bold">
          <li>Kawasan Industri Jababeka II,<br />Cikarang, Bekasi 17530</li>
          <li>contact@primatransmission.com</li>
          <li>+62 (21) 8984-0000</li>
        </ul>
      </div>
    </div>
    <div className="container mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">© 2026 PT. Prima Transmisi. ISO 9001:2015 Certified.</p>
      <div className="flex gap-8 text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">
        <span className="hover:text-crimson cursor-pointer transition-colors">Privacy</span>
        <span className="hover:text-crimson cursor-pointer transition-colors">Terms</span>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section id="services" className="py-32 container">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-crimson" />
                <span className="text-[11px] font-black tracking-[0.4em] uppercase text-crimson">Our Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
              Precision <br />
              <span className="text-gray-300">Engineering.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We provide end-to-end reliability engineering services to ensure your machinery operates at peak efficiency with zero unplanned downtime.
            </p>
          </div>
          <button className="text-xs font-black uppercase tracking-widest bg-gray-50 px-8 py-4 border border-gray-200 hover:bg-crimson hover:text-white transition-all">
            FULL SERVICE CATALOG
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Shield} 
            title="Reliability Strategy" 
            description="Complete maintenance strategy development and implementation to maximize asset lifecycle and minimize operational risk."
          />
          <ServiceCard 
            icon={Settings} 
            title="Mechanical Solutions" 
            description="Expert gearbox repairs, precision shaft alignment, and dynamic balancing services using state-of-the-art diagnostic tools."
          />
          <ServiceCard 
            icon={Zap} 
            title="Industrial IoT" 
            description="Seamless deployment of wireless vibration and temperature sensors with cloud-based dashboarding for 24/7 monitoring."
          />
        </div>
      </section>

      <StatsDashboard />

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 diagonal-pattern-dark opacity-40" />
        <div className="container relative z-10">
            <div className="bg-black p-16 md:p-24 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-crimson" />
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 tracking-tighter">Ready to Optimize Your <br /><span className="text-crimson">Transmission?</span></h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    Join hundreds of industrial leaders who trust PT. Prima Transmisi for their critical reliability needs.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button className="bg-crimson text-white px-12 py-5 font-black text-[13px] tracking-[0.2em] hover:bg-red-800 transition-all">
                        SCHEDULE AN AUDIT
                    </button>
                    <button className="border border-white/20 text-white px-12 py-5 font-black text-[13px] tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                        TALK TO AN ENGINEER
                    </button>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
