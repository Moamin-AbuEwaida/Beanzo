import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-coffee-950 transition-colors duration-300 relative overflow-hidden">
         {/* Decorative beans */}
         <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=100" className="absolute top-10 left-10 w-16 opacity-20 rotate-45 invert dark:invert-0" alt="bean" />
         <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=100" className="absolute bottom-10 right-10 w-24 opacity-20 -rotate-12 invert dark:invert-0" alt="bean" />

        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="relative inline-block mb-8">
                <div className="w-24 h-24 rounded-full p-1 border-2 border-accent mx-auto overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" 
                        alt="Jonas Blue" 
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-white p-1.5 rounded-full">
                    <Quote className="w-4 h-4 fill-current" />
                </div>
            </div>

            <h4 className="text-lg font-bold text-coffee-900 dark:text-white mb-1 transition-colors">Jonas Blue</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider">Coffee Enthusiast</p>

            <h3 className="text-2xl md:text-3xl font-serif font-bold text-coffee-800 dark:text-coffee-100 mb-6 leading-relaxed transition-colors">
                "The taste of coffee is Stunning, <br className="hidden md:block"/> subtle and smooth flavor."
            </h3>

            <p className="text-gray-600 dark:text-coffee-200 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors">
                The taste of coffee can vary depending on the type of bean, roast level, and brewing method used. Some people prefer a strong and bold taste, while others prefer a more subtle and smooth flavor.
            </p>

            <div className="flex justify-center gap-3">
                <button className="w-3 h-3 rounded-full bg-coffee-200 dark:bg-coffee-800 hover:bg-accent transition-colors"></button>
                <button className="w-3 h-3 rounded-full bg-accent hover:bg-accent transition-colors ring-2 ring-offset-2 ring-accent dark:ring-offset-coffee-950"></button>
                <button className="w-3 h-3 rounded-full bg-coffee-200 dark:bg-coffee-800 hover:bg-accent transition-colors"></button>
                <button className="w-3 h-3 rounded-full bg-coffee-200 dark:bg-coffee-800 hover:bg-accent transition-colors"></button>
            </div>
        </div>
    </section>
  );
};