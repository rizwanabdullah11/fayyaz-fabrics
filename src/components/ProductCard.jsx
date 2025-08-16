"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Eye, Star, TrendingUp, Sparkles } from "lucide-react"

export default function ProductCard({ product, onAddToCart }) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const rating = 4.5 // You can make this dynamic based on product data

  return (
    <Card 
      className="group relative overflow-hidden border-0 shadow-lg hover-lift transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        {/* Loading Skeleton */}
        {imageLoading && (
          <div className="absolute inset-0 skeleton"></div>
        )}
        
        {/* Main Image */}
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoading(false)}
        />

        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.sale && discountPercentage > 0 && (
            <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 animate-pulse-glow">
              <TrendingUp className="w-3 h-3 mr-1" />
              {discountPercentage}% OFF
            </Badge>
          )}
          {product.isNew && (
            <Badge className="bg-gradient-primary text-white px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              New
            </Badge>
          )}
          {product.bestseller && (
            <Badge className="bg-gradient-gold text-white px-3 py-1">
              Bestseller
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isHovered ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`} 
            />
          </button>
          <button
            className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isHovered ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Quick Add to Cart - Appears on Hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <Button 
            className="w-full gradient-primary text-white font-semibold hover-scale"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Quick Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${
                i < Math.floor(rating) 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : i < rating 
                    ? 'fill-yellow-400/50 text-yellow-400' 
                    : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-bold text-2xl text-primary">
            Rs.{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              Rs.{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Features/Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">Premium Quality</span>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">Fast Delivery</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full border-2 hover:border-primary hover:bg-primary/5 transition-all"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            className="w-full bg-gradient-dark text-white hover:opacity-90 transition-opacity"
          >
            Buy Now - COD Available
          </Button>
        </div>

        {/* Stock Status */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-green-600 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            In Stock
          </span>
          <span className="text-xs text-muted-foreground">
            Free Shipping
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
