// api.js
import { mockStores } from '../pages/api/mockStores';
// import { mockProducts } from '../pages/api/mockProducts';

// lib/api.js

// Import product data from file.csv (this will be an actual API call or a data loader in real use)
export const fetchProducts = async () => {
    // Replace mockProducts with the real product data you imported
    return [
        { id: 1, name: 'Clipper | Lighter', category: 'Accessories', brand: '', price: 3 },
        { id: 2, name: 'Highatus | S Gummy 100mg | Watermelon', category: 'Edibles', brand: 'Highatus', price: 20 },
        { id: 3, name: 'Highatus | S Gummy 100mg | Blueberry', category: 'Edibles', brand: 'Highatus', price: 20 },
        { id: 4, name: 'Highatus | S Gummy 100mg | PomBerry CBN', category: 'Edibles', brand: 'Highatus', price: 20 },
        { id: 5, name: 'Highatus | S Gummy 100mg | L\'Orange', category: 'Edibles', brand: 'Highatus', price: 20 },
        { id: 6, name: 'Eyeelle | Flower 3.5G | S | Grapefruit Coolada', category: 'Eighths', brand: 'Eyeelle', price: 15 },
        { id: 7, name: 'Highatus | S Gummy 100mg | Strawberry Lemonade', category: 'Edibles', brand: 'Highatus', price: 20 },
        { id: 8, name: 'Highatus | S Gummy 100mg | Pineapple', category: 'Edibles', brand: 'Highatus', price: 20 },
        { id: 9, name: '$25 Gift Card', category: 'Gift Cards', brand: 'Birchmount', price: 25 },
        { id: 10, name: '$100 Gift Card', category: 'Gift Cards', brand: 'Birchmount', price: 100 },
        { id: 11, name: '$50 Gift Card', category: 'Gift Cards', brand: 'Birchmount', price: 50 },
    ];
};

export const fetchBrands = async () => {
    // Use the same brands in your CSV or mock brands for now
    return [
        { id: 1, name: 'Highatus' },
        { id: 2, name: 'Eyeelle' },
        { id: 3, name: 'Birchmount' }
    ];
};

// Fetch mock stores (already in place)
export const fetchStores = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockStores); // Mocked stores
        }, 500);
    });
};
