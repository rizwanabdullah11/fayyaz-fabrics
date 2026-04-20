import { MapPin } from "lucide-react"

export default function GeographicData() {
  const locations = [
    {
      country: "Pakistan",
      city: "Karachi",
      users: 4520,
      percentage: 36.3,
      flag: "🇵🇰"
    },
    {
      country: "Pakistan",
      city: "Lahore",
      users: 3280,
      percentage: 26.3,
      flag: "🇵🇰"
    },
    {
      country: "Pakistan",
      city: "Islamabad",
      users: 2150,
      percentage: 17.2,
      flag: "🇵🇰"
    },
    {
      country: "Pakistan",
      city: "Faisalabad",
      users: 1420,
      percentage: 11.4,
      flag: "🇵🇰"
    },
    {
      country: "Pakistan",
      city: "Multan",
      users: 890,
      percentage: 7.1,
      flag: "🇵🇰"
    },
    {
      country: "UAE",
      city: "Dubai",
      users: 180,
      percentage: 1.4,
      flag: "🇦🇪"
    },
    {
      country: "UK",
      city: "London",
      users: 18,
      percentage: 0.3,
      flag: "🇬🇧"
    }
  ]

  const totalUsers = locations.reduce((sum, loc) => sum + loc.users, 0)

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1">
            Geographic Data
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="font-bold text-blue-600">{totalUsers.toLocaleString()}</span>
            total users
          </p>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
          <MapPin className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-3">
        {locations.map((location, index) => (
          <div key={index} className="group space-y-2 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{location.flag}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">{location.city}</p>
                  <p className="text-xs text-gray-500 font-medium">{location.country}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{location.users.toLocaleString()}</p>
                <p className="text-xs text-gray-500 font-medium">{location.percentage}%</p>
              </div>
            </div>
            <div className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-700 shadow-lg"
                style={{ width: `${location.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl" />
          <div className="relative">
            <p className="text-sm font-bold text-blue-900 mb-1 flex items-center gap-2">
              <span className="text-lg">🌍</span>
              Top Market
            </p>
            <p className="text-xs text-blue-700 font-medium">
              Karachi accounts for 36.3% of your total traffic. Consider localized marketing campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
