"use client"

import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings,
  BarChart3,
  Tag,
  FileText,
  Home,
  X,
  ChevronRight,
  Sparkles
} from "lucide-react"
import { usePathname } from "next/navigation"

export default function DashboardSidebar({ isOpen, onClose }) {
  const pathname = usePathname()

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: pathname === "/dashboard" },
    { icon: Package, label: "Products", href: "/dashboard/products", badge: "12", active: pathname === "/dashboard/products" },
    { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders", badge: "8", active: pathname === "/dashboard/orders" },
    { icon: Users, label: "Customers", href: "/dashboard/customers", active: pathname === "/dashboard/customers" },
    { icon: Tag, label: "Collections", href: "/dashboard/collections", active: pathname === "/dashboard/collections" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics", active: pathname === "/dashboard/analytics" },
    { icon: FileText, label: "Reports", href: "/dashboard/reports", active: pathname === "/dashboard/reports" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", active: pathname === "/dashboard/settings" },
  ]

  return (
    <aside className={`
      fixed top-0 left-0 z-50 h-screen w-72 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white transition-transform duration-300 shadow-2xl
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 pointer-events-none" />
      
      {/* Header */}
      <div className="relative flex items-center justify-between p-6 border-b border-gray-800/50">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/50">
            <span className="text-white font-bold text-xl">FF</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse" />
          </div>
          <div>
            <h2 className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Fayyaz Fabrics
            </h2>
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Admin Panel
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="relative p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`
              group relative flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200
              ${item.active 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-[1.02]' 
                : 'text-gray-300 hover:bg-gray-800/50 hover:text-white hover:translate-x-1'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div className={`
                w-9 h-9 rounded-lg flex items-center justify-center transition-all
                ${item.active 
                  ? 'bg-white/20' 
                  : 'bg-gray-800/50 group-hover:bg-gray-700/50'
                }
              `}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold shadow-lg">
                  {item.badge}
                </span>
              )}
              {item.active && (
                <ChevronRight className="w-4 h-4 animate-pulse" />
              )}
            </div>
            {item.active && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 blur-xl" />
            )}
          </a>
        ))}
      </nav>

      {/* Back to Store */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <a
          href="/"
          className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:text-white transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-gray-700/50 transition-all">
              <Home className="w-5 h-5" />
            </div>
            <span className="font-medium">Back to Store</span>
          </div>
          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </aside>
  )
}
