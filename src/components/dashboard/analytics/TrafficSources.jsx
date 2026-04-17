import { Globe, Search, Share2, Mail, ExternalLink } from "lucide-react"

export default function TrafficSources() {
  const sources = [
    {
      name: "Organic Search",
      visitors: 5420,
      percentage: 43.5,
      change: 12.3,
      icon: Search,
      color: "bg-green-500"
    },
    {
      name: "Direct",
      visitors: 3280,
      percentage: 26.3,
      change: 8.7,
      icon: Globe,
      color: "bg-blue-500"
    },
    {
      name: "Social Media",
      visitors: 2150,
      percentage: 17.2,
      change: 15.4,
      icon: Share2,
      color: "bg-purple-500"
    },
    {
      name: "Email",
      visitors: 980,
      percentage: 7.9,
      change: -2.1,
      icon: Mail,
      color: "bg-orange-500"
    },
    {
      name: "Referral",
      visitors: 628,
      percentage: 5.1,
      change: 5.6,
      icon: ExternalLink,
      color: "bg-pink-500"
    }
  ]

  const totalVisitors = sources.reduce((sum, source) => sum + source.visitors, 0)

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Traffic Sources</h2>
          <p className="text-sm text-gray-500">{totalVisitors.toLocaleString()} total visitors</p>
        </div>
      </div>

      <div className="space-y-4">
        {sources.map((source, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${source.color} rounded-lg flex items-center justify-center`}>
                  <source.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{source.name}</p>
                  <p className="text-xs text-gray-500">
                    {source.visitors.toLocaleString()} visitors
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{source.percentage}%</p>
                <p className={`text-xs font-semibold ${
                  source.change >= 0 ? "text-green-600" : "text-red-600"
                }`}>
                  {source.change >= 0 ? "+" : ""}{source.change}%
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className={`${source.color} h-full rounded-full transition-all duration-500`}
                style={{ width: `${source.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-indigo-900 mb-1">
            💡 Insight
          </p>
          <p className="text-xs text-indigo-700">
            Organic search is your top traffic source. Consider investing more in SEO to maintain growth.
          </p>
        </div>
      </div>
    </div>
  )
}
