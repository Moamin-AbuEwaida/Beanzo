import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';

const products: Product[] = [
    { id: 1, name: 'Instant Coffee', price: 15, image: 'https://images.unsplash.com/photo-1621267860478-dbdd589372db?auto=format&fit=crop&q=80&w=300', rating: 4.5, availableTypes: 3 },
    { id: 2, name: 'Black Coffee', price: 10, image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=300', rating: 4.8, availableTypes: 5 },
    { id: 3, name: 'Latte', price: 25, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=300', rating: 4.9, availableTypes: 3 },
    { id: 4, name: 'Cappuccino', price: 30, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=300', rating: 4.7, availableTypes: 5 },
    { id: 5, name: 'Espresso', price: 25, image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80&w=300', rating: 4.6, availableTypes: 2 },
    { id: 6, name: 'Mocha', price: 17, image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.8, availableTypes: 2 },
];

export const Products: React.FC = () => {
    return (
        <section id="products" className="py-24 bg-coffee-50 relative">
            {/* Background Shape */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-coffee-100/50 -z-10 rounded-b-[4rem]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-coffee-900 mb-6">Our Top Selling Products</h2>
                    <p className="text-gray-600">
                        It takes a lot of heart and hard work at every step to create the best coffee possible, and we know it takes a lot of grit to keep your own grind going.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-accent text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-coffee-900 transition-all shadow-lg hover:shadow-xl">
                        View All Coffee
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};