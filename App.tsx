import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Promotions } from './components/Promotions';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-coffee-50 dark:bg-coffee-950 transition-colors duration-300">
      <Header onProductClick={setSelectedProduct} />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Products onProductClick={setSelectedProduct} />
        <Promotions />
        <Team />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default App;