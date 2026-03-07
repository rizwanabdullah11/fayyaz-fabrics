"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { useCart } from "@/hooks/useCart"
import { categories } from "@/data/categories"
import { getProductsByCategory } from "@/data/products"
import { ArrowLeft, SlidersHorizontal, Grid3x3, List } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CollectionPage() {
  const params = useParams()
  const router = useRouter()
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart()
  
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const category = categories.find((cat) => cat.slug === params.slug)
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Collection Not Found</h1>
            <Button onClick={() => router.push("/collections")} className="bg-indigo-600 hover:bg-indigo-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Collections
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  let products = getProductsByCategory(category.name)

  // Apply price filter
  if (priceRange !== "all") {
    products = products.filter((product) => {
      if (priceRange === "under-3000") return product.price < 3000
      if (priceRange === "3000-5000") return product.price >= 3000 && product.price <= 5000
      if (priceRange === "5000-7000") return product.price >= 5000 && product.price <= 7000
      if (priceRange === "above-7000") return product.price > 7000
      return true
    })
  }

  // Apply sorting
  products = [...products].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0)
    if (sortBy === "newest") return b.id - a.id
    return 0
  })

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <button onClick={() => router.push("/")} className="hover:text-indigo-600 transition-colors">
                Home
              </button>
              <span>/</span>
              <button onClick={() => router.push("/collections")} className="hover:text-indigo-600 transition-colors">
                Collections
              </button>
              <span>/</span>
              <span className="text-gray-800 font-medium">{category.name}</span>
            </div>
          </div>
        </div>

        {/* Collection Header */}
        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 py-12 md:py-16">
            <Button
              onClick={() => router.back()}
              variant="ghost"
              className="mb-4 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="max-w-3xl">
              {category.featured && (
                <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                  Featured Collection
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
              <p className="text-lg text-gray-300 mb-6">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Products */}
        <div className="container mx-auto px-4 py-8">
          {/* Filter Bar */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="font-semibold">{products.length} Products</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Price Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-sm"
                >
                  <option value="all">All Prices</option>
                  <option value="under-3000">Under Rs. 3,000</option>
                  <option value="3000-5000">Rs. 3,000 - 5,000</option>
                  <option value="5000-7000">Rs. 5,000 - 7,000</option>
                  <option value="above-7000">Above Rs. 7,000</option>
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>

                {/* View Mode */}
                <div className="flex items-center gap-1 border border-gray-300 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid"
                        ? "bg-indigo-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list"
                        ? "bg-indigo-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters</p>
              <Button
                onClick={() => {
                  setPriceRange("all")
                  setSortBy("featured")
                }}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Collection Features */}
        {category.features && category.features.length > 0 && (
          <div className="bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4 py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Why Choose {category.name}?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
