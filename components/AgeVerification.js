import { useState, useEffect } from 'react';
import { fetchStores } from '../lib/api'; // Corrected path for mock fetchStores

const AgeVerification = ({ onVerify }) => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const loadStores = async () => {
            const storesData = await fetchStores(); // Fetch mock stores
            setStores(storesData);
        };
        loadStores();
    }, []);

    // Automatically verify age and store selection when a store is clicked
    const handleStoreSelect = (storeName) => {
        onVerify(storeName); // Automatically trigger verification once the store is selected
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity duration-500 ease-in-out">
            <div className="bg-white p-8 rounded-lg shadow-2xl relative max-w-md w-full text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-700">Welcome to Buzz Cannabis</h2>
                <p className="mb-4 text-lg">Please select your store to continue. By selecting a store, you confirm that you are 21 or older.</p>
                <div className="mb-6 grid grid-cols-1 gap-4">
                    {stores.map((store) => (
                        <button
                            key={store.id}
                            className="px-6 py-3 bg-green-700 text-white rounded-lg font-bold hover:bg-green-600 transition-colors duration-300"
                            onClick={() => handleStoreSelect(store.name)}
                        >
                            {store.name}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => onVerify('')} // Optionally allow users to close the modal without selecting
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AgeVerification;
