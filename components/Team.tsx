import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-coffee-50 dark:bg-coffee-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 dark:text-white mb-4 transition-colors">
                    Meet our Experts <br /> of Liquid Magic
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Lead Chef Profile */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-1/2 rounded-[2rem] overflow-hidden shadow-xl">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500" 
                            alt="Johana Nightfall" 
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="flex-1 pt-4">
                        <h3 className="text-xl font-bold text-coffee-900 dark:text-white transition-colors">Johana Nightfall</h3>
                        <p className="text-accent text-sm font-medium mb-4">Lead Chef</p>
                        
                        <h4 className="text-2xl font-serif font-bold text-coffee-800 dark:text-coffee-100 mb-4 leading-snug transition-colors">
                            My journey started with a vision, a little bit of grit — and a whole lot of coffee.
                        </h4>
                        
                        <p className="text-gray-600 dark:text-coffee-200 text-sm leading-relaxed mb-6 transition-colors">
                            Since opening our first coffee shop near the University of Virginia in 2008, we've grown to six locations in Central Virginia, including six in the Charlottesville area and one in Richmond.
                        </p>
                        
                        {/* Dots indicator simulation */}
                        <div className="flex gap-2 mb-6">
                            <span className="w-3 h-3 rounded-full bg-accent"></span>
                            <span className="w-3 h-3 rounded-full bg-coffee-200 dark:bg-coffee-800"></span>
                            <span className="w-3 h-3 rounded-full bg-coffee-200 dark:bg-coffee-800"></span>
                        </div>

                        <button className="text-coffee-900 dark:text-coffee-100 font-bold text-sm tracking-wide uppercase hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 group">
                            Learn More 
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Co-Lead Chef Profile Card (Different Layout) */}
                <div className="bg-white dark:bg-coffee-800 p-6 rounded-[2rem] shadow-xl flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden transition-colors duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-coffee-100 dark:bg-coffee-700 rounded-bl-[100%] -z-0 transition-colors"></div>
                    
                    <div className="w-full sm:w-48 h-56 rounded-2xl overflow-hidden shrink-0 z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" 
                            alt="Sara Zones" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="z-10">
                         <h3 className="text-xl font-bold text-coffee-900 dark:text-white transition-colors">Sara Zones</h3>
                         <p className="text-gray-400 dark:text-gray-300 text-xs font-medium mb-4">Co-Lead Chef</p>
                         <p className="text-gray-600 dark:text-coffee-200 text-sm leading-relaxed mb-4 transition-colors">
                            "As a roaster we search the world over to establish relationships with great farmers cultivating great coffees."
                         </p>
                         <div className="flex gap-2">
                             {[1,2,3].map(i => <div key={i} className="w-2 h-2 bg-coffee-200 dark:bg-coffee-700 rounded-full"></div>)}
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};