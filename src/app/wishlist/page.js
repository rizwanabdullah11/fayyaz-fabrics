"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { useCart } from "@/hooks/useCart"
import { useWishlist } from "@/contexts/WishlistContext"
import { Heart, ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart()
  const { wishlist, count } = useWishlist()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <main className="flex-1">
        {/* Banner Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span>/</span>
                  <span className="text-white font-medium">Wishlist</span>
                </nav>
                <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                  My Wishlist <Heart className="w-8 h-8 fill-pink-500 text-pink-500" />
                </h1>
                <p className="text-gray-400">
                  {count === 0 
                    ? "You haven't added anything to your wishlist yet." 
                    : `You have ${count} item${count === 1 ? '' : 's'} in your wishlist.`}
                </p>
              </div>
              <Link
                href="/"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Wishlist Content */}
        <div className="container mx-auto px-4 py-12">
          {count > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Heart className="w-12 h-12 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Save your favorite items here to keep track of what you love. 
                They'll be waiting for you whenever you're ready to shop.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="w-5 h-5" />
                Explore Collections
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
