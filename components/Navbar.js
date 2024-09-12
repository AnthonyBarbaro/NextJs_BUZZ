import { useState, useEffect } from 'react';
import { fetchStores } from '../lib/api'; // Assuming you fetch stores
import SmartSearchBar from './SearchBar.js'; // Import the smart search bar component

const Navbar = ({ selectedStore, onStoreChange, onSearch, products }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [stores, setStores] = useState([]);
    const [isStoreSwitching, setIsStoreSwitching] = useState(false);

    useEffect(() => {
        const loadStores = async () => {
            const storesData = await fetchStores();
            setStores(storesData);
        };
        loadStores();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleStoreClick = () => {
        setIsStoreSwitching(true);
        setTimeout(() => {
            onStoreChange('show-list');
            setIsStoreSwitching(false);
        }, 500); // Adding a 500ms transition before showing the store switcher
    };

    const closeMenuOnOutsideClick = () => {
        setIsMenuOpen(false);
    };

    const categories = [
        "Sale", "Flower", "Vapes", "Pre-Rolls", "Concentrates", "Edibles", 
        "Capsules", "Tinctures", "Drinks", "Accessories", "Topicals", "CBD"
    ];

    return (
        <nav className="bg-green-700 shadow-lg">
            {/* Top Row: Utility Bar with Smart Search Bar and Selectable Store */}
            <div className="flex justify-between items-center p-4 bg-green-800 text-white">
                <div className="flex items-center space-x-4">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    
                    {/* Clickable store name box */}
                    <div
                        onClick={handleStoreClick}
                        className={`bg-white text-green-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-transform duration-500 ${isStoreSwitching ? 'transform scale-110' : ''}`}
                    >
                        Buzz Cannabis - {selectedStore}
                    </div>
                </div>

                {/* Smart Search Bar in the middle-right */}
                <div className="w-1/3">
                    <SmartSearchBar products={products} onSearch={onSearch} />
                </div>
            </div>

            {/* Sliding Menu (Account View) from the Left with animation */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-start">
                    <div
                        className="bg-white w-64 p-6 transform transition-transform duration-500"
                        onClick={closeMenuOnOutsideClick}
                    >
                        <button onClick={toggleMenu} className="text-right">
                            Close
                        </button>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Account Info</h2>
                            <p>Sign in with phone number (to be added)</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Second Row: Categories */}
            <div className="flex justify-center space-x-4 p-2 bg-green-600 text-white">
                {categories.map((category) => (
                    <a href={`#${category}`} key={category} className="hover:underline">
                        {category}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
