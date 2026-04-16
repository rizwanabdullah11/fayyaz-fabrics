import { Eye, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RecentOrders() {
  const orders = [
    {
      id: "#ORD-001",
      customer: "Ahmed Khan",
      product: "ASAL DOUBLE GHORA BOSKI",
      amount: "Rs. 6,500",
      status: "completed",
      date: "2 hours ago"
    },
    {
      id: "#ORD-002",
      customer: "Fatima Ali",
      product: "IMPORTED DESIGNER WOOL",
      amount: "Rs. 3,150",
      status: "processing",
      date: "5 hours ago"
    },
    {
      id: "#ORD-003",
      customer: "Hassan Raza",
      product: "ROYAL BOSKI PREMIUM",
      amount: "Rs. 6,500",
      status: "pending",
      date: "1 day ago"
    },
    {
      id: "#ORD-004",
      customer: "Ayesha Malik",
      product: "KHAADI PREMIUM COTTON",
      amount: "Rs. 3,200",
      status: "completed",
      date: "1 day ago"
    },
    {
      id: "#ORD-005",
      customer: "Bilal Ahmed",
      product: "SAPPHIRE SILK BLEND",
      amount: "Rs. 5,200",
      status: "processing",
      date: "2 days ago"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700"
      case "processing":
        return "bg-blue-100 text-blue-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold text-gray-900">{order.id}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{order.customer}</p>
              <p className="text-xs text-gray-500 truncate max-w-xs">{order.product}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900 mb-1">{order.amount}</p>
              <p className="text-xs text-gray-500">{order.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
