import React, { useState } from 'react';

const menuData = {
  "Signature": [
    { name: "Kopi Ku Cloud", desc: "Espresso yang diakhiri dengan buih awan manis khas kami.", price: "Rp 35.000", img: "/images/signature/kopi_ku_cloud.png" },
    { name: "Pandan Latte", desc: "Ekstrak pandan lokal dipadukan dengan espresso dan susu oat.", price: "Rp 32.000", img: "/images/signature/pandan_latte.png" },
    { name: "Butterscotch Sea Salt", desc: "Latte butterscotch yang kaya dengan sentuhan garam laut.", price: "Rp 38.000", img: "/images/signature/butterscotch.png" }
  ],
  "Espresso Based": [
    { name: "Americano", desc: "Kopi hitam klasik dengan racikan khas kami.", price: "Rp 25.000", img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=800" },
    { name: "Café Latte", desc: "Espresso lembut dengan susu kukus dan busa mikro.", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800" },
    { name: "Cappuccino", desc: "Paduan seimbang espresso, susu kukus, dan buih tebal.", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800" }
  ],
  "Non-Coffee": [
    { name: "Matcha Latte", desc: "Matcha Uji premium yang dicampur dengan susu krim.", price: "Rp 32.000", img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=800" },
    { name: "Chocolate Artisan", desc: "Cokelat hitam pekat yang dilelehkan ke dalam susu kukus.", price: "Rp 35.000", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800" },
    { name: "Tropical Fizz", desc: "Minuman mocktail segar dengan buah markisa dan daun mint.", price: "Rp 28.000", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800" }
  ],
  "Pastry": [
    { name: "Butter Croissant", desc: "Kroisan mentega renyah dan berlapis, dipanggang segar setiap pagi.", price: "Rp 22.000", img: "/images/pastry/croissant.png" },
    { name: "Almond Chocolatine", desc: "Kue cokelat klasik yang ditaburi kacang almond panggang.", price: "Rp 28.000", img: "/images/pastry/chocolatine.png" },
    { name: "New York Cheesecake", desc: "Kue keju lembut dengan kulit biskuit graham.", price: "Rp 35.000", img: "/images/pastry/cheesecake.png" }
  ]
};

const Menu = () => {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="menu" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent uppercase tracking-widest text-sm font-bold mb-3">Sajian Kami</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">Dibuat untuk Selera Anda</h3>
          <p className="text-gray-600 text-lg">Dari racikan khas kami hingga roti yang lezat, jelajahi menu yang dirancang untuk memanjakan indera Anda.</p>
        </div>

        {/* Categories Nav */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-brand-green text-white shadow-md' 
                : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {menuData[activeCategory].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden bg-gray-100">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold font-display text-brand-dark group-hover:text-brand-green transition-colors">{item.name}</h4>
                  <span className="text-brand-accent font-semibold whitespace-nowrap ml-4">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-auto">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
