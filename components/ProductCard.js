// components/ProductCard.js
const ProductCard = ({ product }) => (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p>{product.description}</p>
        <p className="font-bold">${product.price}</p>
    </div>
);

export default ProductCard;
