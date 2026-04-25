import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

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
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="text-orange-500 fill-orange-500" size={32} />
          <span className="text-2xl font-extrabold tracking-tighter uppercase italic">
            Prima<span className="text-orange-500">Transmission</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded-none hover:bg-orange-600 transition-all transform hover:scale-105 skew-x-[-12deg]">
            <span className="block skew-x-[12deg]">GET IN TOUCH</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass py-8 px-4 flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-orange-500 text-white font-bold">
            GET IN TOUCH
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
