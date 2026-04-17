"use client"

import { useState } from "react"
import { 
  Menu, 
  TrendingUp, 
  TrendingDown,
  Users, 
  ShoppingCart, 
  DollarSign,
  Eye,
  MousePointer,
  Clock,
  MapPin,
  Smartphone,
  Monitor,
  Tablet
} from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardSidebar from "@/components/dashboard/DashboardSidebar"
import RevenueChart from "@/components/dashboard/analytics/RevenueChart"
import TrafficSources from "@/components/dashboard/analytics/TrafficSources"
import TopPages from "@/components/dashboard/analytics/TopPages"
import DeviceBreakdown from "@/components/dashboard/analytics/DeviceBreakdown"
import GeographicData from "@/components/dashboard/analytics/GeographicData"
import ConversionFunnel from "@/components/dashboard/analytics/ConversionFunnel"

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dateRange, setDateRange] = useState("7days")

  // Mock analytics data
  const metrics = [
    {
      label: "Total Visitors",
      value: "12,458",
      change: 15.3,
      trend: "up",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      label: "Page Views",
      value: "45,892",
      change: 8.7,
      trend: "up",
      icon: Eye,
      color: "bg-purple-500"
    },
    {
      label: "Avg. Session Duration",
      value: "3m 24s",
      change: -2.1,
      trend: "down",
      icon: Clock,
      color: "bg-orange-500"
    },
    {
      label: "Bounce Rate",
      value: "42.3%",
      change: -5.2,
      trend: "up",
      icon: MousePointer,
      color: "bg-green-500"
    },
    {
      label: "Total Revenue",
      value: "Rs. 2,45,000",
      change: 12.5,
      trend: "up",
      icon: DollarSign,
      color: "bg-emerald-500"
    },
    {
      label: "Conversion Rate",
      value: "4.8%",
      change: 2.1,
      trend: "up",
      icon: TrendingUp,
      color: "bg-pink-500"
    },
    {
      label: "Cart Abandonment",
      value: "68.5%",
      change: -3.4,
      trend: "up",
      icon: ShoppingCart,
      color: "bg-red-500"
    },
    {
      label: "Avg. Order Value",
      value: "Rs. 8,450",
      change: 6.8,
      trend: "up",
      icon: DollarSign,
      color: "bg-indigo-500"
    }
  ]

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
                <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
                <p className="text-sm text-gray-500">Detailed insights and performance metrics</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
              >
                <option value="today">Today</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="year">This Year</option>
              </select>
              <Button variant="outline" size="sm">
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-8">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                    metric.trend === "up" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-red-100 text-red-700"
                  }`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {Math.abs(metric.change)}%
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                  <p className="text-sm text-gray-500">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Chart */}
          <div className="mb-8">
            <RevenueChart />
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <TrafficSources />
            <DeviceBreakdown />
          </div>

          {/* Conversion Funnel */}
          <div className="mb-8">
            <ConversionFunnel />
          </div>

          {/* Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TopPages />
            </div>
            <GeographicData />
          </div>
        </div>
      </div>
    </div>
  )
}
