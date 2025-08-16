"use client"
import { useState, useEffect } from "react"
import { Search, Menu, X, Phone, Mail, MapPin, Sparkles, ChevronDown, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShoppingCartSheet from "./ShoppingCart"
import { Badge } from "@/components/ui/badge"

export default function Header({ cart, updateQuantity, removeFromCart }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    {
      name: "Premium Boski",
      items: [
        { name: "ASAL DOUBLE GHORA BOSKI", discount: "40% OFF", badge: "Hot" },
        { name: "ITALIAN BOSKI", discount: "40% OFF" },
        { name: "SHAHI BOSKI", discount: "40% OFF" },
        { name: "PREMIUM ROYAL BOSKI", discount: "54% OFF", badge: "New Year" }
      ]
    },
    {
      name: "Cotton Collection",
      items: [
        { name: "DYNASTY COTTON BY GUL AHMED", discount: "40% OFF", badge: "Bestseller" },
        { name: "LOPAZ EXECUTIVE", discount: "40% OFF" }
      ]
    },
    {
      name: "Wool Selection",
      items: [
        { name: "IMPORTED DESIGNER WOOL", discount: "40% OFF", badge: "Premium" },
        { name: "RAHAT WOOL BY GRACE", discount: "40% OFF" }
      ]
    }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 text-sm animate-fadeIn">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span className="font-medium">WhatsApp: 03068013329</span>
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Rail Bazar, Faisalabad</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-semibold">Free Shipping on Orders Above Rs.5000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-display font-bold text-gradient animate-slideInLeft">
                  FAYYAZ FABRICS
                </h1>
                <span className="text-xs text-muted-foreground font-medium tracking-wider">
                  Premium Quality Since 1985
                </span>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for Boski, Cotton, Wool..."
                  className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-full focus:border-primary focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full gradient-primary text-white"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex hover:bg-gray-100 rounded-full"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5 lg:hidden" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 rounded-full"
              >
                <User className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 rounded-full relative"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
              <ShoppingCartSheet 
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>

          {/* Mobile Search */}
          {isSearchOpen && (
            <div className="lg:hidden pb-4 animate-slideInLeft">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-full focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block border-t bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-8 py-3">
              <a href="#" className="font-medium text-gray-700 hover:text-primary transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="font-medium text-gray-700 hover:text-primary transition-colors flex items-center gap-1">
                    {category.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border animate-scaleIn">
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-3 text-gradient">{category.name}</h3>
                        <div className="space-y-2">
                          {category.items.map((item, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div>
                                <p className="font-medium text-gray-800 group-hover:text-primary">
                                  {item.name}
                                </p>
                                <p className="text-sm text-red-600 font-semibold">{item.discount}</p>
                              </div>
                              {item.badge && (
                                <Badge className="bg-gradient-primary text-white">
                                  {item.badge}
                                </Badge>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <a href="#" className="font-medium text-gray-700 hover:text-primary transition-colors relative group">
                Special Offers
                <Badge className="absolute -top-3 -right-8 bg-red-500 text-white text-xs">
                  Sale
                </Badge>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="font-medium text-gray-700 hover:text-primary transition-colors relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="font-medium text-gray-700 hover:text-primary transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[120px] bg-white z-40 overflow-y-auto animate-slideInLeft">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                <a href="#" className="block py-3 px-4 rounded-lg hover:bg-gray-50 font-medium">Home</a>
                {categories.map((category, index) => (
                  <div key={index} className="border-t pt-4">
                    <h3 className="font-semibold text-lg mb-3 text-gradient">{category.name}</h3>
                    <div className="space-y-2 pl-4">
                      {category.items.map((item, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block py-2 text-gray-700 hover:text-primary"
                        >
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-red-600">{item.discount}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <a href="#" className="block py-3 px-4 rounded-lg hover:bg-gray-50 font-medium">
                  Special Offers
                  <Badge className="ml-2 bg-red-500 text-white">Sale</Badge>
                </a>
                <a href="#" className="block py-3 px-4 rounded-lg hover:bg-gray-50 font-medium">About Us</a>
                <a href="#" className="block py-3 px-4 rounded-lg hover:bg-gray-50 font-medium">Contact</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
