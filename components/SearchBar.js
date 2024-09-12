import { useState } from 'react';

const SmartSearchBar = ({ products = [], onSearch }) => {  // Set default empty array for products
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        // Safeguard in case products is undefined or empty
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(value) ||
            product.category.toLowerCase().includes(value)
        );
        onSearch(filteredProducts);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search products..."
            className="p-2 border rounded-lg w-full md:w-2/3 text-black"
        />
    );
};

export default SmartSearchBar;
