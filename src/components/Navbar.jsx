import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'IoT Dashboard', href: '#dashboard' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-black' : 'py-5 bg-black/90 backdrop-blur-md'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-crimson p-1.5 flex items-center justify-center">
            <Zap className="text-white fill-white" size={20} />
          </div>
          <span className="text-xl font-black tracking-tight text-white uppercase">
            Prima<span className="text-crimson">Transmission</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-crimson transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-crimson transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="btn-primary py-2.5 px-6 text-[11px] tracking-[0.15em]">
            REQUEST AUDIT <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10 py-10 px-4 flex flex-col gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold uppercase tracking-widest text-white hover:text-crimson"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full btn-primary justify-center">
            REQUEST AUDIT <ArrowRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
