import { Users, Eye, ShoppingCart, CreditCard, CheckCircle } from "lucide-react"

export default function ConversionFunnel() {
  const funnelSteps = [
    {
      name: "Visitors",
      count: 12458,
      percentage: 100,
      icon: Users,
      color: "bg-blue-500",
      dropOff: 0
    },
    {
      name: "Product Views",
      count: 8920,
      percentage: 71.6,
      icon: Eye,
      color: "bg-purple-500",
      dropOff: 28.4
    },
    {
      name: "Add to Cart",
      count: 3280,
      percentage: 26.3,
      icon: ShoppingCart,
      color: "bg-orange-500",
      dropOff: 45.3
    },
    {
      name: "Checkout Started",
      count: 1890,
      percentage: 15.2,
      icon: CreditCard,
      color: "bg-yellow-500",
      dropOff: 11.1
    },
    {
      name: "Orders Completed",
      count: 598,
      percentage: 4.8,
      icon: CheckCircle,
      color: "bg-green-500",
      dropOff: 10.4
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1">
            Conversion Funnel
          </h2>
          <p className="text-sm text-gray-500">Track user journey from visit to purchase</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 font-medium">Overall Conversion</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            4.8%
          </p>
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="space-y-4">
        {funnelSteps.map((step, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`relative w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-6 h-6 text-white" />
                  <div className={`absolute inset-0 ${step.color} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{step.name}</p>
                  <p className="text-xs text-gray-500 font-medium">
                    {step.count.toLocaleString()} users ({step.percentage}%)
                  </p>
                </div>
              </div>
              {index > 0 && (
                <div className="text-right">
                  <p className="text-sm font-bold text-red-600 flex items-center gap-1">
                    <span className="text-lg">↓</span>
                    {step.dropOff}%
                  </p>
                </div>
              )}
            </div>
            
            {/* Funnel Bar */}
            <div className="relative">
              <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl h-14 overflow-hidden shadow-inner">
                <div
                  className={`${step.color} h-full rounded-xl transition-all duration-700 flex items-center justify-between px-4 shadow-lg`}
                  style={{ width: `${step.percentage}%` }}
                >
                  {step.percentage > 15 && (
                    <>
                      <span className="text-white font-bold text-sm drop-shadow-lg">
                        {step.count.toLocaleString()}
                      </span>
                      <span className="text-white font-bold text-sm drop-shadow-lg">
                        {step.percentage}%
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Arrow between steps */}
            {index < funnelSteps.length - 1 && (
              <div className="flex justify-center my-2">
                <div className="w-8 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Insights */}
      <div className="mt-6 pt-6 border-t border-gray-200 grid md:grid-cols-2 gap-4">
        <div className="relative bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 rounded-xl p-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-2xl" />
          <div className="relative">
            <p className="text-sm font-bold text-red-900 mb-1 flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              Highest Drop-off
            </p>
            <p className="text-xs text-red-700 font-medium">
              45.3% users abandon after viewing products. Consider improving product pages.
            </p>
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl p-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl" />
          <div className="relative">
            <p className="text-sm font-bold text-green-900 mb-1 flex items-center gap-2">
              <span className="text-lg">✅</span>
              Strong Point
            </p>
            <p className="text-xs text-green-700 font-medium">
              71.6% visitors view products. Your homepage is effectively driving engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
