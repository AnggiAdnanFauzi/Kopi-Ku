import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Always scroll to top on route change
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Beranda', to: '/' },
    { name: 'Tentang Kami', to: '/about' },
    { name: 'Menu', to: '/menu' },
    { name: 'Galeri', to: '/gallery' },
    { name: 'Kontak & Lokasi', to: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md py-4' : 'shadow-sm py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-display text-2xl font-bold cursor-pointer text-brand-green hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 overflow-hidden mix-blend-multiply relative">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="Logo Kopi Ku" 
              className="absolute w-[80px] h-[80px] max-w-none top-[-10px] left-[-20px] contrast-125 brightness-110" 
            />
          </div>
          <span>Kopi Ku</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`font-medium transition-colors cursor-pointer text-sm uppercase tracking-wider ${location.pathname === link.to ? 'text-brand-green' : 'text-brand-dark hover:text-brand-green'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-brand-dark">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full text-center py-3 font-medium cursor-pointer ${location.pathname === link.to ? 'text-brand-green bg-brand-light' : 'text-brand-dark hover:text-brand-green'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
