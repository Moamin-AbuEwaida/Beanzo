import React, { useState, useEffect } from 'react';
import { X, Star, Flame, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);

  // Update selected size when product changes
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!isOpen || !product || !selectedSize) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white dark:bg-coffee-900 w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden relative z-10 animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row max-h-[90vh] md:max-h-auto overflow-y-auto md:overflow-visible">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-coffee-900 dark:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative bg-coffee-100 dark:bg-coffee-800 p-8 flex items-center justify-center">
            {/* Decorative Circle */}
            <div className="absolute w-[120%] h-[120%] border-[40px] border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>
            
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full shadow-2xl relative z-10"
            />
            
            <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-bold text-coffee-900 dark:text-white">{product.rating} Rating</span>
            </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-white mb-2">
                {product.name}
            </h2>
            <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider">
                    {product.availableTypes} Types Available
                </span>
                <span className="px-3 py-1 bg-coffee-100 dark:bg-coffee-800 text-coffee-700 dark:text-coffee-300 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3 h-3" /> {selectedSize.calories} Cal
                </span>
            </div>

            <p className="text-gray-600 dark:text-coffee-200 mb-6 leading-relaxed">
                {product.description}
            </p>

            {/* Ingredients */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-coffee-900 dark:text-white uppercase tracking-wider mb-3">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing, idx) => (
                        <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-coffee-50 dark:bg-coffee-800 text-coffee-600 dark:text-coffee-200 border border-coffee-200 dark:border-coffee-700">
                            {ing}
                        </span>
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-coffee-900 dark:text-white uppercase tracking-wider mb-3">Select Size</h3>
                <div className="flex gap-4">
                    {product.sizes.map((size) => (
                        <button
                            key={size.name}
                            onClick={() => setSelectedSize(size)}
                            className={`flex-1 p-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${
                                selectedSize.name === size.name 
                                ? 'border-accent bg-accent/5 dark:bg-accent/10 text-coffee-900 dark:text-white shadow-md' 
                                : 'border-gray-200 dark:border-coffee-700 text-gray-500 dark:text-gray-400 hover:border-accent/50'
                            }`}
                        >
                            <span className="font-bold text-sm">{size.name}</span>
                            <span className="text-xs opacity-70">{size.volume}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Action Bar */}
            <div className="mt-auto flex items-center justify-between gap-6 pt-6 border-t border-gray-100 dark:border-coffee-800">
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Total Price</span>
                    <span className="text-3xl font-bold text-coffee-900 dark:text-white">${selectedSize.price}</span>
                </div>
                <button className="flex-1 bg-coffee-900 dark:bg-white text-white dark:text-coffee-900 py-4 rounded-2xl font-bold text-lg hover:bg-accent dark:hover:bg-coffee-200 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                    <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
                    Add to Cart
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};