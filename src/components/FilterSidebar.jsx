"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FilterSidebar({ 
  isOpen, 
  onClose, 
  priceRange, 
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
  inStockOnly,
  setInStockOnly,
  onSale,
  setOnSale
}) {
  const brands = ["Premium", "Royal", "Designer", "Gul Ahmed", "Khaadi", "Nishat", "Alkaram", "Sapphire", "Lopaz", "Grace"]

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setPriceRange("all")
    setSelectedBrands([])
    setInStockOnly(false)
    setOnSale(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed lg:sticky top-0 right-0 lg:right-auto h-screen w-80 bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-2">
              {[
                { value: "all", label: "All Prices" },
                { value: "under-3000", label: "Under Rs. 3,000" },
                { value: "3000-5000", label: "Rs. 3,000 - 5,000" },
                { value: "5000-7000", label: "Rs. 5,000 - 7,000" },
                { value: "above-7000", label: "Above Rs. 7,000" }
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    value={option.value}
                    checked={priceRange === option.value}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Brands</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">In Stock Only</span>
            </label>
          </div>

          {/* Sale Items */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Special Offers</h3>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={onSale}
                onChange={(e) => setOnSale(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">On Sale</span>
            </label>
          </div>

          {/* Clear Filters */}
          <Button
            onClick={clearFilters}
            variant="outline"
            className="w-full border-2 border-gray-300 hover:border-indigo-600 hover:text-indigo-600"
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </>
  )
}
