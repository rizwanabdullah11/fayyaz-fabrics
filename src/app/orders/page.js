import { ShoppingBag } from "lucide-react"
import OrderCard from "@/components/OrderCard"

// Mock data for orders
const mockOrders = [
    {
        id: "ORD-2023-001",
        date: "December 8, 2025",
        status: "Processing",
        total: 12500,
        items: [
            { name: "Premium Boski Fabric", quantity: 2, price: 4500 },
            { name: "Cotton Shalwar Kameez", quantity: 1, price: 3500 }
        ]
    },
    {
        id: "ORD-2023-002",
        date: "November 25, 2025",
        status: "Delivered",
        total: 8500,
        items: [
            { name: "Wool Blend Fabric", quantity: 2, price: 4250 }
        ]
    },
    {
        id: "ORD-2023-003",
        date: "November 10, 2025",
        status: "Delivered",
        total: 15000,
        items: [
            { name: "Designer Collection Suit", quantity: 1, price: 15000 }
        ]
    }
]

export default function OrdersPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
                <div className="flex items-center gap-3 max-w-2xl mx-auto">
                    <ShoppingBag className="w-6 h-6 text-gray-800" />
                    <h1 className="text-xl font-bold text-gray-900">My Orders</h1>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 py-6">
                {mockOrders.length > 0 ? (
                    <div className="space-y-4">
                        {mockOrders.map((order) => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <ShoppingBag className="w-8 h-8 text-gray-400" />
                        </div>
                        <h2 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h2>
                        <p className="text-gray-500 mb-6">Start shopping to see your orders here.</p>
                        <a
                            href="/"
                            className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                        >
                            Start Shopping
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
