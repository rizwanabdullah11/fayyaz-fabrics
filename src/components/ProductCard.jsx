import { ShoppingCart, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ProductCard({ product, onAddToCart }) {
  const router = useRouter()
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div 
      onClick={() => router.push(`/products/${product.id}`)}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200 hover:scale-[1.02] cursor-pointer"
    >
      {/* Sale Badge */}
      {product.sale && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
          {discountPercentage}% OFF
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setIsFavorite(!isFavorite)
        }}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
        />
      </button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
        {/* Skeleton while image loads */}
        <div className={`absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-100 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } group-hover:scale-110`}
        />

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <Button
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart(product)
            }}
            aria-label={`Quick add ${product.name} to cart`}
            className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold px-6 py-2 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-md">
            {product.brand}
          </span>
          <span className="text-gray-500">{product.category}</span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-gray-800 text-sm line-clamp-2 min-h-[2.5rem] group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 0)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                  }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Description */}
        {product.description && (
          <p className="text-xs text-gray-600 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price Section */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-indigo-600">
                Rs.{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  Rs.{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.weight && (
              <span className="text-xs text-gray-500">{product.weight}</span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart(product)
            }}
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full px-4 shadow-lg hover:shadow-xl transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>

        {/* Stock Status */}
        {product.inStock ? (
          <div className="flex items-center gap-1.5 text-xs text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            In Stock
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-red-600">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            Out of Stock
          </div>
        )}
      </div>
    </div>
  )
}