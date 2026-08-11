import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent uppercase tracking-widest text-sm font-bold mb-3">Hubungi Kami</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">Kami Siap Melayani Anda</h3>
          <p className="text-gray-600 text-lg">Punya pertanyaan atau ingin melakukan reservasi acara? Jangan ragu untuk menghubungi kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-brand-light p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-2xl font-bold font-display mb-8 text-brand-dark border-b border-gray-200 pb-4">Informasi Kontak</h4>
            <ul className="space-y-6 text-gray-700">
              <li className="flex gap-4 items-start">
                <MapPin size={24} className="text-brand-green shrink-0 mt-1" />
                <div>
                  <strong className="block mb-1">Alamat</strong>
                  <span>Jl. Pamanukan No.12<br/>Antapani Kulon, Kec. Antapani<br/>Kota Bandung, Jawa Barat 40291</span>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={24} className="text-brand-green shrink-0" />
                <div>
                  <strong className="block mb-1">Telepon</strong>
                  <span>+62 811 2345 6789</span>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={24} className="text-brand-green shrink-0" />
                <div>
                  <strong className="block mb-1">Email</strong>
                  <span>halo@kopiku.id</span>
                </div>
              </li>
            </ul>

            <h4 className="text-xl font-bold font-display mt-10 mb-6 text-brand-dark border-b border-gray-200 pb-4">Jam Buka</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="font-semibold text-brand-green">07:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span className="font-semibold text-brand-green">08:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* Map Location */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col h-full min-h-[400px]">
            <h4 className="text-2xl font-bold font-display mb-6 text-brand-dark px-4 pt-4">Lokasi Kami</h4>
            <div className="w-full flex-grow rounded-xl overflow-hidden relative">
              <iframe 
                src="https://maps.google.com/maps?q=Jl.%20Pamanukan%20No.12,%20Antapani%20Kulon,%20Kec.%20Antapani,%20Kota%20Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                className="absolute inset-0"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
