"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import CheckoutForm from "@/components/CheckoutForm"
import OrderSummary from "@/components/OrderSummary"
import { useCart } from "@/hooks/useCart"

export default function CheckoutPage() {
    const router = useRouter()
    const { cart, getCartTotal, clearCart } = useCart()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Handle hydration
    useEffect(() => {
        setMounted(true)
    }, [])

    // Calculate totals
    const subtotal = getCartTotal()
    const shipping = subtotal >= 5000 ? 0 : 250 // Free shipping over Rs.5000
    const total = subtotal + shipping

    const handleCheckout = (formData) => {
        setIsSubmitting(true)

        // Prepare order message for WhatsApp
        const orderDetails = cart.map(item =>
            `${item.name}\nQty: ${item.quantity}\nPrice: Rs.${(item.price * item.quantity).toLocaleString()}`
        ).join('\n\n')

        const message = `🛍️ New Order from Fayyaz Fabrics\n\n` +
            `📋 ORDER DETAILS:\n${orderDetails}\n\n` +
            `💰 PAYMENT SUMMARY:\n` +
            `Subtotal: Rs.${subtotal.toLocaleString()}\n` +
            `Shipping: ${shipping === 0 ? 'Free' : `Rs.${shipping.toLocaleString()}`}\n` +
            `Total: Rs.${total.toLocaleString()}\n\n` +
            `👤 CUSTOMER INFORMATION:\n` +
            `Name: ${formData.fullName}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n\n` +
            `📍 DELIVERY ADDRESS:\n` +
            `${formData.address}\n` +
            `${formData.city}, ${formData.postalCode}\n\n` +
            `💳 PAYMENT METHOD: ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Bank Transfer'}\n` +
            `${formData.notes ? `\n📝 NOTES:\n${formData.notes}` : ''}`

        // Replace with your actual WhatsApp business number
        const whatsappNumber = "923001234567" // Update this with your number
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

        // Open WhatsApp
        window.open(whatsappUrl, '_blank')

        // Clear cart after a short delay
        setTimeout(() => {
            clearCart()
            setIsSubmitting(false)
            // Optionally redirect to a thank you page or home
            // router.push('/')
        }, 1000)
    }

    // Show loading state during hydration
    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading checkout...</p>
                </div>
            </div>
        )
    }

    // Redirect if cart is empty
    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="text-center max-w-md">
                    <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
                    <p className="text-gray-600 mb-8">
                        Add some products to your cart before proceeding to checkout.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Shop</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
                        <div className="w-24"></div> {/* Spacer for centering */}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Checkout Form - 2 columns */}
                    <div className="lg:col-span-2">
                        <CheckoutForm onSubmit={handleCheckout} isSubmitting={isSubmitting} />
                    </div>

                    {/* Order Summary - 1 column */}
                    <div className="lg:col-span-1">
                        <OrderSummary
                            cart={cart}
                            subtotal={subtotal}
                            shipping={shipping}
                            total={total}
                        />
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="container mx-auto px-4 pb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <p className="text-sm text-blue-800">
                        🔒 Your information is secure and will only be used to process your order
                    </p>
                </div>
            </div>
        </div>
    )
}
