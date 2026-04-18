import { Eye, MoreVertical, Package, Clock, CheckCircle } from "lucide-react"
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
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
      case "processing":
        return "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
      case "pending":
        return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-3 h-3" />
      case "processing":
        return <Clock className="w-3 h-3 animate-spin" />
      case "pending":
        return <Package className="w-3 h-3" />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Recent Orders</h2>
          <p className="text-sm text-gray-500">Latest customer purchases</p>
        </div>
        <Button variant="ghost" size="sm" className="hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
          View All
        </Button>
      </div>

      <div className="space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="group relative flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:shadow-md overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
            
            <div className="relative flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {order.id}
                </span>
                <span className={`text-xs px-3 py-1 rounded-full font-bold shadow-sm flex items-center gap-1 ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  {order.status}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-1">{order.customer}</p>
              <p className="text-xs text-gray-500 truncate max-w-xs">{order.product}</p>
            </div>
            <div className="relative text-right">
              <p className="font-bold text-lg text-gray-900 mb-1">{order.amount}</p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {order.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
