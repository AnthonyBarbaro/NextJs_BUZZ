// api.js
import { mockStores } from '../pages/api/mockStores';
// import { mockProducts } from '../pages/api/mockProducts';

// Placeholder function to simulate fetching stores
export const fetchStores = async () => {
    // Simulate a delay to mimic a real API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockStores);
        }, 500);
    });
};

// lib/api.js

export const mockProducts = [
    { id: 1, name: 'OG Kush', category: 'Flower', price: 25 },
    { id: 2, name: 'Sour Diesel', category: 'Flower', price: 30 },
    { id: 3, name: 'Blue Dream Vape', category: 'Vape', price: 40 },
];

// Mock function to simulate fetching products
export const fetchProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProducts);
        }, 500); // Simulate network delay
    });
};
