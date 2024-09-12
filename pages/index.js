import { useState, useEffect } from 'react';
import { fetchProducts, fetchStores } from '../lib/api'; // Assuming mock or real API for products
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import AgeVerification from '../components/AgeVerification';
import ProductCard from '../components/ProductCard';
import StoreSwitcher from '../components/StoreSwitcher';

const Home = () => {
    const [verified, setVerified] = useState(false);
    const [selectedStore, setSelectedStore] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showStoreSwitcher, setShowStoreSwitcher] = useState(false);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const loadStores = async () => {
            const storesData = await fetchStores();
            setStores(storesData);
            if (!selectedStore && storesData.length > 0) {
                setSelectedStore(storesData[0].name); // Default to first store
            }
        };
        loadStores();
    }, []);

    useEffect(() => {
        const loadProducts = async () => {
            const productData = await fetchProducts();
            setProducts(productData);
            setFilteredProducts(productData); // Initialize filteredProducts to all products
        };
        loadProducts();
    }, [selectedStore]);

    const handleVerification = (store) => {
        setSelectedStore(store);
        setVerified(true);
    };

    const handleSearch = (searchResults) => {
        setFilteredProducts(searchResults); // Update filteredProducts with search results
    };

    const handleStoreChange = (store) => {
        if (store === 'show-list') {
            setShowStoreSwitcher(true); // Show store switcher modal
        } else {
            setSelectedStore(store);
        }
    };

    return (
        <div>
            {!verified && <AgeVerification onVerify={handleVerification} />}
            {verified && (
                <>
                    <Navbar
                        selectedStore={selectedStore}
                        products={products} // Pass the products array to the Navbar
                        onStoreChange={handleStoreChange}
                        onSearch={handleSearch} // Pass the search handler
                    />
                    <Banner />
                    {showStoreSwitcher && (
                        <StoreSwitcher
                            stores={stores}
                            onStoreChange={handleStoreChange}
                            onClose={() => setShowStoreSwitcher(false)}
                        />
                    )}
                    <div className="container mx-auto my-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
