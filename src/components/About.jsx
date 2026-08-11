import React from 'react';
import { Leaf, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf size={32} className="text-brand-green" />,
      title: "Sumber Berkelanjutan",
      desc: "Bekerja sama langsung dengan petani lokal untuk memastikan perdagangan yang adil dan praktik berkelanjutan."
    },
    {
      icon: <Award size={32} className="text-brand-green" />,
      title: "Ahli Pemanggang",
      desc: "Biji kopi kami dipanggang sendiri dengan teliti untuk menonjolkan profil rasa yang unik."
    },
    {
      icon: <Users size={32} className="text-brand-green" />,
      title: "Komunitas Utama",
      desc: "Ruang yang ramah, dirancang untuk kolaborasi, bersantai, dan menjalin koneksi."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-gray-100 flex items-center justify-center group">
              {/* Background Image of Modern Cafe */}
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80" 
                alt="Modern White and Green Cafe Interior" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Green Tint Overlay for Modern Look */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/30 via-transparent to-white/20 mix-blend-overlay"></div>
              
              {/* The Wall Logo (CSS Composite) */}
              <div className="absolute top-[25%] left-[50%] -translate-x-1/2 flex flex-col items-center mix-blend-multiply opacity-90 drop-shadow-sm group-hover:scale-105 transition-transform duration-1000">
                {/* Cropped KK Graphic Only */}
                <div className="w-32 h-[88px] overflow-hidden relative flex flex-col items-center justify-start mb-2">
                  <img 
                    src="/logo.png" 
                    alt="KK Graphic" 
                    className="absolute w-[224px] h-[224px] max-w-none top-[-12px] left-[-46px] contrast-[1.2]" 
                  />
                </div>
                {/* Custom KOPI KU Text */}
                <div className="font-display font-bold text-brand-green text-[2rem] tracking-widest uppercase leading-none text-center">
                  Kopi Ku
                </div>
                <div className="font-sans font-semibold text-brand-green text-[0.7rem] tracking-[0.25em] uppercase mt-2 opacity-80">
                  Coffee Roasters
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-light rounded-2xl -z-10 border border-gray-100"></div>
            <div className="absolute bottom-16 -right-6 lg:-right-12 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 z-20">
              <div className="text-4xl font-display font-bold text-brand-green">10+</div>
              <div className="text-sm font-medium text-gray-500 leading-tight">Tahun<br/>Pengalaman</div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-accent uppercase tracking-widest text-sm font-bold mb-3">Warisan Kami</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 leading-tight">
              Berakar pada Tradisi, <br/> Dirancang untuk Masa Kini.
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Di Kopi Ku, kami percaya bahwa kopi lebih dari sekadar minuman—ia adalah sebuah pengalaman. Didirikan oleh para penggemar kopi, perjalanan kami dimulai dengan misi sederhana: meningkatkan ritual kopi harian dengan menyatukan kualitas luar biasa dengan bahan baku pilihan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-brand-dark mb-2">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
