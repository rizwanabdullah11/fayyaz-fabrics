import { ShoppingBag, Edit2 } from "lucide-react"
import Link from "next/link"

export default function OrderSummary({ cart, subtotal, shipping, total }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 sticky top-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
                <Link
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
                >
                    <Edit2 className="w-4 h-4" />
                    Edit Cart
                </Link>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                {cart.length === 0 ? (
                    <div className="text-center py-8">
                        <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">Your cart is empty</p>
                    </div>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex gap-4 pb-4 border-b last:border-b-0">
                            {/* Product Image */}
                            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
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
                                <p className="text-xs text-gray-500 mb-2">
                                    Qty: {item.quantity}
                                </p>
                                <p className="font-semibold text-gray-900">
                                    Rs.{(item.price * item.quantity).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Price Breakdown */}
            {cart.length > 0 && (
                <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium">Rs.{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="font-medium">
                            {shipping === 0 ? "Free" : `Rs.${shipping.toLocaleString()}`}
                        </span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t">
                        <span>Total</span>
                        <span>Rs.{total.toLocaleString()}</span>
                    </div>
                </div>
            )}

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600">✓</span>
                    </div>
                    <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600">🚚</span>
                    </div>
                    <span>Free shipping on orders over Rs.5,000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600">💯</span>
                    </div>
                    <span>30-day satisfaction guarantee</span>
                </div>
            </div>
        </div>
    )
}
