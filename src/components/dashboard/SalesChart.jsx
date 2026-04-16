"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"

export default function SalesChart() {
  const [period, setPeriod] = useState("week")

  // Mock data - replace with real data
  const data = {
    week: [
      { day: "Mon", sales: 45000 },
      { day: "Tue", sales: 52000 },
      { day: "Wed", sales: 38000 },
      { day: "Thu", sales: 65000 },
      { day: "Fri", sales: 72000 },
      { day: "Sat", sales: 85000 },
      { day: "Sun", sales: 68000 }
    ],
    month: [
      { day: "Week 1", sales: 180000 },
      { day: "Week 2", sales: 220000 },
      { day: "Week 3", sales: 195000 },
      { day: "Week 4", sales: 245000 }
    ]
  }

  const currentData = data[period]
  const maxSales = Math.max(...currentData.map(d => d.sales))

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Sales Overview</h2>
          <p className="text-sm text-gray-500">Track your sales performance</p>
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
        </div>
      </div>

      {/* Simple Bar Chart */}
      <div className="space-y-4">
        {currentData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">{item.day}</span>
              <span className="font-bold text-gray-900">
                Rs. {item.sales.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${(item.sales / maxSales) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Sales</p>
            <p className="text-2xl font-bold text-gray-900">
              Rs. {currentData.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">+12.5%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
