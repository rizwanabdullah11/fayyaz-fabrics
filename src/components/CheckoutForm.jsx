import { useState } from "react"
import { User, Mail, Phone, MapPin, Building2, CreditCard } from "lucide-react"

export default function CheckoutForm({ onSubmit, isSubmitting }) {
    const [formData, setFormData] = useState({
        // Customer Information
        fullName: "",
        email: "",
        phone: "",
        // Delivery Address
        address: "",
        city: "",
        postalCode: "",
        // Payment Method
        paymentMethod: "cod",
        // Additional Notes
        notes: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        // Customer Information Validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required"
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required"
        } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number"
        }

        // Delivery Address Validation
        if (!formData.address.trim()) {
            newErrors.address = "Delivery address is required"
        }
        if (!formData.city.trim()) {
            newErrors.city = "City is required"
        }
        if (!formData.postalCode.trim()) {
            newErrors.postalCode = "Postal code is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            onSubmit(formData)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Customer Information Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Customer Information</h2>
                </div>

                <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.fullName
                                        ? "border-red-500 focus:ring-red-200"
                                        : "border-gray-300 focus:ring-gray-200"
                                    }`}
                                placeholder="Enter your full name"
                            />
                        </div>
                        {errors.fullName && (
                            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email
                                        ? "border-red-500 focus:ring-red-200"
                                        : "border-gray-300 focus:ring-gray-200"
                                    }`}
                                placeholder="your.email@example.com"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.phone
                                        ? "border-red-500 focus:ring-red-200"
                                        : "border-gray-300 focus:ring-gray-200"
                                    }`}
                                placeholder="+92 300 1234567"
                            />
                        </div>
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Delivery Address Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Delivery Address</h2>
                </div>

                <div className="space-y-4">
                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                            Street Address *
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="3"
                                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${errors.address
                                        ? "border-red-500 focus:ring-red-200"
                                        : "border-gray-300 focus:ring-gray-200"
                                    }`}
                                placeholder="House/Flat number, Street name, Area"
                            />
                        </div>
                        {errors.address && (
                            <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* City */}
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                City *
                            </label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.city
                                            ? "border-red-500 focus:ring-red-200"
                                            : "border-gray-300 focus:ring-gray-200"
                                        }`}
                                    placeholder="Karachi, Lahore, etc."
                                />
                            </div>
                            {errors.city && (
                                <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                            )}
                        </div>

                        {/* Postal Code */}
                        <div>
                            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                                Postal Code *
                            </label>
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.postalCode
                                        ? "border-red-500 focus:ring-red-200"
                                        : "border-gray-300 focus:ring-gray-200"
                                    }`}
                                placeholder="75500"
                            />
                            {errors.postalCode && (
                                <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Method Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
                </div>

                <div className="space-y-3">
                    {/* Cash on Delivery */}
                    <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.paymentMethod === "cod"
                            ? "border-gray-800 bg-gray-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={formData.paymentMethod === "cod"}
                            onChange={handleChange}
                            className="w-5 h-5 text-gray-800 focus:ring-gray-800"
                        />
                        <div className="flex-1">
                            <div className="font-semibold text-gray-900">Cash on Delivery</div>
                            <div className="text-sm text-gray-600">Pay when you receive your order</div>
                        </div>
                    </label>

                    {/* Bank Transfer */}
                    <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.paymentMethod === "bank"
                            ? "border-gray-800 bg-gray-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="bank"
                            checked={formData.paymentMethod === "bank"}
                            onChange={handleChange}
                            className="w-5 h-5 text-gray-800 focus:ring-gray-800"
                        />
                        <div className="flex-1">
                            <div className="font-semibold text-gray-900">Bank Transfer</div>
                            <div className="text-sm text-gray-600">Transfer to our bank account</div>
                        </div>
                    </label>
                </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Notes (Optional)</h3>
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all resize-none"
                    placeholder="Any special instructions for your order..."
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                    </span>
                ) : (
                    "Place Order via WhatsApp"
                )}
            </button>
        </form>
    )
}
