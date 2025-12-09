"use client"

import { useState } from "react"
import { X, ChevronDown, ChevronRight, Home, ShoppingBag, Tag, Heart, User, Settings, Sparkles, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar({ isOpen, onClose }) {
    const [expandedSections, setExpandedSections] = useState({
        categories: true,
        priceRange: false,
        brands: false
    })

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    const categories = [
        { name: "All Products", icon: ShoppingBag, count: 156 },
        { name: "Boski Fabrics", icon: Tag, count: 45 },
        { name: "Wool Collection", icon: Tag, count: 38 },
        { name: "Cotton Fabrics", icon: Tag, count: 52 },
        { name: "Designer Collection", icon: Sparkles, count: 21 }
    ]

    const priceRanges = [
        { label: "Under Rs. 3,000", count: 42 },
        { label: "Rs. 3,000 - Rs. 5,000", count: 58 },
        { label: "Rs. 5,000 - Rs. 7,000", count: 34 },
        { label: "Above Rs. 7,000", count: 22 }
    ]

    const brands = [
        { name: "Gul Ahmed", count: 28 },
        { name: "Khaadi", count: 24 },
        { name: "Nishat", count: 19 },
        { name: "Alkaram", count: 16 },
        { name: "Sapphire", count: 14 }
    ]

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed lg:sticky top-0 left-0 h-screen w-[280px] 
          bg-white
          border-r border-gray-200 shadow-lg z-50 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                {/* Header */}
                <div className="relative p-6 border-b border-gray-200 bg-gray-800">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                                <Filter className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-white">
                                Filters
                            </h2>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="lg:hidden hover:bg-white/20 rounded-full text-white"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-[calc(100vh-88px)] p-5 space-y-5">

                    {/* Quick Links */}
                    <div className="space-y-2">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
                            Quick Links
                        </h3>
                        <nav className="space-y-2">
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 text-white transition-all hover:bg-gray-700 group">
                                <Home className="w-4 h-4" />
                                <span className="font-semibold">Home</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all group">
                                <Heart className="w-4 h-4 text-gray-600" />
                                <span className="font-semibold text-gray-700">Favorites</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all group">
                                <User className="w-4 h-4 text-gray-600" />
                                <span className="font-semibold text-gray-700">My Account</span>
                            </a>
                            <a href="/orders" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all group">
                                <ShoppingBag className="w-4 h-4 text-gray-600" />
                                <span className="font-semibold text-gray-700">My Orders</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all group">
                                <Settings className="w-4 h-4 text-gray-600" />
                                <span className="font-semibold text-gray-700">Settings</span>
                            </a>
                        </nav>
                    </div>

                    {/* Categories Section */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                        <button
                            onClick={() => toggleSection('categories')}
                            className="flex items-center justify-between w-full mb-3 hover:text-gray-800 transition-colors group"
                        >
                            <h3 className="text-sm font-bold text-gray-800">Categories</h3>
                            {expandedSections.categories ? (
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            ) : (
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                        </button>

                        {expandedSections.categories && (
                            <div className="space-y-1.5">
                                {categories.map((category, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <category.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-all" />
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                                {category.name}
                                            </span>
                                        </div>
                                        <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                                            {category.count}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Price Range Section */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                        <button
                            onClick={() => toggleSection('priceRange')}
                            className="flex items-center justify-between w-full mb-3 hover:text-gray-800 transition-colors group"
                        >
                            <h3 className="text-sm font-bold text-gray-800">Price Range</h3>
                            {expandedSections.priceRange ? (
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            ) : (
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                        </button>

                        {expandedSections.priceRange && (
                            <div className="space-y-1.5">
                                {priceRanges.map((range, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500 focus:ring-offset-0 cursor-pointer"
                                            />
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                                {range.label}
                                            </span>
                                        </div>
                                        <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                                            {range.count}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Brands Section */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                        <button
                            onClick={() => toggleSection('brands')}
                            className="flex items-center justify-between w-full mb-3 hover:text-gray-800 transition-colors group"
                        >
                            <h3 className="text-sm font-bold text-gray-800">Brands</h3>
                            {expandedSections.brands ? (
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            ) : (
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                        </button>

                        {expandedSections.brands && (
                            <div className="space-y-1.5">
                                {brands.map((brand, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500 focus:ring-offset-0 cursor-pointer"
                                            />
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                                {brand.name}
                                            </span>
                                        </div>
                                        <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                                            {brand.count}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Clear Filters Button */}
                    <Button
                        variant="outline"
                        className="w-full border-2 border-gray-200 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all rounded-xl py-6 font-bold shadow-sm hover:shadow-md"
                    >
                        Clear All Filters
                    </Button>

                </div>
            </aside>
        </>
    )
}
