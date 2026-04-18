import { Plus, Upload, Download, Settings, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuickActions() {
  const actions = [
    {
      icon: Plus,
      label: "Add Product",
      description: "Create new product",
      color: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-600 hover:to-purple-700"
    },
    {
      icon: Upload,
      label: "Import Data",
      description: "Bulk import products",
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-600 hover:to-emerald-700"
    },
    {
      icon: Download,
      label: "Export Report",
      description: "Download sales data",
      color: "from-blue-500 to-cyan-600",
      hoverColor: "hover:from-blue-600 hover:to-cyan-700"
    },
    {
      icon: Settings,
      label: "Settings",
      description: "Configure store",
      color: "from-gray-500 to-slate-600",
      hoverColor: "hover:from-gray-600 hover:to-slate-700"
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
      </div>
      
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`group relative w-full flex items-center gap-4 p-4 bg-gradient-to-r ${action.color} ${action.hoverColor} text-white rounded-xl transition-all hover:shadow-xl hover:scale-[1.02] overflow-hidden`}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <div className="relative w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <action.icon className="w-6 h-6" />
            </div>
            <div className="relative text-left flex-1">
              <p className="font-bold text-base">{action.label}</p>
              <p className="text-xs text-white/90">{action.description}</p>
            </div>
            <div className="relative opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl" />
          <div className="relative">
            <p className="text-sm font-bold text-indigo-900 mb-1 flex items-center gap-2">
              <span className="text-lg">💡</span>
              Pro Tip
            </p>
            <p className="text-xs text-indigo-700">
              Use bulk import to add multiple products at once and save time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
