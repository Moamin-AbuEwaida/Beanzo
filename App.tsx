import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Promotions } from './components/Promotions';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Products />
        <Promotions />
        <Team />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
};

export default App;