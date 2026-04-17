"use client"

import { useState } from "react"
import { TrendingUp, DollarSign } from "lucide-react"

export default function RevenueChart() {
  const [period, setPeriod] = useState("month")

  const data = {
    week: [
      { label: "Mon", revenue: 28000, orders: 12 },
      { label: "Tue", revenue: 35000, orders: 15 },
      { label: "Wed", revenue: 22000, orders: 9 },
      { label: "Thu", revenue: 42000, orders: 18 },
      { label: "Fri", revenue: 48000, orders: 21 },
      { label: "Sat", revenue: 55000, orders: 24 },
      { label: "Sun", revenue: 38000, orders: 16 }
    ],
    month: [
      { label: "Week 1", revenue: 125000, orders: 54 },
      { label: "Week 2", revenue: 168000, orders: 72 },
      { label: "Week 3", revenue: 142000, orders: 61 },
      { label: "Week 4", revenue: 195000, orders: 84 }
    ],
    year: [
      { label: "Jan", revenue: 420000, orders: 180 },
      { label: "Feb", revenue: 380000, orders: 165 },
      { label: "Mar", revenue: 520000, orders: 225 },
      { label: "Apr", revenue: 490000, orders: 210 },
      { label: "May", revenue: 580000, orders: 250 },
      { label: "Jun", revenue: 620000, orders: 268 },
      { label: "Jul", revenue: 550000, orders: 238 },
      { label: "Aug", revenue: 590000, orders: 255 },
      { label: "Sep", revenue: 640000, orders: 276 },
      { label: "Oct", revenue: 680000, orders: 294 },
      { label: "Nov", revenue: 720000, orders: 311 },
      { label: "Dec", revenue: 850000, orders: 367 }
    ]
  }

  const currentData = data[period]
  const maxRevenue = Math.max(...currentData.map(d => d.revenue))
  const totalRevenue = currentData.reduce((sum, item) => sum + item.revenue, 0)
  const totalOrders = currentData.reduce((sum, item) => sum + item.orders, 0)

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Revenue Overview</h2>
          <p className="text-sm text-gray-500">Track your revenue and order trends</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setPeriod("week")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              period === "week"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setPeriod("month")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              period === "month"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setPeriod("year")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              period === "year"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Year
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-3 mb-6">
        {currentData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">{item.label}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">{item.orders} orders</span>
                <span className="font-bold text-gray-900">
                  Rs. {item.revenue.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
              >
                {(item.revenue / maxRevenue) * 100 > 20 && (
                  <span className="text-xs font-semibold text-white">
                    {Math.round((item.revenue / maxRevenue) * 100)}%
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <p className="text-sm text-gray-600">Total Revenue</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            Rs. {totalRevenue.toLocaleString()}
          </p>
          <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mt-1">
            <TrendingUp className="w-4 h-4" />
            <span>+12.5%</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
          <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold mt-1">
            <TrendingUp className="w-4 h-4" />
            <span>+8.2%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
