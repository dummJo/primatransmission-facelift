import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsDashboard from './components/StatsDashboard';
import { Settings, Shield, Zap, Tool } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="glass p-8 group hover:bg-white/5 transition-all duration-500">
    <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-orange-500" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6">
      {description}
    </p>
    <div className="h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-500" />
  </div>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="text-orange-500 fill-orange-500" size={24} />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            Prima<span className="text-orange-500">Transmission</span>
          </span>
        </div>
        <p className="text-slate-500 max-w-sm mb-8">
          The industry leader in mechanical power transmission and industrial reliability solutions. Engineering excellence since 1998.
        </p>
        <div className="flex gap-4">
          {/* Social icons placeholder */}
          <div className="w-10 h-10 glass flex items-center justify-center hover:text-orange-500 cursor-pointer">IN</div>
          <div className="w-10 h-10 glass flex items-center justify-center hover:text-orange-500 cursor-pointer">TW</div>
          <div className="w-10 h-10 glass flex items-center justify-center hover:text-orange-500 cursor-pointer">FB</div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-orange-500">Solutions</h4>
        <ul className="flex flex-col gap-4 text-slate-400 text-sm">
          <li className="hover:text-white cursor-pointer transition-colors">Vibration Analysis</li>
          <li className="hover:text-white cursor-pointer transition-colors">IoT Monitoring</li>
          <li className="hover:text-white cursor-pointer transition-colors">Precision Alignment</li>
          <li className="hover:text-white cursor-pointer transition-colors">Balancing Services</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-orange-500">Contact</h4>
        <ul className="flex flex-col gap-4 text-slate-400 text-sm">
          <li>Jakarta, Indonesia</li>
          <li>support@primatransmission.com</li>
          <li>+62 (21) 555-0123</li>
        </ul>
      </div>
    </div>
    <div className="container mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em]">© 2026 PT. Prima Transmisi. All Rights Reserved.</p>
      <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] hover:text-orange-500 cursor-pointer">Privacy Policy | Terms of Service</p>
    </div>
  </footer>
);

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="services" className="py-24 container">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase italic mb-4 tracking-tight">
              Our <span className="text-orange-500">Core Services</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mb-6" />
            <p className="text-slate-400">
              We provide end-to-end reliability engineering services to ensure your machinery operates at peak efficiency with zero unplanned downtime.
            </p>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest text-orange-500 hover:tracking-[0.2em] transition-all">
            View All Services →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Shield} 
            title="Reliability Engineering" 
            description="Complete maintenance strategy development and implementation to maximize asset lifecycle and minimize operational risk."
          />
          <ServiceCard 
            icon={Settings} 
            title="Mechanical Solutions" 
            description="Expert gearbox repairs, precision shaft alignment, and dynamic balancing services using state-of-the-art diagnostic tools."
          />
          <ServiceCard 
            icon={Zap} 
            title="IoT Integration" 
            description="Seamless deployment of wireless vibration and temperature sensors with cloud-based dashboarding for 24/7 monitoring."
          />
        </div>
      </section>

      <StatsDashboard />

      {/* CTA Section */}
      <section className="py-24 bg-orange-500">
        <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-8">Ready to Optimize Your Transmission?</h2>
            <p className="text-orange-100 mb-12 max-w-xl mx-auto text-lg">
                Join hundreds of industrial leaders who trust Prima Transmission for their reliability needs.
            </p>
            <button className="px-12 py-5 bg-black text-white font-black rounded-none hover:bg-neutral-900 transition-all transform skew-x-[-12deg] group">
                <span className="block skew-x-[12deg] tracking-[0.2em]">CONTACT OUR EXPERTS</span>
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
