import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { addToWishlist, removeFromWishlist } from '../../firebase/firestore';
import Button from '../common/Button';
import toast from 'react-hot-toast';

const ProductCard = ({
  product,
  isWishlisted = false,
  onWishlistToggle
}) => {
  const { addToCart } = useCart();
  const { user, userProfile } = useAuth();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.stock <= 0) {
      toast.error('Product out of stock');
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  const handleWishlistToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast.error('Please sign in to add to wishlist');
      return;
    }

    try {
      if (isWishlisted) {
        await removeFromWishlist(user.uid, product.id);
        toast.success('Removed from wishlist');
      } else {
        await addToWishlist(user.uid, product.id);
        toast.success('Added to wishlist');
      }
      onWishlistToggle?.();
    } catch (error) {
      toast.error('Failed to update wishlist');
    }
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          )}
          {product.isSale && discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              -{discountPercentage}%
            </span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Low Stock
            </span>
          )}
          {product.stock === 0 && (
            <span className="bg-gray-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
          />
        </button>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
          <Link to={`/products/${product.id}`}>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-luxury-gold transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                    }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviewCount})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          fullWidth
          size="sm"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;