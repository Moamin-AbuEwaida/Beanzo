import { Coffee, CupSoda, Package, Bean, UtensilsCrossed } from 'lucide-react';
import { Product, Service } from './types';

export const services: Service[] = [
    { id: 1, title: 'Equipment', icon: Coffee },
    { id: 2, title: 'Type Of Coffee', icon: CupSoda },
    { id: 3, title: 'Take A Way', icon: Package },
    { id: 4, title: 'Beans Variant', icon: Bean },
    { id: 5, title: 'Pastry', icon: UtensilsCrossed },
];

export const products: Product[] = [
    { 
        id: 1, 
        name: 'Instant Coffee', 
        price: 15, 
        image: 'https://images.unsplash.com/photo-1621267860478-dbdd589372db?auto=format&fit=crop&q=80&w=300', 
        rating: 4.5, 
        availableTypes: 3,
        description: "Our premium instant coffee is freeze-dried to preserve the rich aroma and flavor of 100% Arabica beans. Ready in seconds, it delivers a smooth and satisfying cup every time.",
        ingredients: ["100% Arabica Coffee Beans", "Hot Water"],
        sizes: [
            { name: 'Small', volume: '8oz', price: 15, calories: 5 },
            { name: 'Medium', volume: '12oz', price: 18, calories: 8 },
            { name: 'Large', volume: '16oz', price: 20, calories: 10 }
        ]
    },
    { 
        id: 2, 
        name: 'Black Coffee', 
        price: 10, 
        image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=300', 
        rating: 4.8, 
        availableTypes: 5,
        description: "Pure, unadulterated coffee brewed to perfection. Experience the bold notes and subtle undertones of our signature house blend without any distractions.",
        ingredients: ["Filtered Water", "House Blend Coffee Beans"],
        sizes: [
            { name: 'Small', volume: '8oz', price: 10, calories: 2 },
            { name: 'Medium', volume: '12oz', price: 12, calories: 4 },
            { name: 'Large', volume: '16oz', price: 14, calories: 5 }
        ]
    },
    { 
        id: 3, 
        name: 'Latte', 
        price: 25, 
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=300', 
        rating: 4.9, 
        availableTypes: 3,
        description: "A classic favorite made with rich espresso and steamed milk, topped with a light layer of foam. Smooth, creamy, and comforting.",
        ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
        sizes: [
            { name: 'Small', volume: '10oz', price: 25, calories: 120 },
            { name: 'Medium', volume: '14oz', price: 28, calories: 190 },
            { name: 'Large', volume: '20oz', price: 32, calories: 260 }
        ]
    },
    { 
        id: 4, 
        name: 'Cappuccino', 
        price: 30, 
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=300', 
        rating: 4.7, 
        availableTypes: 5,
        description: "The perfect balance of espresso, steamed milk, and a thick layer of milk foam. Dusted with chocolate powder for an extra touch of indulgence.",
        ingredients: ["Espresso", "Steamed Milk", "Milk Foam", "Cocoa Powder"],
        sizes: [
            { name: 'Small', volume: '8oz', price: 30, calories: 110 },
            { name: 'Medium', volume: '12oz', price: 35, calories: 150 },
            { name: 'Large', volume: '16oz', price: 40, calories: 180 }
        ]
    },
    { 
        id: 5, 
        name: 'Espresso', 
        price: 25, 
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80&w=300', 
        rating: 4.6, 
        availableTypes: 2,
        description: "A concentrated shot of coffee with a rich, golden crema. Intense flavor and aroma for the true coffee purist.",
        ingredients: ["Finely Ground Coffee", "Pressurized Water"],
        sizes: [
            { name: 'Single', volume: '1oz', price: 25, calories: 9 },
            { name: 'Double', volume: '2oz', price: 30, calories: 18 },
            { name: 'Triple', volume: '3oz', price: 35, calories: 27 }
        ]
    },
    { 
        id: 6, 
        name: 'Mocha', 
        price: 17, 
        image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        rating: 4.8, 
        availableTypes: 2,
        description: "A delicious combination of espresso, bittersweet chocolate sauce, and steamed milk, topped with sweetened whipped cream.",
        ingredients: ["Espresso", "Chocolate Syrup", "Steamed Milk", "Whipped Cream"],
        sizes: [
            { name: 'Small', volume: '12oz', price: 17, calories: 290 },
            { name: 'Medium', volume: '16oz', price: 20, calories: 360 },
            { name: 'Large', volume: '20oz', price: 24, calories: 450 }
        ]
    },
];