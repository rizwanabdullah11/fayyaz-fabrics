import { ArrowUp, ArrowDown, Minus, TrendingUp } from "lucide-react"

export default function StatsCard({ value, change, trend, label, icon: Icon, color }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      {/* Animated background gradient */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${color.replace('bg-', 'bg-gradient-to-br from-')}`} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className={`relative w-14 h-14 ${color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
            {/* Glow effect */}
            <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
          </div>
          {trend !== "neutral" && (
            <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${
              trend === "up" 
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
                : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
            }`}>
              {trend === "up" ? (
                <ArrowUp className="w-3.5 h-3.5" />
              ) : (
                <ArrowDown className="w-3.5 h-3.5" />
              )}
              {Math.abs(change)}%
            </div>
          )}
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all">
            {value}
          </p>
          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
            {label}
          </p>
        </div>
        
        {/* Trend indicator line */}
        {trend !== "neutral" && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <TrendingUp className={`w-3.5 h-3.5 ${trend === "up" ? "text-green-500" : "text-red-500"}`} />
              <span>
                {trend === "up" ? "Increased" : "Decreased"} from last period
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
