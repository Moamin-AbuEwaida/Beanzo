import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Promotions: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-coffee-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Large Banner */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000" 
              alt="Coffee Splash" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent p-10 flex flex-col justify-center">
                <span className="text-accent font-script text-3xl mb-2">Tasty & Hot</span>
                <h3 className="text-5xl font-serif font-bold text-white mb-6 leading-tight">
                    Coffee <br/>
                    <span className="text-lg font-sans font-light tracking-widest uppercase">Enjoy With Us</span>
                </h3>
                <div className="mt-auto">
                    <p className="text-white/80 mb-2">Get up to</p>
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-bold text-accent">50% <span className="text-lg text-white">OFF</span></span>
                        <button className="bg-white text-coffee-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column Banners */}
          <div className="flex flex-col gap-8">
             {/* Top Small */}
             <div className="relative h-[184px] rounded-3xl overflow-hidden bg-[#2C1810] group">
                <div className="absolute right-0 top-0 h-full w-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=500" 
                        alt="Latte Art" 
                        className="w-full h-full object-cover rounded-l-full border-4 border-[#2C1810]"
                    />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-center z-10 w-2/3">
                    <div className="bg-yellow-400 text-[#2C1810] text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">BEST QUALITY</div>
                    <h4 className="text-2xl font-serif text-white mb-2 italic">Coffee</h4>
                    <button className="flex items-center gap-2 text-accent text-sm font-bold hover:text-white transition-colors">
                        Order Now <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
             </div>

             {/* Bottom Small */}
             <div className="relative h-[184px] rounded-3xl overflow-hidden bg-black group">
                 <img 
                    src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=500" 
                    alt="Dark Coffee" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 p-8 flex items-center justify-between">
                    <div>
                        <h4 className="text-3xl font-serif text-white mb-1">Coffee</h4>
                        <p className="text-gray-300 text-xs max-w-[150px]">Black coffee is a beverage made from roasted coffee beans.</p>
                    </div>
                    <button className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:text-accent transition-colors shadow-lg shadow-accent/20">
                         <ArrowRight className="w-5 h-5" />
                    </button>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};