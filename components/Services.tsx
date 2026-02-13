import React from 'react';
import { Coffee, CupSoda, Package, Bean, UtensilsCrossed } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
    { id: 1, title: 'Equipment', icon: Coffee },
    { id: 2, title: 'Type Of Coffee', icon: CupSoda },
    { id: 3, title: 'Take A Way', icon: Package },
    { id: 4, title: 'Beans Variant', icon: Bean },
    { id: 5, title: 'Pastry', icon: UtensilsCrossed },
];

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-4">
                        Blending culture, coffee & top notch services
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {services.map((service) => (
                        <div key={service.id} className="group flex flex-col items-center gap-4">
                            <div className="w-24 h-24 rounded-2xl bg-coffee-800 text-coffee-100 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-accent group-hover:shadow-xl">
                                <service.icon className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                            <span className="font-semibold text-coffee-900 group-hover:text-accent transition-colors">
                                {service.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};