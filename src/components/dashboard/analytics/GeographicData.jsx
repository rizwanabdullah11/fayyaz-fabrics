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
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Geographic Data</h2>
          <p className="text-sm text-gray-500">{totalUsers.toLocaleString()} total users</p>
        </div>
        <MapPin className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-3">
        {locations.map((location, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{location.flag}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{location.city}</p>
                  <p className="text-xs text-gray-500">{location.country}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{location.users.toLocaleString()}</p>
                <p className="text-xs text-gray-500">{location.percentage}%</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${location.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-900 mb-1">
            🌍 Top Market
          </p>
          <p className="text-xs text-blue-700">
            Karachi accounts for 36.3% of your total traffic. Consider localized marketing campaigns.
          </p>
        </div>
      </div>
    </div>
  )
}
