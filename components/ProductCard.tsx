import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-2xl transition-all duration-300 relative group border border-coffee-100">
            {/* Wishlist Button */}
            <button className="absolute top-6 left-6 text-gray-300 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
            </button>

            {/* Image Area */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 border-2 border-dashed border-accent/30 relative">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="text-center">
                <div className="text-xs text-gray-400 mb-2">{product.availableTypes} Types Available</div>
                <h3 className="text-xl font-bold text-coffee-900 mb-4 font-serif">{product.name}</h3>
                
                <div className="flex items-center justify-between mt-4 bg-coffee-50 rounded-2xl p-2 px-4">
                    <span className="text-lg font-bold text-coffee-900">${product.price}</span>
                    <button className="bg-accent text-white p-2 rounded-full hover:bg-coffee-800 transition-colors shadow-lg">
                        <ShoppingBag className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};