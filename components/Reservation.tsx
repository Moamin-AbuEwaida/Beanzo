import React from 'react';
import { User, Phone } from 'lucide-react';

export const Reservation: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto bg-[#1A1A1A] rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
        {/* Background Texture - Coffee Beans */}
        <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Let's book a Table
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white/90 italic mb-10">
                For you
            </h3>

            <form className="bg-white/10 backdrop-blur-sm p-2 rounded-full flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
                <div className="flex-1 bg-white rounded-full px-6 py-3 flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <input 
                        type="tel" 
                        placeholder="Your Number" 
                        className="w-full bg-transparent outline-none text-coffee-900 placeholder-gray-400"
                    />
                </div>
                <div className="flex-1 bg-white rounded-full px-6 py-3 flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <input 
                        type="number" 
                        placeholder="People" 
                        className="w-full bg-transparent outline-none text-coffee-900 placeholder-gray-400"
                    />
                </div>
                <button type="submit" className="bg-[#5C3A21] hover:bg-[#4A2E1A] text-white px-10 py-3 rounded-full font-bold transition-colors shadow-lg whitespace-nowrap">
                    Book Table
                </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-6">
                We will contact you to confirm your booking
            </p>
        </div>
      </div>
    </section>
  );
};