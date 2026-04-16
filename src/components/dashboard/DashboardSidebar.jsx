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
  X
} from "lucide-react"
import { usePathname } from "next/navigation"

export default function DashboardSidebar({ isOpen, onClose }) {
  const pathname = usePathname()

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
    { icon: Package, label: "Products", href: "/dashboard/products", badge: "12" },
    { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders", badge: "8" },
    { icon: Users, label: "Customers", href: "/dashboard/customers" },
    { icon: Tag, label: "Collections", href: "/dashboard/collections" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: FileText, label: "Reports", href: "/dashboard/reports" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <aside className={`
      fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 text-white transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">FF</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Fayyaz Fabrics</h2>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`
              flex items-center justify-between px-4 py-3 rounded-lg transition-colors
              ${item.active 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      {/* Back to Store */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
        <a
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Back to Store</span>
        </a>
      </div>
    </aside>
  )
}
