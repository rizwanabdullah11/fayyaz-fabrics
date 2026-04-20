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

      <div className="lg:pl-72">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 py-4 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Analytics Dashboard
                </h1>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Real-time insights and performance metrics
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm font-medium bg-white hover:border-indigo-300 transition-all"
              >
                <option value="today">📅 Today</option>
                <option value="7days">📊 Last 7 Days</option>
                <option value="30days">📈 Last 30 Days</option>
                <option value="90days">📉 Last 90 Days</option>
                <option value="year">🗓️ This Year</option>
              </select>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-8 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 min-h-screen">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${metric.color.replace('bg-', 'bg-gradient-to-br from-')}`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`relative w-14 h-14 ${metric.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <metric.icon className="w-7 h-7 text-white" />
                      <div className={`absolute inset-0 ${metric.color} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${
                      metric.trend === "up" 
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
                        : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
                    }`}>
                      {metric.trend === "up" ? (
                        <TrendingUp className="w-3.5 h-3.5" />
                      ) : (
                        <TrendingDown className="w-3.5 h-3.5" />
                      )}
                      {Math.abs(metric.change)}%
                    </div>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all">
                      {metric.value}
                    </p>
                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                      {metric.label}
                    </p>
                  </div>
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
