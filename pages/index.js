import { useState, useEffect } from 'react';
import { fetchProducts, fetchBrands } from '../lib/api'; // Assuming you fetch products and brands from Dutchie
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import AgeVerification from '../components/AgeVerification';

const Home = () => {
    const [verified, setVerified] = useState(false);
    const [selectedStore, setSelectedStore] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const loadProductsAndBrands = async () => {
            const productData = await fetchProducts(); // Fetch Dutchie products
            const brandData = await fetchBrands(); // Fetch Dutchie brands
            setProducts(productData);
            setFilteredProducts(productData); // Initialize with all products
            setBrands(brandData); // Load brands
        };
        loadProductsAndBrands();
    }, [selectedStore]);

    const handleStoreChange = (store) => {
        setSelectedStore(store); // Update the selected store when user switches
    };

    const handleFilter = (filtered) => {
        setFilteredProducts(filtered); // Update filtered products based on the filter
    };

    const handleVerification = (store) => {
        setSelectedStore(store);
        setVerified(true);
    };

    return (
        <div>
            {!verified && <AgeVerification onVerify={handleVerification} />}
            {verified && (
                <>
                    <Navbar
                      selectedStore={selectedStore}
                      onStoreChange={handleStoreChange}  // Pass the store change function
                      onSearch={() => {}}  // Add search functionality later
                      products={products}
                    />
                    <div className="flex justify-between px-6 py-4">
                        {/* Filter Section (1/4 of the screen) */}
                        <div className="w-1/4">
                            <Filter products={products} onFilter={handleFilter} brands={brands} />
                        </div>

                        {/* Product Display Section (3/4 of the screen) */}
                        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
