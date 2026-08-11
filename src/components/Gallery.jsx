import React from 'react';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&q=80"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-accent uppercase tracking-widest text-sm font-bold mb-3">Suasana & Atmosfer</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">Ruang untuk Bersantai</h3>
            <p className="text-gray-600 text-lg">Masuklah ke dalam lingkungan tenang yang dirancang untuk produktivitas, koneksi, dan kopi yang nikmat.</p>
          </div>
        </div>

        {/* Masonry-like Grid (Simplified for Tailwind) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-2xl group"
            >
              <img 
                src={img} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-64 md:h-80 lg:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
