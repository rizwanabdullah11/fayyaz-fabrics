"use client"

import { useState } from "react"
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  DollarSign,
  Eye,
  ShoppingBag,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardSidebar from "@/components/dashboard/DashboardSidebar"
import StatsCard from "@/components/dashboard/StatsCard"
import RecentOrders from "@/components/dashboard/RecentOrders"
import TopProducts from "@/components/dashboard/TopProducts"
import SalesChart from "@/components/dashboard/SalesChart"
import QuickActions from "@/components/dashboard/QuickActions"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock data - replace with real data from your backend
  const stats = {
    totalRevenue: {
      value: "Rs. 2,45,000",
      change: 12.5,
      trend: "up",
      label: "Total Revenue",
      icon: DollarSign,
      color: "bg-green-500"
    },
    totalOrders: {
      value: "156",
      change: 8.2,
      trend: "up",
      label: "Total Orders",
      icon: ShoppingCart,
      color: "bg-blue-500"
    },
    totalProducts: {
      value: "12",
      change: 0,
      trend: "neutral",
      label: "Total Products",
      icon: Package,
      color: "bg-purple-500"
    },
    totalCustomers: {
      value: "89",
      change: 15.3,
      trend: "up",
      label: "Total Customers",
      icon: Users,
      color: "bg-orange-500"
    },
    pageViews: {
      value: "3,245",
      change: -3.2,
      trend: "down",
      label: "Page Views",
      icon: Eye,
      color: "bg-indigo-500"
    },
    conversionRate: {
      value: "4.8%",
      change: 2.1,
      trend: "up",
      label: "Conversion Rate",
      icon: TrendingUp,
      color: "bg-pink-500"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Welcome back, Admin
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="relative hover:border-indigo-500 hover:text-indigo-600 transition-all">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Notifications</span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </Button>
              <div className="relative group">
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  A
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 lg:p-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Object.values(stats).map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Charts & Tables Row */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Sales Chart - Takes 2 columns */}
            <div className="lg:col-span-2">
              <SalesChart />
            </div>

            {/* Quick Actions */}
            <div>
              <QuickActions />
            </div>
          </div>

          {/* Recent Orders & Top Products */}
          <div className="grid lg:grid-cols-2 gap-6">
            <RecentOrders />
            <TopProducts />
          </div>
        </div>
      </div>
    </div>
  )
}
