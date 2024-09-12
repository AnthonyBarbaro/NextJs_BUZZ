const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
            {/* Product Image */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                />
                {product.onSale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-lg">
                        Sale
                    </span>
                )}
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.category}</p>

                {/* Product Price and Add to Cart */}
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-green-600">${product.price}</div>

                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-200 ease-in-out">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
