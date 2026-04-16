import { Plus, Upload, Download, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuickActions() {
  const actions = [
    {
      icon: Plus,
      label: "Add Product",
      description: "Create new product",
      color: "bg-indigo-500 hover:bg-indigo-600"
    },
    {
      icon: Upload,
      label: "Import Data",
      description: "Bulk import products",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Download,
      label: "Export Report",
      description: "Download sales data",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Settings,
      label: "Settings",
      description: "Configure store",
      color: "bg-gray-500 hover:bg-gray-600"
    }
  ]

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
      
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-4 p-4 ${action.color} text-white rounded-lg transition-all hover:shadow-lg`}
          >
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <action.icon className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-semibold">{action.label}</p>
              <p className="text-xs text-white/80">{action.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-indigo-900 mb-1">
            💡 Pro Tip
          </p>
          <p className="text-xs text-indigo-700">
            Use bulk import to add multiple products at once and save time.
          </p>
        </div>
      </div>
    </div>
  )
}
