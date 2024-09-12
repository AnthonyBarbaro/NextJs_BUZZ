import { useState } from 'react';

const Filter = ({ products, onFilter, brands }) => {
    const [subCategory, setSubCategory] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const [selectedBrand, setSelectedBrand] = useState('');

    const priceRanges = [
        { label: "Under $25", min: 0, max: 25 },
        { label: "$25 to $50", min: 25, max: 50 },
        { label: "$50 to $100", min: 50, max: 100 },
        { label: "$100 to $200", min: 100, max: 200 }
    ];

    const subCategories = [
        { label: "Eighths (3.5g)", value: "3.5g" },
        { label: "Quarters (7g)", value: "7g" },
        { label: "Halves (14g)", value: "14g" },
        { label: "Ounces (28g)", value: "28g" }
    ];

    const handleFilter = () => {
        let filteredProducts = products;

        if (subCategory) {
            filteredProducts = filteredProducts.filter(product => product.weight === subCategory);
        }

        filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

        if (selectedBrand) {
            filteredProducts = filteredProducts.filter(product => product.brand === selectedBrand);
        }

        onFilter(filteredProducts);
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-700">Filter Products</h3>

            {/* Subcategory Filter */}
            <div className="mb-4">
                <label className="block mb-2 text-gray-600 font-semibold">Subcategory (Weight)</label>
                <select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="border border-gray-300 p-3 rounded-lg w-full text-gray-700"
                >
                    <option value="">All Weights</option>
                    {subCategories.map((sub) => (
                        <option key={sub.value} value={sub.value}>{sub.label}</option>
                    ))}
                </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
                <label className="block mb-2 text-gray-600 font-semibold">Price Range</label>
                <div className="flex flex-col space-y-2">
                    {priceRanges.map((range) => (
                        <button
                            key={range.label}
                            className={`px-4 py-2 rounded-lg text-left ${minPrice === range.min && maxPrice === range.max ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-200`}
                            onClick={() => {
                                setMinPrice(range.min);
                                setMaxPrice(range.max);
                            }}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-4">
                <label className="block mb-2 text-gray-600 font-semibold">Brands</label>
                <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="border border-gray-300 p-3 rounded-lg w-full text-gray-700"
                >
                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand.id} value={brand.name}>{brand.name}</option>
                    ))}
                </select>
            </div>

            <button
                onClick={handleFilter}
                className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default Filter;
