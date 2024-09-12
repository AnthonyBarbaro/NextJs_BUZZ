import { useState, useEffect } from 'react';
import { fetchStores } from '../lib/api';
import SmartSearchBar from './SearchBar.js';

const Navbar = ({ selectedStore, onStoreChange, onSearch, products }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [stores, setStores] = useState([]);
    const [showStoreDropdown, setShowStoreDropdown] = useState(false);  // Control store dropdown visibility

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

    const toggleStoreDropdown = () => {
        setShowStoreDropdown(!showStoreDropdown);  // Toggle dropdown visibility
    };

    const handleStoreChange = (storeName) => {
        onStoreChange(storeName);  // Call the parent function to update the selected store
        setShowStoreDropdown(false);  // Close dropdown after selection
    };

    const categories = [
        { label: "Flower", category: "Flower" },
        { label: "Vapes", category: "Vapes" },
        { label: "Pre-Rolls", category: "Pre-Rolls" },
        { label: "Concentrates", category: "Concentrates" },
        { label: "Edibles", category: "Edibles" },
        { label: "Capsules", category: "Capsules" },
        { label: "Tinctures", category: "Tinctures" },
        { label: "Drinks", category: "Drinks" },
        { label: "Accessories", category: "Accessories" },
        { label: "Topicals", category: "Topicals" },
        { label: "CBD", category: "CBD" }
    ];

    return (
        <nav className="bg-white shadow-lg relative">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <div className="flex items-center space-x-4">
                    <button className="text-green-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    {/* Store Name with Dropdown */}
                    <div className="relative">
                        <div onClick={toggleStoreDropdown} className="bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600 transition ease-in-out duration-200">
                            Blaze Cannabis - {selectedStore}
                        </div>

                        {/* Dropdown Menu */}
                        {showStoreDropdown && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                                {stores.map((store) => (
                                    <li
                                        key={store.id}
                                        className="cursor-pointer p-2 hover:bg-gray-100"
                                        onClick={() => handleStoreChange(store.name)}
                                    >
                                        {store.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Smart Search Bar */}
                <div className="w-1/3">
                    <SmartSearchBar products={products} onSearch={onSearch} />
                </div>
            </div>

            {/* Category Row */}
            <div className="bg-green-100 py-2">
                <div className="container mx-auto flex justify-center space-x-6 text-gray-700">
                    {categories.map((category) => (
                        <button key={category.category} className="hover:text-green-700 transition-colors duration-200 font-medium">
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
