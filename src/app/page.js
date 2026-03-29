"use client"

import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import Footer from "@/components/Footer"
import { useCart } from "@/hooks/useCart"
import { products, getFeaturedProducts } from "@/data/products"
import { categories } from "@/data/categories"

export default function Home() {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart()
  const featuredProducts = getFeaturedProducts()

  const brands = [
    { name: "Premium", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" },
    { name: "Luxury", logo: "https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=200&h=200&fit=crop" },
    { name: "Classic", logo: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&h=200&fit=crop" },
    { name: "Elite", logo: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=200&h=200&fit=crop" },
    { name: "Royal", logo: "https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=200&h=200&fit=crop" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
          </div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold">🎉 Festive Sale - Up to 50% OFF</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Premium Quality Fabrics
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  Explore our exclusive collection of premium fabrics from top brands. Quality guaranteed since 1990.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg">
                    Shop Now
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
                    View Collections
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=600&h=600&fit=crop"
                  alt="Premium Fabrics"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shop by Category */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Collection</h2>
              <p className="text-gray-600">Explore our curated fabric collections</p>
            </div>
            <button
              onClick={() => window.location.href = '/collections'}
              className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm flex items-center gap-1"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.slice(0, 4).map((category) => (
              <div
                key={category.id}
                onClick={() => window.location.href = `/collections/${category.slug}`}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {category.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} Products</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Brands */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Brands</h2>
              <p className="text-gray-600">Discover our premium brand partners</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group cursor-pointer bg-white rounded-full aspect-square overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
            <p className="text-gray-600">Each piece is carefully selected to enhance your unique style</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>

        {/* All Products Section */}
        <div className="container mx-auto px-4 py-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">All Products</h2>
              <p className="text-gray-600">Uncover what&apos;s hot in our complete collection</p>
            </div>
            <div className="flex items-center gap-3">
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:border-gray-400 focus:outline-none text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over Rs. 5,000</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Premium Quality</h3>
                <p className="text-sm text-gray-600">100% authentic fabrics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Secure Payment</h3>
                <p className="text-sm text-gray-600">Safe & encrypted</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💯</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Satisfaction</h3>
                <p className="text-sm text-gray-600">30-day guarantee</p>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter Section */}
        <div className="bg-indigo-900 overflow-hidden relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-indigo-200 text-lg mb-8">
                Subscribe to our newsletter and be the first to know about new arrivals, 
                exclusive collections, and special offers.
              </p>
              <form 
                className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-2xl"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing! 🎉");
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-xl bg-white/95 text-gray-900 border-none focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="mt-6 text-indigo-300/60 text-sm">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}