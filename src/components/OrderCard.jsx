import { Package, ChevronRight } from "lucide-react"

export default function OrderCard({ order }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Package className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-900">Order #{order.id}</h3>
                        <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                'bg-yellow-100 text-yellow-700'
                        }`}>
                        {order.status}
                    </span>
                    <span className="font-semibold text-gray-900">Rs. {order.total.toLocaleString()}</span>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
                <div className="space-y-3">
                    {order.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">
                                {item.quantity}x {item.name}
                            </span>
                            <span className="text-gray-900 font-medium">Rs. {item.price.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
