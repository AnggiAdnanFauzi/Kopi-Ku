import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#f8f7f4]">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-display text-brand-green font-bold mb-6 leading-[1.05] max-w-2xl tracking-tight">
            Setiap Cangkir <br className="hidden lg:block"/> Punya Cerita
          </h1>
          <p className="text-[#8c9485] text-lg md:text-xl mb-10 max-w-md font-medium leading-relaxed">
            Dibuat dari biji kopi Indonesia pilihan untuk pengalaman minum kopi terbaik setiap hari
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="menu"
              smooth={true}
              duration={500}
              className="group flex items-center justify-center gap-2 bg-brand-green text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#153e32] transition-all duration-300 shadow-xl cursor-pointer w-full sm:w-auto"
            >
              Lihat Menu
            </Link>
          </div>
        </div>

        {/* Right: Custom Brand Cup with Transparent Look */}
        <div className="hidden lg:flex justify-center items-center relative animate-fade-in-up mt-10 lg:mt-0">
          
          {/* Decorative background circle */}
          <div className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#efece6] rounded-full z-0"></div>

          {/* The Cup Image Container */}
          <div className="relative z-10 w-[450px] h-[550px] flex items-center justify-center mix-blend-multiply">
            {/* The 3D Generated Cup (Pure White Background Removed via Multiply) */}
            <img 
              src="/images/cup_3d_nobg.png" 
              alt="Kemasan Kopi Ku 3D" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
