"use client"

import { useState } from "react"
import { Menu, Search, Eye, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardSidebar from "@/components/dashboard/DashboardSidebar"

export default function OrdersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState("all")

  const orders = [
    {
      id: "#ORD-001",
      customer: "Ahmed Khan",
      email: "ahmed@example.com",
      products: 2,
      total: "Rs. 13,000",
      status: "completed",
      date: "2024-04-15",
      time: "10:30 AM"
    },
    {
      id: "#ORD-002",
      customer: "Fatima Ali",
      email: "fatima@example.com",
      products: 1,
      total: "Rs. 3,150",
      status: "processing",
      date: "2024-04-15",
      time: "09:15 AM"
    },
    {
      id: "#ORD-003",
      customer: "Hassan Raza",
      email: "hassan@example.com",
      products: 3,
      total: "Rs. 19,500",
      status: "pending",
      date: "2024-04-14",
      time: "04:20 PM"
    },
    {
      id: "#ORD-004",
      customer: "Ayesha Malik",
      email: "ayesha@example.com",
      products: 1,
      total: "Rs. 3,200",
      status: "completed",
      date: "2024-04-14",
      time: "02:45 PM"
    },
    {
      id: "#ORD-005",
      customer: "Bilal Ahmed",
      email: "bilal@example.com",
      products: 2,
      total: "Rs. 10,400",
      status: "processing",
      date: "2024-04-13",
      time: "11:30 AM"
    },
    {
      id: "#ORD-006",
      customer: "Sara Khan",
      email: "sara@example.com",
      products: 1,
      total: "Rs. 6,500",
      status: "cancelled",
      date: "2024-04-13",
      time: "09:00 AM"
    },
    {
      id: "#ORD-007",
      customer: "Usman Ali",
      email: "usman@example.com",
      products: 4,
      total: "Rs. 26,000",
      status: "completed",
      date: "2024-04-12",
      time: "03:15 PM"
    },
    {
      id: "#ORD-008",
      customer: "Zainab Hassan",
      email: "zainab@example.com",
      products: 2,
      total: "Rs. 9,300",
      status: "pending",
      date: "2024-04-12",
      time: "01:20 PM"
    }
  ]

  const filteredOrders = filterStatus === "all" 
    ? orders 
    : orders.filter(order => order.status === filterStatus)

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700"
      case "processing":
        return "bg-blue-100 text-blue-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "cancelled":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
                <p className="text-sm text-gray-500">{filteredOrders.length} total orders</p>
              </div>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-1">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-1">Completed</p>
              <p className="text-2xl font-bold text-green-600">
                {orders.filter(o => o.status === "completed").length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-1">Processing</p>
              <p className="text-2xl font-bold text-blue-600">
                {orders.filter(o => o.status === "processing").length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-1">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {orders.filter(o => o.status === "pending").length}
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="processing">Processing</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Products
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-900">{order.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{order.products} items</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-900">{order.total}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm text-gray-900">{order.date}</p>
                          <p className="text-xs text-gray-500">{order.time}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
