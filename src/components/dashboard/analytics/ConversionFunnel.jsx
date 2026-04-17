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
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Conversion Funnel</h2>
          <p className="text-sm text-gray-500">Track user journey from visit to purchase</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Overall Conversion</p>
          <p className="text-2xl font-bold text-green-600">4.8%</p>
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="space-y-4">
        {funnelSteps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{step.name}</p>
                  <p className="text-xs text-gray-500">
                    {step.count.toLocaleString()} users ({step.percentage}%)
                  </p>
                </div>
              </div>
              {index > 0 && (
                <div className="text-right">
                  <p className="text-sm font-semibold text-red-600">
                    -{step.dropOff}% drop-off
                  </p>
                </div>
              )}
            </div>
            
            {/* Funnel Bar */}
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-lg h-12 overflow-hidden">
                <div
                  className={`${step.color} h-full rounded-lg transition-all duration-500 flex items-center justify-between px-4`}
                  style={{ width: `${step.percentage}%` }}
                >
                  {step.percentage > 15 && (
                    <>
                      <span className="text-white font-bold text-sm">
                        {step.count.toLocaleString()}
                      </span>
                      <span className="text-white font-bold text-sm">
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
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Insights */}
      <div className="mt-6 pt-6 border-t border-gray-200 grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-red-900 mb-1">
            ⚠️ Highest Drop-off
          </p>
          <p className="text-xs text-red-700">
            45.3% users abandon after viewing products. Consider improving product pages.
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-green-900 mb-1">
            ✅ Strong Point
          </p>
          <p className="text-xs text-green-700">
            71.6% visitors view products. Your homepage is effectively driving engagement.
          </p>
        </div>
      </div>
    </div>
  )
}
