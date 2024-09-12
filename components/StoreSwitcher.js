const StoreSwitcher = ({ stores, onStoreChange, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <h2 className="text-2xl font-bold mb-4">Choose a Store</h2>
                <ul className="mb-4">
                    {stores.map((store) => (
                        <li
                            key={store.id}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                            onClick={() => {
                                onStoreChange(store.name);
                                onClose();
                            }}
                        >
                            {store.name}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default StoreSwitcher;
