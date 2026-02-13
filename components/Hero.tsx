import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-coffee-100 to-transparent dark:from-coffee-900/50 -z-10 rounded-l-full opacity-60"></div>
      
      {/* Floating beans */}
      <img 
        src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=200" 
        alt="Coffee Bean" 
        className="absolute top-40 left-10 w-12 h-12 object-contain opacity-40 rotate-12 blur-sm hidden lg:block invert dark:invert-0"
      />
       <img 
        src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=200" 
        alt="Coffee Bean" 
        className="absolute bottom-20 right-1/4 w-16 h-16 object-contain opacity-30 -rotate-45 blur-[2px] hidden lg:block invert dark:invert-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-200 text-sm font-semibold tracking-wide uppercase transition-colors">
                Best Coffee In Town
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-coffee-900 dark:text-white leading-[1.1] mb-6 transition-colors">
                Enjoy a new blend of <span className="text-accent italic">coffee beans</span>
            </h1>
            <p className="text-lg text-coffee-700 dark:text-coffee-200 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed transition-colors">
                Brew or order a Perfect Coffee based on your mood Anywhere Anytime. We source the finest beans to craft liquid magic.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="bg-coffee-900 dark:bg-coffee-800 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-accent dark:hover:bg-accent transition-all shadow-lg hover:shadow-xl group">
                    Shop Now
                    <span className="bg-accent rounded-full p-1 group-hover:bg-white group-hover:text-accent transition-colors">
                        <ArrowRight className="w-4 h-4" />
                    </span>
                </button>
                <button className="flex items-center gap-3 text-coffee-800 dark:text-coffee-100 font-semibold px-6 py-4 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors">
                    <PlayCircle className="w-10 h-10 text-accent" />
                    How it works
                </button>
            </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                {/* Main Machine/Grinder Image Placeholder */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                    <img 
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                        alt="Artistic Coffee Splash" 
                        className="w-full h-auto drop-shadow-2xl object-cover rounded-3xl"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)"}}
                    />
                </div>
                
                {/* Decorative splash behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl -z-10"></div>
            </div>
        </div>
      </div>
    </section>
  );
};