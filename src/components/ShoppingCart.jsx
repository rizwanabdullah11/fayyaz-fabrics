import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, X, Edit2, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"
import { products } from "@/data/products"

export default function ShoppingCartSheet({ cart, updateQuantity, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Get recommended products (exclude items already in cart)
  const cartProductIds = cart.map(item => item.id)
  const recommendedProducts = products.filter(p => !cartProductIds.includes(p.id)).slice(0, 6)

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % Math.max(1, recommendedProducts.length - 1))
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + Math.max(1, recommendedProducts.length - 1)) % Math.max(1, recommendedProducts.length - 1))
  }

  const handleWhatsAppCheckout = () => {
    const message = `Hi! I'd like to order:\n\n${cart.map(item =>
      `${item.name}\nQuantity: ${item.quantity}\nPrice: Rs.${item.price.toLocaleString()}`
    ).join('\n\n')}\n\nTotal: Rs.${total.toLocaleString()}`

    const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="w-4 h-4" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#5C4033] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full p-0 bg-white">
        {/* Header */}
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-medium text-gray-800">Your cart</h2>
            {itemCount > 0 && (
              <span className="bg-gray-800 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b last:border-b-0">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">
                      {item.name}
                    </h3>

                    {/* Variant Info */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-500">
                        {item.colors?.[0] || 'Standard'} / {item.weight || 'Regular'}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit2 className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="font-semibold text-gray-900 mb-3">
                      Rs.{item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls and Remove */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 py-1 text-sm font-medium border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-gray-600 hover:text-gray-900 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* You may also like section */}
              {recommendedProducts.length > 0 && (
                <div className="pt-6 mt-6 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">You may also like</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={prevSlide}
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                        disabled={recommendedProducts.length <= 2}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                        disabled={recommendedProducts.length <= 2}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Carousel */}
                  <div className="relative overflow-hidden">
                    <div
                      className="flex gap-3 transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${carouselIndex * 50}%)` }}
                    >
                      {recommendedProducts.map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-[calc(50%-6px)]">
                          <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-32 object-cover"
                            />
                            <div className="p-3">
                              <h4 className="text-xs font-medium text-gray-900 mb-1 truncate">
                                {product.name}
                              </h4>
                              <p className="text-sm font-semibold text-gray-900">
                                Rs.{product.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="flex justify-center gap-1 mt-4">
                    {Array.from({ length: Math.max(1, recommendedProducts.length - 1) }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${idx === carouselIndex
                            ? 'w-6 bg-gray-800'
                            : 'w-1.5 bg-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {cart.length > 0 && (
          <div className="border-t bg-white px-6 py-4">
            <div className="mb-4">
              <button className="w-full flex items-center justify-center gap-2 py-1 text-gray-600 hover:text-gray-900 transition-colors">
                <ShoppingBag className="w-4 h-4" />
                <span className="text-sm">View shopping bag</span>
              </button>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 transition-colors shadow-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-medium">Check out</span>
              <span className="font-medium">• Rs.{total.toLocaleString()}</span>
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
              title="Order via WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}