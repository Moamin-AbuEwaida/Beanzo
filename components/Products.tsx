import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';
import { products } from '../data';

interface ProductsProps {
    onProductClick: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
    return (
        <section id="products" className="py-24 bg-coffee-50 dark:bg-coffee-950 transition-colors duration-300 relative">
            {/* Background Shape */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-coffee-100/50 dark:bg-coffee-900/30 -z-10 rounded-b-[4rem]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-coffee-900 dark:text-white mb-6 transition-colors">Our Top Selling Products</h2>
                    <p className="text-gray-600 dark:text-coffee-200 transition-colors">
                        It takes a lot of heart and hard work at every step to create the best coffee possible, and we know it takes a lot of grit to keep your own grind going.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onClick={onProductClick}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-accent text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-coffee-900 dark:hover:bg-coffee-800 transition-all shadow-lg hover:shadow-xl">
                        View All Coffee
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};