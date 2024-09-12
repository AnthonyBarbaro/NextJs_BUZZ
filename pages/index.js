import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const products = [
        { id: 1, name: 'Product 1', description: 'Description for product 1', price: 10 },
        { id: 2, name: 'Product 2', description: 'Description for product 2', price: 20 },
    ];

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <main className="p-4">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
}
