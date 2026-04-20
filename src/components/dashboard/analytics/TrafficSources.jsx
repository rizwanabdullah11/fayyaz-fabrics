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
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1">
            Traffic Sources
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="font-bold text-indigo-600">{totalVisitors.toLocaleString()}</span>
            total visitors
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {sources.map((source, index) => (
          <div key={index} className="group space-y-2 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`relative w-12 h-12 ${source.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <source.icon className="w-6 h-6 text-white" />
                  <div className={`absolute inset-0 ${source.color} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{source.name}</p>
                  <p className="text-xs text-gray-500 font-medium">
                    {source.visitors.toLocaleString()} visitors
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900">{source.percentage}%</p>
                <p className={`text-xs font-bold flex items-center gap-1 justify-end ${
                  source.change >= 0 ? "text-green-600" : "text-red-600"
                }`}>
                  {source.change >= 0 ? "↗" : "↘"}
                  {Math.abs(source.change)}%
                </p>
              </div>
            </div>
            <div className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
              <div
                className={`${source.color} h-full rounded-full transition-all duration-700 shadow-lg`}
                style={{ width: `${source.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl" />
          <div className="relative">
            <p className="text-sm font-bold text-indigo-900 mb-1 flex items-center gap-2">
              <span className="text-lg">💡</span>
              AI Insight
            </p>
            <p className="text-xs text-indigo-700 font-medium">
              Organic search is your top traffic source. Consider investing more in SEO to maintain growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
