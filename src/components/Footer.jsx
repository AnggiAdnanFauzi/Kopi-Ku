import React from 'react';
import { MapPin, Clock, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-display font-bold text-brand-green mb-6">Kopi Ku</h3>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Menyajikan kopi luar biasa dengan komitmen pada kualitas, komunitas, dan keberlanjutan sejak 2014.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors text-white">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors text-white">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors text-white">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-lg font-bold font-display mb-6 border-b border-white/10 pb-4">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Galeri</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold font-display mb-6 border-b border-white/10 pb-4">Informasi Kontak</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 items-start">
                <MapPin size={20} className="text-brand-accent shrink-0 mt-1" />
                <span>Jl. Pamanukan No.12<br/>Antapani, Bandung 40291</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={20} className="text-brand-accent shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold font-display mb-6 border-b border-white/10 pb-4">Jam Buka</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span>07:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu</span>
                <span>08:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu</span>
                <span>08:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 h-48 rounded-xl overflow-hidden">
            <iframe 
              src="https://maps.google.com/maps?q=Jl.%20Pamanukan%20No.12,%20Antapani%20Kulon,%20Kec.%20Antapani,%20Kota%20Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kopi Ku. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
