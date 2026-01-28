import type { ProductModel } from "../model/productModel";

interface ProductListProps {
  product: ProductModel;
  handleAddtoCart: (product: ProductModel) => void;
}


function ProductList({ product, handleAddtoCart }: ProductListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button onClick={() => handleAddtoCart(product)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
