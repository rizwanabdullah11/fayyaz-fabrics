import { Search, Heart, User, Phone, Mail } from "lucide-react"
import ShoppingCartSheet from "./ShoppingCart"
import { Button } from "@/components/ui/button"

export default function Header({ cart, updateQuantity, removeFromCart }) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+923001234567" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">+92 300 1234567</span>
              </a>
              <a href="mailto:info@fayyazfabrics.com" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline">info@fayyazfabrics.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden md:inline">🎉 Free Shipping on Orders Over Rs. 5,000</span>
              <span className="md:hidden">Free Shipping Rs. 5,000+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                FAYYAZ FABRICS
              </h1>
              <p className="text-xs text-gray-500">Premium Quality Since 1990</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for fabrics, brands, or categories..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="sm" className="relative hidden sm:flex">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>

            <ShoppingCartSheet
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search fabrics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border-2 border-gray-200 focus:border-gray-400 focus:outline-none text-sm transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            <a href="#" className="px-4 py-2 rounded-full bg-gray-800 text-white font-semibold text-sm whitespace-nowrap">
              New Arrivals
            </a>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-white text-gray-700 font-medium text-sm whitespace-nowrap transition-colors">
              Boski Collection
            </a>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-white text-gray-700 font-medium text-sm whitespace-nowrap transition-colors">
              Wool Fabrics
            </a>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-white text-gray-700 font-medium text-sm whitespace-nowrap transition-colors">
              Cotton Range
            </a>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-white text-gray-700 font-medium text-sm whitespace-nowrap transition-colors">
              Designer Collection
            </a>
            <a href="#" className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm whitespace-nowrap">
              🔥 Sale
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}